import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnChanges,
  Optional,
  Output,
  Self,
  SimpleChanges,
} from '@angular/core'
import { NgControl } from '@angular/forms'
import { TRANSLOCO_SCOPE, TranslocoScope } from '@ngneat/transloco'

import { NgvBaseControlValueAccessorComponent } from '@sebgroup/green-angular/src/v-angular/base-control-value-accessor'

/**
 * Checkboxes allow a user to toggle an option on or off, or make multiple choices in a set of available options.
 * https://designlibrary.sebgroup.com/components/component-checkbox
 */
@Component({
  selector: 'nggv-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class NgvCheckboxComponent extends NgvBaseControlValueAccessorComponent {
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook = 'checkbox'
  @Input() optionalLabel = 'Optional'

  @Output() readonly valueChange: EventEmitter<string> =
    new EventEmitter<string>()

  constructor(
    @Self()
    @Optional()
    public ngControl: NgControl,
    @Optional()
    @Inject(TRANSLOCO_SCOPE)
    protected translocoScope: TranslocoScope,
    protected cdr: ChangeDetectorRef,
  ) {
    super(ngControl, translocoScope, cdr)
  }

  /** @internal */
  onInputChange(event: Event) {
    event.stopPropagation()
    if (this.disabled) return
    this.state = !this.state
    this.onTouched()
    this.onChange(this.state)
  }

  /** Writes a new value of true or false based on if argument matches this components value property. */
  writeValue(value: any): void {
    // Phantom null value on first load https://github.com/angular/angular/pull/38140
    super.writeValue(value === this.value)
  }

  /** Registers a callback function that is called when the child input element's value changes. */
  registerOnChange(fn: (checked: any) => any) {
    // Override default to update registry
    this.onChange = (checked) => {
      const output = checked ? this.value : null
      fn(output)
      this.valueChange.emit(output)
    }
  }
}
