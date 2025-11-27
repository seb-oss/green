import { AfterViewInit, Directive, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

import { NggCoreControlDirective } from './core-control.directive'

@Directive({
    selector: `gds-checkbox[formControlName], [nggCoreCheckboxControl]`,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NggCoreCheckboxDirective),
            multi: true,
        },
    ],
    standalone: false
})
export class NggCoreCheckboxDirective
  extends NggCoreControlDirective
  implements ControlValueAccessor, AfterViewInit
{
  override writeValue(value: any): void {
    if (value !== undefined) {
      this.renderer.setProperty(this.el.nativeElement, 'checked', value)
    }
  }

  override registerOnChange(fn: (_: any) => void): void {
    this.el.nativeElement.addEventListener('input', (event: any) => {
      fn(event.target.checked)
      this.cdr.markForCheck()
    })
  }
}
