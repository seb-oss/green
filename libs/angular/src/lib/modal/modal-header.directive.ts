import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[nggModalHeader]',
})
export class NggModalHeaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
