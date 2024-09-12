import { html } from 'lit/static-html.js'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'

@gdsCustomElement('gds-mask')
export class GdsMask extends GdsElement {
  static styles = [tokens]

  @styleExpressionProperty({
    valueTemplate: (v) => v,
  })
  display = 'contents'

  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: '[part="mask"]',
  })
  inset = '0'

  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: '[part="mask"]',
  })
  position = 'absolute'

  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: '[part="mask"]',
  })
  'z-index' = '-1'

  @styleExpressionProperty({
    selector: '[part="mask"]',
    valueTemplate: (v) => {
      const [direction] = v.split('/')
      return `linear-gradient(to ${direction}, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)`
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
    valueTemplate: (v) => {
      const [backgroundColor, backgroundColorAlpha] = v.split('/')
      const background = backgroundColorAlpha
        ? `color-mix(in srgb, var(--gds-color-${backgroundColor}) ${parseFloat(backgroundColorAlpha) * 100}%, transparent 0%)`
        : `var(--gds-color-${backgroundColor})`
      return background
    },
  })
  'background-color'?: string

  @styleExpressionProperty({
    valueTemplate: (v) => v,
    selector: '[part="mask"]',
  })
  'backdrop-filter'?: string

  render() {
    return html`<div part="mask"></div>`
  }
}
