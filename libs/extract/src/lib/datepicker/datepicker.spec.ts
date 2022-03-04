import {
  createDatepicker,
  CalendarGrid,
  Datepicker,
  DatepickerData,
  DatepickerListener,
  DatepickerOptions,
} from '.'

describe('datepicker', () => {
  let locale: string
  let now: Date
  let options: DatepickerOptions
  let listener: DatepickerListener
  beforeEach(() => {
    locale = 'sv-SE'
    now = new Date('2022-03-04 12:00:00')
    options = {
      locale,
      currentDate: now,
    }
    listener = jest.fn()
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
        { day: 28, currentMonth: false, currentDay: false },
        { day: 1, currentMonth: true, currentDay: false },
        { day: 2, currentMonth: true, currentDay: false },
        { day: 3, currentMonth: true, currentDay: false },
        { day: 4, currentMonth: true, currentDay: true },
        { day: 5, currentMonth: true, currentDay: false },
        { day: 6, currentMonth: true, currentDay: false },
      ],
      [
        { day: 7, currentMonth: true, currentDay: false },
        { day: 8, currentMonth: true, currentDay: false },
        { day: 9, currentMonth: true, currentDay: false },
        { day: 10, currentMonth: true, currentDay: false },
        { day: 11, currentMonth: true, currentDay: false },
        { day: 12, currentMonth: true, currentDay: false },
        { day: 13, currentMonth: true, currentDay: false },
      ],
      [
        { day: 14, currentMonth: true, currentDay: false },
        { day: 15, currentMonth: true, currentDay: false },
        { day: 16, currentMonth: true, currentDay: false },
        { day: 17, currentMonth: true, currentDay: false },
        { day: 18, currentMonth: true, currentDay: false },
        { day: 19, currentMonth: true, currentDay: false },
        { day: 20, currentMonth: true, currentDay: false },
      ],
      [
        { day: 21, currentMonth: true, currentDay: false },
        { day: 22, currentMonth: true, currentDay: false },
        { day: 23, currentMonth: true, currentDay: false },
        { day: 24, currentMonth: true, currentDay: false },
        { day: 25, currentMonth: true, currentDay: false },
        { day: 26, currentMonth: true, currentDay: false },
        { day: 27, currentMonth: true, currentDay: false },
      ],
      [
        { day: 28, currentMonth: true, currentDay: false },
        { day: 29, currentMonth: true, currentDay: false },
        { day: 30, currentMonth: true, currentDay: false },
        { day: 31, currentMonth: true, currentDay: false },
        { day: 1, currentMonth: false, currentDay: false },
        { day: 2, currentMonth: false, currentDay: false },
        { day: 3, currentMonth: false, currentDay: false },
      ],
    ]
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      calendar,
    })

    expect(listener).toHaveBeenCalledWith(expected)
  })
  describe('.add', () => {
    let datepicker: Datepicker
    beforeEach(() => {
      datepicker = createDatepicker(listener, options)
    })

    it('calls listener with correct info for 1 day', () => {
      datepicker.add(1, 'days')

      const expected = expect.objectContaining<Partial<DatepickerData>>({
        date: new Date('2022-03-05 12:00:00'),
        day: 5,
        month: 'mars',
        weekday: 'lördag',
        year: 2022,
      })

      expect(listener).toHaveBeenCalledWith(expected)
    })

    it('calls listener with correct info for date rollover', () => {
      datepicker.add(30, 'days')

      const expected = expect.objectContaining<Partial<DatepickerData>>({
        date: new Date('2022-04-03 12:00:00'),
        day: 3,
        month: 'april',
        weekday: 'söndag',
        year: 2022,
      })

      expect(listener).toHaveBeenCalledWith(expected)
    })
    it('calls listener with correct calendar for 1 day', () => {
      datepicker.add(1, 'days')
      const calendar: CalendarGrid = [
        [
          { day: 28, currentMonth: false, currentDay: false },
          { day: 1, currentMonth: true, currentDay: false },
          { day: 2, currentMonth: true, currentDay: false },
          { day: 3, currentMonth: true, currentDay: false },
          { day: 4, currentMonth: true, currentDay: false },
          { day: 5, currentMonth: true, currentDay: true },
          { day: 6, currentMonth: true, currentDay: false },
        ],
        [
          { day: 7, currentMonth: true, currentDay: false },
          { day: 8, currentMonth: true, currentDay: false },
          { day: 9, currentMonth: true, currentDay: false },
          { day: 10, currentMonth: true, currentDay: false },
          { day: 11, currentMonth: true, currentDay: false },
          { day: 12, currentMonth: true, currentDay: false },
          { day: 13, currentMonth: true, currentDay: false },
        ],
        [
          { day: 14, currentMonth: true, currentDay: false },
          { day: 15, currentMonth: true, currentDay: false },
          { day: 16, currentMonth: true, currentDay: false },
          { day: 17, currentMonth: true, currentDay: false },
          { day: 18, currentMonth: true, currentDay: false },
          { day: 19, currentMonth: true, currentDay: false },
          { day: 20, currentMonth: true, currentDay: false },
        ],
        [
          { day: 21, currentMonth: true, currentDay: false },
          { day: 22, currentMonth: true, currentDay: false },
          { day: 23, currentMonth: true, currentDay: false },
          { day: 24, currentMonth: true, currentDay: false },
          { day: 25, currentMonth: true, currentDay: false },
          { day: 26, currentMonth: true, currentDay: false },
          { day: 27, currentMonth: true, currentDay: false },
        ],
        [
          { day: 28, currentMonth: true, currentDay: false },
          { day: 29, currentMonth: true, currentDay: false },
          { day: 30, currentMonth: true, currentDay: false },
          { day: 31, currentMonth: true, currentDay: false },
          { day: 1, currentMonth: false, currentDay: false },
          { day: 2, currentMonth: false, currentDay: false },
          { day: 3, currentMonth: false, currentDay: false },
        ],
      ]
      const expected = expect.objectContaining<Partial<DatepickerData>>({
        calendar,
      })

      expect(listener).toHaveBeenCalledWith(expected)
    })
  })
})
