import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Injectable,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  Self,
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
import { TRANSLOCO_SCOPE, TranslocoScope } from '@jsverse/transloco'
import { Observable, Subject } from 'rxjs'
import { takeUntil } from 'rxjs/operators'

@Injectable() // Workaround for Compodoc https://github.com/compodoc/compodoc/issues/984
@Component({
    template: '',
    standalone: false
}) // Required with Angular ivy compiler
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class NggvBaseControlValueAccessorComponent
  implements AfterViewInit, OnInit, OnDestroy, ControlValueAccessor, Validator
{
  /** Custom template for displaying the content of the label.
   * Specified by nesting an `<ng-template #labelTpl>Custom Label</ng-template>`.
   */
  @ContentChild('labelTpl', { read: TemplateRef })
  labelContentTpl?: TemplateRef<undefined>

  /** Custom template for displaying value when the input is locked.
   * Specified by nesting an `<ng-template #lockedTpl let-state>Custom locked content state: {{ state }}</ng-template>`.
   */
  @ContentChild('lockedTpl', { read: TemplateRef })
  lockedTpl?: TemplateRef<undefined>

  /** Reference to the native child input element. */
  @ViewChild('input', { read: ElementRef }) inputRef?: ElementRef

  /* ATTRIBUTES */

  /** Id of the host element and is accessible by the children, automatically generated if not provided. */
  @HostBinding('attr.id') @Input() id = (window as any).nggv?.nextId()
  /** Name of the child input element. */
  @Input() name?: string
  /**
   * Label of the child input element using the default template.
   * Can be overwritten by specifying an `<ng-template #labelTpl>Custom Label</ng-template>`.
   */
  @Input() label?: string
  /** Role of the child input element. https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles */
  @Input() role?: string
  /** Value of the child input element. Mostly used in conjunction with radio and checkboxes. */
  @Input() value: any
  /** An error string to be shown under invalid inputs. Overwrites any form errors. */
  @Input() error?: string
  /** @deprecated Only one error should be shown under each field. */
  @Input() errorList?: string[]
  /** @deprecated Icon is always added before error. */
  @Input() withErrorIcon?: boolean = false
  /** Description of the child input element. Both visibly and as `aria-label`. */
  @Input() description?: string
  /** Determines if the label used to display the "description" text will be rendered to DOM */
  @Input() descriptionIsVisible = true
  /** If set to true, the browser will try to automatically set focus to the child input element. */
  @Input() autofocus = false
  /** Deafult value of the child input element. Used when resetting child element. */
  @Input() defaultValue?: any
  /** If passed, the component will listen for updates and will reset its value. */
  @Input() reset?: Observable<any>
  /** Adds (Optional) to input label. */
  @Input() optional?: boolean | null | undefined

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
      // returns true for any error that starts with required
      return Object.keys(validator ?? {}).some((key) =>
        key.startsWith('required'),
      )
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

  private _disabled: boolean | undefined = undefined
  /** Override the disabled state of the component. */
  @Input() set disabled(value: boolean) {
    this._disabled = value
  }
  /** The component has the disabled state, usually muting the colors and removes interaction. */
  get disabled(): boolean {
    if (this._disabled === true || this._disabled === false)
      return this._disabled
    return !!this.ngControl?.control?.disabled
  }

  /* TRIGGERS */

  /** Emits focus events triggered by the child elements. */
  @Output() readonly nggvFocus = new EventEmitter()
  /** Emits focus events triggered by the child elements. */
  @Output() readonly nggvBlur = new EventEmitter()

  /* VALUE HANDLERS */

  private _state: any = null
  /** @internal */
  protected onChange = (_: any) => {
    // do nothing
  }
  /** @internal */
  protected onTouched = () => {
    // do nothing
  }
  /** @internal */
  protected onValidatorChange: () => void = () => null

  /* OTHER VARIABLES */
  scope: string | undefined

  /* LIFE CYCLE VARIABLES */

  private _onDestroy$ = new Subject<boolean>()

  /**
   * Creates a new BaseControlValueAccessorComponent.
   * @param ngControl optional FormControl provided when component is used in a form, through dependency injection.
   * @param translocoScope optional TranslocoScope provided if component is used within a scope.
   */
  constructor(
    @Self() @Optional() public ngControl: NgControl,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    protected cdr: ChangeDetectorRef,
  ) {
    if (this.ngControl) {
      // Note: we provide the value accessor through here, instead of
      // the `providers` to avoid running into a circular import.
      this.ngControl.valueAccessor = this
    }

    if (this.translocoScope) this.scope = this.translocoScope.toString()
  }

  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngOnInit(): void {
    if (this.ngControl && this.ngControl.control) {
      this.ngControl.control.setValidators(
        Validators.compose([this.ngControl.control.validator, this.validate]),
      )
    }

    // if reset observable has been passed, subscribe after updates
    this.reset?.pipe(takeUntil(this._onDestroy$)).subscribe({
      next: () => {
        // reset value of controller
        this.state = this.defaultValue
        this.onChange(this.state)
        this.cdr.detectChanges()
      },
    })
  }

  // eslint-disable-next-line @angular-eslint/contextual-lifecycle
  ngAfterViewInit(): void {
    // if default value is set, then don't alter it. Otherwise, use
    // current value of controller after initiation as default value
    this.defaultValue = this.defaultValue ?? this.ngControl?.value
  }

  ngOnDestroy(): void {
    this._onDestroy$.next(true)
    this._onDestroy$.complete()
  }

  detectChanges(): void {
    this.cdr.detectChanges()
  }

  /** @internal */
  onFocus(event: Event) {
    event.stopPropagation
      ? event.stopPropagation()
      : (event.cancelBubble = true)
    this.focused = true
    this.nggvFocus.emit(event)
  }

  /** @internal */
  onBlur(event: Event) {
    event.stopPropagation
      ? event.stopPropagation()
      : (event.cancelBubble = true)
    this.onTouched()
    this.focused = false
    this.nggvBlur.emit(event)
  }

  /** Sets the focus on the actual input element. */
  setFocus() {
    if (this.inputRef) this.inputRef.nativeElement.focus()
  }

  // ----------------------------------------------------------------------------
  // CONTROL VALUE ACCESSOR
  // ----------------------------------------------------------------------------

  /** Internal state/value that the native input element has.  */
  get state() {
    return this._state
  }

  /** Internal state/value that the native input element has.  */
  set state(value) {
    if (typeof value === 'undefined') value = null
    this._state = value
  }

  /** Writes a new value to the child input element. */
  writeValue(value: any): void {
    this.state = value
  }

  /** Registers a callback function that is called when the child input element's value changes. */
  registerOnChange(fn: (_: any) => object): void {
    this.onChange = fn
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
  get firstError(): { code: string; params: any } | null {
    const errors: ValidationErrors | null = this.ngControl.errors
    if (!errors) return null
    const code: string = Object.keys(errors)[0]
    return { code, params: errors[code] }
  }
}
