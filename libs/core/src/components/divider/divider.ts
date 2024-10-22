import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import DividerCSS from './divider.style'

/**
 * @element gds-divider
 *
 * The `gds-divider`  is a custom element that provides a flexible divider system.
 * It can be used to create a divider with different styles and configurations.
 * The divider can be customized with different properties like color and size
 *
 * @status beta
 *
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
   * <gds-divider color="base400"></gds-divider>
   * ```
   *
   * The above example will apply the color style of base400.
   *
   */
  @styleExpressionProperty({
    property: 'color',
    valueTemplate: (v) => {
      const [colorName, transparency] = v.split('/')
      if (transparency) {
        return `color-mix(in srgb, var(--gds-sys-color-${colorName}) ${parseFloat(transparency) * 100}%, transparent 0%)`
      } else {
        return `var(--gds-sys-color-${colorName})`
      }
    },
  })
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
    valueTemplate: (v) => `var(--gds-space-${v})`,
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
  @styleExpressionProperty({
    property: 'opacity',
    valueTemplate: (v) => v,
  })
  opacity?: string

  render() {
    return html``
  }
}
