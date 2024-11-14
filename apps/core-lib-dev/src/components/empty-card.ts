import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'
import '@sebgroup/green-core/components/icon/icons/brand-seb.js'

@customElement('tp-empty-card')
export class TPEmptyCard extends LitElement {
  render() {
    return html`
      <gds-card variant="secondary" shadow="s">
        <gds-flex padding="xl" width="100%">
          <gds-card variant="copper-01" width="100%" height="200px">
            <gds-icon-brand-seb width="55" height="24"></gds-icon-brand-seb>
          </gds-card>
        </gds-flex>
      </gds-card>
    `
  }
}
