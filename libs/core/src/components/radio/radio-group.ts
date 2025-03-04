import { localized, msg } from '@lit/localize'
import { property, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { gdsCustomElement, html } from '../../scoping'
import { watch } from '../../utils/decorators/watch'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './radio.styles'

import '../../primitives/form-control-header'
import '../../primitives/form-control-footer'

import type { GdsRadio } from './radio'

@localized()
class RadioGroup extends GdsFormControlElement<string> {
  static styles = [styles]

  /**
   * Controls the font-size of label and supporting text on group form control header and single radio buttons respectively.
   */
  @property()
  size: 'large' | 'small' = 'large'

  /**
   * The direction in which radio buttons are displayed.
   */
  @property()
  direction: 'row' | 'column' = 'column'

  /**
   * The supporting text displayed between the label and the field.
   * This text provides additional context or information to the user.
   */
  @property({ attribute: 'supporting-text' })
  supportingText = ''

  /**
   * Whether the supporting text should be displayed or not.
   */
  @property({
    attribute: 'show-extended-supporting-text',
    type: Boolean,
    reflect: true,
  })
  showExtendedSupportingText = false

  @query('.content')
  private _contentElement!: HTMLElement

  get radios(): GdsRadio[] {
    return Array.from(
      this.querySelectorAll('[gds-element=gds-radio]'),
    ) as GdsRadio[]
  }

  connectedCallback() {
    super.connectedCallback()
    this.setAttribute('role', 'radiogroup')
    this.updateComplete.then(() => {
      this._syncRadioStates()
      this._initializeFocusable()
      //this._validateRadios()
    })
    this.addEventListener('invalid', this._syncRadioStates)
  }

  /** Sets up keyboard focus behavior for the radio group */
  private _initializeFocusable() {
    this._contentElement.setAttribute('tabindex', '0')
    this.radios.forEach((radio) => {
      radio.setAttribute('tabindex', '-1')
    })
  }

  protected _getValidityAnchor(): HTMLElement {
    return this._contentElement
  }

  /** Updates radio states when value changes */
  @watch('value')
  private _handleValueChange() {
    this._syncRadioStates()
    //this._validateRadios() // Add validation check
    //this.checkValidity()
  }

  /** Triggers validation when required state changes */
  // @watch('required')
  // private _handleRequiredChange() {
  //   this.checkValidity()
  // }

  /** Propagates size changes to all radio buttons */
  @watch('size')
  private _handleSizeChange() {
    this.radios.forEach((radio: any) => {
      radio.size = this.size
    })
  }

  /** Synchronizes checked state and validity across all radio buttons */
  @watch('invalid')
  private _syncRadioStates() {
    this.radios.forEach((radio: any) => {
      radio.checked = radio.value === this.value
      radio.size = this.size
      radio.invalid = this.invalid
    })
  }

  /** Handles focus management when group receives focus */
  private _handleFocus() {
    const selectedRadio = this.radios.find((radio: any) => radio.checked)
    const radioToFocus = selectedRadio || this.radios[0]

    if (radioToFocus) {
      ;(radioToFocus as HTMLElement).focus()
    }
  }

  /** Handles radio selection, validation, and event dispatching */
  private _handleRadioChange(e: Event) {
    const radio = e.target as GdsRadio
    if (radio.hasAttribute('value')) {
      const newValue = radio.value

      this.value = newValue

      //const basicValidation = this._validateRadios()
      const validityCheck = this.checkValidity()

      // if (basicValidation && validityCheck) {
      //   this.invalid = false
      //   this.errorMessage = ''
      // }

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

  /** Handles keyboard navigation between radio buttons */
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
    //const basicValidation = this._validateRadios()
    const validityCheck = this.checkValidity()

    // if (basicValidation && validityCheck) {
    //   this.invalid = false
    //   this.errorMessage = ''
    // }

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

/**
 * @summary A form control component for grouping radio buttons.
 * @status beta
 *
 * @element gds-radio-group
 *
 * @slot - Default slot for radio buttons (accepts `gds-radio` elements)
 * @slot extended-supporting-text - A longer supporting text that will be displayed in a panel when the user clicks the info button
 *
 * @event change - Fired when a radio button selection changes
 * @event input - Fired when a radio button selection changes
 *
 */
@gdsCustomElement('gds-radio-group')
export class GdsRadioGroup extends RadioGroup {}
