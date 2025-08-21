import { localized, msg } from '@lit/localize'
import { html } from 'lit'
import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import {
  addDays,
  addMonths,
  getWeek,
  isSameDay,
  isSameMonth,
  lastDayOfMonth,
  setHours,
  subMonths,
} from 'date-fns'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement } from '../../scoping'
import { tokens } from '../../tokens.style'
import { TransitionalStyles } from '../../transitional-styles'
import { watch } from '../../utils/decorators/watch'
import CalendarStyles from './calendar.styles'
import { renderMonthGridView } from './functions'

/**
 * Used to customize the appearance of a date in the calendar.
 */
export type CustomizedDate = {
  /**
   * The date to customize.
   */
  date: Date

  /**
   * The color of the indicator.
   */
  color?: string

  /**
   * The type of indicator. Can be anything but common types are:
   * `dot` (default) and `icon` (future default).
   */
  indicator?: 'dot'

  /**
   * Whether the date is disabled or not.
   */
  disabled: boolean
}

/**
 * @element gds-calendar
 * @status stable
 *
 * A calendar is a widget that allows the user to select a date.
 *
 * @event change - Fired when a date is selected.
 * @event gds-date-focused - Fired when focus is changed. Can be cancelled using `event.preventDefault()`.
 */
@gdsCustomElement('gds-calendar')
@localized()
export class GdsCalendar extends GdsElement {
  static styles = [tokens, CalendarStyles]
  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * The currently selected date.
   */
  @property()
  value?: Date

  /**
   * The minimum date that can be selected.
   */
  @property({ type: Date })
  min = new Date(new Date().getFullYear() - 10, 0, 1)

  /**
   * The maximum date that can be selected.
   */
  @property({ type: Date })
  max = new Date(new Date().getFullYear() + 10, 0, 1)

  /**
   * The date that is currently focused.
   */
  @property()
  focusedDate = new Date()

  /**
   * Whether to disable weekends or not.
   */
  @property({ type: Boolean, attribute: 'disabled-weekends' })
  disabledWeekends = false

  /**
   * An array of dates that should be disabled in the calendar.
   */
  @property({ type: Array<Date>, attribute: 'disabled-dates' })
  disabledDates?: Date[]

  /**
   * The month that is currently focused.
   */
  @property({ type: Number })
  get focusedMonth() {
    return this.focusedDate.getMonth()
  }
  set focusedMonth(month: number) {
    const lastOfSelectedMonth = lastDayOfMonth(
      new Date(this.focusedYear, month, 1),
    )
    const newFocusedDate = new Date(this.focusedDate)

    newFocusedDate.setDate(
      Math.min(this.focusedDate.getDate(), lastOfSelectedMonth.getDate()),
    )
    newFocusedDate.setMonth(month)
    newFocusedDate.setHours(12, 0, 0, 0)

    this.focusedDate = newFocusedDate
  }

  /**
   * The year that is currently focused.
   */
  @property({ type: Number })
  get focusedYear() {
    return this.focusedDate.getFullYear()
  }
  set focusedYear(year: number) {
    this.focusedDate = new Date(this.focusedDate.setFullYear(year))
  }

  /**
   * Sets the size of the grid. Defaults to "large".
   */
  @property({ reflect: true })
  size: 'small' | 'large' = 'large'

  /**
   * Whether to show week numbers or not.
   */
  @property({ type: Boolean })
  showWeekNumbers = false

  /**
   * Whether to hide extraneous days (that fall ouside of current month)
   */
  @property({ type: Boolean })
  hideExtraneousDays = false

  /**
   * Whether to hide the day names shown above the calendar.
   */
  @property({ type: Boolean })
  hideDayNames = false

  /**
   * Whether to day names with 3 characters instead of just the first.
   */
  @property({ type: Boolean })
  longDayNames = false

