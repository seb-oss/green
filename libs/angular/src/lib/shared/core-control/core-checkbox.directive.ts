import { AfterViewInit, Directive, forwardRef } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

import { NggCoreControlDirective } from './core-control.directive'

@Directive({
  selector: `gds-checkbox:not([ngDefaultControl])`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NggCoreCheckboxDirective),
      multi: true,
    },
  ],
})
export class NggCoreCheckboxDirective
  extends NggCoreControlDirective
  implements ControlValueAccessor, AfterViewInit
{
  // ControlValueAccessor implementation
  writeValue(value: any): void {
    if (value !== undefined) {
      this.el.nativeElement.checked = value
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this.el.nativeElement.addEventListener('input', (event: any) => {
      fn(event.target.checked)
      this.cdr.markForCheck()
    })
  }
}
