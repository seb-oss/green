import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'dateThook',
    standalone: false
})
export class DateThookPipe implements PipeTransform {
  get today(): Date {
    const tmp = new Date()
    const today = new Date(tmp.setHours(0, 0, 0, 0))
    return today
  }

  transform(date: Date, isDisabled: boolean): string {
    if (!!date && !isDisabled) {
      // Reset time for target date
      const dateTmp = new Date(date.setHours(0, 0, 0, 0))

      // To calculate the time difference of two dates
      const differenceInTime = dateTmp.getTime() - this.today.getTime()

      // To calculate the no. of days between two dates
      const differenceInDays = differenceInTime / (1000 * 3600 * 24)
      const absoluteDifferenceInDays = Math.abs(differenceInDays)

      const differentiator =
        differenceInDays < 0 ? '-' : differenceInDays === 0 ? '' : '+'

      return `today${differentiator}${absoluteDifferenceInDays === 0 ? '' : absoluteDifferenceInDays}`
    }

    return 'disabled-date'
  }
}
