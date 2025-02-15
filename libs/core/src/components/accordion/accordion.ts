import { HTMLTemplateResult } from 'lit'
import { state } from 'lit/decorators.js'
import { property, query, queryAsync, state } from 'lit/decorators.js'
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
  }

  disconnectedCallback() {
    this.removeEventListener('toggle', this.handleToggle)
    super.disconnectedCallback()
  }

  private handleToggle = (event: Event) => {
    const details = event.target as HTMLDetailsElement
    this.isOpen = details.open
  }

  render() {
    return html`<details ?name=${this.name || ''} @toggle=${this.handleToggle}>
      <summary>
      ${this.summary ? this.summary :  'Summary'}
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
