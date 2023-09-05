import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './style/badge.styles.scss'

/**
 * @element gds-badge
 *
 * @status beta
 */

@customElement('gds-badge')
export class GdsBadge extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @property({ type: String, reflect: true, attribute: 'content' })
  badgeContent = 'SEK'
    // Disable content this.textContent
  render() { 
    const truncatedText = this.badgeContent ? this.badgeContent.substring(0, 3) : '';
    return html`<div class="gds-badge">${truncatedText}</div>` }
}
