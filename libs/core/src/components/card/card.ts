import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import CardCSS from './card.style.css'

@gdsCustomElement('gds-card')
export class GdsCard extends GdsElement {
  static styles = [tokens, CardCSS]

  @styleExpressionProperty({
    property: 'overflow',
    valueTemplate: (v) => v,
  })
  overflow?: string

  @styleExpressionProperty({
    property: 'box-shadow',
    valueTemplate: (v) => `var(--gds-shadow-${v})`,
  })
  shadow?: string

  @styleExpressionProperty({
    property: 'border-radius',
    valueTemplate: (v) => `var(--gds-sys-radii-${v})`,
  })
  radius?: string

  @styleExpressionProperty({
    property: 'background',
    valueTemplate: (v) => v,
  })
  background?: string

  @property({ attribute: 'border', type: String })
  border?: string

  @property({ attribute: 'hovered', type: Boolean })
  hovered?: boolean

  render() {
    return html`<slot></slot>`
  }
}
