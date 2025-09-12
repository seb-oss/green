import { html } from 'lit/static-html.js'

import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { GdsColorLevel, parseColorValue } from '../../utils/helpers'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsFlex } from '../flex/flex.component'
import MaskStyles from './mask.styles'

/**
 * @element gds-mask
 * @status beta
 *
 * The `gds-mask` component is a container that applies gradient background for contrast. This component is experimental, and may change name or be removed in the future.
 */
@gdsCustomElement('gds-mask')
export class GdsMask extends GdsFlex {
  static styles = [tokens, MaskStyles]

  @styleExpressionProperty({
    selector: '[part="mask"]',
    valueTemplate: function (value) {
      const this_ = this as { level: GdsColorLevel }
      return parseColorValue(value, 'background', this_.level)
    },
  })
  override background?: string

  @styleExpressionProperty({
    valueTemplate: (v) => {
      const [direction] = v.split('/')
      return `linear-gradient(to ${direction}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`
    },
    selector: '[part="mask"]',
  })
  'mask-image'?: string

  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: '[part="mask"]',
  })
  'mask-size' = 'cover'

  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: '[part="mask"]',
  })
  'mask-repeat' = 'no-repeat'

  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: '[part="mask"]',
  })
  'mask-position' = 'center'

  /**
   * Controls the backdrop-filter property of the container.
   * When you want to apply a backdrop blur filter to the container you can use this property.
   *
   * ```html
   * <gds-mask backdrop-filter="20px"></gds-mask>
   * ```
   *
   * The above example will apply a backdrop blur filter of `20px`.
   *
   *  The filter also support breakpoint syntax like this:
   *
   * ```html
   * <gds-mask backdrop-filter="s{20px} m{40px} l{60px}"></gds-mask>
   * ```
   *
   * The above example will apply the filter style of `20px` for `small` devices, `40px` for `medium` devices, and `60px` for large devices.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: '[part="mask"]',
  })
  'backdrop-filter'?: string

  constructor() {
    super()
    this.position = 'relative'
    this.display = 'flex'
    this.inset = '0'
  }

  render() {
    return html`<div part="mask"></div>
      <slot></slot>`
  }
}
