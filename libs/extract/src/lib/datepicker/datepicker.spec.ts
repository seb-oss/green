import {
  createDatepicker,
  Datepicker,
  DatepickerData,
  DatepickerListener,
  DatepickerOptions,
  CalendarDay,
  DatepickerState,
} from '.'
import { DeepPartial } from '../../helpers'

describe('datepicker', () => {
  let locale: string
  let now: Date
  let options: DatepickerOptions
  let datepickerEl: HTMLElement
  let datepickerDialogEl: HTMLElement
  let dateInputEl: HTMLElement
  let datepickerTriggerEl: HTMLButtonElement
  let listener: DatepickerListener
  let state: DatepickerState
  beforeEach(() => {
    locale = 'sv-SE'
    now = new Date('2022-03-04 12:00:00')
    jest.useFakeTimers().setSystemTime(now)
    options = {
      locale,
    }
    datepickerEl = document.createElement('div')
    datepickerDialogEl = document.createElement('div')
    dateInputEl = document.createElement('input')
    datepickerTriggerEl = document.createElement('button')
    listener = jest.fn()
    state = { isActive: false }
  })
  afterEach(() => {
    jest.useRealTimers()
  })
  it('calls listener with date', () => {
    createDatepicker(
      listener,
      options,
      datepickerEl,
      datepickerDialogEl,
      dateInputEl,
      datepickerTriggerEl
    )
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      date: now,
    })

    expect(listener).toHaveBeenCalledWith(expected, state)
  })
  it('calls listener with year', () => {
    createDatepicker(
      listener,
      options,
      datepickerEl,
      datepickerDialogEl,
      dateInputEl,
      datepickerTriggerEl
    )
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      year: 2022,
    })

    expect(listener).toHaveBeenCalledWith(expected, state)
  })
  it('calls listener with year', () => {
    createDatepicker(
      listener,
      options,
      datepickerEl,
      datepickerDialogEl,
      dateInputEl,
      datepickerTriggerEl
    )
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      year: 2022,
    })

    expect(listener).toHaveBeenCalledWith(expected, state)
  })
  it('calls listener with month', () => {
    createDatepicker(
      listener,
      options,
      datepickerEl,
      datepickerDialogEl,
      dateInputEl,
      datepickerTriggerEl
    )
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      month: 2,
    })

    expect(listener).toHaveBeenCalledWith(expected, state)
  })
  it('calls listener with day', () => {
    createDatepicker(
      listener,
      options,
      datepickerEl,
      datepickerDialogEl,
      dateInputEl,
      datepickerTriggerEl
    )
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      day: 4,
    })

    expect(listener).toHaveBeenCalledWith(expected, state)
  })
  it('calls listener with weekday', () => {
    createDatepicker(
      listener,
      options,
      datepickerEl,
      datepickerDialogEl,
      dateInputEl,
      datepickerTriggerEl
    )
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      weekday: 'fredag',
    })

    expect(listener).toHaveBeenCalledWith(expected, state)
  })
  it('calls listener with calendar', () => {
    createDatepicker(
      listener,
      options,
      datepickerEl,
      datepickerDialogEl,
      dateInputEl,
      datepickerTriggerEl
    )
    const expected = expect.objectContaining<DeepPartial<DatepickerData>>({
      calendar: expect.any(Object),
    })

    expect(listener).toHaveBeenCalledWith(expected, state)
  })
  it('calls listener with selectedDate', () => {
    const selected = new Date('2022-03-08 12:00:00')
    options.selectedDate = selected
    createDatepicker(
      listener,
      options,
      datepickerEl,
      datepickerDialogEl,
      dateInputEl,
      datepickerTriggerEl
    )
    const expected = expect.objectContaining<Partial<DatepickerData>>({
      selectedDate: selected,
    })

    expect(listener).toHaveBeenCalledWith(expected, state)
  })
  describe('.add', () => {
    let datepicker: Datepicker
    let data: DatepickerData
    beforeEach(() => {
      datepicker = createDatepicker(
        (_data) => {
          data = _data
        },
        options,
        datepickerEl,
        datepickerDialogEl,
        dateInputEl,
        datepickerTriggerEl
      )
    })
    describe('days', () => {
      it('sets correct info for 1 day', () => {
        datepicker.add(1, 'days')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2022-03-05 12:00:00'),
          day: 5,
          month: 2,
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
          month: 3,
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
        const calendar = data.calendar.calendarGrid.flatMap((week) => week)

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
          month: 3,
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
          month: 2,
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
          month: 2,
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
      datepicker = createDatepicker(
        (_data) => {
          data = _data
        },
        options,
        datepickerEl,
        datepickerDialogEl,
        dateInputEl,
        datepickerTriggerEl
      )
    })
    describe('days', () => {
      it('sets correct info for 1 day', () => {
        datepicker.sub(1, 'days')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2022-03-03 12:00:00'),
          day: 3,
          month: 2,
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
          month: 1,
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

        expect(data.calendar.calendarGrid[0]).toContainEqual(today)
        expect(data.calendar.calendarGrid[0]).toContainEqual(current)
      })
    })
    describe('months', () => {
      it('sets correct info for 1 month', () => {
        datepicker.sub(1, 'months')

        const expected = expect.objectContaining<Partial<DatepickerData>>({
          date: new Date('2022-02-04 12:00:00'),
          day: 4,
          month: 1,
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
          month: 1,
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
          month: 2,
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
      datepicker = createDatepicker(
        (_data) => {
          data = _data
        },
        options,
        datepickerEl,
        datepickerDialogEl,
        dateInputEl,
        datepickerTriggerEl
      )
    })
    it('sets current date', () => {
      datepicker.set(new Date('2022-03-08 12:00:00'))

      const expected = expect.objectContaining<Partial<DatepickerData>>({
        date: new Date('2022-03-08 12:00:00'),
        day: 8,
        month: 2,
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
      datepicker = createDatepicker(
        (_data) => {
          data = _data
        },
        options,
        datepickerEl,
        datepickerDialogEl,
        dateInputEl,
        datepickerTriggerEl
      )
    })
    it.skip('sets selectedDate', () => {
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
      const calendar = data.calendar.calendarGrid.flatMap((week) => week)

      expect(data).toEqual(expected)
      expect(calendar).toContainEqual(selectedDay)
    })
  })
})
