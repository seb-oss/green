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

import { watch } from '../../utils/decorators'

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
      ${when(
        this._showPrevButton,
        () =>
          html`<button id="btn-prev" @click=${this.#scrollLeft}>
            <gds-icon name="chevron-left"></gds-icon>
          </button>`
      )}
      <div id="track">
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
      </div>
      ${when(
        this._showNextButton,
        () =>
          html`<button id="btn-next" @click=${this.#scrollRight}>
            <gds-icon name="chevron-right"></gds-icon>
          </button>`
      )}`
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

  @watch('segMinWidth')
  private _recalculateMinWidth() {
    this.updateComplete.then(() => this.#calculateVisibleSegments())
  }

  #calculateVisibleSegments = () => {
    const calcNumVisibleSegments = () => {
      // Actual available width in the track
      const availableWidth = this._elTrack.offsetWidth

      // Max avaliable width in the track accounting for the scroll buttons
      const availableWidthIncBtns = this.offsetWidth - 88

      const maxVisibleSegments = Math.floor(
        availableWidthIncBtns / this.segMinWidth
      )
      const segmentWidth = availableWidth / maxVisibleSegments
      return {
        count: maxVisibleSegments,
        segmentWidth,
      }
    }

    // Run an initial calculation to get the number of visible segments
    const { count } = calcNumVisibleSegments()

    // prevent overscroll by clamping #firstVisibleIndex
    const endFirstIndex = this.#segments.length - count
    const hasReachedEnd = this.#firstVisibleIndex >= endFirstIndex
    const isAtStart = this.#firstVisibleIndex <= 0
    if (hasReachedEnd) {
      this.#firstVisibleIndex = endFirstIndex
    }
    if (isAtStart) {
      this.#firstVisibleIndex = 0
    }
    //

    // Update the visible state of the scroll buttons
    this.#updateScrollBtnState(count)

    // Wait for lit-html to render updated buttons and then update the segment widths
    this.updateComplete.then(() => {
      // Run calculations again to get the final segmentWidth with updated state of the buttons
      // taken into account
      const { segmentWidth } = calcNumVisibleSegments()

      this.#segments.forEach((segment) => {
        segment.style.width = segmentWidth + 'px'
      })

      this._elSegments.style.left = `-${
        this.#firstVisibleIndex * segmentWidth
      }px`
      this.#calculatedSegmentWidth = segmentWidth

      setTimeout(() => this.#updateIndicator(), 150)
    })
  }

  #handleSlotChange = () => {
    this.#calculateVisibleSegments()
  }

  #scrollLeft = () => {
    this.#firstVisibleIndex--
    this.#calculateVisibleSegments()
    this.#calculateVisibleSegments()
  }

  #scrollRight = () => {
    this.#firstVisibleIndex++
    this.#calculateVisibleSegments()
    this.#calculateVisibleSegments()
  }

  #updateScrollBtnState = (numVisibleSegments: number) => {
    this._showPrevButton = this.#firstVisibleIndex > 0
    this._showNextButton =
      this.#firstVisibleIndex < this.#segments.length - numVisibleSegments
  }

  #updateIndicator = () => {
    const segment = this.#segments.find((s) => s.selected)
    const btnOffset = this._showPrevButton ? 44 : 0

    if (segment) {
      this._elIndicator.style.transform = `translateX(${
        segment.offsetLeft - btnOffset
      }px)`
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
