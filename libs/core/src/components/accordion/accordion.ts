import { HTMLTemplateResult } from 'lit'
import { property, state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

import '../button/button'
import '../rich-text/rich-text'
import '../icon/icons/plus-large'
import '../icon/icons/minus-large'

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

  @state()
  private isOpen = false

  constructor() {
    super()
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.addEventListener('toggle', this.handleToggle)

    // Listen for custom accordion events
    window.addEventListener(
      'gds-accordion-opened',
      this.handleOtherAccordions.bind(this),
    )
  }

  disconnectedCallback() {
    this.removeEventListener('toggle', this.handleToggle)
    window.removeEventListener(
      'gds-accordion-opened',
      this.handleOtherAccordions.bind(this),
    )
    super.disconnectedCallback()
  }

  private handleOtherAccordions(event: Event) {
    // Check if this is another accordion with the same name
    const customEvent = event as CustomEvent
    if (
      this.name &&
      customEvent.detail.name === this.name &&
      customEvent.detail.sourceId !== this.id
    ) {
      this.isOpen = false
      // Force the details element to close
      const details = this.shadowRoot?.querySelector('details')
      if (details) {
        details.open = false
      }
    }
  }

  private handleToggle = (event: Event) => {
    const details = event.target as HTMLDetailsElement
    this.isOpen = details.open

    if (this.isOpen && this.name) {
      // Dispatch custom event when accordion is opened
      const accordionEvent = new CustomEvent('gds-accordion-opened', {
        bubbles: true,
        composed: true, // This allows the event to cross Shadow DOM boundaries
        detail: {
          name: this.name,
          sourceId: this.id,
        },
      })
      window.dispatchEvent(accordionEvent)
    }
  }

  // Generate unique ID if not present
  private ensureId(): string {
    if (!this.id) {
      this.id = `gds-accordion-${Math.random().toString(36).substr(2, 9)}`
    }
    return this.id
  }

  render() {
    this.ensureId() // Ensure we have an ID for event handling

    return html`<details ?name=${this.name || ''} @toggle=${this.handleToggle}>
      <summary>
        ${this.summary ? this.summary : 'Summary'}
        <gds-button rank="tertiary">
          ${this.isOpen
            ? html`<gds-icon-minus-large></gds-icon-minus-large>`
            : html`<gds-icon-plus-large></gds-icon-plus-large>`}
        </gds-button>
      </summary>
      <slot></slot>
    </details>`
  }
}
