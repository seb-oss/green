import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/card/index.js'
import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/grid/index.js'
import '@sebgroup/green-core/components/text/index.js'

@customElement('tp-rates')
export class TpRates extends LitElement {
  @property({ type: String })
  heading = ''

  @property({ type: String })
  detail = ''

  render() {
    return html`<gds-flex flex-direction="column" gap="l">
      <gds-flex justify-content="center" gap="4xl; s{8xl}" width="100%">
        <tp-rate-card heading="1.85%" detail="3 mån"></tp-rate-card>
        <tp-rate-card heading="1.65%" detail="6 mån"></tp-rate-card> </gds-flex
      ><gds-flex justify-content="center" gap="4xl; s{8xl}" width="100%">
        <tp-rate-card heading="1.55%" detail="1 år"></tp-rate-card>
        <tp-rate-card heading="1.45%" detail="5 år"></tp-rate-card>
      </gds-flex>

      <gds-container margin="0 auto 0 auto" width="auto">
        <gds-button href="#" rank="secondary" size="large">
          <gds-text font-size="detail-m">All the rates</gds-text>
        </gds-button>
      </gds-container>
    </gds-flex>`
  }
}

@customElement('tp-rate-card')
export class TpRateCard extends LitElement {
  @property({ type: String })
  heading = ''

  @property({ type: String })
  detail = ''

  render() {
    return html`<gds-flex
      flex-direction="column"
      justify-content="center"
      align-items="center"
      gap="xs"
    >
      <gds-card padding="xs m xs m" margin="0" width="auto" border-radius="max">
        <gds-text font-size="heading-m">${this.heading}</gds-text>
      </gds-card>
      <gds-text ,argin font-size="detail-s">${this.detail}</gds-text>
    </gds-flex>`
  }
}
