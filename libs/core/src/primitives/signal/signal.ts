import { html } from 'lit/static-html.js'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'

import SignalCSS from './signal.style.css'

@gdsCustomElement('gds-signal')
export class GdsSignal extends GdsElement {
  static styles = [tokens, SignalCSS]

  render() {
    return html`<div part="signal"></div>`
  }
}
