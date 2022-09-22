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
  ContentChild,
} from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import {
  createDropdown,
  AbstractDropdown,
  DropdownHandler,
  DropdownOption,
  DropdownOptionElement,
  ElementProps,
  DropdownArgs,
  dropdownValues,
  DropdownTexts,
  CompareWith,
  SearchFilter,
} from '@sebgroup/extract'
import { NggDropdownOptionDirective } from './dropdown-option.directive'

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
          label ? toggler?.attributes?.id + '_label' : null
        "
        [attr.aria-describedby]="
          formInfo?.textContent && (formInfo?.textContent?.length ?? 0 > 0)
            ? toggler?.attributes?.id + '_info'
            : null
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
        <span>{{
          dropdown?.texts?.select || dropdown?.texts?.placeholder
        }}</span>
      </button>
      <span
        class="form-info"
        #formInfo
        [attr.id]="toggler?.attributes?.id + '_info'"
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
          <span class="sr-only">{{ dropdown?.texts?.close }}</span>
        </button>
        <ul role="listbox" *ngIf="!dropdown?.isMultiSelect">
          <ng-container *ngTemplateOutlet="searchInput"></ng-container>
          <li
            *ngFor="
              let option of dropdown?.options;
              let index = index;
              trackBy: trackByKey
            "
            [id]="option.attributes.id"
            [attr.role]="option.attributes.role"
            [attr.aria-selected]="option.attributes['aria-selected']"
            [style]="option.attributes.style"
            [class]="option.classes"
            (click)="handler?.select(option)"
          >
            <ng-container
              *ngTemplateOutlet="
                customOption?.templateRef
                  ? customOption!.templateRef
                  : defaultOption;
                context: { option: option, index: index }
              "
            ></ng-container>
          </li>
        </ul>
        <div *ngIf="dropdown?.isMultiSelect" class="sg-fieldset-container">
          <ng-container *ngTemplateOutlet="searchInput"></ng-container>
          <fieldset
            #fieldsetRef
            [attr.aria-describedby]="fieldset?.attributes?.id"
            role="listbox"
            tabIndex="-1"
            aria-multiselectable="true"
          >
            <legend class="sr-only" [id]="fieldset?.attributes?.id">
              Options
            </legend>
            <label
              class="form-control"
              [attr.role]="option.attributes.role"
              [id]="option.attributes.id"
              [attr.aria-selected]="option.attributes['aria-selected']"
              [class]="option.classes"
              *ngFor="
                let option of dropdown?.options;
                let index = index;
                trackBy: trackByKey
              "
            >
              <input
                type="checkbox"
                (change)="handler?.select(option, false)"
                [checked]="option.selected"
                tabIndex="-1"
              />
              <ng-container
                *ngTemplateOutlet="
                  customOption?.templateRef
                    ? customOption!.templateRef
                    : defaultOption;
                  context: { option: option, index: index }
                "
              ></ng-container>
              <i></i>
            </label>
          </fieldset>
        </div>
      </div>
    </div>

    <ng-template #defaultOption let-option="option">
      {{ option[dropdown!.display] }}
    </ng-template>

    <ng-template #searchInput>
      <input
        *ngIf="dropdown?.isSearchable"
        type="search"
        (input)="search($event)"
        placeholder="{{ dropdown?.texts?.searchPlaceholder }}"
        class="rounded-0 rounded-top border-0 border-bottom border-info"
      />
    </ng-template>
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
    this.setSelectionByValue(newValue)
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
  toggler?: Partial<ElementProps> = dropdownValues.elements?.toggler
  listbox?: Partial<ElementProps> = dropdownValues.elements?.listbox
  fieldset?: Partial<ElementProps> = dropdownValues.elements?.fieldset

  constructor(private cd: ChangeDetectorRef) {}

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
  }

  registerOnChange(fn: () => unknown): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn
  }

  trackByKey = (index: number, option: DropdownOptionElement): string => {
    return this.dropdown?.display
      ? (option[this.dropdown.display] as string)
      : option.label ?? JSON.stringify(option.value)
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

  private updateValue(option: any) {
    this._value = option
    this.valueChange.emit(option)
    this.onChangeFn?.(option)
  }

  private setSelectionByValue(value: any) {
    if (!this.dropdown?.isMultiSelect) {
      if (this._value !== value && value !== undefined) {
        this._value = value
        const valueKey = <string>this.handler?.dropdown.useValue
        const selected = this.handler?.dropdown?.options.find((option) =>
          this.dropdown?.compareWith(option[valueKey], value)
        )
        if (selected) this.handler?.select(selected)
      }
    }
  }

  private convertToBoolean(value: string | boolean): boolean {
    return (
      value === '' || value === 'true' || value.toString() === 'true' || false
    )
  }
}
