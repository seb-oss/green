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
      <style>
        .carousel {
          display: flex;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          width: 100%;
          gap: 32px;
          position: relative;
          scrollbar-width: none;
          padding-inline-start: 5vw;
          box-sizing: border-box;

          &::before {
            content: '';
            display: flex;
            width: 200px;
            height: 100%;
            position: absolute;
            background: linear-gradient(to right, #f5f5f6, transparent);
          }
        }

        .snap {
          scroll-snap-align: start;
          scroll-margin-inline-start: 5vw;
        }
      </style>
      <div class="container">
        <div class="carousel">
          <gds-flex flex="0 0 calc(100vw/3)" class="snap">
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
                border-radius="s"
              >
                <gds-text font-size="preamble-xs"
                  >Få en översikt av dina konton, transaktioner, debit och
                  kreditkort.
                </gds-text>
                <gds-button size="small">Skaffa Enkla vardagen</gds-button>
              </gds-flex>
            </gds-card>
          </gds-flex>
          <gds-flex flex="0 0 calc(100vw/3)" class="snap">
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
                border-radius="s"
              >
                <gds-text font-size="preamble-xs"
                  >Få en översikt av dina konton, transaktioner, debit och
                  kreditkort.
                </gds-text>
                <gds-button size="small">Skaffa Enkla vardagen</gds-button>
              </gds-flex>
            </gds-card>
          </gds-flex>
          <gds-flex flex="0 0 calc(100vw/3)" class="snap">
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
                border-radius="s"
              >
                <gds-text font-size="preamble-xs"
                  >Få en översikt av dina konton, transaktioner, debit och
                  kreditkort.
                </gds-text>
                <gds-button size="small">Skaffa Enkla vardagen</gds-button>
              </gds-flex>
            </gds-card>
          </gds-flex>
          <gds-flex flex="0 0 calc(100vw/3)" class="snap">
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
                border-radius="s"
              >
                <gds-text font-size="preamble-xs"
                  >Få en översikt av dina konton, transaktioner, debit och
                  kreditkort.
                </gds-text>
                <gds-button size="small">Skaffa Enkla vardagen</gds-button>
              </gds-flex>
            </gds-card>
          </gds-flex>
        </div>
      </div>
    `
  }
}
