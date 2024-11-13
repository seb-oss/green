import { LitElement, nothing } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'
import './step-bullet'
import './accounts-card'

@customElement('tp-accounts-modal')
export class TPAccountsModal extends LitElement {

  @state()
  accessor isModalOpen = false

  private handleCardClick() {
    this.isModalOpen = true
  }

  private closeModal() {
    this.isModalOpen = false
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isModalOpen = false
    }
  }

  connectedCallback() {
    super.connectedCallback()
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  disconnectedCallback() {
    window.removeEventListener('keydown', this.handleKeyDown.bind(this))
    super.disconnectedCallback()
  }

  render() {
    return html`
      <style>
        :host {
          --steps: 3;
          --space: var(--gds-space-xl);
        }

        .car {
          display: flex;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          width: 100%;
          gap: 32px;
          position: relative;
          scrollbar-width: none;
          box-sizing: border-box;
        }

        tp-accounts-card::part(account) {
          scroll-snap-align: center;
          scroll-margin-inline-start: var(--space);
          --width: calc(100% - var(--space) * (var(--steps) - 1));
          min-inline-size: calc(var(--width) / (var(--steps) - 1));
          aspect-ratio: 3 / 2;
        }

        .actionsheet {
          @starting-style {
            opacity: 0;
            transform: translateX(100%);
          }
        }

      </style>
      <tp-card wide>
        <gds-text slot="header" font-size="heading-s">Accounts</gds-text>
        <gds-button slot="action" size="small" rank="tertiary">
          <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        </gds-button>
        <gds-flex flex-direction="column" gap="l" padding="0 0 l 0">
          <div class="car" gap="s">
            <tp-accounts-card @click=${this.handleCardClick} name="negative">ICA</tp-accounts-card>
            <tp-accounts-card @click=${this.handleCardClick} name="notice">THIS</tp-accounts-card>
            <tp-accounts-card @click=${this.handleCardClick} name="green-01">THAT</tp-accounts-card>
            <tp-accounts-card @click=${this.handleCardClick} name="copper-01">Coppa</tp-accounts-card>
          </div>
          <gds-flex align-items="center" justify-content="center" gap="2xs">
            <tp-step-bullet step="s1"></tp-step-bullet>
            <tp-step-bullet step="s2" active></tp-step-bullet>
            <tp-step-bullet step="s3"></tp-step-bullet>
            <tp-step-bullet step="s4"></tp-step-bullet>
          </gds-flex>
        </gds-flex>
      </tp-card>
      ${this.isModalOpen
        ? html`
            <gds-container
              position="fixed"
              inset="0"
              background="#00000040"
              z-index="20"
              >
              <gds-container
              width="25vw"
              background="#fef5f3"
             
                level="2"
                margin="0 0 0 auto"
                height="100%"
              transition="all 0.2s"
                
                class="actionsheet"

              >


                <gds-flex
                  flex-direction="column"
                  align-items="center"
                  padding="4xl"
                  gap="2xl"
                >
                  <gds-flex>
                    <gds-button @click=${this.closeModal}>Close</gds-button>
                  </gds-flex>
                  <gds-card variant="negative" max-width="max-content">ICA</gds-card>
                  <gds-card variant="secondary" width="100%">THIS</gds-card>
                </gds-flex>
              </gds-container>
            </gds-container>
          `
        : nothing}
    `
  }
}
