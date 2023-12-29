import { property, query, queryAll, queryAsync, state } from 'lit/decorators.js'
import { join } from 'lit/directives/join.js'
import { map } from 'lit/directives/map.js'
import { msg } from '@lit/localize'

import { GdsFormControlElement } from '../../components/form-control'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import { watch } from '../../utils/decorators'

import '../../primitives/popover/popover'
import type { GdsPopover } from '../../primitives/popover/popover'

import '../../primitives/calendar/calendar'
import type { GdsCalendar } from '../../primitives/calendar/calendar'

import { GdsDropdown } from '../dropdown/dropdown'

import './date-part-spinner'
import type { GdsDatePartSpinner } from './date-part-spinner'

type DatePart = 'year' | 'month' | 'day'

type StructuredDateFormat = {
  delimiter: string
  orderedFormat: { token: 'y' | 'm' | 'd'; name: DatePart }[]
}

/**
 * @element gds-datepicker
 *
 * A form control that allows the user to select a date.
 */
@gdsCustomElement('gds-datepicker')
export class GdsDatepicker extends GdsFormControlElement {
  #years = [2020, 2021, 2022, 2023, 2024, 2025]

  /**
   * The currently selected date.
   */
  @property({ type: Date })
  value = new Date()

  /**
   * Controls wheter the datepicker popover is open.
   */
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
    return this._structuredDateFormat.orderedFormat
      .map((f) => f.token)
      .join(this._structuredDateFormat.delimiter)
  }
  set dateformat(dateformat: string) {
    this._structuredDateFormat = this.#parseDateFormat(dateformat)
  }

  @state()
  focusedMonth = new Date().getMonth()

  @state()
  focusedYear = new Date().getFullYear()

  @query('gds-calendar')
  private _elCalendar!: GdsCalendar

  @queryAsync('#trigger')
  private _elTrigger!: Promise<HTMLButtonElement>

  @queryAll('gds-date-part-spinner')
  private _elSpinners!: NodeListOf<GdsDatePartSpinner>

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-datepicker')
  }

  @state()
  private _structuredDateFormat = this.#parseDateFormat('y-m-d')

  render() {
    return html`
      <div class="field" id="trigger">
        <div class="input">
          ${join(
            map(
              this._structuredDateFormat.orderedFormat,
              (f) =>
                html`<gds-date-part-spinner
                  .length=${f.token === 'y' ? 4 : 2}
                  .value=${this.#structuredDate()[f.name]}
                  aria-label=${this.#getSpinnerLabel(f.name)}
                  @keydown=${this.#handleSpinnerKeydown}
                  @change=${(e: CustomEvent) =>
                    this.#handleSpinnerChange(e.detail.value, f.name)}
                ></gds-date-part-spinner>`
            ),
            html`<span>${this._structuredDateFormat.delimiter}</span>`
          )}
        </div>
        <button
          aria-label="${msg('Open calendar modal')}"
          @click=${() => (this.open = !this.open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            style="width:100%;height:100%"
          >
            <path
              d="M152 64h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40zM48 248h80v-56H48v56zm0 48v64h80v-64H48zm128 0v64h96v-64h-96zm144 0v64h80v-64h-80zm80-104h-80v56h80v-56zm0 216h-80v56h64c8.8 0 16-7.2 16-16v-40zm-128 0h-96v56h96v-56zm-144 0H48v40c0 8.8 7.16 16 16 16h64v-56zm144-216h-96v56h96v-56z "
            />
          </svg>
        </button>
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
            <gds-option value="0">${msg('January')}</gds-option>
            <gds-option value="1">${msg('February')}</gds-option>
            <gds-option value="2">${msg('March')}</gds-option>
            <gds-option value="3">${msg('April')}</gds-option>
            <gds-option value="4">${msg('May')}</gds-option>
            <gds-option value="5">${msg('June')}</gds-option>
            <gds-option value="6">${msg('July')}</gds-option>
            <gds-option value="7">${msg('August')}</gds-option>
            <gds-option value="8">${msg('September')}</gds-option>
            <gds-option value="9">${msg('October')}</gds-option>
            <gds-option value="10">${msg('November')}</gds-option>
            <gds-option value="11">${msg('December')}</gds-option>
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
          @change=${(e: CustomEvent<Date>) => {
            this.value = e.detail
            this.#fireChangeEvent()
          }}
          @gds-date-focused=${this.#handleFocusChange}
          .focusedMonth=${this.focusedMonth}
          .focusedYear=${this.focusedYear}
          .value=${this.value}
        ></gds-calendar>
      </gds-popover>
    `
  }

  @watch('value')
  private _handleValueChange() {
    this.focusedMonth = this.value.getMonth()
    this.focusedYear = this.value.getFullYear()
  }

  #getSpinnerLabel(name: DatePart) {
    const labels = {
      year: msg('Year'),
      month: msg('Month'),
      day: msg('Day'),
    }
    return labels[name]
  }

  #handleSpinnerChange = (val: string, name: DatePart) => {
    const structuredDate = this.#structuredDate()
    structuredDate[name] = val
    this.value = new Date(
      `${structuredDate.year}-${structuredDate.month}-${structuredDate.day}`
    )
    this.#fireChangeEvent()
  }

  #fireChangeEvent() {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
      })
    )
  }

  #handleFocusChange = (_e: CustomEvent) => {
    this.focusedMonth = this._elCalendar.focusedMonth
    this.focusedYear = this._elCalendar.focusedYear
  }

  #handlePopoverStateChange = (e: CustomEvent) => {
    if (e.target !== e.currentTarget) return
    this.open = e.detail.open
  }

  #handleSpinnerKeydown = (e: KeyboardEvent) => {
    const index = Array.from(this._elSpinners).findIndex(
      (spinner) => spinner === e.target
    )
    if (e.key === 'ArrowRight') {
      const next = this._elSpinners[index + 1]
      if (next) next.focus()
    }
    if (e.key === 'ArrowLeft') {
      const prev = this._elSpinners[index - 1]
      if (prev) prev.focus()
    }
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
