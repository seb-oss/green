import { html, TemplateResult } from 'lit'
import { literal, html as staticHTML, unsafeStatic } from 'lit/static-html.js'

import type { Meta, StoryObj } from '@storybook/web-components'

import sizeTokens from '../../../../tokens/src/tokens/size.json'
import { deprecatedIcons, DeprecationInfo } from './icon.deprecated'

import './icons'
import '../grid'
import '../container'
import '../card'
import '../badge'
import '../flex'
import '../divider'
import '../text'
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
    size: 'xl',
  },
}

/**
 * Icons are available in regular versions. You can use the `solid` attribute to display the solid version of the icon.
 */

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
        // Skip deprecated icons in search
        if (deprecatedIcons[iconNameAttr]?.hide) {
          icon.setAttribute('hidden', '')
          return
        }

        const iconName = iconNameAttr.toLowerCase().replace('gds-icon-', '')
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
    const iconElements = Object.keys(Icons)
      .map((iconName) => {
        const IconComponent = Icons[iconName]
        const tagName = IconComponent._name
          ? `gds-icon-${IconComponent._name}`
          : `gds-icon-${iconName}`

        // Skip deprecated icons
        if (deprecatedIcons[tagName]?.hide) {
          return null
        }

        return staticHTML`<${literal`${unsafeStatic(tagName)}`}></${literal`${unsafeStatic(tagName)}`}>`
      })
      .filter(Boolean)

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
      <gds-icon-robot solid></gds-icon-robot>
      <gds-icon-rocket solid></gds-icon-rocket>
      <gds-icon-school solid></gds-icon-school>
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

const createSizeExample = (
  size: string | number,
  options: {
    unit?: string
    icon?: string
    isToken?: boolean
  } = {},
) => {
  const { unit = '', icon = 'credit-card', isToken = false } = options
  const displaySize = unit ? `${size}${unit}` : size.toString().toUpperCase()
  const sizeAttribute = unit ? `${size}${unit}` : size
  const tag = literal`gds-icon-${unsafeStatic(icon)}`

  return html`
    <gds-flex
      flex-direction="column"
      align-items="center"
      justify-content="flex-start"
      gap="s"
    >
      <gds-card
        width="100px"
        height="100px"
        align-items="center"
        justify-content="center"
      >
        ${staticHTML`<${tag} size="${sizeAttribute}"></${tag}>`}
      </gds-card>
      <gds-flex
        flex-direction="row"
        align-items="center"
        justify-content="center"
        gap="xs"
      >
        <gds-text tag="small">${displaySize}</gds-text>
        ${isToken
          ? html`
              <gds-text tag="small" color="secondary/0.4">
                ${sizeTokens.ref.size[size.toString().toUpperCase()].value}px
              </gds-text>
            `
          : ''}
      </gds-flex>
    </gds-flex>
  `
}

const createSection = (title: string, examples: TemplateResult[]) => html`
  <gds-flex flex-direction="column" gap="m">
    <gds-text>${title}</gds-text>
    <gds-divider color="primary"></gds-divider>
    <gds-flex align-items="flex-start" flex-direction="row" gap="s">
      ${examples}
    </gds-flex>
  </gds-flex>
`

/**
 * The default icon size is equal to 1lh (1 line height).
 * You can change the icon size by setting the `size` attribute.
 * The size property accepts all the size tokens and also custom value like px or lh.
 *
 * ```html
 * <gds-icon-robot size="l"></gds-icon-robot>
 * <gds-icon-robot size="2xl"></gds-icon-robot>
 * <gds-icon-robot size="48px"></gds-icon-robot>
 * <gds-icon-robot size="2lh"></gds-icon-robot>
 * ```
 *
 * ### Width and Height properties
 * <gds-badge variant="warning" size="small">Deprecated</gds-badge>
 *
 * Size is a shorthand for setting both width and height at once and will be the only way to set the size in the future.
 *
 * Using the `width` and `height` attributes will be deprecated in the next major release.
 *
 *Using the `size` property instead.
 
 * ```html
 * <gds-icon-robot size="l"></gds-icon-robot>
 * ```
 */
