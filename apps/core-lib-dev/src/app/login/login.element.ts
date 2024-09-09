import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/media/img/index.js'
import '@sebgroup/green-core/components/layout/grid/index.js'
import '@sebgroup/green-core/components/layout/flex/index.js'
import '@sebgroup/green-core/components/layout/card/index.js'
import '@sebgroup/green-core/components/input/index.js'
import '@sebgroup/green-core/components/content/text/index.js'

import './login.css'

@customElement('gds-login')
export class CardExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-card
        shadow="s"
        radius="xs"
        background="l2-background-secondary"
        overflow="hidden"
      >
        <gds-grid columns="2">
          <gds-flex position="relative" display="s{none}">
            <gds-img
              ratio="2/2.4"
              src="https://images.unsplash.com/photo-1670788837782-11c4f9e01d1f?q=80&w=3946&auto=format&fit=crop"
              alt="Cards"
              fit="cover"
              position="60%"
            ></gds-img>
            <gds-container
              position="absolute"
              filter="20px"
              inset="auto 20px 20px 20px"
              padding="s{xs} m{l} l{2xl}"
              background="rgba(0, 0, 0, 0.1)"
              radius="xs"
              color="white-text"
            >
              <gds-text tag="h2">Title</gds-text>
              <gds-text tag="p" size="detail-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </gds-text>
            </gds-container>
          </gds-flex>
          <gds-flex
            direction="column"
            padding="2xl"
            align="stretch"
            justify="center"
            height="100%"
          >
            <gds-text tag="h1">Välkommen till Internetbanken</gds-text>
            <gds-text tag="p"> Hur vill du logga in? </gds-text>

            <gds-card radius="s" border="4xs/l2-stroke-primary" padding="s">
              <gds-text>Logga in med digipass</gds-text>

              <gds-flex direction="column" gap="s" align="stretch">
                <gds-input
                  id="test"
                  label="Personnummer"
                  supportingText="Fyll i med 12 siffror."
                ></gds-input>
              </gds-flex>
            </gds-card>
            <gds-flex direction="row" gap="xl" align="center" padding="s 0 0 0">
              <gds-button>
                Register
                <gds-icon-growth slot="trail"></gds-icon-growth>
              </gds-button>
              <p>or</p>
              <gds-button rank="secondary">Login</gds-button>
            </gds-flex>
          </gds-flex>
        </gds-grid>
      </gds-card>
    `
  }
}
