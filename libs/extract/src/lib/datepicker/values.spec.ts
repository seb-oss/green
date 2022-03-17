import { weekdays, months, WeekFormatOptions, MonthFormatOptions } from './values'
describe('datepicker/values', () => {
  describe('weekdays', () => {
    it('returns long names for swedish', () => {
      const options: WeekFormatOptions = {
        locale: 'sv-SE',
        format: 'long',
      }
      expect(weekdays(options)).toEqual([
        'måndag',
        'tisdag',
        'onsdag',
        'torsdag',
        'fredag',
        'lördag',
        'söndag',
      ])
    })
    it('returns short names for swedish', () => {
      const options: WeekFormatOptions = {
        locale: 'sv-SE',
        format: 'short',
      }
      expect(weekdays(options)).toEqual([
        'mån',
        'tis',
        'ons',
        'tors',
        'fre',
        'lör',
        'sön',
      ])
    })
    it('returns narrow names for swedish', () => {
      const options: WeekFormatOptions = {
        locale: 'sv-SE',
        format: 'narrow',
      }
      expect(weekdays(options)).toEqual([
        'M',
        'T',
        'O',
        'T',
        'F',
        'L',
        'S',
      ])
    })
    it('returns long names for english', () => {
      const options: WeekFormatOptions = {
        locale: 'en-US',
        format: 'long',
      }
      expect(weekdays(options)).toEqual([
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ])
    })
    it('returns short names for english', () => {
      const options: WeekFormatOptions = {
        locale: 'en-US',
        format: 'short',
      }
      expect(weekdays(options)).toEqual([
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun',
      ])
    })
    it('returns narrow names for english', () => {
      const options: WeekFormatOptions = {
        locale: 'en-US',
        format: 'narrow',
      }
      expect(weekdays(options)).toEqual([
        'M',
        'T',
        'W',
        'T',
        'F',
        'S',
        'S',
      ])
    })
  })
  describe('months', () => {
    it('returns long names for swedish', () => {
      const options: MonthFormatOptions = {
        locale: 'sv-SE',
        format: 'long',
      }
      expect(months(options)).toEqual([
        'januari',
        'februari',
        'mars',
        'april',
        'maj',
        'juni',
        'juli',
        'augusti',
        'september',
        'oktober',
        'november',
        'december',
      ])
    })
  })
})