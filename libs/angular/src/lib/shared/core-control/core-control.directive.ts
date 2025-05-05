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
} from '@angular/forms'

@Directive({
  selector: `gds-input:not([ngDefaultControl]),
     gds-textarea:not([ngDefaultControl]),
     gds-dropdown:not([ngDefaultControl]),
     gds-datepicker:not([ngDefaultControl]),
     gds-select:not([ngDefaultControl]),
     gds-radio-group:not([ngDefaultControl]),
     gds-checkbox-group:not([ngDefaultControl]),
     [nggCoreControl]`,
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
  protected control?: NgControl

  constructor(
    protected el: ElementRef,
    protected renderer: Renderer2,
    protected injector: Injector,
    protected cdr: ChangeDetectorRef,
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
        (control.dirty || control.touched) && control.invalid,
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
