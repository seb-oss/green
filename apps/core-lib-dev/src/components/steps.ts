import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/container/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/icon/icons/checklist.js'
import './step.ts'

@customElement('tp-steps')
export class TPSteps extends LitElement {
  render() {
    return html`
      <style>
        :host {
          --steps: 4;
          --space: var(--gds-space-xl);
        }

        .steps {
          display: flex;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          width: 100%;
          gap: 32px;
          position: relative;
          scrollbar-width: none;
          background: #fff;
          padding-inline: var(--space);
          box-sizing: border-box;
        }

        tp-step::part(step) {
          scroll-snap-align: center;
          scroll-margin-inline-start: var(--space);
          --width: calc(100vw - var(--space) * (var(--steps) + 2));
          min-inline-size: calc(var(--width) / (var(--steps) - 1));
        }
      </style>
      <gds-flex
        flex-direction="column"
        background="secondary"
        padding="xl 0"
        gap="xl"
      >
        <div class="steps">
          <tp-step id="step-1"></tp-step>
          <tp-step id="step-2"></tp-step>
          <tp-step id="step-3"></tp-step>
          <tp-step id="step-4"></tp-step>
        </div>
        <gds-flex align-items="center" justify-content="center" gap="3xs">
          <a href="#step-1">
            <gds-container
              border-radius="max"
              width="6px"
              height="6px"
              level="3"
              background="positive; hover:primary"
              cursor="pointer"
              transition="all 0.4s"
              transform="hover:scale(1.2)"
            ></gds-container>
          </a>
          <a href="#step-2">
            <gds-container
              border-radius="max"
              width="6px"
              height="6px"
              level="3"
              background="positive; hover:primary"
              cursor="pointer"
              transition="all 0.4s"
              transform="hover:scale(1.2)"
            ></gds-container>
          </a>
        </gds-flex>
      </gds-flex>
    `
  }
}
