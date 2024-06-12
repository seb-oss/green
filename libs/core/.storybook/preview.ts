import { setCustomElementsManifest } from '@storybook/web-components'
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import DocTemplate from './DocTemplate.mdx'
import customElements from '../custom-elements.json'

import { registerTransitionalStyles } from '../src/transitional-styles.ts'

import './fonts.scss'

import '../src/components/theme/index.js'
import '../src/components/button/index.js'
import '../src/components/grid/index.js'

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

@customElement('transitional-styles-toggle')
class TransitionalStylesToggle extends LitElement {
  protected createRenderRoot() {
    return this
  }

  #showTransitionalStyles() {
    registerTransitionalStyles()
    document.querySelectorAll('[gds-element]').forEach((el: any) => {
      el.connectedCallback()
    })
  }

  render() {
    return html`<gds-theme>
      <gds-grid gap="s" style="margin-bottom: 1rem">
        <gds-button
          rank="secondary"
          @click=${() => this.#showTransitionalStyles()}
        >
          Show 2016 styles
        </gds-button>
        <gds-button rank="secondary" @click=${() => location.reload()}>
          Show 2023 styles
        </gds-button>
      </gds-grid>
    </gds-theme>`
  }
}
