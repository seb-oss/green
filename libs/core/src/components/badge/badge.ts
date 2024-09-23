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

  render() {
    return html`<gds-flex
      level="3"
      background=${(this as GdsBadge).variant + '-badge'}
      color=${(this as GdsBadge).variant}
      class="badge"
    >
      <slot name="lead"></slot>
      <slot></slot>
      <slot name="trail"></slot>
    </gds-flex>`
  }
}
