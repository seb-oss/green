import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  ViewChild,
  EventEmitter,
  SimpleChanges,
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
  implements ControlValueAccessor, AfterViewInit, OnDestroy, OnChanges
{
  @Input() id?: string
  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>()
  @ViewChild('datepickerDialogElRef') public datepickerDialogElRef:
    | ElementRef<HTMLElement>
    | undefined
  @ViewChild('dateInputElRef') public dateInputElRef:
    | ElementRef<HTMLInputElement>
    | undefined
  @ViewChild('datepickerElRef') public datepickerElRef:
    | ElementRef<HTMLElement>
    | undefined

  onChangeFn?: (value: any) => void
  onTouchedFn?: any

  dropdown?: AbstractDropdown
  handler?: DropdownHandler
  toggler?: Partial<ElementProps>
  listbox?: Partial<ElementProps>

  dp: Datepicker | undefined
  private _data: DatepickerData | undefined

  constructor() {}

  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  writeValue(value: any): void {
    //this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn
  }

  select(date: any, event: any) {
    this.dp?.select(date)
  }

  trackByKey = (index: number, option: ExtendedDropdownOption): string => {
    return option.key
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
      this.valueChange.emit(data.formattedSelectedDate)
      this.onChangeFn && this.onChangeFn(data.formattedSelectedDate)
      this.data = data
    }
  }
  trackWeek(index: any, week: any) {
    return week
  }

  ngAfterViewInit(): void {
    if (
      this.datepickerElRef &&
      this.datepickerDialogElRef &&
      this.dateInputElRef
    ) {
      this.dp = createDatepicker(
        this.listener,
        {
          closeOnSelect: true,
        },
        this.datepickerElRef.nativeElement,
        this.datepickerDialogElRef.nativeElement,
        this.dateInputElRef.nativeElement
      )
    } else {
      throw 'Missing one or more elements...'
    }
    console.log(this.dp)
  }
}
