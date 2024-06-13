import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import IMGCSS from './img.style.css'

@gdsCustomElement('gds-img')
export class GdsIMG extends GdsElement {
  static styles = [tokens, IMGCSS]

  @styleExpressionProperty({
    property: '--_ratio',
    valueTemplate: (v) => `${v}`,
  })
  ratio?: string

  @styleExpressionProperty({
    property: '--_position',
    valueTemplate: (v) => v,
  })
  position?: string

  @styleExpressionProperty({
    property: '--_inset',
    valueTemplate: (v) => v,
  })
  inset?: string

  @styleExpressionProperty({
    property: '--_opacity',
    valueTemplate: (v) => v,
  })
  opacity?: string

  @styleExpressionProperty({
    property: '--_fit',
    valueTemplate: (v) => v,
  })
  fit?: string

  @property()
  src?: string

  @property()
  alt?: string

  render() {
    return html`<figure><img src="${this.src}" alt="${this.alt}" /></figure>`
  }
}
