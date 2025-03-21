import { property } from 'lit/decorators.js'

import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { styles } from './details-icon.style'

/**
 * @element gds-icon-details
 * @status beta
 */
@gdsCustomElement('gds-icon-details')
export class GdsIconDetails extends GdsElement {
  static styles = [styles]

  /**
   * Controls if the details is open
   */
  @property({ type: Boolean, reflect: true })
  open = false

  render() {
    return html`
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        id="plus"
      >
        <line x1="4" y1="10" x2="16" y2="10" />
        <line x1="10" y1="4" x2="10" y2="16">
          <animate
            attributeName="y1"
            dur="240ms"
            from="${this.open ? '4' : '10'}"
            to="${this.open ? '10' : '4'}"
            begin="plus.toggle"
            fill="freeze"
          />
          <animate
            attributeName="y2"
            dur="240ms"
            from="${this.open ? '16' : '10'}"
            to="${this.open ? '10' : '16'}"
            begin="plus.toggle"
            fill="freeze"
          />
        </line>
      </svg>
    `
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('open')) {
      const svg = this.shadowRoot?.querySelector('svg')
      if (svg) {
        const event = new CustomEvent('toggle', {
          bubbles: true,
          composed: true,
        })
        svg.dispatchEvent(event)
      }
    }
  }
}
