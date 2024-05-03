import { HTMLTemplateResult } from 'lit'
import { property, query, state } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

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

  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult

  @query('slot')
  private _elSlot!: HTMLSlotElement

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-filter-chips')
  }

  render() {
    return html`${this._tStyles}
      <div role="list">
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
