import { property, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { styles } from './accordion.styles'

import '../button/button'
import './accordion-icon/accordion-icon'

export type AccordionSize = 'large' | 'small'

/**
 * Accordion component that provides collapsible content sections.
 *
 * @element gds-accordion
 * @status beta
 *
 * @slot - Default slot for accordion content
 * @slot summary-icon-open - Custom icon shown when accordion is open
 * @slot summary-icon-closed - Custom icon shown when accordion is closed
 
 * @event gds-ui-state - Fired when accordion opens or closes
 *
 * @example
 * ```html
 * <gds-accordion summary="Section Title">
 *   <p>Accordion content here</p>
 * </gds-accordion>
 * ```
 */
@gdsCustomElement('gds-accordion')
export class GdsAccordion extends GdsElement {
  static styles = [tokens, styles]

  /**
   * The summary text displayed in the accordion header
   */
  @property({ type: String })
  summary = ''

  /**
   * Group identifier for accordion behavior synchronization
   */
  @property({ type: String })
  name = ''

  /**
   * Controls the expanded state of the accordion
   */
  @property({ type: Boolean, reflect: true })
  open = false

  /**
   * Controls the size variant of the accordion
   */
  @property({ type: String })
  size: AccordionSize = 'large'

  /**
   * Controls whether to use custom icons from slots
   */
  @property({ type: Boolean, attribute: 'custom-icon' })
  customIcon = false

  /**
   * Reference to content element for animation
   */
  @query('.content')
  private _content?: HTMLElement

  /**
   * References to icon slots
   */
  @query('slot[name="summary-icon-open"]')
  private _openIconSlot?: HTMLSlotElement

  @query('slot[name="summary-icon-closed"]')
  private _closedIconSlot?: HTMLSlotElement

  /**
   * Component lifecycle: After first render
   */
  protected firstUpdated(): void {
    this._initializeContentHeight()
  }

  /**
   * Initializes content height for animation
   * @private
   */
  private _initializeContentHeight(): void {
    if (!this._content) return
    this._updateContentHeight()
  }

  /**
   * Updates content height for animation
   */
  private _updateContentHeight(): void {
    if (!this._content) return

    requestAnimationFrame(() => {
      this._content?.style.setProperty(
        '--_max-height',
        this.open ? `${this._content.scrollHeight}px` : '0',
      )
    })
  }

  /**
   * Handles accordion toggle
   */
  private _handleToggle = (): void => {
    this.open = !this.open
    this._updateContentHeight()
    this._syncGroupState()
    this._dispatchStateEvent()
  }

  /**
   * Synchronizes state with other accordions in the same group
   */
  private _syncGroupState(): void {
    if (!this.open || !this.name) return

    document.querySelectorAll('gds-accordion').forEach((accordion) => {
      if (
        accordion !== this &&
        (accordion as GdsAccordion).name === this.name
      ) {
        const other = accordion as GdsAccordion
        other.open = false
        other._updateContentHeight()
        other._dispatchStateEvent()
      }
    })
  }

  /**
   * Dispatches UI state change event
   */
  private _dispatchStateEvent(): void {
    this.dispatchEvent(
      new CustomEvent('gds-ui-state', {
        bubbles: true,
        composed: true,
        detail: this.open,
      }),
    )
  }

  /**
   * Renders the component
   */
  protected render() {
    return html`
      <div
        class=${classMap({
          details: true,
          accordion: true,
          open: this.open,
          small: this.size === 'small',
        })}
        part="base"
      >
        ${this._renderHeader()} ${this._renderContent()}
      </div>
    `
  }

  /**
   * Renders the accordion header
   * @private
   */
  private _renderHeader() {
    return html`
      <div class="summary" part="summary">
        <div
          class="summary-label"
          @click=${this._handleToggle}
          role="button"
          aria-expanded="${this.open}"
        >
          ${this.summary || 'Summary'}
        </div>
        ${this._renderIconButton()}
      </div>
    `
  }

  /**
   * Renders the icon button
   */
  private _renderIconButton() {
    return html`
      <div class="summary-icon">
        <gds-button
          rank="tertiary"
          size="small"
          @click=${this._handleToggle}
          aria-label="${this.open ? 'Collapse' : 'Expand'}"
        >
          <gds-icon-accordion
            .open=${this.open}
            ?custom-icon=${this.customIcon}
          >
            ${this.open
              ? html`<slot name="summary-icon-open"></slot>`
              : html`<slot name="summary-icon-closed"></slot>`}
          </gds-icon-accordion>
        </gds-button>
      </div>
    `
  }

  /**
   * Renders the accordion content
   */
  private _renderContent() {
    return html`
      <div class="content" part="content" aria-hidden="${!this.open}">
        <slot></slot>
      </div>
    `
  }
}
