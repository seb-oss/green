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
  CompareWith,
  DropdownOption,
  DropdownOptionElement,
  DropdownTexts,
  SearchFilter,
} from '@sebgroup/extract'
import { NggDropdownOptionDirective } from './dropdown-option.directive'
import { NggDropdownButtonDirective } from './dropdown-button.directive'

import { registerTransitionalStyles } from '@sebgroup/green-core'

@Component({
  selector: 'ngg-dropdown',
  templateUrl: 'dropdown.component.html',
  // providers: [
  //   {
  //     provide: NG_VALUE_ACCESSOR,
  //     useExisting: NggDropdownComponent,
  //     multi: true,
  //   },
  // ],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NggDropdownComponent {
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
    //this.handler?.selectByValue(newValue)
    this._value = newValue
  }
  get value(): any {
    return this._value
  }
  private _value: any

  // get selectedOption() {
  //   //return this.handler?.dropdown.options.find((o) => o.selected)
  // }

  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>()
  @Output() readonly touched: EventEmitter<boolean> =
    new EventEmitter<boolean>()

  @ContentChild(NggDropdownOptionDirective)
  customOption?: NggDropdownOptionDirective

  @ContentChild(NggDropdownButtonDirective)
  customButton?: NggDropdownButtonDirective

  public onValueChange: (value: unknown) => void = (value) => {
    this.onChangeFn?.(value)
    this.valueChange.emit(((value as any).target as any)?.value)
  }

  onChangeFn?: (value: unknown) => void
  onTouchedFn?: () => void

  // get control(): NgControl | undefined {
  //   return this.injector.get(NgControl)
  // }

  constructor() {
    registerTransitionalStyles()
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
