import { nothing } from 'lit'
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { forColorTokens } from '../../utils/helpers'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import DividerCSS from './divider.style'

/**
 * @element gds-divider
 * @status beta
 *
 * The `gds-divider` component is a horizontal rule that separates content in a layout. It is equivalent to the `<hr>` element in HTML, and provides the same semantic meaning.
 */
@gdsCustomElement('gds-divider')
export class GdsDivider extends GdsElement {
  static styles = [tokens, DividerCSS]

  /**
   * Controls the color property of the divider.
   * Supports all the color tokens from the design system.
   *
   * You can apply color like this:
   *
   * ```html
   * <gds-divider color="interactive"></gds-divider>
   * ```
   */
  @styleExpressionProperty(forColorTokens('border'))
  color?: string

  /**
   * Controls the size property of the divider.
   * Supports all the space tokens from the design system.
   *
   * You can apply size like this:
   *
   * ```html
   * <gds-divider size="2xl"></gds-divider>
   * ```
   *
   * The above example will apply the size style of 2xl.
   *
   */
  @styleExpressionProperty({
    property: '--_size',
    valueTemplate: (v) => `var(--gds-sys-space-${v})`,
  })
  size?: string

  /**
   * Controls the opacity property of the divider.
   * Supports all the opacity tokens from the design system.
   *
   * You can apply opacity like this:
   *
   * ```html
   * <gds-divider opacity="0.2"></gds-divider>
   * ```
   * The above example will apply the opacity style of base400.
   *
   */
  @styleExpressionProperty()
  opacity?: string

  /**
   * Use the role attribute primarily if you only want the divider to be a visual element.
   *
   * ```html
   * <!-- This divider will not be announced as a separator or thematic break -->
   * <gds-divider role="presentation"></gds-divider>
   * ```
   */
  @property()
  role: string | null = null

  render() {
    return html`<hr role=${this.role || nothing} />`
  }
}
