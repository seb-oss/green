import { msg } from '@lit/localize'
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { watch } from '../../utils/decorators'

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
 *
 * @event gds-validity-state - Dispatched when the validity state of the form control is changed by a validator.
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
          ;(this.#internals.validity as any) = validity
          this.errorMessage = validationMessage || ''
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
   * A validator that can be used to validate the form control and set an error message.
   */
  @property({ attribute: false })
  validator?: GdsValidator

  /**
   * The required attribute can be used to communicate to users of assistive technology that the control is required. Validation still needs to be done in a validator or equivalent.
   */
  @property({ type: Boolean })
  required = false

  /**
   * This can be used to manually control the error message that will be displayed
   * when the control is invalid.
   */
  @property({ attribute: 'error-message' })
  errorMessage = ''

  /**
   * Validation state of the form control. Setting this to true triggers the invalid state of the control.
   *
   * @attr aria-invalid
   */
  @property({
    type: Boolean,
    reflect: true,
  })
  set invalid(value: boolean) {
    const oldValue = this.invalid

    this.#internals.setValidity(
      {
        ...this.#internals.validity,
        customError: value,
        valid: !value,
      },
      this.errorMessage || this.validationMessage || '   ',
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
  get value() {
    return this._internalValue
  }
  set value(value: ValueT | undefined) {
    this._internalValue = value
  }
  protected _internalValue?: ValueT

  @property({ reflect: true })
  name = ''

  /**
   * If the input is Disabled
   */
  @property({
    type: Boolean,
    reflect: true,
  })
  disabled = false

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

    this.errorMessage = validity[1] || this.errorMessage

    this.#internals.setValidity(
      validity[0],
      validity[1],
      // @ts-expect-error - setValidity actually takes an element as the third argument, but the type definition is wrong.
      this._getValidityAnchor(),
    )

    if (oldValue !== this.invalid) {
      this.requestUpdate('invalid', oldValue)
      this.dispatchEvent(
        new CustomEvent('gds-validity-state', {
          bubbles: true,
          composed: true,
          detail: {
            valid: this.validity.valid,
            message: this.validationMessage,
          },
        }),
      )
    }

    return this.#internals.checkValidity()
  }

  reportValidity() {
    return this.#internals.reportValidity()
  }

  @watch('value', { waitUntilFirstUpdate: true })
  private __handleValueChange() {
    this.#internals.setFormValue(this.value as any)
    this.checkValidity()
  }

  protected formResetCallback() {
    if (typeof this.value === 'string') (this.value as string) = ''
    else if (Array.isArray(this.value)) (this.value as Array<string>) = []
    else this.value = undefined
  }

  protected formAssociatedCallback(form?: HTMLFormElement) {
    form?.addEventListener('submit', this._handleFormSubmit.bind(this))
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
