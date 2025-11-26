import { Directive, TemplateRef } from '@angular/core'

@Directive({
    selector: '[nggDropdownOption]',
    standalone: false
})
export class NggDropdownOptionDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
