import {
  startOfMonth,
  endOfMonth,
  addDays,
  subDays,
  isSameDay,
  isSameMonth,
  format,
} from 'date-fns'

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

export const createCalendar = (locale: string, date: Date, selectedDate?: Date): CalendarGrid => {
  const today = new Date()
  
  const som = startOfMonth(date)
  const eom = endOfMonth(date)
  
  const soc = subDays(som, som.getDay() - 1)
  const eoc = addDays(eom, 7 - eom.getDay())

  const weeks: CalendarGrid = []

  let currentDay = soc
  let currentWeek: CalendarDay[] = []
  let daysInCalendar = 0
  while(currentDay < eoc) {
    if (++daysInCalendar > 35) throw new Error('Calendar failed')
    if (currentDay.getDay() === 1) {
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
