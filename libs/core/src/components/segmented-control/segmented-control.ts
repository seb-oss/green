import { HTMLTemplateResult, unsafeCSS } from 'lit'
import { query, queryAsync, state } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  getScopedTagName,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { when } from 'lit/directives/when.js'

import './segment/segment'
import type { GdsSegment } from './segment/segment'

import { tokens } from '../../tokens.style'
import style from './segmented-control.style.css'

/**
 * @element gds-segmented-control
 * @internal
 */
@gdsCustomElement('gds-segmented-control')
export class GdsSegmentedControl extends GdsElement {
  static styles = [tokens, unsafeCSS(style)]

  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult

  @query('slot')
  private _elSlot!: HTMLSlotElement

  @query('#indicator')
  private _elIndicator!: HTMLDivElement

  @query('#track')
  private _elTrack!: HTMLDivElement

  @state()
  private _showPrevButton = false

  @state()
  private _showNextButton = false

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-segmented-control')
  }

  render() {
    return html`${this._tStyles}
      <div id="track">
        ${when(
          this._showPrevButton,
          () =>
            html`<button id="btn-prev" @click=${this.#scrollRight}>
              &lt;
            </button>`
        )}

        <slot
          @slotchange=${this.#handleSlotChange}
          gds-allow="gds-segment"
          @click=${this.#handleSegmentClick}
        ></slot>
        <div id="indicator"></div>

        ${when(
          this._showNextButton,
          () =>
            html`<button id="btn-next" @click=${this.#scrollLeft}>&gt;</button>`
        )}
      </div>`
  }

  #handleSlotChange = () => {
    this.#updateIndicator()
    this.#updateScrollBtnState()
  }

  #scrollLeft = () => {
    this.scrollLeft -= 32
    this.#updateScrollBtnState()
  }

  #scrollRight = () => {
    this.scrollLeft += 32
    this.#updateScrollBtnState()
  }

  #updateScrollBtnState = () => {
    const { clientWidth } = this._elTrack
    const { scrollLeft, scrollWidth } = this

    console.log(scrollLeft, scrollWidth, clientWidth)

    this._showPrevButton = scrollLeft > 0
    this._showNextButton = scrollLeft + clientWidth < scrollWidth
  }

  #updateIndicator = () => {
    const segment = this._elSlot
      .assignedElements()
      .find((s) => (s as GdsSegment).selected) as GdsSegment

    if (segment) {
      this._elIndicator.style.transform = `translateX(${segment.offsetLeft}px)`
      this._elIndicator.style.width = `${segment.offsetWidth}px`
    }
  }

  #handleSegmentClick = (event: Event) => {
    const segment = (event.target as HTMLElement).closest(
      getScopedTagName('gds-segment')
    ) as GdsSegment

    if (segment) {
      this._elSlot
        .assignedElements()
        .forEach((s) => ((s as GdsSegment).selected = false))

      segment.selected = true

      this.#updateIndicator()

      this.dispatchEvent(
        new CustomEvent('gds-segment-click', {
          detail: { segment },
          bubbles: true,
          composed: true,
        })
      )
    }
  }
}
