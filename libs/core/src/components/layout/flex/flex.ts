import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { tokens } from '../../../tokens.style'
import { styleExpressionProperty } from '../../../utils/decorators/style-expression-property'

import FlexCSS from './flex.style.css'
import { GdsContainer } from '../container'

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
export class GdsFlex extends GdsContainer {
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
   * Controls the align-items property of the flex.
   * Supports all valid CSS align-items values.
   */
  @styleExpressionProperty({
    property: 'align-items',
    valueTemplate: (v) => v,
  })
  align?: string

  /**
   * Controls the justify-content property of the flex.
   * Supports all valid CSS justify-content values.
   */
  @styleExpressionProperty({
    property: 'justify-content',
    valueTemplate: (v) => v,
  })
  justify?: string

  /**
   * Controls the flex-direction property of the flex.
   * Supports all valid CSS flex-direction values.
   */
  @styleExpressionProperty({
    property: 'flex-direction',
    valueTemplate: (v) => v,
  })
  direction?: string

  connectedCallback(): void {
    super.connectedCallback()
    this.display = 'flex'
  }

  render() {
    return html`<slot></slot>`
  }
}
