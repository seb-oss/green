import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { setCustomElementsManifest } from '@storybook/web-components-vite'

import customElements from '../custom-elements.json'
import { registerTransitionalStyles } from '../src/transitional-styles.ts'
import DocTemplate from './DocTemplate.mdx'

import './fonts.scss'
import '../src/components/theme/index.js'
import '../src/components/button/index.js'
import '../src/components/grid/index.js'

import { gdsInitLocalization } from '../src/localization.ts'

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
  language: {
    name: 'Language',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: ['en', 'sv', 'da', 'de', 'fi', 'fr', 'it', 'nl', 'no'],
      showName: true,
      dynamicTitle: true,
    },
  },
  colorScheme: {
    name: 'Change color scheme',
    defaultValue: 'light',
    toolbar: {
      icon: 'mirror',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
        { value: 'auto', title: 'Auto' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
}

const { setLocale } = gdsInitLocalization()

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
          'Get started',
          "What's what?",
          'Docs',
          'Components',
          'Patterns',
          'Concepts',
          'Contributing',
        ],
        method: 'alphabetical',
        locales: 'en-US',
      },
    },
  },
  decorators: [
    (storyFn: any, context: any) => {
      // Apply the selected language to the components
      setLocale(context.globals.language)

      // Hide the Declarative layout category in the argsTables
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

      const storyDarkmodeStyle = `
        .sb-show-main,
        .docs-story {
          background-color: #0a0b0b;
        }`

      const storyLightmodeStyle = `
        .sb-show-main,
        .docs-story {
          background-color: #fff;
        }`

      const storyAutomodeStyle = `
        ${storyLightmodeStyle}
        @media (prefers-color-scheme: dark) {
          ${storyDarkmodeStyle}
        }`

      const renderStoryColorSchemeStyle = () => {
        switch (context.globals.colorScheme) {
          default:
          case 'auto':
            return storyAutomodeStyle
          case 'dark':
            return storyDarkmodeStyle
          case 'light':
            return storyLightmodeStyle
        }
      }

      return html`<style>
          ${renderStoryColorSchemeStyle()}
        </style>
        <gds-theme
          .designVersion=${context.globals.style}
          .colorScheme=${context.globals.colorScheme}
          >${storyFn()}</gds-theme
        >`
    },
  ],
}
