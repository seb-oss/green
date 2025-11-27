import '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'

import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  Injectable,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Self,
} from '@angular/core'
import { NgControl } from '@angular/forms'
import { TRANSLOCO_SCOPE, TranslocoScope } from '@jsverse/transloco'

import { NggvBaseControlValueAccessorComponent } from '@sebgroup/green-angular/src/v-angular/base-control-value-accessor'

/** @internal Internal class used to uncheck radio buttons with the matching name. */
@Injectable()
export class NggvRadioControlRegistry {
  private _radios: any[] = []

  add(control: NgControl, radio: NggvRadioComponent) {
    this._radios.push([control, radio])
  }

  remove(radio: NggvRadioComponent) {
    for (let i = this._radios.length - 1; i >= 0; --i) {
      if (this._radios[i][1] === radio) {
        this._radios.splice(i, 1)
        return
      }
    }
  }

  select(radio: NggvRadioComponent) {
    this._radios.forEach((controlPair) => {
      if (this._isSameGroup(controlPair, radio) && controlPair[1] !== radio) {
        controlPair[1].writeValue(radio.value)
      }
    })
  }

  private _isSameGroup(
    controlPair: [NgControl, NggvRadioComponent],
    radio: NggvRadioComponent,
  ) {
    if (!controlPair[0].control) return false
    return (
      //@ts-expect-error internal properties not exposed
      controlPair[0]._parent === radio.ngControl._parent &&
      controlPair[1].name === radio.name
    )
  }
}

/**
 * Use radio buttons when users must select one option in a list with exclusive options out of a set of two or more options.
 * https://designlibrary.sebgroup.com/components/component-radiobutton
 */
@Component({
    selector: 'nggv-radio',
    templateUrl: './radio.component.html',
    styleUrls: ['./radio.component.scss'],
    providers: [NggvRadioControlRegistry],
    standalone: false
})
export class NggvRadioComponent
  extends NggvBaseControlValueAccessorComponent
  implements OnInit, OnDestroy
{
  /**
   * Special property used for selecting DOM elements during automated UI testing.
   */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'radio'
  /**
   * Sets class on host element based on size input for styling
   */
  @HostBinding('class') @Input() size: 'small' | 'large' = 'large'
  /**
   * Syncs a FormControl in an existing FormGroup to a form control element by name.
   */
  @Input() formControlName?: string
  /**
   * Decides if error should be connected to each individual radio button.
   * If true, errors will be shown in nggv-radio-group component.
   * If false, errors will be show below each radio button
   */
  isGroup = false
  /**
   * Creates a new RadioComponent
   * @param ngControl optional FormControl provided when component is used in a form, through dependency injection.
   * @param registry internal registry used to uncheck radio buttons with the matching name, through dependency injection.
   * @param cdr change detection reference for rendering purposes.
   */
  constructor(
    @Self() @Optional() public ngControl: NgControl,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    protected registry: NggvRadioControlRegistry,
    protected cdr: ChangeDetectorRef,
  ) {
    super(ngControl, translocoScope, cdr)
  }

  ngOnInit() {
    super.ngOnInit()
    this._checkName()
    this.registry.add(this.ngControl, this)
    // Check if nggv-radio-group is present connected to the same formControl
    if (
      Array.from(
        document.querySelectorAll(
          `nggv-radio-group[formcontrolname=${this.name}]`,
        ),
      ).length
    ) {
      this.isGroup = true
    }
  }

  ngOnDestroy() {
    this.registry.remove(this)
  }

  /** @internal */
  onInputChange(event: Event) {
    event.stopPropagation()
    if (this.disabled) return
    this.onChange(this.state)
  }

  /** Writes a new value of true or false based on if argument matches this components value property. */
  writeValue(value: any): void {
    // Phantom null value on first load https://github.com/angular/angular/pull/38140
    super.writeValue(value === this.value)
  }

  /** Registers a callback function that is called when the child input element's value changes. */
  registerOnChange(fn: (value: any) => any) {
    // Override default to update registry
    this.onChange = () => {
      fn(this.value)
      this.registry.select(this)
    }
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
