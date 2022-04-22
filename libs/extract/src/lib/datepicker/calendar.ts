import {
  startOfMonth,
  endOfMonth,
  addDays,
  subDays,
  isSameDay,
  isSameMonth,
  format,
  getWeek,
} from 'date-fns'
import { getNameForWeek, getWeekday, weekdays } from './values'

export interface CalendarDay {
  date: Date
  formattedDate: string
  day: number
  currentMonth: boolean
  currentDay: boolean
  today: boolean
  highlighted: boolean
  selected: boolean
  rangeSelected: boolean
}
export type CalendarGrid = CalendarDay[][]

export interface Calendar {
  calendarGrid: CalendarGrid
  headers: CalendarHeader[]
  weekNumbers?: number[]
}
export interface CalendarHeader {
  abbr: string
  displayText: string
  type: 'week' | 'day'
}

export const createCalendar = (
  locale: string,
  date: Date,
  selectedDate: Date | undefined,
  showWeeks: boolean,
  useCurrentTime: boolean,
  weekName: { abbr: string; displayText: string },
  highlightedDate?: Date | undefined
): Calendar => {
  let calendar: Partial<Calendar> = {}
  const today = new Date()

  const som = startOfMonth(date)
  const eom = endOfMonth(date)

  const soc = subDays(som, getWeekday(som))
  const eoc = addDays(eom, 6 - getWeekday(eom))
  const weeks: CalendarGrid = []

  const ch = today.getHours()
  const cm = today.getMinutes()
  const cs = today.getSeconds()
  const cms = today.getMilliseconds()

  let currentDay = soc
  let currentWeek: CalendarDay[] = []
  let daysInCalendar = 0
  let weekNumbers
  while (currentDay < eoc) {
    if (++daysInCalendar > 42) throw new Error('Calendar failed')
    if (getWeekday(currentDay) === 0) {
      currentWeek = []
      weeks.push(currentWeek)

      if (showWeeks) {
        const weekNumber = getWeek(currentDay)
        weekNumbers = [...(weekNumbers || []), weekNumber]
      }
    }
    currentWeek.push({
      date: useCurrentTime
        ? new Date(currentDay.setHours(ch, cm, cs, cms))
        : currentDay,
      formattedDate: format(currentDay, 'yyyy-MM-dd'),
      day: currentDay.getDate(),
      currentDay: isSameDay(currentDay, date),
      currentMonth: isSameMonth(currentDay, date),
      today: isSameDay(currentDay, today),
      highlighted: highlightedDate
        ? isSameDay(currentDay, highlightedDate)
        : false,
      selected: selectedDate ? isSameDay(currentDay, selectedDate) : false,
      rangeSelected: false,
    })
    currentDay = addDays(currentDay, 1)
  }

  // create headers for weekdays
  let headers = <CalendarHeader[]>weekdays(locale).map((day) => ({
    abbr: day.long,
    displayText: day.short,
    type: 'day',
  }))

  if (showWeeks && weekNumbers) {
    // add header for week numbers
    headers = [getNameForWeek({ locale, weekName }), ...headers]
    calendar = { weekNumbers }
  }
  calendar = {
    ...calendar,
    calendarGrid: weeks,
    headers,
  }
  return <Calendar>calendar
}
