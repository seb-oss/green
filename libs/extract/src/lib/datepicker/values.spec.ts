import { weekdays, months, MonthFormatOptions } from './values'
describe('datepicker/values', () => {
  describe('weekdays', () => {
    it('returns long names for swedish', () => {
      expect(weekdays('sv-SE')).toEqual([
        {
          long: 'Måndag',
          short: 'Mån',
        },
        {
          long: 'Tisdag',
          short: 'Tis',
        },
        {
          long: 'Onsdag',
          short: 'Ons',
        },
        {
          long: 'Torsdag',
          short: 'Tors',
        },
        {
          long: 'Fredag',
          short: 'Fre',
        },
        {
          long: 'Lördag',
          short: 'Lör',
        },
        {
          long: 'Söndag',
          short: 'Sön',
        },
      ])
    })
    it('returns long names for english', () => {
      expect(weekdays('en-US')).toEqual([
        {
          long: 'Monday',
          short: 'Mon',
        },
        {
          long: 'Tuesday',
          short: 'Tue',
        },
        {
          long: 'Wednesday',
          short: 'Wed',
        },
        {
          long: 'Thursday',
          short: 'Thu',
        },
        {
          long: 'Friday',
          short: 'Fri',
        },
        {
          long: 'Saturday',
          short: 'Sat',
        },
        {
          long: 'Sunday',
          short: 'Sun',
        },
      ])
    })
  })
  describe('months', () => {
    it('returns long names for swedish', () => {
      const options: Partial<MonthFormatOptions> = {
        locale: 'en-US',
      }
      expect(months(options)).toEqual([
        { key: 'January', value: 0 },
        { key: 'February', value: 1 },
        { key: 'March', value: 2 },
        { key: 'April', value: 3 },
        { key: 'May', value: 4 },
        { key: 'June', value: 5 },
        { key: 'July', value: 6 },
        { key: 'August', value: 7 },
        { key: 'September', value: 8 },
        { key: 'October', value: 9 },
        { key: 'November', value: 10 },
        { key: 'December', value: 11 },
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
        { key: 'Januari', value: 0 },
        { key: 'Februari', value: 1 },
        { key: 'Mars', value: 2 },
        { key: 'April', value: 3 },
        { key: 'Maj', value: 4 },
        { key: 'Juni', value: 5 },
        { key: 'Juli', value: 6 },
        { key: 'Augusti', value: 7 },
        { key: 'September', value: 8 },
        { key: 'Oktober', value: 9 },
        { key: 'November', value: 10 },
        { key: 'December', value: 11 },
      ])
    })
  })
})
