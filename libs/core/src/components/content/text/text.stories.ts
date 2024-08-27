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
        'label-overline',
        'label-input-medium',
        'label-input-large',
        'label-information-medium',
        'label-information-large',
        'label-small',
        'label-medium',
        'label-large',
        'body-small',
        'body-medium',
        'body-large',
        'title-small',
        'title-medium',
        'title-large',
        'headline-small',
        'headline-medium',
        'headline-large',
        'display-small',
        'display-medium',
        'display-large',
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

export const Size: Story = {
  name: 'Labels',
  render: (args) => html`
    <gds-flex direction="column" gap="m">
      <gds-text size="label-overline">Label: Overline</gds-text>
      <gds-text size="label-input-medium">Label: Input Medium</gds-text>
      <gds-text size="label-input-large">Label: Input Large</gds-text>
      <gds-text size="label-information-medium"
        >Label: Input Information Medium</gds-text
      >
      <gds-text size="label-information-large"
        >Label: Input Information Large</gds-text
      >
      <gds-text size="label-small">Label: Input Small</gds-text>
      <gds-text size="label-medium">Label: Input Medium</gds-text>
      <gds-text size="label-large">Label: Input Large</gds-text>
    </gds-flex>
  `,
}

export const Body: Story = {
  name: 'Body',
  render: (args) => html`
    <gds-flex direction="column" gap="m">
      <gds-text size="body-small">Body: Small</gds-text>
      <gds-text size="body-medium">Body: Medium</gds-text>
      <gds-text size="body-large">Body: Large</gds-text>
    </gds-flex>
  `,
}

export const Title: Story = {
  name: 'Title',
  render: (args) => html`
    <gds-flex direction="column" gap="m">
      <gds-text size="title-small">Title: Small</gds-text>
      <gds-text size="title-medium">Title: Medium</gds-text>
      <gds-text size="title-large">Title: Large</gds-text>
    </gds-flex>
  `,
}

export const Headline: Story = {
  name: 'Headline',
  render: (args) => html`
    <gds-flex direction="column" gap="m">
      <gds-text size="headline-small">Headline: Small</gds-text>
      <gds-text size="headline-medium">Headline: Medium</gds-text>
      <gds-text size="headline-large">Headline: Large</gds-text>
    </gds-flex>
  `,
}

export const Display: Story = {
  name: 'Display',
  render: (args) => html`
    <gds-flex direction="column" gap="m">
      <gds-text size="display-small">Display: Small</gds-text>
      <gds-text size="display-medium">Display: Medium</gds-text>
      <gds-text size="display-large">Display: Large</gds-text>
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
        <gds-text tag="h2" size="body-small">Lines:2</gds-text>
        <gds-text size="display-small" lines="2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </gds-text>
      </gds-flex>
      <gds-flex direction="column" gap="m">
        <gds-divider></gds-divider>
        <gds-text tag="h2" size="body-small">Lines:3</gds-text>
        <gds-text size="display-medium" lines="3">
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
        <gds-text tag="h2" size="body-small">Lines:4</gds-text>
        <gds-text size="display-large" lines="4">
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
