import { LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/container/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/rich-text/index.js'
import './page-header'
import '../../components/jit'
import '../../components/cards'
import '../../components/accounts'
import '../../components/accounts-modal'
import '../../components/quicklinks'
import '../../components/steps'
import '../../components/savings-goal'
import '../../components/carousel-pink'
import '../../components/savings-outside'
import '../../components/news'
import '../../components/savings-calculator'
import '../../components/todos'
import '../../components/empty-konton'
import '../../components/empty-card'
import '../../components/expenses'
import '../../components/savings'
import '../../components/page-section'
import './style.css'

import { PageHeader } from './page-header'

@customElement('tp-theme-page')
export class ThemePage extends LitElement {
  protected createRenderRoot() {
    return this
  }

  @query('tp-page-header')
  pageHeader!: PageHeader

  @property()
  hasExternalAccounts = false

  @property()
  hasAccounts = false

  @property()
  hasCards = false

  @property()
  hasSavings = false

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-flex flex-direction="column">
        <gds-container margin="0 0 3xl 0">
          <tp-page-header style="flex:1" @view-options-change=${() => {
            this.hasAccounts = this.pageHeader.viewOptions.hasAccounts
            this.hasCards = this.pageHeader.viewOptions.hasCards
            this.hasSavings = this.pageHeader.viewOptions.hasSavings
          }}></tp-page-header>
        </gds-container>

      <gds-container padding="0 2xs; m{0 s}">
        <!-- (Blue) Main dashboard section -->
        <tp-page-section .show=${this.hasAccounts}>
          <gds-grid columns="1; m{12}" gap="l" padding="0 s; l{0 4xl}">
            <gds-flex
              grid-column="1; m{1 / span 5}"
              flex-direction="column"
              gap="l"
            >
              <tp-accounts-modal></tp-accounts-modal>
              <tp-accounts></tp-accounts>
              <tp-expenses></tp-expenses>
            </gds-flex>
            <gds-flex
              grid-column="1; m{6 / span 4}"
              flex-direction="column"
              gap="l"
            >
              ${when(
                this.hasCards,
                () => html`<tp-cards></tp-cards>`,
                () => html`
                  <tp-empty-card
                    @click=${() => (this.hasCards = true)}
                  ></tp-empty-card>
                `,
              )}
              <gds-container display="none; m{block}">
                <tp-transactions></tp-transactions>
              </gds-container>
              <gds-container display="block; m{none}">
                <gds-carousel-trans></gds-carousel-trans>
              </gds-container>
            </gds-flex>
            <gds-flex
              grid-column="1; m{10 / span 3}"
              flex-direction="column"
              gap="l"
            >
              <tp-todos></tp-todos>
              <gds-jit></gds-jit>
            </gds-flex>
          </gds-grid>
        </tp-page-section>

        <!-- (Blue) Savings section -->
        <tp-page-section .show=${this.hasSavings}>
          <gds-flex padding="0 s; l{0 4xl}" gap="l" flex-direction="column">
            <gds-text tag="h2" font-size="heading-l">Savings</gds-text>
            <gds-grid columns="1; m{12}" gap="l">
              <gds-flex
                grid-column="1; m{1 / span 8}"
                flex-direction="column"
                gap="l"
              >
                <tp-savings></tp-savings>
              </gds-flex>
              <gds-flex
                grid-column="1; m{9 / span 4}"
                flex-direction="column"
                gap="l"
              >
                <tp-savings-goal></tp-savings-goal>
                <tp-savings-outside></tp-savings-outside>
              </gds-flex>
            </gds-grid>
          </gds-flex>
        </tp-page-section>

        <!-- (Pink) Dream State, get started cards -->
        <tp-page-section .show=${
          !this.pageHeader?.viewOptions.hasSavings &&
          !this.pageHeader?.viewOptions.hasAccounts
        }>
          <tp-steps @click=${() => (this.hasExternalAccounts = true)}></tp-steps>
        </tp-page-section>

        <tp-page-section .show=${this.hasExternalAccounts}>
          <gds-grid  columns="1; m{2}" max-width="1200px" margin="0 auto" gap="l">
            <tp-empty-konton @click=${() => (this.hasAccounts = true)}></tp-empty-konton>
            <tp-empty-card></tp-empty-card>
          </gds-grid>
        </tp-page-section>

        <!-- (Pink) Dream State, savings calculator -->
        <tp-page-section .show=${!this.pageHeader?.viewOptions.hasSavings}>
          <gds-grid
            columns="1; m{2}"
            gap="l"
            max-width="800px"
            margin="0 auto"
          >
            <gds-rich-text>
              <h3>What are you dreaming about?</h3>
              <p>
                Oavsett om det är att ha en buffert, en resa eller en trygg
                pension, är NU den bästa tiden att starta ett sparande. Testa
                och se hur snabbt du kan spara ihop till dina mål.
              </p>
              <p><gds-button>Start saving</gds-button></p>
            </gds-rich-text>
            <tp-savings-calc></tp-savings-calc>
          </gds-grid>
        </tp-page-section>

        <!-- (Pink) Dream State, testimonials -->
        <tp-page-section show>
          <gds-grid columns="1; m{2}" gap="l"  max-width="800px" margin="0 auto">
            <gds-rich-text>
              <h3>What are you dreaming about?</h3>
              <p>
                Oavsett om det är att ha en buffert, en resa eller en trygg
                pension, är NU den bästa tiden att starta ett sparande. Testa och
                se hur snabbt du kan spara ihop till dina mål.
              </p>
              <p style="line-height:48px">
                <gds-button rank="secondary">Christmas</gds-button>
                <gds-button rank="secondary">Vacation</gds-button>
                <gds-button rank="secondary">Pension</gds-button>
                <gds-button rank="secondary">Birthday</gds-button>
                <gds-button rank="secondary">House</gds-button>
                <gds-button rank="secondary">Car</gds-button>
                <gds-button rank="secondary">Boat</gds-button>
              </p>
            </gds-rich-text>
            <gds-card variant="negative" height="300px" border="4xs"></gds-card>
          </gds-grid>
        </tp-page-section>

        <tp-page-section .show=${true}>
          <gds-flex flex-direction="column" gap="l" max-width="800px" margin="0 auto" >
              <gds-text tag="h2" font-size="heading-m">Inspiration</gds-text>
              <gds-grid columns="1; m{2}" gap="l">
                <tp-news></tp-news>
                <tp-news></tp-news>
              </gds-grid>
            </gds-flex>
        </tp-page-section>


      </gds-flex>
    `
  }
}
