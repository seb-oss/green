import { LitElement, nothing } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'
import '@sebgroup/green-core/components/icon/icons/brand-seb.js'

@customElement('tp-empty-card')
export class TPEmptyCard extends LitElement {
  @state()
  accessor isVisible = true

  private handleCloseClick() {
    this.isVisible = false
  }

  render() {
    return html` <style>

      :host {
        display: ${this.isVisible ? 'block' : 'none'};
      }
        .card {
          aspect-ratio: 1.58 / 1;
        }

        .empty {
          aspect-ratio: 3 / 2;
        }
      </style>
      ${this.isVisible
        ? html`
            <gds-card variant="secondary" shadow="s">
              <gds-flex justify-content="flex-end">
                <gds-button
                  size="small"
                  rank="secondary"
                  @click=${this.handleCloseClick}
                >
                  <gds-icon-cross-small></gds-icon-cross-small>
                </gds-button>
              </gds-flex>
              <gds-flex
                padding="2xl; m{4xl}"
                width="100%"
                flex-direction="column"
                align-items="center"
                gap="l"
              >
                <gds-card class="card" variant="copper-01" width="100%; m{60%}">
                  <gds-icon-brand-seb
                    width="55"
                    height="24"
                  ></gds-icon-brand-seb>
                </gds-card>

                <gds-text
                  text-wrap="balance"
                  max-width="40"
                  font-weight="book"
                  font-size="heading-xs"
                  color="primary"
                  text-align="center"
                >
                  Få en översikt av dina konton i SEB, transaktioner, debit och
                  kreditkort.
                </gds-text>

                <gds-button> Skaffa kreditkort </gds-button>
              </gds-flex>
            </gds-card>
          `
        : nothing}`
  }
}
