import { property } from 'lit/decorators.js'
import { msg } from '@lit/localize'

import { watch } from '../../utils/decorators'
import { GdsElement } from '../../gds-element'

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

export interface GdsValidator {
  /**
   * Validate the form control element. Should return the validity state and an optional validation message.
   */
  validate(element: GdsFormControlElement): [ValidityState, string] | undefined
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

  @property({ attribute: false })
  validator?: GdsValidator

  @property({ type: Boolean })
  required = false

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
  set invalid(value: boolean) {
    const oldValue = this.invalid
    this.#internals.setValidity(
      {
        ...this.#internals.validity,
        customError: value,
        valid: !value,
      },
      this.validationMessage || msg(`Error message.`),
      // @ts-expect-error - setValidity actually takes an element as the third argument, but the type definition is wrong.
      this._getValidityAnchor() || undefined,
    )
    this.requestUpdate('invalid', oldValue)
    this.#internals.checkValidity()
  }
  get invalid() {
    return !this.#internals.validity.valid
  }

  /**
   * The label of the form control.
   */
  @property()
  label = ''

  /**
   * Get or set the value of the form control.
   */
  @property()
  value?: ValueT

  @property({ reflect: true })
  name = ''

  /**
   * The form element that the form control is associated with.
   */
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
    const anchor = this._getValidityAnchor()
    if (!anchor || !this.validator) return true

    const oldValue = this.invalid

    // If a validator dosn't return anything, we assume the control is valid.
    const validity = this.validator.validate(this) || [
      { ...this.validity, valid: true },
      '',
    ]

    this.#internals.setValidity(
      validity[0],
      validity[1],
      // @ts-expect-error - setValidity actually takes an element as the third argument, but the type definition is wrong.
      this._getValidityAnchor(),
    )

    this.requestUpdate('invalid', oldValue)

    return this.#internals.checkValidity()
  }

  reportValidity() {
    return this.#internals.reportValidity()
  }

  @watch('value')
  private __handleValueChange() {
    this.#internals.setFormValue(this.value as any)
    this.checkValidity()
  }

  formResetCallback() {
    this.value = undefined
  }

  formAssociatedCallback(form: HTMLFormElement) {
    form.addEventListener('submit', this._handleFormSubmit.bind(this))
  }

  protected _handleFormSubmit(e: Event) {
    this.checkValidity()
    if (!this.validity.valid) e.preventDefault()
  }

  focus(options?: FocusOptions | undefined): void {
    this._getValidityAnchor().focus(options)
  }

  /**
   * This should return a reference to the HTML element that will recive the focus when the form control is invalid.
   */
  protected abstract _getValidityAnchor(): HTMLElement
}
