import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import DividerCSS from './divider.style.css'

@gdsCustomElement('gds-divider')
export class GdsDivider extends GdsElement {
  static styles = [tokens, DividerCSS]

  @styleExpressionProperty()
  size?: string

  @styleExpressionProperty()
  color?: string

  // @styleExpressionProperty({
  //   valueTemplate: (v) => `${v}`,
  //   styleTemplate: (prop, values) => {
  //     const size = values[0]
  //     return `font-size: var(--gds-sys-typography-size-${size}); line-height: var(--gds-sys-typography-line-height-${size});`
  //   },
  // })
  // size?: string

  render() {
    return html`<slot><hr /></slot>`
  }
}
