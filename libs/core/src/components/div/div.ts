import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  forColorTokens,
  forSpaceTokens,
  forSpaceTokensSupportingNegative,
  GdsColorLevel,
  parseColorValue,
} from '../../utils/helpers'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import ContainerCSS from './div.style'

/**
 * `gds-container` is the base element in the declarative layout system. You can think of it as a `<div>` in html.
 *
 * Container is set to `display: block` by default, and adds all of the basic layoutout related properties, like padding, margin, border, etc.
 *
 *
 *
 * @element gds-div
 * @status beta
 *
 */

@gdsCustomElement('gds-div')
export class GdsDiv extends GdsElement {
  static styles = [tokens, ContainerCSS]

  /**
   * Controls the display property.
   * Supports all valid CSS display values.
   */
  @styleExpressionProperty()
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
  level: GdsColorLevel = '2'

  /**
   * Controls the `place-items` property.
   * Supports all valid CSS `place-items` values.
   */
  @styleExpressionProperty()
  'place-items'?: string

  /**
   * Controls the `place-content` property.
   * Supports all valid CSS `place-content` values.
   */
  @styleExpressionProperty()
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
  @styleExpressionProperty(forColorTokens('content'))
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

  @styleExpressionProperty(forColorTokens('background'))
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
   * <gds-container border="4xs solid primary/0.2"></gds-container>
   * ```
   */
  @styleExpressionProperty({
    styleTemplate: function (_prop, values) {
      const [size, style, color] = values
      const sizeCss = `var(--gds-space-${size})`
      const colorCss = color
        ? parseColorValue(color, 'border', (this as GdsDiv).level)
        : ''
      return `border: ${sizeCss} ${style || ''} ${colorCss};`
    },
  })
  border?: string

  /**
   * Controls the border-color property.
   * Supports all the color tokens from the design system.
   */
  @styleExpressionProperty(forColorTokens('border'))
  'border-color' = 'primary'

  /**
   * Controls the border-width property.
   * Supports all the border style values.
   */
  @styleExpressionProperty(forSpaceTokens)
  'border-width' = '0'

  /**
   * Controls the border-width property.
   * Supports all the border style values.
   */
  @styleExpressionProperty()
  'border-style' = 'solid'

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
   * `0, 4xs, 3xs, 2xs, xs, s, m, l, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, max`
   *
   */
  @styleExpressionProperty(forSpaceTokens)
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
  @styleExpressionProperty()
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
  @styleExpressionProperty(forSpaceTokens)
  padding?: string

  @styleExpressionProperty(forSpaceTokens)
  'padding-inline'?: string

  @styleExpressionProperty(forSpaceTokens)
  'padding-block'?: string

  /**
   * Controls the margin property.
   * Supports all the default margin values.
   */
  @styleExpressionProperty(forSpaceTokensSupportingNegative)
  margin?: string

  /**
   * Controls the position property.
   * Supports all valid CSS position values.
   */
  @styleExpressionProperty()
  position?: string

  /**
   * Controls the inset property.
   * Supports all valid CSS inset values.
   */
  @styleExpressionProperty()
  inset?: string

  /**
   * Controls the overflow property.
   * Supports all valid CSS overflow values.
   */
  @styleExpressionProperty()
  overflow?: string

  /**
   * Controls the height property.
   * Supports all valid CSS height values.
   *
   * @property height
   */
  @styleExpressionProperty()
  height?: string

  /**
   * Controls the `max-height` property.
   * Supports all valid CSS `max-height` values.
   *
   * @property max-height
   */
  @styleExpressionProperty()
  'max-height'?: string

  /**
   * Controls the `min-height` property.
   * Supports all valid CSS `min-height` values.
   *
   * @property min-height
   */
  @styleExpressionProperty()
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
  @styleExpressionProperty()
  width?: string

  /**
   * Controls the `max-width` property.
   * Supports all valid CSS `max-width` values.
   *
   * @property max-width
   */
  @styleExpressionProperty()
  'max-width'?: string

  /**
   * Controls the `min-width` property.
   * Supports all valid CSS `min-width` values.
   *
   * @property min-width
   */
  @styleExpressionProperty()
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
   * Controls the `box-sizing` property.
   * Supports only token
   *
   * @property box-sizing
   */
  @styleExpressionProperty()
  'box-sizing' = 'border-box'

  /**
   * Controls the z-index property.
   * Supports all valid CSS z-index values.
   */
  @styleExpressionProperty()
  'z-index'?: string

  /**
   * Controls the `transform` property.
   * Supports all valid CSS `transform` values.
   *
   * @property transform
   */
  @styleExpressionProperty()
  transform?: string

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
    styleTemplate: (_prop, values) => {
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
   * Controls the text-align property of the text.
   * Supports all valid CSS text-align values.
   *
   * @property align
   */
  @styleExpressionProperty()
  'text-align'?: string

  /**
   * Controls the text-wrap property of the text.
   * Supports all valid CSS text-wrap values.
   *
   * @property wrap
   */
  @styleExpressionProperty()
  'text-wrap'?: string

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
  @styleExpressionProperty()
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
  @styleExpressionProperty()
  'grid-row'?: string

  /**
   * Controls the `flex` property.
   * Supports all valid CSS `flex` values.
   *
   * Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/flex
   */
  @styleExpressionProperty()
  flex?: string

  /**
   * Controls the gap property of the flex.
   * Supports all space tokens as value.
   *
   * You can apply gap in each column and row like this:
   * ```html
   * <gds-flex gap="m s"></gds-flex>
   * ```
   *
   * The `gap` can be applied on `flex` using shorthand like gap="m s"
   *
   * Gap also support breakpoint syntax like this:
   * ```html
   * <gds-flex gap="xs{s} m{m} l{xl}"></gds-flex>
   * ```
   * The above example will apply the gap style of `xs` for `small` devices, `m` for `medium` devices, and `xl` for large devices.
   *
   */
  @styleExpressionProperty({
    ...forSpaceTokens,
    styleTemplate: (_prop, values) => {
      const colGap = values[0]
      const rowGap = values[1] || colGap
      return `gap: ${colGap} ${rowGap};`
    },
    cacheOverrideKey: 'flex',
  })
  gap?: string

  /**
   * Controls the `align-self` property of the flex.
   * Supports all valid CSS align-self values.
   */
  @styleExpressionProperty()
  'align-self'?: string

  /**
   * Controls the `align-items` property of the flex.
   * Supports all valid CSS align-items values.
   */
  @styleExpressionProperty()
  'align-items'?: string

  /**
   * Controls the `align-content` property of the flex.
   * Supports all valid CSS align-content values.
   */
  @styleExpressionProperty()
  'align-content'?: string

  /**
   * Controls the `justify-content` property of the flex.
   * Supports all valid CSS justify-content values.
   */
  @styleExpressionProperty()
  'justify-content'?: string

  /**
   * Controls the `justify-items` property of the flex.
   * Supports all valid CSS justify-items values.
   */
  @styleExpressionProperty()
  'justify-items'?: string

  /**
   * Controls the `justify-self` property of the flex.
   * Supports all valid CSS justify-self values.
   */
  @styleExpressionProperty()
  'justify-self'?: string

  /**
   * Controls the flex-direction property of the flex.
   * Supports all valid CSS flex-direction values.
   */
  @styleExpressionProperty()
  'flex-direction'?: string

  /**
   * Controls the flex-wrap property of the flex.
   * Supports all valid CSS flex-wrap values.
   */
  @styleExpressionProperty()
  'flex-wrap'?: string

  render() {
    return html`<slot></slot>`
  }
}
