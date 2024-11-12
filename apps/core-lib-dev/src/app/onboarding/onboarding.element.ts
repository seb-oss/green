import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import './onboarding.css'

@customElement('gds-onboarding')
export class CardExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html` <gds-flex justify-content="center"> Onboarding </gds-flex> `
  }
}
