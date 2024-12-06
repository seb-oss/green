/* eslint-disable @nx/enforce-module-boundaries */
import { LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import '@sebgroup/green-core/components/flex/index.js'
import '@sebgroup/green-core/components/text/index.js'
import './slider.js'

@customElement('tp-slider-input')
export class TpButtonInput extends LitElement {
  @property({ type: String })
  heading = ''

  @property({ type: Number })
  step = 1

  @property({ type: Number })
  min = 0

  @property({ type: Number })
  max = 100

  @property({ type: Number })
  value: number

  @property({ type: Object })
  formatter: Intl.NumberFormat | undefined

  constructor() {
    super()
    this.value = Math.max(this.min, this.max / 2)
  }

  render() {
    return html`<gds-flex flex-direction="column" gap="xs"
      ><gds-flex flex-direction="column" gap="2xs">
        <gds-text font-size="heading-xs">${this.heading}</gds-text>
        <gds-text font-size="heading-s"
          >${this.formatter
            ? this.formatter.format(this.value)
            : this.value}</gds-text
        >
      </gds-flex>
      <tp-slider
        .min=${this.min}
        .max=${this.max}
        .value=${this.value}
        .step=${this.step}
        @change=${(e: CustomEvent) => {
          this.value = e.detail.value
          this.dispatchEvent(
            new CustomEvent('change', { detail: { value: this.value } }),
          )
        }}
      ></tp-slider
    ></gds-flex>`
  }
}
