import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  forwardRef,
  Injector,
  Renderer2,
} from '@angular/core'
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl,
  Validators,
} from '@angular/forms'

@Directive({
  selector:
    'gds-input, gds-textarea, gds-dropdown, gds-datepicker, [nggCoreControl]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NggCoreControlDirective),
      multi: true,
    },
  ],
})
export class NggCoreControlDirective
  implements ControlValueAccessor, AfterViewInit
{
  private control?: NgControl

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private injector: Injector,
    private cdr: ChangeDetectorRef,
  ) {}

  ngAfterViewInit() {
    this.control = this.injector.get(NgControl)

    this.control.statusChanges?.subscribe(() => {
      this.updateControlState()
    })

    this.control.valueChanges?.subscribe(() => {
      this.updateControlState()
    })

    // Update on submit
    const form = this.el.nativeElement.form
    if (form) {
      form.addEventListener('submit', () => {
        this.control?.control?.markAsTouched()
        this.updateControlState()
      })
    }

    this.updateControlState()
  }

  private updateControlState() {
    const control = this.control?.control
    if (control) {
      this.renderer.setProperty(
        this.el.nativeElement,
        'invalid',
        control.touched && control.invalid,
      )
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    this.renderer.setProperty(this.el.nativeElement, 'value', value)
  }

  registerOnChange(fn: (_: any) => void): void {
    this.el.nativeElement.addEventListener('input', (event: any) => {
      fn(event.target.value)
      this.cdr.markForCheck()
    })
  }

  registerOnTouched(fn: any): void {
    this.el.nativeElement.addEventListener('blur', fn)
  }

  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setProperty(this.el.nativeElement, 'disabled', isDisabled)
  }
}
