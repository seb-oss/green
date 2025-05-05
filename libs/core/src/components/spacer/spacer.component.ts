import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

/**
 * @element gds-spacer
 * @status beta
 *
 * @deprecated Use `gds-div` with the `height` property instead.
 */
@gdsCustomElement('gds-spacer')
export class GdsSpacer extends GdsElement {
  static styles = [tokens]

  /**
   * Controls the size property of the spacer.
   * Supports all the space tokens from the design system.
   *
   * You can apply size like this:
   *
   * ```html
   * <gds-spacer size="2xl"></gds-spacer>
   * ```
   *
   * You can apply size in different breakpoints like this:
   *
   * ```html
   * <gds-spacer size="s{2xl} m{xl} l{2xl}"></gds-spacer>
   * ```
   *
   */
  @styleExpressionProperty({
    property: 'height',
    valueTemplate: (v) => `var(--gds-sys-space-${v})`,
  })
  size?: string

  render() {
    return html``
  }
}
