import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../../gds-element'
import { tokens } from '../../../tokens.style'
import { styleExpressionProperty } from '../../../utils/decorators/style-expression-property'

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
   * Controls the display property of the container.
   * Supports all valid CSS display values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  display = 'block'

  /**
   * Controls the color property of the container.
   * Supports all the color tokens from the design system.
   *
   * ```html
   * <gds-container color="primary"></gds-container>
   * ```
   *
   * The above example will apply the color style of `primary`.
   */
  @styleExpressionProperty({
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
   * Controls the background property of the card.
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
    valueTemplate: (v) => {
      const [colorName, transparency] = v.split('/')
      if (transparency) {
        return `color-mix(in srgb, var(--gds-sys-color-${colorName}) ${parseFloat(transparency) * 100}%, transparent 0%)`
      } else {
        return `var(--gds-color-${colorName})`
      }
    },
  })
  background?: string

  /**
   * Controls the border property of the card.
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
    valueTemplate: (v) => {
      const [size, color] = v.split('/')
      return `var(--gds-space-${size}) solid ${color ? `var(--gds-color-${color})` : 'currentColor'}`
    },
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
   * Controls the border-radius property of the container.
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
    property: 'border-radius',
    valueTemplate: (v) => `var(--gds-space-${v})`,
  })
  'border-radius'?: string

  /**
   * Controls the opacity property of the container.
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
   * <gds-flex padding="xl"></gds-flex>
   * ```
   *
   * `xl` in this case will be applied to all breakpoints and sides.
   *
   * Padding also support breakpoint syntax like this:
   *
   * ```html
   * <gds-flex padding="xs{s} m{m} l{xl}"></gds-flex>
   * ```
   *
   * The above example will apply the padding style of `xs` for `small` devices, `m` for `medium` devices, and `xl` for large devices.
   *
   */
  @styleExpressionProperty()
  padding?: string

  /**
   * Controls the margin of the text.
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
   * Controls the position property of the flex.
   * Supports all valid CSS position values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  position?: string

  /**
   * Controls the inset property of the flex.
   * Supports all valid CSS inset values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  inset?: string

  /**
   * Controls the overflow property of the flex.
   * Supports all valid CSS overflow values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  overflow?: string

  /**
   * Controls the grid-column property of the flex.
   * Supports all valid CSS grid-column values.
   * Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   *
   * ```html
   * <gds-flex column="2 / -1"></gds-flex>
   * ```
   *
   * The above example will apply the grid-column style of `2 / -1`.
   * The column can be applied to the flex using shorthand like column="1 / 2"
   *
   * The column also support breakpoint syntax like this:
   *
   * ```html
   * <gds-flex column="s{1 / 2} m{2 / 3} l{3 / 4}"></gds-flex>
   * ```
   */
  @styleExpressionProperty({
    property: 'grid-column',
    valueTemplate: (v) => `${v}`,
  })
  column?: string

  /**
   * Controls the grid-row property of the flex.
   * Supports all valid CSS grid-row values.
   *
   * Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   *
   * ```html
   * <gds-flex row="2 / -1"></gds-flex>
   * ```
   *
   * The above example will apply the grid-row style of `2 / -1`.
   * The row can be applied to the flex using shorthand like row="1 / 2"
   *
   * The row also support breakpoint syntax like this:
   *
   * ```html
   * <gds-flex row="s{1 / 2} m{2 / 3} l{3 / 4}"></gds-flex>
   * ```
   */
  @styleExpressionProperty({
    property: 'grid-row',
    valueTemplate: (v) => `${v}`,
  })
  row?: string

  /**
   * Controls the height property of the flex.
   * Supports all valid CSS height values.
   *
   * @property height
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  height?: string

  /**
   * Controls the width property of the flex.
   * Supports all valid CSS height values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  width?: string

  /**
   * Controls the z-index property of the flex.
   * Supports all valid CSS z-index values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'z-index'?: string

  render() {
    return html`<slot></slot>`
  }
}
