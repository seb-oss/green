import { HTMLTemplateResult, unsafeCSS } from 'lit'
import { query, state, property, queryAsync } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import { msg } from '@lit/localize'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import { gdsCustomElement, html } from '../../scoping'
import { watch } from '../../utils/decorators/watch'
import { resizeObserver } from '../../utils/decorators/resize-observer'

import './segment'
import type { GdsSegment } from './segment'
import '../icon/icons/chevron-left'
import '../icon/icons/chevron-right'

import { tokens } from '../../tokens.style'
import style from './segmented-control.style.css?inline'

const BTN_SIZE = {
  small: 36,
  medium: 44,
}
const getSegmentGap = (transitionalStyles: boolean) =>
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
  @property({ reflect: true })
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

  #segmentWidth = 0

  intersectionObserver: IntersectionObserver | null = null

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-segmented-control')
  }

  render() {
    return html`${when(
        this._showPrevButton,
        () =>
          html`<button
            id="btn-prev"
            @click=${this.#scrollLeft}
            aria-label=${msg('Scroll right')}
          >
            <gds-icon-chevron-left />
          </button>`,
      )}
      <div id="track" role="list">
        <slot
          gds-allow="gds-segment"
          @click=${this.#handleSegmentClick}
          @slotchange=${this.#handleSlotChange}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      ${when(
        this._showNextButton,
        () =>
          html`<button
            id="btn-next"
            @click=${this.#scrollRight}
            aria-label=${msg('Scroll right')}
          >
            <gds-icon-chevron-right />
          </button>`,
      )}`
  }

  @resizeObserver()
  @watch('segMinWidth')
  private _recalculateMinWidth() {
    this.updateComplete.then(() => this.#calcLayout())
  }

  // Calculates the layout based on the configured min width
  // and the available space in the track
  #calcLayout = (followFocus = false) => {
    console.log('calcLayout')
    const calcNumVisibleSegments = () => {
      // Actual available width in the track
      const numSegments = this.segments.length
      const availableWidth = this._elTrack.offsetWidth

      if (availableWidth / numSegments > this.segMinWidth) {
        return {
          count: numSegments,
          segmentWidth:
            (availableWidth -
              getSegmentGap(this._isUsingTransitionalStyles) *
                (numSegments - 1)) /
            numSegments,
        }
      }

      // Max avaliable width in the track accounting for the scroll buttons
      const availableWidthIncBtns = this.offsetWidth - BTN_SIZE[this.size] * 2

      const maxVisibleSegments = Math.floor(
        availableWidthIncBtns / this.segMinWidth,
      )
      const segmentWidth =
        (availableWidth -
          getSegmentGap(this._isUsingTransitionalStyles) *
            (maxVisibleSegments - 1)) /
        maxVisibleSegments
      return {
        count: maxVisibleSegments,
        segmentWidth: segmentWidth,
      }
    }

    // Update the visible state of the scroll buttons
    this.#updateScrollBtnState()

    // Wait for lit-html to render updated buttons and then update the segment widths
    this.updateComplete.then(() => {
      // Run calculations again to get the final segmentWidth with updated state of the buttons
      // taken into account
      const { segmentWidth } = calcNumVisibleSegments()

      this.segments.forEach((segment) => {
        segment.style.width = segmentWidth + 'px'
      })

      this.#segmentWidth = segmentWidth

      this.#updateIndicator()
    })
  }

  #handleSlotChange() {
    const selSegmentValue = this.segments.find((s) => s.selected)?.value
    if (selSegmentValue) {
      this.#value = selSegmentValue
    }

    this.intersectionObserver?.disconnect()
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const segment = entry.target as GdsSegment
          segment._isVisible = entry.isIntersecting
        })
        this.#updateScrollBtnState()
        this.#calcLayout()
      },
      {
        root: this._elTrack,
        rootMargin: '0px',
        threshold: 0.5,
      },
    )
    this.segments.forEach((s) => {
      this.intersectionObserver?.observe(s)
    })
  }

  #scrollLeft = () => {
    this.segments
      .filter((s, i, arr) => arr[i + 1]?.isVisible && !s.isVisible)[0]
      .scrollIntoView()
  }

  #scrollRight = () => {
    this.segments
      .filter((s, i, arr) => arr[i - 1]?.isVisible && !s.isVisible)
      .reverse()[0]
      .scrollIntoView()
  }

  // Updates the visibility of the scroll buttons
  #updateScrollBtnState = () => {
    this._showPrevButton = !this.segments[0].isVisible
    this._showNextButton = !this.segments[this.segments.length - 1].isVisible
  }

  // Updates the selection indicator position
  #updateIndicator = () => {
    const segment = this.segments.find((s) => s.selected)
    if (segment) {
      const selectedSegmentIndex = this.segments.indexOf(segment)
      const offset =
        selectedSegmentIndex * this.#segmentWidth +
        getSegmentGap(this._isUsingTransitionalStyles) * selectedSegmentIndex
      this._elIndicator.style.transform = `translateX(${offset}px)`
      this._elIndicator.style.width = `${this.#segmentWidth}px`
    } else {
      this._elIndicator.style.transform = `translateX(-100%)`
      this._elIndicator.style.width = `0px`
    }
  }

  #handleSegmentClick = (event: Event) => {
    const selectedSegment = this.segments.find(
      (s) => s === event.target || s.contains(event.target as Node),
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
        }),
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
        this.#calcLayout(true)
      }
    })
  }
}
