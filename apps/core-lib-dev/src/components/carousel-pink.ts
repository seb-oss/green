import { LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

import { html } from '@sebgroup/green-core/scoping'

@customElement('tp-carousel-pink')
export class TPCarouselPink extends LitElement {
  render() {
    return html` <div>Pink carousel</div> `
  }
}
