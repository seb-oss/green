import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import './dashboard.css'

@customElement('gds-dashboard')
export class CardExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html` 
    <gds-flex gap="xs">
      <gds-card variant="copper-01" padding="s">

          <gds-text></gds-text>
          <gds-button>Button</gds-button>
        </gds-card>
      </gds-card>
      <gds-card variant="copper-01">
          <gds-card variant="secondary"></gds-card>
          <gds-button>Button</gds-button>
        </gds-card>
      </gds-card>
    </gds-flex>`
  }
}
