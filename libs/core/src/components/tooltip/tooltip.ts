import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './style/tooltip.styles.scss'

/**
 * @element gds-tooltip
 *
 * @status beta
 */

@customElement('gds-tooltip')
export class GdsTooltip extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }


  render() { 
    return html`<div class="gds-tooltip">tooltip</div>` }
}
