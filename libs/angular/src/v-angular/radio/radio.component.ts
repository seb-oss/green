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
import { TRANSLOCO_SCOPE, TranslocoScope } from '@ngneat/transloco'

import { NgvBaseControlValueAccessorComponent } from '@sebgroup/green-angular/src/v-angular/base-control-value-accessor'

/** @internal Internal class used to uncheck radio buttons with the matching name. */
@Injectable()
export class NgvRadioControlRegistry {
  private _radios: any[] = []

  add(control: NgControl, radio: NgvRadioComponent) {
    this._radios.push([control, radio])
  }

  remove(radio: NgvRadioComponent) {
    for (let i = this._radios.length - 1; i >= 0; --i) {
      if (this._radios[i][1] === radio) {
        this._radios.splice(i, 1)
        return
      }
    }
  }

  select(radio: NgvRadioComponent) {
    this._radios.forEach((controlPair) => {
      if (this._isSameGroup(controlPair, radio) && controlPair[1] !== radio) {
        controlPair[1].writeValue(radio.value)
      }
    })
  }

  private _isSameGroup(
    controlPair: [NgControl, NgvRadioComponent],
    radio: NgvRadioComponent,
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
  providers: [NgvRadioControlRegistry],
})
export class NgvRadioComponent
  extends NgvBaseControlValueAccessorComponent
  implements OnInit, OnDestroy
{
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook = 'radio'

  /** Syncs a FormControl in an existing FormGroup to a form control element by name. */
  @Input() formControlName?: string

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
    protected registry: NgvRadioControlRegistry,
    protected cdr: ChangeDetectorRef,
  ) {
    super(ngControl, translocoScope, cdr)
  }

  ngOnInit() {
    super.ngOnInit()
    this._checkName()
    this.registry.add(this.ngControl, this)
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
