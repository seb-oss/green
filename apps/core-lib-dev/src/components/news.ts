/* eslint-disable @nx/enforce-module-boundaries */
import { css, LitElement } from 'lit'
import { customElement, property, queryAsync, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/theme/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/img/index.js'
import '@sebgroup/green-core/components/mask/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '../../../../libs/core/src/primitives/ripple'
import '@sebgroup/green-core/components/icon/icons/cross-small.js'
import '@sebgroup/green-core/components/icon/icons/home-open.js'
import '@sebgroup/green-core/components/icon/icons/block.js'
import '@sebgroup/green-core/components/icon/icons/cloudy-sun.js'
import './slider'
import './loan-calculator'
import './pill-input'
import './rates'
import './content-cards'

import { GdsCard } from '@sebgroup/green-core/components/card/index.js'
import {
  lockBodyScrolling,
  registerGlobalScrollLockStyles,
  unlockBodyScrolling,
} from '../../../../libs/core/src/components/dialog/scroll-lock'
import video from '../assets/forest.mp4?url'

registerGlobalScrollLockStyles()

@customElement('tp-news')
export class TpNewsItem extends LitElement {
  static styles = css`
    @keyframes news--inview {
      from {
        scale: 0.75;
      }
    }
    .news {
      min-height: 391px;
      height: 100%;
      overflow: clip;

      /* scale up animation */
      animation: news--inview linear both;

      /* when a picture crosses a horizontal scrollport */
      animation-timeline: view(y);

      /* animate as element is 10% in, until it reaches 40% */
      animation-range: 0% 30%;
    }

    .news:hover {
      cursor: pointer;
    }

    dialog {
      border: none;
      opacity: 1;

      padding: 0;
      @media (max-width: 768px) {
        margin: 0;
      }
    }

    dialog:modal {
      max-width: 768px;
      width: 100%;

      min-height: 100vh;

      opacity: 1;
    }

    dialog:modal::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }

    dialog::backdrop {
      backdrop-filter: blur(4px);
    }

    .grid {
      overflow: hidden;
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }

    .grid > * {
      grid-area: 1/1;
    }

    .grid > .button {
      z-index: 2;
      margin: 16px;
      margin-left: auto;
    }

    .image {
      view-transition-name: --news-image;
    }

    .heading {
      view-transition-name: --news-heading;
    }

    .blur {
      mask-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1) 80%,
        rgba(0, 0, 0, 0) 100%
      );

      mask-size: cover;
      mask-repeat: no-repeat;
      mask-position: center;

      backdrop-filter: blur(10px);
    }

    .merge {
      margin-top: -127px;
      z-index: 5;
    }
  `

  connectedCallback() {
    super.connectedCallback()
  }

  @queryAsync('dialog')
  dialogElement?: Promise<HTMLDialogElement>

  // @state()
  // private open = false

  async #handleClick() {
    const dialog = await this.dialogElement

    if (!dialog) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(document as any).startViewTransition(() => {
      // this.open = true
      dialog.showModal()
      lockBodyScrolling(dialog)
    })
  }

  async #handleCloseModal() {
    const dialog = await this.dialogElement

    if (!dialog) return

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(document as any).startViewTransition(() => {
      // this.open = false
      dialog.close()
      unlockBodyScrolling(dialog)
    })
  }

  render() {
    return html` <dialog
        @click=${async (e: MouseEvent) => {
          const dialog = await this.dialogElement

          if (dialog?.contains(e.target as Node) && dialog !== e.target) return

          this.#handleCloseModal()
        }}
      >
        <gds-theme color-scheme="dark">
          <gds-card
            level="1"
            height="100%"
            padding="0"
            border="0"
            border-radius="0"
          >
            <gds-flex flex-direction="column" gap="xl">
              <div class="grid">
                <div class="button">
                  <gds-button
                    rank="secondary"
                    variant="neutral"
                    size="small"
                    @click="${this.#handleCloseModal}"
                  >
                    <gds-icon-cross-small></gds-icon-cross-small>
                  </gds-button>
                </div>
                <gds-flex flex-direction="column" gap="xl">
                  <gds-video
                    style="pointer-events: none;"
                    class="image"
                    src="${video}"
                    object-fit="cover"
                    muted
                    autoplay
                    loop
                  ></gds-video>

                  <gds-container class="blur merge" padding="l xl 0 xl">
                    <gds-text
                      class="heading"
                      font-size="heading-l"
                      margin="l 0 l 0"
                      >Letar du nytt boende?</gds-text
                    >

                    <gds-text font-size="body-l"
                      >Bostadsköpet är en av livet största affärer och vi är
                      gärna med dig hela vägen.</gds-text
                    >
                  </gds-container>

                  <gds-flex
                    flex-direction="column"
                    gap="xl"
                    padding="0 xl xl xl"
                  >
                    <tp-interaction-stuff></tp-interaction-stuff>

                    <gds-text font-size="preamble-s"
                      >More insights, what´s the biggest decline rate for
                      interest times right now?</gds-text
                    >

                    <tp-rates></tp-rates>

                    <gds-text font-size="preamble-s"
                      >Time to test out what I can get out of this.</gds-text
                    >

                    <tp-loan-calculator></tp-loan-calculator>

                    <gds-text font-size="preamble-s">More content</gds-text>

                    <tp-content-cards></tp-content-cards>
                  </gds-flex>
                </gds-flex>
              </div>
            </gds-flex>
          </gds-card>
        </gds-theme>
      </dialog>
      <gds-card
        class="news"
        border="4xs/primary"
        border-radius="xs"
        overflow="hidden"
        padding="0"
        variant="tertiary"
        @click="${this.#handleClick}"
      >
        <gds-flex position="relative" height="100%">
          <gds-video
            class="image"
            src="${video}"
            object-fit="cover"
            muted
            autoplay
            loop
          ></gds-video>
          <gds-flex
            position="absolute"
            flex-direction="column"
            justify-content="flex-end"
            gap="l"
            height="100%"
            width="100%"
          >
            <gds-container class="blur"
              ><gds-flex flex-direction="column" gap="m" padding="2xl l l l">
                <gds-text class="heading" tag="h3" font-size="heading-s"
                  >Letar du nytt boende?</gds-text
                >
                <gds-link variant="secondary"
                  ><gds-flex justify-content="space-between" width="100%"
                    ><gds-text>Hur mycket kan du låna?</gds-text
                    ><gds-icon-arrow-right></gds-icon-arrow-right
                  ></gds-flex>
                </gds-link> </gds-flex
            ></gds-container>
          </gds-flex>
        </gds-flex>
      </gds-card>`
  }
}

