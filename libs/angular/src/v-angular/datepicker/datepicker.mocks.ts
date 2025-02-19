import { WeekDay } from '@angular/common'

export const disallowedDates: Array<Date> = []

const today = new Date()
const currentYear = today.getFullYear()

const firstOfYear = new Date(currentYear, 1, 1)
const firstDayOfYear = firstOfYear.getDay() as WeekDay

const firstSaturdayOfYear = new Date(
  currentYear,
  1,
  1 + (WeekDay.Saturday - firstDayOfYear),
)
firstSaturdayOfYear.setHours(0, 0, 0, 0)

const firstSundayOfYear = new Date(firstSaturdayOfYear)
firstSundayOfYear.setDate(firstSaturdayOfYear.getDate() + 1)

for (let i = 1; i < 53; i++) {
  const dateOffset = 7 * i
  const saturday = new Date(firstSaturdayOfYear)
  saturday.setDate(firstSaturdayOfYear.getDate() + dateOffset)
  const sunday = new Date(firstSundayOfYear)
  sunday.setDate(firstSundayOfYear.getDate() + dateOffset)
  disallowedDates.push(saturday, sunday)
}

export function weekendsFor(month: number): Array<Date> {
  const weekendArray: Array<Date> = []
  const activeMonth = new Date()
  activeMonth.setHours(0, 0, 0, 0)
  activeMonth.setMonth(month)
  activeMonth.setDate(1)
  const activeDay: WeekDay = activeMonth.getDay()

  const saturday = new Date(activeMonth)
  saturday.setDate(activeMonth.getDate() + (WeekDay.Saturday - activeDay))
  const sunday = new Date(saturday)
  sunday.setDate(saturday.getDate() + 1)

  weekendArray.push(new Date(saturday), new Date(sunday))

  while (sunday.getMonth() === month) {
    saturday.setDate(saturday.getDate() + 7)
    sunday.setDate(sunday.getDate() + 7)
    weekendArray.push(new Date(saturday), new Date(sunday))
  }
  return weekendArray
}

const weekends: Array<Date | string> = [
  ...weekendsFor(today.getMonth() - 2),
  ...weekendsFor(today.getMonth() - 1),
  ...weekendsFor(today.getMonth()),
  ...weekendsFor(today.getMonth() + 1),
  ...weekendsFor(today.getMonth() + 2),
  ...weekendsFor(today.getMonth() + 3),
  ...weekendsFor(today.getMonth() + 4),
  ...weekendsFor(today.getMonth() + 5),
]

export const bankHolidays = weekends.map((e) => e.toLocaleString().slice(0, 10))