export const IconsSize: Story = {
  ...DefaultParams,
  name: 'Sizing',
  render: (args) => {
    // Token sizes
    const TOKEN_SIZES = ['xs', 's', 'm', 'l', 'xl', '2xl', '3xl', '4xl']
    const tokenExamples = TOKEN_SIZES.map((size) =>
      createSizeExample(size, { isToken: true }),
    )

    // Pixel sizes
    const PIXEL_SIZES = [16, 24, 32, 48]
    const pixelExamples = PIXEL_SIZES.map((size) =>
      createSizeExample(size, { unit: 'px', icon: 'rocket' }),
    )

    // Line-height sizes
    const LH_SIZES = [1, 1.5, 2, 2.5]
    const lhExamples = LH_SIZES.map((size) =>
      createSizeExample(size, { unit: 'lh', icon: 'ai' }),
    )

    return html`
      <gds-flex gap="4xl" flex-direction="column">
        ${createSection('Tokens', tokenExamples)}
        ${createSection('Using: Custom values(px)', pixelExamples)}
        ${createSection('Using: Custom values(lh)', lhExamples)}
      </gds-flex>
    `
  },
}

/**
 * You can change the icon stroke by setting the `stroke` attribute.
 */

export const IconsStroke: Story = {
  ...DefaultParams,
  name: 'Stroke',
  render: (args) => html`
    <gds-icon-robot stroke="2" size="xl"></gds-icon-robot>
    <gds-icon-rocket stroke="2" size="xl"></gds-icon-rocket>
    <gds-icon-school stroke="2" size="xl"></gds-icon-school>
  `,
}

/**
 * Icons default to `role="presentation"` when no label is provided, making them invisible to screen * readers.
 *
 * #### Best Practices
 * - Pair icons with text labels for clear meaning
 * - Keep decorative icons hidden from screen readers
 * - Add `aria-label` to the parent interactive element, not the icon
 * - Icons use `role="presentation"` by default
 * - Keep icons and their labels semantically connected
 *
 * #### Using Labels
 * When labels are necessary:
 * - Use the `label` attribute to provide an accessible name
 * - The label value automatically sets the SVG's `aria-label`
 *
 * ```html
 * <!-- Example with label -->
 * <gds-icon-info label="Additional information"></gds-icon-info>
 *
 * <!-- Example with parent label -->
 * <gds-button aria-label="Close dialog">
 *   <gds-icon-close></gds-icon-close>
 * </gds-button>
 * ```
 *
 * #### Key Principle
 * - Use labels only when the icon needs to communicate meaning independently.
 * - If the icon is part of a labeled element or purely decorative, rely on ⁠the default role="presentation" instead.
 */

export const IconsLabel: Story = {
  ...DefaultParams,
  name: 'Accessible Label',
  render: (args) => html`<gds-icon-rocket label="Rocket" />`,
}

/**
 * The following icons are deprecated and should not be used in new code.
 *
 * They are kept for backwards compatibility but will be removed in the next major release.
 */
export const Deprecated: Story = {
  ...DefaultParams,
  name: 'Deprecated Icons',
  render: () => {
    const deprecatedElements = Object.entries(deprecatedIcons).map(
      ([tagName, info]: [string, DeprecationInfo]) => {
        const tag = literal`gds-icon-${unsafeStatic(info.name)}`

        return html`
          <gds-flex gap="s" align-items="center">
            <gds-card
              variant="primary"
              width="100px"
              height="80px"
              align-items="center"
              justify-content="center"
            >
              ${staticHTML`<${tag}></${tag}>`}
            </gds-card>
            <gds-flex flex-direction="column" align-items="flex-start" gap="xs">
              <gds-text font-size="s" class="deprecated-label">
                ${tagName}
              </gds-text>
              ${info.useInstead
                ? html`
                    <gds-text size="xs" color="disabled" opacity="0.8">
                      Use <code>${info.useInstead}</code> instead
                    </gds-text>
                  `
                : ''}
              <gds-badge size="small" variant="warning">DEPRECATED</gds-badge>
            </gds-flex>
          </gds-flex>
        `
      },
    )

    return html`
      <gds-flex flex-direction="column" gap="s">${deprecatedElements}</gds-flex>
    `
  },
}