@customElement('tp-interaction-stuff')
export class TpInteractionStuff extends LitElement {
  render() {
    return html`<gds-card>
      <gds-flex flex-direction="column" gap="l" padding="l">
        <gds-text margin="0 auto 0 auto" font-size="heading-s"
          >Interaction stuff</gds-text
        >

        <tp-interaction-slider
          max="18"
          min="0"
          .value=${9}
        ></tp-interaction-slider>

        <gds-flex flex-direction="column" gap="xs">
          <gds-text
            margin="0 auto 0 auto"
            font-size="detail-m"
            width="fit-content"
            >Så mycket kostar det</gds-text
          >
          <gds-text
            margin="0 auto 0 auto"
            font-size="display-m"
            width="fit-content"
            >1 135 000</gds-text
          >
        </gds-flex>
      </gds-flex>
    </gds-card>`
  }
}

@customElement('tp-interaction-slider')
export class TpInteractionSlider extends LitElement {
  @property({ type: String })
  label: string | undefined

  @property({ type: Number })
  min = 0

  @property({ type: Number })
  max = 100

  @state()
  value: number = this.max / 2

  render() {
    return html`<gds-flex flex-direction="column" gap="xs">
      ${this.label
        ? html`<gds-text font-size="detail-m">${this.label}</gds-text>`
        : undefined}
      <gds-flex flex-direction="row" justify-content="space-between">
        <tp-pill-input .value=${this.min.toString()}></tp-pill-input>
        <tp-pill-input .value=${this.max.toString()}></tp-pill-input>
      </gds-flex>
      <gds-flex flex-direction="column" gap="xs">
        <tp-slider
          .min=${this.min}
          .max=${this.max}
          .value=${this.value}
          @change=${(e: CustomEvent) => {
            this.value = e.detail.value
          }}
        ></tp-slider>
        <gds-card
          level="1"
          color="primary"
          width="fit-content"
          padding="xs s xs s"
          margin="0 auto 0 auto"
          border="0"
          border-radius="max"
          min-width="20px"
          ><gds-text
            style="text-align: center;"
            margin="0 auto 0 auto"
            font-size="detail-m"
            >${this.value}</gds-text
          ></gds-card
        >
      </gds-flex>
    </gds-flex>`
  }
}
