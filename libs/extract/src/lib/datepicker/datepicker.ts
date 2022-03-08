import { add, sub } from 'date-fns'
import { createCalendar } from '.'
import { CalendarGrid } from './calendar'

type DateUnit = 'years' | 'months' | 'weeks' | 'days'
export interface Datepicker {
  add: (amount: number, unit: DateUnit) => void
  sub: (amount: number, unit: DateUnit) => void
  set: (date: Date) => void
  select: (date: Date) => void
}

export interface DatepickerData {
  date: Date
  year: number
  month: string
  day: number
  weekday: string
  calendar: CalendarGrid
  selectedDate?: Date
}

export type DatepickerListener = (data: DatepickerData) => void
export interface DatepickerOptions {
  locale?: string
  currentDate?: Date
  selectedDate?: Date
}

const createData = (locale: string, currentDate: Date, selectedDate?: Date): DatepickerData => {
  return {
    selectedDate,
    date: currentDate,
    year: currentDate.getFullYear(),
    month: Intl.DateTimeFormat(locale, { month: 'long' }).format(currentDate),
    day: currentDate.getDate(),
    weekday: Intl.DateTimeFormat(locale, { weekday: 'long' }).format(currentDate),
    calendar: createCalendar(locale, currentDate, selectedDate),
  }
}

export const createDatepicker = (
  listener: DatepickerListener,
  {
    selectedDate,
    locale = navigator.language,
    currentDate = new Date(),
  }: DatepickerOptions,
): Datepicker => {
  let data = createData(locale, currentDate, selectedDate)
  const dp: Datepicker = {
    add: (amount, unit) => {
      data = createData(locale, add(data.date, { [unit]: amount }), data.selectedDate)
      listener(data)
    },
    sub: (amount, unit) => {
      data = createData(locale, sub(data.date, { [unit]: amount }), data.selectedDate)
      listener(data)
    },
    set: (date) => {
      data = createData(locale, date, data.selectedDate)
      listener(data)
    },
    select: (date: Date) => {
      data = createData(locale, data.date, date)
      listener(data)
    }
  }

  listener(data)

  return dp
}
