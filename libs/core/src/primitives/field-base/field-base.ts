import { localized, msg } from '@lit/localize'
import { property, query, queryAsync, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsFormControlElement } from '../../components/form/form-control'
import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './field-base.styles'

/**
 * @element gds-field-base
 * @status beta
 */
@gdsCustomElement('gds-field-base')
@localized()
export class GdsFieldBase extends GdsElement {
  static styles = [styles]

  @property({ type: String })
  size: 'large' | 'small' = 'large'

  @property({
    attribute: 'disabled',
    type: Boolean,
    reflect: true,
  })
  disabled = false

  @property({ type: Boolean })
  invalid?: boolean

  @query('slot:not([name])')
  private mainSlotElement!: HTMLSlotElement

  @state()
  private isFocused = false

  @state()
  leadSlotOccupied = false

  @state()
  trailSlotOccupied = false

  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.disconnectedCallback()
  }

  render() {
    const CLASSES = {
      field: true,
      invalid: this.invalid,
      focused: this.isFocused,
    }

    // TODO:
    // - Add a11y attributes
    // - Check if is invalid or disabled and apply the style
    // border=${this.isFocused ? '4xs/primary' : '4xs/secondary'}
    return html`
      <gds-flex
        level="3"
        position="relative"
        align-items="center"
        justify-content="space-between"
        gap="${this.size === 'small' ? '2xs' : 'xs'}"
        padding="${this.size === 'small'
          ? 'xs s'
          : !this.trailSlotOccupied
            ? 'xs xs xs m'
            : 'xs m'}"
        min-block-size="${this.size === 'small' ? 'xl' : '3xl'}"
        block-size="${this.size === 'small' ? 'xl' : '3xl'}"
        border-radius="xs"
        .background=${this.disabled
          ? 'disabled'
          : this.invalid
            ? 'negative-secondary'
            : 'secondary'}
        .border=${this.disabled
          ? ''
          : this.invalid
            ? '4xs/negative'
            : '4xs/secondary'}
        class=${classMap(CLASSES)}
        @click=${this.#handleFieldClick}
        cursor="text"
        color="${this.disabled
          ? 'disabled'
          : this.invalid
            ? 'negative'
            : 'tertiary'}"
      >
        ${this.#renderSlotLead()} ${this.#renderSlotBase()}
        ${this.#renderSlotTrail()}
      </gds-flex>
    `
  }

  #handleFieldClick = () => {
    console.log('click', this.mainSlotElement)
    const assignedElements = this.mainSlotElement.assignedElements({
      flatten: true,
    })
    const inputElement = assignedElements.find(
      (node) =>
        node instanceof HTMLInputElement ||
        node instanceof HTMLTextAreaElement ||
        node instanceof HTMLSelectElement,
    ) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement

    if (inputElement) {
      inputElement.focus()
      this.isFocused = true
      inputElement.addEventListener('blur', this.#handleFieldBlur)
    }
  }

  #handleFieldBlur = () => {
    this.isFocused = false
  }

  #handleTrailSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement
    const assignedNodes = slot.assignedNodes({ flatten: true })
    this.trailSlotOccupied =
      assignedNodes.length > 0 &&
      assignedNodes.some(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== ''),
      )
  }

  #handleSlotChange(slotName: 'lead' | 'trail', event: Event) {
    const slot = event.target as HTMLSlotElement
    const assignedNodes = slot.assignedNodes({ flatten: true })
    const slotOccupied =
      assignedNodes.length > 0 &&
      assignedNodes.some(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== ''),
      )

    if (slotName === 'lead') {
      this.leadSlotOccupied = slotOccupied
    } else if (slotName === 'trail') {
      this.trailSlotOccupied = slotOccupied
    }
  }

  #renderSlotLead() {
    return html` <slot
      name="lead"
      @slotchange=${(e: Event) => this.#handleSlotChange('lead', e)}
    ></slot>`
  }

  #renderSlotBase() {
    return html` <gds-flex align-items="center" flex="1">
      <slot></slot>
    </gds-flex>`
  }

  #renderSlotTrail() {
    return html`
      <slot
        name="trail"
        @slotchange=${(e: Event) => this.#handleSlotChange('trail', e)}
      ></slot>
    `
  }
}
