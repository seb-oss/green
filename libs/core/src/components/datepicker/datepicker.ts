import { property, query, queryAll, queryAsync, state } from 'lit/decorators.js'
import { join } from 'lit/directives/join.js'
import { map } from 'lit/directives/map.js'
import { msg } from '@lit/localize'
import { eachYearOfInterval } from 'date-fns'

import { GdsFormControlElement } from '../../components/form-control'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import { watch } from '../../utils/decorators'

import '../../primitives/popover/popover'

import '../../primitives/calendar/calendar'
import type { GdsCalendar } from '../../primitives/calendar/calendar'

import { GdsDropdown } from '../dropdown/dropdown'

import './date-part-spinner'
import type { GdsDatePartSpinner } from './date-part-spinner'

import { styles } from './datepicker.styles'

type DatePart = 'year' | 'month' | 'day'

type StructuredDateFormat = {
  delimiter: string
  orderedFormat: { token: 'y' | 'm' | 'd'; name: DatePart }[]
}

const dateConverter = {
  fromAttribute(value: string) {
    return new Date(value)
  },
  toAttribute(value: Date) {
    return value.toISOString()
  },
}

/**
 * @element gds-datepicker
 *
 * A form control that allows the user to select a date.
 */
@gdsCustomElement('gds-datepicker')
export class GdsDatepicker extends GdsFormControlElement {
  static styles = [styles]
  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * The currently selected date.
   */
  @property({ converter: dateConverter })
  value = new Date()

  /**
   * The minimum date that can be selected.
   */
  @property({ converter: dateConverter })
  min = new Date(new Date().getFullYear() - 10, 0, 1)

  /**
   * The maximum date that can be selected.
   */
  @property({ converter: dateConverter })
  max = new Date(new Date().getFullYear() + 10, 0, 1)

  /**
   * Controls wheter the datepicker popover is open.
   */
  @property({ type: Boolean })
  open = false

  /**
   * The label of the datepicker.
   */
  @property()
  label = ''

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
  private _focusedMonth = new Date().getMonth()

  @state()
  private _focusedYear = new Date().getFullYear()

  @state()
  private _structuredDateFormat = this.#parseDateFormat('y-m-d')

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

  render() {
    return html`
      <label for="spinner-0" id="label">${this.label}</label>
      <div class="field" id="trigger">
        <div class="input">
          ${join(
            map(
              this._structuredDateFormat.orderedFormat,
              (f, i) =>
                html`<gds-date-part-spinner
                  id="spinner-${i}"
                  .length=${f.token === 'y' ? 4 : 2}
                  .value=${this.#structuredDate[f.name]}
                  aria-valuemin=${this.#getMinSpinnerValue(f.name)}
                  aria-valuemax=${this.#getMaxSpinnerValue(f.name)}
                  aria-label=${this.#getSpinnerLabel(f.name)}
                  aria-describedby="label"
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
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar"
          aria-describedby="label"
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
        id="calendar"
      >
        <div class="header">
          <button @click=${this.#handleDecrementFocusedMonth}>
            <i class="icon prev"></i>
          </button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${(e: CustomEvent) =>
              (this._focusedMonth = (e.target as GdsDropdown)?.value)}
            aria-label="${msg('Month')}"
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
            .value=${this._focusedYear.toString()}
            @change=${(e: CustomEvent) =>
              (this._focusedYear = (e.target as GdsDropdown)?.value)}
            aria-label="${msg('Year')}"
          >
            ${this.#years.map(
              (year) => html`<gds-option value=${year}>${year}</gds-option>`
            )}
          </gds-dropdown>
          <button @click=${this.#handleIncrementFocusedMonth}>
            <i class="icon next"></i>
          </button>
        </div>

        <gds-calendar
          @change=${(e: CustomEvent<Date>) => {
            this.value = e.detail
            this.open = false
            this.#fireChangeEvent()
          }}
          @gds-date-focused=${this.#handleFocusChange}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
        ></gds-calendar>

        <div class="footer">
          <button
            class="tertiary clear"
            @click=${() => {
              this.value = new Date()
              this.#fireChangeEvent()
            }}
          >
            ${msg('Clear')}
          </button>
          <button
            class="tertiary today"
            @click=${() => {
              this.value = new Date()
              this.#fireChangeEvent()
            }}
          >
            ${msg('Today')}
          </button>
        </div>
      </gds-popover>
    `
  }

  @watch('value')
  private _handleValueChange() {
    this._focusedMonth = this.value.getMonth()
    this._focusedYear = this.value.getFullYear()
  }

  #getSpinnerLabel(name: DatePart) {
    const labels = {
      year: msg('Year'),
      month: msg('Month'),
      day: msg('Day'),
    }
    return labels[name]
  }

  #getMinSpinnerValue(name: DatePart) {
    const min = {
      year: this.min.getFullYear(),
      month: 1,
      day: 1,
    }
    return min[name]
  }

  #getMaxSpinnerValue(name: DatePart) {
    const max = {
      year: this.max.getFullYear(),
      month: 12,
      day: 31,
    }
    return max[name]
  }

  #fireChangeEvent() {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
      })
    )
  }

  #handleIncrementFocusedMonth = (_e: MouseEvent) => {
    this._focusedMonth++
    if (this._focusedMonth > 11) {
      this._focusedMonth = 0
      this._focusedYear++
    }
  }

  #handleDecrementFocusedMonth = (_e: MouseEvent) => {
    this._focusedMonth--
    if (this._focusedMonth < 0) {
      this._focusedMonth = 11
      this._focusedYear--
    }
  }

  #handleSpinnerChange = (val: string, name: DatePart) => {
    const structuredDate = this.#structuredDate
    structuredDate[name] = val
    this.value = new Date(
      `${structuredDate.year}-${structuredDate.month}-${structuredDate.day}`
    )
    this.#fireChangeEvent()
  }

  #handleFocusChange = (_e: CustomEvent) => {
    this._focusedMonth = this._elCalendar.focusedMonth
    this._focusedYear = this._elCalendar.focusedYear
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

  get #structuredDate() {
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

  get #years() {
    return eachYearOfInterval({
      start: this.min,
      end: this.max,
    }).map((date) => date.getFullYear())
  }
}
