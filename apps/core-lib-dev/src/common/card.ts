import { LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { nothing } from 'lit/html.js'

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

  @state()
  accessor footerSlotOccupied = false

  render() {
    return html`
      <gds-card background="secondary" padding="0">
        <gds-flex flex-direction="column" gap="xl" padding="l">
          <gds-flex justify-content="space-between" align-items="center">
            <slot name="header"></slot>
            <slot name="action"></slot>
          </gds-flex>
          <gds-flex flex-direction="column" gap="m">
            <slot></slot>
          </gds-flex>
        </gds-flex>
        <gds-flex
          border="4xs/primary 0 0 0"
          flex-direction="column"
          padding="m l m m"
        >
          <slot name="footer"></slot>
        </gds-flex>
      </gds-card>
    `
  }
  
}
