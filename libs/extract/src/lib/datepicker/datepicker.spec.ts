import {
  createDatepicker,
  CalendarGrid,
  Datepicker,
  DatepickerData,
  DatepickerListener,
  DatepickerOptions,
  CalendarDay,
} from '.'

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
    const calendar: CalendarGrid = [
      [
        {
          day: 28,
          currentMonth: false,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 1,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 2,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 3,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 4,
          currentMonth: true,
          currentDay: true,
          today: true,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 5,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 6,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
      ],
      [
        {
          day: 7,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 8,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 9,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 10,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 11,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 12,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 13,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
      ],
      [
        {
          day: 14,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 15,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 16,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 17,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 18,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 19,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 20,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
      ],
      [
        {
          day: 21,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 22,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 23,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 24,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 25,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 26,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 27,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
      ],
      [
        {
          day: 28,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 29,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 30,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 31,
          currentMonth: true,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 1,
          currentMonth: false,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 2,
          currentMonth: false,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
        {
          day: 3,
          currentMonth: false,
          currentDay: false,
          today: false,
          selected: false,
          rangeSelected: false,
        },
      ],
    ]
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      calendar,
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

    it('sets correct info for date rollover', () => {
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

      expect(data.calendar[0]).toContainEqual(today)
      expect(data.calendar[0]).toContainEqual(current)
    })
  })
})
