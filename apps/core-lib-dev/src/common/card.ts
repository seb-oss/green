import { localized, msg } from '@lit/localize'
import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { GdsFormControlElement } from '@sebgroup/green-core/components/form/form-control'
import { gdsCustomElement, html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

@customElement('tp-card')
export class TPCard extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-card>
        <gds-flex flex-direction="column" gap="s">
          <gds-flex justify-content="space-between">
            <slot name="header"></slot>
            <slot name="action"></slot>
          </gds-flex>
          <slot name="content"></slot>
          <gds-flex justify-content="flex-start" align-items="center">
            <slot name="footer"></slot>
          </gds-flex>
        </gds-flex>
      </gds-card>
    `
  }
}
