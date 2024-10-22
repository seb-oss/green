import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

/**
 * @element gds-spacer
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
    selector: 'div',
    valueTemplate: (v) => `var(--gds-space-${v})`,
  })
  size?: string

  render() {
    return html`<div></div>`
  }
}
