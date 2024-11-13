import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/container/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/icon/icons/checklist.js'

@customElement('tp-carousel-pink')
export class TPCarouselPink extends LitElement {
  render() {
    return html`
      <gds-grid columns="2" gap="xl" max-width="800px" margin="0 auto">
        <gds-card padding="xs" background="#f3efeb">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            padding="xl"
          >
            <gds-text>Kom igång här!</gds-text>
            <gds-flex
              width="40px"
              height="40px"
              align-items="center"
              justify-content="center"
              border-radius="max"
              background="#f7f5f3"
            >
              <gds-icon-checklist></gds-icon-checklist>
            </gds-flex>
          </gds-flex>
          <gds-flex
            padding="xl"
            background="#f7f5f3"
            gap="l"
            flex-direction="column"
            align-items="flex-start"
          >
            <gds-text font-size="preamble-xs"
              >Få en översikt av dina konton, transaktioner, debit och
              kreditkort.
            </gds-text>
            <gds-button size="small">Skaffa Enkla vardagen</gds-button>
          </gds-flex>
        </gds-card>
        <gds-card padding="xs" background="#f3efeb">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            padding="xl"
          >
            <gds-text>Kom igång här!</gds-text>
            <gds-flex
              width="40px"
              height="40px"
              align-items="center"
              justify-content="center"
              border-radius="max"
              background="#f7f5f3"
            >
              <gds-icon-checklist></gds-icon-checklist>
            </gds-flex>
          </gds-flex>
          <gds-flex
            padding="xl"
            background="#f7f5f3"
            gap="l"
            flex-direction="column"
            align-items="flex-start"
          >
            <gds-text font-size="preamble-xs"
              >Få en översikt av dina konton, transaktioner, debit och
              kreditkort.
            </gds-text>
            <gds-button size="small">Skaffa Enkla vardagen</gds-button>
          </gds-flex>
        </gds-card>
      </gds-grid>
    `
  }
}
