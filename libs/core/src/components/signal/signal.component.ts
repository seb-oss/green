import { html } from 'lit/static-html.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { forColorTokens } from '../../utils/helpers'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import SignalStyles from './signal.styles'

/**
 * @element gds-signal
 */
@gdsCustomElement('gds-signal')
export class GdsSignal extends GdsElement {
  static styles = [tokens, SignalStyles]

  /**
   * Change signal color based on variant.
   * The color can be customized using the `color` property.
   */
  @styleExpressionProperty({
    ...forColorTokens('content'),
    selector: '[part="signal"]',
  })
  color?: string

  render() {
    return html`<div part="signal"></div>`
  }
}
