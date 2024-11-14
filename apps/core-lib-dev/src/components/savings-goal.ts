import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

@customElement('tp-savings-goal')
export class TpSavingsGoal extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`<gds-card variant="secondary" padding="2xs 0">
      <gds-flex flex-direction="column" gap="m" padding="xs m">
        <gds-flex gap="s" align-items="center" justify-content="space-between">
          <gds-text font-size="preamble-s">Sparmål</gds-text>
          <gds-button rank="tertiary"
            ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
          ></gds-button>
        </gds-flex>
        <gds-flex>
          <gds-container
            background-image="url('/assets/copenhagen.png')"
            width="24px"
            height="24px"
          ></gds-container>
        </gds-flex>
      </gds-flex>
    </gds-card>`
  }
}
