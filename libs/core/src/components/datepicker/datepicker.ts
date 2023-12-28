import { property, query, queryAsync, state } from 'lit/decorators.js'

import { GdsFormControlElement } from '../../components/form-control'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'

import '../../primitives/popover/popover'
import type { GdsPopover } from '../../primitives/popover/popover'

import '../../primitives/calendar/calendar'
import type { GdsCalendar } from '../../primitives/calendar/calendar'

import { GdsDropdown } from '../dropdown/dropdown'

@gdsCustomElement('gds-datepicker')
export class GdsDatepicker extends GdsFormControlElement {
  #years = [2020, 2021, 2022, 2023, 2024, 2025]

  @property({ type: Boolean })
  open = false

  @state()
  focusedMonth = new Date().getMonth()

  @state()
  focusedYear = new Date().getFullYear()

  @query('gds-calendar')
  private _elCalendar!: GdsCalendar

  @queryAsync('#trigger')
  private _elTrigger!: Promise<HTMLButtonElement>

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-datepicker')
  }

  render() {
    return html`
      <button id="trigger" @click=${() => (this.open = !this.open)}>
        Open
      </button>
      <gds-popover
        .triggerRef=${this._elTrigger}
        .open=${this.open}
        @gds-ui-state=${this.#handlePopoverStateChange}
      >
        <div class="header">
          <gds-dropdown
            .value=${this.focusedMonth.toString()}
            @change=${(e: CustomEvent) =>
              (this.focusedMonth = (e.target as GdsDropdown)?.value)}
            label="Month"
          >
            <gds-option value="0">January</gds-option>
            <gds-option value="1">February</gds-option>
            <gds-option value="2">March</gds-option>
            <gds-option value="3">April</gds-option>
            <gds-option value="4">May</gds-option>
            <gds-option value="5">June</gds-option>
            <gds-option value="6">July</gds-option>
            <gds-option value="7">August</gds-option>
            <gds-option value="8">September</gds-option>
            <gds-option value="9">October</gds-option>
            <gds-option value="10">November</gds-option>
            <gds-option value="11">December</gds-option>
          </gds-dropdown>
          <gds-dropdown
            .value=${this.focusedYear.toString()}
            @change=${(e: CustomEvent) =>
              (this.focusedYear = (e.target as GdsDropdown)?.value)}
            label="Year"
          >
            ${this.#years.map(
              (year) => html`<gds-option value=${year}>${year}</gds-option>`
            )}
          </gds-dropdown>
        </div>

        <gds-calendar
          @gds-date-selected=${console.log}
          @gds-date-focused=${this.#handleFocusChange}
          .focusedMonth=${this.focusedMonth}
          .focusedYear=${this.focusedYear}
        ></gds-calendar>
      </gds-popover>
    `
  }

  #handleFocusChange = (e: CustomEvent) => {
    this.focusedMonth = this._elCalendar.focusedMonth
    this.focusedYear = this._elCalendar.focusedYear
  }

  #handlePopoverStateChange = (e: CustomEvent) => {
    if (e.target !== e.currentTarget) return
    this.open = e.detail.open
  }
}
