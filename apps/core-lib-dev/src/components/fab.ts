import { LitElement, nothing } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/mask/index.js'
import '@sebgroup/green-core/components/icon/icons/cross-small.js'
import '@sebgroup/green-core/components/icon/icons/knife-spoon.js'
import '@sebgroup/green-core/components/icon/icons/settings-slider-ver.js'
import '@sebgroup/green-core/components/icon/icons/arrow-rotate-right-left.js'
import '@sebgroup/green-core/components/icon/icons/credit-card.js'
import '@sebgroup/green-core/components/icon/icons/cross-large.js'
import '@sebgroup/green-core/components/icon/icons/plus-large.js'
import '@sebgroup/green-core/components/icon/icons/arrow-right-up-circle.js'
import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/fab/index.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

@customElement('tp-fab')
export class TPFAB extends LitElement {
  @state()
  isModalOpen = false

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
        .actionsheet {
          transition: opacity 424ms;
          overflow-x: hidden;
          overflow-y: auto;
          overscroll-behavior: contain;
          z-index: 1999;

          opacity: 0;
          pointer-events: none;
          visibility: hidden;

          &.open {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
          }

          /* @starting-style {
            opacity: 0;
          }

          @media screen and (max-width: 768px) {
            @starting-style {
              transform: translateY(100%);
            }
          } */
        }

        .fab::part(_button) {
          z-index: 2000 !important;
        }
      </style>

      <gds-container
        class=${'actionsheet' + ' ' + (this.isModalOpen === true ? 'open' : '')}
        position="fixed"
        inset="0"
        width="100%"
        height="100%"
        @click=${this.handleCardClick}
      >
        <gds-mask background="#0000004a" width="100%" height="100%">
          <gds-flex justify-content="flex-end" width="100%" padding="xs">
            <gds-card>
              <gds-flex flex="1" justify-content="flex-end">
                <gds-button @click=${this.closeModal} rank="secondary">
                  <gds-icon-cross-large></gds-icon-cross-large>
                </gds-button>
              </gds-flex>

              <gds-flex flex-direction="column" min-width="40ch" gap="m">
                <gds-flex align-items="center" gap="s">
                  <gds-flex
                    level="3"
                    border-radius="max"
                    background="secondary"
                    width="40px"
                    height="40px"
                    align-items="center"
                    justify-content="center"
                  >
                    <gds-icon-arrow-rotate-right-left></gds-icon-arrow-rotate-right-left>
                  </gds-flex>
                  <gds-text>Flytta pengar</gds-text>
                </gds-flex>
                <gds-flex align-items="center" gap="s">
                  <gds-flex
                    level="3"
                    border-radius="max"
                    background="secondary"
                    width="40px"
                    height="40px"
                    align-items="center"
                    justify-content="center"
                  >
                    <gds-icon-credit-card></gds-icon-credit-card>
                  </gds-flex>
                  <gds-text>Hantera kort</gds-text>
                </gds-flex>
              </gds-flex>
            </gds-card>
          </gds-flex>
        </gds-mask>
      </gds-container>

      <gds-fab class="fab" @click=${this.handleCardClick}>
        <gds-icon-plus-large></gds-icon-plus-large>
      </gds-fab>
    `
  }
}
