import { HTMLTemplateResult, unsafeCSS } from 'lit'
import { query, state, property } from 'lit/decorators.js'
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

  @property({ type: Number, attribute: 'seg-min-width' })
  segMinWidth = 100

  @property({ type: Number, attribute: 'seg-max-width' })
  segMaxWidth = 300

  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult

  @query('slot')
  private _elSlot!: HTMLSlotElement

  @query('#indicator')
  private _elIndicator!: HTMLDivElement

  @query('#track')
  private _elTrack!: HTMLDivElement

  @query('#segments')
  private _elSegments!: HTMLDivElement

  @state()
  private _showPrevButton = false

  @state()
  private _showNextButton = false

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-segmented-control')

    const resizeObserver = new ResizeObserver((entries) => {
      this.#calculateVisibleSegments()
    })

    resizeObserver.observe(this)
  }

  #firstVisibleIndex = 0
  #calculatedSegmentWidth = 0

  #dragStartX = 0
  #dragStartLeft = 0
  #isDragging = false

  render() {
    return html`${this._tStyles}
      <div id="track">
        ${when(
          this._showPrevButton,
          () =>
            html`<button id="btn-prev" @click=${this.#scrollLeft}>&lt;</button>`
        )}

        <div
          id="segments"
          @pointerdown=${this.#startDrag}
          @pointermove=${this.#drag}
          @pointerup=${this.#endDrag}
          @pointercancel=${this.#endDrag}
        >
          <slot
            @slotchange=${this.#handleSlotChange}
            gds-allow="gds-segment"
            @click=${this.#handleSegmentClick}
          ></slot>
        </div>
        <div id="indicator"></div>

        ${when(
          this._showNextButton,
          () =>
            html`<button id="btn-next" @click=${this.#scrollRight}>
              &gt;
            </button>`
        )}
      </div>`
  }

  #startDrag = (event: PointerEvent) => {
    this.#dragStartX = event.clientX
    this.#dragStartLeft = this._elSegments.offsetLeft
    this.#isDragging = true
  }

  #drag = (event: PointerEvent) => {
    if (!this.#isDragging) return
    this._elSegments.setPointerCapture(event.pointerId)
    const dx = event.clientX - this.#dragStartX
    this._elSegments.style.left = this.#dragStartLeft + dx + 'px'
  }

  #endDrag = (event: PointerEvent) => {
    if (!this.#isDragging) return
    this.#isDragging = false
    this._elSegments.releasePointerCapture(event.pointerId)
    this.#calcVisibleAfterDrag()
  }

  #calcVisibleAfterDrag = () => {
    const scrollLeft = this._elSegments.offsetLeft
    this.#firstVisibleIndex = Math.round(
      -scrollLeft / this.#calculatedSegmentWidth
    )
    this.#calculateVisibleSegments()
  }

  get #segments() {
    return this._elSlot.assignedElements() as GdsSegment[]
  }

  #calculateVisibleSegments = () => {
    const availableWidth = this._elTrack.offsetWidth
    const numSegments = this.#segments.length
    const maxVisibleSegments = Math.floor(availableWidth / this.segMinWidth)
    const segmentWidth = Math.min(
      this.segMaxWidth,
      availableWidth / maxVisibleSegments
    )
    const calculatedNumVisibleSegments = Math.floor(
      availableWidth / segmentWidth
    )

    this.#segments.forEach((segment) => {
      segment.style.width = segmentWidth + 'px'
    })

    const endFirstIndex = this.#segments.length - calculatedNumVisibleSegments
    const hasReachedEnd = this.#firstVisibleIndex >= endFirstIndex
    const isAtStart = this.#firstVisibleIndex <= 0
    if (hasReachedEnd) {
      this.#firstVisibleIndex = endFirstIndex
    }
    if (isAtStart) {
      this.#firstVisibleIndex = 0
    }

    setTimeout(() => this.#updateScrollBtnState(), 150)

    this._elSegments.style.left = `-${this.#firstVisibleIndex * segmentWidth}px`
    this.#calculatedSegmentWidth = segmentWidth

    setTimeout(() => this.#updateIndicator(), 150)
  }

  #handleSlotChange = () => {
    this.#calculateVisibleSegments()
  }

  #scrollLeft = () => {
    this.#firstVisibleIndex--
    this.#calculateVisibleSegments()
  }

  #scrollRight = () => {
    this.#firstVisibleIndex++
    this.#calculateVisibleSegments()
  }

  #updateScrollBtnState = () => {
    const { clientWidth } = this._elTrack
    const { offsetWidth, offsetLeft } = this._elSegments

    this._showPrevButton = offsetLeft < 0
    this._showNextButton = -offsetLeft + clientWidth < offsetWidth
  }

  #updateIndicator = () => {
    const segment = this.#segments.find((s) => s.selected)

    if (segment) {
      this._elIndicator.style.transform = `translateX(${segment.offsetLeft}px)`
      this._elIndicator.style.width = `${segment.offsetWidth}px`
    }
  }

  #handleSegmentClick = (event: Event) => {
    const segment = this.#segments.find(
      (s) => s === event.target || s.contains(event.target as Node)
    )

    if (segment) {
      this.#segments.forEach((s) => (s.selected = false))

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
