import './chlorophyll.scss'

import './simple-values.element'
import './complex-values.element'
import './custom-localization.element'
import './segmented-control.element'

import { htmlTemplateTagFactory } from '@sebgroup/green-core'

import { registerTransitionalStyles } from '@sebgroup/green-core/transitional-styles'
//import { setLocale } from '@sebgroup/green-core/localization'

const html = htmlTemplateTagFactory((strs, ...values) =>
  strs.map((s, i) => s ?? '' + values[i]).join(''),
)

export class AppElement extends HTMLElement {
  public static observedAttributes = []

  connectedCallback() {
    //registerTransitionalStyles()
    //setLocale('sv')

    this.innerHTML = html`
      <div class="wrapper">
        <h1 class="mb-5">Green Core test app</h1>
        <simple-values></simple-values>
        <!-- <complex-values></complex-values> -->
        <!-- <custom-localization></custom-localization> -->
        <segmented-control></segmented-control>
      </div>
    `
  }
}
customElements.define('sebgroup-root', AppElement)
