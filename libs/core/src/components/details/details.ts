import { property, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './details.styles'

import '../button/button'
import './details-icon/details-icon'

export type DetailsSize = 'large' | 'small'

/**
 * Details component that provides collapsible content sections.
 *
 * @element gds-details
 * @status beta
 *
 * @slot - Default slot for details content
 
 * @event gds-ui-state - Fired when details opens or closes
 *
 * @example
 * ```html
 * <gds-details summary="Section Title">
 *   <p>Details content here</p>
 * </gds-details>
 * ```
 */
@gdsCustomElement('gds-details')
export class GdsDetails extends GdsElement {
  static styles = [tokens, styles]

  /**
   * The summary text displayed in the details header
   */
  @property({ type: String })
  summary = ''

  /**
   * Group identifier for details behavior synchronization
   */
  @property({ type: String })
  name = ''

  /**
   * Controls the expanded state of the details
   */
  @property({ type: Boolean, reflect: true })
  open = false

  /**
   * Controls the size variant of the details
   */
  @property({ type: String })
  size: DetailsSize = 'large'

  @query('.content')
  private _content?: HTMLElement

  @query('slot[name="summary-icon-open"]')
  private _openIconSlot?: HTMLSlotElement

  @query('slot[name="summary-icon-closed"]')
  private _closedIconSlot?: HTMLSlotElement

  protected firstUpdated(): void {
    this.#initializeContentHeight()
  }

  #initializeContentHeight = (): void => {
    if (!this._content) return
    this.#updateContentHeight()
  }

  #updateContentHeight = (): void => {
    if (!this._content) return

    requestAnimationFrame(() => {
      this._content?.style.setProperty(
        '--_max-height',
        this.open ? `${this._content.scrollHeight}px` : '0',
      )
    })
  }

  #handleToggle = (): void => {
    this.open = !this.open
    this.#updateContentHeight()
    this.#syncGroupState()
    this.#dispatchStateEvent()
  }

  #syncGroupState = (): void => {
    if (!this.open || !this.name) return

    document
      .querySelectorAll('[gds-element="gds-details"]')
      .forEach((details) => {
        if (details !== this && (details as GdsDetails).name === this.name) {
          const other = details as GdsDetails
          other.open = false
          other.#updateContentHeight()
          other.#dispatchStateEvent()
        }
      })
  }

  #dispatchStateEvent = (): void => {
    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        bubbles: true,
        composed: true,
        detail: this.open,
      }),
    )
  }

  render() {
    return html`
      <div
        class=${classMap({
          details: true,
          open: this.open,
          small: this.size === 'small',
        })}
        part="base"
      >
        ${this.#renderHeader()} ${this.#renderContent()}
      </div>
    `
  }

  #renderHeader = () => {
    return html`
      <div class="summary" part="summary">
        <div
          class="summary-label"
          @click=${this.#handleToggle}
          role="button"
          aria-expanded="${this.open}"
        >
          ${this.summary || 'Summary'}
        </div>
        ${this.#renderIconButton()}
      </div>
    `
  }

  #renderIconButton = () => {
    return html`
      <div class="summary-icon">
        <gds-button
          rank="tertiary"
          size=${this.size === 'small' ? 'xs' : 'medium'}
          @click=${this.#handleToggle}
          aria-label="${this.open ? 'Collapse' : 'Expand'}"
        >
          <gds-icon-details .open=${this.open}></gds-icon-details>
        </gds-button>
      </div>
    `
  }

  #renderContent = () => {
    return html`
      <div class="content" part="content" aria-hidden="${!this.open}">
        <slot></slot>
      </div>
    `
  }
}
