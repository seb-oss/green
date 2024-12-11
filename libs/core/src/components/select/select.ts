import { localized } from '@lit/localize'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './select.styles'

import '../../primitives/form-control-header'
import '../../primitives/form-control-header'
import '../../primitives/field-base/field-base'
import '../icon/icons/chevron-bottom'
import '../button/button'

/**
 * @element gds-select
 * @status beta
 */
@gdsCustomElement('gds-select')
@localized()
export class GdsSelect extends GdsFormControlElement<string> {
  static styles = [styles]

  @property()
  placeholder = ''

  /**
   * The label displayed above the field
   */
  @property()
  label = ''

  /**
   * The supporting text displayed between the label and the field itself
   */
  @property({ attribute: 'supporting-text' })
  supportingText = ''

  /**
   * Whether the supporting text should be displayed or not.
   */
  @property({
    attribute: 'show-extended-supporting-text',
    type: Boolean,
    reflect: true,
  })
  showExtendedSupportingText = false

  @property({ type: String })
  size: 'large' | 'small' = 'large'

  @property({
    attribute: 'disabled',
    type: Boolean,
    reflect: true,
  })
  disabled = false

  @property({ type: Boolean })
  private multiple = false

  @property({ type: Number })
  private selectElementSize?: number

  firstUpdated() {
    const labelElement = this.shadowRoot?.querySelector('label#placeholder')
    const slotElement = this.shadowRoot?.querySelector('slot:not([name])')
    let selectElement: HTMLSelectElement | null = null

    if (slotElement) {
      const assignedNodes = slotElement.assignedNodes({ flatten: true })
      selectElement = assignedNodes.find(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'SELECT',
      ) as HTMLSelectElement

      if (selectElement) {
        this.multiple = selectElement.multiple
        this.selectElementSize = selectElement.size || undefined
      }
    }

    if (labelElement && selectElement) {
      slotElement.addEventListener('change', () => {
        const selectedOption = selectElement.selectedOptions[0]
        labelElement.textContent = selectedOption.textContent
      })
    }
  }

  protected _getValidityAnchor(): HTMLElement {
    return this.shadowRoot?.querySelector('select') as HTMLElement
  }

  render() {
    const CLASSES = {
      multiple: this.multiple,
    }

    return html`
      <gds-form-control-header class="size-${this.size}">
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>

      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        height=${this.multiple ? 'max-content' : ''}
        align-items=${this.multiple ? 'flex-start' : 'center'}
        class=${classMap(CLASSES)}
      >
        ${this.#renderFieldContents()}
      </gds-field-base>

      <gds-form-control-footer
        class="size-${this.size}"
        .validationMessage=${this.invalid && this.validationMessage}
      ></gds-form-control-footer>
    `
  }

  #renderFieldContents() {
    const elements = [
      this.#renderSlotLead(),
      this.#renderMainSlot(),
      this.#renderChevron(),
    ]

    return elements.map((element) => html`${element}`)
  }

  #renderSlotLead() {
    return html` <slot name="lead" slot="lead"></slot> `
  }

  #renderMainSlot() {
    if (!this.multiple) {
      return html`
        <label id="placeholder">${this.placeholder || 'Select'}</label>
        <slot></slot>
      `
    } else {
      return html` <slot></slot> `
    }
  }

  #renderChevron() {
    if (!this.multiple) {
      return html`
        <gds-button
          tabindex="-1"
          size="small"
          rank="tertiary"
          variant="${this.invalid ? 'negative' : ''}"
          ?disabled="${this.disabled}"
          slot="action"
        >
          <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
        </gds-button>
      `
    }
  }
}
