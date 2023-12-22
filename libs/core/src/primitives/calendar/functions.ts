import {
  startOfMonth,
  endOfMonth,
  addDays,
  eachWeekOfInterval,
  eachDayOfInterval,
} from 'date-fns'
import { TemplateResult, html } from 'lit-html'

export function renderMonthGridView(
  date: Date,
  templates: {
    header: () => TemplateResult
    weekRow: (days: TemplateResult) => TemplateResult
    dayCell: (day: Date) => TemplateResult
  }
) {
  const monthStart = startOfMonth(date)
  const monthEnd = endOfMonth(date)
  const weeks = eachWeekOfInterval(
    { start: monthStart, end: monthEnd },
    { weekStartsOn: 1 }
  )

  return html`
    ${templates.header()}
    ${weeks.map((weekStartDay) => {
      const days = eachDayOfInterval({
        start: weekStartDay,
        end: addDays(weekStartDay, 6),
      })

      return templates.weekRow(
        html`${days.map((day) => templates.dayCell(day))}`
      )
    })}
  `
}
