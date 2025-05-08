import {
  AfterViewInit,
  ChangeDetectorRef,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core'
import {
  AbstractControl,
  ControlValueAccessor,
  NgControl,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms'
import {
  TRANSLOCO_SCOPE,
  TranslocoScope,
  TranslocoService,
} from '@jsverse/transloco'
import { Observable, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

import type { InputmaskOptions } from '@sebgroup/green-angular/src/v-angular/input-mask'

import {
  DateCharacters,
  getFormatDateMask,
  getLocaleDateMask,
  getLocaleDateString,
  setDateFormatCharacters,
} from '../models/dates'

@Directive() // Required with Angular ivy compiler
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export abstract class DateControlValueAccessorComponent
  implements
    AfterViewInit,
    OnInit,
    OnChanges,
    OnDestroy,
    ControlValueAccessor,
    Validator
{
  /** Custom template for displaying the content of the label.
   * Specified by nesting an `<ng-template #labelTpl>Custom Label</ng-template>`.
   */
  @ContentChild('labelTpl', { read: TemplateRef })
  labelContentTpl?: TemplateRef<undefined>

  /** Custom template for displaying value when the input is locked.
   * Specified by nesting an `<ng-template #lockedTpl let-selectedDate>Custom locked content date: {{ selectedDate }}</ng-template>`.
   */
  @ContentChild('lockedTpl', { read: TemplateRef })
  lockedTpl?: TemplateRef<undefined>

  /** Reference to the native child input element. */
  @ViewChild('input', { read: ElementRef }) inputRef?: ElementRef

  /* ATTRIBUTES */

  /** Id of the host element and is accessible by the children, automatically generated if not provided. */
  @HostBinding('attr.id') @Input() id = (window as any).ngv?.nextId(
    'datepicker',
  )
  /** Name of the child input element. */
  @Input() name?: string
  /** Label of the child input element using the default template.
   * Can be overwritten by specifying an `<ng-template #labelTpl>Custom Label</ng-template>`.
   */
  @Input() label?: string
  /** Text shown before input has a written value. Default current date format by locale of transloco */
  @Input() set placeholder(value: string | undefined) {
    this._placeholder = value
      ? setDateFormatCharacters(value, this.dateCharacters)
      : value
    this.defaultPlaceholder = value
      ? setDateFormatCharacters(value, this.dateCharacters)
      : value
  }
  get placeholder() {
    return this._placeholder
  }
  private _placeholder: string | undefined
  defaultPlaceholder?: string
  /** What characters to use in date placeholder, e.g. {year: 'Y', month: 'M', day: 'D'} */
  @Input() dateCharacters?: DateCharacters
  /** Role of the child input element. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles */
  @Input() role?: string
  /** Value of the child input element. Mostly used in conjunction with radio and checkboxes. */
  @Input() value: any
  /** An error string to be shown under invalid inputs. Overwrites any form errors. */
  @Input() error?: string
  /** A list of errors string to be shown under invalid inputs. Overwrites any form errors. */
  @Input() errorList?: string[]
  /** Adds an icon before each error message. */
  @Input() withErrorIcon?: boolean = false
  /** Description of the child input element. Both visibly and as `aria-label`. */
  @Input() description?: string
  /** If set to true, the browser will try to automatically set focus to the child input element. */
  @Input() autofocus = false
  /** Default value of the child input element. */
  @Input() defaultValue?: any
  /** If passed, the component will listen for updates and will reset its value. */
  @Input() reset?: Observable<any>
  /** Adds (Optional) to input label. */
  @Input() optional?: boolean | null | undefined
  /**
   * Settings for input mask for dates based on locale
   * @see {@link getLocaleDateMask} use this tool to generate settings for `dateInputMask`
   */
  @Input() set dateInputMask(dateMask: InputmaskOptions<Date>) {
    // Hide input field
    this.showInputDateSrc.next(false)
    this.cdr.detectChanges()
    this._dateInputMask = dateMask

    // Show input field to reload input-mask settings upon update
    setTimeout(() => {
      this.showInputDateSrc.next(true)
      this.cdr.detectChanges()
    }, 200)
  }
  get dateInputMask(): InputmaskOptions<Date> {
    return this._dateInputMask
  }
  private _dateInputMask!: InputmaskOptions<Date>

  private _locked: boolean | null | undefined = undefined
  /** Hides the input borders and displays current value as a text. */
  @Input() set locked(value: boolean | null | undefined) {
    this._locked = value
    this.cdr.detectChanges()
  }
  get locked(): boolean | null | undefined {
    return this._locked
  }
  /** If set to true, using a controls disabled state will display input as locked. */
  @Input() displayDisabledAsLocked?: boolean | null | undefined

  /* STATES */

  private _required: boolean | null | undefined = undefined
  /** Override the required flag of the component. */
  @Input() set required(value: boolean | null | undefined) {
    this._required = value
  }
  /** Child input element is considered required and changes default label template accordingly. */
  get required(): boolean | null | undefined {
    // if required is set => return required
    if (this._required !== undefined) return this._required

    // if required can be determined from the control => return control.required
    if (this.ngControl?.control?.validator) {
      const validator = this.ngControl?.control?.validator(
        {} as AbstractControl,
      )
      return validator && validator.required
    }

    return
  }

  private _invalid: boolean | undefined = undefined
  /** Override the invalid state of the component. */
  @Input() set invalid(value: boolean) {
    this._invalid = value
  }
  /** The component has the invalid state, usually decorating the elements red and shows the first error. */
  get invalid(): boolean {
    if (this._invalid === true || this._invalid === false) return this._invalid
    return (
      !!this.ngControl?.control?.invalid && this.ngControl?.control?.touched
    )
  }

  private _valid: boolean | undefined = undefined
  /** Override the valid state of the component. */
  @Input() set valid(value: boolean) {
    this._valid = value
  }
  /** The component has the valid state, usually decorating the elements green. */
  get valid(): boolean {
    if (this._valid === true || this._valid === false) return this._valid
    return !!this.ngControl?.control?.valid && this.ngControl?.control?.touched
  }

  /** The component has the focused state, updated by the child input element's focus state. */
  @Input() focused = false
  /** The component has the disabled state, usually muting the colors and removes interaction. */
  @Input() disabled = false
  /** Locale for using correct language in the datepicker. */
  @Input() locale: string | undefined
  /** Date format used for placeholder and input mask. Should be in lower case {year: 'y', month: 'm', day: 'd'} */
  @Input() dateFormat: string | undefined
  /** Date locale used for placeholder and input mask. */
  @Input() dateLocale: string | undefined

  /** Toggler for showing or hiding the input field */
  protected showInputDateSrc = new Subject<boolean>()

  /* TRIGGERS */

  /** Emits focus events triggered by the child elements. */
  @Output() readonly ngvFocus = new EventEmitter()
  /** Emits focus events triggered by the child elements. */
  @Output() readonly ngvBlur = new EventEmitter()

  /* VALUE HANDLERS */
  /** @internal */
  protected onChange = (_: any): void => {} // eslint-disable-line @typescript-eslint/no-empty-function
  /** @internal */
  protected onTouched = (): void => {} // eslint-disable-line @typescript-eslint/no-empty-function
  /** @internal */
  protected onValidatorChange: () => void = () => null
  private _state: any = null

  /* OTHER VARIABLES */
  scope: string | undefined
  /** @internal */
  // warningIcon = faTriangleExclamation;

  /* LIFE CYCLE VARIABLES */
  private _onDestroy$ = new Subject<true>()

  /**
   * Creates a new BaseControlValueAccessorComponent.
   * @param ngControl optional FormControl provided when component is used in a form, through dependency injection.
   */
  constructor(
    @Self() @Optional() public ngControl: NgControl,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    protected elementRef: ElementRef,
    protected cdr: ChangeDetectorRef,
    private _transloco: TranslocoService,
  ) {
    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      this.ngControl.valueAccessor = this
    }

    if (this.translocoScope) this.scope = this.translocoScope.toString()
  }

  static parseDateLike(value: any): null | undefined | string {
    try {
      // if value is type of string,
      if (value && typeof value === 'string') value = new Date(value)
      switch (true) {
        // remove instances where the value will not correctly be parsed to a date string
        case value == null:
        case value?.toString() === 'Invalid Date':
          return null
        // if value-as-date is a valid date object, parse the value to YYYY-MM-DD format
        case typeof value?.getMonth === 'function':
          return new Intl.DateTimeFormat('sv-SE').format(value)
        default:
          return value as string
      }
    } catch (_e) {
      return
    }
  }

  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnInit(): void {
    if (this.ngControl && this.ngControl.control) {
      this.ngControl.control.setValidators(
        Validators.compose([this.ngControl.control.validator, this.validate]),
      )
    }

    this._transloco.langChanges$.pipe(takeUntil(this._onDestroy$)).subscribe({
      next: () => {
        if (!this.locale && !this.dateFormat) {
          return this.updatePlaceholderAndMask()
        }
      },
    })

    // if reset observable has been passed, subscribe after updates
    this.reset?.pipe(takeUntil(this._onDestroy$)).subscribe({
      next: () => {
        // reset value of controller
        this.updateValue('')
      },
    })
  }

  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngAfterViewInit(): void {
    // if default value is set, then don't alter it. Otherwise, use
    // current value of controller after initiation as default value
    this.defaultValue = this.defaultValue ?? this.ngControl?.value
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.defaultValue?.currentValue) {
      this.updateValue(changes.defaultValue.currentValue)
    }

    if (
      changes.locale?.currentValue &&
      !this.dateFormat &&
      !changes.dateFormat?.currentValue
    ) {
      this.updatePlaceholderAndMask()
    }

    if (changes.dateFormat?.currentValue) {
      this.updateFormat()
    }

    if (changes.dateCharacters?.currentValue) {
      if (this.dateFormat) {
        this.updateFormat()
      } else {
        this.updatePlaceholderAndMask()
      }
    }

    if (!!changes.dateLocale?.currentValue && !this.dateFormat) {
      this.updatePlaceholderAndMask()
    }
  }

  ngOnDestroy(): void {
    this._onDestroy$.next(true)
    this._onDestroy$.complete()
  }

  /** @internal */
  onFocus(event: Event) {
    event.stopPropagation
      ? event.stopPropagation()
      : (event.cancelBubble = true)
    this.focused = true
    this.ngvFocus.emit(event)
  }

  /** @internal */
  onBlur(event: Event) {
    event.stopPropagation
      ? event.stopPropagation()
      : (event.cancelBubble = true)
    this.onTouched()
    this.focused = false
    this.ngvBlur.emit(event)
  }

  detectChanges(): void {
    this.cdr.detectChanges()
  }

  /** Sets the focus on the actual input element. */
  setFocus() {
    if (this.inputRef) this.inputRef.nativeElement.focus()
  }

  /**
   * @internal
   * Update placeholder  and input mask to match locale.
   * Order if choice for locale:
   * 1. dateLocale - Used for specifying which locale to be used for formatting date
   * 2. locale - Unless dateLocale is not provided, use locale form current translation
   * 3. transloco.getActiveLang - as last resort, get active language form trnasloco
   * If locale is undefined, transloco.activeLang will be used instead.
   */
  updatePlaceholderAndMask() {
    const locale =
      this.dateLocale ?? this.locale ?? this._transloco.getActiveLang()

    this._placeholder = this.defaultPlaceholder
      ? setDateFormatCharacters(this.defaultPlaceholder, this.dateCharacters)
      : setDateFormatCharacters(
          getLocaleDateString(locale).toLowerCase(),
          this.dateCharacters,
        )
    this.dateInputMask = getLocaleDateMask(this.dateCharacters, locale)
  }

  updateFormat() {
    if (this.dateFormat) {
      this._placeholder = this.defaultPlaceholder
        ? setDateFormatCharacters(this.defaultPlaceholder, this.dateCharacters)
        : setDateFormatCharacters(
            this.dateFormat.toLowerCase(),
            this.dateCharacters,
          )
      this.dateInputMask = getFormatDateMask(
        this.dateFormat,
        this.dateCharacters,
      )
    }
  }

  // ----------------------------------------------------------------------------
  // CONTROL VALUE ACCESSOR
  // ----------------------------------------------------------------------------

  /** Internal state/value that the native input element has. */
  get state() {
    return this._state
  }

  /**
   * Internal state/value that the native input element has.
   */
  set state(value) {
    this._state = value
  }

  /** Writes a new value to the child input element. */
  writeValue(value: any): void {
    this.state = value
    this.onChange(this.state)
  }

  /** Registers a callback function that is called when the child input element's value changes. */
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = (value) => {
      // ensure emitted value is a string | null | undefined
      const emitValue = DateControlValueAccessorComponent.parseDateLike(value)
      fn(emitValue)
    }
  }

  /** Registers a callback function that is called when the child input element triggers on blur. */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  /** Function that is called by the forms API when the control status changes to or from 'DISABLED'. */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled

    // if displayDisabledAsLocked is enabled - update locked state based on disabled state
    if (this.displayDisabledAsLocked) {
      this.locked = isDisabled
    }
  }

  // ----------------------------------------------------------------------------
  // VALIDATORS
  // ----------------------------------------------------------------------------

  /** Method that performs synchronous validation against the provided control. Used for internal validation. */
  validate(_control: AbstractControl): { [name: string]: any } | null {
    return null
  }

  /** Registers a callback function to call when the validator inputs change. */
  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn
  }

  // ----------------------------------------------------------------------------
  // HELPERS
  // ----------------------------------------------------------------------------

  /** Returns the first entry in an error object. */
  get firstError(): { code: string; params: Record<string, any> } | null {
    const errors: ValidationErrors | null = this.ngControl.errors
    if (!errors) return null
    const code = Object.keys(errors)[0]
    return { code, params: errors[code] }
  }

  private updateValue(value = this.defaultValue) {
    this.state = value
    this.onChange(this.state)
    this.cdr.detectChanges()
  }
}
