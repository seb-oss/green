import { css, LitElement } from 'lit'
import './chlorophyll.scss'
import './simple-values.element'
import './complex-values.element'
import './custom-localization.element'
import './segmented-control.element'
import { html } from '@sebgroup/green-core'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

//import { setLocale } from '@sebgroup/green-core/localization'

export class AppElement extends LitElement {
  static styles = css`
    :host {
      --gds-test-color: red;
    }
  `

  connectedCallback() {
    super.connectedCallback()
    //registerTransitionalStyles()
    //setLocale('sv')
  }

  render() {
    return html`
      <gds-theme color-scheme="dark">
        <div class="wrapper">
          <h1 class="mb-5" style="color: var(--gds-test-color)">
            Green Core test app
          </h1>
          <slot></slot>
        </div>
      </gds-theme>
    `
  }
}
customElements.define('sebgroup-root', AppElement)
