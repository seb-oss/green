import { LitElement, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { property, query, state } from 'lit/decorators.js'
import { addDays, isSameDay, isSameMonth } from 'date-fns'

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
 * @event gds-date-selected - Fired when a date is selected.
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

  @query('td[tabindex="0"]')
  private _elFocusedCell?: HTMLElement

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-calendar')

    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        this.focusedDate = addDays(this.focusedDate, -1)
      } else if (e.key === 'ArrowRight') {
        this.focusedDate = addDays(this.focusedDate, 1)
      } else if (e.key === 'ArrowUp') {
        this.focusedDate = addDays(this.focusedDate, -7)
      } else if (e.key === 'ArrowDown') {
        this.focusedDate = addDays(this.focusedDate, 7)
      } else if (e.key === 'Enter' || e.key === ' ') {
        this.#setSelectDate(this.focusedDate)
      }

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
    })
  }

  render() {
    const currentDate = new Date()

    return html`<table>
      <thead>
        <tr>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th>Sun</th>
        </tr>
      </thead>
      <tbody>
        ${renderMonthGridView(
          this.focusedDate,
          (weeks) => html`
            ${weeks.map(
              (week) => html`
                <tr>
                  ${week.days.map(
                    (day) => html`
                      <td
                        class="${classMap({
                          disabled: !isSameMonth(this.focusedDate, day),
                          today: isSameDay(currentDate, day),
                        })}"
                        tabindex="${isSameDay(this.focusedDate, day) ? 0 : -1}"
                        aria-selected="${isSameDay(this.value, day)}"
                        @click=${() => this.#setSelectDate(day)}
                      >
                        ${day.getDate()}
                      </td>
                    `
                  )}
                </tr>
              `
            )}
          `
        )}
      </tbody>
    </table>`
  }

  #setSelectDate(date: Date) {
    this.value = date

    this.dispatchEvent(
      new CustomEvent('gds-date-selected', {
        detail: date,
        bubbles: true,
        composed: true,
      })
    )
  }
}
