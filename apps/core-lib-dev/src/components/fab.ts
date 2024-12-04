import { LitElement } from 'lit'
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
export class FAB extends LitElement {
  protected createRenderRoot() {
    return this
  }

  @state()
  viewOptions = {
    hasAccounts: false,
    hasSavings: false,
    hasCards: false,
  }

  @state()
  isModalOpen = false

  private handleCardClick() {
    this.isModalOpen = true
  }

  private closeModal(event: Event) {
    event.stopPropagation()
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
          background-color: rgba(0, 0, 0, 0.1);
          /* backdrop-filter: blur(4px); */
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
          z-index: 2;
          margin: 0 auto;
        }

        .BT::part(_button) {
          justify-content: flex-start;
          padding: 10px;
          min-height: max-content;
        }

        .options {
          transition: transform 240ms;
          transition-delay: 200ms;
          opacity: 0;
          transform: translateX(100%);
          backdrop-filter: blur(10px);

          &.open {
            transform: translateX(0%);
            opacity: 1;
          }

          @media screen and (max-width: 768px) {
            transform: translateY(100%);

            &.open {
              transform: translateY(0%);
              opacity: 1;
            }
          }
        }
      </style>

      <gds-flex
        class=${'actionsheet' + ' ' + (this.isModalOpen === true ? 'open' : '')}
        position="fixed"
        inset="0"
        width="100%"
        height="100%"
        @click=${this.handleCardClick}
        overflow="hidden"
      >
        <gds-flex
          justify-content="flex-end"
          width="100%"
          max-height="calc(100% - 12px)"
          padding="0; m{xs}"
          flex="1"
        >
          <gds-card
            height="100%"
            width="100%; m{40ch}"
            class=${'options' + ' ' + (this.isModalOpen === true ? 'open' : '')}
            border-radius="0; m{xs}"
            background="#ffffff/0.8"
          >
            <gds-flex flex="1" justify-content="flex-end">
              <gds-button
                @click=${this.closeModal}
                rank="secondary"
                size="small"
              >
                <gds-icon-cross-large></gds-icon-cross-large>
              </gds-button>
            </gds-flex>
            <gds-flex
              flex-direction="column"
              gap="m"
              flex="1"
              overflow="auto"
              padding="8xl 0 0 0"
            >
              <!-- <slot></slot> -->

              <gds-button
                class="BT"
                rank="tertiary"
                @click=${() =>
                  this.#setViewOptions({
                    ...this.viewOptions,
                    hasAccounts: !this.viewOptions.hasAccounts,
                  })}
              >
                <gds-flex align-items="center" gap="s" cursor="pointer">
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
                  <gds-text>Accounts</gds-text>
                </gds-flex>
              </gds-button>
              <gds-button
                class="BT"
                rank="tertiary"
                @click=${() =>
                  this.#setViewOptions({
                    ...this.viewOptions,
                    hasSavings: !this.viewOptions.hasSavings,
                  })}
              >
                <gds-flex align-items="center" gap="s" cursor="pointer">
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
                  <gds-text>Savings</gds-text>
                </gds-flex>
              </gds-button>
              <gds-button
                class="BT"
                rank="tertiary"
                @click=${() =>
                  this.#setViewOptions({
                    ...this.viewOptions,
                    hasCards: !this.viewOptions.hasCards,
                  })}
              >
                <gds-flex align-items="center" gap="s" cursor="pointer">
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
                  <gds-text>Cards</gds-text>
                </gds-flex>
              </gds-button>
            </gds-flex>
          </gds-card>
        </gds-flex>
      </gds-flex>

      <gds-fab
        class="fab"
        inset="auto 0 40px 0; m{auto 40px 40px auto}"
        @click=${this.handleCardClick}
      >
        <gds-icon-plus-large></gds-icon-plus-large>
      </gds-fab>
    `
  }

  #setViewOptions(options: any) {
    this.viewOptions = options
    this.dispatchEvent(
      new CustomEvent('view-options-change', {
        detail: { view: options },
        bubbles: true,
        composed: true,
      }),
    )
  }
}
