import type { Meta, StoryObj } from '@storybook/web-components'
import './text'
import '../../layout/card'
import '../../layout/container'
import '../../layout/flex'
import '../../content/divider'
import { html } from 'lit'

/**
 * The `gds-text`
 * The gds-text element is designed to display text content flexibly. You can easily change the HTML tag it uses, wrap the text, set a maximum character length, and apply line clamping. It also allows you to adjust the text size based on design tokens that work together with line height and font size.
 *
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
 *
 * In order to have more flexibility the tag it self and the sizing are controlled by the user.
 * The `gds-text` accepts the `tag` property which will render the text with the specified tag and the `size` property which will render the text with the specified size based on the tokens
 *
 * Example: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `span`, `em`, `mark`, `strong`, `small` etc.
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
      <gds-text weight="bold">Bold (700)</gds-text>
      <gds-text weight="medium">Medium (500)</gds-text>
      <gds-text weight="book">Book (450)</gds-text>
      <gds-text weight="regular">Regular (400)</gds-text>
      <gds-text weight="light">Light (300)</gds-text>
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
      <gds-text tag="h6">H6: Heading 2XS</gds-text>
      <gds-text tag="h5">H5: Heading XS</gds-text>
      <gds-text tag="h4">H4: Heading Small</gds-text>
      <gds-text tag="h3">H3: Heading Medium</gds-text>
      <gds-text tag="h2">H2: Heading Large</gds-text>
      <gds-text tag="h1">H1: Heading Extra Large</gds-text>
    </gds-flex>
  `,
}

export const Detail: Story = {
  name: 'Detail',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="detail-xs">Detail Extra Small</gds-text>
      <gds-text font-size="detail-s">Detail Small</gds-text>
      <gds-text font-size="detail-m">Detail Medium</gds-text>
    </gds-flex>
  `,
}

export const Body: Story = {
  name: 'Body',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="body-s">Body Small</gds-text>
      <gds-text font-size="body-m">Body Medium</gds-text>
      <gds-text font-size="body-l">Body Large</gds-text>
    </gds-flex>
  `,
}

export const Display: Story = {
  name: 'Display',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="display-s">Display Small</gds-text>
      <gds-text font-size="display-m">Display Medium</gds-text>
      <gds-text font-size="display-l">Display Large</gds-text>
      <gds-text font-size="display-xl">Display XL</gds-text>
      <gds-text font-size="display-2xl">Display 2XL</gds-text>
    </gds-flex>
  `,
}

export const Preamble: Story = {
  name: 'Preamble',
  render: (args) => html`
    <gds-flex flex-direction="column" gap="m">
      <gds-text font-size="preamble-xs">Preamble Extra Small</gds-text>
      <gds-text font-size="preamble-s">Preamble Small</gds-text>
      <gds-text font-size="preamble-m">Preamble Medium</gds-text>
      <gds-text font-size="preamble-l">Preamble Large</gds-text>
      <gds-text font-size="preamble-xl">Preamble XL</gds-text>
      <gds-text font-size="preamble-2xl">Preamble 2XL</gds-text>
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
