import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import acneLogo from '../assets/acne.svg'
import icaLogo from '../assets/ica.svg'
import swishLogo from '../assets/swish.svg'

import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'

import { html } from '@sebgroup/green-core/scoping'

@customElement('gds-carousel-trans')
export class GdsCarousel extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  renderIca() {
    return html`<img src="${icaLogo}" alt="ICA Logo" />`
  }
  renderSwish() {
    return html`<img src="${swishLogo}" alt="Swish Logo" />`
  }
  renderAcne() {
    return html`<img src="${acneLogo}" alt="Acne Logo" />`
  }
  render() {
    return html` <style>
        /* ::-webkit-scrollbar {
          display: none;
        } */
        .item-wrapper {
          overflow-x: scroll;
          scroll-snap-type: x mandatory;

          scroll-behavior: smooth;
        }
        .item {
          scroll-snap-align: center;
        }

        .item-wrapper::-webkit-scrollbar {
          max-width: 10px;
          max-height: 10px;
          overflow: hidden;
        }
        .item-wrapper::-webkit-scrollbar-thumb {
          background: linear-gradient(
            to right,
            transparent,
            transparent 20%,
            transparent 20%,
            transparent 40%,
            #35723d 40%,
            #35723d 60%,
            transparent 60%,
            transparent 80%,
            transparent 80%,
            transparent
          );
        }
        .item-wrapper::-webkit-scrollbar-track {
          background: transparent;
        }
      </style>
      <gds-card variant="primary" padding="0 0 m 0"
        ><gds-flex padding="m m 0 m" justify-content="space-between"
          ><gds-text font-size="preamble-s" tag="h3">Transaktioner</gds-text
          ><gds-theme color-scheme="light"
            ><gds-button rank="tertiary" label="options">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></gds-button></gds-theme
        ></gds-flex>
        <gds-flex
          class="item-wrapper"
          margin="0 0 l 0"
          padding="xl m xl m"
          gap="s"
          width="100%"
        >
          <gds-card class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card padding="0 0 m 0">${this.renderIca()}</gds-card>
              <gds-text font-size="detail-s" tag="p">Livsmedel</gds-text
              ><gds-card padding="0" margin="3xs 0 2xs 0"
                ><gds-text font-size="detail-m" tag="p"
                  >ICA Sabbatsberg</gds-text
                ></gds-card
              >
              <gds-text font-size="detail-m" tag="p"
                >-240,00</gds-text
              ></gds-flex
            ></gds-card
          >
          <gds-card class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card padding="0 0 m 0">${this.renderSwish()}</gds-card>
              <gds-text font-size="detail-s">Inkomst</gds-text>
              <gds-card padding="0" margin="2xs 0 0 0">
                <gds-text font-size="detail-m">Swish Tobbe</gds-text>
              </gds-card>
              <gds-text color="positive" font-size="detail-m"
                >500,00</gds-text
              ></gds-flex
            ></gds-card
          >
          <gds-card class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card padding="0 0 m 0">${this.renderIca()}</gds-card>
              <gds-text font-size="detail-s" tag="p">Livsmedel</gds-text
              ><gds-card padding="0" margin="3xs 0 2xs 0"
                ><gds-text font-size="detail-m" tag="p"
                  >ICA Sabbatsberg</gds-text
                ></gds-card
              >
              <gds-text font-size="detail-m" tag="p"
                >-345,50</gds-text
              ></gds-flex
            ></gds-card
          >
          <gds-card class="item" padding="0" min-width="40%">
            <gds-flex place-items="center" flex-direction="column">
              <gds-card padding="0 0 m 0">${this.renderIca()}</gds-card>
              <gds-text font-size="detail-s">Livsmedel</gds-text>
              <gds-card padding="0" margin="2xs 0 0 0">
                <gds-text font-size="detail-m">ICA Sabbatsberg</gds-text>
              </gds-card>
              <gds-text font-size="detail-m">-488,00</gds-text></gds-flex
            ></gds-card
          >
        </gds-flex>
      </gds-card>`
  }
}
