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
import BadgeCSS from './badge.style'

/**
 * `gds-badge`
 *
 * @element gds-badge
 * @status beta
 *
 */
@gdsCustomElement('gds-badge', { dependsOn: [GdsFlex] })
export class GdsBadge extends withSizeXProps(
  withMarginProps(withLayoutChildProps(GdsElement)),
) {
  static styles = [tokens, BadgeCSS]

  /**
   * Controls the variant of the badge.
   * Supports all valid variants like information, notice, positive, warning, negative.
   * @property variant
   */
  @property()
  variant = 'information'

  /**
   * Defines the size of the badge.
   * The default value is `default`.
   *
   * @property {string} size - The size of the badge, which can be either 'default' or 'small'.
   */
  @property({ type: String })
  size: 'default' | 'small' = 'default'

  /**
   * Indicates whether the badge is disabled.
   * When set to `true`, the badge will appear in a disabled state and will not be interactive.
   *
   * @property {boolean} disabled - Controls the disabled state of the badge.
   */
  @property({
    attribute: 'disabled',
    type: Boolean,
    reflect: true,
  })
  disabled = false

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
    const background = this.disabled
      ? 'disabled'
      : this.notification
        ? (this as GdsBadge).variant
        : (this as GdsBadge).variant + '-badge'

    const color = this.disabled
      ? 'disabled'
      : this.notification
        ? 'primary'
        : (this as GdsBadge).variant

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
      font-size="${this.size === 'small' || this.notification
        ? 'detail-xs'
        : 'detail-s'}"
      pointer-events=${this.disabled ? 'none' : 'auto'}
      user-select="${this.disabled ? 'none' : 'auto'}"
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
