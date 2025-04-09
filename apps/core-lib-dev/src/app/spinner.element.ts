import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/spinner/index.js'
import '@sebgroup/green-core/components/flex/index.js'

@customElement('spinner-example')
export class SpinnerExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`<gds-flex
      flex-direction="column"
      gap="s"
      align-items="center"
      justify-content="center"
      min-height="50vh"
    >
      <h3>Spinner</h3>
      <gds-spinner></gds-spinner>
    </gds-flex> `
  }
}
