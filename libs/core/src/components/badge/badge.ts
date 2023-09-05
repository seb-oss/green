import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'

import styles from './style/badge.styles.scss'

// Add "lib" Attribute for Font-Awesome or similar packages

@customElement('gds-badge')
export class GdsBadge extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  render() {
    return html`
      <div class="gds-badge>BADGE</div>
    `
  }
}
