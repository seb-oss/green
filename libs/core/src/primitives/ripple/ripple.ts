import { LitElement, html, unsafeCSS } from 'lit'

import styles from './ripple.styles.scss'
import { gdsCustomElement } from 'utils/helpers/custom-element-scoping'

@gdsCustomElement('gds-ripple')
export class Ripple extends LitElement {
  static get styles() {
    return unsafeCSS(styles)
  }

  open = true

  static properties = {
    open: { type: String, reflect: true },
  }

  render() {
    // console.log('is it working')
    return html`<div></div>`
  }
}
