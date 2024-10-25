import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import ContainerCSS from './container.style'

/**
 * The `gds-container` is a custom element that provides a flexible container system.
 * It can be used to create a container with different styles and configurations.
 * The container can be customized with different properties like padding, gap, display, position, and background.
 * It can be used in combination with other elements like `gds-grid`, `gds-card`, `gds-img`, `gds-text` etc.
 *
 * @element gds-container
 * @status beta
 *
 */

@gdsCustomElement('gds-container')
export class GdsContainer extends GdsElement {
  static styles = [tokens, ContainerCSS]

  /**
   * Controls the display property.
   * Supports all valid CSS display values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  display = 'block'

  /**
   * The level of the container is used to resolve the color tokens from the corresponding level.
   * Check the [Color System documentation page](./?path=/docs/style-colors--docs) for more information.
   *
   * Default value for `gds-container` is set to `2`.
   *
   * @property level
   *
   * */
  @property()
  level = '2'

  /**
   * Controls the `place-items` property.
   * Supports all valid CSS `place-items` values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'place-items'?: string

  /**
   * Controls the `place-content` property.
   * Supports all valid CSS `place-content` values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'place-content'?: string

  /**
   * Controls the color property.
   * Supports all the color tokens from the design system.
   *
   * ```html
   * <gds-container color="primary"></gds-container>
   * ```
   *
   * The above example will apply the color style of `primary`.
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
        return `var(--gds-color-l${level}-content-${colorName})`
      }

      // Determine the color value
      const getColorValue = (color: string, transparency?: string): string => {
        if (isCustomColor(color)) {
          return transparency
            ? `color-mix(in srgb, ${color} ${parseFloat(transparency) * 100}%, transparent 0%)`
            : color // Use the custom color directly
        } else {
          return constructCssVariable((this as GdsContainer).level, color)
        }
      }

      // Return the computed color value
      return getColorValue(colorInput, transparency)
    },
  })
  color?: string

  /**
   * Controls the background property.
   * Supports all the color tokens from the design system.
   *
   * Adding transparency to the background color:
   *
   * ```html
   * <gds-container background="primary/0.2"></gds-container>
   * ```
   *
   * The above example will apply the background style of `primary` with `20%` transparency.
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
      const constructCssVariable = (level: string, color: string): string => {
        return `var(--gds-color-l${level}-background-${color})`
      }

      // Determine the background color
      const getBackgroundColor = (
        color: string,
        transparency?: string,
      ): string => {
        if (isCustomColor(color)) {
          return transparency
            ? `color-mix(in srgb, ${color} ${parseFloat(transparency) * 100}%, transparent 0%)`
            : color // Use the custom color directly
        } else {
          return constructCssVariable((this as GdsContainer).level, color)
        }
      }

      // Return the computed background color
      return getBackgroundColor(colorInput, transparency)
    },
  })
  background?: string

  /**
   * Controls the border property.
   * Supports all tokens from the design system.
   *
   * @property border
   *
   * Can be specified for each side using the size tokens like this:
   *
   * ```html
   * <gds-container border="4xs 0 0 0"></gds-container>
   * ```
   *
   * Also for different breakpoints like this:
   *
   * ```html
   * <gds-container border="s{2xs} m{3xs} l{4xs}"></gds-container>
   * ```
   *
   * When you want to apply the border in all breakpoints and sides you can use the following:
   *
   * ```html
   * <gds-container border="4xs"></gds-container>
   * ```
   */
  @styleExpressionProperty({
    valueTemplate: function (v: string) {
      const [size, color] = v.split('/')

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

      // Function to construct the CSS variable string for border color
      const constructBorderColorVariable = (
        level: string,
        color: string,
      ): string => {
        return `var(--gds-color-l${level}-border-${color})`
      }

      // Determine the border color value
      const getBorderColorValue = (color: string): string => {
        return isCustomColor(color)
          ? color // Use the custom color directly
          : constructBorderColorVariable((this as GdsContainer).level, color)
      }

      // Return the computed border value with size and color
      return `var(--gds-space-${size}) solid ${color ? getBorderColorValue(color) : 'currentColor'}`
    },
    styleTemplate: (_prop, values) => {
      const top = values[0]
      const right = values.length > 1 ? values[1] : top
      const bottom = values.length > 2 ? values[2] : top
      const left = values.length > 3 ? values[3] : top

      return `
        border-top: ${top};
        border-right: ${right};
        border-bottom: ${bottom};
        border-left: ${left};
      `
    },
  })
  border?: string

