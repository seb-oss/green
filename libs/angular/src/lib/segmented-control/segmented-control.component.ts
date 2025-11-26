import { ChangeDetectionStrategy, Component, Input } from '@angular/core'
import { Observable } from 'rxjs'

export interface SegmentedControl {
  url: string
  text: Observable<string> | string
}

/**
 * @deprecated use <gds-segmented-control> from green-core instead.
 */
@Component({
    selector: 'ngg-segmented-control',
    template: `
    <div class="group">
      <a
        *ngFor="let control of $controls | async"
        [routerLink]="control.url"
        routerLinkActive="active"
        class="button"
        >{{ control.text }}</a
      >
    </div>
  `,
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class NggSegmentedControlComponent {
  @Input() $controls: Observable<Array<SegmentedControl>> | undefined
}
