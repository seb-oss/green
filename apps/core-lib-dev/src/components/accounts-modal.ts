import { LitElement, nothing } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import '@sebgroup/green-core/components/icon/icons/cross-small.js'
import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/icon/icons/dot-grid-one-horizontal.js'
import './step-bullet'
import './accounts-card'

@customElement('tp-accounts-modal')
export class TPAccountsModal extends LitElement {
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
        .car {
          display: flex;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          width: 100%;
          position: relative;
          scrollbar-width: none;
          box-sizing: border-box;
        }

        .actionsheet {
          @starting-style {
            opacity: 0;
            transform: translateX(100%);
          }

          @media screen and (max-width: 768px) {
            @starting-style {
              transform: translateY(100%);
            }
          }
        }
      </style>
      <gds-container display="block; m{none}">
        <tp-card wide>
          <gds-text slot="header" font-size="heading-s">Transaction</gds-text>
          <gds-button slot="action" size="small" rank="tertiary">
            <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
          </gds-button>
          <gds-flex flex-direction="column" gap="l" padding="0 0 l 0">
            <div class="car">
              <gds-flex gap="2">
                <gds-container width="100px"></gds-container>
                <tp-accounts-card
                  @click=${this.handleCardClick}
                  name="positive"
                >
                  <gds-card
                    display="flex"
                    width="43px"
                    height="43px"
                    background="#bad8bd"
                    border="none"
                    level="3"
                    align-tiems="center"
                    padding="xs"
                  >
                    <svg viewBox="0 0 400 210">
                      <path
                        fill="#1a6a54"
                        fill-rule="evenodd"
                        d="M9.992468 172.829655V37.141674l27.1557-27.1557h325.777881l27.065181 27.1557v135.687981l-27.065181 27.1557H37.148168z"
                      />
                      <path
                        fill="#ffe32a"
                        fill-rule="evenodd"
                        d="m18.048659 40.490877 22.448712-22.448712h318.898437l22.62975 22.448712v128.989575l-22.539231 22.448712H40.497371l-22.448712-22.448712z"
                      />
                      <path
                        fill="#1a6a54"
                        fill-rule="evenodd"
                        d="m357.40439 23.201748 19.461585 19.371066v124.825701l-19.461585 19.371066H42.579308l-19.371066-19.371066V42.572814l19.371066-19.371066z"
                      />
                      <path
                        fill="#ffe32a"
                        fill-rule="evenodd"
                        d="M95.631 59.605c1.0681.10862 1.7199-.62459 2.1634-1.5569.97761 0 1.7108.02717 3.1229 0v10.853c-1.4212-.01815-2.1091-.01815-3.1591-.01815-.74225-4.9786-5.576-7.9838-12.057-7.9838-4.888 0-8.9886 1.566-8.9886 4.5622 0 3.7203 3.9195 3.7294 6.0467 4.001 6.4812 1.0229 14.546-.55217 18.375 6.3545 1.3306 2.8876 1.3306 6.7075 0 9.6041-3.0234 6.0557-9.5045 7.3592-15.624 6.617-3.5574-.19009-7.7394-2.607-9.4864-2.607-1.0953 0-1.5026 1.0319-1.8647 1.9643h-3.179v-11.704h3.1591c.18104 4.001 5.3497 8.5541 12.836 8.5541 9.242 0 11.034-7.5946 6.5174-9.07-7.7303-2.8061-19.806 1.4845-22.901-9.1425-.70605-3.4488-.09957-7.2778 2.7518-9.6946 6.1191-5.395 15.596-3.5212 22.286-.73321zM132.47 58.066h15.37v3.6389c-2.3535 0-4.3721-.05434-5.757 1.7289 0 0-9.3597 11.659-10.772 13.741 0 1.575-.0362 6.0829-.0362 6.0829-.0272 3.3854 5.2139 4.4988 6.6351 4.4988v3.6841h-21.453v-3.7022c2.0186 0 6.6351-1.0772 6.6351-4.4898v-6.065l-10.52-13.705c-1.52-1.72-2.73-1.72-5.71-1.72v-3.6932h20.611v3.6932c-6.0286.02717-3.829 2.5345-3.829 2.5345l6.3182 8.2192 6.4721-8.2192s2.3354-2.5617-3.9919-2.5617l.018-3.666zM177.01 59.605c1.0772.10862 1.7108-.62459 2.1634-1.5569.9776 0 1.7018.02717 3.1229 0v10.853c-1.4212-.01815-2.1091-.01815-3.1591-.01815-.7332-4.9786-5.576-7.9838-12.057-7.9838-4.888 0-8.9886 1.566-8.9886 4.5622 0 3.7203 3.9195 3.7294 6.0467 4.001 6.4812 1.0229 14.565-.55217 18.375 6.3545 1.3216 2.8876 1.3216 6.7075 0 9.6041-3.0143 6.0557-9.5045 7.3592-15.624 6.617-3.5665-.19009-7.7394-2.607-9.4774-2.607-1.1043 0-1.5117 1.0319-1.8738 1.9643h-3.1772v-11.704h3.1501c.19009 4.001 5.3678 8.5541 12.845 8.5541 9.242 0 11.034-7.5946 6.5174-9.07-7.7213-2.8061-19.797 1.4845-22.91-9.1425-.697-3.4488-.0815-7.2778 2.7699-9.6946 6.1282-5.395 15.587-3.5212 22.277-.73321zM227.07 58.066v10.88c-1.5479.05434-1.9914-.01805-3.3673 0-.53406-2.7156-1.1496-4.2906-3.9919-5.9652-1.5841-.9595-5.0329-1.1677-7.8299-1.2039v21.553c0 3.313 5.223 4.4264 6.6351 4.4264v3.6841h-21.453v-3.7022c2.0186 0 6.6441-1.0229 6.6441-4.4173v-21.535c-2.797.0362-6.11.24441-7.6489 1.1949-2.8423 1.6837-3.4759 3.313-4.001 6.0105-1.3668-.0095-1.8194.06337-3.3764 0v-10.925h38.389zM247.34 87.756l10.111-.05431c5.4674-.0362 7.2053-4.4445 7.7394-7.142 1.3759.0095 1.8285-.07239 3.3764 0v10.862h-36.054v-3.7022c2.0276 0 6.6351-1.041 6.6351-4.4173v-17.498c0-3.6298-5.7842-4.0643-6.626-4.0643v-3.6932h36.045v10.88c-1.5479.05434-2.0005-.01814-3.3764 0-.54311-2.7156-2.3897-7.1601-7.7394-7.1601l-10.111-.0095v10.699h4.7523c3.5393 0 3.9738-4.6346 3.9738-5.5941h3.1048v14.592h-3.1139c0-1.3759-.25345-5.6031-3.9828-5.6031h-4.7342v11.903zM329.71 58.066v3.6841c-.84183 0-6.626.44355-6.626 4.0734v17.497c0 3.3583 4.6255 4.4083 6.6441 4.4083v3.7022h-21.471v-3.7022c2.0276 0 6.6441-1.05 6.6441-4.4083v-16.881l.20819-1.4121-12.808 26.423h-4.001l-12.51-28.45.18104 1.4936v18.828c0 3.3583 4.6255 4.4083 6.6441 4.4083v3.7022h-17.153v-3.7022c2.0186 0 6.6351-1.05 6.6351-4.4083V65.823c0-3.6298-5.8023-4.0734-6.617-4.0734v-3.6841h17.262l9.4593 21.417.4888 1.6112.52501-1.6112 10.6-21.471 15.895.05434zM201.99 133.11l-5.3044-10.437-.25346-.9052-.25345.91424-5.4674 10.428h11.279zm-10.111 12.383h-15.37v-3.6479c2.3535 0 4.707.28061 5.757-1.7108l14.809-28.179h3.3764l14.592 28.124c1.5298 1.7199 2.7337 1.7199 5.7118 1.7199v3.6932h-20.62v-3.6932c6.0286-.0272 4.9695-2.5345 4.9695-2.5345l-1.6927-3.3221h-14.157l-1.738 3.3221s-1.9371 2.5617 4.3721 2.5617v3.666h-.01zM95.45 128.76c0-11.125 9.3959-17.543 20.982-17.543 11.605 0 21.01 6.4178 21.01 17.543 0 12.039-9.405 17.543-21.01 17.543-11.586 0-20.982-5.5579-20.982-17.543zm9.0067 0c0-9.0338 5.3678-13.723 11.976-13.723 6.626 0 11.994 4.7342 11.994 13.723 0 9.4683-5.3678 13.714-11.994 13.714-6.6079 0-11.976-4.2454-11.976-13.714zM56.346 120.25c0-3.304-5.2139-4.4083-6.6441-4.4083v-3.6932l29.708-.009c2.9238.23534 5.585.98666 7.5493 3.5936 1.7742 2.3354 2.2177 5.6937.88709 8.3006-1.2401 2.1453-3.6389 2.9872-5.232 3.9286 2.4802.92329 5.232 2.4169 6.6532 4.9333.97761 1.9643.80562 4.6708.09052 6.7075-2.3988 5.5941-8.2463 6.0286-13.397 5.9381h-26.25v-3.7113c2.0276 0 6.6441-1.0229 6.6441-4.4083v-17.172h-.009zm16.963 10.256c-.009-.0362-8.8075.01-8.7985 0v11.333s9.0067-.009 9.0157 0c3.3673 0 7.2415-2.4802 7.2325-6.0105 0-3.3583-3.8652-5.3225-7.4497-5.3225zm0-14.655c-.009-.0362-8.8075.0272-8.7985 0v11.333s9.0157-.01 9.0248 0c3.3402 0 7.2325-2.4802 7.2325-6.0014 0-3.3221-3.9195-5.3316-7.4588-5.3316zM146.5 120.25c0-3.304-5.223-4.4083-6.6351-4.4083v-3.6932h21.444v3.7022c-2.0186 0-6.617 1.0229-6.617 4.4173v21.544c2.7789-.0543 9.405-.25345 10.944-1.2039 2.8423-1.6837 3.4669-5.5217 3.9919-8.2282h3.3673v13.152l-22.503.009h-10.627v-3.7113c2.0186 0 6.6351-1.0229 6.6351-4.4083v-17.172zM246.89 133.02v-3.6841h19.444v3.6841c-1.4212 0-5.3678 1.1134-5.3678 4.4083l-.56122 8.1015h-2.9057l-1.3668-3.7022c-2.9781 3.0143-7.3683 4.4535-13.324 4.4535-11.605 0-20.991-5.5488-20.991-17.543 0-9.5588 6.9247-15.633 16.212-17.162 1.5298-.32587 3.1229-.44355 4.7251-.38924 4.001.17199 8.02 1.3216 11.333 2.7246 1.0681.0905 1.7199-.81468 2.1815-1.738.9595 0 1.7018.0182 3.1139 0v11.025c-1.4121-.0272-2.1091-.0272-3.1591-.009-.75131-4.9876-7.4407-8.1648-13.415-8.1648-6.617 0-11.994 4.6889-11.994 13.723 0 9.4683 5.3768 13.714 11.994 13.714 4.182 0 10.039-2.0367 10.039-5.3406.01-3.7837-4.5441-4.1005-5.9562-4.1005zM283.91 141.89l10.129-.0634c5.4674-.0362 7.2144-4.4445 7.7304-7.151 1.3668.01 1.8104-.0634 3.3673 0v10.88l-36.054-.01v-3.6932c2.0276 0 6.6441-1.05 6.6441-4.4264v-17.479c0-3.6389-5.7932-4.0915-6.626-4.0915v-3.6841h36.036v10.88c-1.5569.0543-2.0005-.01-3.3673 0-.54312-2.7065-2.3807-7.151-7.7485-7.151l-10.111-.01v10.69l4.7432.01c3.5665 0 3.9828-4.6346 3.9828-5.6032h3.1229v14.592h-3.141c0-1.3668-.23536-5.5941-3.9648-5.5941h-4.7432v11.903zM350.35 112.11v10.88c-1.5569.0634-2.0005-.01-3.3673 0-.54311-2.7065-1.1586-4.2725-4.001-5.9562-1.575-.96857-5.0238-1.1677-7.8299-1.1949v22.901c0 2.1272 5.223 3.0596 6.6441 3.0596v3.6932h-21.453v-3.7022c2.0186 0 6.6351-.87804 6.6351-3.0596v-22.892c-2.797.0362-6.11.23536-7.6579 1.1949-2.8333 1.6927-3.4669 3.3039-3.9828 6.0105-1.3668-.01-1.8104.0634-3.3854 0v-10.935h38.398z"
                      />
                    </svg>
                  </gds-card>
                  <gds-flex
                    flex-direction="column"
                    gap="2xs"
                    align-items="center"
                  >
                    <gds-flex
                      flex-direction="column"
                      gap="3xs"
                      align-items="center"
                    >
                      <gds-text
                        font-size="detail-s"
                        font-weight="book"
                        color="secondary"
                      >
                        Livsmedel
                      </gds-text>
                      <gds-text
                        font-size="detail-m"
                        font-weight="book"
                        color="primary"
                      >
                        Systembolaget
                      </gds-text>
                    </gds-flex>
                    <gds-text
                      font-size="detail-m"
                      font-weight="book"
                      color="primary"
                    >
                      –345,50
                    </gds-text>
                  </gds-flex>
                </tp-accounts-card>
                <tp-accounts-card
                  @click=${this.handleCardClick}
                  name="negative"
                >
                  <gds-card
                    width="43px"
                    height="43px"
                    background="#f1dfdc"
                    border="none"
                    level="3"
                    padding="xs"
                    box-sizing="border-box"
                  >
                    <gds-flex
                      align-items="center"
                      justify-content="center"
                      height="100%"
                    >
                      <svg
                        fill="none"
                        width="28"
                        height="18"
                        viewBox="0 0 48 25"
                      >
                        <path
                          fill="#E3000B"
                          fill-rule="evenodd"
                          d="M34.4756.986356 47.8582 24.4723h-6.7799l-1.4712-2.5524h-6.7445l2.3575-4.1389h2.0295l-2.7828-4.9099-2.9158 5.0961c-.4582.7976-.9218 1.4977-1.3737 2.1004-2.2246 2.9335-5.8317 4.8124-9.8376 4.8124-6.7178 0-12.23039-5.3176-12.23039-11.8759 0-6.55836 5.46819-11.87594 12.23039-11.87594 2.2955 0 4.3604.6062 6.1596 1.62186l-2.8804 5.06942c-.9944-.58372-2.1261-.89265-3.2792-.89512-3.4387 0-6.2215 2.71196-6.2215 6.05318 0 3.3501 2.7828 6.0532 6.2215 6.0532 1.87 0 3.4033-.7649 4.52-1.8789.4918-.4777 1.0458-1.2762 1.2142-1.5598L34.4579.880005l.0177.106351ZM0 24.4723V1.60674h5.96455V24.4723H0Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </gds-flex>
                  </gds-card>
                  <gds-flex
                    flex-direction="column"
                    gap="2xs"
                    align-items="center"
                  >
                    <gds-flex
                      flex-direction="column"
                      gap="3xs"
                      align-items="center"
                    >
                      <gds-text
                        font-size="detail-s"
                        font-weight="book"
                        color="secondary"
                      >
                        Livsmedel
                      </gds-text>
                      <gds-text
                        font-size="detail-m"
                        font-weight="book"
                        color="primary"
                      >
                        ICA Sabbatsberg
                      </gds-text>
                    </gds-flex>
                    <gds-text
                      font-size="detail-m"
                      font-weight="book"
                      color="primary"
                    >
                      –942,85
                    </gds-text>
                  </gds-flex>
                </tp-accounts-card>
                <tp-accounts-card @click=${this.handleCardClick} name="primary">
                  <gds-card
                    width="43px"
                    height="43px"
                    background="#ffffff"
                    border="none"
                    level="3"
                    padding="xs"
                    box-sizing="border-box"
                  >
                    <gds-flex
                      align-items="center"
                      justify-content="center"
                      height="100%"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 76 25"
                      >
                        <path
                          fill="#000"
                          d="M8.80355.934998.449219 24.5505H4.54084l1.38289-4.2689h8.43007l1.3833 4.2689h4.1184L11.5965.934998H8.80355ZM13.1879 16.672H7.0892l3.0482-9.42492 3.0505 9.42492ZM30.3087 21.6172c-2.3773 0-4.3028-2.024-4.3028-4.5198 0-2.4957 1.9255-4.5197 4.3028-4.5197 1.7081 0 3.1868 1.0487 3.8796 2.5644l3.087-1.7429c-1.3326-2.4597-3.9527-4.1326-6.9666-4.1326-4.3638 0-7.9003 3.5053-7.9021 7.8291v.004c.0018 4.3228 3.5383 7.8304 7.9021 7.8304 3.0139 0 5.634-1.6734 6.9666-4.1331l-3.087-1.742c-.6924 1.5144-2.1715 2.5622-3.8796 2.5622ZM75.0917 17.1028c0-4.3255-3.5383-7.83128-7.9026-7.83128-4.3638 0-7.9008 3.50578-7.9008 7.83128 0 4.3264 3.537 7.8322 7.9008 7.8322 2.6219 0 4.9444-1.2662 6.3816-3.2144l-2.8397-2.0503c-.7766 1.1789-2.073 1.9518-3.5419 1.9518-1.9536 0-3.6042-1.3686-4.1281-3.1805l11.926-.0018c.0677-.4754.1047-.9026.1047-1.337Zm-11.9261-1.6965c.6158-1.7046 2.1844-2.9164 4.0231-2.9164 1.8391 0 3.4095 1.2118 4.0252 2.9164h-8.0483ZM54.582 12.7189c-.904-2.183-2.7916-3.43403-5.1791-3.43403-2.8513 0-4.3701 2.29883-4.3701 2.29883V9.71123h-3.533V24.5652h3.6738v-8.1984c0-.6482.0334-1.4635.2967-2.0204.5337-1.1183 1.5718-1.7585 2.8513-1.7585 1.2532 0 2.2302.622 2.7511 1.754.2664.5797.3038 1.2506.3038 1.8926l.0022 8.3325h3.6689l-.0009-8.6747c.0004-1.0656-.0553-2.1875-.4647-3.1734Z"
                        />
                      </svg>
                    </gds-flex>
                  </gds-card>
                  <gds-flex
                    flex-direction="column"
                    gap="2xs"
                    align-items="center"
                  >
                    <gds-flex
                      flex-direction="column"
                      gap="3xs"
                      align-items="center"
                    >
                      <gds-text
                        font-size="detail-s"
                        font-weight="book"
                        color="secondary"
                      >
                        Shopping
                      </gds-text>
                      <gds-text
                        font-size="detail-m"
                        font-weight="book"
                        color="primary"
                      >
                        Acne Studios
                      </gds-text>
                    </gds-flex>
                    <gds-text
                      font-size="detail-m"
                      font-weight="book"
                      color="primary"
                    >
                      –345,50
                    </gds-text>
                  </gds-flex>
                </tp-accounts-card>
                <gds-container width="100px"></gds-container>
              </gds-flex>
            </div>
            <gds-flex align-items="center" justify-content="center" gap="2xs">
              <tp-step-bullet step="s1"></tp-step-bullet>
              <tp-step-bullet step="s2" active></tp-step-bullet>
              <tp-step-bullet step="s3"></tp-step-bullet>
              <tp-step-bullet step="s4"></tp-step-bullet>
            </gds-flex>
          </gds-flex>
        </tp-card>
      </gds-container>
      <gds-container display="none; m{block}">
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

            <gds-flex flex-direction="column" gap="xs" flex="1">
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
            <gds-flex flex-direction="column" gap="xs" flex="1">
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
      </gds-container>
      ${this.isModalOpen
        ? html`
            <gds-flex
              position="fixed"
              inset="0"
              background="#00000040"
              z-index="20"
              align-items="flex-end"
              flex-direction="row; m{column}"
            >
              <gds-container
                width="100%; m{25vw}"
                background="#fef5f3"
                level="2"
                height="90vh; m{100%}"
                transition="all 0.2s"
                class="actionsheet"
              >
                <gds-flex padding="l" width="100%" justify-content="flex-end">
                  <gds-button @click=${this.closeModal} rank="tertiary">
                    <gds-icon-cross-small></gds-icon-cross-small>
                  </gds-button>
                </gds-flex>
                <gds-flex
                  flex-direction="column"
                  justify-content="center"
                  align-items="center"
                  padding="l"
                  gap="2xl"
                >
                  <gds-card variant="negative" max-width="max-content"
                    >ICA</gds-card
                  >
                  <gds-card variant="secondary">THIS</gds-card>
                </gds-flex>
              </gds-container>
            </gds-flex>
          `
        : nothing}
    `
  }
}
