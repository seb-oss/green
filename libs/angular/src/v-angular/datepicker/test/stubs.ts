import { Component, Directive, Pipe, PipeTransform } from '@angular/core'

/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/no-inputs-metadata-property */

/** Mock Components */

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'fa-icon',
  inputs: ['icon'],
  template: '',
})
export class FontAwesomeMockComponent {}

@Component({
  selector: 'nggv-datepicker',
  inputs: [
    'type',
    'locale',
    'disableDates',
    'disableWeekDays',
    'firstDayOfWeek',
    'selected',
    'minCalendarRows',
    'firstValid',
    'lastValid',
    'closingTime',
  ],
  template: '',
})
export class DatepickerMockComponent {}

@Component({
  selector: 'nggv-calendar-control',
  inputs: ['activeCalendar', 'locale', 'type'],
  template: '',
})
export class DateCalendarControlMockComponent {}

@Component({
  selector: 'nggv-calendar',
  inputs: [
    'year',
    'month',
    'selected',
    'lastValid',
    'firstValid',
    'closingTime',
    'disableDates',
    'disableWeekDays',
    'minCalendarRows',
    'firstDayOfWeek',
    'locale',
    'type',
  ],
  template: '',
})
export class DateCalendarMockComponent {}

/** Mock Directives */

@Directive({
  selector: '[calendarDate]',
  inputs: ['calendarDate', 'selected', 'notWithinMonth', 'isToday', 'disabled'],
})
export class CalendarDateMockDirective {}

/** Mock Pipes */

@Pipe({
  name: 'isDisabled',
})
export class IsDisabledMockPipe implements PipeTransform {
  transform = (..._: any[]) => true
}

@Pipe({
  name: 'dateThook',
})
export class DateThookMockPipe implements PipeTransform {
  transform = (..._: any[]) => ''
}

@Pipe({
  name: 'matches',
})
export class MatchesMockPipe implements PipeTransform {
  transform = (..._: any[]) => true
}
