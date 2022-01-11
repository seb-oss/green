import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  ViewChild,
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
} from '@sebgroup/extract'

@Component({
  selector: 'ngg-dropdown',
  template: `
    <div>
      <button
        #togglerRef
        [attr.aria-haspopup]="toggler?.attributes?.['aria-haspopup']"
        [attr.aria-expanded]="toggler?.attributes?.['aria-expanded']"
        [attr.aria-owns]="toggler?.attributes?.['aria-owns']"
        [tabindex]="toggler?.attributes?.tabIndex"
        [style]="toggler?.attributes?.style"
        [class]="toggler?.classes"
        (click)="handler?.toggle()"
      >
        {{ dropdown?.text }}
      </button>
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
          class="close m-4 m-sm-2 d-block d-sm-none"
          (click)="handler?.close()"
        >
          <span class="sr-only">Close</span>
        </button>
        <ul role="listbox">
          <li
            *ngFor="let option of dropdown?.options"
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
  @Input() loop?: boolean
  @Input() options: DropdownOption[] = []

  @ViewChild('togglerRef') public togglerRef:
    | ElementRef<HTMLElement>
    | undefined

  @ViewChild('listboxRef') public listboxRef:
    | ElementRef<HTMLElement>
    | undefined

  value: any = undefined
  onChangeFn: any
  onTouchedFn: any

  dropdown?: AbstractDropdown
  handler?: DropdownHandler
  toggler?: Partial<ElementProps>
  listbox?: Partial<ElementProps>

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
          this.cd.detectChanges()
        }
      )

      this.selectFromValue(this.value)
    }
  }

  ngOnDestroy(): void {
    this.handler?.destroy()
  }

  ngOnChanges(): void {
    if (this.handler && this.dropdown) {
      this.handler.update(this.props)
    }
  }

  writeValue(obj: any): void {
    this.value = obj
    this.selectFromValue(this.value)
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn
  }

  select(option: ExtendedDropdownOption) {
    this.handler?.select(option)
    this.onChangeFn(option.value)
    this.onTouchedFn()
  }

  private get props(): DropdownArgs {
    return {
      id: this.id,
      text: this.text,
      options: this.options,
      loop: this.loop,
    }
  }

  private selectFromValue(value: any) {
    if (this.handler && value !== undefined) {
      const option = this.handler.dropdown.options.find(
        (option) => option.value === value
      )
      if (option) this.handler?.select(option)
    }
  }
}
