import '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'

import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core'
import { NgControl } from '@angular/forms'
import { TRANSLOCO_SCOPE, TranslocoScope } from '@jsverse/transloco'

import { NggvBaseControlValueAccessorComponent } from '@sebgroup/green-angular/src/v-angular/base-control-value-accessor'

/**
 * Creates a wrapper around a group of radio buttons.
 * If there is an error to the form control connected to the radio buttons, it will be shown once below instead of below every individual radio button
 */
@Component({
    selector: 'nggv-radio-group',
    templateUrl: './radio-group.component.html',
    styleUrls: ['./radio-group.component.scss'],
    standalone: false
})
export class NggvRadioGroupComponent
  extends NggvBaseControlValueAccessorComponent
  implements OnInit
{
  /**
   * Special property used for selecting DOM elements during automated UI testing.
   */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'radio-group'
  /**
   * Sets class on host element based on size input for styling
   */
  @HostBinding('class') @Input() size: 'small' | 'large' = 'large'
  /**
   * Syncs a FormControl in an existing FormGroup to a form control element by name.
   */
  @Input() formControlName?: string
  /**
   * Sets "flex-direction" of parent of radio buttons.
   */
  @Input() direction?: 'row' | 'column' = 'column'
  /**
   * Creates a new RadioComponent
   * @param ngControl optional FormControl provided when component is used in a form, through dependency injection.
   * @param cdr change detection reference for rendering purposes.
   */
  constructor(
    @Self() @Optional() public ngControl: NgControl,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    protected cdr: ChangeDetectorRef,
  ) {
    super(ngControl, translocoScope, cdr)
  }

  ngOnInit() {
    super.ngOnInit()
    this._checkName()
  }

  /** Checks that the name properties match and updates name property if only formControlName is given. */
  private _checkName(): void {
    if (
      this.name &&
      this.formControlName &&
      this.name !== this.formControlName
    ) {
      throw new Error(`
      If you define both a name and a formControlName attribute on your radio button, their values
      must match. Ex: <input type="radio" formControlName="food" name="food">
    `)
    }

    if (!this.name && this.formControlName) this.name = this.formControlName
  }
}
