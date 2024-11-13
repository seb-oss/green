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
import '@sebgroup/green-core/components/mask/mask.js'
import '@sebgroup/green-core/components/icon/icons/chevron-bottom.js'
import './dashboard.css'
import '../../components/accounts'
import '../../common/card'

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
            <gds-text slot="header" font-size="heading-m">Konton</gds-text>
            <gds-button slot="action" rank="tertiary">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            <gds-container slot="content">
              <gds-flex
                align-items="center"
                justify-content="flex-start"
                gap="xs"
              >
                <gds-flex align-items="center" flex="1" gap="s">
                  <gds-flex flex="1" justify-content="space-between">
                    <gds-flex flex-direction="column" gap="xs">
                      <gds-flex gap="s" align-items="flex-start">
                        <gds-flex
                          level="3"
                          width="40px"
                          height="40px"
                          background="secondary"
                          border-radius="max"
                          align-items="center"
                          justify-content="center"
                        >
                          <gds-icon-credit-card></gds-icon-credit-card>
                        </gds-flex>
                        <gds-flex flex-direction="column" gap="xs">
                          <gds-flex flex-direction="column">
                            <gds-text font-size="detail-m">12 500,50</gds-text>
                            <gds-text font-size="detail-s" color="secondary"
                              >5896 13 000 20</gds-text
                            >
                          </gds-flex>
                          <gds-badge variant="negative"
                            >Saknas pengar för nästa dragning</gds-badge
                          >
                        </gds-flex>
                      </gds-flex>
                    </gds-flex>
                    <gds-text font-size="detail-m">10 000,00</gds-text>
                  </gds-flex>
                  <gds-button size="small" rank="tertiary">
                    <gds-icon-chevron-right></gds-icon-chevron-right>
                  </gds-button>
                </gds-flex>
              </gds-flex>
            </gds-container>
            <gds-button slot="footer">Se alla</gds-button>
          </tp-card>
          <!-- <gds-accounts></gds-accounts> -->
          <gds-card>[CONTENT GOES HERE]</gds-card>
          <gds-card>[CONTENT GOES HERE]</gds-card>
        </gds-grid>
      </gds-flex>
    `
  }
}
