import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
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
    <button *ngIf="isCloseable" class="close" (click)="close($event)">
      {{ closeText }}
      <i></i>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NggBadgeComponent implements OnInit {
  /** The color of the component */
  @Input() badgeType?: BadgeType | '' = ''
  /** Flag whether the component can be dismissed */
  @Input() set isCloseable(value: boolean | '') {
    this._isCloseable = value
  }
  get isCloseable(): boolean {
    return this._isCloseable === '' || !!this._isCloseable
  }
  /** Close text */
  @Input() closeText?: string
  /** Custom text color */
  @HostBinding('style.color') @Input() customColor?: string
  /** Custom background color */
  @HostBinding('style.background-color') @Input() customBackgroundColor?: string

  @HostBinding('class') get class(): string {
    return ['badge', this.badgeType].join(' ')
  }

  /** Callback when component is dismissed */
  @Output() handleClose: EventEmitter<Event> = new EventEmitter()

  private _isCloseable?: boolean | ''

  //eslint-disable-next-line
  constructor() {}

  ngOnInit(): void {
    if (!!this.customColor || !!this.customBackgroundColor) {
      this.badgeType = ''
    }
  }

  close(e: Event) {
    this.handleClose.emit(e)
  }
}
