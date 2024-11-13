import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

@customElement('tp-list-item')
export class TPCard extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-flex gap="s">
        <gds-flex>
          <gds-flex
            level="3"
            width="40px"
            height="40px"
            background="secondary"
            border-radius="max"
            align-items="center"
            justify-content="center"
          >
            <gds-icon-credit-card width="20" height="20"></gds-icon-credit-card>
          </gds-flex>
        </gds-flex>
        <gds-flex
          flex-direction="column"
          gap="xs"
          flex="1"
          border="0 0 4xs/primary 0"
          padding="0 0 m 0"
        >
          <gds-flex flex-direction="column">
            <gds-text font-size="detail-m">12 500,50</gds-text>
            <gds-text font-size="detail-s" color="secondary">
              5896 13 000 20
            </gds-text>
          </gds-flex>
          <gds-badge variant="negative">
            Saknas pengar för nästa dragning
          </gds-badge>
        </gds-flex>
        <gds-flex>
          <gds-button size="small" rank="tertiary">
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </gds-flex>
      </gds-flex>
    `
  }
}
