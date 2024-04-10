import { HTMLTemplateResult, unsafeCSS } from 'lit'
import { query, state, property, queryAsync } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import { msg } from '@lit/localize'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { watch, observeLightDOM } from '../../utils/decorators'

import { GdsSegment } from './segment/segment'

import { tokens } from '../../tokens.style'
import style from './segmented-control.style.css'

const BTN_SIZE = {
  small: 36,
  medium: 44,
}
const getSegmentGap = (transitionalStyles: Boolean) =>
  transitionalStyles ? 0 : 4

/**
 * @element gds-segmented-control
 * A segmented control is a group of 2-5 buttons that lets the user switch views or sort elements.
 *
 * @status beta
 *
 * @slot - Segments to display in the control
 *
 * @event changed - Fires when the selected segment is changed
 */
@gdsCustomElement('gds-segmented-control')
export class GdsSegmentedControl<ValueT = any> extends GdsElement {
  static styles = [tokens, unsafeCSS(style)]

  /**
   * Minimum width of each segment. Used for calculating the number of visible
   * segments that can fit based on the available space.
   * @attr seg-min-width
   */
  @property({ type: Number, attribute: 'seg-min-width' })
  segMinWidth = 100

  /**
   * Size of the segmented control
   * @attr size
   */
  @property()
  size: 'small' | 'medium' = 'medium'

  /**
   * The value of the currently selected segment. Setting this property will
   * select the segment with the matching value.
   * @attr value
   */
  @property()
  get value() {
    return this.#value
  }
  set value(val: ValueT | undefined) {
    this.#value = val
    this.#updateSelectedFromValue()
  }
  #value?: ValueT

  /**
   * Returns the segments in the control
   * @readonly
   */
  get segments() {
    return this._elSlot ? (this._elSlot.assignedElements() as GdsSegment[]) : []
  }

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

