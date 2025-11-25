import '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'

import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  Optional,
  Output,
  Self,
} from '@angular/core'
import { NgControl } from '@angular/forms'
import { TRANSLOCO_SCOPE, TranslocoScope } from '@jsverse/transloco'

import { NggvBaseControlValueAccessorComponent } from '@sebgroup/green-angular/src/v-angular/base-control-value-accessor'

/**
 * Checkboxes allow a user to toggle an option on or off, or make multiple choices in a set of available options.
 * https://designlibrary.sebgroup.com/components/component-checkbox
 */
@Component({
    selector: 'nggv-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss'],
    standalone: false
})
export class NggvCheckboxComponent extends NggvBaseControlValueAccessorComponent {
  /**
   * Special property used for selecting DOM elements during automated UI testing.
   */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'checkbox'

  @HostBinding('class.small') get isSmall(): boolean {
    return this.size === 'small'
  }

  @HostBinding('class.large') get isLarge(): boolean {
    return this.size === 'large'
  }

  /**
   * Sets the displayed size of the checkbox
   */
  @Input() size: 'small' | 'large' = 'large'

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
