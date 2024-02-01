import { Directive, TemplateRef } from '@angular/core'

@Directive({
  selector: '[nggDropdownButton]',
})
export class NggDropdownButtonDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
