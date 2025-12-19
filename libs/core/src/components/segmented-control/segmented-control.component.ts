import { localized, msg } from '@lit/localize'
import { property, query, state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { resizeObserver } from '../../utils/decorators/resize-observer'
import { watch } from '../../utils/decorators/watch'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
import { IconChevronLeft } from '../icon/icons/chevron-left.component'
import { IconChevronRight } from '../icon/icons/chevron-right.component'
import { GdsSegment } from './segment/segment.component'
import SegmentedControlStyles from './segmented-control.styles'

const debounce = (fn: () => void, delay: number) => {
  let timeoutId: NodeJS.Timeout
  return () => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(fn, delay)
  }
}

/**
 * @element gds-segmented-control
 *
 * A segmented control is a group of 2-5 buttons that lets the user switch views or sort elements.
 *
 * @slot - Segments to display in the control
 *
 * @subcomponent gds-segment - Defines a segment in the segmented control
 *
 * @event change - Fires when the selected segment is changed
 */
@gdsCustomElement('gds-segmented-control', {
  dependsOn: [GdsSegment, IconChevronLeft, IconChevronRight],
})
@localized()
export class GdsSegmentedControl<ValueT = any> extends withLayoutChildProps(
  withSizeXProps(withMarginProps(GdsElement)),
) {
  static styles = [tokens, SegmentedControlStyles]

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

  intersectionObserver: IntersectionObserver | null = null

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-segmented-control')

    this.updateComplete.then(() => {
      this._elTrack.addEventListener('scroll', () => {
        this.#updateScrollBtnStateDebounced()
      })
    })
  }

  render() {
    return html`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${this.#scrollLeft}
        aria-label=${msg('Scroll right')}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${this.#handleSegmentClick}
          @slotchange=${this.#handleSlotChange}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${this.#scrollRight}
        aria-label=${msg('Scroll right')}
      >
        <gds-icon-chevron-right />
      </button>`
  }

  @resizeObserver()
  @watch('value')
  private _recalculateMinWidth() {
    this.updateComplete.then(() => {
      this.#updateScrollBtnStateDebounced()
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
          segment._isVisible = entry.intersectionRatio > 0.99
          // update arrows visibility once isVisible changes
          this.#updateScrollBtnStateDebounced()
        })
      },
      {
        root: this._elTrack,
        threshold: [0, 0.01, 0.5, 0.99, 1],
      },
    )
    this.segments.forEach((s) => {
      this.intersectionObserver?.observe(s)
    })
  }

  #scrollLeft = () => {
    const nextLeftOutOfView = this.segments.filter(
      (s, i, arr) => arr[i + 1]?.isVisible && !s.isVisible,
    )[0]

    if (!nextLeftOutOfView) return

    this._elTrack.scrollLeft -= nextLeftOutOfView.offsetWidth
  }

  #scrollRight = () => {
    const nextRightOutOfView = this.segments
      .filter((s, i, arr) => arr[i - 1]?.isVisible && !s.isVisible)
      .reverse()[0]

    if (!nextRightOutOfView) return

    this._elTrack.scrollLeft += nextRightOutOfView.offsetWidth
  }

  // Updates the visibility of the scroll buttons
  #updateScrollBtnState = () => {
    if (this.segments.every((s) => !s.isVisible)) return
    this._showPrevButton = !this.segments[0].isVisible
    this._showNextButton = !this.segments[this.segments.length - 1].isVisible
  }

  #updateScrollBtnStateDebounced = debounce(this.#updateScrollBtnState, 50)

  // Updates the selection indicator position
  #updateIndicator = () => {
    const segment = this.segments.find((s) => s.selected)
    if (segment) {
      const segmentWidth = segment.offsetWidth
      const segmentLeft = segment.offsetLeft

      this._elIndicator.style.transform = `translateX(${segmentLeft}px)`
      this._elIndicator.style.width = `${segmentWidth}px`
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

      this.dispatchCustomEvent('change', {
        detail: { segment: selectedSegment },
        bubbles: true,
        composed: true,
      })
    }
  }

  #updateSelectedFromValue = () => {
    if (!this.#value) return
    this.updateComplete.then(() => {
      const selectedSegment = this.segments.find((s) => s.value === this.#value)
      if (selectedSegment) {
        this.segments.forEach((s) => (s.selected = false))
        selectedSegment.selected = true
        this._elTrack.scrollLeft = selectedSegment.offsetLeft
      }
    })
  }
}
