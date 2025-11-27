import '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'

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
import { TRANSLOCO_SCOPE, TranslocoScope } from '@jsverse/transloco'

import { NggvBaseControlValueAccessorComponent } from '@sebgroup/green-angular/src/v-angular/base-control-value-accessor'

/** Textarea fields allow users to add and edit longer or multiple line text. */
@Component({
    selector: 'nggv-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss'],
    standalone: false
})
export class NggvTextareaComponent extends NggvBaseControlValueAccessorComponent {
  /** Special property used for selecting DOM elements during automated UI testing. */
  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'textarea'

  /**
   * Sets the small class based on the size input.
   */
  @HostBinding('class.small') get isSmall(): boolean {
    return this.size === 'small'
  }

  /**
   * Sets the large class based on the size input.
   */
  @HostBinding('class.large') get isLarge(): boolean {
    return this.size === 'large'
  }

  /** Text shown before input has a written value. */
  @Input() placeholder?: string
  /** If set to true, the value will not be editable. */
  @Input() readonly = false
  /** Minimum length (number of characters) of value. */
  @Input() set minLength(length: number) {
    this._minlength = length
    this.cdr.detectChanges()
  }
  get minlength(): number {
    return this._minlength
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
  get maxlength(): number {
    return this._maxlength
  }
  /**
   * Maximum length (number of characters) of value.
   * @deprecated maxlength triggers angular-template-validation. Use @Input() maxLength instead.
   */
  @Input() set maxlength(length: number) {
    this._maxlength = length
    this.cdr.detectChanges()
  }

  /** Returns if maxlength is used */
  get hasMaxLength(): boolean {
    return !!this.maxlength && this.maxlength !== Number.MAX_SAFE_INTEGER
  }

  private _maxlength = Number.MAX_SAFE_INTEGER

  private _minlength = 0

  /** Sets the height of the textarea and disables resize. A scrollbar will appear if necessary. */
  @Input() rows?: number

  /**
   * Sets the displayed size of the textarea.
   */
  @Input() size: 'small' | 'large' = 'large'

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
