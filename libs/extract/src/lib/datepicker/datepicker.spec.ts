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
import {
  addYears,
  endOfDay,
  endOfYear,
  startOfDay,
  startOfYear,
  subYears,
} from 'date-fns'

import { fireEvent } from '@testing-library/dom'

describe('datepicker', () => {
  let locale: string
  let now: Date
  let options: DatepickerOptions
  let datepickerEl: HTMLElement
  let datepickerDialogEl: HTMLElement
  let dateInputEl: HTMLInputElement
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
    const expectedState = {
      isActive: false,
      minDate: startOfYear(subYears(now, 5)),
      maxDate: endOfYear(addYears(now, 5)),
    }

    expect(listener).toHaveBeenCalledWith(expected, expectedState)
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
    const expectedState = {
      isActive: false,
      minDate: startOfYear(subYears(now, 5)),
      maxDate: endOfYear(addYears(now, 5)),
    }

    expect(listener).toHaveBeenCalledWith(expected, expectedState)
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
    const expectedState = {
      isActive: false,
      minDate: startOfYear(subYears(now, 5)),
      maxDate: endOfYear(addYears(now, 5)),
    }

    expect(listener).toHaveBeenCalledWith(expected, expectedState)
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
    const expectedState = {
      isActive: false,
      minDate: startOfYear(subYears(now, 5)),
      maxDate: endOfYear(addYears(now, 5)),
    }

    expect(listener).toHaveBeenCalledWith(expected, expectedState)
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
    const expectedState = {
      isActive: false,
      minDate: startOfYear(subYears(now, 5)),
      maxDate: endOfYear(addYears(now, 5)),
    }

    expect(listener).toHaveBeenCalledWith(expected, expectedState)
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
    const expectedState = {
      isActive: false,
      minDate: startOfYear(subYears(now, 5)),
      maxDate: endOfYear(addYears(now, 5)),
    }

    expect(listener).toHaveBeenCalledWith(expected, expectedState)
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
    const expectedState = {
      isActive: false,
      minDate: startOfYear(subYears(now, 5)),
      maxDate: endOfYear(addYears(now, 5)),
    }

    expect(listener).toHaveBeenCalledWith(expected, expectedState)
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
    const expectedState = {
      isActive: false,
      minDate: startOfYear(subYears(now, 5)),
      maxDate: endOfYear(addYears(now, 5)),
    }

    expect(listener).toHaveBeenCalledWith(expected, expectedState)
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
  describe('min date', () => {
    let datepicker: Datepicker
    let data: DatepickerData
    let state: DatepickerState
    now = new Date('2022-03-04 12:00:00')
    const minDate = now
    const options = {
      minDate,
    }
    beforeEach(() => {
      datepicker = createDatepicker(
        (_data, _state) => {
          data = _data
          state = _state
        },
        options,
        datepickerEl,
        datepickerDialogEl,
        dateInputEl,
        datepickerTriggerEl
      )
    })
    it('should use value from options', () => {
      const expected = {
        isActive: false,
        minDate: startOfDay(minDate),
        maxDate: state.maxDate,
      }
      expect(state).toStrictEqual(expected)
    })
    it('should disable dates before minDate and dates outside current month', () => {
      const calendar = data.calendar.calendarGrid.flatMap((week) => week)
      calendar.forEach((day) => {
        expect(day.disabled).toBe(day.date < minDate || !day.currentMonth)
      })
    })
  })
  describe('max date', () => {
    let datepicker: Datepicker
    let data: DatepickerData
    let state: DatepickerState
    now = new Date('2022-03-04 12:00:00')
    const maxDate = now
    const options = {
      maxDate,
    }
    beforeEach(() => {
      datepicker = createDatepicker(
        (_data, _state) => {
          data = _data
          state = _state
        },
        options,
        datepickerEl,
        datepickerDialogEl,
        dateInputEl,
        datepickerTriggerEl
      )
    })
    it('should use value from options', () => {
      const expected = {
        isActive: false,
        minDate: state.minDate,
        maxDate: endOfDay(maxDate),
      }
      expect(state).toStrictEqual(expected)
    })
    it('should disable dates after maxDate and dates outside current month', () => {
      const calendar = data.calendar.calendarGrid.flatMap((week) => week)
      calendar.forEach((day) => {
        expect(day.disabled).toBe(day.date > maxDate || !day.currentMonth)
      })
    })
  })
})
