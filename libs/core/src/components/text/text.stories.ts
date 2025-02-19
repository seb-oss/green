import type { Meta, StoryObj } from '@storybook/web-components'

import './text'
import '../card'
import '../container'
import '../flex'
import '../divider'

import { html } from 'lit'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

/**
 * `gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.
 *
 * Style expression properties apply to the outer element unless otherwise specified.
 *
 * @beta
 */
const meta: Meta = {
  title: 'Components/Text',
  component: 'gds-text',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-text'),
  },
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
  argTypes: {
    size: {
      options: [
        'heading-xl',
        'heading-l',
        'heading-m',
        'heading-s',
        'heading-xs',
        'heading-2xs',
        'detail-m',
        'detail-s',
        'detail-xs',
        'body-l',
        'body-m',
        'body-s',
        'display-2xl',
        'display-xl',
        'display-l',
        'display-m',
        'display-s ',
        'preamble-2xl',
        'preamble-xl',
        'preamble-l',
        'preamble-m',
        'preamble-s',
        'preamble-xs',
      ],
      control: { type: 'select' },
    },
    tag: {
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'em',
        'mark',
        'strong',
      ],
      control: { type: 'select' },
    },
    wrap: {
      options: ['balance', 'nowrap', 'pretty', 'wrap'],
      control: { type: 'select' },
    },
    length: {
      control: { type: 'number' },
    },
    min: {
      control: { type: 'number' },
    },
    align: {
      options: ['left', 'center', 'right', 'justify'],
      control: { type: 'select' },
    },
    font: {
      control: { type: 'string' },
    },
  },
}

/**
 * The `tag` property controls the inner element tag name.
 *
 * Example: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small` etc.
 *
 * Depending on which tag you use, different default styles will be applied. Style can be overridden using the `font-size`, `font-weight` and other style expression properties.
 *
 * The default tag is `span` and the default size is `body-m`
 */

export const Card: Story = {
  ...DefaultParams,
  name: 'Tags',
  render: (args) =>
    html`<gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-text>Span ( Default )</gds-text>
        <gds-text tag="p">Paragraph </gds-text>
        <gds-text tag="em">Em</gds-text>
        <gds-text tag="mark">Mark</gds-text>
        <gds-text tag="strong">strong</gds-text>
        <gds-text tag="small">small</gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-text tag="h1">H1</gds-text>
        <gds-text tag="h2">H2</gds-text>
        <gds-text tag="h3">H3</gds-text>
        <gds-text tag="h4">H4</gds-text>
        <gds-text tag="h5">H5</gds-text>
        <gds-text tag="h6">H6</gds-text>
      </gds-flex>
    </gds-flex>`,
}

export const Weight: Story = {
  ...DefaultParams,
  name: 'Weight',
  render: (args) =>
    html`<gds-flex flex-direction="column" gap="m">
      <gds-text font-weight="bold">Bold (700)</gds-text>
      <gds-text font-weight="medium">Medium (500)</gds-text>
      <gds-text font-weight="book">Book (450)</gds-text>
      <gds-text font-weight="regular">Regular (400)</gds-text>
      <gds-text font-weight="light">Light (300)</gds-text>
    </gds-flex>`,
}

/**
 * > Headings in the `gds-text` component come with predefined sizes based on design tokens, and the `tag` property is used to define the heading level.
 * > For example, using `tag="h1"` will automatically apply the `heading-xl` size, so specifying the `size` property is not necessary.
 * > However, the `size` property can still be used to override the default size if needed.
 * > This provides flexibility in using the `gds-text` component across different contexts while ensuring consistent typography.
 */
