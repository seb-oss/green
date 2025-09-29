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
 *
 */
@gdsCustomElement('gds-grid')
export class GdsGrid extends GdsDiv {
  static styles = [tokens, GridStyles]

  /**
   * The number of columns to divide the space into. Accepts a unitless number. Example: `1; m { 2 }; l { 4 }` to vary number of columns based on viewport size.
   */
  @styleExpressionProperty({
    property: '--_c',
  })
  columns?: string

  /**
   * Defines the gap size between grid items. Uses same format as the CSS gap property, and expects space tokens. This can be a single value that applies to all breakpoints, or a string of three space-separated tokens in the format "l:desktop m:tablet s:mobile", each token specifying the gap size for that device type respectively.
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
   * Defines the minimum column width. If set, the grid adjusts column size based on content and available width, even without other attributes. Accepts any valid CSS units.
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
