import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { forSpaceTokens } from '../../utils/helpers'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsDiv } from '../div/div.component'
import GridStyles from './grid.styles'

/**
 * The `gds-grid` is a custom element that provides a flexible grid system. It uses CSS grid layout to arrange its child elements into columns. This component is highly customizable and responsive, allowing you to specify the number of `columns`, `gap`, `padding`, and fluidity for different devices with automated column size based on the content using the `auto-columns` attribute.
 *
 * @element gds-grid
 * @status beta
 *
 */
@gdsCustomElement('gds-grid')
export class GdsGrid extends GdsDiv {
  static styles = [tokens, GridStyles]

  /**
   * The number of columns for the grid. This can be a single value that applies to all breakpoints, or a string of three space-separated tokens in the format "l:desktop m:tablet s:mobile", each token specifying the number of columns for that device type respectively.
   * @example
   * ```html
   * <gds-grid columns="2"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid columns="l{8} m{4} s{2}"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @styleExpressionProperty({
    property: '--_c',
  })
  columns?: string

  /**
   * Defines the gap size between grid items. Accepts a single value for all breakpoints or a "l:desktop m:tablet s:mobile" format. Sizes can be 'none', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'.
   * @example
   * ```html
   * <gds-grid gap="m"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid gap="l{m} m{s} s{xs}"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @styleExpressionProperty({
    ...forSpaceTokens,
    styleTemplate: (_prop, values) => {
      const rowGap = values[0]
      const colGap = values[1] || rowGap
      return `--_gap-column: ${colGap}; --_gap-row: ${rowGap};`
    },
  })
  gap?: string

  /**
   * Defines the minimum column width. If set, the grid adjusts column size based on content and available width, even without other attributes.
   * @example
   * ```html
   * <gds-grid auto-columns="200px"></gds-grid> <!-- applies to all breakpoints -->
   * <gds-grid auto-columns="l{200px} m{100px} s{80px}"></gds-grid> <!-- different values for each breakpoint -->
   * ```
   */
  @styleExpressionProperty({
    property: '--_col-width',
    valueTemplate: (v) => `${isNaN(v as any) ? v : `${v}px`}`,
  })
  'auto-columns'?: string

  render() {
    return html`<slot></slot>`
  }
}
