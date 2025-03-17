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

  @watch('open')
  handleOpenChange() {
    const icon = this.shadowRoot?.querySelector('gds-icon-accordion')
    if (icon) {
      ;(icon as HTMLElement & { open: boolean }).open = this.open
    }
  }

  @state()
  private _summarySlotIconOpenOccupied = false

  @state()
  private _summarySlotIconClosedOccupied = false

  /**
   * Controls the font-size of texts and height of the field.
   */
  @property({ type: String })
  size: 'large' | 'small' = 'large'

  // Add click handler method
  #handleClick() {
    this.open = !this.open
  }

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

  #handleSlotChange = (
    slotName: 'summary-icon-open' | 'summary-icon-closed',
    event: Event,
  ) => {
    const slot = event.target as HTMLSlotElement
    const assignedNodes = slot.assignedNodes({ flatten: true })
    const slotOccupied =
      assignedNodes.length > 0 &&
      assignedNodes.some(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== ''),
      )
    if (slotName === 'summary-icon-open') {
      this._summarySlotIconOpenOccupied = slotOccupied
    } else if (slotName === 'summary-icon-closed') {
      this._summarySlotIconClosedOccupied = slotOccupied
    }
  }

  #renderFieldContents() {
    const elements = [this.#renderSummary(), this.#renderContent()]
    return elements.map((element) => html`${element}`)
  }

  #renderContent() {
    return html`<div class="content" .toggle=${this.open}><slot></slot></div>`
  }

  #renderSummary() {
    return html`<div class="summary">
      <div class="summary-label" @click=${this.#handleClick}>
        ${this.summary ? this.summary : 'Summary'}
      </div>
      <div class="summary-icon">
        <gds-button rank="tertiary" size="small" @click=${this.#handleClick}>
          ${this.#renderSummaryIcon()}
        </gds-button>
      </div>
    </div>`
  }

  #renderSummaryIcon() {
    if (
      !this._summarySlotIconOpenOccupied &&
      !this._summarySlotIconClosedOccupied
    ) {
      return html`<gds-icon-accordion .open=${this.open}></gds-icon-accordion>`
    }

    return html`
      ${this.open && this._summarySlotIconClosedOccupied
        ? html`<slot
            name="summary-icon-closed"
            @slotchange=${(e: Event) =>
              this.#handleSlotChange('summary-icon-open', e)}
          ></slot>`
        : html`<slot
            name="summary-icon-open"
            @slotchange=${(e: Event) =>
              this.#handleSlotChange('summary-icon-open', e)}
          ></slot>`}
    `
  }
}
