import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/container/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/icon/icons/checklist.js'

@customElement('tp-step')
export class TPStep extends LitElement {

  @property({ type: String })
  accessor id: string

  render() {
    return html`
      <style>
        :host {
          display: contents;
        }
        .step {
          animation-name: tp-scale, tp-scale;
          animation-fill-mode: both;
          animation-timing-function: ease-in-out;
          animation-direction: normal, reverse;
          animation-timeline: view(x);
          animation-range:
            entry 0% entry 60vw,
            exit -40vw exit 40vw;
          scale: 1;
          opacity: 1;
          filter: blur(0px);
        }

        @keyframes tp-scale {
          0% {
            scale: 0.8;
            opacity: 0.4;
            filter: blur(14px);
          }
        }
      </style>
      <gds-card id=${this.id} part="step" class="step" padding="xs" background="#f3efeb">
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
          <gds-text font-size="preamble-xs">
            Få en översikt av dina konton, transaktioner, debit och kreditkort.
          </gds-text>
          <gds-button size="small">Skaffa Enkla vardagen</gds-button>
        </gds-flex>
      </gds-card>
    `
  }
}
