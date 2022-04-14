import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
  createDropdown,
  AbstractDropdown,
  DropdownHandler,
  DropdownOption,
  ExtendedDropdownOption,
  ElementProps,
  DropdownArgs,
  dropdownValues,
} from '@sebgroup/extract'

@Component({
  selector: 'ngg-dropdown',
  template: `
    <div>
      <span
        class="label"
        *ngIf="label"
        [id]="toggler?.attributes?.id + '_label'"
        >{{ label }}</span
      >
      <button
        [attr.aria-labelledby]="
          label ? toggler?.attributes?.id + '_info' : null
        "
        [attr.aria-describedby]="
          label ? toggler?.attributes?.id + '_info' : null
        "
        type="button"
        #togglerRef
        [id]="toggler?.attributes?.id"
        [attr.aria-haspopup]="toggler?.attributes?.['aria-haspopup']"
        [attr.aria-expanded]="toggler?.attributes?.['aria-expanded']"
        [attr.aria-owns]="toggler?.attributes?.['aria-owns']"
        [tabindex]="toggler?.attributes?.tabIndex"
        [style]="toggler?.attributes?.style"
        [class]="toggler?.classes"
        (click)="handler?.toggle()"
        [class.is-valid]="valid"
        [class.is-invalid]="invalid"
      >
        <span>{{ dropdown?.text }}</span>
      </button>
      <span class="form-info" [attr.id]="toggler?.attributes?.id + '_info'"
        ><ng-content select="[data-form-info]"></ng-content
      ></span>
      <div
        #listboxRef
        [id]="listbox?.attributes?.id"
        [attr.role]="listbox?.attributes?.role"
        [attr.aria-activedescendant]="
          listbox?.attributes?.['aria-activedescendant']
        "
        [tabindex]="listbox?.attributes?.tabIndex"
        [style]="listbox?.attributes?.style"
        [class]="listbox?.classes"
      >
        <button
          type="button"
          class="close m-4 m-sm-2 d-block d-sm-none"
          (click)="handler?.close()"
        >
          <span class="sr-only">Close</span>
        </button>
        <ul role="listbox">
          <li
            *ngFor="let option of dropdown?.options; trackBy: trackByKey"
            [id]="option.attributes.id"
            [attr.role]="option.attributes.role"
            [attr.aria-selected]="option.attributes['aria-selected']"
            [style]="option.attributes.style"
            [class]="option.classes"
            (click)="select(option)"
          >
            {{ option.key }}
          </li>
        </ul>
      </div>
    </div>
  `,
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
  @Input() text?: string
  @Input() loop?: boolean = false
  @Input() label?: string
  @Input() options: DropdownOption[] = []
  @Input() valid?: boolean
  @Input() invalid?: boolean

  @Input()
  get value(): any {
    return this._value
  }
  set value(newValue: any) {
    if (newValue !== this._value) {
      if (this.options) {
        this.setSelectionByValue(newValue)
      }
      this._value = newValue
    }
  }
  private _value: any

  @Output() readonly valueChange: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild('togglerRef') public togglerRef:
    | ElementRef<HTMLElement>
    | undefined

  @ViewChild('listboxRef') public listboxRef:
    | ElementRef<HTMLElement>
    | undefined

  onChangeFn?: (value: any) => void
  onTouchedFn?: any

  dropdown?: AbstractDropdown
  handler?: DropdownHandler
  toggler?: Partial<ElementProps> = dropdownValues.elements?.toggler
  listbox?: Partial<ElementProps> = dropdownValues.elements?.listbox

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (this.togglerRef?.nativeElement && this.listboxRef?.nativeElement) {
      this.handler = createDropdown(
        this.props,
        this.togglerRef.nativeElement,
        this.listboxRef.nativeElement,
        (dropdown) => {
          this.dropdown = dropdown
          this.toggler = dropdown.elements.toggler
          this.listbox = dropdown.elements.listbox

          const selected = this.dropdown.options.find(
            (option) => option.selected
          )
          if (this._value !== selected?.value) {
            this._value = selected?.value
          }
          this.cd.detectChanges()
        }
      )

      this.setSelectionByValue(this.value)
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
      this.setSelectionByValue(this.value)
    }
  }

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn
  }

  select(option: ExtendedDropdownOption) {
    console.log(option)
    this.handler?.select(option)
    this._value = option.value
    this.valueChange.emit(option.value)
    this.onChangeFn && this.onChangeFn(option.value)
    this.onTouchedFn && this.onTouchedFn()
  }

  trackByKey = (index: number, option: ExtendedDropdownOption): string => {
    return option.key
  }

  private get props(): DropdownArgs {
    return {
      id: this.id,
      text: this.text,
      options: this.options,
      loop: this.loop,
    }
  }

  private setSelectionByValue(value: any) {
    if (this.handler && value !== undefined) {
      const option = this.handler.dropdown.options.find(
        (option) => option.value === value
      )
      if (option) this.handler?.select(option)
    }
  }
}