export const Heading: Story = {
  name: 'Heading',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-text tag="h6">H6: heading-2xs</gds-text>
      <gds-text tag="h5">H5: heading-xs</gds-text>
      <gds-text tag="h4">H4: heading-s</gds-text>
      <gds-text tag="h3">H3: heading-m</gds-text>
      <gds-text tag="h2">H2: heading-l</gds-text>
      <gds-text tag="h1">H1: heading-xl</gds-text>
    </gds-flex>
  `,
}

export const Detail: Story = {
  name: 'Detail',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="detail-xs">detail-xs</gds-text>
      <gds-text font-size="detail-s">detail-s</gds-text>
      <gds-text font-size="detail-m">detail-m"</gds-text>
    </gds-flex>
  `,
}

export const Body: Story = {
  name: 'Body',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="body-s">body-s</gds-text>
      <gds-text font-size="body-m">body-m</gds-text>
      <gds-text font-size="body-l">body-l</gds-text>
    </gds-flex>
  `,
}

export const Display: Story = {
  name: 'Display',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="display-s">display-s</gds-text>
      <gds-text font-size="display-m">display-m</gds-text>
      <gds-text font-size="display-l">display-l</gds-text>
      <gds-text font-size="display-xl">display-xl</gds-text>
      <gds-text font-size="display-2xl">display-2xl</gds-text>
    </gds-flex>
  `,
}

export const Preamble: Story = {
  name: 'Preamble',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="preamble-xs">preamble-xs</gds-text>
      <gds-text font-size="preamble-s">preamble-s</gds-text>
      <gds-text font-size="preamble-m">preamble-m</gds-text>
      <gds-text font-size="preamble-l">preamble-l</gds-text>
      <gds-text font-size="preamble-xl">preamble-xl</gds-text>
      <gds-text font-size="preamble-2xl">preamble-2xl</gds-text>
    </gds-flex>
  `,
}

/**
 * The `gds-text` component has a `lines` property that will clamp the text to the specified number of lines. It can be any number value.
 */
export const Lines: Story = {
  name: 'Line Clamp',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="2xl">
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font-size="body-s">Lines:2</gds-text>
        <gds-text font-size="display-s" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font-size="body-s">Lines:3</gds-text>
        <gds-text font-size="display-m" lines="3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex flex-direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text font-size="body-s">Lines:4</gds-text>
        <gds-text font-size="display-l" lines="4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 *
 * The `gds-text` component has a `color` property that will change the text color based on the specified color token.
 *
 * e.g. `<gds-text level="1" color="primary"></gds-text>`
 *
 */

export const Color: Story = {
  name: 'Color',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-theme color-scheme="dark">
        <gds-flex
          level="1"
          background="primary"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="primary" font-size="body-s">
            Color: Content Primary
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="secondary"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="secondary" font-size="body-m">
            Color: Content Secondary
          </gds-text>
        </gds-flex>
        <gds-flex
          level="1"
          background="tertiary"
          border-radius="xs"
          padding="xl"
          display="flex"
          flex-direction="column"
        >
          <gds-text level="1" color="tertiary" font-size="body-l">
            Color: Content Tertiary
          </gds-text>
        </gds-flex>
      </gds-theme>
    </gds-flex>
  `,
}

/**
 * `gds-text` component has a `text-decoration` property that will change the text decoration based on the css values such as `underline`, `overline`, `line-through`, `underline dotted`, `{COLOR} wavy underline` etc.
 *
 *
 * e.g.
 *
 * ```html
 * <gds-text
 *    text-decoration="currentcolor wavy underline"
 *  >
 *    Wavy Underline
 *  </gds-text>
 * ```
 */
export const Decoration: Story = {
  ...DefaultParams,
  name: 'Decoration',
  render: (args) =>
    html`<gds-flex flex-direction="column" gap="m">
      <gds-text text-decoration="underline"> Underline </gds-text>
      <gds-text text-decoration="overline"> Overline </gds-text>
      <gds-text text-decoration="line-through"> Line Through </gds-text>
      <gds-text text-decoration="underline dotted"> Dotted </gds-text>
      <gds-text text-decoration="currentcolor wavy underline">
        Wavy Underline
      </gds-text>
    </gds-flex>`,
}
