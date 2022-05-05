import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewContainerRef,
} from '@angular/core'
import { BadgeType } from '@sebgroup/extract'

@Component({
  // we need to disable this warning since we don't want the badge component to create a new element
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[ngg-badge]',
  template: `
    <strong>
      <ng-content></ng-content>
    </strong>
    <button *ngIf="isCloseable" class="close" (click)="close()">
      {{ closeText }}
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NggBadgeComponent {
  @Input() set isCloseable(value: boolean | '') {
    this._isCloseable = value
  }
  get isCloseable(): boolean {
    return this._isCloseable === '' || !!this._isCloseable
  }
  @Input() badgeType?: BadgeType
  private _isCloseable?: boolean | ''
  @Input() closeText?: string
  @HostBinding('class') get class(): string {
    return ['badge', this.badgeType].join(' ')
  }

  constructor(private viewContainerRef: ViewContainerRef) {}

  close() {
    this.viewContainerRef.element.nativeElement.remove()
  }
}
