import { localized } from '@lit/localize'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { tokens } from '../../tokens.style'
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

  constructor() {
    super()
    this.value = ''
  }

  firstUpdated() {
    const labelElement = this.shadowRoot?.querySelector('label#placeholder')
    const slotElement = this.shadowRoot?.querySelector('slot:not([name])')

    // Move the content of the slot into the select-container
    if (slotElement) {
      const assignedNodes = (slotElement as HTMLSlotElement).assignedNodes({
        flatten: true,
      })
      const selectContainer =
        this.shadowRoot?.querySelector('.select-container')

      assignedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE && node.nodeName === 'SELECT') {
          selectContainer?.appendChild(node) // Move the select element to the select-container
        }
      })
    }

    const selectElement: HTMLSelectElement | null =
      this.shadowRoot?.querySelector('.select-container select') || null

    if (selectElement) {
      this.multiline = selectElement.multiple
      selectElement.setAttribute('aria-describedby', 'supporting-text')
      selectElement.setAttribute('aria-label', this.label)
      this.value = selectElement.value
      selectElement.addEventListener('change', () => {
        const selectedOptions = Array.from(selectElement.selectedOptions).map(
          (option) => option.value,
        )
        this.value = this.multiline
          ? selectedOptions.join(',')
          : selectedOptions[0]
        this.checkValidity()
      })

      selectElement.value = this.value
    }

    if (labelElement && selectElement) {
      selectElement.addEventListener('change', () => {
        const selectedOption = selectElement.selectedOptions[0]
        labelElement.textContent = selectedOption.textContent
      })
    }
  }

  /**
   * Public method to get the slotted select element
   * @returns The slotted select element or null if not found
   */
  getSelectElement(): HTMLSelectElement | null {
    return this.shadowRoot?.querySelector('.select-container select') ?? null
  }

  _getValidityAnchor(): HTMLElement {
    return this.shadowRoot?.querySelector('SELECT') as HTMLElement
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

  #renderFieldContents() {
    const elements = [
      this.#renderSlotLead(),
      this.#renderMainSlot(),
      this.#renderMainLabel(),
      this.#renderChevron(),
    ]

    return elements.map((element) => html`${element}`)
  }

  #renderSlotLead() {
    return html` <slot name="lead" slot="lead"></slot> `
  }

  #renderMainLabel() {
    if (!this.multiline) {
      return html` <label id="placeholder"> ${this.value || 'Select'} </label> `
    }
  }

  #renderMainSlot() {
    return html`
      <slot></slot>
      <div class="select-container"></div>
    `
  }

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
