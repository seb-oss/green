import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/badge/index.js'
import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/divider/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/icon/icons/arrow-left-right.js'
import '@sebgroup/green-core/components/icon/icons/plus-large.js'
import '@sebgroup/green-core/components/icon/icons/calendar.js'
import '@sebgroup/green-core/components/icon/icons/chevron-right.js'
import '@sebgroup/green-core/components/icon/icons/chevron-bottom.js'
import '@sebgroup/green-core/components/icon/icons/credit-card.js'
import '@sebgroup/green-core/components/icon/icons/fashion.js'
import '@sebgroup/green-core/components/icon/icons/suitcase-work.js'
import '@sebgroup/green-core/components/icon/icons/store.js'
import '@sebgroup/green-core/components/icon/icons/knife-spoon.js'
import '@sebgroup/green-core/components/icon/icons/arrow-out-of-box.js'
import '@sebgroup/green-core/components/mask/mask.js'
import '@sebgroup/green-core/components/icon/icons/chevron-bottom.js'
import '../../components/jit'
import './dashboard.css'
import '../../components/accounts'
import '../../common/card'
import '../../common/list-item'

@customElement('gds-dashboard')
export class CardExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`
      <gds-flex width="100%" flex-direction="column" gap="xl">
        <gds-flex justify-content="space-between">
          <gds-flex flex-direction="column">
            <gds-text tag="h1" font-size="heading-l">Hej!</gds-text>
            <gds-text tag="h2" font-size="heading-l">Whats going on?</gds-text>
          </gds-flex>
          <gds-flex gap="xs">
            <gds-button rank="secondary">
              <gds-icon-arrow-left-right></gds-icon-arrow-left-right>
            </gds-button>
            <gds-button rank="secondary">
              <gds-icon-plus-large></gds-icon-plus-large>
            </gds-button>
            <gds-button rank="secondary">
              <gds-icon-calendar></gds-icon-calendar>
            </gds-button>
            <gds-button rank="secondary">
              Genvägar
              <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
            </gds-button>
          </gds-flex>
        </gds-flex>
        <gds-grid columns="3" gap="xl">
          <tp-card>
            <!-- Header -->
            <gds-text slot="header" font-size="heading-s">
              Transactions
            </gds-text>
            <gds-button slot="action" size="small" rank="tertiary">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            <!-- /Header -->
            <tp-list-item>
              <gds-flex
                level="3"
                width="40px"
                height="40px"
                background="positive"
                border-radius="max"
                align-items="center"
                justify-content="center"
                slot="icon"
                color="primary"
              >
                <gds-icon-knife-spoon
                  width="20"
                  height="20"
                ></gds-icon-knife-spoon>
              </gds-flex>

              <gds-flex
                flex-direction="column"
                gap="xs"
                border="0 0 4xs/primary 0"
                padding="0 0 m 0"
                flex="1"
              >
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">Mäster Anders</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      Restaurant
                    </gds-text>
                  </gds-flex>
                  <gds-flex flex-direction="column" align-items="flex-end">
                    <gds-text font-size="detail-m">32 000,00</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      5 december
                    </gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-flex>
            </tp-list-item>
            <tp-list-item>
              <gds-flex
                level="3"
                width="40px"
                height="40px"
                background="blue-02"
                border-radius="max"
                align-items="center"
                justify-content="center"
                slot="icon"
                color="primary"
              >
                <gds-icon-fashion width="20" height="20"></gds-icon-fashion>
              </gds-flex>
              <gds-flex
                flex-direction="column"
                gap="xs"
                border="0 0 4xs/primary 0"
                padding="0 0 m 0"
                flex="1"
              >
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">ACNE</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      Shopping
                    </gds-text>
                  </gds-flex>
                  <gds-flex flex-direction="column" align-items="flex-end">
                    <gds-text font-size="detail-m">47 300,00</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      6 december
                    </gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-flex>
            </tp-list-item>
            <tp-list-item>
              <gds-flex
                level="3"
                width="40px"
                height="40px"
                background="negative"
                border-radius="max"
                align-items="center"
                justify-content="center"
                slot="icon"
                color="primary"
              >
                <gds-icon-store width="20" height="20"></gds-icon-store>
              </gds-flex>

              <gds-flex
                flex-direction="column"
                gap="xs"
                padding="0 0 m 0"
                flex="1"
              >
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">Ica Sabbatsberg</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      Food
                    </gds-text>
                  </gds-flex>
                  <gds-flex flex-direction="column" align-items="flex-end">
                    <gds-text font-size="detail-m">32 000,00</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      7 december
                    </gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-flex>
            </tp-list-item>

            <!-- Footer -->
            <gds-flex
              slot="footer"
              justify-content="space-between"
              align-items="center"
              flex="1"
            >
              <gds-text> Show more </gds-text>
              <gds-button size="small" rank="tertiary">
                <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
              </gds-button>
            </gds-flex>
          </tp-card>
          <tp-card>
            <!-- Header -->
            <gds-text slot="header" font-size="heading-s"> Accounts </gds-text>
            <gds-button slot="action" size="small" rank="tertiary">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            <!-- /Header -->
            <tp-list-item>
              <gds-flex
                width="40px"
                height="40px"
                background="primary"
                border-radius="max"
                align-items="center"
                justify-content="center"
                slot="icon"
                color="primary"
              >
                <gds-icon-credit-card
                  width="20"
                  height="20"
                ></gds-icon-credit-card>
              </gds-flex>

              <gds-flex
                flex-direction="column"
                gap="xs"
                border="0 0 4xs/primary 0"
                padding="0 0 m 0"
                flex="1"
              >
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">ISK account</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      8896 13 320 20
                    </gds-text>
                  </gds-flex>
                  <gds-flex flex-direction="column" align-items="flex-end">
                    <gds-text font-size="detail-m">32 000,00</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      5 december
                    </gds-text>
                  </gds-flex>
                </gds-flex>
                <gds-badge variant="warning">
                  Det saknas pengar för nästa dragning.
                </gds-badge>
              </gds-flex>
            </tp-list-item>
            <tp-list-item>
              <gds-flex
                width="40px"
                height="40px"
                background="primary"
                border-radius="max"
                align-items="center"
                justify-content="center"
                slot="icon"
                color="primary"
              >
                <gds-icon-suitcase-work
                  width="20"
                  height="20"
                ></gds-icon-suitcase-work>
              </gds-flex>
              <gds-flex
                flex-direction="column"
                gap="xs"
                border="0 0 4xs/primary 0"
                padding="0 0 m 0"
                flex="1"
              >
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">Salary</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      6896 20 320 20
                    </gds-text>
                  </gds-flex>
                  <gds-flex flex-direction="column" align-items="flex-end">
                    <gds-text font-size="detail-m">47 300,00</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      6 december
                    </gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-flex>
            </tp-list-item>
            <tp-list-item>
              <gds-flex
                width="40px"
                height="40px"
                background="primary"
                border-radius="max"
                align-items="center"
                justify-content="center"
                slot="icon"
                color="primary"
              >
                <gds-icon-suitcase-work
                  width="20"
                  height="20"
                ></gds-icon-suitcase-work>
              </gds-flex>

              <gds-flex flex-direction="column" gap="xs" flex="1">
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">Pension</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      2896 48 111 19
                    </gds-text>
                  </gds-flex>
                  <gds-flex flex-direction="column" align-items="flex-end">
                    <gds-text font-size="detail-m">32 000,00</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      7 december
                    </gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-flex>
            </tp-list-item>

            <!-- Footer -->

            <gds-flex slot="footer" flex-direction="column" padding="0 0 0 xs">
              <tp-list-item>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  slot="icon"
                >
                  <rect width="24" height="24" fill="#0000A0" rx="12" />
                  <g fill="#fff" clip-path="url(#a)">
                    <path
                      d="M18.6596 11.0484c-.6462.047-1.1631.5757-1.2101 1.2218-.047.7637.5522 1.3981 1.304 1.3981.2703 0 .6344-.141.7989-.423v.3877h.5052v-1.2453c.0235-.8224-.6344-1.398-1.398-1.3393Zm.8576 1.3393c-.0235.4347-.3995.7636-.8459.7049-.3407-.047-.6109-.3172-.6579-.6579-.047-.4582.3055-.8459.7519-.8459.3994 0 .7284.3172.7519.7167v.0822ZM15.8869 11.0484c-.6932.0235-1.2806.5522-1.2806 1.3275 0 .7049.5757 1.3041 1.3158 1.3041.517 0 1.0221-.3054 1.2218-.8106l-.5051-.1528c-.094.2115-.3172.3877-.5639.4347-.3525.0705-.6814-.1527-.8107-.3877l1.962-.5404c-.0588-.5169-.5052-1.1983-1.3393-1.1748Zm-.7284 1.2453c0-.2702.1645-.5874.5169-.7166.3995-.1528.7519.047.9046.3289l-1.4215.3877ZM11.5753 11.5771v-.5404c-.4934 0-.6579.2467-.7401.3759v-.2937h-.564V13.6213h.5757v-1.2336c0-.5639.329-.7871.7284-.8106ZM6.39433 12.6227 4.67909 10.602h-.58742v3.0193h.61091v-2.0207l1.73874 2.0324H6.97v-3.031h-.57567v2.0207ZM14.2656 10.3318h-.5404v.9868c-.1292-.1645-.5287-.3054-.8694-.2702-.6461.047-1.163.5757-1.21 1.2218-.047.7637.5521 1.3981 1.304 1.3981.282 0 .6697-.1293.7989-.376v.329h.5052V12.329l.0117-1.9972Zm-.5639 2.0559c-.0235.4347-.3994.7636-.8459.7049-.3407-.047-.6109-.3172-.6579-.6579-.0469-.4582.3055-.8459.7519-.8459.3995 0 .7284.3172.7519.7167v.0822ZM8.62647 11.0367c-.72839 0-1.3158.5874-1.3158 1.3158 0 .7283.58741 1.3158 1.3158 1.3158.72839 0 1.31581-.5875 1.31581-1.3158-.01175-.7284-.59916-1.3158-1.31581-1.3158Zm0 2.0676c-.41119 0-.75189-.3407-.75189-.7518 0-.4112.3407-.7519.75189-.7519.41119 0 .75189.3407.75189.7519 0 .4229-.3407.7518-.75189.7518Z"
                    />
                  </g>
                  <defs>
                    <clipPath id="a">
                      <path
                        fill="#fff"
                        d="M4.07996 10.32h15.9894v3.36H4.07996z"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <gds-flex flex-direction="column" gap="xs" flex="1">
                  <gds-flex
                    align-items="center"
                    justify-content="space-between"
                  >
                    <gds-flex flex-direction="column">
                      <gds-text font-size="detail-m">Nordea</gds-text>
                      <gds-text font-size="detail-s" color="secondary">
                        2896 48 111 19
                      </gds-text>
                    </gds-flex>
                    <gds-flex flex-direction="column" align-items="flex-end">
                      <gds-text font-size="detail-m">10 000,00</gds-text>
                      <gds-text font-size="detail-s" color="secondary">
                        7 december
                      </gds-text>
                    </gds-flex>
                  </gds-flex>
                </gds-flex>
              </tp-list-item>
            </gds-flex>
          </tp-card>
          <tp-card>
            <!-- Header -->
            <gds-text slot="header" font-size="heading-s"> Kort </gds-text>
            <gds-button slot="action" size="small" rank="tertiary">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            <!-- /Header -->
            <tp-list-item>
              <gds-flex
                width="40px"
                height="40px"
                background="primary"
                border-radius="max"
                align-items="center"
                justify-content="center"
                slot="icon"
                color="primary"
              >
                <gds-icon-credit-card
                  width="20"
                  height="20"
                ></gds-icon-credit-card>
              </gds-flex>

              <gds-flex
                flex-direction="column"
                gap="xs"
                border="0 0 4xs/primary 0"
                padding="0 0 m 0"
                flex="1"
              >
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">SEB Debit</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      •••• 0329
                    </gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-flex>
            </tp-list-item>
            <tp-list-item>
              <gds-flex
                width="40px"
                height="40px"
                background="tertiary"
                border-radius="max"
                align-items="center"
                justify-content="center"
                slot="icon"
                color="tertiary"
              >
                <gds-icon-credit-card
                  width="20"
                  height="20"
                ></gds-icon-credit-card>
              </gds-flex>

              <gds-flex
                flex-direction="column"
                gap="xs"
                border="0 0 4xs/primary 0"
                padding="0 0 m 0"
                flex="1"
              >
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">SEB Carbon</gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      •••• 2864
                    </gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-flex>
            </tp-list-item>
            <tp-list-item>
              <gds-flex
                width="40px"
                height="40px"
                background="warning"
                border-radius="max"
                align-items="center"
                justify-content="center"
                slot="icon"
                color="warning"
              >
                <gds-icon-credit-card
                  width="20"
                  height="20"
                ></gds-icon-credit-card>
              </gds-flex>

              <gds-flex
                flex-direction="column"
                gap="xs"
                border="0 0 4xs/primary 0"
                padding="0 0 m 0"
                flex="1"
              >
                <gds-flex align-items="center" justify-content="space-between">
                  <gds-flex flex-direction="column">
                    <gds-text font-size="detail-m">
                      Eurocard Corporate Gold
                    </gds-text>
                    <gds-text font-size="detail-s" color="secondary">
                      •••• 4231
                    </gds-text>
                  </gds-flex>
                </gds-flex>
              </gds-flex>
            </tp-list-item>
          </tp-card>
          <gds-card>[CONTENT GOES HERE]</gds-card>
          <gds-jit></gds-jit>
        </gds-grid>

        <gds-card max-width="max-content">
          <tp-quicklinks></tp-quicklinks>
        </gds-card>

        <tp-news-widget></tp-news-widget>
      </gds-flex>
    `
  }
}
