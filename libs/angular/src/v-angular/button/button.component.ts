import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  Self,
  SimpleChanges,
} from '@angular/core'
import { NgControl } from '@angular/forms'
import { TRANSLOCO_SCOPE, TranslocoScope } from '@jsverse/transloco'

import { NggvBaseControlValueAccessorComponent } from '@sebgroup/green-angular/src/v-angular/base-control-value-accessor'

export type ButtonTypes = 'button' | 'submit' | 'reset' | 'link'

export enum ButtonStyle {
  Primary,
  Secondary,
  Alternative,
  Delete,
  DeleteConfirm,
  Ghost,
  GhostDark,
  Link,
}

/**
 * Buttons allow users to take action with a single tap.
 * https://designlibrary.sebgroup.com/components/component-button
 */
@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'nggv-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: false
})
export class NggvButtonComponent
  extends NggvBaseControlValueAccessorComponent
  implements OnInit, OnChanges
{
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'button'
  /** Type of button to one of button|submit|reset|link, where link creates an anchor tag. */
  @Input() type: ButtonTypes = 'button'
  /** Style of the button to one of Primary|Secondary|Alternative|Delete|DeleteConfirm|Ghost|GhostDark|Link. */
  @Input() buttonStyle: ButtonStyle =
    this.type === 'link' ? ButtonStyle.Link : ButtonStyle.Primary
  /** Size of the button to be smaller. */
  @Input() small = false
  /** Where the button should link to if {@link ButtonTypes} is set to link. */
  @Input() href?: string

  /** @internal Determines if the the href property should use internal routing. */
  external = false
  /** @internal The classes determined by the buttonStyle and small properties. */
  buttonClasses: { [className: string]: boolean } = {}

  /** Emits click events triggered by the button or link.
   * Use instead of click to avoid triggering events on disabled buttons and links.
   */
  @Output() nggvClick = new EventEmitter()

  constructor(
    @Self() @Optional() public ngControl: NgControl,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    protected cdr: ChangeDetectorRef,
  ) {
    super(ngControl, translocoScope, cdr)
  }

  /** @internal */
  static buttonStyleClasses(type: ButtonStyle, small: boolean) {
    return {
      small: small,
      primary: type === ButtonStyle.Primary || type === ButtonStyle.Delete,
      secondary: type === ButtonStyle.Secondary,
      tertiary: type === ButtonStyle.Alternative || type === ButtonStyle.Link,
      danger: type === ButtonStyle.Delete || type === ButtonStyle.DeleteConfirm,
      ghost: type === ButtonStyle.GhostDark,
      'ghost-light': type === ButtonStyle.Ghost,
    }
  }

  ngOnInit() {
    super.ngOnInit()
    if (this.href) this.external = /^\w+:\/\/.+$/.test(this.href)
    this.buttonClasses = NggvButtonComponent.buttonStyleClasses(
      this.buttonStyle,
      this.small,
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.buttonStyle || changes.small) {
      this.buttonClasses = NggvButtonComponent.buttonStyleClasses(
        this.buttonStyle,
        this.small,
      )
    }
  }

  /** @internal */
  onClick(event: Event) {
    if (this.disabled) return
    this.nggvClick.emit(event)
  }
}
