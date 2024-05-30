import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { constrainSlots } from '../../utils/helpers'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import styles from './radio.css'
import { GdsRadioGroup } from './radio-group'

@customElement('gds-radio')
export class GdsRadio extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  // Private members
  #internals: ElementInternals
  value: any

  constructor() {
    super()
    this.#internals = this.attachInternals()
    constrainSlots(this)
  }

  private inputElement: HTMLInputElement | null = null
  private exludeAttr = ['id', 'label']

  private reflectAttributesToInput() {
    if (this.inputElement) {
      const attributes = this.attributes
      for (let i = 0; i < attributes.length; i++) {
        const attribute = attributes[i]
        if (!this.exludeAttr.includes(attribute.name)) {
          this.inputElement.setAttribute(attribute.name, attribute.value)
        }
      }
    }
  }

  update(changedProperties: Map<PropertyKey, unknown>) {
    super.update(changedProperties)
    if (!this.inputElement) {
      this.inputElement = this.shadowRoot?.getElementById(
        'radio',
      ) as HTMLInputElement
    }
    this.reflectAttributesToInput()
  }

  handleClick() {
    const radioGroup = this.closest('gds-radio-group')

    if (radioGroup instanceof GdsRadioGroup) {
      radioGroup.selectedValue = this.value
    }
  }

  render() {
    return html`
      <label class="gds-radio">
        <input id="radio" type="radio" />
      </label>
      <label for="radio">${this.textContent}</label>
    `
  }
}
