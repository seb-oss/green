import { msg } from '@lit/localize'
import { property, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { gdsCustomElement, html } from '../../scoping'
import { watch } from '../../utils/decorators/watch'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './radio.styles'

import '../../primitives/form-control-header'
import '../../primitives/form-control-footer'

import type { GdsRadio } from './radio'

/**
 * @element gds-radio-group
 */
@gdsCustomElement('gds-radio-group')
export class GdsRadioGroup<ValueT = any> extends GdsFormControlElement<ValueT> {
  static styles = [styles]

  @property()
  override label = ''

  @property()
  override name = ''

  @property()
  size: 'large' | 'small' = 'large'

  @property()
  direction: 'row' | 'column' = 'column'

  @property({ attribute: 'supporting-text' })
  supportingText = ''

  @property({
    attribute: 'show-extended-supporting-text',
    type: Boolean,
    reflect: true,
  })
  showExtendedSupportingText = false

  @query('.content')
  private _contentElement!: HTMLElement

  get radios(): GdsRadio[] {
    return Array.from(this.querySelectorAll('gds-radio')) as GdsRadio[]
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'radiogroup')
    this.updateComplete.then(() => {
      this._syncRadioStates()
      this._initializeFocusable()
      this._validateRadios()
    })
  }

  private _validateRadios() {
    // Check for label and value
    const invalidRadios = this.radios.filter(
      (radio) => !radio.label || !radio.value,
    )

    if (invalidRadios.length > 0) {
      this.invalid = true
      this.errorMessage = msg('Radio buttons require label and value')
      return false
    }

    // Check for minimum number of radios
    if (this.radios.length < 2) {
      this.invalid = true
      this.errorMessage = msg('Minimum two radio buttons required')
      return false
    }

    return true
  }

  private _initializeFocusable() {
    // Make the group focusable
    this._contentElement.setAttribute('tabindex', '0')

    // Set all radios to not be focusable by tab
    this.radios.forEach((radio) => {
      radio.setAttribute('tabindex', '-1')
    })
  }

  checkValidity() {
    if (!this.validator) {
      // If no custom validator, just check if required and has value
      if (this.required && !this.value) {
        this.invalid = true
        this.errorMessage = msg('Please select an option')
        return false
      }
      return true
    }

    // Use the validator if provided (following the same pattern as input/dropdown)
    const validity = this.validator.validate(this)
    if (validity) {
      this.invalid = !validity[0].valid
      this.errorMessage = validity[1]
    }

    // Propagate invalid state to radios
    this.radios.forEach((radio: any) => {
      radio.invalid = this.invalid
    })

    return this.validity.valid
  }

  protected _getValidityAnchor(): HTMLElement {
    return this._contentElement
  }

  @watch('value')
  private _handleValueChange() {
    this._syncRadioStates()
    this._validateRadios() // Add validation check
    this.checkValidity()
  }

  @watch('required')
  private _handleRequiredChange() {
    this.checkValidity()
  }

  @watch('size')
  private _handleSizeChange() {
    this.radios.forEach((radio: any) => {
      radio.size = this.size
    })
  }

  private _syncRadioStates() {
    const isValid = this.checkValidity()
    this.radios.forEach((radio: any) => {
      radio.checked = radio.value === this.value
      radio.size = this.size
      radio.invalid = !isValid
    })
  }

  private _handleFocus() {
    // When group receives focus, focus the selected radio or first one
    const selectedRadio = this.radios.find((radio: any) => radio.checked)
    const radioToFocus = selectedRadio || this.radios[0]

    if (radioToFocus) {
      ;(radioToFocus as HTMLElement).focus()
    }
  }

  private _handleRadioChange(e: Event) {
    const radio = e.target as HTMLElement
    if (radio.hasAttribute('value')) {
      const newValue = radio.getAttribute('value') as ValueT

      this.value = newValue

      const basicValidation = this._validateRadios()
      const validityCheck = this.checkValidity()

      if (basicValidation && validityCheck) {
        this.invalid = false
        this.errorMessage = ''
      }

      this._syncRadioStates()

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: this.value },
          bubbles: true,
        }),
      )
      this.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }

  private _handleKeyDown(e: KeyboardEvent) {
    const radios = this.radios.filter(
      (radio) => !radio.hasAttribute('disabled'),
    )
    if (radios.length === 0) return

    let currentIndex = radios.findIndex(
      (radio) => (radio as any).checked || document.activeElement === radio,
    )
    if (currentIndex === -1) currentIndex = 0

    let nextIndex: number
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight': {
        e.preventDefault()
        nextIndex = (currentIndex + 1) % radios.length
        break
      }
      case 'ArrowUp':
      case 'ArrowLeft': {
        e.preventDefault()
        nextIndex = (currentIndex - 1 + radios.length) % radios.length
        break
      }
      case 'Tab': {
        // Let tab move focus out of the group
        return
      }
      default:
        return
    }

    const nextRadio = radios[nextIndex] as any
    nextRadio.checked = true
    nextRadio.focus()
    this.value = nextRadio.value

    // Add same validation handling as in _handleRadioChange
    const basicValidation = this._validateRadios()
    const validityCheck = this.checkValidity()

    if (basicValidation && validityCheck) {
      this.invalid = false
      this.errorMessage = ''
    }

    this._syncRadioStates()

    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.value },
        bubbles: true,
      }),
    )
    this.dispatchEvent(new Event('input', { bubbles: true }))
  }

  render() {
    const classes = {
      'radio-group': true,
      'direction-row': this.direction === 'row',
      'direction-column': this.direction === 'column',
    }

    return html`<div class=${classMap(classes)}>
      ${this.#renderRadioGroupContents()}
    </div>`
  }

  #renderRadioGroupContents() {
    const elements = [
      this.#renderFieldControlHeader(),
      this.#renderRadios(),
      this.#renderFieldControlFooter(),
    ]

    return elements.map((element) => html`${element}`)
  }

  #renderFieldControlHeader() {
    if (this.label) {
      return html` <gds-form-control-header class="size-${this.size}">
        <label id="group-label" for="input" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`
    }
  }

  #renderRadios() {
    return html` <div
      class="content"
      @keydown=${this._handleKeyDown}
      @focus=${this._handleFocus}
    >
      <slot @change=${this._handleRadioChange}></slot>
    </div>`
  }

  #renderFieldControlFooter() {
    return html` <gds-form-control-footer
      class="size-${this.size}"
      .validationMessage=${this.invalid &&
      (this.errorMessage || this.validationMessage)}
    >
    </gds-form-control-footer>`
  }
}
