import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/badge/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/icon/icons/arrow-left-right.js'
import '@sebgroup/green-core/components/icon/icons/plus-large.js'
import '@sebgroup/green-core/components/icon/icons/calendar.js'
import '@sebgroup/green-core/components/icon/icons/chevron-right.js'
import '@sebgroup/green-core/components/icon/icons/credit-card.js'
import '@sebgroup/green-core/components/mask/mask.js'
import '@sebgroup/green-core/components/icon/icons/chevron-bottom.js'
import './dashboard.css'
import '../../components/accounts'
import '../../common/card'
import '../../common/list-item'

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
      <gds-flex width="100%" flex-direction="column" gap="xl">
        <gds-flex justify-content="space-between">
          <gds-flex flex-direction="column">
            <gds-text tag="h1" font-size="heading-l">Hej!</gds-text>
            <gds-text tag="h2" font-size="heading-l">Whats going on?</gds-text>
          </gds-flex>
          <gds-flex gap="xs">
            <gds-button rank="secondary">
              <gds-icon-arrow-left-right></gds-icon-arrow-left-right>
            </gds-button>
            <gds-button rank="secondary">
              <gds-icon-plus-large></gds-icon-plus-large>
            </gds-button>
            <gds-button rank="secondary">
              <gds-icon-calendar></gds-icon-calendar>
            </gds-button>
            <gds-button rank="secondary">
              Genvägar
              <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            </gds-button>
          </gds-flex>
        </gds-flex>
        <gds-grid columns="3" gap="xl">
          <tp-card>
            <gds-text slot="header" font-size="heading-s">Konton</gds-text>
            <gds-button slot="action" size="small" rank="tertiary">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            <tp-list-item></tp-list-item>
            <tp-list-item></tp-list-item>
            <tp-list-item></tp-list-item>
            <tp-list-item></tp-list-item>
            <tp-list-item></tp-list-item>
            <tp-list-item></tp-list-item>
            <tp-list-item></tp-list-item>
            <gds-button slot="footer">Se alla</gds-button>
          </tp-card>
          <gds-card>[CONTENT GOES HERE]</gds-card>
          <gds-card>[CONTENT GOES HERE]</gds-card>
        </gds-grid>
      </gds-flex>
    `
  }
}
