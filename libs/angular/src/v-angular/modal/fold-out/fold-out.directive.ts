import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[nggvOption]',
})
export class NgvFoldOutOptionDirective {
  @HostBinding('class.nggv-field-dropdown__options__label') baseClass = true
}
