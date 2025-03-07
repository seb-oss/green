import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/spinner/index.js'

@customElement('spinner-example')
export class SpinnerExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html` <div style="width:320px; margin: 8rem auto;">
      <h3>Spinner</h3>
      <gds-spinner></gds-spinner>
    </div>`
  }
}
