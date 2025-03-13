import { property, state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './accordion.styles'

/**
 * @element gds-accordion
 * @status beta
 */
@gdsCustomElement('gds-accordion')
export class GdsAccordion extends GdsElement {
  static styles = [tokens, styles]

  /**
   * Summary of the accordion
   */
  @property()
  summary = ''

  /**
   * Accordion name
   */
  @property()
  name = ''

  /**
   * Controls if the accordion is open
   */
  @property({ type: Boolean, reflect: true })
  open = false

  /**
   * Controls the font-size of texts and height of the field.
   */
  @property({ type: String })
  size: 'large' | 'small' = 'large'

  @state()
  private isOpen = false
  connectedCallback(): void {
    super.connectedCallback()
    this.addEventListener('toggle', this.handleToggle)
    this.isOpen = this.open
  }

  disconnectedCallback() {
    this.removeEventListener('toggle', this.handleToggle)
    super.disconnectedCallback()
  }

  updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('open')) {
      this.isOpen = this.open
    }
  }

  private handleToggle = (event: Event) => {
    const details = event.target as HTMLDetailsElement
    this.isOpen = details.open
    this.open = details.open

    if (this.isOpen && this.name) {
      const others = document.querySelectorAll('gds-accordion')
      others.forEach((accordion) => {
        const acc = accordion as GdsAccordion
        if (acc !== this && acc.name === this.name) {
          acc.open = false
        }
      })
    }
  }

  render() {
    return html`<details
      ?open=${this.open}
      ?name=${this.name || ''}
      @toggle=${this.handleToggle}
      id="details"
    >
      <summary>
        <div class="label">${this.summary ? this.summary : 'Summary'}</div>
        <svg viewBox="0 0 20 20">
          <line x1="4" y1="10" x2="16" y2="10" />
          <line x1="10" y1="4" x2="10" y2="16">
            <animate
              attributeName="y1"
              dur="120ms"
              from="${this.isOpen ? '4' : '10'}"
              to="${this.isOpen ? '10' : '4'}"
              begin="details.toggle"
              fill="freeze"
            />
            <animate
              attributeName="y2"
              dur="120ms"
              from="${this.isOpen ? '16' : '10'}"
              to="${this.isOpen ? '10' : '16'}"
              begin="details.toggle"
              fill="freeze"
            />
          </line>
        </svg>
      </summary>
      <div class="content">
        <slot></slot>
      </div>
    </details> `
  }
}
