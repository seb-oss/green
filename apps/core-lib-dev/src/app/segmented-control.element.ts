import { LitElement, css } from 'lit'
import { repeat } from 'lit/directives/repeat.js'
import { html } from '@sebgroup/green-core'
import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'

export class SegmentedControl extends LitElement {
  static styles = css`
    .card {
      padding: 1rem;
      background: white;
    }
  `

  static properties = {
    numCards: { type: Number },
  }

  numCards = 3

  connectedCallback() {
    super.connectedCallback()
    registerTransitionalStyles()
  }

  #cards = [1, 2, 3, 4, 5]
  #getCards() {
    return this.#cards.slice(0, this.numCards)
  }

  render() {
    return html`
      <gds-grid columns="1" row-gap="l">
        <div style="overflow: hidden">
          <gds-segmented-control
            .value=${this.numCards}
            @change=${(e) => {
              console.log(e.target.value)
              this.numCards = e.target.value
            }}
          >
            ${repeat(
              this.#cards,
              (card) =>
                html`<gds-segment .value=${card}>${card} cards</gds-segment>`
            )}
          </gds-segmented-control>
        </div>

        <gds-grid columns="3" gap="l" row-gap="l" auto-columns="300">
          ${repeat(
            this.#getCards(),
            (card) => html`<div class="card">
              <form id="my-form">
                <h3>This a card number ${card}</h3>

                <gds-dropdown
                  searchable
                  multiple
                  name="dropdown"
                  id="dropdown"
                  label="And a dropdown"
                  required
                >
                  <span slot="sub-label">Because why not!</span>
                  <span slot="message">Dropdowns are nice</span>

                  <gds-option isplaceholder>Select value</gds-option>
                  <gds-option value="v1">Value 1</gds-option>
                  <gds-option value="v2">Value 2</gds-option>
                  <gds-option value="v3">Value 3</gds-option>
                </gds-dropdown>
              </form>
            </div>`
          )}
        </gds-grid>
      </gds-grid>
    `
  }
}
customElements.define('segmented-control', SegmentedControl)
