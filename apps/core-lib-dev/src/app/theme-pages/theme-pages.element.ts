import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import './theme-pages.css'

@customElement('gds-theme-pages')
export class CardExample extends LitElement {
  protected createRenderRoot() {
    return this
  }

  connectedCallback() {
    super.connectedCallback()
  }

  render() {
    return html` <gds-flex justify-content="center"> Theme pages </gds-flex> `
  }
}
