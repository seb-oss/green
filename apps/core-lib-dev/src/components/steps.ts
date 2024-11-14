import { LitElement } from 'lit'
import { customElement, query } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/container/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/icon/icons/checklist.js'
import './step'
import './step-bullet'

@customElement('tp-steps')
export class TPSteps extends LitElement {
  @query('.steps')
  accessor stepsContainer!: HTMLElement

  firstUpdated() {
    this.addEventListeners();
  }

  addEventListeners() {
    const bullets = this.shadowRoot!.querySelectorAll('tp-step-bullet');
    bullets.forEach(bullet => {
      bullet.addEventListener('click', this.handleBulletClick.bind(this));
    });
  }

  handleBulletClick(event: Event) {
    const bullet = event.currentTarget as HTMLElement;
    const stepName = bullet.getAttribute('step');
    const step = this.shadowRoot!.querySelector(`tp-step[name="${stepName}"]::part(step)`);
    if (step) {
      step.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Update active state of bullets
    const bullets = this.shadowRoot!.querySelectorAll('tp-step-bullet');
    bullets.forEach(b => b.removeAttribute('active'));
    bullet.setAttribute('active', '');
  }


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
      <gds-flex flex-direction="column" padding="xl 0" gap="xl">
        <div class="steps">
          <tp-step name="s1"></tp-step>
          <tp-step name="s2"></tp-step>
          <tp-step name="s3"></tp-step>
          <tp-step name="s4"></tp-step>
        </div>
        <gds-flex align-items="center" justify-content="center" gap="2xs">
          <tp-step-bullet step="s1"></tp-step-bullet>
          <tp-step-bullet step="s2" active></tp-step-bullet>
          <tp-step-bullet step="s3"></tp-step-bullet>
          <tp-step-bullet step="s4"></tp-step-bullet>
        </gds-flex>
      </gds-flex>
    `
  }
}
