import { registerTransitionalStyles } from '../../../dist/libs/core/src/transitional-styles.js'
import { setCustomElementsManifest, Preview } from '@storybook/web-components'
import customElements from '../custom-elements.json'

setCustomElementsManifest(customElements)

const preview: Preview = {
  // ...rest of preview
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
}

export default preview

;(globalThis as any).GDS_DISABLE_VERSIONED_ELEMENTS = true

class TransitionalStylesToggle extends HTMLElement {
  connectedCallback() {
    const grid = document.createElement('gds-grid')
    grid.setAttribute('gap', 's')
    grid.style.marginBottom = '1rem'
    this.appendChild(grid)

    const show2016Button = document.createElement('gds-button')
    show2016Button.setAttribute('rank', 'secondary')
    show2016Button.textContent = 'Show 2016 styles'
    show2016Button.onclick = () => this.#showTransitionalStyles()
    grid.appendChild(show2016Button)

    const show2023Button = document.createElement('gds-button')
    show2023Button.setAttribute('rank', 'secondary')
    show2023Button.textContent = 'Show 2023 styles'
    show2023Button.onclick = () => location.reload()
    grid.appendChild(show2023Button)
  }

  #showTransitionalStyles() {
    registerTransitionalStyles()
    document.querySelectorAll('[gds-element]').forEach((el: any) => {
      el.connectedCallback()
    })
  }
}

window.customElements.define(
  'transitional-styles-toggle',
  TransitionalStylesToggle,
)
