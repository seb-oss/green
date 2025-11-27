import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core'
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms'
import { Subscription } from 'rxjs'
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'

import { CalendarMonth } from '../../datepicker.models'
import { getMonthArray, getYearArray } from '../../datepicker.utils'

import type { CalendarType } from '../../datepicker.models'

import '@sebgroup/green-core/components/icon/icons/chevron-left.js'
import '@sebgroup/green-core/components/icon/icons/chevron-right.js'

@Component({
    selector: 'nggv-calendar-control',
    templateUrl: './calendar-control.component.html',
    styleUrls: ['./calendar-control.component.scss'],
    standalone: false
})
export class CalendarControlComponent implements OnInit, OnChanges, OnDestroy {
  // nextIcon: IconDefinition = faChevronRight
  // previousIcon: IconDefinition = faChevronLeft

  @Output() calendarChange = new EventEmitter<CalendarMonth>()

  @Input() activeCalendar!: CalendarMonth
  @Input() locale: string | undefined
  @Input() type: CalendarType = 'normal'

  monthArray: Date[] = [] // array used for month dropdown
  yearArray: Date[] = [] // array used for year dropdown
  selectedCalendar: UntypedFormGroup // dropdown form group

  private subs: Subscription[] = []

  constructor(private fb: UntypedFormBuilder) {
    // initiate form group for dropdown menus
    this.selectedCalendar = this.fb.group({
      year: [],
      month: [],
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.activeCalendar &&
      !changes.activeCalendar.isFirstChange() &&
      changes.activeCalendar.currentValue.valueOf() !==
        this.selectedCalendar.value.id
    ) {
      this.selectedCalendar.patchValue(changes.activeCalendar.currentValue)
    }
  }

  ngOnInit() {
    // populate drowdowns and labels with data
    this.monthArray = getMonthArray()
    this.yearArray = getYearArray()

    // subscribe to year and month changes, and emit event to datepicker
    this.subscribeToFormChanges()

    // update control to initial value
    if (this.activeCalendar)
      this.selectedCalendar.patchValue(this.activeCalendar)
  }

  ngOnDestroy() {
    this.subs.forEach((sub) => sub.unsubscribe())
  }

  viewPreviousMonth() {
    const previousMonth = CalendarMonth.fromObject(
      this.selectedCalendar.value,
    ).previousMonth()
    this.selectedCalendar.patchValue(previousMonth)
  }

  viewNextMonth() {
    const nextMonth = CalendarMonth.fromObject(
      this.selectedCalendar.value,
    ).nextMonth()
    this.selectedCalendar.patchValue(nextMonth)
  }

  viewPreviousYear() {
    const previousYear = CalendarMonth.fromObject(
      this.selectedCalendar.value,
    ).previousYear()
    this.selectedCalendar.patchValue(previousYear)
  }

  viewNextYear() {
    const nextYear = CalendarMonth.fromObject(
      this.selectedCalendar.value,
    ).nextYear()
    this.selectedCalendar.patchValue(nextYear)
  }

  @HostListener('keydown', ['$event'])
  keyNavigation(event: KeyboardEvent): void {
    if (event.key !== 'PageUp' && event.key !== 'PageDown') return
    event.preventDefault()
    if (event.shiftKey) {
      if (event.key === 'PageUp') return this.viewPreviousYear()
      if (event.key === 'PageDown') return this.viewNextYear()
    }
    if (event.key === 'PageUp') return this.viewPreviousMonth()
    if (event.key === 'PageDown') return this.viewNextMonth()
  }

  private subscribeToFormChanges(): void {
    // used to quickly check if the yearsArray needs years appended to it
    let existingYears = this.yearArray.map((e) => e.getFullYear())
    const changes = this.selectedCalendar.valueChanges.pipe(
      debounceTime(1), // added due to this issue: https://github.com/angular/angular/issues/13129
      map((value: { year: number; month: number }) =>
        CalendarMonth.fromObject(value),
      ),
      distinctUntilChanged(
        (prev: CalendarMonth, curr: CalendarMonth) =>
          prev.valueOf() === curr.valueOf(),
      ),
    )
    this.subs.push(
      changes.subscribe({
        next: (value: CalendarMonth) => {
          // if you need to append to year array
          if (existingYears.indexOf(value.year) === -1) {
            this.yearArray.push(value.date)
            this.yearArray.sort((a, b) => a.getFullYear() - b.getFullYear())
            existingYears = this.yearArray.map((e) => e.getFullYear())
          }
          this.calendarChange.emit(value)
        },
      }),
    )
  }
}
