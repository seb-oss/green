import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import FlexCSS from './flex.style'
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
      return `gap: ${colGap} ${rowGap};`
    },
    cacheOverrideKey: 'flex',
  })
  gap?: string

  /**
   * Controls the `flex` property of the flex.
   * Supports all valid CSS flex property values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  flex?: string

  /**
   * Controls the `align-self` property of the flex.
   * Supports all valid CSS align-self values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'align-self'?: string

  /**
   * Controls the `align-items` property of the flex.
   * Supports all valid CSS align-items values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'align-items'?: string

  /**
   * Controls the `align-content` property of the flex.
   * Supports all valid CSS align-content values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'align-content'?: string

  /**
   * Controls the `justify-content` property of the flex.
   * Supports all valid CSS justify-content values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'justify-content'?: string

  /**
   * Controls the `place-content` property of the flex.
   * Supports all valid CSS place-content values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'place-content'?: string

  /**
   * Controls the `justify-items` property of the flex.
   * Supports all valid CSS justify-items values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'justify-items'?: string

  /**
   * Controls the `justify-self` property of the flex.
   * Supports all valid CSS justify-self values.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  'justify-self'?: string

  /**
   * Controls the flex-direction property of the flex.
   * Supports all valid CSS flex-direction values.
   */
  @styleExpressionProperty({
    property: 'flex-direction',
    valueTemplate: (v) => v,
  })
  'flex-direction'?: string

  connectedCallback(): void {
    super.connectedCallback()
    this.display = 'flex'
  }

  render() {
    return html`<slot></slot>`
  }
}
