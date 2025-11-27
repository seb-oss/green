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
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core'
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
} from '@angular/forms'

import type { GdsOption } from '@sebgroup/green-core/components/dropdown/index.js'

import { GdsDropdown } from '@sebgroup/green-core/components/dropdown/dropdown.component.js'
import * as DropdownTransStyles from '@sebgroup/green-core/components/dropdown/dropdown.trans.styles.js'
import { NggDropdownButtonDirective } from './dropdown-button.directive'
import { NggDropdownOptionDirective } from './dropdown-option.directive'

export type CompareWith<T = any> = (o1: T, o2: T) => boolean
export type SearchFilter<T = any> = (search: string, value: T) => boolean
export type DropdownPlacements = 'bottom-start' | 'top-start'
export interface DropdownTexts {
  select?: string
  selected?: string
  placeholder?: string
}
export interface DropdownOption<T = any> {
  label?: string
  value?: T
  selected?: boolean
  heading?: boolean
  [key: string]: any
}

/**
 * @deprecated
 * NggDropdown is deprecated in favor of GdsDropdown found in the Core package
 * https://storybook.seb.io/latest/core/?path=/docs/components-dropdown--docs
 */
@Component({
    selector: 'ngg-dropdown',
    templateUrl: 'dropdown.component.html',
    styleUrls: ['dropdown.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: NggDropdownComponent,
            multi: true,
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class NggDropdownComponent
  implements ControlValueAccessor, OnInit, OnDestroy, AfterViewInit
{
  errorMessage?: string
  errorMessageObserver?: MutationObserver
  @Input() id?: string
  @Input() loop?: boolean = false
  @Input() display = 'label'
  @Input() useValue = 'value'
  @Input() label?: string
  @Input() valid?: boolean
  @Input() invalid?: boolean
  @Input() compareWith?: CompareWith
  @Input() searchFilter?: SearchFilter
  @Input() syncPopoverWidth?: boolean
  @Input() size?: 'small' | 'medium'
  @Input() hideLabel?: boolean
  @Input() maxHeight?: number = 500
  @Input() disableMobileStyles?: boolean

  @Input() set options(value: DropdownOption[] | undefined) {
    this._options = value
    this.texts = {
      ...this.texts,
      select: this.displayTextByValue(this._value),
    }
  }
  get options(): DropdownOption[] | undefined {
    return this._options
  }
  private _options: DropdownOption[] | undefined

  @Input() set texts(texts: DropdownTexts | undefined) {
    this._texts = {
      ...(texts ? texts : {}),
      select: this.textToDisplay(texts, this._value),
    }
  }

  get texts(): DropdownTexts | undefined {
    return this._texts
  }
  private _texts: DropdownTexts | undefined

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
    if (!this.options) return

    this._value = newValue

    this.texts = {
      ...this.texts,
      select: this.displayTextByValue(this._value),
    }
  }
  get value(): any {
    return this._value
  }
  private _value: DropdownOption | DropdownOption[] | undefined

  //
  get selectedOption() {
    return Array.isArray(this.value)
      ? this.value.map((v: any) => this.optionByValue(v))
      : this.optionByValue(this.value)
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

  @ViewChild('formInfo', { static: false }) formInfoContent?: ElementRef

  @ViewChild('gdsDropdown', { static: false }) gdsDropdown?: ElementRef

  public onValueChange: (event: Event) => void = (event) => {
    const target = event.target as GdsDropdown<DropdownOption>
    this._value = target.value

    this.texts = {
      ...this.texts,
      select: this.displayTextByValue(this._value),
    }

    this.onChangeFn?.(this.value)
    this.valueChange.emit(this.value)

    this._cdr.detectChanges()
  }

  get control(): NgControl | undefined {
    return this.injector.get(NgControl)
  }

  constructor(
    @Inject(Injector) private injector: Injector,
    private _cdr: ChangeDetectorRef,
  ) {
    GdsDropdown.define()
    DropdownTransStyles.register()
  }

  ngOnInit(): void {
    if (!this._value) {
      if (this.multiSelect)
        this._value = this.options
          ?.filter((o) => o.selected === true)
          ?.map((o) => o[this.useValue])
      else
        this._value = this.options?.find((o) => o.selected === true)?.[
          this.useValue
        ]

      this.texts = {
        ...this.texts,
        select: this.displayTextByValue(this._value),
      }
    }

    this.texts = {
      placeholder: this.texts?.placeholder ?? 'Select',
      selected: this.texts?.selected ?? 'selected',
      select: this.displayTextByValue(this._value),
    }
  }

  ngAfterViewInit(): void {
    if (this.formInfoContent) {
      // Example: observe changes to the formInfoContent element
      this.errorMessageObserver = new MutationObserver(() => {
        this.errorMessage = this.formInfoContent?.nativeElement.textContent
        this._cdr.detectChanges()
      })
      this.errorMessageObserver.observe(this.formInfoContent.nativeElement, {
        childList: true,
        subtree: true,
      })
    }
  }

  ngOnDestroy(): void {
    if (this.errorMessageObserver) {
      this.errorMessageObserver.disconnect()
    }
  }

  writeValue(value: any): void {
    this.value = value
    this._cdr.detectChanges()
  }

  registerOnChange(fn: () => unknown): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn
  }

  // These adapter functions are used to maintain backwards compatibility with the old interface
  compareWithAdapter = (o1: any, o2: any) => {
    const compareFn = this.compareWith || ((a, b) => a === b)
    return compareFn(o1, o2)
  }
  searchFilterAdapter = (q: string, o: GdsOption) => {
    if (this.searchFilter) return this.searchFilter(q, o.value)
    else
      return ((q: string, o: GdsOption) =>
        o.innerHTML.toLowerCase().includes(q.toLowerCase()))(q, o)
  }

  private convertToBoolean(value: string | boolean): boolean {
    return (
      value === '' || value === 'true' || value.toString() === 'true' || false
    )
  }

  private optionByValue = (value: any) => {
    return this.options?.find((o) => o[this.useValue] === value)
  }

  private displayTextByValue = (value: any) => {
    return this.textToDisplay(this.texts, value)
  }

  private textToDisplay = (
    dropdownTexts: DropdownTexts | undefined,
    value: any,
  ): string => {
    if (!Array.isArray(value))
      return (
        this.optionByValue(value)?.[this.display] ||
        (dropdownTexts?.placeholder ?? 'Select')
      )

    const displayValues = value.map(
      (v) => this.optionByValue(v)?.[this.display],
    )
    return displayValues?.length > 2
      ? `${displayValues.length} ${dropdownTexts?.selected} `
      : displayValues?.join(', ') || (dropdownTexts?.placeholder ?? 'Select')
  }
}
