import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { setCustomElementsManifest } from '@storybook/web-components'

import customElements from '../custom-elements.json'
import { registerTransitionalStyles } from '../src/transitional-styles.ts'
import DocTemplate from './DocTemplate.mdx'

import './fonts.scss'
import '../src/components/theme/index.js'
import '../src/components/button/index.js'
import '../src/components/grid/index.js'

setCustomElementsManifest(customElements)
registerTransitionalStyles()

export const globalTypes = {
  style: {
    name: 'Change design version',
    defaultValue: '2023',
    toolbar: {
      icon: 'lightning',
      items: ['2016', '2023'],
      showName: true,
      dynamicTitle: true,
    },
  },
}

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
          'Green Design System',
          'Get started',
          "What's what?",
          'Docs',
          'Components',
          'Style',
          ['Components', 'Layout', 'Media', 'Content', 'Style'],
          'Concepts',
          ['Architecture'],
          'Contributing',
          ['Introduction'],
        ],
      },
    },
  },
  decorators: [
    (storyFn: any, context: any) => {
      setTimeout(() => {
        // Find the first <tr> with a title starting with "Hide <category>"
        const tr = Array.from(document.querySelectorAll('tr')).find((tr) =>
          tr.getAttribute('title')?.startsWith('Hide Declarative layout'),
        )

        // Find the first button inside that <tr>
        const button = tr?.querySelector('button[tabindex="0"]')

        if (button) {
          ;(button as HTMLElement).click()
        }
      }, 10)
      return html`<gds-theme .designVersion=${context.globals.style}
        >${storyFn()}</gds-theme
      >`
    },
  ],
}
