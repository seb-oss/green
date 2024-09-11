import { Directive, HostBinding } from '@angular/core'

@Directive({
  selector: '[ngvOption]',
})
export class NgvFoldOutOptionDirective {
  @HostBinding('class.sdv-field-dropdown__options__label') baseClass = true
}
