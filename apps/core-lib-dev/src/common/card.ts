import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

@customElement('tp-card')
export class TPCard extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-card>
        <gds-flex flex-direction="column" gap="xl">
          <gds-flex justify-content="space-between" align-items="center">
            <slot name="header"></slot>
            <slot name="action"></slot>
          </gds-flex>
          <gds-flex flex-direction="column" gap="m">
            <slot></slot>
          </gds-flex>
          <gds-flex justify-content="flex-start" align-items="center">
            <slot name="footer"></slot>
          </gds-flex>
        </gds-flex>
      </gds-card>
    `
  }
}
