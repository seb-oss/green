import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import {
  forColorTokens,
  forSpaceTokens,
  GdsColorLevel,
  parseColorValue,
} from '../../utils/helpers'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withPaddingProps,
  withPositioningProps,
  withSizeXProps,
  withSizeYProps,
} from '../../utils/mixins/declarative-layout-mixins'
import style from './div.style'

/**
 * @element gds-div
 * @status beta
 *
 * `gds-div` is the base element in the declarative layout system.
 */
@gdsCustomElement('gds-div')
export class GdsDiv extends withSizeXProps(
  withSizeYProps(
    withMarginProps(
      withPaddingProps(withLayoutChildProps(withPositioningProps(GdsElement))),
    ),
  ),
) {
  static styles = [tokens, style]

  /**
   * Controls the display property.
   * Supports all valid CSS display values.
   */
  @styleExpressionProperty()
  display?: string

  /**
   * The level of the container is used to resolve the color tokens from the corresponding level.
   * Check the [Color System documentation page](./?path=/docs/style-colors--docs) for more information.
   *
   * Default for `gds-div` is level 2.
   *
   */
  @property()
  level: GdsColorLevel = '2'

  /**
   * Style Expression Property that controls the `color` property.
   * Only accepts color tokens and an optional transparency value, in the format tokenName/transparency.
   *
   * ```html
   * <gds-div color="primary/0.2"></gds-div>
   * ```
   */
  @styleExpressionProperty(forColorTokens('content'))
  color?: string

  /**
   * Style Expression Property that controls the `background` property.
   * Only accepts color tokens and an optional transparency value, in the format tokenName/transparency.
   *
   * ```html
   * <gds-div background="primary/0.2"></gds-div>
   * ```
   */
  @styleExpressionProperty(forColorTokens('background'))
  background?: string

  /**
   * Style Expression Property that controls the `border` property.
   * Accepts a string of the same format as the CSS border property.
   *
   * ```html
   * <gds-div border="4xs solid primary/0.2"></gds-div>
   * ```
   *
   * Where the size value accepts space tokens and the color value accepts color tokens and an optional transparency value.
   */
  @styleExpressionProperty({
    styleTemplate: function (_prop, values) {
      const this_ = this as GdsDiv
      const [
        size,
        style = this_['border-style'] || 'solid',
        color = this_['border-color'] || 'primary',
      ] = values
      const sizeCss = `var(--gds-sys-space-${size})`
      const colorCss = parseColorValue(color, 'border', this_.level)
      return `border: ${sizeCss} ${style} ${colorCss};`
    },
  })
  border?: string

  /**
   * Style Expression Property that controls the `border-color` property.
   * Only accepts color tokens and an optional transparency value, in the format tokenName/transparency.
   *
   * ```html
   * <gds-div border-color="primary/0.2"></gds-div>
   * ```
   */
  @styleExpressionProperty(forColorTokens('border'))
  'border-color'?: string

  /**
   * Style Expression Property that controls the `border-width` property.
   * Only accepts space tokens.
   */
  @styleExpressionProperty(forSpaceTokens)
  'border-width'?: string

  /**
   * Style Expression Property that controls the `border-style` property.
   * Supports all valid CSS `border-style` values.
   */
  @styleExpressionProperty()
  'border-style'?: string

  /**
   * Style Expression Property that controls the `border-radius` property.
   * Only accepts space tokens.
   */
  @styleExpressionProperty(forSpaceTokens)
  'border-radius'?: string

  /**
   * Style Expression Property for the `box-shadow` property.
   *
   * Accepts shadow tokens from the design system.
   *
   * `xs`, `s`, `m`, `l`, `xl`
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `var(--gds-sys-shadow-${v})`,
  })
  'box-shadow'?: string

  /**
   * Style Expression Property that controls the `opacity` property.
   * Supports all valid CSS `opacity` values.
   */
  @styleExpressionProperty()
  opacity?: string

  /**
   * Style Expression Property that controls the `overflow` property.
   * Supports all valid CSS `overflow` values.
   */
  @styleExpressionProperty()
  overflow?: string

  /**
   * Style Expression Property that controls the `box-sizing` property.
   * Supports all valid CSS `box-sizing` values.
   */
  @styleExpressionProperty()
  'box-sizing'?: string

  /**
   * Style Expression Property that controls the `z-index` property.
   * Supports all valid CSS `z-index` values.
   */
  @styleExpressionProperty()
  'z-index'?: string

  /**
   * Style Expression Property that controls the `font-size` property.
   * Supports all typography size tokens from the design system.
   */
  @styleExpressionProperty({
    styleTemplate: (_prop, values) => {
      const size = values[0]
      return `font: var(--gds-sys-text-${size});`
    },
  })
  'font-size'?: string

  /**
   * Style Expression Property that controls the `font-weight` property.
   * Supports all typography weight tokens from the design system.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `var(--gds-sys-text-weight-${v})`,
  })
  'font-weight'?: string

  /**
   * Style Expression Property that controls the `text-align` property.
   * Supports all valid CSS `text-align` values.
   */
  @styleExpressionProperty()
  'text-align'?: string

  /**
   * Style Expression Property that controls the `text-wrap` property.
   * Supports all valid CSS `text-wrap` values.
   */
  @styleExpressionProperty()
  'text-wrap'?: string

  /**
   * Style Expression Property that controls the `overflow-wrap` property.
   * Supports all valid CSS `overflow-wrap` values.
   */
  @styleExpressionProperty()
  'overflow-wrap'?: string

  /**
   * Style Expression Property that controls the `white-space` property.
   * Supports all valid CSS `white-space` values.
   */
  @styleExpressionProperty()
  'white-space'?: string

  /**
   * Style Expression Property that controls the `gap` property.
   * Only accepts space tokens.
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
   * Style Expression Property that controls the `align-items` property.
   * Supports all valid CSS `align-items` values.
   */
  @styleExpressionProperty()
  'align-items'?: string

  /**
   * Style Expression Property that controls the `align-content` property.
   * Supports all valid CSS `align-content` values.
   */
  @styleExpressionProperty()
  'align-content'?: string

  /**
   * Style Expression Property that controls the `justify-content` property.
   * Supports all valid CSS `justify-content` values.
   */
  @styleExpressionProperty()
  'justify-content'?: string

  /**
   * Style Expression Property that controls the `justify-items` property.
   * Supports all valid CSS `justify-items` values.
   */
  @styleExpressionProperty()
  'justify-items'?: string

  /**
   * Style Expression Property that controls the `flex-direction` property.
   * Supports all valid CSS `flex-direction` values.
   */
  @styleExpressionProperty()
  'flex-direction'?: string

  /**
   * Style Expression Property that controls the `flex-wrap` property.
   * Supports all valid CSS `flex-wrap` values.
   */
  @styleExpressionProperty()
  'flex-wrap'?: string

  /**
   * Style Expression Property that controls the `place-items` property.
   * Supports all valid CSS `place-items` values.
   */
  @styleExpressionProperty()
  'place-items'?: string

  /**
   * Style Expression Property that controls the `place-content` property.
   * Supports all valid CSS `place-content` values.
   */
  @styleExpressionProperty()
  'place-content'?: string

  render() {
    return html`<slot></slot>`
  }
}
