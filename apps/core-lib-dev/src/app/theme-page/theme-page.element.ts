import { LitElement } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/rich-text/index.js'
import './page-header'
import '../../components/jit'
import '../../components/cards'
import '../../components/quicklinks'
import '../../components/savings-goal'
import '../../components/carousel-pink'
import '../../components/savings-outside'
import '../../components/news-widget'
import './style.css'
import { PageHeader } from './page-header'

@customElement('tp-theme-page')
export class ThemePage extends LitElement {
  protected createRenderRoot() {
    return this
  }

  @query('tp-page-header')
  accessor pageHeader: PageHeader

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-flex gap="3xl" flex-direction="column">
        <tp-page-header style="flex:1" @view-options-change=${() => { console.log('asdasd'); this.requestUpdate()}}></tp-page-header>

        <tp-carousel-pink></tp-carousel-pink>
        <!-- (Blue) Main dashboard section -->
        ${when(this.pageHeader?.viewOptions.hasAccounts, () => html`
          <gds-grid columns="1; m{12}" gap="l">
            <gds-flex
              grid-column="1; m{1 / span 5}"
              flex-direction="column"
              gap="l"
            >
              <tp-accounts></tp-accounts>
             
              <gds-card variant="notice" height="200px" border="4xs"
                >Expenses</gds-card
              >
            </gds-flex>
            <gds-flex
              grid-column="1; m{6 / span 4}"
              flex-direction="column"
              gap="l"
            >
              ${when(this.pageHeader?.viewOptions.hasCards, () => html`<tp-cards></tp-cards>`, () => html` <gds-card variant="negative" height="250px" border="4xs"
                >Get some cards!</gds-card
              >`)}
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
              <gds-card variant="notice" height="220px" border="4xs"
              >Todo</gds-card
              >
              <gds-jit></gds-jit>
            </gds-flex>
          </gds-grid>
        `)}

        <!-- (Blue) Savings section -->
         ${when(this.pageHeader?.viewOptions.hasSavings, () => html`
          <gds-text tag="h2" font-size="heading-l">Savings</gds-text>
          <gds-grid columns="1; m{12}" gap="l">
            <gds-flex
              grid-column="1; m{1 / span 8}"
              flex-direction="column"
              gap="l"
            >
              <gds-card variant="notice" height="400px" border="4xs"
                >My savings</gds-card
              >
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
        `)}

        <!-- (Pink) Dream State, get started cards -->
        ${when(!this.pageHeader?.viewOptions.hasSavings && !this.pageHeader?.viewOptions.hasAccounts, () => html`
          <gds-grid columns="1; m{2}" gap="l" max-width="800px" margin="0 auto">
            <gds-card variant="negative" height="300px" border="4xs">s</gds-card>
            <gds-card variant="negative" height="300px" border="4xs">s</gds-card>
            <!-- <gds-card
              variant="negative; hover: green-01"
              height="300px"
              border="4xs"
              opacity=".25"
            >s</gds-card> -->
          </gds-grid>
          <gds-flex gap="xs" justify-content="center">
            <gds-card
              variant="green-02"
              padding="0"
              width="4px"
              height="4px"
            ></gds-card>
            <gds-card
              variant="green-02"
              padding="0"
              width="70px"
              height="4px"
            ></gds-card>
          </gds-flex>
        `)}

        <!-- (Pink) Dream State, savings calculator -->
        ${when(!this.pageHeader?.viewOptions.hasSavings, () => html`
          <gds-grid columns="1; m{2}" gap="l"  max-width="800px" margin="0 auto">
            <gds-rich-text>
              <h3>What are you dreaming about?</h3>
              <p>
                Oavsett om det är att ha en buffert, en resa eller en trygg
                pension, är NU den bästa tiden att starta ett sparande. Testa och
                se hur snabbt du kan spara ihop till dina mål.
              </p>
              <p><gds-button>Start saving</gds-button></p>
            </gds-rich-text>
            <gds-card variant="negative" height="400px" border="4xs"></gds-card>
          </gds-grid>
        `)}

        <!-- (Pink) Dream State, testimonials -->
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

        
          <tp-news-widget></tp-news-widget>


      </gds-flex>
    `
  }
}
