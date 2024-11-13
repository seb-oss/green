import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/badge/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/icon/icons/arrow-left-right.js'
import '@sebgroup/green-core/components/icon/icons/plus-large.js'
import '@sebgroup/green-core/components/icon/icons/calendar.js'
import '@sebgroup/green-core/components/icon/icons/chevron-right.js'
import '@sebgroup/green-core/components/icon/icons/credit-card.js'
import '@sebgroup/green-core/components/icon/icons/knife-spoon.js'
import '@sebgroup/green-core/components/icon/icons/arrow-out-of-box.js'
import '@sebgroup/green-core/components/mask/mask.js'
import '@sebgroup/green-core/components/icon/icons/chevron-bottom.js'
import './dashboard.css'
import '../../components/accounts'
import '../../common/card'
import '../../common/list-item'

@customElement('gds-dashboard')
export class CardExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-flex width="100%" flex-direction="column" gap="xl">
        <gds-flex justify-content="space-between">
          <gds-flex flex-direction="column">
            <gds-text tag="h1" font-size="heading-l">Hej!</gds-text>
            <gds-text tag="h2" font-size="heading-l">Whats going on?</gds-text>
          </gds-flex>
          <gds-flex gap="xs">
            <gds-button rank="secondary">
              <gds-icon-arrow-left-right></gds-icon-arrow-left-right>
            </gds-button>
            <gds-button rank="secondary">
              <gds-icon-plus-large></gds-icon-plus-large>
            </gds-button>
            <gds-button rank="secondary">
              <gds-icon-calendar></gds-icon-calendar>
            </gds-button>
            <gds-button rank="secondary">
              Genvägar
              <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            </gds-button>
          </gds-flex>
        </gds-flex>
        <gds-grid columns="3" gap="xl">
          <tp-card>
            <!-- Header -->
            <gds-text slot="header" font-size="heading-s">Konton</gds-text>
            <gds-button slot="action" size="small" rank="tertiary">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            <!-- /Header -->
            <tp-list-item>
              <gds-icon-credit-card
                width="20"
                height="20"
                slot="icon"
              ></gds-icon-credit-card>
              <gds-flex
                flex-direction="column"
                gap="xs"
                border="0 0 4xs/primary 0"
                padding="0 0 m 0"
                flex="1"
              >
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">John Doe</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      5896 13 000 20
                    </gds-text>
                  </gds-flex>
                  <gds-flex flex-direction="column" align-items="flex-end">
                    <gds-text font-size="detail-m">10 000,00</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      5 december
                    </gds-text>
                  </gds-flex>
                </gds-flex>
                <gds-badge variant="warning">
                  Det saknas pengar för nästa dragning.
                </gds-badge>
              </gds-flex>
            </tp-list-item>
            <tp-list-item>
              <gds-icon-arrow-out-of-box
                width="20"
                height="20"
                slot="icon"
              ></gds-icon-arrow-out-of-box>
              <gds-flex
                flex-direction="column"
                gap="xs"
                border="0 0 4xs/primary 0"
                padding="0 0 m 0"
                flex="1"
              >
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">John Doe</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      5896 13 000 20
                    </gds-text>
                  </gds-flex>
                  <gds-flex flex-direction="column" align-items="flex-end">
                    <gds-text font-size="detail-m">47 300,00</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      5 december
                    </gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-flex>
            </tp-list-item>
            <tp-list-item>
              <gds-icon-knife-spoon
                width="20"
                height="20"
                slot="icon"
              ></gds-icon-knife-spoon>
              <gds-flex
                flex-direction="column"
                gap="xs"
                border="0 0 4xs/primary 0"
                padding="0 0 m 0"
                flex="1"
              >
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">John Doe</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      5896 13 000 20
                    </gds-text>
                  </gds-flex>
                  <gds-flex flex-direction="column" align-items="flex-end">
                    <gds-text font-size="detail-m">2 010 000,00</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      5 december
                    </gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-flex>
            </tp-list-item>

            <!-- Footer -->
            <gds-button slot="footer">Se alla</gds-button>
          </tp-card>
          <gds-card>[CONTENT GOES HERE]</gds-card>
          <gds-card>[CONTENT GOES HERE]</gds-card>
        </gds-grid>
      </gds-flex>
    `
  }
}
