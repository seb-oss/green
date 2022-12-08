import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Inject,
  Injector,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core'
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms'
import {
  AbstractDropdown,
  CompareWith,
  createDropdown,
  DropdownArgs,
  DropdownHandler,
  DropdownOption,
  DropdownOptionElement,
  DropdownTexts,
  dropdownValues,
  ElementProps,
  SearchFilter,
} from '@sebgroup/extract'
import { NggDropdownOptionDirective } from './dropdown-option.directive'

@Component({
  selector: 'ngg-dropdown',
  templateUrl: 'dropdown.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NggDropdownComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NggDropdownComponent
  implements ControlValueAccessor, AfterViewInit, OnDestroy, OnChanges
{
  @Input() id?: string
  @Input() texts?: DropdownTexts
  @Input() loop?: boolean = false
  @Input() display?: string
  @Input() useValue?: string
  @Input() label?: string
  @Input() options: DropdownOption[] = []
  @Input() valid?: boolean
  @Input() invalid?: boolean
  @Input() compareWith?: CompareWith
  @Input() searchFilter?: SearchFilter

  @Input() set multiSelect(value: string | boolean) {
    this._multiSelect = this.convertToBoolean(value)
  }
  get multiSelect(): boolean {
    return this._multiSelect
  }
  private _multiSelect = false

  @Input() set searchable(value: string | boolean) {
    this._searchable = this.convertToBoolean(value)
  }
  get searchable(): boolean {
    return this._searchable
  }
  private _searchable = false

  @Input() set value(newValue: any) {
    this.handler?.selectByValue(newValue)
    this._value = newValue
  }
  get value(): any {
    return this._value
  }
  private _value: any

  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>()
  @Output() readonly touched: EventEmitter<boolean> =
    new EventEmitter<boolean>()

  @ViewChild('togglerRef') public togglerRef?: ElementRef<HTMLElement>
  @ViewChild('listboxRef') public listboxRef?: ElementRef<HTMLElement>
  @ViewChild('fieldsetRef') public fieldsetRef?: ElementRef<HTMLElement>

  @ContentChild(NggDropdownOptionDirective)
  customOption?: NggDropdownOptionDirective

  onChangeFn?: (value: unknown) => void
  onTouchedFn?: () => void

  dropdown?: AbstractDropdown
  handler?: DropdownHandler
  toggler?: Partial<ElementProps> = dropdownValues().elements?.toggler
  listbox?: Partial<ElementProps> = dropdownValues().elements?.listbox
  fieldset?: Partial<ElementProps> = dropdownValues().elements?.fieldset

  get control(): NgControl | undefined {
    return this.injector.get(NgControl)
  }

  constructor(
    private cd: ChangeDetectorRef,
    @Inject(Injector) private injector: Injector
  ) {}

  ngAfterViewInit(): void {
    if (this.togglerRef?.nativeElement && this.listboxRef?.nativeElement) {
      this.handler = createDropdown(
        this.props,
        this.togglerRef.nativeElement,
        this.listboxRef.nativeElement,
        this.fieldsetRef?.nativeElement,
        (dropdown) => {
          this.dropdown = dropdown
          this.toggler = dropdown.elements.toggler
          this.listbox = dropdown.elements.listbox
          this.fieldset = dropdown.elements.fieldset
          this.cd.detectChanges()
        },
        (value) => {
          this.updateValue(value)
        }
      )
    }
  }

  ngOnDestroy(): void {
    this.handler?.destroy()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      this.handler &&
      (changes.id || changes.text || changes.loop || changes.options)
    ) {
      this.handler.update(this.props)
    }
  }

  writeValue(value: any): void {
    this.value = value
    if (
      value === null &&
      this.dropdown?.isTouched &&
      this.control?.control?.untouched
    ) {
      this.handler?.resetTouchedState()
      this.cd.detectChanges()
    }
  }

  registerOnChange(fn: () => unknown): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn
  }

  trackByKey = (index: number, option: DropdownOptionElement): string => {
    return option.attributes.id ?? ''
  }

  search($event: Event): void {
    this.handler?.search(($event.target as HTMLInputElement).value)
  }

  private get props(): DropdownArgs {
    return {
      id: this.id || this.dropdown?.id,
      texts: this.texts,
      useValue: this.useValue,
      display: this.display,
      options: this.options,
      loop: this.loop,
      value: this.value,
      multiSelect: this.multiSelect,
      searchable: this.searchable,
      searchFilter: this.searchFilter,
      compareWith: this.compareWith,
      onTouched: () => {
        this.onTouchedFn?.()
        this.touched.emit(true)
        this.cd.markForCheck()
      },
    }
  }

  private updateValue(option: any): void {
    this._value = option
    this.valueChange.emit(option)
    this.onChangeFn?.(option)
  }

  private convertToBoolean(value: string | boolean): boolean {
    return (
      value === '' || value === 'true' || value.toString() === 'true' || false
    )
  }
}
