import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

@customElement('tp-savings')
export class TpSavingsWidget extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html` <gds-text tag="h2" font-size="heading-m">Spara</gds-text>
      <tp-card>
        <!-- Header -->
        <gds-flex level="2" slot="header" flex-direction="row">
          <gds-flex flex-direction="column" justify-content="space-between">
            <gds-text font-size="detail-s" color="secondary">Sparande</gds-text>
            <gds-text font-size="heading-m">1 506 408,40</gds-text>
          </gds-flex>
        </gds-flex>
        <gds-flex
          level="2"
          slot="action"
          justify-content="center"
          align-items="center"
          gap="m"
        >
          <gds-flex flex-direction="column">
            <gds-text font-size="detail-s" color="secondary"
              >Utveckling</gds-text
            >
            <gds-text font-size="heading-m" color="content-positive"
              >15,45%</gds-text
            >
          </gds-flex>

          <gds-button size="small" rank="tertiary"></gds-button>
        </gds-flex>
        <!-- /Header end-->

        <!-- body -->
        <gds-flex gap="s" align-items="center" justify-content="space-between">
          <gds-flex>
            <gds-flex flex-direction="column">
              <gds-text font-size="detail-s" color="secondary"
                >Värdepapper</gds-text
              >
              <gds-text font-size="detail-m" color="primary"
                >56 789,00</gds-text
              >
            </gds-flex>
          </gds-flex>
          <gds-flex>
            <gds-container
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="21"
                viewBox="0 0 89 21"
                fill="none"
              >
                <g clip-path="url(#clip0_1381_2591)">
                  <path
                    d="M3 13.3879C7.03472 13.3879 6.31424 16.2458 9.91667 16.2458C13.5191 16.2458 13.0868 9.72204 16.8333 9.72204C20.5799 9.72204 20.0035 19.0364 23.75 19.0364C27.4965 19.0364 27.0642 13.4702 30.6667 13.4702C34.2691 13.4702 33.5486 10.141 37.5833 10.141C41.618 10.141 40.6094 12.161 44.5 12.161C48.3906 12.161 47.3819 8.0462 51.4167 8.0462C55.4514 8.0462 54.4427 9.63226 58.3333 9.63226C62.224 9.63226 61.5035 12.0338 65.25 12.0338C68.9965 12.0338 68.4201 3.40774 72.1667 3.40774C75.9132 3.40774 75.0486 5.51749 79.0833 5.51749C83.1181 5.51749 82.5417 2.2182 86 2.2182"
                    stroke="url(#paint0_linear_1381_2591)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1381_2591"
                    x1="2.63444"
                    y1="15.9951"
                    x2="85.7424"
                    y2="15.9951"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35723D" stop-opacity="0" />
                    <stop
                      offset="0.233608"
                      stop-color="#35723D"
                      stop-opacity="0.25"
                    />
                    <stop offset="1" stop-color="#35723D" />
                  </linearGradient>
                  <clipPath id="clip0_1381_2591">
                    <rect
                      width="89"
                      height="20"
                      fill="white"
                      transform="matrix(-1 0 0 1 89 0.399902)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </gds-container>
          </gds-flex>
          <gds-flex align-items="center" gap="s">
            <gds-text color="positive" font-size="detail-m">1,99%</gds-text>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>
        </gds-flex>
        <gds-flex gap="s" align-items="center" justify-content="space-between">
          <gds-flex>
            <gds-flex flex-direction="column">
              <gds-text font-size="detail-s" color="secondary">Aktier</gds-text>
              <gds-text font-size="detail-m" color="primary"
                >159 200,00</gds-text
              >
            </gds-flex>
          </gds-flex>
          <gds-flex>
            <gds-container
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="45"
                viewBox="0 0 89 45"
                fill="none"
              >
                <path
                  d="M3 16.8265C7.03472 16.8265 6.31424 10.5391 9.91667 10.5391C13.5191 10.5391 13.0868 24.8915 16.8333 24.8915C20.5799 24.8915 20.0035 4.3999 23.75 4.3999C27.4965 4.3999 27.0642 16.6455 30.6667 16.6455C34.2691 16.6455 33.5486 23.9697 37.5833 23.9697C41.618 23.9697 40.6094 19.5258 44.5 19.5258C48.3906 19.5258 47.3819 28.5783 51.4167 28.5783C55.4514 28.5783 54.4427 25.089 58.3333 25.089C62.224 25.089 61.5035 19.8056 65.25 19.8056C68.9965 19.8056 68.4201 38.7829 72.1667 38.7829C75.9132 38.7829 75.0486 34.1415 79.0833 34.1415C83.1181 34.1415 82.5417 41.3999 86 41.3999"
                  stroke="url(#paint0_linear_1381_2609)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1381_2609"
                    x1="2.63444"
                    y1="11.0907"
                    x2="85.7424"
                    y2="11.0907"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#A63E2A" stop-opacity="0" />
                    <stop
                      offset="0.233608"
                      stop-color="#A63E2A"
                      stop-opacity="0.25"
                    />
                    <stop offset="1" stop-color="#A63E2A" />
                  </linearGradient>
                </defs>
              </svg>
            </gds-container>
          </gds-flex>
          <gds-flex align-items="center" gap="s">
            <gds-text color="negative" font-size="detail-m">-5,50%</gds-text>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>
        </gds-flex>
        <gds-flex gap="s" align-items="center" justify-content="space-between">
          <gds-flex>
            <gds-flex flex-direction="column">
              <gds-text font-size="detail-s" color="secondary">Konto</gds-text>
              <gds-text font-size="detail-m" color="primary"
                >467 200,00</gds-text
              >
            </gds-flex>
          </gds-flex>
          <gds-flex>
            <gds-container
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="45"
                viewBox="0 0 89 45"
                fill="none"
              >
                <path
                  d="M3 28.9733C7.03472 28.9733 6.31424 35.2607 9.91667 35.2607C13.5191 35.2607 13.0868 20.9084 16.8333 20.9084C20.5799 20.9084 20.0035 41.3999 23.75 41.3999C27.4965 41.3999 27.0642 29.1544 30.6667 29.1544C34.2691 29.1544 33.5486 21.8301 37.5833 21.8301C41.618 21.8301 40.6094 26.274 44.5 26.274C48.3906 26.274 47.3819 17.2215 51.4167 17.2215C55.4514 17.2215 54.4427 20.7108 58.3333 20.7108C62.224 20.7108 61.5035 25.9942 65.25 25.9942C68.9965 25.9942 68.4201 7.01689 72.1667 7.01689C75.9132 7.01689 75.0486 11.6583 79.0833 11.6583C83.1181 11.6583 82.5417 4.3999 86 4.3999"
                  stroke="url(#paint0_linear_1481_4301)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1481_4301"
                    x1="2.63444"
                    y1="34.7091"
                    x2="85.7424"
                    y2="34.7091"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35723D" stop-opacity="0" />
                    <stop
                      offset="0.233608"
                      stop-color="#35723D"
                      stop-opacity="0.25"
                    />
                    <stop offset="1" stop-color="#35723D" />
                  </linearGradient>
                </defs>
              </svg>
            </gds-container>
          </gds-flex>
          <gds-flex align-items="center" gap="s">
            <gds-text color="positive" font-size="detail-m">7,99%</gds-text>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>
        </gds-flex>

        <gds-flex gap="s" align-items="center" justify-content="space-between">
          <gds-flex>
            <gds-flex flex-direction="column">
              <gds-text font-size="detail-s" color="secondary"
                >Kapitalförsäkring</gds-text
              >
              <gds-text font-size="detail-m" color="primary"
                >359 200,00</gds-text
              >
            </gds-flex>
          </gds-flex>
          <gds-flex>
            <gds-container
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="53"
                viewBox="0 0 89 53"
                fill="none"
              >
                <path
                  d="M3 34.1685C7.03472 34.1685 6.31424 41.599 9.91667 41.599C13.5191 41.599 13.0868 24.6372 16.8333 24.6372C20.5799 24.6372 20.0035 48.8545 23.75 48.8545C27.4965 48.8545 27.0642 34.3825 30.6667 34.3825C34.2691 34.3825 33.5486 25.7265 37.5833 25.7265C41.618 25.7265 40.6094 30.9784 44.5 30.9784C48.3906 30.9784 47.3819 20.28 51.4167 20.28C55.4514 20.28 54.4427 24.4038 58.3333 24.4038C62.224 24.4038 61.5035 30.6478 65.25 30.6478C68.9965 30.6478 68.4201 8.22003 72.1667 8.22003C75.9132 8.22003 75.0486 13.7054 79.0833 13.7054C83.1181 13.7054 82.5417 5.12722 86 5.12722"
                  stroke="url(#paint0_linear_1481_4319)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1481_4319"
                    x1="2.63444"
                    y1="40.9472"
                    x2="85.7424"
                    y2="40.9472"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35723D" stop-opacity="0" />
                    <stop
                      offset="0.233608"
                      stop-color="#35723D"
                      stop-opacity="0.25"
                    />
                    <stop offset="1" stop-color="#35723D" />
                  </linearGradient>
                </defs>
              </svg>
            </gds-container>
          </gds-flex>
          <gds-flex align-items="center" gap="s">
            <gds-text color="positive" font-size="detail-m">10,03%</gds-text>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>
        </gds-flex>
        <gds-flex gap="s" align-items="center" justify-content="space-between">
          <gds-flex>
            <gds-flex flex-direction="column">
              <gds-text font-size="detail-s" color="secondary"
                >Pensionsförsäkring</gds-text
              >
              <gds-text font-size="detail-m" color="primary"
                >634 000,00</gds-text
              >
            </gds-flex>
          </gds-flex>
          <gds-flex>
            <gds-container
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="89"
                height="21"
                viewBox="0 0 89 21"
                fill="none"
              >
                <g clip-path="url(#clip0_1481_4337)">
                  <path
                    d="M3 13.3879C7.03472 13.3879 6.31424 16.2458 9.91667 16.2458C13.5191 16.2458 13.0868 9.72204 16.8333 9.72204C20.5799 9.72204 20.0035 19.0364 23.75 19.0364C27.4965 19.0364 27.0642 13.4702 30.6667 13.4702C34.2691 13.4702 33.5486 10.141 37.5833 10.141C41.618 10.141 40.6094 12.161 44.5 12.161C48.3906 12.161 47.3819 8.0462 51.4167 8.0462C55.4514 8.0462 54.4427 9.63226 58.3333 9.63226C62.224 9.63226 61.5035 12.0338 65.25 12.0338C68.9965 12.0338 68.4201 3.40774 72.1667 3.40774C75.9132 3.40774 75.0486 5.51749 79.0833 5.51749C83.1181 5.51749 82.5417 2.2182 86 2.2182"
                    stroke="url(#paint0_linear_1481_4337)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1481_4337"
                    x1="2.63444"
                    y1="15.9951"
                    x2="85.7424"
                    y2="15.9951"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#35723D" stop-opacity="0" />
                    <stop
                      offset="0.233608"
                      stop-color="#35723D"
                      stop-opacity="0.25"
                    />
                    <stop offset="1" stop-color="#35723D" />
                  </linearGradient>
                  <clipPath id="clip0_1481_4337">
                    <rect
                      width="89"
                      height="20"
                      fill="white"
                      transform="matrix(-1 0 0 1 89 0.399902)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </gds-container>
          </gds-flex>
          <gds-flex align-items="center" gap="s">
            <gds-text color="positive" font-size="detail-m">4,03%</gds-text>
            <gds-button size="small" rank="tertiary">
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>
        </gds-flex>
        <!-- body end -->
      </tp-card>`
  }
}
