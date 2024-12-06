import { css, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/container/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/icon/icons/checklist.js'

@customElement('tp-step')
export class TPStep extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
    @supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
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

        @media (max-width: 768px) {
          animation-range:
            entry 0% entry 60vw,
            exit -10vw exit 100vw;
        }
      }

      @keyframes tp-scale {
        0% {
          scale: 0.8;
          opacity: 0.4;
        }
      }
    }
    @media (max-width: 768px) {
      .step:first-child {
        margin-left: 5vw;
      }
      .step:last-child {
        margin-right: 5vw;
      }
    }
  `

  @property({ type: String })
  name?: string

  @property({ type: String })
  title!: string

  @property({ type: String })
  description?: string

  @property({ type: String })
  label?: string

  render() {
    return html`
      <gds-card
        id=${this.id}
        part="step"
        class="step"
        padding="xs"
        background="#f3efeb"
      >
        <gds-flex
          align-items="center"
          justify-content="space-between"
          padding="xl"
        >
          <gds-text>${this.title}</gds-text>
          <gds-flex
            width="40px"
            height="40px"
            align-items="center"
            justify-content="center"
            border-radius="max"
            background="#f7f5f3"
          >
            <slot name="icon"></slot>
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
          <gds-text font-size="preamble-xs"> ${this.description} </gds-text>
          <gds-button size="small">${this.label}</gds-button>
        </gds-flex>
      </gds-card>
    `
  }
}
