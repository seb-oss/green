import { localized } from '@lit/localize'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { map } from 'lit/directives/map.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators/watch.js'
import FieldBaseStyles from './field-base.styles'

/**
 * @element gds-field-base
 * @status beta
 * @internal
 *
 * gds-field-base is a primitive that provides a reusable base structure for the "field" part of form controls in Green Core.
 *
 * @slot - Default slot for main content.
 * @slot lead - Slot for leading content.
 * @slot action - Slot for action content.
 * @slot trail - Slot for trailing content.
 */
@gdsCustomElement('gds-field-base')
@localized()
export class GdsFieldBase extends GdsElement {
  static styles = [FieldBaseStyles]

  /**
   * The size of the field.
   */
  @property()
  size: 'large' | 'small' = 'large'

  /**
   * Whether the field is multiline (ie, textarea).
   */
  @property({ type: Boolean })
  multiline = false

  /**
   * Whether the field is disabled.
   */
  @property({
    type: Boolean,
    reflect: true,
  })
  disabled = false

  /**
   * Whether the field is invalid.
   */
  @property({ type: Boolean })
  invalid = false

  @query('slot:not([name])')
  private _mainSlotElement!: HTMLSlotElement

  @state()
  private _leadSlotOccupied = false

  @state()
  private _leadHasBadge = false

  @state()
  private _trailSlotOccupied = false

  @state()
  private _actionSlotOccupied = false

  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-field-base')
  }

  render() {
    const classes = {
      invalid: this.invalid ?? false,
      multiline: this.multiline,
      disabled: this.disabled,
      'lead-slot-occupied': this._leadSlotOccupied,
      'lead-has-badge': this._leadHasBadge,
      'trail-slot-occupied': this._trailSlotOccupied,
      'action-slot-occupied': this._actionSlotOccupied,
      small: this.size === 'small',
    }

    return html`
      <div class="field ${classMap(classes)}" part="_base">
        ${this.#renderFieldContents()}
      </div>
    `
  }

  #handleSlotChange = (
    slotName: 'lead' | 'trail' | 'action' | 'main',
    event: Event,
  ) => {
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
      this._leadHasBadge =
        slotOccupied &&
        assignedNodes.some(
          (node) =>
            (node as HTMLElement).getAttribute?.('gds-element') === 'gds-badge',
        )
    } else if (slotName === 'trail') {
      this._trailSlotOccupied = slotOccupied
    } else if (slotName === 'action') {
      this._actionSlotOccupied = slotOccupied
    } else if (slotName === 'main') {
      // Handle main slot change if needed
    }
  }

  #renderFieldContents() {
    const rightSlotsWrapClasses = {
      right: true,
      'as-flex':
        this.multiline && (this._trailSlotOccupied || this._actionSlotOccupied),
    }
    return html`
      ${this.#renderSlotLead()} ${this.#renderSlotMain()}
      <div class="${classMap(rightSlotsWrapClasses)}">
        ${this.#renderSlotAction()} ${this.#renderSlotTrail()}
      </div>
    `
  }

  #renderSlotLead() {
    return html` <slot
      name="lead"
      @slotchange=${(e: Event) => this.#handleSlotChange('lead', e)}
    ></slot>`
  }

  #renderSlotMain() {
    return html`<div
      class="main-slot-wrap ${classMap({ multiline: this.multiline })}"
    >
      <slot
        @slotchange=${(e: Event) => this.#handleSlotChange('main', e)}
      ></slot>
    </div>`
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

  @watch('disabled')
  private _handleDisabledChange() {
    if (this.disabled) {
      this.setAttribute('inert', '')
    } else {
      this.removeAttribute('inert')
    }
  }
}
