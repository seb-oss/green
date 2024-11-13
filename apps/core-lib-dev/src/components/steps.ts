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
          min-height: 40vh;
          padding: var(--space);
          box-sizing: border-box;
        }

        tp-step::part(step) {
          scroll-snap-align: center;
          scroll-margin-inline-start: var(--space);
          --width: calc(100vw - var(--space) * (var(--steps) + 2));
          min-inline-size: calc(var(--width) / (var(--steps) - 1));
        }
      </style>
      <gds-flex flex-direction="column" background="secondary">
        <div class="steps">
          <tp-step></tp-step>
          <tp-step></tp-step>
          <tp-step></tp-step>
          <tp-step></tp-step>
        </div>
        <gds-flex align-items="center" justify-content="center">
          <gds-container
            border-radius="max"
            width="6px"
            height="6px"
            level="3"
            background="positive"
          ></gds-container>
        </gds-flex>
      </gds-flex>
    `
  }
}
