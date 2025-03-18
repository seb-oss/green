import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './details'
import '../text/text'
import '../card/card'
import '../flex/flex'
import '../rich-text/rich-text'
import '../icon/icons/chevron-top'
import '../icon/icons/chevron-bottom'

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
    'custom-icon': {
      description: 'Controls whether to use custom icons from slots',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Overview
The \`gds-details\` component is a collapsible section that helps organize and hide content until needed.
It provides smooth animations, grouping behavior, and support for custom icons.

## Features
- Expandable/collapsible content sections with smooth animations
- Group behavior: detailss with the same name will close each other automatically
- Custom icon support through slots
- Two size variants: large and small
- Accessible by default
- Keyboard navigation support

## Custom Icons
You can provide custom icons for both open and closed states:

\`\`\`html
<gds-details custom-icon>
  <gds-icon-chevron-up slot="summary-icon-open"></gds-icon-chevron-up>
  <gds-icon-chevron-down slot="summary-icon-closed"></gds-icon-chevron-down>
  Content here
</gds-details>
\`\`\`
        `,
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
 * Example of detailss with custom icons.
 */
export const CustomIcons: Story = {
  ...DefaultParams,
  name: 'Custom Icons',
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates how to use custom icons for open and closed states.',
      },
    },
  },
  render: () => html`
    <gds-flex gap="2xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Default</gds-text>
        <gds-details name="default-icon" summary="Default Icon">
          This details uses the default plus/minus icon.
        </gds-details>
        <gds-details name="default-icon" summary="Default Icon">
          This details uses the default plus/minus icon.
        </gds-details>
        <gds-details name="default-icon" summary="Default Icon">
          This details uses the default plus/minus icon.
        </gds-details>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Custom icon</gds-text>
        <gds-details name="custom-icon" summary="With Custom Icons" custom-icon>
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This details uses custom chevron icons.
        </gds-details>
        <gds-details name="custom-icon" summary="With Custom Icons" custom-icon>
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This details uses custom chevron icons.
        </gds-details>
        <gds-details name="custom-icon" summary="With Custom Icons" custom-icon>
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This details uses custom chevron icons.
        </gds-details>
      </gds-flex>
    </gds-flex>
  `,
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
        Content of first details
      </gds-details>
      <gds-details name="group-1" summary="Second Details">
        Content of second details
      </gds-details>
      <gds-details name="group-1" summary="Third Details">
        Content of third details
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
