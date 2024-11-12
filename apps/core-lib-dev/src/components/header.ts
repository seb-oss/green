import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { gdsInitLocalization } from '@sebgroup/green-core/localization'
import { html } from '@sebgroup/green-core/scoping'

const { setLocale, getLocale } = gdsInitLocalization()

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

  render() {
    return html`
      <gds-flex
        align-items="stretch"
        width="100%"
        justify-content="space-between"
        background="l1-background-primary"
        position="relative"
        height="4rem"
      >
        <gds-container display="xs{flex} s{flex} m{flex} l{none}">
          <gds-context-menu>
            <gds-flex align-items="center" gap="s" slot="trigger">
              Menu
              <gds-icon-bars-three></gds-icon-bars-three>
            </gds-flex>
            <gds-menu-item
              @click=${() => this.handleButtonClick('theme-pages')}
            >
              Theme Pages
            </gds-menu-item>
            <gds-menu-item @click=${() => this.handleButtonClick('login')}>
              Login
            </gds-menu-item>
            <gds-menu-item
              @click=${() => this.handleButtonClick('form-validation')}
            >
              Validation
            </gds-menu-item>
            <gds-menu-item @click=${() => this.handleButtonClick('datepicker')}>
              Datepicker
            </gds-menu-item>
            <gds-menu-item @click=${() => this.handleButtonClick('calendar')}>
              Calendar
            </gds-menu-item>
          </gds-context-menu>
        </gds-container>
        <gds-flex
          justify-content="space-between"
          display="xs{none} s{none} m{none} l{flex}"
          width="100%"
        >
          <gds-flex>
            <gds-menu-button
              @click=${() => this.handleButtonClick('onboarding')}
            >
              Onboarding
            </gds-menu-button>
            <gds-menu-button
              @click=${() => this.handleButtonClick('dashboard')}
            >
              Dashboard
            </gds-menu-button>
          </gds-flex>
          <gds-flex align-items="center" gap="l" margin="0 m 0 ">
            <gds-icon-magnifying-glass></gds-icon-magnifying-glass>
            <gds-icon-bell></gds-icon-bell>
            <gds-img
              src="https://placehold.co/80x80/000000/FFFFFF/png?text=S"
              border-radius="max"
              width="24px"
              height="24px"
            ></gds-img>
            <gds-icon-calendar></gds-icon-calendar>
            <!-- <gds-context-menu>
              <gds-flex align-items="center" gap="s" slot="trigger">
                Language
                <gds-icon-globus></gds-icon-globus>
              </gds-flex>
              <gds-menu-item @click=${() => setLocale('en')}>EN</gds-menu-item>
              <gds-menu-item @click=${() => setLocale('sv')}>SV</gds-menu-item>
            </gds-context-menu> -->
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `
  }
}
