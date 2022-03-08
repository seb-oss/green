import {
  startOfMonth,
  endOfMonth,
  addDays,
  subDays,
  isSameDay,
  isSameMonth,
} from 'date-fns'

export interface CalendarDay {
  day: number
  currentMonth: boolean
  currentDay: boolean
  today: boolean
  selected: boolean
  rangeSelected: boolean
}
export type CalendarGrid = CalendarDay[][]

export const createCalendar = (locale: string, date: Date): CalendarGrid => {
  const today = new Date()
  
  const som = startOfMonth(date)
  const eom = endOfMonth(date)
  
  const soc = subDays(som, som.getDay() - 1)
  const eoc = addDays(eom, 7 - eom.getDay())

  const weeks: CalendarGrid = []

  let currentDay = soc
  let currentWeek: CalendarDay[]
  let daysInCalendar = 0
  while(currentDay < eoc) {
    if (++daysInCalendar > 35) throw new Error('Calendar failed')
    if (currentDay.getDay() === 1) {
      currentWeek = []
      weeks.push(currentWeek)
    }
    currentWeek.push({
      day: currentDay.getDate(),
      currentDay: isSameDay(currentDay, date),
      currentMonth: isSameMonth(currentDay, date),
      today: isSameDay(currentDay, today),
      selected: false,
      rangeSelected: false,
    })
    currentDay = addDays(currentDay, 1)
  }

  return weeks
}
