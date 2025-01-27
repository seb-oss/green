import { localized } from '@lit/localize'
import { property, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

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
  static styles = [styles]

  @property()
  placeholder = ''

  @property()
  label = ''

  @property({ attribute: 'supporting-text' })
  supportingText = ''

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

  private readonly selectId = `select-${Math.random().toString(36).substring(2, 11)}`

  @query('select')
  private selectElement!: HTMLSelectElement // Reference to the select element

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

    // Now you can find the select element in the select-container
    const selectElement: HTMLSelectElement | null =
      this.shadowRoot?.querySelector('.select-container select') || null
    if (selectElement) {
      this.multiple = selectElement.multiple
      // Set a unique ID and aria-describedby
      selectElement.id = this.selectId
      selectElement.setAttribute('aria-describedby', 'supporting-text')

      // Add name and aria-label
      selectElement.setAttribute('aria-label', this.label)

      // Sync the value with the form control's value property
      this.value = selectElement.value

      // Add event listener to validate on change
      // selectElement.addEventListener('change', () => {
      //   this.value = selectElement.value // Update the value property
      //   this.checkValidity() // Check validity on change
      // })

      selectElement.addEventListener('change', () => {
        const selectedOptions = Array.from(selectElement.selectedOptions).map(
          (option) => option.value,
        )
        this.value = this.multiple
          ? selectedOptions.join(',')
          : selectedOptions[0] // Update to handle multiple values
        this.checkValidity() // Check validity on change
      })

      // Set initial value
      selectElement.value = this.value // Ensure the select element reflects the initial value
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
      multiple: this.multiple,
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
    if (!this.multiple) {
      return html`
        <label id="placeholder"> ${this.placeholder || 'Select'} </label>
      `
    }
  }

  #renderMainSlot() {
    return html`
      <slot></slot>
      <div class="select-container"></div>
    `
  }

  #renderChevron() {
    if (!this.multiple) {
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
