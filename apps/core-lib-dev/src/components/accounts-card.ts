import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/container/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/icon/icons/checklist.js'

@customElement('tp-accounts-card')
export class TPAccountsModalCard extends LitElement {
  @property({ type: String })
  name?: string

  render() {
    return html`
      <style>
        :host {
          display: contents;
        }

        .account {
          scroll-snap-align: center;
          width: 246px;
          transition: all 248ms;
          scale: 1;
          opacity: 1;

          svg {
            width: 80%;
            height: auto;
          }

          @supports (animation-timeline: view(x)) and
            (animation-range: entry 0% entry 60vw) {
            animation-name: tp-card, tp-card;
            animation-fill-mode: both;
            animation-timing-function: ease-in-out;
            animation-direction: normal, reverse;
            animation-timeline: view(x);
            animation-range:
              entry 0% entry 60vw,
              exit -20vw exit 40vw;
          }
        }

        @keyframes tp-card {
          0% {
            scale: 0.8;
            opacity: 0.4;
          }
        }
      </style>
      <gds-card
        variant=${this.name}
        part="account"
        class="account"
        padding="0"
        border="0"
      >
        <gds-flex
          align-items="center"
          justify-content="center"
          padding="l"
          flex-direction="column"
          gap="l"
        >
          <slot></slot>
        </gds-flex>
      </gds-card>
    `
  }
}
