import {
  AfterViewInit,
  ChangeDetectorRef,
  Directive,
  ElementRef,
  Injector,
  NgZone,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core'
import { ControlValueAccessor, NgControl } from '@angular/forms'

/**
 * Base class for Angular wrapper components that wrap Green Core form controls.
 *
 * This class implements ControlValueAccessor to enable seamless integration with
 * Angular forms (both template-driven and reactive forms).
 *
 * @internal
 */
@Directive()
export abstract class GdsFormControlBase<T = any>
  implements ControlValueAccessor, OnInit, AfterViewInit
{
  protected elementRef = inject(ElementRef)
  protected zone = inject(NgZone)
  protected cdr = inject(ChangeDetectorRef)
  protected renderer = inject(Renderer2)
  protected injector = inject(Injector)

  protected control?: NgControl

  protected _onChange: (value: T) => void = () => {}
  protected _onTouched: () => void = () => {}

  ngOnInit(): void {
    // Subclasses should call super.ngOnInit() and add their own initialization
  }

  ngAfterViewInit(): void {
    // Get the NgControl instance if this component is used in a form
    try {
      this.control = this.injector.get(NgControl, undefined)
    } catch {
      // Component is not used in a form context
      this.control = undefined
    }

    if (this.control) {
      // Subscribe to status changes to update validation state
      this.control.statusChanges?.subscribe(() => {
        this.updateControlState()
      })

      this.control.valueChanges?.subscribe(() => {
        this.updateControlState()
      })

      // Update on form submit
      const form = this.elementRef.nativeElement.form
      if (form) {
        form.addEventListener('submit', () => {
          this.control?.control?.markAsTouched()
          this.updateControlState()
        })
      }

      this.updateControlState()
    }

    // Set up event listener for the 'input' event from the web component
    this.elementRef.nativeElement.addEventListener('input', (event: Event) => {
      const value = (event.target as any).value
      this._onChange(value)
      this.cdr.markForCheck()
    })

    // Set up event listener for the 'change' event from the web component
    this.elementRef.nativeElement.addEventListener('change', () => {
      this._onTouched()
    })

    // Set up blur event listener
    this.elementRef.nativeElement.addEventListener('blur', () => {
      this._onTouched()
    })
  }

  /**
   * Updates the validation state of the underlying web component
   */
  protected updateControlState(): void {
    const control = this.control?.control
    if (control) {
      this.renderer.setProperty(
        this.elementRef.nativeElement,
        'invalid',
        (control.dirty || control.touched) && control.invalid,
      )
    }
  }

  // ControlValueAccessor implementation

  /**
   * Writes a new value to the element
   */
  writeValue(value: T): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', value)
  }

  /**
   * Registers a callback function that is called when the control's value changes in the UI
   */
  registerOnChange(fn: (value: T) => void): void {
    this._onChange = fn
  }

  /**
   * Registers a callback function that is called when the control is touched
   */
  registerOnTouched(fn: () => void): void {
    this._onTouched = fn
  }

  /**
   * Sets the disabled state of the element
   */
  setDisabledState?(isDisabled: boolean): void {
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'disabled',
      isDisabled,
    )
  }
}
