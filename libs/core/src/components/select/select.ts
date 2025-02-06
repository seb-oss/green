import { localized } from '@lit/localize'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators/watch'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './select.styles'

import '../../primitives/form-control-header'
import '../../primitives/form-control-footer'
import '../../primitives/field-base/field-base'
import '../icon/icons/chevron-bottom'
import '../button/button'

/**
 * @element gds-select
 * @status beta
 *
 * A custom select component that extends GdsFormControlElement to provide enhanced
 * select/dropdown functionality with proper value propagation and event handling.
 *
 * Key Features:
 * - Supports both single and multiple selections
 * - Handles value propagation correctly between the native select and custom component
 * - Manages proper event bubbling and custom event dispatch
 * - Provides visual feedback through a customizable UI
 * - Supports form validation
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
 * Event Handling:
 * The component stops propagation of native select events and dispatches its own
 * custom events after ensuring internal state is properly updated. This prevents
 * race conditions and ensures consistent behavior.
 *
 * Accessibility:
 * - Maintains ARIA labels and descriptions
 * - Preserves native select keyboard navigation
 * - Provides proper focus management
 *
 * @fires {CustomEvent} change - Fired when the selection changes with detail: { value: string }
 * @fires {CustomEvent} input - Fired on input with detail: { value: string }
 *
 * @slot - Default slot for the native select element
 * @slot lead - Slot for leading content (e.g., icons)
 */
@gdsCustomElement('gds-select')
@localized()
export class GdsSelect extends GdsFormControlElement<string> {
  static styles = [tokens, styles]

  /**
   * The supporting text displayed between the label and the select.
   * This text provides additional context or information to the user.
   */
  @property({ attribute: 'supporting-text' })
  supportingText = ''

  /**
   * The size of the select element.
   * This property can be either 'large' or 'small', and it determines the size of the select element.
   */
  @property({ type: String })
  size: 'large' | 'small' = 'large'

  /**
   * Indicates whether the select element allows multiple selections.
   * When set to true, the select component will enable multiline options,
   * allowing users to select multiple items at once.
   */
  @state()
  private multiline = false

  /**
   * Internal state tracking the currently selected value(s).
   * Can be either a single string or array of strings for multiple select.
   */
  @state()
  private selectedValue: string | string[] = ''

  /**
   * Reference to the native select element.
   */
  @query('select')
  selectElement!: HTMLSelectElement

  /*
   * Value is not initialized here in purpose so the external
   * prop or native select can determine the initial value
   */
  constructor() {
    super()
  }

  /**
   * Gets the initial value from a select element, handling both single and multiple selections.
   */
  private getInitialSelectValue(select: HTMLSelectElement): string {
    if (select.multiple) {
      const selectedOptions = Array.from(select.selectedOptions).map(
        (option) => option.value,
      )
      return selectedOptions.join(',')
    }
    return select.value
  }

  @watch('value')
  firstUpdated() {
    const slotElement = this.shadowRoot?.querySelector('slot:not([name])')
    if (slotElement) {
      const assignedNodes = (slotElement as HTMLSlotElement).assignedNodes({
        flatten: true,
      })
      const selectContainer =
        this.shadowRoot?.querySelector('.select-container')
      assignedNodes.forEach((node) => {
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          (node as HTMLElement).nodeName.toUpperCase() === 'SELECT'
        ) {
          const select = node as HTMLSelectElement
          this.multiline = select.multiple
          selectContainer?.appendChild(select)
          // Do not override a programmatic value.
          // (Also note that if no external value is provided, we will default to the native select’s value.)
          if (!this.value) {
            const initialValue = this.getInitialSelectValue(select)
            this.value = initialValue
            const initialSelectedOptions = Array.from(
              select.selectedOptions,
            ).map((option) => option.value)
            if (this.multiline) {
              this.selectedValue = initialSelectedOptions
            } else {
              this.selectedValue = initialSelectedOptions.slice(0, 1)
            }
          }
        }
      })
    }

    const nativeSelect = this.shadowRoot?.querySelector(
      '.select-container select',
    ) as HTMLSelectElement | null

