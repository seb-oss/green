import { property, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { watch } from '../../utils/decorators/watch'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { GdsButton } from '../button/button.component'
import { GdsIconDetails } from './details-icon/details-icon.component'
import { styles } from './details.styles'

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
@gdsCustomElement('gds-details', { dependsOn: [GdsButton, GdsIconDetails] })
export class GdsDetails extends withSizeXProps(
  withMarginProps(withLayoutChildProps(GdsElement)),
) {
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

  @watch('open')
  private __handleOpenChange() {
    this.#syncGroupState()
  }

  #handleToggle = (): void => {
    this.open = !this.open
    this.#dispatchStateEvent()
  }

  #handleKeydown = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      this.#handleToggle()
    }
  }

  #syncGroupState = (): void => {
    if (!this.open || !this.name) return

    document
      .querySelectorAll('[gds-element="gds-details"]')
      .forEach((details) => {
        if (details !== this && (details as GdsDetails).name === this.name) {
          const other = details as GdsDetails
          other.open = false
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
      >
        ${this.#renderHeader()} ${this.#renderContent()}
      </div>
    `
  }

  #renderHeader = () => {
    return html`
      <div
        class="summary"
        part="summary"
        role="button"
        tabindex="0"
        @click=${this.#handleToggle}
        @keydown=${this.#handleKeydown}
        aria-expanded="${this.open}"
        aria-controls="content-${this.name || 'default'}"
      >
        <div id="summary-${this.name || 'default'}" class="summary-label">
          ${this.summary || 'Summary'}
        </div>
        ${this.#renderIconButton()}
      </div>
    `
  }

  #renderIconButton = () => {
    return html`
      <div class="summary-icon" role="presentation" aria-hidden="true">
        <gds-button
          rank="tertiary"
          size=${this.size === 'small' ? 'xs' : 'medium'}
          role="presentation"
          tabindex="-1"
        >
          <gds-icon-details .open=${this.open}></gds-icon-details>
        </gds-button>
      </div>
    `
  }

  #renderContent = () => {
    return html`
      <div
        id="content-${this.name || 'default'}"
        class=${classMap({
          content: true,
          open: this.open,
          small: this.size === 'small',
        })}
        aria-hidden="${!this.open}"
        ?inert="${!this.open}"
      >
        <slot></slot>
      </div>
    `
  }
}
