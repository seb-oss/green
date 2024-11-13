import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/icon/icons/arrow-left-right.js'
import '@sebgroup/green-core/components/icon/icons/plus-large.js'
import '@sebgroup/green-core/components/icon/icons/calendar.js'
import '@sebgroup/green-core/components/icon/icons/chevron-bottom.js'
import '../../components/jit'
import './style.css'

@customElement('tp-page-header')
export class PageHeader extends LitElement {
  protected createRenderRoot() {
    return this
  }

  render() {
    return html`
      <gds-flex justify-content="space-between" flex-direction="row" gap="l">
        <gds-flex flex-direction="row; s{column}" align-items="center">
          <gds-text tag="h1" font-size="heading-s; s{heading-l}"
            >Hey Josephine!</gds-text
          >
          <gds-text
            display="none; s{block}"
            tag="h2"
            font-size="heading-s; s{heading-l}"
            color="secondary"
            >Whats going on?</gds-text
          >
        </gds-flex>
        <gds-flex gap="xs" justify-content="center">
          <gds-button rank="secondary">
            <gds-icon-arrow-left-right></gds-icon-arrow-left-right>
          </gds-button>
          <gds-button rank="secondary">
            <gds-icon-plus-large></gds-icon-plus-large>
          </gds-button>
          <gds-button rank="secondary">
            <gds-icon-calendar></gds-icon-calendar>
          </gds-button>
          <gds-container display="s{none}">
            <gds-button rank="secondary">
              <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
            </gds-button>
          </gds-container>
          <gds-container display="none; s{block}">
            <gds-button rank="secondary">
              Shortcuts
              <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            </gds-button>
          </gds-container>
        </gds-flex>
      </gds-flex>
    `
  }
}