  #tid?: any
  #resizeObserver = new ResizeObserver(() => {
    this.#tid && clearTimeout(this.#tid)
    this.#tid = setTimeout(() => {
      this.#calcLayout()
    }, 20)
  })

  #firstVisibleIndex = 0
  #calculatedSegmentWidth = 0
  #segmentWidth = 0
  #segmentsContainerLeft = 0
  #focusedIndex = 0

  #dragStartX = 0
  #dragStartLeft = 0
  #isDragging = false

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-segmented-control')
    this.#resizeObserver.observe(this)

    this.addEventListener('focusin', (e) => {
      if (e.target instanceof GdsSegment) {
        this.#focusedIndex = this.segments.indexOf(e.target as GdsSegment)
        this.#calcLayout(true)
      }
    })
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.#resizeObserver.unobserve(this)
  }

  render() {
    return html`${this._tStyles}
      ${when(
        this._showPrevButton,
        () =>
          html`<button
            id="btn-prev"
            @click=${this.#scrollLeft}
            aria-label=${msg('Scroll right')}
          >
            <gds-icon name="chevron-left"></gds-icon>
          </button>`
      )}
      <div
        id="track"
        @scroll=${() => {
          // This is here to prevent native scroll on focus
          this._elTrack.scrollLeft = 0
        }}
      >
        <div
          id="segments"
          @pointerdown=${this.#startDrag}
          @pointermove=${this.#drag}
          @touchmove=${this.#drag}
          @pointerup=${this.#endDrag}
          @pointercancel=${this.#endDrag}
          role="list"
        >
          <slot
            gds-allow="gds-segment"
            @click=${this.#handleSegmentClick}
            @slotchange=${this.#handleSlotChange}
            role="none"
          ></slot>
          <div id="indicator" role="none"></div>
        </div>
      </div>
      ${when(
        this._showNextButton,
        () =>
          html`<button
            id="btn-next"
            @click=${this.#scrollRight}
            aria-label=${msg('Scroll right')}
          >
            <gds-icon name="chevron-right"></gds-icon>
          </button>`
      )}`
  }

  #startDrag = (event: PointerEvent) => {
    this.#dragStartX = event.clientX
    this.#dragStartLeft = this.#segmentsContainerLeft
    this.#isDragging = true
  }

  #drag = (event: PointerEvent) => {
    if (!this.#isDragging) return
    event.preventDefault()
    const delta = event.clientX - this.#dragStartX

    if (Math.abs(delta) < 5) return

    try {
      if (!this._elSegments.hasPointerCapture(event.pointerId))
        this._elSegments.setPointerCapture(event.pointerId)

      this.#segmentsContainerLeft = this.#dragStartLeft + delta
      this.#applySegmentsTransform()
    } catch {} // eslint-disable-line no-empty
  }

  #endDrag = (event: PointerEvent) => {
    if (!this.#isDragging) return
    this.#isDragging = false
    try {
      this._elSegments.releasePointerCapture(event.pointerId)
      this.#calcVisibleAfterDrag()
    } catch {} // eslint-disable-line no-empty
  }

  #calcVisibleAfterDrag = () => {
    this.#firstVisibleIndex = Math.round(
      -this.#segmentsContainerLeft / this.#calculatedSegmentWidth
    )
    this.#calcLayout()
  }

  @watch('segMinWidth')
  private _recalculateMinWidth() {
    this.updateComplete.then(() => this.#calcLayout())
  }

  // Calculates the layout based on the configured min width
  // and the available space in the track
  #calcLayout = (followFocus = false) => {
    const calcNumVisibleSegments = () => {
      // Actual available width in the track
      const numSegments = this.segments.length
      const availableWidth = this._elTrack.offsetWidth

      if (availableWidth / numSegments > this.segMinWidth) {
        return {
          count: numSegments,
          segmentWidth:
            (availableWidth -
              getSegmentGap(this.isUsingTransitionalStyles) *
                (numSegments - 1)) /
            numSegments,
        }
      }

      // Max avaliable width in the track accounting for the scroll buttons
      const availableWidthIncBtns = this.offsetWidth - BTN_SIZE[this.size] * 2

      const maxVisibleSegments = Math.floor(
        availableWidthIncBtns / this.segMinWidth
      )
      const segmentWidth =
        (availableWidth -
          getSegmentGap(this.isUsingTransitionalStyles) *
            (maxVisibleSegments - 1)) /
        maxVisibleSegments
      return {
        count: maxVisibleSegments,
        segmentWidth: segmentWidth,
      }
    }

    // Run an initial calculation to get the number of visible segments
    const { count } = calcNumVisibleSegments()

    // Ensure that the focused segment is always visible
    if (followFocus) {
      if (this.#focusedIndex >= this.#firstVisibleIndex + count) {
        this.#firstVisibleIndex = this.#focusedIndex - count + 1
      }
      if (this.#focusedIndex < this.#firstVisibleIndex) {
        this.#firstVisibleIndex = this.#focusedIndex
      }
    }

    // prevent overscroll by clamping #firstVisibleIndex
    const endFirstIndex = this.segments.length - count
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
      const { segmentWidth, count } = calcNumVisibleSegments()

      this.segments.forEach((segment) => {
        segment.style.width = segmentWidth + 'px'
      })

      this.#segmentsContainerLeft =
        -this.#firstVisibleIndex * segmentWidth -
        getSegmentGap(this.isUsingTransitionalStyles) * this.#firstVisibleIndex
      this.#applySegmentsTransform()

      this.#calculatedSegmentWidth = segmentWidth
      this.#segmentWidth = segmentWidth

      this.#updateIndicator()
    })
  }

  #applySegmentsTransform = () => {
    window.requestAnimationFrame(() => {
      this._elSegments.style.transform = `translateX(${
        this.#segmentsContainerLeft
      }px)`
    })
  }

  #handleSlotChange() {
    const selSegmentValue = this.segments.find((s) => s.selected)?.value
    if (selSegmentValue) {
      this.#value = selSegmentValue
    }
    this.#calcLayout()
  }

  #scrollLeft = () => {
    this.#firstVisibleIndex--
    this.#calcLayout()
  }

  #scrollRight = () => {
    this.#firstVisibleIndex++
    this.#calcLayout()
  }

  // Updates the visibility of the scroll buttons
  #updateScrollBtnState = (numVisibleSegments: number) => {
    this._showPrevButton = this.#firstVisibleIndex > 0
    this._showNextButton =
      this.#firstVisibleIndex < this.segments.length - numVisibleSegments
  }

  // Updates the selection indicator position
  #updateIndicator = () => {
    const segment = this.segments.find((s) => s.selected)
    if (segment) {
      const selectedSegmentIndex = this.segments.indexOf(segment)
      const offset =
        selectedSegmentIndex * this.#segmentWidth +
        getSegmentGap(this.isUsingTransitionalStyles) * selectedSegmentIndex
      this._elIndicator.style.transform = `translateX(${offset}px)`
      this._elIndicator.style.width = `${this.#segmentWidth}px`
    } else {
      this._elIndicator.style.transform = `translateX(-100%)`
      this._elIndicator.style.width = `0px`
    }
  }

  #handleSegmentClick = (event: Event) => {
    const selectedSegment = this.segments.find(
      (s) => s === event.target || s.contains(event.target as Node)
    )
    if (selectedSegment) {
      this.segments.forEach((s) => (s.selected = false))
      selectedSegment.selected = true

      this.#value = selectedSegment.value

      this.#updateIndicator()

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { segment: selectedSegment },
          bubbles: true,
          composed: true,
        })
      )
    }
  }

  #updateSelectedFromValue = () => {
    if (!this.#value) return
    this.updateComplete.then(() => {
      const selectedSegment = this.segments.find((s) => s.value === this.#value)
      if (selectedSegment) {
        this.segments.forEach((s) => (s.selected = false))
        selectedSegment.selected = true
        this.#focusedIndex = this.segments.indexOf(selectedSegment)
        this.#calcLayout(true)
      }
    })
  }
}
