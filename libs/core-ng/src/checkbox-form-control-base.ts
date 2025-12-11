import { Directive } from '@angular/core'
import { NgControl } from '@angular/forms'

import { GdsFormControlBase } from './form-control-base'

/**
 * Base class for checkbox form controls that work with boolean checked state
 * instead of string values.
 *
 * This class extends GdsFormControlBase and overrides the value handling to work
 * with the checkbox's `checked` property (boolean) rather than the `value` property (string).
 * This is needed because:
 * - Single checkboxes in Angular forms typically bind to boolean values
 * - The checkbox's meaningful state is whether it's checked or not
 * - The web component's `value` property is a string used for form submission
 *
 * @internal
 */
@Directive()
export abstract class GdsCheckboxFormControlBase extends GdsFormControlBase<boolean> {
  /**
   * Writes a new value to the element.
   * For checkboxes, we set the `checked` property instead of `value`.
   */
  override writeValue(value: boolean): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'checked', value)
  }

  override ngAfterViewInit(): void {
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
    // For checkboxes, we read the 'checked' property instead of 'value'
    this.elementRef.nativeElement.addEventListener('input', (event: Event) => {
      const checked = (event.target as any).checked
      this._onChange(checked)
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
}
