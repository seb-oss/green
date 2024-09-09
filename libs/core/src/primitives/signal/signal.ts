import { html } from 'lit/static-html.js'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'

import SignalCSS from './signal.style.css'

@gdsCustomElement('gds-signal')
export class GdsSignal extends GdsElement {
  static styles = [tokens, SignalCSS]

  /**
   * Change signal color based on variant
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `var(--gds-color-${v})`,
    selector: '[part="signal"]',
  })
  color?: string

  render() {
    return html`<div part="signal"></div>`
  }
}
