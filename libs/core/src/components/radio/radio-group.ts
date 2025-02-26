// radio-group.ts
import { property, state } from 'lit/decorators.js'

import { gdsCustomElement, html } from '../../scoping'
import { GdsFormControlElement } from '../form/form-control'
import { styles } from './radio.styles'

import '../../primitives/form-control-header'
import '../../primitives/form-control-footer'
import '../../primitives/field-label'

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

  @property({ attribute: 'supporting-text' })
  supportingText = ''

  @property({
    attribute: 'show-extended-supporting-text',
    type: Boolean,
    reflect: true,
  })
  showExtendedSupportingText = false

  @state()
  private _validityAnchor?: HTMLElement

  connectedCallback() {
    super.connectedCallback()
    console.debug('[RadioGroup] Connected')
    this.updateComplete.then(() => this._syncRadioStates())
  }

  private _syncRadioStates() {
    const radios = this.querySelectorAll('gds-radio')
    radios.forEach((radio) => {
      const radioElement = radio as any
      radioElement.checked = radioElement.value === this.value
    })

    if (radios.length > 0) {
      this._validityAnchor = radios[0] as HTMLElement
    }
  }

  private _uncheckOtherRadios(selectedRadio: HTMLElement) {
    const radios = this.querySelectorAll('gds-radio')
    radios.forEach((radio) => {
      if (radio !== selectedRadio) {
        ;(radio as any).checked = false
      }
    })
  }

  private _handleRadioChange(e: Event) {
    const radio = e.target as HTMLElement
    if (radio.hasAttribute('value')) {
      const newValue = radio.getAttribute('value') as ValueT

      this._uncheckOtherRadios(radio)
      this.value = newValue
      this._validityAnchor = radio

      this.dispatchEvent(
        new CustomEvent('change', {
          detail: { value: this.value },
          bubbles: true,
        }),
      )
      this.dispatchEvent(new Event('input', { bubbles: true }))
    }
  }

  protected override _getValidityAnchor(): HTMLElement {
    return this._validityAnchor || this
  }

  render() {
    return html`
      <div class="radio-group" role="radiogroup" aria-labelledby="group-label">
        <gds-form-control-header class="size-${this.size}">
          <label id="group-label" for="input" slot="label">${this.label}</label>
          <span slot="supporting-text" id="supporting-text">
            ${this.supportingText}
          </span>
          <slot
            name="extended-supporting-text"
            slot="extended-supporting-text"
          ></slot>
        </gds-form-control-header>
        <div class="content">
          <slot @change=${this._handleRadioChange}></slot>
        </div>
        <gds-form-control-footer
          class="size-${this.size}"
          .validationMessage=${this.invalid &&
          (this.errorMessage || this.validationMessage)}
        ></gds-form-control-footer>
      </div>
    `
  }
}
