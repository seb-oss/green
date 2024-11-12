import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import './dashboard.css'
import '../../components/savings-outside'
import '../../components/savings-goal'

@customElement('gds-dashboard')
export class CardExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html` <gds-flex padding="l" gap="xs" flex-direction="column">
      <tp-savings-outside></tp-savings-outside>
      <tp-savings-goal></tp-savings-goal>
    </gds-flex>`
  }
}
