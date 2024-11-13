import { css, LitElement, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/icon/icons/credit-card.js'
import '@sebgroup/green-core/components/icon/icons/arrow-rotate-right-left.js'
import '@sebgroup/green-core/components/icon/icons/growth.js'
import './quicklinks.css'

@customElement('tp-quicklinks')
export class TpQuicklinks extends LitElement {
  render() {
    return html`
      <gds-grid
        columns="3"
        gap="m"
        level="2"
        background="secondary"
        padding="l m m"
        border-bottom-left-radius="m"
        border-bottom-right-radius="m"
        max-width="max-content"
      >
        <!-- <gds-link>
          <gds-flex
            level="3"
            padding="m"
            align-items="center"
            justify-content="center"
            flex-direction="column"
            background="secondary"
            border-radius="s"
            width="100%"
          >
            <gds-icon-credit-card></gds-icon-credit-card>
            <gds-text margin="4px 0 0">Kort</gds-text>
          </gds-flex>
        </gds-link>

        <gds-link href="#">
          <gds-flex
            level="3"
            padding="m"
            align-items="center"
            justify-content="center"
            flex-direction="column"
            background="secondary"
            border-radius="s"
            width="100%"
          >
            <gds-icon-arrow-rotate-right-left></gds-icon-arrow-rotate-right-left>
            <gds-text margin="4px 0 0">Flytta pengar</gds-text>
          </gds-flex>
        </gds-link>

        <gds-link href="#">
          <gds-flex
            level="3"
            padding="m"
            align-items="center"
            justify-content="center"
            flex-direction="column"
            background="secondary"
            border-radius="s"
            width="100%"
          >
            <gds-icon-growth></gds-icon-growth>
            <gds-text margin="4px 0 0">Framtiden</gds-text>
          </gds-flex>
        </gds-link> -->

        <a href="#">
          <gds-flex
            level="3"
            padding="m"
            align-items="center"
            justify-content="center"
            flex-direction="column"
            background="secondary"
            border-radius="s"
            color="tertiary"
          >
            <gds-icon-credit-card></gds-icon-credit-card>
            <gds-text margin="4px 0 0">Kort</gds-text>
          </gds-flex>
        </a>

        <a href="#">
          <gds-flex
            level="3"
            padding="m"
            align-items="center"
            justify-content="center"
            flex-direction="column"
            background="secondary"
            border-radius="s"
            color="tertiary"
          >
            <gds-icon-arrow-rotate-right-left></gds-icon-arrow-rotate-right-left>
            <gds-text margin="4px 0 0">Flytta pengar</gds-text>
          </gds-flex>
        </a>

        <a href="#">
          <gds-flex
            level="3"
            padding="m"
            align-items="center"
            justify-content="center"
            flex-direction="column"
            background="secondary"
            border-radius="s"
            color="tertiary"
          >
            <gds-icon-growth></gds-icon-growth>
            <gds-text margin="4px 0 0">Framtiden</gds-text>
          </gds-flex>
        </a>
      </gds-grid>
    `
  }
}
