import { LitElement, html, unsafeCSS, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
// import './style/tooltip.styles.css';
import { ifDefined } from 'lit/directives/if-defined.js'
import styles from './style/tooltip.styles.css';

/**
 * @element gds-tooltip
 *
 * @status beta
 */

// TODO: 
// Use popover component

@customElement('gds-tooltip')
export class GdsTooltip extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @property({ type: String, reflect: true, attribute: 'content' })
  content = null

  @property({ type: String, reflect: true, attribute: 'position' })
  position = null


  render() { 
    return html`
      <div 
        class="gds-tooltip" 
        content=${this.content}
        position=${this.position}
      >
        <slot slot="anchor"></slot>
      </div>
    ` }
}
