import * as React from 'react'
import { LitElement, html, unsafeCSS } from 'lit'
import { customElement} from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'

import styles from './ripple.styles.scss'

@customElement('gds-ripple')
export class Ripple extends LitElement {
  static get styles() {
    return unsafeCSS(styles);
  }

  open = true

  static properties = {
    open: { type: String, reflect: true },
  }

  
  render() {
    console.log("is it working");
    return html`<div></div>`
  }
}

export const RippleReact = createComponent({
  tagName: 'gds-ripple',
  elementClass: Ripple,
  react: React,
})
