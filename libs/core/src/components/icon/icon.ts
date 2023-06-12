import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'

import styles from './stem.styles.scss'

// Add "lib" Attribute for Font-Awesome or similar packages

@customElement('gds-icon')
export class GdsIcon extends LitElement {
  static get styles() {
    return unsafeCSS(styles)
  }

  open = false
  name = ''

  static properties = {
    open: { type: String, reflect: true },
    name: { type: String },
  }

  render() {
    const { name } = this
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
        <symbol id="arrow">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </symbol>
        <symbol id="bell">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </symbol>
        <symbol id="calendar">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10" />
        </symbol>
      </svg>
      <svg viewBox="0 0 24 24">
        <use href="#${name}"></use>
      </svg>
    `
  }
}
