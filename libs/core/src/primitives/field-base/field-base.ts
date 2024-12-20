import { localized } from '@lit/localize'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

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

  @property({ type: Boolean })
  multiline = false

  @property({
    attribute: 'disabled',
    type: Boolean,
    reflect: true,
  })
  disabled = false

  @property({ type: Boolean })
  invalid?: boolean

  @query('slot:not([name])')
  private _mainSlotElement!: HTMLSlotElement

  @state()
  private _leadSlotOccupied = false

  @state()
  private _trailSlotOccupied = false

  @state()
  private _actionSlotOccupied = false

  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()
    this._mainSlotElement.addEventListener(
      'slotchange',
      this.#handleSlotChange.bind(this, 'main'),
    )
  }

  disconnectedCallback() {
    super.disconnectedCallback()
    this._mainSlotElement.removeEventListener(
      'slotchange',
      this.#handleSlotChange.bind(this, 'main'),
    )
  }

  render() {
    const CLASSES = {
      field: true,
      invalid: this.invalid ?? false,
    }

    return html`
      <gds-flex
        level="3"
        position="relative"
        align-items=${this.multiline ? 'flex-start' : 'center'}
        justify-content="space-between"
        gap="${this.size === 'small' ? '2xs' : 'xs'}"
        padding="${this.multiline
          ? 's s s m'
          : this.size === 'small'
            ? 'xs s'
            : this._trailSlotOccupied === true ||
                this._actionSlotOccupied === false
              ? 'xs m'
              : 'xs xs xs m'}"
        min-block-size="${this.size === 'small' ? 'xl' : '3xl'}"
        .height="${this.multiline ? 'max-content' : ''}"
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
      this._leadSlotOccupied = slotOccupied
    } else if (slotName === 'trail') {
      this._trailSlotOccupied = slotOccupied
    } else if (slotName === 'action') {
      this._actionSlotOccupied = slotOccupied
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
      .height=${this.multiline ? 'max-content' : ''}
      overflow="hidden"
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
