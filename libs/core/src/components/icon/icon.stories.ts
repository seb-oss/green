import { literal, html as staticHTML, unsafeStatic } from 'lit/static-html.js'

import type { Meta, StoryObj } from '@storybook/web-components'

import './icons/index.ts'
import '../grid/index.ts'
import '../container/index.ts'
import '../flex'

import { html } from 'lit'

import './icon.stories.css'

import * as Icons from './icons'

/**
 * The `gds-icon-*` component is a flexible set of icon components. These allows you to use a variety of pre-defined icons in your application.
 *
 * ### Usage
 *
 * Just like other components, the icons can be imported indivually, so that you don't end up with unused icons in your bundle:
 *
 * ```js
 * import '@sebgroup/green-core/components/icon/icons/bank.js'
 * ```
 */
const meta: Meta = {
  title: 'Components/Icon',
  component: 'gds-icon-bank',
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj

const DefaultParams: Story = {
  parameters: {
    docs: {
      source: { format: true, type: 'dynamic' },
    },
    controls: { expanded: true },
  },
}

export const Basic: Story = {
  ...DefaultParams,
  args: {
    solid: false,
    width: 24,
    height: 24,
  },
}

/**
 * Icons are available in regular versions. You can use the `solid` attribute to display the solid version of the icon.
 */

window.addEventListener('click', (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (target.tagName.startsWith('GDS-ICON')) {
    const outerHTML = target.outerHTML
    const cleanedHTML = outerHTML.replace(/ gds-element="[^"]*"/, '')
    navigator.clipboard.writeText(cleanedHTML)
    target.classList.add('copied')
    setTimeout(() => target.classList.remove('copied'), 642)
  }
})

window.addEventListener('DOMContentLoaded', () => {
  const searchBox = document.getElementById('icon-search') as HTMLInputElement
  const icons = Array.from(
    document.querySelectorAll('#solids [gds-element^="gds-icon-"]'),
  )

  searchBox.addEventListener('keyup', () => {
    const searchTerm = searchBox.value.toLowerCase()

    icons.forEach((icon) => {
      const iconNameAttr = icon.getAttribute('gds-element')
      if (iconNameAttr) {
        const iconName = iconNameAttr.toLowerCase().replace('gds-icon-', '')

        // Implement fuzzy search
        const isMatch = fuzzySearch(searchTerm, iconName)

        if (isMatch || searchBox.value.trim() === '') {
          icon.removeAttribute('hidden')
        } else {
          icon.setAttribute('hidden', '')
        }
      }
    })
  })

  function fuzzySearch(term: string, text: string): boolean {
    let termIndex = 0
    let textIndex = 0
    while (termIndex < term.length && textIndex < text.length) {
      if (term.charAt(termIndex) === text.charAt(textIndex)) {
        termIndex++
      }
      textIndex++
    }
    return termIndex === term.length
  }
})

/**
 * Click to copy icon HTML code
 */

export const IconsRegular: Story = {
  ...DefaultParams,
  name: 'Regular icons',
  render: (args) => {
    const iconElements = Object.keys(Icons).map((iconName) => {
      const IconComponent = Icons[iconName]
      const tagName = IconComponent._name
        ? literal`gds-icon-${unsafeStatic(IconComponent._name)}`
        : literal`gds-icon-${unsafeStatic(iconName)}`
      return staticHTML`<${tagName}></${tagName}>`
    })

    return html`
      <gds-flex flex-direction="column" gap="xl" id="solids">
        <input type="text" id="icon-search" placeholder="Search Icons" />
        <gds-grid
          columns="s{2} m{4} l{4}"
          gap="s{xl} m{xl} l{xl}"
          class="icon-preview"
        >
          ${iconElements}
        </gds-grid>
      </gds-flex>
    `
  },
}

/**
 * Icons are available in solid versions. You can use the `solid` attribute to display the solid version of the icon.
 *
 * Here is an example of some solid icons:
 */

export const IconsSolid: Story = {
  ...DefaultParams,
  name: 'Solid icons',
  render: (args) => html`
    <gds-grid
      columns="s{2} m{4} l{4}"
      gap="s{xl} m{xl} l{xl}"
      class="icon-preview"
    >
      <gds-icon-airplane-up solid></gds-icon-airplane-up>
    </gds-grid>
  `,
}

/**
 * The icon package has the following brand icons available:
 */

export const Brands: Story = {
  ...DefaultParams,
  name: 'Brands',
  render: (args) => {
    const BRANDS = Object.keys(Icons)
      .map((iconName) => {
        const IconComponent = Icons[iconName]
        if (!IconComponent._name.includes('brand')) {
          return null
        }
        const tagName = literal`gds-icon-${unsafeStatic(IconComponent._name)}`
        return staticHTML`<${tagName}></${tagName}>`
      })
      .filter(Boolean) // Filter out null values

    return html`
      <gds-grid
        columns="s{2} m{4} l{4}"
        gap="s{xl} m{xl} l{xl}"
        class="icon-preview"
      >
        ${BRANDS}
      </gds-grid>
    `
  },
}

/**
 * You can customize the icons by setting the `width` and `height` properties. If not specified it will fall back to `1lh` height and `auto` width.
 */

export const IconsSize: Story = {
  ...DefaultParams,
  name: 'Sizing',
  render: (args) => html`
    <gds-icon-robot width="84" height="84"></gds-icon-robot>
    <gds-icon-rocket width="84" height="84"></gds-icon-rocket>
    <gds-icon-school width="84" height="84"></gds-icon-school>
    <gds-icon-settings-gear width="84" height="84"></gds-icon-settings-gear>
    <gds-icon-settings-slider-hor
      width="84"
      height="84"
    ></gds-icon-settings-slider-hor>
    <gds-icon-settings-slider-three
      width="84"
      height="84"
    ></gds-icon-settings-slider-three>
    <gds-icon-settings-slider-ver
      width="84"
      height="84"
    ></gds-icon-settings-slider-ver>
  `,
}

/**
 * You can change the icon stroke by setting the `stroke` attribute.
 */

export const IconsStroke: Story = {
  ...DefaultParams,
  name: 'Stroke',
  render: (args) => html`
    <gds-icon-robot stroke="2" height="42"></gds-icon-robot>
    <gds-icon-rocket stroke="2" height="42"></gds-icon-rocket>
    <gds-icon-school stroke="2" height="42"></gds-icon-school>
  `,
}

/**
 * Icons have the role of `graphics-symbol`, and will by default have the icon name as label. You can customize the label by setting the `label` attribute.
 */

export const IconsLabel: Story = {
  ...DefaultParams,
  name: 'Accessible Label',
  render: (args) => html`<gds-icon-rocket label="Rocket" />`,
}
