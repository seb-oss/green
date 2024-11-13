import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/rich-text/index.js'
import './page-header'
import '../../components/jit'
import './style.css'

@customElement('tp-theme-page')
export class ThemePage extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-flex gap="3xl" flex-direction="column">
        <tp-page-header style="flex:1"></tp-page-header>

        <!-- Dream State, get started cards -->
        <gds-grid columns="1; m{3}" gap="l">
          <gds-card variant="negative" height="300px" border="4xs"></gds-card>
          <gds-card variant="negative" height="300px" border="4xs"></gds-card>
          <gds-card
            variant="negative"
            height="300px"
            border="4xs"
            opacity=".25"
          ></gds-card>
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

        <!-- Dream State, savings calculator -->
        <gds-grid columns="1; m{3}" gap="l">
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

        <!-- Dream State, testimonials -->
        <gds-grid columns="1; m{3}" gap="l">
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
      </gds-flex>
    `
  }
}
