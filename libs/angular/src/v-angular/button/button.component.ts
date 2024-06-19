import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  InjectionToken,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  Self,
  SimpleChanges,
} from '@angular/core'
import { NgControl } from '@angular/forms'
import { TRANSLOCO_SCOPE, TranslocoScope } from '@ngneat/transloco'
import { BaseControlValueAccessorComponent } from '../../lib/shared/base-control-value-accessor/base-control-value-accessor.component'

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
  selector: 'ngv-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent
  extends BaseControlValueAccessorComponent
  implements OnInit, OnChanges
{
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook = 'button'
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
  @Output() ngvClick = new EventEmitter()

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
      'sdv-button--small': small,
      'sdv-button-secondary': type === ButtonStyle.Secondary,
      'sdv-button-alternative': type === ButtonStyle.Alternative,
      'sdv-button-delete': type === ButtonStyle.Delete,
      'sdv-button-delete-confirm': type === ButtonStyle.DeleteConfirm,
      'sdv-button-ghost-light': type === ButtonStyle.Ghost,
      'sdv-button-ghost-dark': type === ButtonStyle.GhostDark,
      'sdv-button-link': type === ButtonStyle.Link,
    }
  }

  ngOnInit() {
    super.ngOnInit()
    if (this.href) this.external = /^\w+:\/\/.+$/.test(this.href)
    this.buttonClasses = ButtonComponent.buttonStyleClasses(
      this.buttonStyle,
      this.small,
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.buttonStyle || changes.small) {
      this.buttonClasses = ButtonComponent.buttonStyleClasses(
        this.buttonStyle,
        this.small,
      )
    }
  }

  /** @internal */
  onClick(event: Event) {
    if (this.disabled) return
    this.ngvClick.emit(event)
  }
}
