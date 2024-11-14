import { LitElement } from 'lit'
import { customElement, state } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/text/index.js'

@customElement('tp-savings-calc')
export class SavingsCalc extends LitElement {
  connectedCallback() {
    super.connectedCallback()
  }

  @state()
  amountPerMonth = 500

  @state()
  years = 5

  @state()
  total = '26 325'

  render() {
    return html`<gds-card variant="secondary" border-color="primary">
      <gds-flex gap="l" flex-direction="column">
        <div>
          <gds-input
            label="How much can you save per month?"
            value=${this.amountPerMonth}
            @input=${(e: any) => (this.amountPerMonth = e.currentTarget.value)}
          ></gds-input>
          ${SLIDER_SVG}
        </div>
        <div>
          <gds-input
            label="How many years do you want to save?"
            value=${this.years}
            @input=${(e: any) => (this.years = e.currentTarget.value)}
          ></gds-input>
          ${SLIDER_SVG}
        </div>
      </gds-flex>

      <gds-text
        font-size="heading-m"
        tag="div"
        text-align="center"
        margin="l 0 0 0"
      >
        ${this.amountPerMonth} kr/mån i ${this.years} år
      </gds-text>
      <gds-text
        font-size="display-l"
        tag="div"
        color="positive"
        text-align="center"
      >
        ${this.total} kr
      </gds-text>
    </gds-card>`
  }
}

const SLIDER_SVG = html` <svg
  width="368"
  height="32"
  viewBox="0 0 368 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_1372_6734)">
    <rect y="14" width="4" height="4" rx="2" fill="#35723D" />
  </g>
  <path
    d="M8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16Z"
    fill="#35723D"
  />
  <g clip-path="url(#clip1_1372_6734)">
    <rect x="28" y="14" width="340" height="4" rx="2" fill="#E2E2E2" />
  </g>
  <defs>
    <clipPath id="clip0_1372_6734">
      <rect y="14" width="4" height="4" rx="2" fill="white" />
    </clipPath>
    <clipPath id="clip1_1372_6734">
      <rect x="28" y="14" width="340" height="4" rx="2" fill="white" />
    </clipPath>
  </defs>
</svg>`
