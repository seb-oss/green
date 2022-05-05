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
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import {
  AbstractDropdown,
  DropdownHandler,
  ExtendedDropdownOption,
  ElementProps,
  DatepickerData,
  Datepicker,
  createDatepicker,
  DatepickerState,
  DropdownOption,
  months,
  years,
  randomId,
  DatepickerOptions,
} from '@sebgroup/extract'

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
      this._value = newValue
    }
  }
  @Input() id?: string = randomId()
  @Input() label?: string
  @Input() valid?: boolean
  @Input() invalid?: boolean
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

  dropdown?: AbstractDropdown
  handler?: DropdownHandler
  toggler?: Partial<ElementProps>
  listbox?: Partial<ElementProps>
  _value: string | Date | undefined
  private _months: Array<DropdownOption> = months({})
  years: Array<DropdownOption> = years({})
  private _options?: DatepickerOptions

  dp: Datepicker | undefined
  private _data: DatepickerData | undefined

  constructor(private _cdr: ChangeDetectorRef) {}

  writeValue(value: any): void {
    this.value = value

    // When binding using ngModel we need to set initial select date
    // once we get initial value as it's not available when component is created
    if (value && this.dp && !this.data?.selectedDate) {
      this.dp.select(value)
    }
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

  listener = (
    data: DatepickerData | undefined,
    state: DatepickerState | undefined
  ) => {
    if (this.dp && state) {
      this.dp.state = { ...state }
    }

    this.onTouchedFn && this.onTouchedFn()

    if (data) {
      this.valueChange.emit(data.selectedDate)
      this.onChangeFn && this.onChangeFn(data.selectedDate)
      this.data = data
    }

    if (data || state) {
      this._cdr.markForCheck()
    }
  }
  trackWeek(index: any, week: any) {
    return week
  }

  ngAfterViewInit(): void {
    // initialize datepicker
    if (
      this.datepickerElRef &&
      this.datepickerDialogElRef &&
      this.dateInputElRef &&
      this.datepickerTriggerElRef &&
      !this.dp
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
      this._cdr.detectChanges()
    } else {
      throw 'Missing one or more elements...'
    }
  }
}
