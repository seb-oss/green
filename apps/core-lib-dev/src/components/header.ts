import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { html } from '@sebgroup/green-core/scoping'

@customElement('gds-header')
export class GdsHeader extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-flex
        align="center"
        width="100%"
        justify="space-between"
        background="l1-background-primary"
        position="relative"
      >
        <gds-flex>
          <gds-menu-button>Login</gds-menu-button>
          <gds-menu-button>Validation</gds-menu-button>
          <gds-menu-button>Datepicker</gds-menu-button>
          <gds-menu-button>Calendar</gds-menu-button>
        </gds-flex>
        <gds-flex position="absolute" inset="auto auto auto auto">
          <gds-icon-seb></gds-icon-seb>
        </gds-flex>
        <gds-flex>
          <gds-context-menu>
            <gds-menu-item>EN</gds-menu-item>
            <gds-menu-item>Action 2</gds-menu-item>
            <gds-menu-item>Action 3</gds-menu-item>
          </gds-context-menu>
        </gds-flex>
      </gds-flex>
    `
  }
}
