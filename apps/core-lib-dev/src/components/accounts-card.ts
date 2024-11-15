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
          animation-name: tp-scale, tp-scale;
          animation-fill-mode: both;
          animation-timing-function: ease-in-out;
          animation-direction: normal, reverse;
          animation-timeline: view(x);
          animation-range:
            entry 0% entry 20%,
            exit -20% exit 20%;
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
      <gds-card variant=${this.name} part="account" class="account">
        <gds-flex align-items="center" justify-content="center" padding="xl">
          <slot></slot>
        </gds-flex>
      </gds-card>
    `
  }
}
