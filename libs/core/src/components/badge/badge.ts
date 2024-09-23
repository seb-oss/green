import { property } from 'lit/decorators.js'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { html } from '../../scoping'
import BadgeCSS from './badge.style'

/**
 * `gds-badge`
 *
 * @element gds-badge
 * @status beta
 *
 */
@gdsCustomElement('gds-badge')
export class GdsBadge extends GdsElement {
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

  render() {
    return html`<gds-flex
      level="3"
      background=${this.disabled
        ? 'disabled'
        : (this as GdsBadge).variant + '-badge'}
      color=${this.disabled ? 'disabled' : (this as GdsBadge).variant}
      gap="2xs"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${this.size === 'small' ? '2xs' : 'xs'}"
      border-radius="2xs"
      block-size="${this.size === 'small' ? 'm' : 'l'}"
      width="max-content"
      font-size="detail-s"
      font-weight="book"
      pointer-events=${this.disabled ? 'none' : 'auto'}
      user-select="${this.disabled ? 'none' : 'auto'}"
    >
      ${this.size !== 'small' ? html`<slot name="lead"></slot>` : ''}
      <slot></slot>
      <slot name="trail"></slot>
    </gds-flex>`
  }
}
