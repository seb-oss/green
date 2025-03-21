import { html, unsafeCSS } from 'lit'
import { query } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../scoping'
import { tokens } from '../../tokens.style'
import styles from './ripple.styles.scss?inline'

@gdsCustomElement('gds-ripple')
export class GdsRipple extends GdsElement {
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
