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
        <gds-flex>
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
        </gds-flex>
        <gds-flex
          position="absolute"
          inset="auto 0"
          margin="0 auto"
          width="max-content"
        >
          <gds-icon-seb></gds-icon-seb>
        </gds-flex>
        <gds-flex>
          <gds-context-menu>
            <gds-menu-item>EN</gds-menu-item>
            <gds-menu-item>Action 2</gds-menu-item>
            <gds-menu-item>Action 3</gds-menu-item>
          </gds-context-menu>
        </gds-flex>

        <!-- <div class="container">
          <div style="display: flex; justify-content: space-between;">
            <h1 class="mb-5">Green Core test app</h1>
            <gds-context-menu>
              <span slot="trigger">
                Lang: ${this.lang}
                <gds-icon-flag></gds-icon-flag>
              </span>
              <gds-menu-item @click=$ {() => this.setLang('sv')}>
                SV
              </gds-menu-item>
              <gds-menu-item @click=$ {() => this.setLang('en')}>
                EN
              </gds-menu-item>
            </gds-context-menu>
          </div> -->
      </gds-flex>
    `
  }
}
