import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/icon/icons/credit-card.js'
import '@sebgroup/green-core/components/icon/icons/arrow-rotate-right-left.js'
import '@sebgroup/green-core/components/icon/icons/growth.js'
import './quicklinks.css'

@customElement('tp-quicklinks')
export class TpQuicklinks extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: contents;
        }
      </style>
      <gds-grid columns="3" gap="m">
        <gds-card variant="secondary" level="3">
          <gds-flex flex-direction="column" align-items="center" gap="2xs">
            <gds-icon-credit-card height="16"></gds-icon-credit-card>
            <gds-text font-size="detail-s" font-weight="book">Kort</gds-text>
          </gds-flex>
        </gds-card>
        <gds-card variant="secondary" level="3">
          <gds-flex flex-direction="column" align-items="center" gap="2xs">
            <gds-icon-arrow-rotate-right-left height="16">
            </gds-icon-arrow-rotate-right-left>
            <gds-text font-size="detail-s" font-weight="book">
              Flytta pengar
            </gds-text>
          </gds-flex>
        </gds-card>
        <gds-card variant="secondary" level="3">
          <gds-flex flex-direction="column" align-items="center" gap="2xs">
            <gds-icon-growth height="16"></gds-icon-growth>
            <gds-text font-size="detail-s" font-weight="book">
              Framtiden
            </gds-text>
          </gds-flex>
        </gds-card>
      </gds-grid>
    `
  }
}
