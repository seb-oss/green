import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/media/img/index.js'
import '@sebgroup/green-core/components/grid/flex/index.js'
import '@sebgroup/green-core/components/layout/flex/index.js'
import '@sebgroup/green-core/components/layout/card/index.js'

@customElement('card-example')
export class CardExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-card shadow="s" radius="xs" overflow="hidden" margin="s 0">
        <gds-grid columns="2" gap="xl">
          <gds-flex position="relative">
            <gds-img
              ratio="2/2.4"
              src="./assets/cards.jpg"
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
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </gds-container>
          </gds-flex>
          <gds-flex
            direction="column"
            padding="s{xs} m{l} l{2xl}"
            align="stretch"
            justify="center"
            height="100%"
          >
            <h1>Login</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <gds-flex direction="column" gap="s" align="stretch">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
            </gds-flex>
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
