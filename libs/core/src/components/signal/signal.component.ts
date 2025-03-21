import { html } from 'lit/static-html.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import SignalCSS from './signal.style'

/**
 * @element gds-signal
 */
@gdsCustomElement('gds-signal')
export class GdsSignal extends GdsElement {
  static styles = [tokens, SignalCSS]

  /**
   * Change signal color based on variant.
   * The color can be customized using the `color` property.
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