  /**
   * Controls the border-color property.
   * Supports all the color tokens from the design system.
   */
  @styleExpressionProperty({
    valueTemplate: function (v: string) {
      const [color] = v.split('/')

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

      // Function to construct the CSS variable string for border color
      const constructBorderColorVariable = (
        level: string,
        color: string,
      ): string => {
        return `var(--gds-color-l${level}-border-${color})`
      }

      // Determine the border color value
      const getBorderColorValue = (color: string): string => {
        return isCustomColor(color)
          ? color // Use the custom color directly
          : constructBorderColorVariable((this as GdsContainer).level, color)
      }

      // Return the computed border color value
      return color ? getBorderColorValue(color) : 'currentColor'
    },
    styleTemplate: (_prop, values) => {
      const top = values[0]
      const right = values.length > 1 ? values[1] : top
      const bottom = values.length > 2 ? values[2] : top
      const left = values.length > 3 ? values[3] : top

      return `
        border-top-color: ${top};
        border-right-color: ${right};
        border-bottom-color: ${bottom};
        border-left-color: ${left};
      `
    },
  })
  'border-color'?: string

  /**
   * Controls the border-width property.
   * Supports all the border style values.
   */
  @styleExpressionProperty({
    styleTemplate: (_prop, values) => {
      const top = values[0]
      const right = values.length > 1 ? values[1] : top
      const bottom = values.length > 2 ? values[2] : top
      const left = values.length > 3 ? values[3] : top

      return `
        border-top-width: ${top};
        border-right-width: ${right};
        border-bottom-width: ${bottom};
        border-left-width: ${left};
        border-style: solid;
      `
    },
  })
  'border-width'?: string

  /**
   * Controls the border-radius property.
   * Supports all the size tokens from the design system.
   *
   * You can apply radius in each corner like this:
   *
   * ```html
   * <gds-container border-radius="none none m m" ></gds-container>
   * ```
   *
   * Also for different breakpoints like this:
   *
   * ```html
   * <gds-container border-radius="s{none none xs} m{none xs none xs} l{s}" ></gds-container>
   * ```
   *
   * Each corner can have a different radius value and also different values for different breakpoints.
   *
   *  * These are the available values you can use to define Border Radius
   *
   * `0, 4XS, 3XS, 2XS, XS, S, M, L, XL, 2XL, 3XL, 4XL, 5XL, 6XL, 7XL, 8XL, MAX`
   *
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `var(--gds-space-${v})`,
  })
  'border-radius'?: string

  /**
   * Controls the opacity property.
   *
   * You can apply opacity like this:
   *
   * ```html
   * <gds-container opacity="0.2"></gds-container>
   * ```
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  opacity?: string

  /**
   * Controls the padding using shorthand method for the flex.
   * Supports all valid token values.
   *
   * You can apply padding in each side like this:
   *
   * ```html
   * <gds-container padding="xl"></gds-container>
   * ```
   *
   * `xl` in this case will be applied to all breakpoints and sides.
   *
   * Padding also support breakpoint syntax like this:
   *
   * ```html
   * <gds-container padding="xs{s} m{m} l{xl}"></gds-container>
   * ```
   *
   * The above example will apply the padding style of `xs` for `small` devices, `m` for `medium` devices, and `xl` for large devices.
   *
   */
  @styleExpressionProperty()
  padding?: string

  @styleExpressionProperty()
  'padding-inline'?: string

  @styleExpressionProperty()
  'padding-block'?: string

  /**
   * Controls the margin property.
   * Supports all the default margin values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => {
      return v === 'auto' ? 'auto' : `var(--gds-space-${v})`
    },
    styleTemplate: (_prop, values) => {
      const transformValue = (v: string) => (v === 'auto' ? 'auto' : `${v}`)

      const top = transformValue(values[0])
      const right = values.length > 1 ? transformValue(values[1]) : top
      const bottom = values.length > 2 ? transformValue(values[2]) : top
      const left = values.length > 3 ? transformValue(values[3]) : right

      return `margin: ${top} ${right} ${bottom} ${left};`
    },
  })
  margin?: string

  /**
   * Controls the position property.
   * Supports all valid CSS position values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  position?: string

  /**
   * Controls the inset property.
   * Supports all valid CSS inset values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  inset?: string

  /**
   * Controls the overflow property.
   * Supports all valid CSS overflow values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  overflow?: string

  /**
   * Controls the height property.
   * Supports all valid CSS height values.
   *
   * @property height
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  height?: string

  /**
   * Controls the `max-height` property.
   * Supports all valid CSS `max-height` values.
   *
   * @property max-height
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'max-height'?: string

  /**
   * Controls the `min-height` property.
   * Supports all valid CSS `min-height` values.
   *
   * @property min-height
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'min-height'?: string

  /**
   * Controls the `block-size` property.
   * Supports only tokens.
   *
   * @property block-size
   */
  @styleExpressionProperty()
  'block-size'?: string

