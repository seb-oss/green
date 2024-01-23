import {
  startOfMonth,
  endOfMonth,
  addDays,
  eachWeekOfInterval,
  eachDayOfInterval,
} from 'date-fns'
import { TemplateResult, html } from 'lit-html'

export type Week = {
  days: Date[]
}

export function renderMonthGridView(
  date: Date,
  template: (weeks: Week[]) => TemplateResult
) {
  const monthStart = startOfMonth(date)
  const monthEnd = endOfMonth(date)
  const weeks = eachWeekOfInterval(
    { start: monthStart, end: monthEnd },
    { weekStartsOn: 1 }
  )

  return html`${template(
    weeks.map((weekStartDay) => ({
      days: eachDayOfInterval({
        start: weekStartDay,
        end: addDays(weekStartDay, 6),
      }),
    }))
  )}`
}
