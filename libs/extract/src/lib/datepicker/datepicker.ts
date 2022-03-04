import { createCalendar } from '.'
import { CalendarGrid } from './calendar'

type DateUnit = 'year' | 'month' | 'day'
interface Datepicker {
  add: (amount: number, unit: DateUnit) => void
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
  // eslint-disable-next-line prefer-const
  let data = createData(locale, currentDate)
  const dp: Datepicker = {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    add: (amount, unit) => {}
  }

  listener(data)

  return dp
}