    if (nativeSelect) {
      nativeSelect.setAttribute('aria-describedby', 'supporting-text')
      nativeSelect.setAttribute('aria-label', this.label)
      nativeSelect.addEventListener(
        'change',
        this.handleSelectChange.bind(this),
      )
      nativeSelect.addEventListener('input', (e) => e.stopPropagation())
    }
  }

  updated(changedProperties: Map<PropertyKey, unknown>): void {
    // Always force-sync the native select to the programmatically provided value.
    const nativeSelect = this.getSelectElement()
    if (nativeSelect && changedProperties.has('value')) {
      if (!nativeSelect.multiple) {
        // Check if the programmatic value exists on one of the options.
        const optionExists = Array.from(nativeSelect.options).some(
          (option) => option.value === this.value,
        )
        if (!optionExists && this.value) {
          // If not, inject a dummy option (with the same display text as value).
          const newOption = document.createElement('option')
          newOption.value = this.value
          newOption.text = this.value
          newOption.selected = true
          // Prepend so it becomes the visible selection.
          nativeSelect.prepend(newOption)
        } else {
          nativeSelect.value = this.value || ''
        }
        this.selectedValue = this.value ? [this.value] : []
      } else if (nativeSelect.multiple) {
        const newValues = this.value ? this.value.split(',') : []
        Array.from(nativeSelect.options).forEach((option) => {
          option.selected = newValues.includes(option.value)
        })
        this.selectedValue = newValues
      }
    }
  }

  private handleSelectChange(event: Event) {
    event.stopPropagation()
    const nativeSelect = event.target as HTMLSelectElement
    const selectedOptions = Array.from(nativeSelect.selectedOptions)
      .map((option) => option.value)
      .filter((value) => value !== '') // Filter out empty values

    if (nativeSelect.multiple) {
      this.selectedValue = selectedOptions
      this.value = selectedOptions.length > 0 ? selectedOptions.join(',') : ''
    } else {
      this.selectedValue = [selectedOptions[0]]
      this.value = selectedOptions[0]
    }

    this.checkValidity()

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
  }

  /**
   * Handles form reset events by selecting the first option.
   */
  override formResetCallback(): void {
    const nativeSelect = this.getSelectElement()
    if (nativeSelect) {
      if (nativeSelect.multiple) {
        Array.from(nativeSelect.options).forEach((option) => {
          option.selected = false
        })
        this.selectedValue = []
        this.value = ''
      } else {
        const firstOption = nativeSelect.options[0]
        if (firstOption) {
          this.value = firstOption.value
          nativeSelect.value = firstOption.value
          this.selectedValue = [firstOption.value]
        }
      }
    }
  }

  getSelectElement(): HTMLSelectElement | null {
    return this.shadowRoot?.querySelector('.select-container select') ?? null
  }

  _getValidityAnchor() {
    return this.selectElement
  }

  render() {
    const CLASSES = {
      multiple: this.multiline,
    }

    return html`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label" id="label-text">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
      </gds-form-control-header>

      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        .multiline=${this.multiline}
        align-items=${this.multiline ? 'flex-start' : 'center'}
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
    return html` <slot name="lead" slot="lead"></slot> `
  }

  /**
   * Renders the main label text for single-select mode.
   * Shows either selected option text or placeholder.
   */
  #renderMainLabel() {
    if (!this.multiline) {
      const selectElement = this.getSelectElement()
      let displayText = this.value // Default to showing the programmatic value

      if (selectElement) {
        const selectedOptions = Array.from(selectElement.selectedOptions)
        if (selectedOptions.length > 0) {
          // If there is a selected option, use its text
          displayText = selectedOptions[0].text
        }
      }

      return html`<label id="placeholder">${displayText}</label>`
    }
  }

  /**
   * Renders the main slot and select container.
   * The select container is where the native select is moved to.
   */
  #renderMainSlot() {
    return html`
      <slot></slot>
      <div class="select-container"></div>
    `
  }

  /**
   * Renders the chevron icon button for single-select mode.
   * Provides visual indication of dropdown functionality.
   */
  #renderChevron() {
    if (!this.multiline) {
      return html`
        <gds-button
          tabindex="-1"
          size="small"
          rank="tertiary"
          variant="${this.invalid ? 'negative' : 'neutral'}"
          ?disabled="${this.disabled}"
          slot="action"
        >
          <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
        </gds-button>
      `
    }
  }
}
