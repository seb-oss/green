import { setCustomElementsManifest } from '@storybook/web-components'
import DocTemplate from './DocTemplate.mdx'
import customElements from '../custom-elements.json'
import { registerTransitionalStyles } from '../../../dist/libs/core/src/transitional-styles.js'

import './fonts.scss'

import '../src/components/button/index.js'
import '../src/components/grid/index.js'
import { html } from 'lit'

setCustomElementsManifest(customElements)

export default {
  parameters: {
    docs: {
      page: DocTemplate,
      transformSource: (source: any) => {
        const regexRes = source.match(/<gds-theme>([\s\S]*?)<\/gds-theme>/)
        return regexRes ? regexRes[1] : source
      },
    },
    options: {
      storySort: {
        order: [
          'Welcome',
          'Components',
          'Concepts',
          ['Architecture'],
          'Contributing',
          ['Introduction'],
        ],
      },
    },
  },
  decorators: [(storyFn: any) => html`<gds-theme>${storyFn()}</gds-theme>`],
}

// class TransitionalStylesToggle extends HTMLElement {
//   connectedCallback() {
//     const grid = document.createElement('gds-grid')
//     grid.setAttribute('gap', 's')
//     grid.style.marginBottom = '1rem'
//     this.appendChild(grid)

//     const show2016Button = document.createElement('gds-button')
//     show2016Button.setAttribute('rank', 'secondary')
//     show2016Button.textContent = 'Show 2016 styles'
//     show2016Button.onclick = () => this.#showTransitionalStyles()
//     grid.appendChild(show2016Button)

//     const show2023Button = document.createElement('gds-button')
//     show2023Button.setAttribute('rank', 'secondary')
//     show2023Button.textContent = 'Show 2023 styles'
//     show2023Button.onclick = () => location.reload()
//     grid.appendChild(show2023Button)
//   }

//   #showTransitionalStyles() {
//     registerTransitionalStyles()
//     document.querySelectorAll('[gds-element]').forEach((el: any) => {
//       el.connectedCallback()
//     })
//   }
// }

// window.customElements.define(
//   'transitional-styles-toggle',
//   TransitionalStylesToggle,
// )
