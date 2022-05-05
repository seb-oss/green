import { add, format, sub } from 'date-fns'
import { Calendar, createCalendar } from '.'
import { Instance } from '@popperjs/core'
import { iif, Observable, ReplaySubject, Subject } from 'rxjs'
import { switchMap, takeUntil } from 'rxjs/operators'
import { onActiveHandler, onInactiveHandler } from './event-handlers'
import { setFocus } from './helper-functions'

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
  weekName?: { abbr: string; displayText: string },
  preHighlightedDate?: Date | string
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
      highlightedDate
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
  dateInputElRef: HTMLElement,
  datepickerTriggerElRef: HTMLButtonElement
): Datepicker => {
  let data = createData(
    locale,
    currentDate,
    selectedDate,
    useCurrentTime,
    showWeeks,
    weekName
  )
  const unsubscribe$ = new Subject()
  const active$ = new ReplaySubject<boolean>(1)
  const dp: Datepicker = {
    add: (amount, unit, select = false) => {
      data = createData(
        locale,
        add(data.date, { [unit]: amount }),
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName
      )
      if (select) {
        dp.highlight(data.date)
      }
      listener(data)
    },
    sub: (amount, unit, select = false) => {
      data = createData(
        locale,
        sub(data.date, { [unit]: amount }),
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName
      )
      if (select) {
        dp.highlight(data.date)
      }
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
    highlight: (date) => {
      data = createData(
        locale,
        data.date,
        data.selectedDate,
        useCurrentTime,
        showWeeks,
        weekName,
        date
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
        weekName
      )

      const state = createState(true)
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
          weekName
        )
      }

      const state = createState(false)
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
    state: createState(),
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
