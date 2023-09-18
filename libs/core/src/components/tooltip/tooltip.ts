import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import styles from './style/tooltip.styles.scss'
import { ifDefined } from 'lit/directives/if-defined.js'

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
  tooltip = null

  @property() content = '';

  render() { 
    return html`
      <div 
        class="gds-tooltip" 
        content=${this.tooltip}
      >
        <slot slot="anchor"></slot>
        <div part="body" class="gds-tooltip-body" >
          <slot name="content">${this.content}</slot>
        </div>
      </div>
    ` }
}
