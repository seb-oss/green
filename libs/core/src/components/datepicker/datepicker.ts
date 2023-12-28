import { property, query, queryAsync, state } from 'lit/decorators.js'
import { join } from 'lit/directives/join.js'
import { map } from 'lit/directives/map.js'

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

import './date-part-spinner'

type StructuredDateFormat = {
  delimiter: string
  orderedFormat: { token: 'y' | 'm' | 'd'; name: 'year' | 'month' | 'day' }[]
}

/**
 * @element gds-datepicker
 *
 * A form control that allows the user to select a date.
 */
@gdsCustomElement('gds-datepicker')
export class GdsDatepicker extends GdsFormControlElement {
  #years = [2020, 2021, 2022, 2023, 2024, 2025]

  @property()
  value = new Date()

  @property({ type: Boolean })
  open = false

  /**
   * The date format to use. Accepts a string with the characters `y`, `m` and `d` in any order, separated by a delimiter.
   * For example, `y-m-d` or `d/m/y`. All three characters must be present.
   *
   * This will determine the structure of the input field.
   *
   * Defaults to `y-m-d`.
   */
  @property()
  get dateformat() {
    return this.#structuredDateFormat.orderedFormat
      .map((f) => f.token)
      .join(this.#structuredDateFormat.delimiter)
  }
  set dateformat(dateformat: string) {
    this.#structuredDateFormat = this.#parseDateFormat(dateformat)
  }

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

  #structuredDateFormat = this.#parseDateFormat('y-m-d')

  render() {
    return html`
      <div class="field" id="trigger">
        <div>
          ${join(
            map(
              this.#structuredDateFormat.orderedFormat,
              (f) =>
                html`<gds-date-part-spinner
                  .length=${f.token === 'y' ? 4 : 2}
                  .value=${this.#structuredDate()[f.name]}
                ></gds-date-part-spinner>`
            ),
            html`<span>${this.#structuredDateFormat.delimiter}</span>`
          )}
        </div>
        <button @click=${() => (this.open = !this.open)}>Open</button>
      </div>
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

  #parseDateFormat(dateformat: string): StructuredDateFormat {
    const delimiter = dateformat.replace(/[a-z0-9]/gi, '')[0]
    const format = dateformat.split(delimiter)
    const year = format.findIndex((f) => f === 'y')
    const month = format.findIndex((f) => f === 'm')
    const day = format.findIndex((f) => f === 'd')

    if (year === -1 || month === -1 || day === -1)
      throw new Error('Invalid date format for <gds-datepicker>')

    const ordered = [year, month, day].sort((a, b) => a - b)
    const orderedFormat = ordered
      .map((i) => format[i])
      .map((f) => ({
        token: f,
        name: f === 'y' ? 'year' : f === 'm' ? 'month' : 'day',
      })) as StructuredDateFormat['orderedFormat']

    return { delimiter, orderedFormat }
  }

  #structuredDate() {
    const date = this.value
    const year = date.getFullYear().toString()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')

    return {
      year: year,
      month: month,
      day: day,
    }
  }
}
