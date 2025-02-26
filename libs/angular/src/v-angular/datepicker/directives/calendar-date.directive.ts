import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'

import { match } from '../datepicker.utils'

export const enum DateCss {
  notWithinMonth = 'not-within-month',
  selected = 'selected',
  today = 'today',
}

@Directive({
  selector: '[calendarDate]', // eslint-disable-line @angular-eslint/directive-selector
})
export class CalendarDateDirective implements OnInit, OnChanges {
  @Input() calendarDate!: Date
  @HostBinding('class.' + DateCss.selected) @Input() selected!: boolean
  @HostBinding('class.' + DateCss.notWithinMonth)
  @Input()
  notWithinMonth!: boolean
  @HostBinding('class.' + DateCss.today) isToday = false
  @Input() disabled!: boolean

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.isToday = match(new Date(), this.calendarDate)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.disabled?.currentValue) {
      ;(this.nativeElement as HTMLButtonElement).disabled = this.disabled
    }
  }
}
