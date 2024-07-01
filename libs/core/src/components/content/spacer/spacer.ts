import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../../gds-element'
import { tokens } from '../../../tokens.style'
import { styleExpressionProperty } from '../../../utils/decorators/style-expression-property'

@gdsCustomElement('gds-spacer')
export class GdsSpacer extends GdsElement {
  static styles = [tokens]

  @styleExpressionProperty({
    property: 'height',
    selector: 'div',
    valueTemplate: (v) => `var(--gds-space-${v})`,
  })
  size?: string

  render() {
    return html`<div></div>`
  }
}
