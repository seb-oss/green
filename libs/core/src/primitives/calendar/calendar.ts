import { LitElement, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'
import { query, state } from 'lit/decorators.js'
import { addDays, isSameDay, isSameMonth } from 'date-fns'

import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../utils/helpers/transitional-styles'
import { renderMonthGridView } from './functions'

import style from './calendar.styles'

@gdsCustomElement('gds-calendar')
export class GdsCalendar extends LitElement {
  static styles = [style]
  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  @state()
  currentFocus = new Date()

  @query('td[tabindex="0"]')
  private _elFocusedCell?: HTMLElement

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-calendar')

    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        this.currentFocus = addDays(this.currentFocus, -1)
      } else if (e.key === 'ArrowRight') {
        this.currentFocus = addDays(this.currentFocus, 1)
      } else if (e.key === 'ArrowUp') {
        this.currentFocus = addDays(this.currentFocus, -7)
      } else if (e.key === 'ArrowDown') {
        this.currentFocus = addDays(this.currentFocus, 7)
      }

      this.updateComplete.then(() => {
        this._elFocusedCell?.focus()
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
          this.currentFocus,
          (weeks) => html`
            ${weeks.map(
              (week) => html`
                <tr>
                  ${week.days.map(
                    (day) => html`
                      <td
                        class="${classMap({
                          disabled: !isSameMonth(this.currentFocus, day),
                          today: isSameDay(currentDate, day),
                        })}"
                        tabindex="${isSameDay(this.currentFocus, day) ? 0 : -1}"
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
}
