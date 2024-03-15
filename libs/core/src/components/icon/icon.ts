import { LitElement, unsafeCSS, html, css } from 'lit'
import { property } from 'lit/decorators.js'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { tokens } from '../../tokens.style'
import style from './icon.style.css'

@gdsCustomElement('gds-icon')
export class GdsIcon extends LitElement {
  static styles = [tokens, unsafeCSS(style)]

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @property({ type: String }) name = ''

  render() {
    return html`<span class="gds-icon">${this.name}</span>`
  }
}
