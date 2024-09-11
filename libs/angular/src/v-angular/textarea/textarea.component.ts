import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Inject,
  Input,
  Optional,
  Self,
} from '@angular/core'
import { NgControl } from '@angular/forms'

import { TRANSLOCO_SCOPE, TranslocoScope } from '@ngneat/transloco'

import { BaseControlValueAccessorComponent } from '../base-control-value-accessor/base-control-value-accessor.component'

/** Textarea fields allow users to add and edit longer or multiple line text. */
@Component({
  selector: 'ngv-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
})
export class NgvTextareaComponent extends BaseControlValueAccessorComponent {
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook = 'textarea'
  /** Text shown before input has a written value. */
  @Input() placeholder?: string
  /** If set to true, the value will not be editable. */
  @Input() readonly = false
  /** Minimum length (number of characters) of value. */
  @Input() set minLength(length: number) {
    this._minlength = length
    this.cdr.detectChanges()
  }
  /**
   * Minimum length (number of characters) of value.
   * @deprecated minlength triggers angular-template-validation. Use @Input() minLength instead.
   */
  @Input() set minlength(length: number) {
    this._minlength = length
    this.cdr.detectChanges()
  }
  /** Maximum length (number of characters) of value. */
  @Input() set maxLength(length: number) {
    this._maxlength = length
    this.cdr.detectChanges()
  }
  /**
   * Maximum length (number of characters) of value.
   * @deprecated maxlength triggers angular-template-validation. Use @Input() maxLength instead.
   */
  @Input() set maxlength(length: number) {
    this._maxlength = length
    this.cdr.detectChanges()
  }
  /** Sets the height of the textarea and disables resize. A scrollbar will appear if necessary. */
  @Input() rows?: number

  /** Returns if maxlength is used */
  get hasMaxLength(): boolean {
    return !!this.maxlength && this.maxlength !== Number.MAX_SAFE_INTEGER
  }

  private _maxlength = Number.MAX_SAFE_INTEGER
  get maxlength(): number {
    return this._maxlength
  }

  private _minlength = 0
  get minlength(): number {
    return this._minlength
  }

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
  onInput(event: Event) {
    event.stopPropagation()
    if (this.disabled) return
    this.state = (event.target as HTMLTextAreaElement).value
    this.onChange(this.state)
  }
}
