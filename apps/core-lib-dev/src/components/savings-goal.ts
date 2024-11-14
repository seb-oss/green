import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '../common/card'

@customElement('tp-savings-goal')
export class TpSavingsGoal extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`<tp-card>
      <gds-text slot="header" font-size="heading-s"> Sparmål </gds-text>
      <gds-button slot="action" size="small" rank="tertiary">
        <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
      </gds-button>
      <tp-list-item>
        <gds-flex
          level="3"
          width="40px"
          height="40px"
          background="positive"
          border-radius="max"
          align-items="center"
          justify-content="center"
          slot="icon"
          color="primary"
        >
          <gds-icon-knife-spoon width="20" height="20"></gds-icon-knife-spoon>
        </gds-flex>

        <gds-flex flex-direction="column" gap="xs" flex="1">
          <gds-flex align-items="center" justify-content="space-between">
            <gds-flex flex-direction="column">
              <gds-text font-size="detail-s" font-weight="book">
                Trip to Paris!
              </gds-text>
              <gds-text font-size="detail-s" color="positive"> 8 000 </gds-text>
            </gds-flex>
            <gds-flex flex-direction="column" align-items="flex-end">
              <gds-text font-size="detail-s" font-weight="book">Kvar</gds-text>
              <gds-text font-size="detail-s" color="positive"> 4000 </gds-text>
            </gds-flex>
          </gds-flex>
          <gds-badge variant="positive">
            Good job! You have saved 20% of your goal.
          </gds-badge>
        </gds-flex>
      </tp-list-item>
    </tp-card>`
  }
}
