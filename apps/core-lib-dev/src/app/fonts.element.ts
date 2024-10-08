import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/layout/grid/index.js'
import '@sebgroup/green-core/components/content/text/index.js'

@customElement('fonts-example')
export class FontsExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-grid .columns=${'3'} .gap=${'l'}>
        <gds-button style="font-family: SEB SansSerif;"
          >SEB SansSerif</gds-button
        >
        <gds-button style="font-family: SEB SansSerif digital;"
          >SEB SansSerif Digital</gds-button
        >
        <gds-button style="font-family: SEB SansSerif Gds;"
          >SEB SansSerif GDS</gds-button
        >
        <p style="font-family: SEB SansSerif;">Deposits (1)</p>
        <p style="font-family: SEB SansSerif digital;">Deposits (1)</p>
        <p style="font-family: SEB SansSerif Gds;">Deposits (1)</p>
      </gds-grid>
    `
  }
}
