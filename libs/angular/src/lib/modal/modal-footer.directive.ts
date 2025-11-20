import { Directive, ViewContainerRef } from '@angular/core'

@Directive({
    selector: '[nggModalFooter]',
    standalone: false
})
export class NggModalFooterDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
