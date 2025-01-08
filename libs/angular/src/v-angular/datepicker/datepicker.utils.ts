import { WeekDay } from '@angular/common'

const weekdays: WeekDay[] = [
  WeekDay.Monday,
  WeekDay.Tuesday,
  WeekDay.Wednesday,
  WeekDay.Thursday,
  WeekDay.Friday,
  WeekDay.Saturday,
  WeekDay.Sunday,
]

export const sortWeekDays = (firstDayOfWeek: WeekDay): WeekDay[] => {
  const firstDayIndex = weekdays.indexOf(firstDayOfWeek)
  const weekStart = weekdays.slice(firstDayIndex)
  const weekEnd = weekdays.slice(0, firstDayIndex)
  return weekStart.concat(weekEnd)
}

/** Sets labels and sort weekday arrays based off of first day of week. */
export const getSortedWeekDays = (
  firstDayOfWeek: WeekDay,
  startDate?: Date,
): Date[] => {
  if (startDate === undefined) startDate = new Date()

  // sort weekdays according to firstDayOfWeek
  const sortedWeekdays: WeekDay[] = sortWeekDays(firstDayOfWeek)

  // get the date object for the first day of week
  const startDayIndex = sortedWeekdays.indexOf(startDate.getDay())
  const firstOfWeek = new Date(startDate)
  firstOfWeek.setDate(startDate.getDate() - startDayIndex)

  // map each day in array to a date object
  return sortedWeekdays.map((_: WeekDay, offset: number) => {
    // set appropriate date
    const weekdayDate = new Date(firstOfWeek)
    weekdayDate.setDate(weekdayDate.getDate() + offset)

    // and return value
    return weekdayDate
  })
}

/** Generate a matrix of dates used to visualize a calendar month. */
export const generateDateMatrix = (
  month: number,
  year: number,
  minWeeks = 5,
  firstDayOfWeek: WeekDay,
): Date[][] => {
  // generate a new matrix with 5 or 6 rows (depending on number of days in that month)
  const matrix: Date[][] = new Array<Date[]>(minWeeks)
  matrix.fill([])

  const monthStr = `${month + 1}`.padStart(2, '0')
  const date = new Date(`${year}-${monthStr}-01`)
  const firstDate = firstCalendarDate(date, firstDayOfWeek)

  // for each week in that month
  const dateMatrix = matrix.map((_: Date[], weekOffset: number) => {
    const offset = weekOffset * 7
    // update the date with the offset for that week
    const firstOfWeek = new Date(firstDate)
    firstOfWeek.setDate(firstDate.getDate() + offset)
    return getSortedWeekDays(firstDayOfWeek, firstOfWeek)
  })

  // check if another row needs to be added (if last dates of month are missing)
  const lastAdded = dateMatrix.slice(-1)[0].slice(-1)[0]
  const lastOfMonth = new Date(lastAdded)
  lastOfMonth.setMonth(month + 1)
  lastOfMonth.setDate(0)

  if (isBefore(lastAdded, lastOfMonth)) {
    // add another week row
    const firstOfWeek = new Date(lastAdded)
    firstOfWeek.setDate(lastAdded.getDate() + 1)
    dateMatrix.push(getSortedWeekDays(firstDayOfWeek, firstOfWeek))
  }
  // return final datematrix
  return dateMatrix
}

/** Returns the first date used in the calendars first button. */
export const firstCalendarDate = (
  date: Date,
  firstDayOfWeek: WeekDay,
): Date => {
  // sort weekdays according to firstDayOfWeek
  const sortedWeekdays: WeekDay[] = sortWeekDays(firstDayOfWeek)

  // set date to the first of month
  const firstOfMonth = new Date(date)
  firstOfMonth.setDate(1)

  // get the offset
  const offset = sortedWeekdays.indexOf(firstOfMonth.getDay())
  const firstOfWeek = new Date(firstOfMonth)
  // use offset to set date
  firstOfWeek.setDate(1 - offset)
  return firstOfWeek
}

