import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core'
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms'
import { randomId } from '@sebgroup/extract'
import { endOfDay, startOfDay } from 'date-fns'

import { GdsDatepicker } from '@sebgroup/green-core'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

export interface Attributes {
  id?: string
  role?: string
  style?: CSSStyleDeclaration
  tabIndex?: number
}

export interface ElementProps {
  attributes: Attributes
  classes: string[]
}

export interface DatepickerOptions {
  label?: string
  locale?: string
  currentDate?: Date | string
  selectedDate?: Date | string
  closeOnSelect?: boolean
  useCurrentTime?: boolean
  weekName?: { abbr: string; displayText: string }
  showWeeks?: boolean
  minDate?: Date
  maxDate?: Date
  onChange?: (selectedDate: Date) => void
}

@Component({
  selector: 'ngg-datepicker',
  templateUrl: 'datepicker.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NggDatepickerComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NggDatepickerComponent
  implements ControlValueAccessor, AfterViewInit
{
  @Input()
  get options(): DatepickerOptions {
    return <DatepickerOptions>this._options
  }
  set options(value: DatepickerOptions) {
    this._options = value
  }

  get showWeekNumbers(): boolean {
    return this.options?.showWeeks ?? false
  }

  @Input()
  get value(): string | Date | undefined {
    return this._value
  }
  set value(newValue: string | Date | undefined) {
    if (newValue !== this._value) {
      this._value = newValue || undefined
    }
    console.log('value', this._value)
  }

  @Input() id?: string = randomId()
  @Input() label?: string
  @Input() isValid: boolean | null = null
  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>()

  onChangeFn?: (value: any) => void
  onTouchedFn?: any

  _value: string | Date | undefined
  private _options?: DatepickerOptions

  get min(): Date | undefined {
    const minDate = this.options?.minDate
    return minDate ? minDate : new Date(new Date().getFullYear() - 10, 0, 1)
  }

  get max(): Date | undefined {
    const maxDate = this.options?.maxDate
    return maxDate ? maxDate : new Date(new Date().getFullYear() + 10, 0, 1)
  }

  constructor(private _cdr: ChangeDetectorRef) {
    registerTransitionalStyles()
  }

  writeValue(value: any): void {
    console.log('writeValue', value)
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn
  }

  onDateChange(evt: Event) {
    const e = evt as CustomEvent

    this.value = e.detail.value

    this.valueChange.emit(e.detail.value)
    this.onChangeFn && this.onChangeFn(e.detail.value)
  }

  ngAfterViewInit(): void {
    this._cdr.detectChanges()
  }
}

export function dateValidator(dates?: { min?: Date; max?: Date }): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value
    if (!value) {
      return null
    }
    const newDate = new Date(value)
    const isValidDate = !isNaN(newDate.getTime())
    if (!isValidDate) {
      return { validDate: true }
    }

    const validMinDate = dates?.min ? newDate >= startOfDay(dates.min) : true
    const validMaxDate = dates?.max ? newDate <= endOfDay(dates.max) : true

    if (!validMinDate && dates?.min) {
      return {
        validDate: {
          minDate: startOfDay(dates.min),
          actualDate: newDate,
        },
      }
    }
    if (!validMaxDate && dates?.max) {
      return {
        validDate: {
          maxDate: endOfDay(dates.max),
          actualDate: newDate,
        },
      }
    }

    return null
  }
}
