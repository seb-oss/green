import { LitElement } from 'lit'
import { property } from 'lit/decorators.js'

import { watch } from '../utils/decorators'
import { GdsElement } from '../gds-element'
import { getUnscopedTagName } from '../utils/helpers/custom-element-scoping'

interface ElementInternalsPolyfill {
  form: HTMLFormElement | null
  setFormValue(value: any): void
  setValidity(validity: ValidityState, validationMessage?: string): void
  validationMessage: string
  validity: ValidityState
  willValidate: boolean
  checkValidity(): boolean
  reportValidity(): boolean
}

/**
 * Abstract base class for Green Core form controls.
 *
 * This class sets up the form-associated custom element API, along with some
 * other common form control functionality that all Green Core form controls share.
 *
 * @internal
 */
export abstract class GdsFormControlElement<ValueT = any>
  extends GdsElement
  // This enables standard JSDoc comments for the form-associated custom element properties.
  implements Partial<Omit<HTMLInputElement, 'value'>>
{
  #internals: ElementInternals | ElementInternalsPolyfill

  static formAssociated = true

  constructor() {
    super()
    try {
      this.#internals = this.attachInternals()
    } catch (e) {
      this.#internals = {
        form: this.closest('form'),
        setFormValue: (value: any) => {
          this.value = value
        },
        setValidity: (validity: ValidityState, validationMessage?: string) => {
          this.invalid = validity.customError
        },
        validationMessage: '',
        validity: {
          badInput: false,
          customError: false,
          patternMismatch: false,
          rangeOverflow: false,
          rangeUnderflow: false,
          stepMismatch: false,
          tooLong: false,
          tooShort: false,
          typeMismatch: false,
          valueMissing: false,
          valid: true,
        },
        willValidate: true,
        checkValidity: () => true,
        reportValidity: () => true,
      }
    }
  }

  /**
   * Validation state of the form control. Setting this to true triggers the invalid state of the control.
   *
   * @attr aria-invalid
   */
  @property({
    type: Boolean,
    reflect: true,
    attribute: 'aria-invalid',
    converter: {
      fromAttribute: Boolean,
      toAttribute: (value: boolean) => value?.toString(),
    },
  })
  invalid = false

  /**
   * Get or set the value of the form control.
   */
  @property()
  value?: ValueT

  @property({ reflect: true })
  name = ''

  get form() {
    return this.#internals.form
  }

  get validity() {
    return this.#internals.validity
  }

  get validationMessage() {
    return this.#internals.validationMessage
  }

  get willValidate() {
    return this.#internals.willValidate
  }

  checkValidity() {
    return this.#internals.checkValidity()
  }

  reportValidity() {
    return this.#internals.reportValidity()
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.#internals.form?.addEventListener('reset', this._handleFormReset)
  }

  disconnectedCallback(): void {
    super.disconnectedCallback()
    this.#internals.form?.removeEventListener('reset', this._handleFormReset)
  }

  @watch('invalid')
  private __handleValidityChange() {
    this.#internals.setValidity(
      {
        badInput: false,
        customError: this.invalid,
        patternMismatch: false,
        rangeOverflow: false,
        rangeUnderflow: false,
        stepMismatch: false,
        tooLong: false,
        tooShort: false,
        typeMismatch: false,
        valueMissing: false,
        valid: !this.invalid,
      },
      this.validationMessage || 'Error message'
    )
  }

  @watch('value')
  private __handleValueChange() {
    this.#internals.setFormValue(this.value as any)
  }

  /**
   * Event handler for the form reset event.
   * Can be overridden by subclasses to rcustomize the reset value.
   */
  protected _handleFormReset = () => {
    this.value = undefined
  }
}
