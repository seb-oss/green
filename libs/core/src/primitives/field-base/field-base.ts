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

  @property({ type: String })
  'align-items': 'center' | 'flex-start' = 'center'

  @property({ type: String })
  height: '3xl'

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

  @state()
  actionSlotOccupied = false

  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.mainSlotElement.addEventListener(
      'slotchange',
      this.#handleSlotChange.bind(this, 'main'),
    )
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this.mainSlotElement.removeEventListener(
      'slotchange',
      this.#handleSlotChange.bind(this, 'main'),
    )
  }

  render() {
    const CLASSES = {
      field: true,
      invalid: this.invalid,
      focused: this.isFocused,
    }

    return html`
      <gds-flex
        level="3"
        position="relative"
        align-items=${this['align-items']}
        justify-content="space-between"
        gap="${this.size === 'small' ? '2xs' : 'xs'}"
        padding="${this['align-items']
          ? 's s s m'
          : this.size === 'small'
            ? 'xs s'
            : !this.trailSlotOccupied || !this.actionSlotOccupied
              ? 'xs xs xs m'
              : 'xs m'}"
        min-block-size="${this.size === 'small' ? 'xl' : '3xl'}"
        block-size="${this.size === 'small' ? 'xl' : ''}"
        height="${this.height}"
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
        pointer-events="${this.disabled ? 'none' : 'auto'}"
        color="${this.disabled
          ? 'disabled'
          : this.invalid
            ? 'negative'
            : 'tertiary'}"
      >
        ${this.#renderFieldContents()}
      </gds-flex>
    `
  }

  #handleFieldClick = () => {
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

  #handleSlotChange(
    slotName: 'lead' | 'trail' | 'action' | 'main',
    event: Event,
  ) {
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
    } else if (slotName === 'action') {
      this.actionSlotOccupied = slotOccupied
    } else if (slotName === 'main') {
      // Handle main slot change if needed
    }
  }

  #renderFieldContents() {
    const elements = [
      this.#renderSlotLead(),
      this.#renderSlotBase(),
      this.#renderSlotAction(),
      this.#renderSlotTrail(),
    ]

    return elements.map((element) => html`${element}`)
  }

  #renderSlotLead() {
    return html` <slot
      name="lead"
      @slotchange=${(e: Event) => this.#handleSlotChange('lead', e)}
    ></slot>`
  }

  #renderSlotBase() {
    return html` <gds-flex
      align-items="center"
      flex="1"
      height=${this.height ? 'max-content' : null}
    >
      <slot
        @slotchange=${(e: Event) => this.#handleSlotChange('main', e)}
      ></slot>
    </gds-flex>`
  }

  #renderSlotAction() {
    return html`
      <slot
        name="action"
        @slotchange=${(e: Event) => this.#handleSlotChange('action', e)}
      ></slot>
    `
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
