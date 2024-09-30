import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
  selector: '[nggModalFooter]',
})
export class NggModalFooterDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
