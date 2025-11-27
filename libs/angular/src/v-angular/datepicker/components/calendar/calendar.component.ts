import { WeekDay } from '@angular/common'
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  Output,
  QueryList,
  SimpleChanges,
  ViewChildren,
} from '@angular/core'

import {
  generateDateMatrix,
  getDayOffset,
  sortWeekDays,
} from '../../datepicker.utils'
import { CalendarDateDirective } from '../../directives/calendar-date.directive'

import type { CalendarType, DisableDateConfig } from '../../datepicker.models'

@Component({
    selector: 'nggv-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    standalone: false
})
export class CalendarComponent implements OnChanges {
  @Output() dateClick = new EventEmitter<Date>()

  @ViewChildren(CalendarDateDirective)
  dateButtonRefs!: QueryList<CalendarDateDirective>

  @Input() year!: number
  @Input() month!: number
  @Input() selected: Date | undefined

  // inputs that configure display behaviour
  @Input() locale: string | undefined
  @Input() minCalendarRows = 5
  @Input() firstDayOfWeek: WeekDay = WeekDay.Monday
  @Input() type: CalendarType = 'normal'

  // inputs that affects which dates in the calendar should be grayed out
  @Input() set disableDates(value: Date[] | undefined) {
    this.updateDisableDateConfig({ excludeDates: value ?? [] })
  }
  @Input() set disableWeekDays(value: WeekDay[] | undefined) {
    this.updateDisableDateConfig({ excludeDays: value })
  }
  @Input() set firstValid(value: Date | undefined) {
    this.updateDisableDateConfig({ fromDate: value })
  }
  @Input() set lastValid(value: Date | undefined) {
    this.updateDisableDateConfig({ toDate: value })
  }
  @Input() set closingTime(value: Date | undefined) {
    this.updateDisableDateConfig({ closingTime: value })
  }

  dateMatrix: Date[][] = [[]]
  disableDateConfig: DisableDateConfig = {}

  private lastDayOfWeek: WeekDay = WeekDay.Sunday

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selected?.currentValue) {
      this.selected = new Date(changes.selected.currentValue)
    }

    if (changes.firstDayOfWeek?.currentValue) {
      this.lastDayOfWeek = sortWeekDays(
        changes.firstDayOfWeek.currentValue,
      ).pop() as WeekDay
    }

    if (
      (changes.month?.currentValue !== undefined &&
        changes.month?.currentValue !== null) ||
      !!changes.year?.currentValue ||
      !!changes.firstDayOfWeek?.currentValue ||
      !!changes.minCalendarRows?.currentValue
    ) {
      this.dateMatrix = generateDateMatrix(
        this.month,
        this.year,
        this.minCalendarRows,
        this.firstDayOfWeek,
      )
    }
  }

  clickDate(date: Date): void {
    this.dateClick.emit(date)
  }

  @HostListener('keydown', ['$event'])
  keyNavigation(event: KeyboardEvent): void {
    let activeElement: HTMLElement | undefined
    if (event.key !== 'Tab')
      activeElement = document.activeElement as HTMLElement
    if (event.key === 'ArrowRight') {
      const nextFocusable = this.getNextFocusable(activeElement)
      if (nextFocusable) nextFocusable.focus()
    }

    if (event.key === 'ArrowLeft') {
      const nextFocusable = this.getPreviousFocusable(activeElement)
      if (nextFocusable) nextFocusable.focus()
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const nextFocusable = this.getElementWithOffset(activeElement, -7)
      if (nextFocusable) nextFocusable.focus()
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const nextFocusable = this.getElementWithOffset(activeElement, 7)
      if (nextFocusable) nextFocusable.focus()
    }

    if (event.key === 'Enter' || event.key === 'Space') {
      if (activeElement) {
        const dateRef = this.dateButtonRefs.find(
          (ref) => ref.nativeElement === activeElement,
        )
        if (!dateRef?.disabled) {
          this.dateClick.emit(dateRef?.calendarDate)
        }
      }
    }

    if (event.key === 'Home') {
      event.preventDefault()
      const nextFocusable = this.firstDayOfWeekElement()
      if (nextFocusable) nextFocusable.focus()
    }

    if (event.key === 'End') {
      event.preventDefault()
      const nextFocusable = this.lastDayOfWeekElement()
      if (nextFocusable) nextFocusable.focus()
    }
  }

  getElementWithOffset(
    fromElement: HTMLElement | undefined,
    offsetDays: number,
    returnOnlyEnabled = true,
  ): HTMLElement | undefined {
    if (!fromElement) return
    const fromIndex = this.dateButtonRefs
      .toArray()
      .map((ref) => ref.nativeElement)
      .indexOf(fromElement)
    const next = this.dateButtonRefs.get(fromIndex + offsetDays)
    if (!next) return
    if (returnOnlyEnabled && next.disabled)
      return this.getElementWithOffset(next.nativeElement, offsetDays)
    return next.nativeElement
  }

  getNextFocusable(
    fromElement: HTMLElement | undefined,
  ): HTMLElement | undefined {
    if (!fromElement) return
    return this.getElementWithOffset(fromElement, 1)
  }

  getPreviousFocusable(
    fromElement: HTMLElement | undefined,
  ): HTMLElement | undefined {
    if (!fromElement) return
    return this.getElementWithOffset(fromElement, -1)
  }

  firstDayOfWeekElement(): HTMLElement | undefined {
    const activeElement = document.activeElement as HTMLElement
    if (!activeElement) return
    const dateRef = this.dateButtonRefs.find(
      (ref) => ref.nativeElement === activeElement,
    ) as CalendarDateDirective
    if (dateRef.calendarDate.getDay() === this.firstDayOfWeek) return
    const offset = this.getDayOffset(
      dateRef.calendarDate.getDay(),
      this.firstDayOfWeek,
      'back',
    )
    const targetElement = this.getElementWithOffset(
      activeElement,
      offset,
      false,
    ) as HTMLButtonElement
    if (targetElement && targetElement.disabled)
      return this.getNextFocusable(targetElement)
    return targetElement
  }

  lastDayOfWeekElement(): HTMLElement | undefined {
    const activeElement = document.activeElement as HTMLElement
    if (!activeElement) return
    const dateRef = this.dateButtonRefs.find(
      (ref) => ref.nativeElement === activeElement,
    ) as CalendarDateDirective
    if (dateRef.calendarDate.getDay() === this.lastDayOfWeek) return
    const offset = this.getDayOffset(
      dateRef.calendarDate.getDay(),
      this.lastDayOfWeek,
      'forward',
    )
    const targetElement = this.getElementWithOffset(
      activeElement,
      offset,
      false,
    ) as HTMLButtonElement
    if (targetElement && targetElement.disabled)
      return this.getPreviousFocusable(targetElement)
    return targetElement
  }

  getDayOffset(
    from: WeekDay,
    to: WeekDay,
    direction?: 'forward' | 'back',
  ): number {
    return getDayOffset(from, to, this.firstDayOfWeek, direction)
  }

  private updateDisableDateConfig(config: Partial<DisableDateConfig>): void {
    this.disableDateConfig = {
      ...this.disableDateConfig,
      ...config,
    }
  }
}
