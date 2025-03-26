import { html } from 'lit/static-html.js'

import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsFlex } from '../flex/flex.component'
import MaskCSS from './mask.style'

/**
 * @element gds-mask
 * @status beta
 */
@gdsCustomElement('gds-mask')
export class GdsMask extends GdsFlex {
  static styles = [tokens, MaskCSS]

  @styleExpressionProperty({
    selector: '[part="mask"]',
    valueTemplate: (v) => {
      const [direction] = v.split('/')
      return `linear-gradient(to ${direction}, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)`
    },
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

  @styleExpressionProperty({
    selector: '[part="mask"]',
    valueTemplate: function (v) {
      const [backgroundColor, backgroundColorAlpha] = v.split('/')
      const background = backgroundColorAlpha
        ? `color-mix(in srgb, var(--gds-color-${'l' + (this as GdsFlex).level}-background-${backgroundColor}) ${parseFloat(backgroundColorAlpha) * 100}%, transparent 0%)`
        : `var(--gds-color-${'l' + (this as GdsFlex).level}-background-${backgroundColor})`
      return background
    },
  })
  'background-color'?: string

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
    this.inset = '0'
  }

  render() {
    return html`<div part="mask"></div>
      <div part="content"><slot></slot></div>`
  }
}