export const getDayOffset = (
  from: WeekDay,
  to: WeekDay,
  firstDayOfWeek: WeekDay,
  direction?: 'forward' | 'back',
): number => {
  const sortedWeekdays: WeekDay[] = sortWeekDays(firstDayOfWeek)

  const fromIndex = sortedWeekdays.indexOf(from)
  const toIndex = sortedWeekdays.indexOf(to)

  const offset = toIndex - fromIndex

  if (direction === 'forward' && offset < 0) return offset + 6
  if (direction === 'back' && offset > 0) return offset - 6
  return offset
}

/** Returns an array of Dates for each of month. */
export const getMonthArray = (): Date[] => {
  const firstDayOfYear = new Date()
  firstDayOfYear.setMonth(0)
  firstDayOfYear.setDate(1)

  // create a new array of length 12,
  // and fill it with date objects of 1:st of january
  const monthArray: Date[] = new Array(12).fill(firstDayOfYear)

  // map through the array,
  // and create a new instance of the date,
  // changing the month based on index (0 - 11)
  return monthArray.map((d: Date, index: number) => {
    const date = new Date(d)
    date.setMonth(index)
    return date
  })
}

/** Returns an array of Dates for the current year and the next. */
export const getYearArray = (): Date[] => {
  const currentYear = new Date()
  currentYear.setMonth(0)
  currentYear.setDate(1)
  const nextYear = new Date(currentYear)
  nextYear.setFullYear(currentYear.getFullYear() + 1)
  return [currentYear, nextYear]
}

/** Returns true if the two dates have the same year, month and date values. */
export const match = (a: Date | undefined, b: Date | undefined): boolean => {
  if (!a || !b) return false
  if (a.getDate() !== b.getDate()) return false
  if (a.getMonth() !== b.getMonth()) return false
  if (a.getFullYear() !== b.getFullYear()) return false
  return true
}

export const afterClosingHours = (closingHours: Date | undefined): boolean => {
  if (!closingHours) return false
  return Date.now() >= closingHours.getTime()
}

/**
 * Checks if a date is before control date, regardless of time.
 *
 * @param date - comparison date
 * @param controlDate - date to compare against
 * @returns - true if the comparison date is before the control date
 */
export const isBefore = (date: Date, controlDate: Date): boolean => {
  // if year values are dissimilar
  if (date.getFullYear() !== controlDate.getFullYear()) {
    return date.getFullYear() < controlDate.getFullYear()
  }
  // if month values are dissimilar
  if (date.getMonth() !== controlDate.getMonth()) {
    return date.getMonth() < controlDate.getMonth()
  }
  // if year and month are equal, check the date
  return date.getDate() < controlDate.getDate()
}

/**
 * Checks if a date is after control date, regardless of time.
 *
 * @param date - comparison date
 * @param controlDate - date to compare against
 * @returns - true if the comparison date is before the control date
 */
export const isAfter = (date: Date, controlDate: Date): boolean => {
  // if year values are dissimilar
  if (date.getFullYear() !== controlDate.getFullYear()) {
    return date.getFullYear() > controlDate.getFullYear()
  }
  // if month values are dissimilar
  if (date.getMonth() !== controlDate.getMonth()) {
    return date.getMonth() > controlDate.getMonth()
  }
  // if year and month are equal, check the date
  return date.getDate() > controlDate.getDate()
}

/**
 * Checks if a value can be used to initiate a new Date object.
 *
 * @param value any value
 * @returns - true if value can be coersed to a Date.
 */
export const isValid = (value: any): boolean => {
  // if value is type of string and can be parsed to a Date
  const date =
    value && typeof value === 'string' && !isNaN(Date.parse(value))
      ? new Date(value)
      : null

  switch (true) {
    // if date or value is a valid date object - return valid
    case typeof value?.getMonth === 'function':
    case typeof date?.getMonth === 'function':
      return true
    // if date or value is not a valid date object - return invalid
    case value == null:
    case date?.toString() === 'Invalid Date':
      return false
    default:
      return false
  }
}
