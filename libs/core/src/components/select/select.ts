import { localized } from '@lit/localize'
import { property, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { tokens } from '../../tokens.style'
import { observeLightDOM } from '../../utils/decorators/observe-light-dom'
import { watch } from '../../utils/decorators/watch'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './select.styles'

import '../../primitives/form-control-header'
import '../../primitives/form-control-footer'
import '../../primitives/field-base/field-base'
import '../icon/icons/chevron-bottom'
import '../button/button'

@localized()
class Select<ValueT = string> extends GdsFormControlElement<ValueT | ValueT[]> {
  static styles = [tokens, styles]

  /**
   * The supporting text displayed between the label and the field.
   * This text provides additional context or information to the user.
   */
  @property({ attribute: 'supporting-text' })
  supportingText = ''

  /**
   * Controls the font-size of texts and height of the field.
   */
  @property({ type: String })
  size: 'large' | 'small' = 'large'

  /**
   * Reference to the native select element.
   */
  @query('select')
  selectElement?: HTMLSelectElement

  /**
   * The value of the select element.
   * This property can be either a single value or an array of values, depending on the multiple attribute of the select element.
   *
   * Only use this property, and not the value property of the wrapped select element.
   */
  @property()
  get value() {
    return this._internalValue as ValueT
  }
  set value(value: ValueT | undefined) {
    this.#isValueInitialized || (this.#isValueInitialized = true)
    this._internalValue = value
  }
  #isValueInitialized = false

  /**
   * Returns the display value for the select component.
   * For single-select mode, this is the selected option text.
   * For multi-select mode, this is a comma-separated list of selected option texts.
   */
  get displayValue() {
    if (!this.selectElement) return ''
    return Array.from(this.selectElement.selectedOptions)
      .map((o) => o.text)
      .join(', ')
  }

  /**
   * Wheter the select element is in multiple selection mode.
   */
  get multiple() {
    return this.selectElement?.multiple ?? false
  }

  @query('.select-container')
  private _elSelectContainer?: HTMLDivElement

  connectedCallback(): void {
    super.connectedCallback()
    this.updateComplete.then(() => {
      this._captureDOM()
      this._handleValueChange()
    })
  }

  render() {
    const CLASSES = {
      multiple: this.multiple,
    }

    return html`
      <gds-form-control-header class="size-${this.size}">
        <label for="select" slot="label" id="label-text">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
      </gds-form-control-header>

      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        .multiline=${this.multiple}
        align-items=${this.multiple ? 'flex-start' : 'center'}
        class=${classMap(CLASSES)}
      >
        ${this.#renderFieldContents()}
      </gds-field-base>

      <gds-form-control-footer
        class="size-${this.size}"
        .validationMessage=${this.invalid &&
        (this.errorMessage || this.validationMessage)}
      ></gds-form-control-footer>
    `
  }

  @observeLightDOM({
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true,
  })
  private _captureDOM() {
    if (
      !this.shadowRoot ||
      this.childNodes.length === 0 ||
      !this._elSelectContainer
    )
      return

    const cloned = Array.from(this.children)
      .filter((n) => n.nodeName === 'SELECT')
      .map((node: Node) => {
        const clone = node.cloneNode(true)
        clone.addEventListener('change', this.#handleSelectElementChange)
        clone.addEventListener('input', this.#handleSelectElementChange)
        ;(clone as HTMLElement).setAttribute(
          'aria-describedby',
          'supporting-text extended-supporting-text sub-label message',
        )
        ;(clone as HTMLElement).setAttribute('id', 'select')
        if (!this.#isValueInitialized)
          this.value = (clone as HTMLSelectElement).value as ValueT
        return clone
      })

    this._elSelectContainer.replaceChildren(...cloned)
  }

  /**
   * Handles form reset events by selecting the first option.
   */
  override formResetCallback(): void {
    if (!this.selectElement) return

    if (this.selectElement.multiple) {
      Array.from(this.selectElement.options).forEach((option) => {
        option.selected = false
      })
      this.value = [] as ValueT
    } else {
      const firstOption = this.selectElement.options[0]
      if (firstOption) {
        this.value = firstOption.value as any
        this.selectElement.value = firstOption.value
      }
    }
  }

  override _getValidityAnchor() {
    return this.selectElement as HTMLElement
  }

  #handleSelectElementChange = (e: Event) => {
    e.stopPropagation()
    this.#setValueFromSelectElement()

    requestAnimationFrame(() => {
      this.dispatchEvent(
        new CustomEvent('input', {
          detail: { value: this.value },
          bubbles: true,
          composed: true,
        }),
      )

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: this.value },
          bubbles: true,
          composed: true,
        }),
      )
    })
  }

  #setValueFromSelectElement() {
    if (!this.selectElement) return

    if (this.multiple) {
      const selectedOptions = Array.from(this.selectElement.selectedOptions)
      this.value = selectedOptions.map((o) => o.value) as ValueT
    } else {
      this.value = this.selectElement.value as ValueT
    }
  }

  @watch('value')
  private _handleValueChange() {
    if (!this.selectElement) return

    if (this.multiple) {
      const valArr = (this.value as string[]) || []
      Array.from(this.selectElement.options).forEach((option) => {
        option.selected = valArr.includes(option.value)
      })
    } else this.selectElement.value = this.value as string

    this.requestUpdate()
  }

  /**
   * Renders the main content area of the select field.
   * Composes the field from various sub-elements.
   */
  #renderFieldContents() {
    const elements = [
      this.#renderSlotLead(),
      this.#renderMainSlot(),
      this.#renderMainLabel(),
      this.#renderChevron(),
    ]

    return elements.map((element) => html`${element}`)
  }

  /**
   * Renders the leading slot content if provided.
   */
  #renderSlotLead() {
    return html`<slot name="lead" slot="lead"></slot>`
  }

  /**
   * Renders the main label text for single-select mode.
   * Shows either selected option text or placeholder.
   */
  #renderMainLabel() {
    if (!this.multiple) {
      return html`<label id="placeholder">${this.displayValue}</label>`
    }
  }

  /**
   * Renders the main slot and select container.
   * The select container is where the native select is moved to.
   */
  #renderMainSlot() {
    return html`<div class="select-container"></div>`
  }

  /**
   * Renders the chevron icon button for single-select mode.
   * Provides visual indication of dropdown functionality.
   */
  #renderChevron() {
    if (!this.multiple) {
      return html` <gds-icon-chevron-bottom></gds-icon-chevron-bottom> `
    }
  }
}

/**
 * @element gds-select
 * @status beta
 *
 * `gds-select` is a wrapper component for the native select element.
 *
 * Usage Example:
 * ```html
 * <gds-select label="Choose an option" supporting-text="Select one item">
 *   <select>
 *     <option value="1">Option 1</option>
 *     <option value="2">Option 2</option>
 *   </select>
 * </gds-select>
 * ```
 *
 * The wrapped select element will be cloned into the component's shadow DOM. Therefore, event listeners should only be added on the host
 * element, and not on the enclosed select element. Also, state should also be handled only through the host.
 * Setting value or selected props on the select element will not work as expected.
 *
 * @fires {CustomEvent} change - Fired when the selection changes with detail: { value: string }
 * @fires {CustomEvent} input - Fired on input with detail: { value: string }
 *
 * @slot - Default slot for the native select element
 * @slot lead - Slot for leading content (e.g., icons)
 */
@gdsCustomElement('gds-select')
export class GdsSelect extends withLayoutChildProps(
  withSizeXProps(withMarginProps(Select)),
) {}
