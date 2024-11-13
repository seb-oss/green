import { LitElement, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

@customElement('tp-card')
export class TPCard extends LitElement {

    @state()
    accessor footerSlotOccupied = false

    @property({ type: Boolean })
    accessor wide = false
    
    connectedCallback() {
        super.connectedCallback(); 
    }

  render() {
    return html`
      <gds-card background="secondary" padding="0" shadow="s">
        <gds-flex flex-direction="column" gap="xl" padding=${this.wide ? '' : 'l'}>
          <gds-flex justify-content="space-between" align-items="center" padding=${this.wide ? 'l l 0 l' : ''}>
            <slot name="header"></slot>
            <slot name="action"></slot>
          </gds-flex>
          <gds-flex flex-direction="column" gap="m">
            <slot></slot>
          </gds-flex>
        </gds-flex>
        ${this.#renderFooterSlot()}
      </gds-card>
    `
  }

  #renderFooterSlot() {
    return html`
          <gds-flex
            border="4xs/primary 0 0 0"
            flex-direction="column"
            padding="m l m m" 
          >
            <slot name="footer"></slot>
          </gds-flex>`
  }
}
