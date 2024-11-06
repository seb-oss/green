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
      ;(window as any).gdsStyle = context.globals.style
      return html`<gds-theme .designVersion=${context.globals.style}
        >${storyFn()}</gds-theme
      >`
    },
  ],
}
