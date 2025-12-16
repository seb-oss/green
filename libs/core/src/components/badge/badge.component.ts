import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsFlex } from '../flex/flex.component'
import BadgeStyles from './badge.styles'

/**
 * `gds-badge`
 *
 * @element gds-badge
 */
@gdsCustomElement('gds-badge', { dependsOn: [GdsFlex] })
export class GdsBadge extends withSizeXProps(
  withMarginProps(withLayoutChildProps(GdsElement)),
) {
  static styles = [tokens, BadgeStyles]

  @property()
  variant:
    | 'information'
    | 'notice'
    | 'positive'
    | 'warning'
    | 'negative'
    | 'disabled' = 'information'

  @property({ type: String })
  size: 'default' | 'small' = 'default'

  @property({
    attribute: 'notification',
    type: Boolean,
    reflect: true,
  })
  notification = false

  @property({
    attribute: 'rounded',
    type: Boolean,
    reflect: true,
  })
  rounded = false

  @state()
  mainSlotOccupied = false

  @state()
  leadSlotOccupied = false

  render() {
    const classes = classMap({
      badge: true,
      [this.variant]: true,
      [this.size]: this.size === 'small',
      notification: this.notification,
      'with-content': this.notification && this.mainSlotOccupied,
      rounded: this.rounded,
    })

    return html`
      <div class="${classes}">
        ${[
          this.#renderLeadSlot(),
          this.#renderMainSlot(),
          this.#renderTrailSlot(),
        ]}
      </div>
    `
  }

  #handleSlotChange(
    event: Event,
    stateProperty: 'mainSlotOccupied' | 'leadSlotOccupied',
  ) {
    const slot = event.target as HTMLSlotElement
    const assignedNodes = slot.assignedNodes({ flatten: true })
    this[stateProperty] =
      assignedNodes.length > 0 &&
      assignedNodes.some(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== ''),
      )
  }

  #renderLeadSlot() {
    if (this.size !== 'small' || !this.notification) {
      return html`<slot
        name="lead"
        @slotchange=${(e: Event) =>
          this.#handleSlotChange(e, 'leadSlotOccupied')}
      ></slot>`
    }
  }

  #renderMainSlot() {
    return html`<slot
      @slotchange=${(e: Event) => this.#handleSlotChange(e, 'mainSlotOccupied')}
    ></slot>`
  }

  #renderTrailSlot() {
    return html`<slot name="trail"></slot>`
  }
}
