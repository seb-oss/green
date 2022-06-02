import {
  add,
  addYears,
  endOfDay,
  endOfMonth,
  endOfYear,
  format,
  startOfDay,
  startOfMonth,
  startOfYear,
  sub,
} from 'date-fns'
import { Calendar, createCalendar } from '.'
import { Instance } from '@popperjs/core'
import { iif, Observable, ReplaySubject, Subject } from 'rxjs'
import { switchMap, takeUntil } from 'rxjs/operators'
import { onActiveHandler, onInactiveHandler } from './event-handlers'
import { setFocus } from './helper-functions'
import Inputmask from 'inputmask'

type DateUnit = 'years' | 'months' | 'weeks' | 'days'
export interface Datepicker {
  add: (amount: number, unit: DateUnit, select?: boolean) => void
  sub: (amount: number, unit: DateUnit, select?: boolean) => void
  setMonth: (number: number) => void
  setYear: (number: number) => void
  set: (date: Date | string) => void
  highlight: (date: Date | string) => void
  select: (date: Date | string) => void
  _popper?: Instance
  state: DatepickerState
  open: () => void
  close: (selectHighlighted?: boolean) => void
  toggle: () => void
  destroy: () => void
  active$: Observable<boolean>
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
  formattedSelectedDate: string
  highlightedDate?: Date
}

export interface DatepickerState {
  isActive: boolean
  minDate?: Date
  maxDate?: Date
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
  minDate?: Date | number
  maxDate?: Date | number
}

const createState = (
  isActive = false,
  minDate?: Date,
  maxDate?: Date
): DatepickerState => {
  return {
    isActive,
    minDate,
    maxDate,
  }
}

