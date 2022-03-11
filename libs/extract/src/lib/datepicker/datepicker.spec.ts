import {
  createDatepicker,
  CalendarGrid,
  Datepicker,
  DatepickerData,
  DatepickerListener,
  DatepickerOptions,
  CalendarDay,
} from '.'
import { DeepPartial } from '../../helpers'

describe('datepicker', () => {
  let locale: string
  let now: Date
  let options: DatepickerOptions
  let listener: DatepickerListener
  beforeEach(() => {
    locale = 'sv-SE'
    now = new Date('2022-03-04 12:00:00')
    jest.useFakeTimers().setSystemTime(now)
    options = {
      locale,
    }
    listener = jest.fn()
  })
  afterEach(() => {
    jest.useRealTimers()
  })
  it('calls listener with date', () => {
    createDatepicker(listener, options)
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      date: now,
    })

    expect(listener).toHaveBeenCalledWith(expected)
  })
  it('calls listener with year', () => {
    createDatepicker(listener, options)
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      year: 2022,
    })

    expect(listener).toHaveBeenCalledWith(expected)
  })
  it('calls listener with year', () => {
    createDatepicker(listener, options)
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      year: 2022,
    })

    expect(listener).toHaveBeenCalledWith(expected)
  })
  it('calls listener with month', () => {
    createDatepicker(listener, options)
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      month: 'mars',
    })

    expect(listener).toHaveBeenCalledWith(expected)
  })
  it('calls listener with day', () => {
    createDatepicker(listener, options)
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      day: 4,
    })

    expect(listener).toHaveBeenCalledWith(expected)
  })
  it('calls listener with weekday', () => {
    createDatepicker(listener, options)
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      weekday: 'fredag',
    })

    expect(listener).toHaveBeenCalledWith(expected)
  })
  it('calls listener with calendar', () => {
    createDatepicker(listener, options)
    const expected = expect.objectContaining<DeepPartial<DatepickerData>>({
      calendar: expect.any(Array),
    })

    expect(listener).toHaveBeenCalledWith(expected)
  })
  it('calls listener with selectedDate', () => {
    const selected = new Date('2022-03-08 12:00:00')
    options.selectedDate = selected
    createDatepicker(listener, options)
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      selectedDate: selected,
    })

    expect(listener).toHaveBeenCalledWith(expected)
  })
  describe('.add', () => {
    let datepicker: Datepicker
    let data: DatepickerData
    beforeEach(() => {
      datepicker = createDatepicker((_data) => {
        data = _data
      }, options)
    })
    describe('days', () => {

      it('sets correct info for 1 day', () => {
        datepicker.add(1, 'days')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2022-03-05 12:00:00'),
          day: 5,
          month: 'mars',
          weekday: 'lördag',
          year: 2022,
        })

        expect(data).toEqual(expected)
      })

      it('sets correct info for month rollover', () => {
        datepicker.add(30, 'days')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2022-04-03 12:00:00'),
          day: 3,
          month: 'april',
          weekday: 'söndag',
          year: 2022,
        })

        expect(data).toEqual(expected)
      })
      it('sets correct current and today for 1 day', () => {
        datepicker.add(1, 'days')

        const today = expect.objectContaining<Partial<CalendarDay>>({
          day: 4,
          today: true,
          currentDay: false,
        })
        const current = expect.objectContaining<Partial<CalendarDay>>({
          day: 5,
          today: false,
          currentDay: true,
        })
        const calendar = data.calendar.flatMap((week) => week)

        expect(calendar).toContainEqual(today)
        expect(calendar).toContainEqual(current)
      })
    })
    describe('months', () => {

      it('sets correct info for 1 month', () => {
        datepicker.add(1, 'months')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2022-04-04 12:00:00'),
          day: 4,
          month: 'april',
          weekday: 'måndag',
          year: 2022,
        })

        expect(data).toEqual(expected)
      })
    })
    describe('weeks', () => {

      it('sets correct info for 1 week', () => {
        datepicker.add(1, 'weeks')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2022-03-11 12:00:00'),
          day: 11,
          month: 'mars',
          weekday: 'fredag',
          year: 2022,
        })

        expect(data).toEqual(expected)
      })
    })
    describe('years', () => {

      it('sets correct info for 1 month', () => {
        datepicker.add(1, 'years')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2023-03-04 12:00:00'),
          day: 4,
          month: 'mars',
          weekday: 'lördag',
          year: 2023,
        })

        expect(data).toEqual(expected)
      })
    })
  })
  describe('.sub', () => {
    let datepicker: Datepicker
    let data: DatepickerData
    beforeEach(() => {
      datepicker = createDatepicker((_data) => {
        data = _data
      }, options)
    })
    describe('days', () => {

      it('sets correct info for 1 day', () => {
        datepicker.sub(1, 'days')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2022-03-03 12:00:00'),
          day: 3,
          month: 'mars',
          weekday: 'torsdag',
          year: 2022,
        })

        expect(data).toEqual(expected)
      })

      it('sets correct info for month rollover', () => {
        datepicker.sub(30, 'days')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2022-02-02 12:00:00'),
          day: 2,
          month: 'februari',
          weekday: 'onsdag',
          year: 2022,
        })

        expect(data).toEqual(expected)
      })
      it('sets correct current and today for 1 day', () => {
        datepicker.sub(1, 'days')

        const today = expect.objectContaining<Partial<CalendarDay>>({
          day: 4,
          today: true,
          currentDay: false,
        })
        const current = expect.objectContaining<Partial<CalendarDay>>({
          day: 3,
          today: false,
          currentDay: true,
        })

        expect(data.calendar[0]).toContainEqual(today)
        expect(data.calendar[0]).toContainEqual(current)
      })
    })
    describe('months', () => {

      it('sets correct info for 1 month', () => {
        datepicker.sub(1, 'months')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2022-02-04 12:00:00'),
          day: 4,
          month: 'februari',
          weekday: 'fredag',
          year: 2022,
        })

        expect(data).toEqual(expected)
      })
    })
    describe('weeks', () => {

      it('sets correct info for 1 week', () => {
        datepicker.sub(1, 'weeks')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2022-02-25 12:00:00'),
          day: 25,
          month: 'februari',
          weekday: 'fredag',
          year: 2022,
        })

        expect(data).toEqual(expected)
      })
    })
    describe('years', () => {

      it('sets correct info for 1 month', () => {
        datepicker.sub(1, 'years')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2021-03-04 12:00:00'),
          day: 4,
          month: 'mars',
          weekday: 'torsdag',
          year: 2021,
        })

        expect(data).toEqual(expected)
      })
    })
  })
  describe('.set', () => {
    let datepicker: Datepicker
    let data: DatepickerData
    beforeEach(() => {
      datepicker = createDatepicker((_data) => {
        data = _data
      }, options)
    })
    it('sets current date', () => {
      datepicker.set(new Date('2022-03-08 12:00:00'))

      const expected = expect.objectContaining<Partial<DatepickerData>>({
        date: new Date('2022-03-08 12:00:00'),
        day: 8,
        month: 'mars',
        weekday: 'tisdag',
        year: 2022,
      })

      expect(data).toEqual(expected)
    })
  })
  describe('.select', () => {
    let datepicker: Datepicker
    let data: DatepickerData
    beforeEach(() => {
      datepicker = createDatepicker((_data) => {
        data = _data
      }, options)
    })
    it('sets selectedDate', () => {
      const selected = new Date('2022-03-08 12:00:00')
      datepicker.select(selected)

      const expected = expect.objectContaining<Partial<DatepickerData>>({
        selectedDate: selected,
      })
      const selectedDay = expect.objectContaining<Partial<CalendarDay>>({
        day: 8,
        today: false,
        currentDay: false,
        selected: true,
      })
      const calendar = data.calendar.flatMap((week) => week)

      expect(data).toEqual(expected)
      expect(calendar).toContainEqual(selectedDay)
    })
  })
})
