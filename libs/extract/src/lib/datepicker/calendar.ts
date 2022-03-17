import {
  startOfMonth,
  endOfMonth,
  addDays,
  subDays,
  isSameDay,
  isSameMonth,
  format,
} from 'date-fns'
import { getWeekday } from './values'

export interface CalendarDay {
  date: Date
  formattedDate: string
  day: number
  currentMonth: boolean
  currentDay: boolean
  today: boolean
  selected: boolean
  rangeSelected: boolean
}
export type CalendarGrid = CalendarDay[][]

export const createCalendar = (
  locale: string,
  date: Date,
  selectedDate?: Date
): CalendarGrid => {
  const today = new Date()

  const som = startOfMonth(date)
  const eom = endOfMonth(date)

  const soc = subDays(som, getWeekday(som))
  const eoc = addDays(eom, 6 - getWeekday(eom))
  const weeks: CalendarGrid = []

  let currentDay = soc
  let currentWeek: CalendarDay[] = []
  let daysInCalendar = 0
  while (currentDay < eoc) {
    if (++daysInCalendar > 42) throw new Error('Calendar failed')
    if (getWeekday(currentDay) === 0) {
      currentWeek = []
      weeks.push(currentWeek)
    }
    currentWeek.push({
      date: currentDay,
      formattedDate: format(currentDay, 'yyyy-MM-dd'),
      day: currentDay.getDate(),
      currentDay: isSameDay(currentDay, date),
      currentMonth: isSameMonth(currentDay, date),
      today: isSameDay(currentDay, today),
      selected: selectedDate ? isSameDay(currentDay, selectedDate) : false,
      rangeSelected: false,
    })
    currentDay = addDays(currentDay, 1)
  }

  return weeks
}
