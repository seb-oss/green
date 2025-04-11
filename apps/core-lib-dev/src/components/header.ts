import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { gdsInitLocalization } from '@sebgroup/green-core/localization.js'
import { html } from '@sebgroup/green-core/scoping.js'

const { setLocale } = gdsInitLocalization()

@customElement('gds-header')
export class GdsHeader extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  private handleButtonClick(view: string) {
    this.dispatchEvent(
      new CustomEvent('view-change', {
        detail: { view },
        bubbles: true,
        composed: true,
      }),
    )
  }

  #menuItems = [
    { text: 'Login', value: 'login' },
    { text: 'Validation', value: 'form-validation' },
    { text: 'Datepicker', value: 'datepicker' },
    { text: 'Calendar', value: 'calendar' },
    { text: 'Plain Form Controls', value: 'plain-form-controls' },
  ]

  render() {
    return html`
      <gds-flex
        align-items="stretch"
        width="100%"
        justify-content="space-between"
        background="l1-background-primary"
        position="relative"
        height="4rem"
        border-width="0 0 4xs"
      >
        <gds-div display="xs{flex} s{flex} m{flex} l{none}">
          <gds-context-menu>
            <gds-flex align-items="center" gap="s" slot="trigger">
              Menu
              <gds-icon-bars-three></gds-icon-bars-three>
            </gds-flex>
            ${this.#menuItems.map(
              (item) =>
                html`<gds-menu-item
                  @click=${() => this.handleButtonClick(item.value)}
                  >${item.text}</gds-menu-item
                >`,
            )}
          </gds-context-menu>
        </gds-div>
        <gds-div display="xs{none} s{none} m{none} l{flex}">
          ${this.#menuItems.map(
            (item) =>
              html`<gds-menu-button
                @click=${() => this.handleButtonClick(item.value)}
                >${item.text}</gds-menu-button
              >`,
          )}
        </gds-div>
        <gds-flex
          position="2xs{relative} l{absolute}"
          inset="auto 0"
          margin="0 auto"
          width="max-content"
          height="4rem"
          align-items="center"
        >
          <gds-icon-brands-seb></gds-icon-brands-seb>
        </gds-flex>
        <gds-flex align-items="center" margin="0 m 0 0">
          <gds-context-menu>
            <gds-flex align-items="center" gap="s" slot="trigger">
              Language
              <gds-icon-globus></gds-icon-globus>
            </gds-flex>
            <gds-menu-item @click=${() => setLocale('en')}>EN</gds-menu-item>
            <gds-menu-item @click=${() => setLocale('sv')}>SV</gds-menu-item>
          </gds-context-menu>
        </gds-flex>
      </gds-flex>
    `
  }
}
