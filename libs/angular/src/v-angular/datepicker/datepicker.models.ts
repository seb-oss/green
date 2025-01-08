import { formatDate, WeekDay } from '@angular/common'
import { Injectable } from '@angular/core'

export type CalendarType = 'normal' | 'extended'

export const enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export interface DisableDateConfig {
  fromDate?: Date | undefined
  toDate?: Date | undefined
  excludeDates?: Date[] | undefined
  excludeDays?: WeekDay[] | undefined
  closingTime?: Date | undefined
}

@Injectable()
export class CalendarMonth {
  year: number
  month: number
  id: string
  _date: Date

  constructor(date?: Date) {
    this._date = date ? new Date(date) : new Date()
    this._date.setDate(1)
    this._date.setHours(0, 0, 0, 0)
    this.year = this._date.getFullYear()
    this.month = this._date.getMonth()
    this.id = formatDate(this._date, 'yyyyMM', 'en')
  }

  /** Creates an instance based of input year and month. */
  static fromObject(obj: { year: number; month: number }): CalendarMonth {
    const objectDate = new Date(obj.year, obj.month, 1)
    return new CalendarMonth(objectDate)
  }

  /** Returns a Date representation for the instance. */
  get date(): Date {
    return new Date(this._date)
  }

  /** Returns the string id representing the instance in form of 'yyyyMM'. */
  valueOf() {
    return this.id
  }

  /** Returns a new instance for next month. */
  nextMonth(): CalendarMonth {
    const next = this.date
    next.setMonth(this.month + 1)
    return new CalendarMonth(next)
  }

  /** Returns a new instance for previous month. */
  previousMonth(): CalendarMonth {
    const previous = this.date
    previous.setMonth(this.month - 1)
    return new CalendarMonth(previous)
  }

  /** Returns a new instance for next year. */
  nextYear(): CalendarMonth {
    const nextYear = this.date
    nextYear.setFullYear(nextYear.getFullYear() + 1)
    return new CalendarMonth(nextYear)
  }

  /** Returns a new instance for previous year. */
  previousYear(): CalendarMonth {
    const previousYear = this.date
    previousYear.setFullYear(previousYear.getFullYear() - 1)
    return new CalendarMonth(previousYear)
  }
}
