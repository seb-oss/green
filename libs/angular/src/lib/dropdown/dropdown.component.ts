import {
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Inject,
  Injector,
  Input,
  Output,
  ViewChild,
} from '@angular/core'
import {
  ControlValueAccessor,
  NgControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms'
import {
  CompareWith,
  DropdownOption,
  DropdownOptionElement,
  DropdownPlacements,
  DropdownTexts,
  SearchFilter,
} from '@sebgroup/extract'
import { NggDropdownOptionDirective } from './dropdown-option.directive'
import { NggDropdownButtonDirective } from './dropdown-button.directive'

import { GdsDropdown } from '@sebgroup/green-core'

import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

const selectionText = (
  value: DropdownOption | DropdownOption[] | undefined,
  display: string,
  texts?: DropdownTexts
) => {
  if (!Array.isArray(value))
    return value?.[display] || (texts?.placeholder ?? 'Select')

  const displayValues = value.map((option) => option?.[display])
  return displayValues?.length > 2
    ? `${displayValues.length} ${texts?.selected} `
    : displayValues?.join(', ') || (texts?.placeholder ?? 'Select')
}

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
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NggDropdownComponent implements ControlValueAccessor {
  @Input() id?: string
  @Input() texts?: DropdownTexts
  @Input() loop?: boolean = false
  @Input() display = 'label'
  @Input() useValue = 'value'
  @Input() label?: string
  @Input() options: DropdownOption[] = []
  @Input() valid?: boolean
  @Input() invalid?: boolean
  @Input() compareWith?: CompareWith
  @Input() searchFilter?: SearchFilter
  @Input() fixedPlacement?: DropdownPlacements

  //
  @Input() set multiSelect(value: string | boolean) {
    this._multiSelect = this.convertToBoolean(value)
  }
  get multiSelect(): boolean {
    return this._multiSelect
  }
  private _multiSelect = false

  //
  @Input() set searchable(value: string | boolean) {
    this._searchable = this.convertToBoolean(value)
  }
  get searchable(): boolean {
    return this._searchable
  }
  private _searchable = false

  //
  @Input() set value(newValue: any) {
    if (!newValue || !this.options || newValue === this._value) return

    if (Array.isArray(newValue)) {
      this._value = this.options.filter((o) =>
        newValue.includes(o[this.useValue])
      )
    } else this._value = this.options.find((o) => o[this.useValue] === newValue)

    this.texts = {
      ...this.texts,
      select: selectionText(this._value, this.display, this.texts),
    }
  }
  get value(): any {
    let value = this._value

    if (Array.isArray(this._value)) {
      value = this._value.map((o) => o[this.useValue])
    } else {
      value = this._value && this._value[this.useValue]
    }

    return value
  }
  private _value: DropdownOption | DropdownOption[] | undefined

  //
  get selectedOption() {
    return this._value
  }

  onChangeFn?: (value: unknown) => void
  onTouchedFn?: () => void

  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>()
  @Output() readonly touched: EventEmitter<boolean> =
    new EventEmitter<boolean>()

  @ContentChild(NggDropdownOptionDirective)
  customOption?: NggDropdownOptionDirective

  @ContentChild(NggDropdownButtonDirective)
  customButton?: NggDropdownButtonDirective

  @ViewChild('gdsDropdown', { static: false }) gdsDropdown?: ElementRef

  public onValueChange: (event: Event) => void = (event) => {
    const target = event.target as GdsDropdown<DropdownOption>
    this._value = target.value

    this.texts = {
      ...this.texts,
      select: selectionText(this._value, this.display, this.texts),
    }

    this.onChangeFn?.(this.value)
    this.valueChange.emit(this.value)
  }

  get control(): NgControl | undefined {
    return this.injector.get(NgControl)
  }

  constructor(@Inject(Injector) private injector: Injector) {
    registerTransitionalStyles()
  }

  ngAfterViewInit(): void {
    if (!this._value) {
      if (this.multiSelect)
        this._value = this.options?.filter((o) => o.selected === true)
      else this._value = this.options?.find((o) => o.selected === true)
    }

    this.texts = {
      close: this.texts?.close ?? 'Close',
      optionsDescription: this.texts?.optionsDescription ?? 'Options',
      placeholder: this.texts?.placeholder ?? 'Select',
      searchPlaceholder: this.texts?.searchPlaceholder ?? 'Search',
      selected: this.texts?.selected ?? 'selected',
      select: selectionText(this._value, this.display, this.texts),
    }
  }

  writeValue(value: any): void {
    this.value = value
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

  private convertToBoolean(value: string | boolean): boolean {
    return (
      value === '' || value === 'true' || value.toString() === 'true' || false
    )
  }
}
