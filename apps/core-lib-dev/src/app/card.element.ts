import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { html } from '@sebgroup/green-core/scoping'

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
      <gds-container display="flex" padding="s{xs} m{l} l{2xl}">
        <gds-card shadow="s" radius="xs" overflow="hidden">
          <gds-grid columns="2" gap="xl">
            <gds-container position="relative">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </gds-container>
            </gds-container>
            <gds-container>
              <gds-card shadow="s" radius="xs">
                <gds-container
                  display="flex"
                  direction="column"
                  padding="s{xs} m{l} l{2xl}"
                  align="stretch"
                  justify="center"
                  height="100%"
                >
                  <h1>Login</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <gds-container
                    display="flex"
                    direction="column"
                    gap="s"
                    align="stretch"
                  >
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                  </gds-container>
                  <gds-container
                    display="flex"
                    direction="row"
                    gap="xl"
                    align="center"
                  >
                    <gds-button>
                      Register
                      <gds-icon-growth slot="trail"></gds-icon-growth>
                    </gds-button>
                    <p>or</p>
                    <gds-button rank="secondary">Login</gds-button>
                  </gds-container>
                </gds-container>
              </gds-card>
            </gds-container>
          </gds-grid>
        </gds-card>
      </gds-container>
    `
  }
}
