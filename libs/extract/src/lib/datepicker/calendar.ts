import {
  startOfMonth,
  endOfMonth,
  addDays,
  subDays,
  format,
} from 'date-fns'

export interface CalendarDay {
  day: number
  currentMonth: boolean
  currentDay: boolean
}
export type CalendarGrid = CalendarDay[][]

export const createCalendar = (locale: string, date: Date): CalendarGrid => {
  const today = format(date, 'yyyy-MM-dd')
  
  const som = startOfMonth(date)
  const eom = endOfMonth(date)
  
  const soc = subDays(som, som.getDay() - 1)
  const eoc = addDays(eom, 7 - eom.getDay())

  const weeks: CalendarGrid = []

  let currentDay = soc
  let currentWeek: CalendarDay[]
  while(currentDay < eoc) {
    if (currentDay.getDay() === 1) {
      currentWeek = []
      weeks.push(currentWeek)
    }
    currentWeek.push({
      day: currentDay.getDate(),
      currentDay: format(currentDay, 'yyyy-MM-dd') === today,
      currentMonth: date.getMonth() === currentDay.getMonth(),
    })
    currentDay = addDays(currentDay, 1)
  }

  return weeks
}
