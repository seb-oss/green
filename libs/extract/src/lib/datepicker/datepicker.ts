import { add, sub } from 'date-fns'
import { createCalendar } from '.'
import { CalendarGrid } from './calendar'

type DateUnit = 'years' | 'months' | 'weeks' | 'days'
export interface Datepicker {
  add: (amount: number, unit: DateUnit) => void
  sub: (amount: number, unit: DateUnit) => void
  set: (date: Date) => void
}

export interface DatepickerData {
  date: Date
  year: number
  month: string
  day: number
  weekday: string
  calendar: CalendarGrid
}

export type DatepickerListener = (data: DatepickerData) => void
export interface DatepickerOptions {
  locale?: string
  currentDate?: Date
}

const createData = (locale: string, date: Date): DatepickerData => {
  return {
    date: date,
    year: date.getFullYear(),
    month: Intl.DateTimeFormat(locale, { month: 'long' }).format(date),
    day: date.getDate(),
    weekday: Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date),
    calendar: createCalendar(locale, date),
  }
}

export const createDatepicker = (
  listener: DatepickerListener,
  {
    locale = navigator.language,
    currentDate = new Date(),
  }: DatepickerOptions,
): Datepicker => {
  let data = createData(locale, currentDate)
  const dp: Datepicker = {
    add: (amount, unit) => {
      data = createData(locale, add(data.date, { [unit]: amount }))
      listener(data)
    },
    sub: (amount, unit) => {
      data = createData(locale, sub(data.date, { [unit]: amount }))
      listener(data)
    },
    set: (date) => {
      data = createData(locale, date)
      listener(data)
    },
  }

  listener(data)

  return dp
}
