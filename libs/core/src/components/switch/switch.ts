import { LitElement, html, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { constrainSlots } from '../../utils/helpers'
import { ifDefined } from 'lit/directives/if-defined.js'
import { when } from 'lit/directives/when.js'
import styles from './switch.css'

@customElement('gds-switch')
export class GdsSwitch extends LitElement {
  static styles = unsafeCSS(styles)

  static shadowRootOptions: ShadowRootInit = {
    mode: 'open',
    delegatesFocus: true,
  }

  // Private members
  #internals: ElementInternals

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
        'switch',
      ) as HTMLInputElement
    }
    this.reflectAttributesToInput()
  }

  render() {
    return html`
      <label class="gds-switch">
        <input id="switch" type="checkbox" />
      </label>
    `
  }
}
