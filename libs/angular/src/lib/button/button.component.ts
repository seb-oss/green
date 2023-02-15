import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input
} from '@angular/core'
import { ButtonSize, ButtonVariant } from '@sebgroup/extract';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[ngg-button]',
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NggButtonComponent {

  @Input() variant?: ButtonVariant;
  @Input() size?: ButtonSize;

  @HostBinding('class') get classes(): string {
    return [this.variant, this.size ? this.size : false].filter(Boolean).join(" ")
  }
}
