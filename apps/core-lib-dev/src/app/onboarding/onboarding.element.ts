import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping.js'

import './onboarding.css'
import '../../components/card-carousel'

@customElement('gds-onboarding')
export class CardExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html`<tp-card-carousel></tp-card-carousel>`
  }
}
