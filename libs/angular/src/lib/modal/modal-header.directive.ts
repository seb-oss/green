import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[nggModalHeader]',
    standalone: false
})
export class NggModalHeaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
