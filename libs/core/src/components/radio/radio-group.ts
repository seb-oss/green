import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
// import styles from './radio.css'

@customElement('gds-radio-group')
export class GdsRadioGroup extends LitElement {
  // static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  // Private members
  #internals: ElementInternals
  selectedValue: any

  constructor() {
    super()
    this.#internals = this.attachInternals()
  }

  @property({ type: String, reflect: true, attribute: 'label' })
  label = 'Label'

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

  render() {
    return html`
      <fieldset
        class="gds-radio-group"
        role="radiogroup"
        aria-labelledby="label"
      >
        <label>${this.label}</label>
        <slot></slot>
      </fieldset>
    `
  }
}
