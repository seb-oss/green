import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { resizeObserver } from '../../utils/decorators/resize-observer'

import './filter-chip'
import type { GdsFilterChip } from './filter-chip'

import { styles } from './filter-chips.styles'

/**
 * @element gds-filter-chips
 */
@gdsCustomElement('gds-filter-chips')
export class GdsFilterChips<ValueT = any> extends GdsElement {
  static styles = [styles]

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
  get chips() {
    return this._elSlot
      ? (this._elSlot.assignedElements() as GdsFilterChip[])
      : []
  }

  @state()
  private _collapse = false

  @query('slot')
  private _elSlot!: HTMLSlotElement

  @query('.chips')
  private _elChips!: HTMLElement

  render() {
    const layoutClasses = {
      collapse: this._collapse,
    }
    return html`<div class="chips ${classMap(layoutClasses)}" role="list">
      <slot
        @click=${this.#handleChipClick}
        @slotchange=${this.#handleSlotChange}
      ></slot>
    </div>`
  }

  #handleChipClick = (event: Event) => {
    const selectedChip = this.chips.find(
      (s) => s === event.target || s.contains(event.target as Node),
    )
    if (selectedChip) {
      this.chips.forEach((s) => (s.selected = false))
      selectedChip.selected = true

      this.#value = selectedChip.value

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { chip: selectedChip },
          bubbles: true,
          composed: true,
        }),
      )
    }
  }

  private _collapseThreshold = 3
  private _collapsedAt = 0

  @resizeObserver()
  private _handleResize() {
    const chipHeight = this.#getChipHeight()
    const selfHeight = this.offsetHeight
    const selfWidth = this.offsetWidth

    if (selfHeight >= chipHeight * this._collapseThreshold) {
      this._collapse = true
      this._collapsedAt = selfWidth
    }

    if (selfWidth > this._collapsedAt) {
      this._collapse = false
    }
  }

  #getChipHeight() {
    return this.chips[0]?.offsetHeight || 0
  }

  #handleSlotChange() {
    const selChipValue = this.chips.find((s) => s.selected)?.value
    if (selChipValue) {
      this.#value = selChipValue
    }
  }

  #updateSelectedFromValue = () => {
    if (!this.#value) return
    this.updateComplete.then(() => {
      const selectedChip = this.chips.find((s) => s.value === this.#value)
      if (selectedChip) {
        this.chips.forEach((s) => (s.selected = false))
        selectedChip.selected = true
      }
    })
  }
}
