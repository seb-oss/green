/* eslint-disable @nx/enforce-module-boundaries */
import { css, LitElement } from 'lit'
import { customElement, property, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '../../../../libs/core/src/primitives/ripple'
import '@sebgroup/green-core/components/icon/icons/home-open.js'
import '@sebgroup/green-core/components/icon/icons/block.js'
import '@sebgroup/green-core/components/icon/icons/cloudy-sun.js'
import './slider-input'

@customElement('tp-loan-calculator')
export class TpInteractionCalc extends LitElement {
  @state()
  amount = 175000

  @state()
  year = 5

  @state()
  rate = 6.95

  @state()
  tab: 'house' | 'apartment' | 'vacation' = 'house'

  private currencyFormatter = new Intl.NumberFormat('sv-SE', {
    style: 'currency',
    currency: 'SEK',
    maximumFractionDigits: 0,
  })

  private percentageFormatter = new Intl.NumberFormat('sv-SE', {
    style: 'percent',
    maximumFractionDigits: 2,
  })

  render() {
    const baseCost = calculateMonthlyPayment(this.amount, this.year, this.rate)
    const montlyCost = this.currencyFormatter.format(baseCost)
    const montlyCostWithProtection = this.currencyFormatter.format(
      baseCost + 135,
    )
    return html`<gds-card>
      <gds-flex flex-direction="column" gap="l" padding="l">
        <gds-grid columns="1; xs{3}">
          <tp-calculator-icon-button
            @click=${() => {
              this.tab = 'house'
            }}
            .selected=${this.tab === 'house'}
            label="Villa"
            icon="house"
          ></tp-calculator-icon-button>
          <tp-calculator-icon-button
            @click=${() => {
              this.tab = 'apartment'
            }}
            .selected=${this.tab === 'apartment'}
            label="Lägenhet"
            icon="apartment"
          ></tp-calculator-icon-button>
          <tp-calculator-icon-button
            @click=${() => {
              this.tab = 'vacation'
            }}
            .selected=${this.tab === 'vacation'}
            label="Fritidshus"
            icon="vacation"
          ></tp-calculator-icon-button>
        </gds-grid>

        <tp-slider-input
          heading="Jag vill låna"
          .max=${350000}
          .value=${this.amount}
          .step=${1000}
          .formatter=${this.currencyFormatter}
          @change=${(e: CustomEvent) => {
            this.amount = e.detail.value
          }}
        ></tp-slider-input>

        <tp-slider-input
          heading="Återbetalningstid"
          .min=${1}
          .max=${10}
          .value=${this.year}
          .step=${1}
          .formatter=${{
            format: (value: number | bigint) => `${value} år`,
          } as Intl.NumberFormat}
          @change=${(e: CustomEvent) => {
            this.year = e.detail.value
          }}
        ></tp-slider-input>

        <tp-slider-input
          heading="Exempelränta"
          .min=${5}
          .max=${20}
          .value=${this.rate}
          .step=${0.1}
          .formatter=${{
            format: (value: number) =>
              this.percentageFormatter.format(value / 100),
          } as Intl.NumberFormat}
          @change=${(e: CustomEvent) => {
            this.rate = e.detail.value
          }}
        ></tp-slider-input>

        <gds-flex flex-direction="column" gap="xs">
          <gds-text
            margin="0 auto 0 auto"
            font-size="heading-l"
            width="fit-content"
            >${montlyCost}/mån</gds-text
          >
          <gds-text
            level="2"
            margin="0 auto 0 auto"
            font-size="preamble-m"
            width="fit-content"
            >med låneskydd ${montlyCostWithProtection}/mån</gds-text
          >
        </gds-flex>

        <gds-button href="#"
          ><gds-text font-size="detail-m">Ansök om bolån</gds-text></gds-button
        >
      </gds-flex>
    </gds-card>`
  }
}

function calculateMonthlyPayment(
  amount: number,
  years: number,
  annualRate: number,
): number {
  // Omvandla årsvis ränta till månatlig ränta
  const monthlyRate = annualRate / 12 / 100

  // Totalt antal månader
  const totalMonths = years * 12

  // Annuitetsformeln för månatlig betalning
  const monthlyPayment =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)

  return monthlyPayment
}

@customElement('tp-calculator-icon-button')
export class TpIconButton extends LitElement {
  static styles = css`
    button {
      border: none;
      cursor: pointer;

      border-radius: var(--gds-space-s);
      overflow: hidden;

      position: relative;

      padding: 0;
      width: 100%;
    }
    .fix {
      border-radius: 0;
    }
  `

  @property({ type: String })
  label = ''

  @property({ type: String })
  icon: 'house' | 'apartment' | 'vacation' = 'house'

  @property({ type: Boolean })
  selected = false

  render() {
    return html`<button
      @click=${() => {
        this.dispatchEvent(new CustomEvent('click'))
      }}
      aria-selected="${this.selected}"
      type="button"
      rank="tertiary"
      size="large"
      padding="m"
    >
      <gds-card
        clas="card"
        variant="${this.selected ? 'primary' : 'secondary'}"
        level="3"
      >
        <gds-flex
          flex-direction="column"
          justify-content="center"
          align-items="center"
          gap="2xs"
          width="100%"
        >
          ${this.icon === 'house'
            ? html` <gds-icon-home-open
                height="24"
                width="24"
              ></gds-icon-home-open>`
            : undefined}
          ${this.icon === 'apartment'
            ? html` <gds-icon-block height="24" width="24"></gds-icon-block>`
            : undefined}
          ${this.icon === 'vacation'
            ? html` <gds-icon-cloudy-sun
                height="24"
                width="24"
              ></gds-icon-cloudy-sun>`
            : undefined}
          <gds-text font-size="detail-s">${this.label}</gds-text>
        </gds-flex>
      </gds-card>
      <gds-ripple class="fix"></gds-ripple>
    </button>`
  }
}
