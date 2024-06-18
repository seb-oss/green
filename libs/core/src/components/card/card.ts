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
    valueTemplate: (v) => `var(--gds-sys-color-${v})`,
  })
  background?: string

  // @styleExpressionProperty({
  //   property: 'border',
  //   valueTemplate: (v) => `1px solid ${v}`,
  // })
  // border?: string

  @styleExpressionProperty({
    valueTemplate: (v) => `1px solid ${v}`,
    styleTemplate: (_prop, values) => {
      const top = values[0]
      const right = values[1]
      const bottom = values[2]
      const left = values[3]
      return `border-top: ${top}; border-right: ${right}; border-bottom: ${bottom}; border-left: ${left};`
    },
  })
  border?: string

  render() {
    return html`<slot></slot>`
  }
}