  /**
   * Controls the `min-block-size` property.
   * Supports only tokens.
   *
   * @property min-block-size
   */
  @styleExpressionProperty()
  'min-block-size'?: string

  /**
   * Controls the width property.
   * Supports all valid CSS height values.
   *
   *  @property width
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  width?: string

  /**
   * Controls the `max-width` property.
   * Supports all valid CSS `max-width` values.
   *
   * @property max-width
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'max-width'?: string

  /**
   * Controls the `min-width` property.
   * Supports all valid CSS `min-width` values.
   *
   * @property min-width
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'min-width'?: string

  /**
   * Controls the `inline-size` property.
   * Supports only token
   *
   * @property inline-size
   */
  @styleExpressionProperty()
  'inline-size'?: string

  /**
   * Controls the cursor property.
   * Supports all valid CSS cursor values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  cursor?: string

  /**
   * Controls the `pointer-events` property.
   * Supports all valid CSS `pointer-events` values.
   *
   * @property pointer-events
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'pointer-events'?: string

  /**
   * Controls the `user-select` property.
   * Supports all valid CSS `user-select` values.
   *
   * @property user-select
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'user-select'?: string

  /**
   * Controls the z-index property.
   * Supports all valid CSS z-index values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'z-index'?: string

  /**
   * Controls the `transform` property.
   * Supports all valid CSS `transform` values.
   *
   * @property transform
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  transform?: string

  /**
   * Controls the `transform-style` property.
   * Supports all valid CSS `transform-style` values.
   *
   * @property transform-style
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'transform-style'?: string

  /**
   * Controls the `transition` property.
   * Supports all valid CSS `transition` values.
   *
   * @property transition
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  transition?: string

  /**
   * Controls the `transition-behavior` property.
   * Supports all valid CSS `transition-behavior` values.
   *
   * @property transition-behavior
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'transition-behavior'?: string

  /**
   * Controls the `animation` property.
   * Supports all valid CSS `animation` values.
   *
   * @property animation
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  animation?: string

  /**
   * Controls the size of the text.
   * Supports all typography size tokens from the design system.
   *
   * You can apply size like this:
   * ```html
   * <gds-container font-size="body-m"></gds-container>
   * ```
   *
   * These are the available values you can use to define size:
   *
   * `heading-xl`,
   * `heading-l`,
   * `heading-m`,
   * `heading-s`,
   * `heading-xs`,
   * `heading-2xs`,
   * `detail-m`,
   * `detail-s`,
   * `detail-xs`,
   * `body-l`,
   * `body-m`,
   * `body-s`,
   * `display-2xl`,
   * `display-xl`,
   * `display-l`,
   * `display-m`,
   * `display-s `,
   * `preamble-2xl`,
   * `preamble-xl`,
   * `preamble-l`,
   * `preamble-m`,
   * `preamble-s`,
   * `preamble-xs`,
   *
   * @property 'font-size'
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `${v}`,
    styleTemplate: (prop, values) => {
      const size = values[0]
      const styleSize = `font-size: var(--gds-text-size-${size});`
      const styleLine = `line-height: var(--gds-text-line-height-${size});`
      return styleSize + styleLine
    },
  })
  'font-size'?: string

  /**
   * Controls the `font-weight` of the text.
   * Supports all the weigh tokens.
   *
   * @property weight
   */
  @styleExpressionProperty({
    property: 'font-weight',
    valueTemplate: (v) => `var(--gds-text-weight-${v})`,
  })
  'font-weight'?: string

  /**
   * Controls the grid-column property.
   * Supports all valid CSS grid-column values.
   * Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   *
   * ```html
   * <gds-container grid-column="2 / -1"></gds-container>
   * ```
   *
   * The above example will apply the grid-column style of `2 / -1`.
   * The column can be applied using shorthand like grid-column="1 / 2"
   *
   * The column also support breakpoint syntax like this:
   *
   * ```html
   * <gds-container grid-column="s{1 / 2} m{2 / 3} l{3 / 4}"></gds-container>
   * ```
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `${v}`,
  })
  'grid-column'?: string

  /**
   * Controls the grid-row property.
   * Supports all valid CSS grid-row values.
   *
   * Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   *
   * ```html
   * <gds-container grid-row="2 / -1"></gds-container>
   * ```
   *
   * The above example will apply the grid-row style of `2 / -1`.
   * The row can be applied using shorthand like grid-row="1 / 2"
   *
   * The row also support breakpoint syntax like this:
   *
   * ```html
   * <gds-container grid-row="s{1 / 2} m{2 / 3} l{3 / 4}"></gds-container>
   * ```
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `${v}`,
  })
  'grid-row'?: string

  render() {
    return html`<slot></slot>`
  }
}
