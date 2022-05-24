import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewContainerRef,
} from '@angular/core'
import { AlertType } from '@sebgroup/extract'

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[ngg-alert]',
  template: `
    <main>
      <ng-content></ng-content>
    </main>
    <button *ngIf="isCloseable" class="close" (click)="close()">Close</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NggAlertComponent {
  private _isCloseable?: boolean | ''
  @Input() set isCloseable(value: boolean | '') {
    this._isCloseable = value
  }
  get isCloseable(): boolean {
    return this._isCloseable === '' || !!this._isCloseable
  }

  @Input() alertType?: AlertType
  @Input() closeText?: string
  @HostBinding('class') get class(): string {
    return this.alertType || ''
  }
  @HostBinding('attr.role') get role(): string {
    return 'alert'
  }

  constructor(private viewContainerRef: ViewContainerRef) {}

  close() {
    this.viewContainerRef.element.nativeElement.remove()
  }
}
