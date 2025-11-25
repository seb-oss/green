import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core'
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms'
import { endOfDay, startOfDay } from 'date-fns'

import { randomId } from '@sebgroup/extract'
import { GdsDatepicker } from '@sebgroup/green-core/components/datepicker/datepicker.component.js'
import * as DatepickerTransStyles from '@sebgroup/green-core/components/datepicker/datepicker.trans.styles.js'

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
  currentDate?: Date | string
  selectedDate?: Date | string
  showWeeks?: boolean
  minDate?: Date
  maxDate?: Date
  dateFormat?: string
  onChange?: (selectedDate: Date) => void
}

/**
 * @deprecated
 * NggDatepicker is deprecated in favor of GdsDatepicker found in the Core package
 * https://storybook.seb.io/latest/core/?path=/docs/components-datepicker--docs
 */
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
    standalone: false
})
export class NggDatepickerComponent
  implements ControlValueAccessor, AfterViewInit
{
  @Input() size?: 'small' | 'medium'
  @Input() hideLabel?: boolean
  @Input() disabledWeekends?: boolean
  @Input() disabledDates?: Date[]

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

  get dateFormat(): string {
    return this.options?.dateFormat ?? 'y-m-d'
  }

  @Input()
  get value(): string | Date | undefined {
    return this._value
  }
  set value(newValue: string | Date | undefined) {
    if (typeof newValue === 'string') {
      newValue = new Date(newValue)
    }
    if (newValue !== this._value) {
      this._value = newValue || undefined
    }
  }

  @Input() id?: string = randomId()
  @Input() label?: string
  @Input() isValid: boolean | null = null
  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>()

  onChangeFn?: (value: any) => void
  onTouchedFn?: any

  _value: Date | undefined
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
    GdsDatepicker.define()
    DatepickerTransStyles.register()
  }

  writeValue(value: any): void {
    this.value = value
    this._cdr.detectChanges()
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn
  }

  onDateChange(evt: Event) {
    const target = evt.target as GdsDatepicker

    this.value = target.value

    this.valueChange.emit(target.value)
    this.onChangeFn && this.onChangeFn(target.value)
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
