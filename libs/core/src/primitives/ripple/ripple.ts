import { LitElement, html, unsafeCSS } from 'lit'
import { query } from 'lit/decorators.js'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import styles from './ripple.styles.scss'
import { tokens } from '../../tokens.style'

@gdsCustomElement('gds-ripple')
export class Ripple extends LitElement {
  static styles = [tokens, unsafeCSS(styles)]

  @query('div') private _rippleEl?: HTMLDivElement

  render() {
    return html`<div></div>`
  }

  onmousedown = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const rect = target.getBoundingClientRect()
    const rippleEl = this._rippleEl

    if (rippleEl) {
      rippleEl.classList.remove('gds-ripple-effect')
      this.style.setProperty('--gds-ripple-top', `${e.clientY - rect.top}px`)
      this.style.setProperty('--gds-ripple-left', `${e.clientX - rect.left}px`)
      setTimeout(() => {
        rippleEl.classList.add('gds-ripple-effect')
      }, 20)
    }
  }
}
