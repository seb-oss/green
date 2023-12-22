import { LitElement, html } from 'lit'
import { classMap } from 'lit/directives/class-map.js'

import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { renderMonthGridView } from './functions'

import style from './calendar.styles'
import { isSameMonth } from 'date-fns'

@gdsCustomElement('gds-calendar')
export class GdsCalendar extends LitElement {
  static styles = [style]

  render() {
    const currentMonth = new Date()

    return html`<table>
      ${renderMonthGridView(currentMonth, {
        header: () =>
          html`<tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>`,
        weekRow: (days) =>
          html`<tr>
            ${days}
          </tr>`,
        dayCell: (day) =>
          html`<td
            class="${classMap({ disabled: !isSameMonth(currentMonth, day) })}"
          >
            ${day.getDate()}
          </td>`,
      })}
    </table>`
  }
}
