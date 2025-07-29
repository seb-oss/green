import { html, TemplateResult } from 'lit'
import { literal, html as staticHTML, unsafeStatic } from 'lit/static-html.js'

import type { Meta, StoryObj } from '@storybook/web-components'

import spaceRefTokens from '../../../../tokens/src/tokens/2023/ref/space.ref.json'
import { deprecatedIcons, DeprecationInfo } from './icon.deprecated'

import './icons'
import '../grid'
import '../card'
import '../badge'
import '../flex'
import '../divider'
import '../text'
import '../theme'

/**
 * An icon helps communicate meaning quickly, enhances visual hierarchy, and supports navigation or interaction.
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
 *Toggle between outline and solid icon styles using the `solid` attribute.
 */

export const Solid: Story = {
  ...DefaultParams,
  args: {
    solid: true,
    size: 'xl',
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
  const displaySize = unit ? `${size}${unit}` : size.toString()
  const sizeAttribute = unit ? `${size}${unit}` : size
  const tag = literal`gds-icon-${unsafeStatic(icon)}`

  // console.log(densityTokens.sys.space)
  const pixelValue = isToken
    ? spaceRefTokens.ref.space[size.toString()].value
    : null

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
        ${isToken && pixelValue
          ? html`
              <gds-text tag="small" color="secondary/0.4">
                ${pixelValue}px
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
 *
 * ```html
 * <gds-icon-bank stroke="2"></gds-icon-bank>
 * ```
 */

export const Stroke: Story = {
  ...DefaultParams,
  args: {
    solid: false,
    stroke: '2',
    size: 'xl',
  },
}

/**
 *
 * Set icon colors using the `color` attribute. Supports design system tokens and transparency.
 *
 * ```html
 * <!-- Basic color tokens -->
 * <gds-icon-ai color="primary"></gds-icon-ai>
 * <gds-icon-ai color="success"></gds-icon-ai>
 * <gds-icon-ai color="warning"></gds-icon-ai>
 *
 * <!-- With transparency -->
 * <gds-icon-ai color="primary/0.2"></gds-icon-ai>
 * <gds-icon-ai color="negative/0.5"></gds-icon-ai>
 *
 * <!-- Inherited color -->
 * <div style="color: blue">
 *   <gds-icon-ai></gds-icon-ai>  <!-- Will be blue -->
 * </div>
 * ```
 *
 */

export const IconsColor: Story = {
  ...DefaultParams,
  name: 'Color',
  render: (args) => html`
    <gds-flex
      flex-direction="column"
      gap="4xl"
      min-height="80vh"
      margin="auto"
      padding="0"
    >
      <gds-theme color-scheme="light">
        <gds-flex
          gap="l"
          align-items="center"
          justify-content="center"
          border-radius="xs"
          background="primary"
          level="1"
          padding="xl 4xl"
          flex="1"
        >
          <gds-flex
            flex-direction="column"
            align-items="center"
            justify-content="flex-start"
            gap="xs"
          >
            <gds-card
              width="100px"
              height="100px"
              align-items="center"
              justify-content="center"
            >
              <gds-icon-ai size="xl"></gds-icon-ai>
            </gds-card>
            <gds-flex
              flex-direction="column"
              align-items="center"
              justify-content="center"
              gap="0"
            >
              <gds-text tag="small">Default</gds-text>
              <gds-text tag="small" color="secondary/0.4">
                currentColor
              </gds-text>
            </gds-flex>
          </gds-flex>
          <gds-flex
            flex-direction="column"
            align-items="center"
            justify-content="flex-start"
            gap="xs"
          >
            <gds-card
              width="100px"
              height="100px"
              align-items="center"
              justify-content="center"
            >
              <gds-icon-ai color="secondary/0.2" size="xl"></gds-icon-ai>
            </gds-card>
            <gds-flex
              flex-direction="column"
              align-items="center"
              justify-content="center"
              gap="0"
            >
              <gds-text tag="small">Secondary</gds-text>
              <gds-text tag="small" color="secondary/0.4"> A:0.2 </gds-text>
            </gds-flex>
          </gds-flex>
          <gds-flex
            flex-direction="column"
            align-items="center"
            justify-content="flex-start"
            gap="xs"
          >
            <gds-card
              width="100px"
              height="100px"
              align-items="center"
              justify-content="center"
            >
              <gds-icon-ai color="negative" size="xl"></gds-icon-ai>
            </gds-card>
            <gds-flex
              flex-direction="column"
              align-items="center"
              justify-content="center"
              gap="0"
            >
              <gds-text tag="small">Negative</gds-text>
              <gds-text tag="small" color="secondary/0.4"> A:1.0 </gds-text>
            </gds-flex>
          </gds-flex>
          <gds-flex
            flex-direction="column"
            align-items="center"
            justify-content="flex-start"
            gap="xs"
          >
            <gds-card
              width="100px"
              height="100px"
              align-items="center"
              justify-content="center"
              background="notice"
              border="4xs solid notice"
            >
              <gds-icon-ai color="notice/0.4" size="xl"></gds-icon-ai>
            </gds-card>
            <gds-flex
              flex-direction="column"
              align-items="center"
              justify-content="center"
              gap="0"
            >
              <gds-text tag="small">Notice 40%</gds-text>
              <gds-text tag="small" color="secondary/0.4"> A:0.4 </gds-text>
            </gds-flex>
          </gds-flex>
          <gds-flex
            flex-direction="column"
            align-items="center"
            justify-content="flex-start"
            gap="xs"
          >
            <gds-card
              width="100px"
              height="100px"
              align-items="center"
              justify-content="center"
              background="positive"
              border="4xs solid positive"
            >
              <gds-icon-ai color="positive" size="xl"></gds-icon-ai>
            </gds-card>
            <gds-flex
              flex-direction="column"
              align-items="center"
              justify-content="center"
              gap="0"
            >
              <gds-text tag="small">Positive</gds-text>
              <gds-text tag="small" color="secondary/0.4"> A:1.0 </gds-text>
            </gds-flex>
          </gds-flex>
        </gds-flex>
      </gds-theme>
      <gds-theme color-scheme="dark">
        <gds-flex
          gap="l"
          align-items="center"
          justify-content="center"
          border-radius="xs"
          background="primary"
          level="1"
          padding="xl 4xl"
          flex="1"
        >
          <gds-flex
            flex-direction="column"
            align-items="center"
            justify-content="flex-start"
            gap="xs"
          >
            <gds-card
              width="100px"
              height="100px"
              align-items="center"
              justify-content="center"
            >
              <gds-icon-ai size="xl"></gds-icon-ai>
            </gds-card>
            <gds-flex
              flex-direction="column"
              align-items="center"
              justify-content="center"
              gap="0"
            >
              <gds-text tag="small">Default</gds-text>
              <gds-text tag="small" color="secondary/0.4">
                currentColor
              </gds-text>
            </gds-flex>
          </gds-flex>
          <gds-flex
            flex-direction="column"
            align-items="center"
            justify-content="flex-start"
            gap="xs"
          >
            <gds-card
              width="100px"
              height="100px"
              align-items="center"
              justify-content="center"
            >
              <gds-icon-ai color="secondary/0.2" size="xl"></gds-icon-ai>
            </gds-card>
            <gds-flex
              flex-direction="column"
              align-items="center"
              justify-content="center"
              gap="0"
            >
              <gds-text tag="small">Secondary</gds-text>
              <gds-text tag="small" color="secondary/0.4"> A:0.2 </gds-text>
            </gds-flex>
          </gds-flex>
          <gds-flex
            flex-direction="column"
            align-items="center"
            justify-content="flex-start"
            gap="xs"
          >
            <gds-card
              width="100px"
              height="100px"
              align-items="center"
              justify-content="center"
            >
              <gds-icon-ai color="negative" size="xl"></gds-icon-ai>
            </gds-card>
            <gds-flex
              flex-direction="column"
              align-items="center"
              justify-content="center"
              gap="0"
            >
              <gds-text tag="small">Negative</gds-text>
              <gds-text tag="small" color="secondary/0.4"> A:1.0 </gds-text>
            </gds-flex>
          </gds-flex>
          <gds-flex
            flex-direction="column"
            align-items="center"
            justify-content="flex-start"
            gap="xs"
          >
            <gds-card
              width="100px"
              height="100px"
              align-items="center"
              justify-content="center"
              background="notice"
              border="4xs solid notice"
            >
              <gds-icon-ai color="notice/0.4" size="xl"></gds-icon-ai>
            </gds-card>
            <gds-flex
              flex-direction="column"
              align-items="center"
              justify-content="center"
              gap="0"
            >
              <gds-text tag="small">Notice 40%</gds-text>
              <gds-text tag="small" color="secondary/0.4"> A:0.4 </gds-text>
            </gds-flex>
          </gds-flex>
          <gds-flex
            flex-direction="column"
            align-items="center"
            justify-content="flex-start"
            gap="xs"
          >
            <gds-card
              width="100px"
              height="100px"
              align-items="center"
              justify-content="center"
              background="positive"
              border="4xs solid positive"
            >
              <gds-icon-ai color="positive" size="xl"></gds-icon-ai>
            </gds-card>
            <gds-flex
              flex-direction="column"
              align-items="center"
              justify-content="center"
              gap="0"
            >
              <gds-text tag="small">Positive</gds-text>
              <gds-text tag="small" color="secondary/0.4"> A:1.0 </gds-text>
            </gds-flex>
          </gds-flex>
        </gds-flex>
      </gds-theme>
    </gds-flex>
  `,
}

/**
 * Icons have the role of `presentation`, when there is no label provided. This means that the icon will be ignored by screen readers.
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
