import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components-vite'

import './details'
import '../text/text'
import '../card/card'
import '../flex/flex'
import '../link/link'
import '../rich-text/rich-text'
import '../icon/icons/chevron-top'
import '../icon/icons/chevron-bottom'

/**
 * The details component is a collapsible section that helps organize and hide content until needed.
 *
 * Features
 * - Expandable/collapsible content sections with smooth animations
 * - Group behavior: detailss with the same name will close each other automatically
 * - Two size variants: large and small
 * - Accessible by default
 * - Keyboard navigation support
 */
const meta: Meta = {
  title: 'Components/Details',
  component: 'gds-details',
  tags: ['autodocs'],
  argTypes: {
    summary: {
      description: 'The text displayed in the details header',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Summary' },
      },
    },
    name: {
      description:
        'Groups detailss together. Detailss with the same name will close each other when opened',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    open: {
      description: 'Controls if the details is expanded',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    size: {
      description: 'Controls the size of the details',
      control: { type: 'select', options: ['large', 'small'] },
      table: {
        type: { summary: '"large" | "small"' },
        defaultValue: { summary: 'large' },
      },
    },
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
}

/**
 * Basic example of an details component.
 */
export const Default: Story = {
  ...DefaultParams,
  args: {
    summary: 'Click to expand',
    innerHTML: 'Details content goes here',
  },
}

/**
 * Example of grouped detailss.
 */
export const Grouped: Story = {
  ...DefaultParams,
  name: 'Grouped',
  parameters: {
    docs: {
      description: {
        story: `
Detailss with the same name attribute will close each other when one is opened.

In this example, all detailss are grouped together with the name attribute set to "group-1".

\`\`\`html
<gds-details name="group-1"> ... </gds-details>
\`\`\`

`,
      },
    },
  },
  render: () => html`
    <gds-flex flex-direction="column">
      <gds-details name="group-1" summary="First Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
      <gds-details name="group-1" summary="Second Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
      <gds-details name="group-1" summary="Third Details">
        <gds-rich-text>
          <gds-text tag="h4">Heading Inside Details</gds-text>
          <gds-link href="#">
            <gds-text>Linked content</gds-text>
          </gds-link>
        </gds-rich-text>
      </gds-details>
    </gds-flex>
  `,
}

/**
 * Example of different size variants.
 */
export const Sizes: Story = {
  ...DefaultParams,
  name: 'Sizes',
  parameters: {
    docs: {
      description: {
        story: `
The details component supports two sizes: large(default) and small.

\`\`\`html
<gds-details size="small"> ... </gds-details>
\`\`\`

        `,
      },
    },
  },
  render: () => html`
    <gds-flex gap="xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Large Size (Default)</gds-text>
        <gds-details summary="Summary example"> Content goes here </gds-details>
        <gds-details summary="Summary example"> Content goes here </gds-details>
        <gds-details summary="Summary example"> Content goes here </gds-details>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Small</gds-text>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
        <gds-details size="small" summary="Summary example">
          Content goes here
        </gds-details>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * Example with rich content.
 */
export const RichContent: Story = {
  ...DefaultParams,
  name: 'Rich Content',
  parameters: {
    docs: {
      description: {
        story:
          'Detailss can contain any type of content, including other components.',
      },
    },
  },
  render: () => html`
    <gds-details summary="Rich Content Example">
      <gds-rich-text>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
        <h3>Heading Inside Details</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </gds-rich-text>
    </gds-details>
  `,
}

/**
 * Example of initially open details.
 */
export const InitiallyOpen: Story = {
  ...DefaultParams,
  name: 'Initially Open',
  parameters: {
    docs: {
      description: {
        story: `
Detailss can be initially opened using the open attribute.

\`\`\`html
 <gds-details open> ... </gds-details>
\`\`\`

        `,
      },
    },
  },
  render: () => html`
    <gds-details open summary="Initially Open">
      This details starts in the open state.
    </gds-details>
  `,
}
