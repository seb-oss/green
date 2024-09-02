import type { Meta, StoryObj } from '@storybook/web-components'
import './text'
import '../../layout/card'
import '../../layout/container'
import '../../layout/flex'
import '../../content/divider'
import { html } from 'lit'

/**
 * The `gds-text`
 *
 * ## Usage
 *
 */
const meta: Meta = {
  title: 'Docs/Content/Text',
  component: 'gds-text',
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
  argTypes: {
    size: {
      options: [
        'headline-l',
        'headline-m',
        'headline-s',
        'title-l',
        'title-m',
        'title-s',
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
 * # Headings
 *
 * In order to have more flexibility the tag it self and the sizing are controlled by the user.
 * The `gds-text` accepts the `tag` property which will render the text with the specified tag and the `size` property which will render the text with the specified size based on the tokens
 *
 * Tag: h1, h2, h3, h4, h5, h6, p, span, em, mark, strong etc.
 *
 * #### The defualt tag is `p` and the defualt size is `body-medium`
 */

export const Card: Story = {
  ...DefaultParams,
  name: 'Tags',
  render: (args) =>
    html`<gds-flex direction="column" gap="m">
      <gds-text tag="h1">H1</gds-text>
      <gds-text tag="h2">H2</gds-text>
      <gds-text tag="h3">H3</gds-text>
      <gds-text tag="h4">H4</gds-text>
      <gds-text tag="h5">H5</gds-text>
      <gds-text tag="h6">H6</gds-text>
      <gds-text>Paragraph</gds-text>
      <gds-text tag="span">Span</gds-text>
      <gds-text tag="em">Em</gds-text>
      <gds-text tag="mark">Mark</gds-text>
      <gds-text tag="strong">strong</gds-text>
    </gds-flex>`,
}

export const Weight: Story = {
  ...DefaultParams,
  name: 'Weight',
  render: (args) =>
    html`<gds-flex direction="column" gap="m">
      <gds-text weight="bold">Bold (700)</gds-text>
      <gds-text weight="medium">Medium (500)</gds-text>
      <gds-text weight="book">Book (450)</gds-text>
      <gds-text weight="regular">Regular (400)</gds-text>
      <gds-text weight="light">Light (300)</gds-text>
    </gds-flex>`,
}

export const Headline: Story = {
  name: 'Headline',
  render: (args) => html`
    <gds-flex direction="column" gap="m">
      <gds-text size="headline-s">Headline Small</gds-text>
      <gds-text size="headline-m">Headline Medium</gds-text>
      <gds-text size="headline-l">Headline Large</gds-text>
    </gds-flex>
  `,
}

export const Title: Story = {
  name: 'Title',
  render: (args) => html`
    <gds-flex direction="column" gap="m">
      <gds-text size="title-s">Title Small</gds-text>
      <gds-text size="title-m">Title Medium</gds-text>
      <gds-text size="title-l">Title Large</gds-text>
    </gds-flex>
  `,
}

export const Detail: Story = {
  name: 'Detail',
  render: (args) => html`
    <gds-flex direction="column" gap="m">
      <gds-text size="detail-xs">Detail Extra Small</gds-text>
      <gds-text size="detail-s">Detail Small</gds-text>
      <gds-text size="detail-m">Detail Medium</gds-text>
    </gds-flex>
  `,
}

export const Body: Story = {
  name: 'Body',
  render: (args) => html`
    <gds-flex direction="column" gap="m">
      <gds-text size="body-s">Body Small</gds-text>
      <gds-text size="body-m">Body Medium</gds-text>
      <gds-text size="body-l">Body Large</gds-text>
    </gds-flex>
  `,
}

export const Display: Story = {
  name: 'Display',
  render: (args) => html`
    <gds-flex direction="column" gap="m">
      <gds-text size="display-s">Display Small</gds-text>
      <gds-text size="display-m">Display Medium</gds-text>
      <gds-text size="display-l">Display Large</gds-text>
      <gds-text size="display-xl">Display XL</gds-text>
      <gds-text size="display-2xl">Display 2XL</gds-text>
    </gds-flex>
  `,
}

export const Preamble: Story = {
  name: 'Preamble',
  render: (args) => html`
    <gds-flex direction="column" gap="m">
      <gds-text size="preamble-xs">Preamble Extra Small</gds-text>
      <gds-text size="preamble-s">Preamble Small</gds-text>
      <gds-text size="preamble-m">Preamble Medium</gds-text>
      <gds-text size="preamble-l">Preamble Large</gds-text>
      <gds-text size="preamble-xl">Preamble XL</gds-text>
      <gds-text size="preamble-2xl">Preamble 2XL</gds-text>
    </gds-flex>
  `,
}

/**
 * The `gds-text` component has a `lines` property that will clamp the text to the specified number of lines. It can be any number value.
 */
export const Lines: Story = {
  name: 'Line Clamp',
  render: (args) => html`
    <gds-flex direction="column" gap="2xl">
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-s">Lines:2</gds-text>
        <gds-text size="display-s" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-s">Lines:3</gds-text>
        <gds-text size="display-m" lines="3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-s">Lines:4</gds-text>
        <gds-text size="display-l" lines="4">
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
