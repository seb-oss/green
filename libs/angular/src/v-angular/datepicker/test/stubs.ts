import { Component, Directive, Pipe, PipeTransform } from '@angular/core'

/* eslint-disable @angular-eslint/directive-selector */
/* eslint-disable @angular-eslint/no-inputs-metadata-property */

/** Mock Components */

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'fa-icon',
    inputs: ['icon'],
    template: '',
    standalone: false
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
    standalone: false
})
export class DatepickerMockComponent {}

@Component({
    selector: 'nggv-calendar-control',
    inputs: ['activeCalendar', 'locale', 'type'],
    template: '',
    standalone: false
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
    standalone: false
})
export class DateCalendarMockComponent {}

/** Mock Directives */

@Directive({
    selector: '[calendarDate]',
    inputs: ['calendarDate', 'selected', 'notWithinMonth', 'isToday', 'disabled'],
    standalone: false
})
export class CalendarDateMockDirective {}

/** Mock Pipes */

@Pipe({
    name: 'isDisabled',
    standalone: false
})
export class IsDisabledMockPipe implements PipeTransform {
  transform = (..._: any[]) => true
}

@Pipe({
    name: 'dateThook',
    standalone: false
})
export class DateThookMockPipe implements PipeTransform {
  transform = (..._: any[]) => ''
}

@Pipe({
    name: 'matches',
    standalone: false
})
export class MatchesMockPipe implements PipeTransform {
  transform = (..._: any[]) => true
}
