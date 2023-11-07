import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges,
} from '@angular/core'
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms'
import {
  DatepickerData,
  Datepicker,
  createDatepicker,
  DatepickerState,
  months,
  years,
  randomId,
  DatepickerOptions,
} from '@sebgroup/extract'
import { DropdownOption } from '../dropdown/dropdown.component'
import { endOfDay, startOfDay } from 'date-fns'

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
  implements ControlValueAccessor, AfterViewInit, OnChanges
{
  get months(): Array<DropdownOption> {
    return this._months
  }

  set months(value: Array<DropdownOption>) {
    this._months = value
  }
  @Input()
  get options(): DatepickerOptions {
    return <DatepickerOptions>this._options
  }
  set options(value: DatepickerOptions) {
    this._options = value
    if (value.locale) {
      this.months = months({ locale: this.options?.locale })
    }
  }
  @Input()
  get value(): string | Date | undefined {
    return this._value
  }
  set value(newValue: string | Date | undefined) {
    if (newValue !== this._value) {
      this._value = newValue || ''
      if (this._value !== undefined && this.dp) {
        this.dp.select(this._value)
      }
    }
  }
  @Input() id?: string = randomId()
  @Input() label?: string
  @Input() isValid: boolean | null = null
  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>()
  @ViewChild('datepickerDialogElRef')
  public datepickerDialogElRef?: ElementRef<HTMLElement>
  @ViewChild('dateInputElRef')
  public dateInputElRef?: ElementRef<HTMLInputElement>
  @ViewChild('datepickerElRef') public datepickerElRef?: ElementRef<HTMLElement>
  @ViewChild('datepickerTriggerElRef')
  public datepickerTriggerElRef?: ElementRef<HTMLButtonElement>

  onChangeFn?: (value: any) => void
  onTouchedFn?: any

  toggler?: Partial<ElementProps>
  listbox?: Partial<ElementProps>
  _value: string | Date | undefined
  private _months: Array<DropdownOption> = months({})
  years?: Array<DropdownOption>
  private _options?: DatepickerOptions

  dp: Datepicker | undefined
  private _data: DatepickerData | undefined

  constructor(private _cdr: ChangeDetectorRef) {}

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn
  }

  get data(): DatepickerData | undefined {
    return this._data
  }

  set data(value: DatepickerData | undefined) {
    this._data = value
  }

  onDateChange(value: string) {
    const newDate = new Date(value)
    // Only pass valid date to date picker
    if (!isNaN(newDate.getTime())) {
      this.dp?.select(value)
    } else {
      this.valueChange.emit(value)
      this.onChangeFn && this.onChangeFn(value)
    }
  }

  listener = (
    data: DatepickerData | undefined,
    state: DatepickerState | undefined
  ) => {
    if (this.dp && state) {
      this.dp.state = { ...state }
      this.years = years({
        from: this.dp.state?.minDate?.getFullYear(),
        to: this.dp.state?.maxDate?.getFullYear(),
      })
    }

    if (data) {
      // only emit change event if date has changed
      if (this.data?.selectedDate !== data.selectedDate) {
        this.valueChange.emit(data.selectedDate)
        this.onChangeFn && this.onChangeFn(data.selectedDate)
      }
      this.data = data
    }

    this._cdr.detectChanges()
  }
  trackWeek(index: any, week: any) {
    return week
  }

  ngOnChanges(changes: SimpleChanges): void {
    //ignore changes until datepicker has been initialised in ngAfterViewInit
    if (!this.dp) return

    if (changes.options) {
      this._createDatepicker()
    }
  }

  ngAfterViewInit(): void {
    this._createDatepicker()
    this._cdr.detectChanges()
  }

  private _createDatepicker() {
    if (
      this.datepickerElRef &&
      this.datepickerDialogElRef &&
      this.dateInputElRef &&
      this.datepickerTriggerElRef
    ) {
      this.dp = createDatepicker(
        this.listener,
        {
          ...this.options,
          selectedDate: this.value,
        },
        this.datepickerElRef.nativeElement,
        this.datepickerDialogElRef.nativeElement,
        this.dateInputElRef.nativeElement,
        this.datepickerTriggerElRef.nativeElement
      )
    } else {
      throw 'Missing one or more elements...'
    }
  }

  blurInput() {
    this.onTouchedFn && this.onTouchedFn()
  }

  focusoutDialog(event: any) {
    if (
      !this.datepickerDialogElRef?.nativeElement.contains(event.relatedTarget)
    ) {
      this.onTouchedFn && this.onTouchedFn()
    }
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
