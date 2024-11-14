/* eslint-disable @nx/enforce-module-boundaries */
import { LitElement } from 'lit'
import { customElement, property, queryAsync } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/theme/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/img/index.js'
import '@sebgroup/green-core/components/mask/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/icon/icons/cross-small.js'

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
  connectedCallback() {
    super.connectedCallback()
  }

  @queryAsync('.news')
  newsElement?: Promise<GdsCard>

  @queryAsync('dialog')
  dialogElement?: Promise<HTMLDialogElement>

  async #handleClick() {
    const dialog = await this.dialogElement

    if (!dialog) return

    document.startViewTransition(() => {
      dialog.showModal()
      lockBodyScrolling(dialog)
    })
  }

  async #handleCloseModal() {
    const dialog = await this.dialogElement

    if (!dialog) return
    dialog.close()
    unlockBodyScrolling(dialog)
  }

  render() {
    return html` <style>
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
          max-height: 100vh;
          height: 100vh;

          @media (max-width: 768px) {
            max-width: 100vw;
          }

          opacity: 1;
        }

        dialog:modal::-webkit-scrollbar {
          display: none; /* Safari and Chrome */
        }

        .grid {
          overflow: hidden;
          height: 100%;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;

          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
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
      </style>
      <dialog>
        <gds-flex flex-direction="column" gap="xl">
          <div class="grid">
            <div class="button">
              <gds-theme colorScheme="dark">
                <gds-button
                  rank="secondary"
                  variant="neutral"
                  size="small"
                  @click="${this.#handleCloseModal}"
                >
                  <gds-icon-cross-small></gds-icon-cross-small>
                </gds-button>
              </gds-theme>
            </div>
            <gds-video
              class="image"
              src="${video}"
              object-fit="cover"
              muted
              autoplay
              loop
            ></gds-video>
          </div>
          <gds-text font-size="heading-l" margin="0 xl 0 xl"
            >Letar du nytt boende?</gds-text
          >
          <gds-text font-size="body-l" margin="0 xl 0 xl"
            >Bostadsköpet är en av livet största affärer och vi är gärna med dig
            hela vägen.</gds-text
          >
          <gds-container margin="2xl xl 2xl xl">
            <tp-savings-calc></tp-savings-calc>
          </gds-container>
        </gds-flex>
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
          <gds-mask
            mask-image="top"
            backdrop-filter="blur(20px)"
            position="absolute"
          >
            <gds-flex
              flex-direction="column"
              justify-content="flex-end"
              padding="l"
              gap="l"
              height="100%"
            >
              <gds-flex flex-direction="column" gap="m">
                <gds-text tag="h3" font-size="heading-s"
                  >Letar du nytt boende?</gds-text
                >
                <gds-text font-size="detail-m"
                  >Bostadsköpet är en av livet största affärer och vi är gärna
                  med dig hela vägen.</gds-text
                >
                <gds-link variant="secondary"
                  ><gds-flex justify-content="space-between" width="100%"
                    ><gds-text>Hur mycket kan du låna?</gds-text
                    ><gds-icon-arrow-right></gds-icon-arrow-right
                  ></gds-flex>
                </gds-link>
              </gds-flex>
            </gds-flex>
          </gds-mask>
        </gds-flex>
      </gds-card>`
  }
}
