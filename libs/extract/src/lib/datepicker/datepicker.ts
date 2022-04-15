import { add, format, sub } from 'date-fns'
import { Calendar, CalendarHeader, createCalendar } from '.'
import { createPopper, Instance } from '@popperjs/core'

type DateUnit = 'years' | 'months' | 'weeks' | 'days'
export interface Datepicker {
  add: (amount: number, unit: DateUnit) => void
  sub: (amount: number, unit: DateUnit) => void
  setMonth: (number: number) => void
  setYear: (number: number) => void
  set: (date: Date | string) => void
  select: (date: Date | string) => void
  _popper?: Instance
  state: DatepickerState
  open: () => void
  close: () => void
  toggle: () => void
}

export interface DatepickerData {
  date: Date
  formattedDate: string
  year: number
  month: number
  monthName: string
  day: number
  weekday: string
  calendar: Calendar
  selectedDate?: Date
  formattedSelectedDate?: string
}

export interface DatepickerState {
  isActive: boolean
}

export type DatepickerListener = (
  data?: DatepickerData,
  state?: DatepickerState
) => void
export interface DatepickerOptions {
  locale?: string
  currentDate?: Date | string
  selectedDate?: Date | string
  closeOnSelect?: boolean
  useCurrentTime?: boolean
  weekName?: { abbr: string; displayText: string }
  showWeeks?: boolean
}

const createState = (isActive = false): DatepickerState => {
  return {
    isActive,
  }
}

const createData = (
  locale: string,
  currentDate: Date | string,
  preSelectedDate?: Date | string,
  useCurrentTime?: boolean,
  showWeeks?: boolean,
  weekName?: { abbr: string; displayText: string }
): DatepickerData => {
  const date =
    typeof currentDate === 'string'
      ? new Date(currentDate + ' 12:00:00')
      : currentDate
  const formattedDate =
    typeof currentDate === 'string' ? currentDate : format(date, 'yyyy-MM-dd')

  const selectedDate = preSelectedDate
    ? typeof preSelectedDate === 'string'
      ? new Date(preSelectedDate + ' 12:00:00')
      : preSelectedDate
    : undefined
  const formattedSelectedDate = preSelectedDate
    ? typeof preSelectedDate === 'string'
      ? preSelectedDate
      : format(preSelectedDate, 'yyyy-MM-dd')
    : undefined

  return {
    selectedDate,
    formattedSelectedDate,
    date,
    formattedDate,
    year: date.getFullYear(),
    month: date.getMonth(),
    monthName: Intl.DateTimeFormat(locale, { month: 'long' }).format(date),
    day: date.getDate(),
    weekday: Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date),
    calendar: createCalendar(
      locale,
      date,
      selectedDate,
      <boolean>showWeeks,
      <boolean>useCurrentTime,
      <{ abbr: string; displayText: string }>weekName
    ),
  }
}

export const createDatepicker = (
  listener: DatepickerListener,
  {
    selectedDate,
    locale = navigator.language,
    currentDate = new Date(),
    closeOnSelect = true,
    useCurrentTime = true,
    showWeeks = false,
    weekName = { abbr: 'Week', displayText: 'wk' },
  }: DatepickerOptions,
  datepickerElRef: HTMLElement,
  datepickerDialogElRef: HTMLElement,
  // TODO: update value for date input
  dateInputElRef: HTMLElement
): Datepicker => {
  let data = createData(
    locale,
    currentDate,
    selectedDate,
    useCurrentTime,
    showWeeks,
    weekName
  )
  const dp: Datepicker = {
    add: (amount, unit) => {
      data = createData(
        locale,
        add(data.date, { [unit]: amount }),
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName
      )
      listener(data)
    },
    sub: (amount, unit) => {
      data = createData(
        locale,
        sub(data.date, { [unit]: amount }),
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName
      )
      listener(data)
    },
    set: (date) => {
      data = createData(
        locale,
        date,
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName
      )
      listener(data)
    },
    setMonth: (number) => {
      const date = new Date(data.date.setMonth(number))
      data = createData(
        locale,
        date,
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName
      )
      listener(data)
    },
    setYear: (number) => {
      const date = new Date(data.date.setFullYear(number))
      data = createData(
        locale,
        date,
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName
      )
      listener(data)
    },
    select: (date) => {
      data = createData(
        locale,
        data.date,
        date,
        useCurrentTime,
        showWeeks,
        weekName
      )
      listener(data)
      if (closeOnSelect) {
        dp.close()
      }
    },
    open: () => {
      data = createData(
        locale,
        data.selectedDate || new Date(),
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName
      )
      const state = createState(true)
      listener(data, state)
    },
    close: () => {
      const state = createState(false)
      listener(undefined, state)
    },
    toggle: () => {
      if (dp.state.isActive) {
        dp.close()
      } else {
        dp.open()
      }
    },
    state: createState(),
    _popper: createPopper(datepickerElRef, datepickerDialogElRef, {
      placement: 'bottom-start',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 4],
          },
        },
      ],
    }),
  }

  listener(data, dp.state)

  return dp
}