  /**
   * An array of `CustomizedDate` objects that can be used customize the appearance of dates.
   * This can only be set through the property, not through an attribute.
   */
  @property({ attribute: false })
  customizedDates?: CustomizedDate[]

  /**
   * The accessible label for the calendar.
   */
  @property()
  label?: string

  /**
   * A template function to customize the accessible date label.
   */
  @property({ attribute: false })
  dateLabelTemplate = (date: Date) =>
    date.toLocaleDateString(this._currentLocale, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  /**
   * Returns the date cell element for the given day number.
   */
  getDateCell(dayNumber: number) {
    return this.shadowRoot?.querySelector(`#dateCell-${dayNumber}`)
  }

  @state()
  private _currentLocale = navigator.language

  @query('td[tabindex="0"]')
  private _elFocusedCell?: HTMLElement

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-calendar')

    this.addEventListener('keydown', this.#handleKeyDown)
    window.addEventListener('lit-localize-status', (e: CustomEvent) => {
      if (e.detail.status === 'ready')
        this._currentLocale = e.detail.readyLocale
    })
  }

  focus() {
    super.focus()
    this._elFocusedCell?.focus()
  }

  render() {
    const currentDate = new Date()

    return html`<table
      role="grid"
      aria-label="${ifDefined(this.label)}"
      class="${classMap({
        small: Boolean(this.size === 'small'),
        indicators: Boolean(this.customizedDates),
      })}"
    >
      ${when(
        !this.hideDayNames,
        () =>
          html`<thead role="rowgroup">
            <tr role="row">
              ${when(this.showWeekNumbers, () => html`<th></th>`)}
              ${when(
                this.longDayNames,
                () =>
                  html`<th>${msg('Mon')}</th>
                    <th>${msg('Tue')}</th>
                    <th>${msg('Wed')}</th>
                    <th>${msg('Thu')}</th>
                    <th>${msg('Fri')}</th>
                    <th>${msg('Sat')}</th>
                    <th>${msg('Sun')}</th>`,
                () =>
                  html`<th>${msg('Mon').substring(0, 1)}</th>
                    <th>${msg('Tue').substring(0, 1)}</th>
                    <th>${msg('Wed').substring(0, 1)}</th>
                    <th>${msg('Thu').substring(0, 1)}</th>
                    <th>${msg('Fri').substring(0, 1)}</th>
                    <th>${msg('Sat').substring(0, 1)}</th>
                    <th>${msg('Sun').substring(0, 1)}</th>`,
              )}
            </tr>
          </thead>`,
      )}
      <tbody role="rowgroup">
        ${renderMonthGridView(
          this.focusedDate,
          (weeks) => html`
            ${weeks.map(
              (week) => html`
                <tr role="row">
                  ${when(
                    this.showWeekNumbers,
                    () =>
                      html`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${getWeek(week.days[0])}
                      </td>`,
                  )}
                  ${week.days.map((day) => {
                    const customization =
                      this.customizedDates &&
                      this.customizedDates.find((d) => isSameDay(d.date, day))

                    // Establish customization options for the current date
                    const displayOptions: Omit<CustomizedDate, 'date'> = {
                      // Defaults
                      color: 'currentColor',

                      // Get baseline disabled state from the disabledDates prop (or false if unset)
                      disabled: Boolean(
                        this.disabledDates &&
                          this.disabledDates.some((d) => isSameDay(d, day)),
                      ),

                      // Override with any customizations
                      ...customization,
                    }

                    const isOutsideCurrentMonth = !isSameMonth(
                      this.focusedDate,
                      day,
                    )

                    const isOutsideMinMax =
                      (day < this.min || day > this.max) &&
                      !isSameDay(day, this.min) &&
                      !isSameDay(day, this.max)

                    const isWeekend = day.getDay() === 0 || day.getDay() === 6

                    // Establish final disabled state
                    const isDisabled =
                      displayOptions.disabled ||
                      isOutsideCurrentMonth ||
                      isOutsideMinMax ||
                      (this.disabledWeekends && isWeekend)

                    const shouldRenderBlank =
                      this.hideExtraneousDays && isOutsideCurrentMonth

                    return shouldRenderBlank
                      ? html`<td inert></td>`
                      : html`
                          <td
                            role="${ifDefined(
                              isDisabled ? undefined : 'gridcell',
                            )}"
                            class="${classMap({
                              small: Boolean(this.size === 'small'),
                              'custom-date': Boolean(customization),
                              disabled: Boolean(isDisabled),
                              today: isSameDay(currentDate, day),
                            })}"
                            ?disabled=${isDisabled}
                            tabindex="${isSameDay(this.focusedDate, day)
                              ? 0
                              : -1}"
                            aria-selected="${this.value &&
                            isSameDay(this.value, day)
                              ? 'true'
                              : 'false'}"
                            aria-label="${this.dateLabelTemplate(day)}"
                            @click=${() =>
                              isDisabled ? null : this.#setSelectedDate(day)}
                            id="dateCell-${day.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${displayOptions
                                ? displayOptions?.color
                                : ''}"
                              >${day.getDate()}</span
                            >

                            ${when(
                              displayOptions.indicator,
                              () =>
                                html`<span
                                  class="indicator-${displayOptions?.indicator}"
                                  style="--_color: ${displayOptions?.color}"
                                ></span>`,
                            )}
                          </td>
                        `
                  })}
                </tr>
              `,
            )}
          `,
        )}
      </tbody>
    </table>`
  }

  #setSelectedDate(date: Date) {
    // Set the time to midday to avoid timezone issues
    const dateOnMidDay = setHours(date, 12)

    this.value = dateOnMidDay

    this.dispatchCustomEvent('change', {
      detail: dateOnMidDay,
      bubbles: false,
      composed: false,
    })
  }

  @watch('value')
  private _valueChanged() {
    if (!this.value) return
    this.focusedDate = new Date(this.value)
  }

  #handleKeyDown(e: KeyboardEvent) {
    let handled = false

    let newFocusedDate = new Date(this.focusedDate)

    if (e.key === 'ArrowLeft') {
      newFocusedDate = addDays(this.focusedDate, -1)
      handled = true
    } else if (e.key === 'ArrowRight') {
      newFocusedDate = addDays(this.focusedDate, 1)
      handled = true
    } else if (e.key === 'ArrowUp') {
      newFocusedDate = addDays(this.focusedDate, -7)
      handled = true
    } else if (e.key === 'ArrowDown') {
      newFocusedDate = addDays(this.focusedDate, 7)
      handled = true
    } else if (e.key === 'Enter' || e.key === ' ') {
      if (!this._elFocusedCell?.hasAttribute('disabled')) {
        this.#setSelectedDate(this.focusedDate)
      }
      handled = true
    } else if (e.key === 'Home') {
      newFocusedDate = new Date(this.focusedYear, this.focusedMonth, 1)
      handled = true
    } else if (e.key === 'End') {
      newFocusedDate = new Date(this.focusedYear, this.focusedMonth + 1, 0)
      handled = true
    } else if (e.key === 'PageUp') {
      newFocusedDate = subMonths(this.focusedDate, 1)
      handled = true
    } else if (e.key === 'PageDown') {
      newFocusedDate = addMonths(this.focusedDate, 1)
      handled = true
    }

    if (
      newFocusedDate.getFullYear() >= this.min.getFullYear() &&
      newFocusedDate.getFullYear() <= this.max.getFullYear()
    ) {
      const proceed = this.dispatchCustomEvent('gds-date-focused', {
        detail: newFocusedDate,
        bubbles: false,
        composed: false,
      })
      if (proceed) {
        this.focusedDate = newFocusedDate
      }
    }

    if (handled) {
      e.preventDefault()
      e.stopPropagation()

      this.updateComplete.then(() => {
        this._elFocusedCell?.focus()
      })
    }
  }
}
