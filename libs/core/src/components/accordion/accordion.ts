import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators/watch'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './accordion.styles'

import '../button/button'
import './accordion-icon/accordion-icon'

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

  // Watch the open property and update the open attribute
  // @watch('open')

  /**
   * Controls the font-size of texts and height of the field.
   */
  @property({ type: String })
  size: 'large' | 'small' = 'large'

  render() {
    const accordionClasses = {
      details: true,
      open: this.open,
      small: this.size === 'small',
    }

    return html`<div class=${classMap(accordionClasses)}>
      ${this.#renderFieldContents()}
    </div> `
  }

  #renderFieldContents() {
    const elements = [this.#renderSummary(), this.#renderContent()]
    return elements.map((element) => html`${element}`)
  }

  #renderContent() {
    return html`<div class="content"><slot></slot></div>`
  }

  #renderSummary() {
    return html`<div class="summary">
      <div class="summary-label">
        ${this.summary ? this.summary : 'Summary'}
      </div>
      <div class="summary-icon">${this.#renderSummaryIcon()}</div>
    </div>`
  }

  #renderSummaryIcon() {
    return html`<gds-button rank="tertiary" size="small">
      <gds-icon-accordion></gds-icon-accordion>
      <slot name="summary-icon-open" slot="icon"></slot>
      <slot name="summary-icon-closed" slot="icon"></slot>
    </gds-button>`
  }
}
