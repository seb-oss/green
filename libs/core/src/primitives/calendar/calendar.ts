import { LitElement, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'
import { property, query } from 'lit/decorators.js'
import { msg } from '@lit/localize'
import {
  addDays,
  isSameDay,
  isSameMonth,
  getWeek,
  subMonths,
  addMonths,
} from 'date-fns'

import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import { renderMonthGridView } from './functions'

import style from './calendar.styles'

/**
 * @element gds-calendar
 * @internal
 *
 * A calendar is a widget that allows the user to select a date.
 *
 * @event change - Fired when a date is selected.
 * @event gds-date-focused - Fired when focus has changed.
 */
@gdsCustomElement('gds-calendar')
export class GdsCalendar extends LitElement {
  static styles = [style]
  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  /**
   * The currently selected date.
   */
  @property()
  value: Date = new Date()

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
   * The month that is currently focused.
   */
  @property({ type: Number })
  get focusedMonth() {
    return this.focusedDate.getMonth()
  }
  set focusedMonth(month: number) {
    this.focusedDate = new Date(this.focusedDate.setMonth(month))
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
   * Whether to show week numbers or not.
   */
  @property({ type: Boolean })
  showWeekNumbers = false

  /**
   * Returns the date cell element for the given day number.
   */
  getDateCell(dayNumber: number) {
    return this.shadowRoot?.querySelector(`#dateCell-${dayNumber}`)
  }

  @query('td[tabindex="0"]')
  private _elFocusedCell?: HTMLElement

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-calendar')

    this.addEventListener('keydown', this.#handleKeyDown)
  }

  focus() {
    super.focus()
    this._elFocusedCell?.focus()
  }

  render() {
    const currentDate = new Date()

    return html`<table>
      <thead>
        <tr>
          ${when(this.showWeekNumbers, () => html`<th></th>`)}
          <th>${msg('Mon')}</th>
          <th>${msg('Tue')}</th>
          <th>${msg('Wed')}</th>
          <th>${msg('Thu')}</th>
          <th>${msg('Fri')}</th>
          <th>${msg('Sat')}</th>
          <th>${msg('Sun')}</th>
        </tr>
      </thead>
      <tbody>
        ${renderMonthGridView(
          this.focusedDate,
          (weeks) => html`
            ${weeks.map(
              (week) => html`
                <tr>
                  ${when(
                    this.showWeekNumbers,
                    () =>
                      html`<td class="week-number">
                        ${getWeek(week.days[0])}
                      </td>`
                  )}
                  ${week.days.map((day) => {
                    const isDisabled =
                      !isSameMonth(this.focusedDate, day) ||
                      day < this.min ||
                      day > this.max
                    return html`
                      <td
                        class="${classMap({
                          disabled: isDisabled,
                          today: isSameDay(currentDate, day),
                        })}"
                        ?disabled=${isDisabled}
                        tabindex="${isSameDay(this.focusedDate, day) ? 0 : -1}"
                        aria-selected="${isSameDay(this.value, day)}"
                        aria-label="${day.toDateString()}"
                        @click=${() =>
                          isDisabled ? null : this.#setSelectedDate(day)}
                        id="dateCell-${day.getDate()}"
                      >
                        ${day.getDate()}
                      </td>
                    `
                  })}
                </tr>
              `
            )}
          `
        )}
      </tbody>
    </table>`
  }

  #setSelectedDate(date: Date) {
    this.value = date

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: date,
        bubbles: true,
        composed: true,
      })
    )
  }

  #handleKeyDown(e: KeyboardEvent) {
    let handled = false

    if (e.key === 'ArrowLeft') {
      this.focusedDate = addDays(this.focusedDate, -1)
      handled = true
    } else if (e.key === 'ArrowRight') {
      this.focusedDate = addDays(this.focusedDate, 1)
      handled = true
    } else if (e.key === 'ArrowUp') {
      this.focusedDate = addDays(this.focusedDate, -7)
      handled = true
    } else if (e.key === 'ArrowDown') {
      this.focusedDate = addDays(this.focusedDate, 7)
      handled = true
    } else if (e.key === 'Enter' || e.key === ' ') {
      this.#setSelectedDate(this.focusedDate)
      handled = true
    } else if (e.key === 'Home') {
      this.focusedDate = new Date(this.focusedYear, this.focusedMonth, 1)
      handled = true
    } else if (e.key === 'End') {
      this.focusedDate = new Date(this.focusedYear, this.focusedMonth + 1, 0)
      handled = true
    } else if (e.key === 'PageUp') {
      this.focusedDate = subMonths(this.focusedDate, 1)
      handled = true
    } else if (e.key === 'PageDown') {
      this.focusedDate = addMonths(this.focusedDate, 1)
      handled = true
    }

    if (handled) {
      e.preventDefault()
      e.stopPropagation()

      this.updateComplete.then(() => {
        this._elFocusedCell?.focus()

        this.dispatchEvent(
          new CustomEvent('gds-date-focused', {
            detail: this.focusedDate,
            bubbles: true,
            composed: true,
          })
        )
      })
    }
  }
}
