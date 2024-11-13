import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

@customElement('gds-accounts')
export class GdsAccounts extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-card>
        <gds-flex align-items="center" justify-content="space-between">
          <gds-text>Konton</gds-text>
          <gds-button rank="tertiary">
            <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
          </gds-button>
        </gds-flex>
      </gds-card>
    `
  }
}