const createData = (
  locale: string,
  currentDate: Date | string,
  preSelectedDate?: Date | string,
  useCurrentTime?: boolean,
  showWeeks?: boolean,
  weekName?: { abbr: string; displayText: string },
  preHighlightedDate?: Date | string | null,
  startOfMinDate?: Date | undefined,
  endOfMaxDate?: Date | undefined
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
    : ''
  const highlightedDate = preHighlightedDate
    ? typeof preHighlightedDate === 'string'
      ? new Date(preHighlightedDate + ' 12:00:00')
      : preHighlightedDate
    : undefined

  return {
    selectedDate,
    formattedSelectedDate,
    date,
    formattedDate,
    highlightedDate,
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
      <{ abbr: string; displayText: string }>weekName,
      highlightedDate,
      startOfMinDate,
      endOfMaxDate
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
    minDate = startOfYear(addYears(new Date(), -5)),
    maxDate = endOfYear(addYears(new Date(), 5)),
  }: DatepickerOptions,
  datepickerElRef: HTMLElement,
  datepickerDialogElRef: HTMLElement,
  // TODO: update value for date input
  dateInputElRef: HTMLElement,
  datepickerTriggerElRef: HTMLButtonElement
): Datepicker => {
  const startOfMinDate = startOfDay(minDate)
  const startOfMonthMinDate = startOfMonth(minDate)
  const endOfMaxDate = endOfDay(maxDate)
  const endOfMonthMaxDate = endOfMonth(maxDate)
  let data = createData(
    locale,
    currentDate,
    selectedDate,
    useCurrentTime,
    showWeeks,
    weekName,
    null,
    startOfMinDate,
    endOfMaxDate
  )
  const unsubscribe$ = new Subject()
  const active$ = new ReplaySubject<boolean>(1)
  // add input mask to date input // TODO: add support for other date formats
  Inputmask({
    alias: 'datetime',
    inputFormat: 'yyyy-mm-dd',
    outputFormat: 'yyyymmdd',
  }).mask(dateInputElRef)

  const dp: Datepicker = {
    add: (amount, unit, select = false) => {
      const newDate = add(data.date, { [unit]: amount })
      if (unit === 'days' && newDate > endOfMaxDate) {
        return
      }
      if (unit === 'months' && newDate > endOfMonthMaxDate) {
        return
      }
      data = createData(
        locale,
        newDate,
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName,
        data.highlightedDate,
        startOfMinDate,
        endOfMaxDate
      )
      if (select) {
        dp.highlight(data.date)
      }
      listener(data)
    },
    sub: (amount, unit, select = false) => {
      const newDate = sub(data.date, { [unit]: amount })
      if (unit === 'days' && newDate < startOfMinDate) {
        return
      }
      if (unit === 'months' && newDate < startOfMonthMinDate) {
        return
      }
      data = createData(
        locale,
        newDate,
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName,
        data.highlightedDate,
        startOfMinDate,
        endOfMaxDate
      )
      if (select) {
        dp.highlight(data.date)
      }
      listener(data)
    },
    set: (date) => {
      if (date < startOfMinDate || date > endOfMaxDate) {
        return
      }
      data = createData(
        locale,
        date,
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName,
        data.highlightedDate,
        startOfMinDate,
        endOfMaxDate
      )
      listener(data)
    },
    setMonth: (number) => {
      const date = new Date(data.date.setMonth(number))
      if (date < startOfMonthMinDate || date > endOfMonthMaxDate) {
        return
      }
      data = createData(
        locale,
        date,
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName,
        data.highlightedDate,
        startOfMinDate,
        endOfMaxDate
      )
      listener(data)
    },
    setYear: (number) => {
      const date = new Date(data.date.setFullYear(number))
      if (date < startOfMonthMinDate || date > endOfMonthMaxDate) {
        return
      }
      data = createData(
        locale,
        date,
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName,
        data.highlightedDate,
        startOfMinDate,
        endOfMaxDate
      )
      listener(data)
    },
    select: (date) => {
      if (date < startOfMinDate || date > endOfMaxDate) {
        return
      }
      data = createData(
        locale,
        data.date,
        date,
        useCurrentTime,
        showWeeks,
        weekName,
        data.highlightedDate,
        startOfMinDate,
        endOfMaxDate
      )
      listener(data)
      if (closeOnSelect) {
        dp.close()
      }
    },
    highlight: (date) => {
      if (date < startOfMinDate || date > endOfMaxDate) {
        return
      }
      data = createData(
        locale,
        data.date,
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName,
        date,
        startOfMinDate,
        endOfMaxDate
      )
      listener(data)
      // set focus on focusable calendar day
      setFocus(datepickerDialogElRef, 'td[tabindex="0"]')
    },
    open: () => {
      data = createData(
        locale,
        data.selectedDate || new Date(),
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName,
        null,
        startOfMinDate,
        endOfMaxDate
      )

      const state = createState(true, startOfMinDate, endOfMaxDate)
      active$.next(true)
      listener(data, state)

      // remove focus from trigger element
      datepickerTriggerElRef.blur()

      // set focus on focusable calendar day
      setFocus(datepickerDialogElRef, 'td[tabindex="0"]')
    },
    close: (selectHighlighted = false) => {
      if (selectHighlighted) {
        data = createData(
          locale,
          data.date,
          data.highlightedDate || data.selectedDate,
          useCurrentTime,
          showWeeks,
          weekName,
          null,
          startOfMinDate,
          endOfMaxDate
        )
      }

      const state = createState(false, startOfMinDate, endOfMaxDate)
      active$.next(false)
      listener(data, state)

      // set focus on trigger
      datepickerTriggerElRef.focus()
    },
    toggle: () => {
      if (dp.state.isActive) {
        dp.close()
      } else {
        dp.open()
      }
    },
    destroy: () => {
      unsubscribe$.next(true)
      unsubscribe$.complete()
    },
    state: createState(false, startOfMinDate, endOfMaxDate),
    active$: active$.asObservable(),
  }

  listener(data, dp.state)
  dp.active$
    .pipe(
      switchMap((active) =>
        iif(
          () => active,
          onActiveHandler(dp, datepickerElRef, datepickerDialogElRef),
          onInactiveHandler(dp, datepickerDialogElRef)
        )
      ),
      // take until destroyed
      takeUntil(unsubscribe$)
    )
    .subscribe()

  return dp
}
