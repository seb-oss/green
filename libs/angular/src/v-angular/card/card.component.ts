import { Component } from '@angular/core'

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngv-card',
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./card.component.scss'],
})
export class NgvCardComponent {}
