import { Pipe, PipeTransform } from '@angular/core'

import { DisableDateConfig } from '../datepicker.models'
import {
  afterClosingHours,
  isAfter,
  isBefore,
  match,
} from '../datepicker.utils'

const TODAY = new Date()

@Pipe({
    name: 'isDisabled',
    standalone: false
})
export class IsDisabledPipe implements PipeTransform {
  // transform(value: Date, firstValid: Date | undefined, lastValid: Date | undefined, excludeDates: Date[] | undefined, excludeDays: WeekDay[] | undefined): boolean {
  transform(value: Date, config: DisableDateConfig = {}): boolean {
    const { fromDate, toDate, excludeDates, excludeDays, closingTime } = config

    // if closingHours was provided and the date matches today - check closingHours (including timezone)
    if (closingTime && match(value, TODAY) && afterClosingHours(closingTime))
      return true

    // if fromDate was provided and the date occurs before fromDate date
    if (fromDate && !match(value, fromDate) && isBefore(value, fromDate))
      return true

    // if toDate was provided and the date occurs after toDate date
    if (toDate && !match(value, toDate) && isAfter(value, toDate)) return true

    // if a list of disallowed days is provided and value matches
    if (
      excludeDays &&
      excludeDays.length &&
      excludeDays.indexOf(value.getDay()) !== -1
    )
      return true

    // if a list of disallowed dates is provided
    if (excludeDates && excludeDates.length) {
      return !!excludeDates.find((d: Date) => match(value, d))
    }

    // otherwise show date as not disabled
    return false
  }
}
