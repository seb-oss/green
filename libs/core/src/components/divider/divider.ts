import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
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
   * The level of the divider is used to resolve the color tokens from the corresponding level.
   * Check the [Color System documentation page](./?path=/docs/style-colors--docs) for more information.
   *
   * Default value for `gds-divider` is set to `2`.
   *
   * @property level
   *
   * */
  @property()
  level = '2'

  /**
   * Controls the color property of the divider.
   * Supports all the color tokens from the design system.
   *
   * You can apply color like this:
   *
   * ```html
   * <gds-divider color="primary"></gds-divider>
   * ```
   *
   * The above example will apply the color style of base400.
   *
   */
  @styleExpressionProperty({
    valueTemplate: function (v: string) {
      const [colorInput, transparency] = v.split('/')

      // Helper function to determine if a color is custom
      const isCustomColor = (color: string): boolean => {
        const trimmedColor = color.trim()
        return (
          trimmedColor.startsWith('#') || // Hex color
          trimmedColor.startsWith('rgb(') || // RGB color
          trimmedColor.startsWith('rgba(') || // RGBA color
          trimmedColor.startsWith('hsl(') || // HSL color
          trimmedColor.startsWith('hsla(') // HSLA color
        )
      }

      // Function to construct the CSS variable string
      const constructCssVariable = (
        level: string,
        colorName: string,
      ): string => {
        return `var(--gds-color-l${level}-border-${colorName})`
      }

      // Determine the color value
      const getColorValue = (color: string, transparency?: string): string => {
        if (isCustomColor(color)) {
          return transparency
            ? `color-mix(in srgb, ${color} ${parseFloat(transparency) * 100}%, transparent 0%)`
            : color // Use the custom color directly
        } else {
          return constructCssVariable((this as GdsDivider).level, color)
        }
      }

      // Return the computed color value
      return getColorValue(colorInput, transparency)
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
    return html`<hr />`
  }
}
