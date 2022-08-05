import { Directive, TemplateRef } from '@angular/core'

@Directive({
  selector: '[nggDropdownOption]',
})
export class NggDropdownOptionDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
