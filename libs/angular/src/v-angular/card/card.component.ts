import { Component } from '@angular/core'

@Component({
    selector: 'nggv-card',
    template: ` <ng-content></ng-content> `,
    styleUrls: ['./card.component.scss'],
    standalone: false
})
export class NggvCardComponent {}
