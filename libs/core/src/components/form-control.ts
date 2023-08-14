import { LitElement } from 'lit'
import { property } from 'lit/decorators.js'

import { watch } from 'utils/decorators'
import { getUnscopedTagName } from 'utils/helpers/custom-element-scoping'

/**
 * Abstract base class for Green Core form controls.
 *
 * This class sets up the form-associated custom element API, along with some
 * other common form control functionality that all Green Core form controls share.
 *
 * @internal
 */
export abstract class GdsFormControlElement<ValueT = any>
  extends LitElement
  // This enables standard JSDoc comments for the form-associated custom element properties.
  implements Partial<Omit<HTMLInputElement, 'value'>>
{
  #internals: ElementInternals

  static formAssociated = true

  constructor() {
    super()
    this.#internals = this.attachInternals()
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
      toAttribute: (value: boolean) => value.toString(),
    },
  })
  invalid = false

  /**
   * Get or set the value of the form control.
   */
  @property()
  value: ValueT | undefined

  @property({ reflect: true })
  name = ''

  get form() {
    return this.#internals.form
  }

  get type() {
    return getUnscopedTagName(this.localName) || 'gds-form-control'
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
      },
      this.validationMessage || 'Error message'
    )
  }

  @watch('value')
  private __handleValueChange() {
    this.setFormValue(this.value as any)
  }

  protected setFormValue(value: any) {
    this.#internals.setFormValue(value as any)
  }
}
