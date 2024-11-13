import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

import '@sebgroup/green-core/components/button/index.js'

@customElement('tp-carousel-pink')
export class TPCarouselPink extends LitElement {
  render() {
    return html`
    <gds-conainer>
    <gds-card background="#f3efeb">
    Kom igång här!

    <gds-card background="#f7f5f3">
    <p>Få en översikt av dina konton, transaktioner, debit och kreditkort. </p>
    <gds-button size="small">Skaffa Enkla vardagen</gds-button>
  </gds-card>
    </gds-card>
    </gds-container>
    `
  }
}
