import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import ContainerCSS from './container.style.css'

/**
 * @element gds-container
 * The `gds-container` is a custom element that provides a flexible container system.
 * It can be used to create a container with different styles and configurations.
 * The container can be customized with different properties like padding, gap, display, position, and background.
 * It can be used in combination with other elements like `gds-grid`, `gds-card`, `gds-img`, `gds-text` etc.
 *
 * @status beta
 *
 */

@gdsCustomElement('gds-container')
export class GdsContainer extends GdsElement {
  static styles = [tokens, ContainerCSS]

  /**
   * @property gap
   * Controls the gap property of the container.
   * Supports all valid CSS gap values.
   * You can apply gap in each column and row like this:
   * ```html
   * <gds-container gap="m s"></gds-container>
   * ```
   * The gap styles are predfined on the tokens file and will be applied automativally based on the token value.
   * The gap can be applied to the container using shorthand like gap="1 2"
   *
   * Gap also support breakpoint syntax like this:
   * ```html
   * <gds-container gap="xs{s} m{m} l{xl}"></gds-container>
   * ```
   * The above example will apply the gap style of `xs` for `small` devices, `m` for `medium` devices, and `xl` for large devices.
   */
  @styleExpressionProperty({
    styleTemplate: (_prop, values) => {
      const colGap = values[0]
      const rowGap = values[1] || colGap
      return `--_gap-column: ${colGap}; --_gap-row: ${rowGap};`
    },
  })
  gap?: string

  /**
   * @property rowGap
   * Controlling individually the vertical gap you can use this property.
   *
   */
  @styleExpressionProperty({
    property: '--_row-gap',
    valueTemplate: (v) => v,
  })
  rowGap?: string

  /**
   * @property padding
   * Controls the padding using shorthand method for the container.
   * Supports all valid CSS padding values.
   * You can apply padding in each side like this:
   * ```html
   * <gds-container padding="xl"></gds-container>
   * ```
   * `xl` in tis case will be applied to all breakpoints and sides.
   *
   * Padding also support breakpoint syntax like this:
   * ```html
   * <gds-container padding="xs{s} m{m} l{xl}"></gds-container>
   * ```
   * The above example will apply the padding style of `xs` for `small` devices, `m` for `medium` devices, and `xl` for large devices.
   */
  @styleExpressionProperty()
  padding?: string

  /**
   * @property display
   * Controls the display property of the container.
   * Supports all valid CSS display values.
   */
  @styleExpressionProperty({
    property: 'display',
    valueTemplate: (v) => v,
  })
  display?: string

  /**
   * @property position
   * Controls the position property of the container.
   * Supports all valid CSS position values.
   */
  @styleExpressionProperty({
    property: 'position',
    valueTemplate: (v) => v,
  })
  position?: string

  /**
   * @property inset
   * Controls the inset property of the container.
   * Supports all valid CSS inset values.
   */
  @styleExpressionProperty({
    property: 'inset',
    valueTemplate: (v) => v,
  })
  inset?: string

  /**
   * @property overflow
   * Controls the overflow property of the container.
   * Supports all valid CSS overflow values.
   */
  @styleExpressionProperty({
    property: 'overflow',
    valueTemplate: (v) => v,
  })
  overflow?: string

  /**
   * @property opacity
   * Controls the opacity property of the divider.
   * Supports all the opacity tokens from the design system.
   * You can apply opacity like this:
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

  /**
   * @property align
   * Controls the align-items property of the container.
   * Supports all valid CSS align-items values.
   */
  @styleExpressionProperty({
    property: 'align-items',
    valueTemplate: (v) => v,
  })
  align?: string

  /**
   * @property justify
   * Controls the justify-content property of the container.
   * Supports all valid CSS justify-content values.
   */
  @styleExpressionProperty({
    property: 'justify-content',
    valueTemplate: (v) => v,
  })
  justify?: string

  /**
   * @property direction
   * Controls the flex-direction property of the container.
   * Supports all valid CSS flex-direction values.
   */
  @styleExpressionProperty({
    property: 'flex-direction',
    valueTemplate: (v) => v,
  })
  direction?: string

  // https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column

  /**
   * @property column
   * Controls the grid-column property of the container.
   * Supports all valid CSS grid-column values.
   * Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   *
   * @example
   * ```html
   * <gds-container column="2 / -1"></gds-container>
   * ```
   * The above example will apply the grid-column style of `2 / -1`.
   * The column can be applied to the container using shorthand like column="1 / 2"
   * The column also support breakpoint syntax like this:
   * ```html
   * <gds-container column="s{1 / 2} m{2 / 3} l{3 / 4}"></gds-container>
   * ```
   */
  @styleExpressionProperty({
    property: 'grid-column',
    valueTemplate: (v) => `${v}`,
  })
  column?: string

