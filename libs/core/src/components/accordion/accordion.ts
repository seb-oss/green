import { property, state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators/watch'
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

  render() {
    return html`<details
      ?open=${this.open}
      @toggle=${(e: Event) =>
        (this.open = (e.target as HTMLDetailsElement).open)}
      id="details"
    >
      <summary>
        <div class="label">${this.summary ? this.summary : 'Summary'}</div>
        <svg viewBox="0 0 20 20">
          <line x1="4" y1="10" x2="16" y2="10" />
          <line x1="10" y1="4" x2="10" y2="16">
            <animate
              attributeName="y1"
              dur="240ms"
              from="${this.open ? '4' : '10'}"
              to="${this.open ? '10' : '4'}"
              begin="details.toggle"
              fill="freeze"
            />
            <animate
              attributeName="y2"
              dur="240ms"
              from="${this.open ? '16' : '10'}"
              to="${this.open ? '10' : '16'}"
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
