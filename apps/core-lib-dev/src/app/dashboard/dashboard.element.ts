import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/badge/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/divider/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/icon/icons/arrow-left-right.js'
import '@sebgroup/green-core/components/icon/icons/plus-large.js'
import '@sebgroup/green-core/components/icon/icons/calendar.js'
import '@sebgroup/green-core/components/icon/icons/chevron-right.js'
import '@sebgroup/green-core/components/icon/icons/chevron-bottom.js'
import '@sebgroup/green-core/components/icon/icons/credit-card.js'
import '@sebgroup/green-core/components/icon/icons/fashion.js'
import '@sebgroup/green-core/components/icon/icons/suitcase-work.js'
import '@sebgroup/green-core/components/icon/icons/store.js'
import '@sebgroup/green-core/components/icon/icons/knife-spoon.js'
import '@sebgroup/green-core/components/icon/icons/arrow-out-of-box.js'
import '@sebgroup/green-core/components/mask/mask.js'
import '@sebgroup/green-core/components/icon/icons/chevron-bottom.js'
import '../../components/jit'
import './dashboard.css'
import '../../components/savings-outside'
import '../../components/savings-goal'
import '../../components/accounts'
import '../../components/carousel-trans'
import '../../components/cards'
import '../../components/transactions'
import '../../common/card'
import '../../common/list-item'
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
          <tp-transactions></tp-transactions>
          <tp-accounts></tp-accounts>
          <tp-cards></tp-cards>
          <gds-carousel-trans></gds-carousel-trans>
          <gds-flex flex-direction="column" gap="m">
            <tp-savings-outside></tp-savings-outside>
            <tp-savings-goal></tp-savings-goal>
          </gds-flex>
          <gds-jit></gds-jit>
        </gds-grid>
        <gds-card max-width="max-content">
          <tp-quicklinks></tp-quicklinks>
        </gds-card>

        <!-- <gds-grid columns="2" gap="l">
          <tp-savings></tp-savings>
        </gds-grid> -->

        <tp-savings></tp-savings>

        <tp-news-widget></tp-news-widget>
      </gds-flex>
    `
  }
}