  /**
   * @property row
   * Controls the grid-row property of the container.
   * Supports all valid CSS grid-row values.
   *
   * Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   *
   * @example
   * ```html
   * <gds-container row="2 / -1"></gds-container>
   * ```
   * The above example will apply the grid-row style of `2 / -1`.
   * The row can be applied to the container using shorthand like row="1 / 2"
   * The row also support breakpoint syntax like this:
   * ```html
   * <gds-container row="s{1 / 2} m{2 / 3} l{3 / 4}"></gds-container>
   * ```
   */
  @styleExpressionProperty({
    property: 'grid-row',
    valueTemplate: (v) => `${v}`,
  })
  row?: string

  /**
   * @property filter
   * Controls the backdrop-filter property of the container.
   * When you want to apply a backdrop blur filter to the container you can use this property.
   *
   * @example
   * ```html
   * <gds-container filter="20px"></gds-container>
   * ```
   *
   * The above example will apply a backdrop blur filter of `20px`.
   *
   *  The filter also support breakpoint syntax like this:
   * ```html
   * <gds-container filter="s{20px} m{40px} l{60px}"></gds-container>
   * ```
   *
   * The above example will apply the filter style of `20px` for `small` devices, `40px` for `medium` devices, and `60px` for large devices.
   */
  @styleExpressionProperty({
    property: 'backdrop-filter',
    valueTemplate: (v) => `blur(${v})`,
  })
  filter?: string

  /**
   * @property radius
   * Controls the border-radius property of the container.
   * Supports all the size tokens from the design system.
   *
   * @example
   * You can apply radius in each corner like this:
   * ```html
   * <gds-container radius="none none m m" ></gds-container>
   * ```
   *
   * Also for different breakpoints like this:
   * ```html
   * <gds-container radius="s{none none xs} m{none xs none xs} l{s}" ></gds-container>
   * ```
   *
   * Each corner can have a different radius value and also different values for different breakpoints.
   */
  @styleExpressionProperty({
    property: 'border-radius',
    valueTemplate: (v) => `var(--gds-space-${v})`,
  })
  radius?: string

  /**
   * @property background
   * Controls the background property of the container.
   * Supports all the color tokens from the design system.
   */
  @styleExpressionProperty({
    property: 'background',
    valueTemplate: (v) => v,
  })
  background?: string

  /**
   * @property border
   * Controls the border property of the card.
   * Supports all tokens from the design system.
   * Can be specified for each side useing the color token like this:
   * ```html
   * <gds-container border="currentColor transparent transparent transparent"></gds-container>
   * ```
   *
   * Also for different breakpoints like this:
   * ```html
   * <gds-container border="s{currentColor} m{currentColor} l{currentColor}"></gds-container>
   * ```
   *
   * When you want to apply the border in all breakpoints and sides you can use the following:
   * ```html
   * <gds-container border="currentColor"></gds-container>
   * ```
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `1px solid ${v}`,
    styleTemplate: (_prop, values) => {
      const top = values[0]
      const right = values.length > 1 ? values[1] : top
      const bottom = values.length > 2 ? values[2] : top
      const left = values.length > 3 ? values[3] : top
      return `border-top: ${top}; border-right: ${right}; border-bottom: ${bottom}; border-left: ${left};`
    },
  })
  border?: string

  /**
   * @property color
   * Controls the color property of the container.
   * Supports all the color tokens from the design system.
   *
   * @example
   * ```html
   * <gds-container color="primary"></gds-container>
   * ```
   * The above example will apply the color style of `primary`.
   */
  @styleExpressionProperty({
    property: 'color',
    valueTemplate: (v) => `var(--gds-sys-color-${v})`,
  })
  color?: string

  /**
   * @property height
   * Controls the height property of the container.
   * Supports all valid CSS height values.
   */
  @styleExpressionProperty({
    property: 'height',
    valueTemplate: (v) => v,
  })
  height?: string

  /**
   * @property width
   * Controls the width property of the container.
   * Supports all valid CSS height values.
   */
  @styleExpressionProperty({
    property: 'width',
    valueTemplate: (v) => v,
  })
  width?: string

  /**
   * @property stack
   * Controls the z-index property of the container.
   * Supports all valid CSS z-index values.
   */
  @styleExpressionProperty({
    property: 'z-index',
    valueTemplate: (v) => v,
  })
  stack?: string

  /**
   * @property mask
   * Controls the mask-image property of the container.
   * Adds a predefined style of mask to the container.
   *
   * @example
   *
   * ```html
   * <gds-container mask="top"></gds-container>
   * ```
   * The above example will apply the mask style of `top` with `40%` transparency.
   *
   */
  @styleExpressionProperty({
    property: 'mask-image',
    valueTemplate: (v) =>
      `linear-gradient(to ${v}, currentColor 40%, transparent)`,
  })
  mask?: string

  render() {
    return html`<slot></slot>`
  }
}
