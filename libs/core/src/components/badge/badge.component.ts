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

  @state()
  leadSlotOccupied = false

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

    const padding = (() => {
      const paddings = {
        notification: {
          occupied: '3xs xs',
          default: '3xs 2xs',
        },
        small: {
          occupied: '3xs 2xs 3xs xs',
          default: '3xs 2xs',
        },
        default: {
          occupied: '3xs xs 3xs 2xs',
          default: '3xs xs',
        },
      }

      if (this.notification) {
        return paddings.notification[
          this.mainSlotOccupied ? 'occupied' : 'default'
        ]
      }

      const isSmall = this.size === 'small'
      return paddings[isSmall ? 'small' : 'default'][
        this.leadSlotOccupied ? 'occupied' : 'default'
      ]
    })()

    const blockSize = (() => {
      const sizes = {
        occupied: {
          small: 'm',
          default: 'l',
        },
        default: 'xs',
      }
      return this.mainSlotOccupied
        ? sizes.occupied[
            this.size === 'small' || this.notification ? 'small' : 'default'
          ]
        : sizes.default
    })()

    const inlineSize = (() => {
      const sizes = {
        notification: {
          occupied: 'l',
          default: '0',
        },
        default: 'l',
      }
      return this.notification
        ? sizes.notification[this.mainSlotOccupied ? 'occupied' : 'default']
        : sizes.default
    })()

    return html`<gds-flex
      level="3"
      background=${background}
      color=${color}
      gap="${this.notification ? '' : '2xs'}"
      align-items="center"
      justify-content="${this.notification ? 'center' : 'flex-start'}"
      padding="${padding}"
      min-height="${blockSize}"
      border-radius="${this.notification || this.rounded ? 'max' : '2xs'}"
      width="100%"
      min-width="${inlineSize}"
      font="${this.size === 'small' || this.notification
        ? 'detail-book-xs'
        : 'detail-book-s'}"
    >
      ${this.#renderLeadSlot()} ${this.#renderMainSlot()}
      ${this.#renderTrailSlot()}
    </gds-flex>`
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
