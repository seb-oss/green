import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import FlexCSS from './flex.style.css'

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

@gdsCustomElement('gds-flex')
export class GdsFlex extends GdsElement {
  static styles = [tokens, FlexCSS]

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
   * @property margin
   * Controls the margin of the text.
   * Supports all the default margin values.
   */
  @styleExpressionProperty()
  margin?: string

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
   * Controls the overflow property of the container.
   * Supports all valid CSS overflow values.
   * @property overflow
   */
  @styleExpressionProperty({
    property: 'overflow',
    valueTemplate: (v) => v,
  })
  overflow?: string

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

  render() {
    return html`<slot></slot>`
  }
}
