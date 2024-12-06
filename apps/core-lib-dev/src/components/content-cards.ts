import { css, LitElement } from 'lit'
import { customElement, property, query, state } from 'lit/decorators.js'

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

import childImg from '../assets/child.png?url'
import solarpanelImg from '../assets/solarpanels.png?url'
import womanImg from '../assets/woman.png?url'

@customElement('tp-content-cards')
export class TPContentCardCarousel extends LitElement {
  static styles = css`
    .cards {
      width: 100%;
      max-width: calc(100vw - calc(var(--gds-space-xl) * 2));
      overflow-x: auto;
      scroll-snap-type: x mandatory;

      display: grid;
      grid-template-columns: repeat(var(--cards), 87%);
      gap: var(--gds-space-m);
      align-items: center;
      scrollbar-width: none;

      > * {
        scroll-snap-align: center;
        scroll-margin-inline-start: var(--gds-space-l);
      }
    }

    tp-content-card {
      opacity: 1;
      transform: scale(1);

      transition:
        opacity 0.3s,
        transform 0.3s;
    }

    tp-content-card:not(.active) {
      opacity: 0.5;
      transform: scale(0.9);
    }
  `

  @state()
  private activeStep = 's1'

  @query('.cards')
  cardsContainer!: HTMLElement

  firstUpdated() {
    this.addEventListeners()

    const cards = this.cardsContainer.querySelectorAll('tp-content-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove 'active' from all slides
            cards.forEach((card) => card.classList.remove('active'))

            // Add 'active' to the currently visible slide
            entry.target.classList.add('active')
            this.activeStep = entry.target.getAttribute('name') || 's1'
          }
        })
      },
      {
        root: this.cardsContainer,
        threshold: 0.6,
      },
    )

    this.cardsContainer
      .querySelectorAll('tp-content-card')
      .forEach((card) => observer.observe(card))

    this.style.setProperty('--cards', cards.length.toString())
  }

  addEventListeners() {
    const bullets = this.shadowRoot?.querySelectorAll('tp-step-bullet')
    bullets?.forEach((bullet) => {
      bullet.addEventListener('click', this.handleBulletClick.bind(this))
    })
  }

  handleBulletClick(event: Event) {
    const bullet = event.currentTarget as HTMLElement
    const stepName = bullet.getAttribute('step')
    const step = this.shadowRoot?.querySelector(
      `[name="${stepName}"]::part(step)`,
    )
    if (step) {
      step.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    // Update active state of bullets
    const bullets = this.shadowRoot?.querySelectorAll('tp-step-bullet')
    bullets?.forEach((b) => b.removeAttribute('active'))
    bullet.setAttribute('active', '')
    this.cardsContainer
      .querySelector(`[name="${bullet.getAttribute('step')}"]`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  render() {
    return html`
      <gds-flex flex-direction="column" gap="xl">
        <div class="cards">
          <tp-content-card
            part="step"
            name="s1"
            img="${solarpanelImg}"
            heading="Gröna Bolånet"
            body="Köp ett klimatsmart boende och få en bättre ränta"
            link="Är ditt boende klimatsmart?"
          ></tp-content-card>
          <tp-content-card
            part="step"
            name="s2"
            img="${childImg}"
            heading="Gröna Bolånet"
            body="Köp ett klimatsmart boende och få en bättre ränta"
            link="Är ditt boende klimatsmart?"
          ></tp-content-card>
          <tp-content-card
            part="step"
            name="s3"
            img="${womanImg}"
            heading="Gröna Bolånet"
            body="Köp ett klimatsmart boende och få en bättre ränta"
            link="Är ditt boende klimatsmart?"
          ></tp-content-card>
        </div>
        <gds-flex
          align-items="center"
          justify-content="center"
          gap="2xs"
          max-width="calc(100vw - calc(var(--gds-space-xl) * 2))"
        >
          <tp-step-bullet
            step="s1"
            .active=${this.activeStep === 's1'}
          ></tp-step-bullet>
          <tp-step-bullet
            step="s2"
            .active=${this.activeStep === 's2'}
          ></tp-step-bullet>
          <tp-step-bullet
            step="s3"
            .active=${this.activeStep === 's3'}
          ></tp-step-bullet>
        </gds-flex>
      </gds-flex>
    `
  }
}

@customElement('tp-content-card')
export class TPContentCard extends LitElement {
  static styles = css`
    .content-card {
      display: grid;
      grid: 1fr / 1fr;

      > * {
        grid-column: 1;
        grid-row: 1;
      }

      aspect-ratio: 3 / 4;
      overflow: hidden;
    }
  `

  @property({ type: String })
  heading = ''

  @property({ type: String })
  img = ''

  @property({ type: String })
  body = ''

  @property({ type: String })
  link = ''

  render() {
    return html`
      <gds-card class="content-card" padding="0" border="0">
        <gds-img src="${this.img}" object-fit="cover"></gds-img>
        <gds-flex
          justify-content="flex-end"
          flex-direction="column"
          width="100%"
        >
          <gds-card level="2" margin="xl" padding="xl">
            <gds-flex flex-direction="column" gap="l">
              <gds-text font-size="heading-m" text-wrap="wrap"
                >${this.heading}</gds-text
              >
              <gds-text font-size="detail-s" text-wrap="wrap"
                >${this.body}</gds-text
              >
              <gds-link href="#" variant="secondary"
                ><gds-flex
                  justify-content="space-between"
                  width="100%"
                  flex-wrap="wrap"
                  ><gds-text text-wrap="wrap">${this.link}</gds-text
                  ><gds-icon-arrow-right></gds-icon-arrow-right></gds-flex
              ></gds-link>
            </gds-flex>
          </gds-card>
        </gds-flex>
      </gds-card>
    `
  }
}
