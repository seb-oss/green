import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'

import styles from './stem.styles.scss'

// Add "lib" Attribute for Font-Awesome or similar packages 

@customElement('gds-icon')
export class GdsIcon extends LitElement {

  static get styles() {
    return unsafeCSS(styles);
  }

  open = false
  name = ''

  static properties = {
    open: { type: String, reflect: true },
    name: { type: String },
  }

  render() {
    const { name } = this;
    return html`
      <svg display="none">
        <symbol id="plus">
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </symbol>
        <symbol id="x">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </symbol>
        <symbol id="chevron">
          <polyline points="9 18 15 12 9 6" />
        </symbol>
      </svg>
      <svg viewBox="0 0 24 24">
        <use href="#${name}" ></use>
      </svg>
    `
  }
}

export const IconReact = createComponent({
  tagName: 'gds-icon',
  elementClass: GdsIcon,
  react: React,
})
