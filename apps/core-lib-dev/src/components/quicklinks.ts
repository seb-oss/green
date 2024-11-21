import { css, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/icon/icons/credit-card.js'
import '@sebgroup/green-core/components/icon/icons/arrow-rotate-right-left.js'
import '@sebgroup/green-core/components/icon/icons/growth.js'

@customElement('tp-quicklinks')
export class TpQuicklinks extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }

    a,
    a:link,
    a:visited,
    a:focus,
    a:hover,
    a:active {
      text-decoration: none;
      cursor: crosshair;
    }

    a:-webkit-any-link {
      color: -webkit-link;
      text-decoration: none;
      cursor: auto;
    }

    a [gds-element='gds-card'] {
      transition: background-color 0.2s;
      cursor: pointer;
    }
    a:active [gds-element='gds-card'] {
      background-color: color-mix(
        in srgb,
        var(--gds-color-l3-background-secondary) 100%,
        black 10%
      );
    }
  `

  render() {
    return html`
      <gds-grid columns="3" gap="m">
        <a href="javascript:;">
          <gds-card variant="secondary" level="3">
            <gds-flex flex-direction="column" align-items="center" gap="2xs">
              <gds-icon-credit-card height="16"></gds-icon-credit-card>
              <gds-text font-size="detail-s" font-weight="book">Kort</gds-text>
            </gds-flex>
          </gds-card>
        </a>
        <a href="javascript:;">
          <gds-card variant="secondary" level="3">
            <gds-flex flex-direction="column" align-items="center" gap="2xs">
              <gds-icon-arrow-rotate-right-left height="16">
              </gds-icon-arrow-rotate-right-left>
              <gds-text font-size="detail-s" font-weight="book">
                Flytta pengar
              </gds-text>
            </gds-flex>
          </gds-card>
        </a>
        <a href="javascript:;">
          <gds-card variant="secondary" level="3">
            <gds-flex flex-direction="column" align-items="center" gap="2xs">
              <gds-icon-growth height="16"></gds-icon-growth>
              <gds-text font-size="detail-s" font-weight="book">
                Framtiden
              </gds-text>
            </gds-flex>
          </gds-card>
        </a>
      </gds-grid>
    `
  }
}
