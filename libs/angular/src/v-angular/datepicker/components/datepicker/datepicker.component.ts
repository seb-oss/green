import { WeekDay } from '@angular/common'
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import { Subscription } from 'rxjs'

import { CalendarMonth } from '../../datepicker.models'
import { getSortedWeekDays, isValid } from '../../datepicker.utils'

import type { CalendarType } from '../../datepicker.models'

@Component({
  selector: 'nggv-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('calendarTemplate') calendarTemplate: TemplateRef<any> | null =
    null

  /** Emits a Date upon selection. */
  @Output() ngvDateChange = new EventEmitter<Date>()

  /** Sets first day of week in calendar. Defaults to Monday. */
  @Input() firstDayOfWeek: WeekDay = WeekDay.Monday
  /** Bank holidays. */
  @Input() disableDates: (string | Date)[] = []
  /** Other non selectable dates. */
  @Input() disableWeekDays: WeekDay[] = []
  /** Minimum number of calendar rows shown. */
  @Input() minCalendarRows = 5
  /** Initial date set as selected. */
  @Input() selected: Date | undefined
  /** Set locale for date format. */
  @Input() locale: string | undefined = 'en-US'
  /** Set type of calendar. */
  @Input() type: CalendarType = 'normal'
  /** Sets a from date of which all dates before will be invalid. */
  @Input() firstValid: Date | undefined
  /** Sets a to date of which all dates after will be invalid. */
  @Input() lastValid: Date | undefined
  /** Sets a closing time for today to toggle availability for today's date. */
  @Input() closingTime: Date | undefined

  /** @internal */
  activeCalendar!: CalendarMonth /*  = new CalendarMonth(new Date()) */
  /** @internal */

  /** @internal */
  weekdayArray: Date[] = []

  /** @internal */
  disabledDatesForActiveMonth: Date[] = []

  private subs: Subscription[] = []

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.selected &&
      !!changes.selected.currentValue &&
      !changes.selected.isFirstChange()
    ) {
      // set active calendar to match selected date
      const activeCalendar = new CalendarMonth(
        new Date(changes.selected.currentValue),
      )
      this.changeActiveCalendar(activeCalendar)
    }

    if (changes.disableDates && !changes.disableDates.isFirstChange()) {
      this.disabledDatesForActiveMonth = this.getDisabledDatesFor(
        this.activeCalendar,
        changes.disableDates.currentValue || [],
      )
    }
  }

  ngOnInit(): void {
    // initiate week label row
    this.weekdayArray = getSortedWeekDays(this.firstDayOfWeek)

    // initiate calendar
    const initDate =
      !!this.selected && isValid(this.selected)
        ? new Date(this.selected)
        : new Date()
    this.activeCalendar = new CalendarMonth(initDate)
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe())
  }

  /**
   * @internal
   * Update local calendar variable and changes displayed calendar.
   */
  changeActiveCalendar(calendar: CalendarMonth): void {
    this.activeCalendar = calendar
    this.disabledDatesForActiveMonth = this.getDisabledDatesFor(
      calendar,
      this.disableDates,
    )
  }

  /**
   * @internal
   * Returns a subset of all disabled dates.
   *
   * @param month current month to filter from
   * @param disableDates master list of all disabled dates
   * @returns a subset with current and adjacent months disabled dates
   */
  getDisabledDatesFor(
    calendar: CalendarMonth,
    disableDates?: (string | Date)[],
  ): Date[] {
    if (!disableDates) disableDates = []
    // sets month to target month
    const targetMonth = calendar.date

    // gets previous month from target month
    const previousMonth = calendar.previousMonth().date

    // gets next month from target month
    const nextMonth = calendar.nextMonth().date

    // checks if two dates are within the same year and month
    const withinSameMonth = (a: Date, b: Date): boolean =>
      a.getMonth() === b.getMonth() && a.getFullYear() === b.getFullYear()

    // filter out disabled dates for current and adjacent months
    return disableDates
      .map((d: Date | string) => new Date(d))
      .filter(
        (d: Date) =>
          withinSameMonth(d, previousMonth) ||
          withinSameMonth(d, targetMonth) ||
          withinSameMonth(d, nextMonth),
      )
  }

  /**
   * Handles date-clicks from calendar compoentn. Emits event or changes calendar.
   * @param date date clicked in calendar
   */
  dateClickHandler(date: Date): void {
    // if a date is clicked within the active month, emit date
    if (date.getMonth() === this.activeCalendar.month)
      return this.ngvDateChange.emit(date)
    // else, change active calendar to match the date clicked
    this.selected = date
    this.changeActiveCalendar(new CalendarMonth(date))
  }
}
