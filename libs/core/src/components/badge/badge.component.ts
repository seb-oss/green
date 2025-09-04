import { property, state } from 'lit/decorators.js'

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
 *
 */
@gdsCustomElement('gds-badge', { dependsOn: [GdsFlex] })
export class GdsBadge extends withSizeXProps(
  withMarginProps(withLayoutChildProps(GdsElement)),
) {
  static styles = [tokens, BadgeStyles]

  /**
   * Controls the variant of the badge.
   * Supports all valid variants like information, notice, positive, warning, negative.
   * @property variant
   */
  @property()
  variant:
    | 'information'
    | 'notice'
    | 'positive'
    | 'warning'
    | 'negative'
    | 'disabled' = 'information'

  /**
   * Defines the size of the badge.
   * The default value is `default`.
   *
   * @property {string} size - The size of the badge, which can be either 'default' or 'small'.
   */
  @property({ type: String })
  size: 'default' | 'small' = 'default'

  /**
   * Indicates whether the badge is in notification mode.
   * When set to `true`, the badge will act as a notification badge with only two variants: `positive` or `negative`.
   *
   * @property {boolean} notification - Controls the notification mode of the badge.
   */
  @property({
    attribute: 'notification',
    type: Boolean,
    reflect: true,
  })
  notification = false

  /**
   * Indicates whether the badge is rounded.
   *
   * @property {boolean} rounded - Controls the border radius of the badge.
   */
  @property({
    attribute: 'rounded',
    type: Boolean,
    reflect: true,
  })
  rounded = false

  @state()
  mainSlotOccupied = false

  render() {
    let background: string
    let color: string
    if (this.notification) {
      background = 'negative-01'
      color = 'inversed'
    } else {
      switch (this.variant) {
        case 'information':
          background = 'information-03'
          color = 'information-01'
          break
        case 'notice':
          background = 'notice-03'
          color = 'notice-01'
          break
        case 'positive':
          background = 'positive-03'
          color = 'positive-03'
          break
        case 'warning':
          background = 'warning-03'
          color = 'warning-01'
          break
        case 'negative':
          background = 'negative-03'
          color = 'negative-01'
          break
        case 'disabled':
          background = 'disabled-03'
          color = 'disabled-01'
          break
        default:
          background = 'information-03'
          color = 'information-01'
          break
      }
    }

    const padding = this.size === 'small' || this.notification ? '2xs' : 'xs'

    const blockSize = this.mainSlotOccupied
      ? this.size === 'small' || this.notification
        ? 'm'
        : 'l'
      : 'xs'

    return html`<gds-flex
      level="3"
      background=${background}
      color=${color}
      gap="${this.notification ? '' : '2xs'}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${padding}"
      border-radius="${this.notification || this.rounded ? 'max' : '2xs'}"
      block-size="${blockSize}"
      width="100%"
      font="${this.size === 'small' || this.notification
        ? 'detail-regular-xs'
        : 'detail-regular-s'}"
    >
      ${this.#renderLeadSlot()} ${this.#renderMainSlot()}
      ${this.#renderTrailSlot()}
    </gds-flex>`
  }

  #renderLeadSlot() {
    if (this.size !== 'small' || !this.notification) {
      return html`<slot name="lead"></slot>`
    }
  }

  #renderMainSlot() {
    return html`<slot @slotchange=${this.#handleSlotChange}></slot>`
  }

  #handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement
    const assignedNodes = slot.assignedNodes({ flatten: true })
    this.mainSlotOccupied =
      assignedNodes.length > 0 &&
      assignedNodes.some(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== ''),
      )
  }

  #renderTrailSlot() {
    return html`<slot name="trail"></slot>`
  }
}
