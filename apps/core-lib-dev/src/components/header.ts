import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { html } from '@sebgroup/green-core/scoping'

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
        align="center"
        width="100%"
        justify="space-between"
        background="l1-background-primary"
        position="relative"
        padding="m"
      >
        <gds-container display="xs{flex} s{flex} m{flex} l{none}">
          <gds-context-menu>
            <gds-flex align="center" gap="s" slot="trigger">
              Menu
              <gds-icon-bars-three></gds-icon-bars-three>
            </gds-flex>
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
        <gds-container display="xs{none} s{none} m{none} l{flex}">
          <gds-menu-button @click=${() => this.handleButtonClick('login')}>
            Login
          </gds-menu-button>
          <gds-menu-button
            @click=${() => this.handleButtonClick('form-validation')}
          >
            Validation
          </gds-menu-button>
          <gds-menu-button @click=${() => this.handleButtonClick('datepicker')}>
            Datepicker
          </gds-menu-button>
          <gds-menu-button @click=${() => this.handleButtonClick('calendar')}>
            Calendar
          </gds-menu-button>
        </gds-container>
        <gds-flex
          position="2xs{relative} l{absolute}"
          inset="auto 0"
          margin="0 auto"
          width="max-content"
        >
          <gds-icon-seb></gds-icon-seb>
        </gds-flex>
        <gds-context-menu>
          <gds-flex align="center" gap="s" slot="trigger">
            Language
            <gds-icon-globus></gds-icon-globus>
          </gds-flex>
          <gds-menu-item>EN</gds-menu-item>
          <gds-menu-item>SV</gds-menu-item>
        </gds-context-menu>
      </gds-flex>
    `
  }
}
