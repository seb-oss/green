import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../../gds-element'
import { tokens } from '../../../tokens.style'
import { styleExpressionProperty } from '../../../utils/decorators/style-expression-property'

import FlexCSS from './flex.style.css'

/**
 * The `gds-flex` component is a flex element that can be used to wrap other components and control the layout of its children.
 *
 * It can be used in combination with other elements like `gds-grid`, `gds-card`, `gds-img`, `gds-text` etc.
 *
 * @element gds-flex
 * @status beta
 *
 */

@gdsCustomElement('gds-flex')
export class GdsFlex extends GdsElement {
  static styles = [tokens, FlexCSS]

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
   * @property gap
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
   * Controlling individually the vertical gap you can use this property.
   *
   * @property rowGap
   *
   */
  @styleExpressionProperty({
    property: '--_row-gap',
    valueTemplate: (v) => v,
  })
  rowGap?: string

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
   * @property padding
   */
  @styleExpressionProperty()
  padding?: string

  /**
   * Controls the margin of the text.
   * Supports all the default margin values.
   *
   * @property margin
   */
  @styleExpressionProperty()
  margin?: string

  /**
   * Controls the position property of the flex.
   * Supports all valid CSS position values.
   *
   * @property position
   */
  @styleExpressionProperty({
    property: 'position',
    valueTemplate: (v) => v,
  })
  position?: string

  /**
   * Controls the inset property of the flex.
   * Supports all valid CSS inset values.
   *
   * @property inset
   */
  @styleExpressionProperty({
    property: 'inset',
    valueTemplate: (v) => v,
  })
  inset?: string

  /**
   * Controls the overflow property of the flex.
   * Supports all valid CSS overflow values.
   *
   * @property overflow
   */
  @styleExpressionProperty({
    property: 'overflow',
    valueTemplate: (v) => v,
  })
  overflow?: string

  /**
   * Controls the align-items property of the flex.
   * Supports all valid CSS align-items values.
   *
   * @property align
   */
  @styleExpressionProperty({
    property: 'align-items',
    valueTemplate: (v) => v,
  })
  align?: string

  /**
   * Controls the justify-content property of the flex.
   * Supports all valid CSS justify-content values.
   *
   * @property justify
   */
  @styleExpressionProperty({
    property: 'justify-content',
    valueTemplate: (v) => v,
  })
  justify?: string

  /**
   * Controls the flex-direction property of the flex.
   * Supports all valid CSS flex-direction values.
   *
   * @property direction
   */
  @styleExpressionProperty({
    property: 'flex-direction',
    valueTemplate: (v) => v,
  })
  direction?: string

  /**
   * Controls the grid-column property of the flex.
   * Supports all valid CSS grid-column values.
   * Documentation: https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   *
   * @property column
   *
   * @example
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
   * @property row
   *
   * @example
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
    property: 'height',
    valueTemplate: (v) => v,
  })
  height?: string

  /**
   * Controls the width property of the flex.
   * Supports all valid CSS height values.
   *
   * @property width
   */
  @styleExpressionProperty({
    property: 'width',
    valueTemplate: (v) => v,
  })
  width?: string

  /**
   * Controls the z-index property of the flex.
   * Supports all valid CSS z-index values.
   *
   * @property stack
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
