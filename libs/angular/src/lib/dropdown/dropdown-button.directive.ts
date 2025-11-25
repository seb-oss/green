import { Directive, TemplateRef } from '@angular/core'

@Directive({
    selector: '[nggDropdownButton]',
    standalone: false
})
export class NggDropdownButtonDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
