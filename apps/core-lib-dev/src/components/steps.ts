import { LitElement } from 'lit'
import { customElement, query } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/container/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/icon/icons/checklist.js'
import '@sebgroup/green-core/components/icon/icons/piggy-bank.js'
import '@sebgroup/green-core/components/icon/icons/pencil-wave.js'
import '@sebgroup/green-core/components/icon/icons/bank.js'
import './step'
import './step-bullet'

@customElement('tp-steps')
export class TPSteps extends LitElement {
  @query('.steps')
  stepsContainer!: HTMLElement

  firstUpdated() {
    this.addEventListeners()
  }

  addEventListeners() {
    const bullets = this.shadowRoot!.querySelectorAll('tp-step-bullet')
    bullets.forEach((bullet) => {
      bullet.addEventListener('click', this.handleBulletClick.bind(this))
    })
  }

  handleBulletClick(event: Event) {
    const bullet = event.currentTarget as HTMLElement
    const stepName = bullet.getAttribute('step')
    const step = this.shadowRoot!.querySelector(
      `tp-step[name="${stepName}"]::part(step)`,
    )
    if (step) {
      step.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    // Update active state of bullets
    const bullets = this.shadowRoot!.querySelectorAll('tp-step-bullet')
    bullets.forEach((b) => b.removeAttribute('active'))
    bullet.setAttribute('active', '')
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

        @media screen and (max-width: 768px) {
          .steps {
            padding-inline: 0;
            gap: 0;
          }
          tp-step::part(step) {
            min-width: 80vw;
            scroll-margin-inline-start: 0;
          }
        }
      </style>
      <gds-flex flex-direction="column" padding="xl 0" gap="xl">
        <div class="steps">
          <tp-step
            title="Kom igång här!"
            description="Få en översikt av dina konton, transaktioner, debit och kreditkort."
            label="Skaffa Enkla vardagen"
            name="s1"
          >
            <gds-icon-checklist slot="icon"></gds-icon-checklist>
          </tp-step>
          <tp-step
            title="Länka dina andra banker"
            description="Allt för att göra din vardagsekonomi överskådlig."
            label="Länka konto"
            name="s4"
          >
            <gds-icon-bank slot="icon"></gds-icon-bank>
          </tp-step>
          <tp-step
            title="Börja spara"
            description="Vi hjälper dig att ta första steget mot en stabil och säker ekonomisk framtid."
            label="Öppna ett sparkonto"
            name="s2"
          >
            <gds-icon-piggy-bank slot="icon"></gds-icon-piggy-bank>
          </tp-step>
          <tp-step
            title="Vi vill lära känna dig"
            description="För att vi ska kunna guida dig till en trygg ekonomi behöver vi ställa lite frågor. Det tar bara ett par minuter."
            label="Svara på frågor"
            name="s3"
          >
            <gds-icon-pencil-wave slot="icon"></gds-icon-pencil-wave>
          </tp-step>
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
