import { LitElement, nothing } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

@customElement('tp-card')
export class TPCard extends LitElement {
  @state()
  hideFooter = false

  @property({ type: Boolean })
  wide = false

  @state()
  footerSlotOccupied = false

  connectedCallback() {
    super.connectedCallback()
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <gds-card background="secondary" padding="0" shadow="s">
        <gds-flex
          flex-direction="column"
          gap="xl"
          padding=${this.wide ? '' : 'l'}
        >
          <gds-flex
            justify-content="space-between"
            align-items="center"
            padding=${this.wide ? 'l l 0 l' : ''}
          >
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
    return html`<div style="display: ${this.footerSlotOccupied ? '' : 'none'}">
      <gds-flex
        border="4xs/primary 0 0 0"
        flex-direction="column"
        padding="m l m m"
      >
        <slot name="footer" @slotchange=${this.#handleSlotChange}></slot>
      </gds-flex>
    </div>`
  }

  #handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement
    const assignedNodes = slot.assignedNodes({ flatten: true })
    this.footerSlotOccupied =
      assignedNodes.length > 0 &&
      assignedNodes.some(
        (node) =>
          node.nodeType === Node.ELEMENT_NODE ||
          (node.nodeType === Node.TEXT_NODE && node.textContent?.trim() !== ''),
      )
  }
}
