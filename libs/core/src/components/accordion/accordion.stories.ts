import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './accordion'
import '../text/text'
import '../card/card'
import '../flex/flex'
import '../rich-text/rich-text'
import '../icon/icons/chevron-top'
import '../icon/icons/chevron-bottom'

const meta: Meta = {
  title: 'Components/Accordion',
  component: 'gds-accordion',
  tags: ['autodocs'],
  argTypes: {
    summary: {
      description: 'The text displayed in the accordion header',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Summary' },
      },
    },
    name: {
      description:
        'Groups accordions together. Accordions with the same name will close each other when opened',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    open: {
      description: 'Controls if the accordion is expanded',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
      },
    },
    size: {
      description: 'Controls the size of the accordion',
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
The \`gds-accordion\` component is a collapsible section that helps organize and hide content until needed.
It provides smooth animations, grouping behavior, and support for custom icons.

## Features
- Expandable/collapsible content sections with smooth animations
- Group behavior: accordions with the same name will close each other automatically
- Custom icon support through slots
- Two size variants: large and small
- Accessible by default
- Keyboard navigation support

## Custom Icons
You can provide custom icons for both open and closed states:

\`\`\`html
<gds-accordion custom-icon>
  <gds-icon-chevron-up slot="summary-icon-open"></gds-icon-chevron-up>
  <gds-icon-chevron-down slot="summary-icon-closed"></gds-icon-chevron-down>
  Content here
</gds-accordion>
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
 * Basic example of an accordion component.
 */
export const Default: Story = {
  ...DefaultParams,
  args: {
    summary: 'Click to expand',
    innerHTML: 'Accordion content goes here',
  },
}

/**
 * Example of accordions with custom icons.
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
        <gds-accordion name="default-icon" summary="Default Icon">
          This accordion uses the default plus/minus icon.
        </gds-accordion>
        <gds-accordion name="default-icon" summary="Default Icon">
          This accordion uses the default plus/minus icon.
        </gds-accordion>
        <gds-accordion name="default-icon" summary="Default Icon">
          This accordion uses the default plus/minus icon.
        </gds-accordion>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Custom icon</gds-text>
        <gds-accordion
          name="custom-icon"
          summary="With Custom Icons"
          custom-icon
        >
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This accordion uses custom chevron icons.
        </gds-accordion>
        <gds-accordion
          name="custom-icon"
          summary="With Custom Icons"
          custom-icon
        >
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This accordion uses custom chevron icons.
        </gds-accordion>
        <gds-accordion
          name="custom-icon"
          summary="With Custom Icons"
          custom-icon
        >
          <gds-icon-chevron-top slot="summary-icon-open"></gds-icon-chevron-top>
          <gds-icon-chevron-bottom
            slot="summary-icon-closed"
          ></gds-icon-chevron-bottom>
          This accordion uses custom chevron icons.
        </gds-accordion>
      </gds-flex>
    </gds-flex>
  `,
}

/**
 * Example of grouped accordions.
 */
export const Grouped: Story = {
  ...DefaultParams,
  name: 'Grouped',
  parameters: {
    docs: {
      description: {
        story: `
Accordions with the same name attribute will close each other when one is opened.

In this example, all accordions are grouped together with the name attribute set to "group-1".

\`\`\`html
<gds-accordion name="group-1"> ... </gds-accordion>
\`\`\`  

`,
      },
    },
  },
  render: () => html`
    <gds-flex flex-direction="column">
      <gds-accordion name="group-1" summary="First Accordion">
        Content of first accordion
      </gds-accordion>
      <gds-accordion name="group-1" summary="Second Accordion">
        Content of second accordion
      </gds-accordion>
      <gds-accordion name="group-1" summary="Third Accordion">
        Content of third accordion
      </gds-accordion>
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
The accordion component supports two sizes: large(default) and small.        
        
\`\`\`html
<gds-accordion size="small"> ... </gds-accordion>
\`\`\`        
        
        `,
      },
    },
  },
  render: () => html`
    <gds-flex gap="xl">
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Large Size (Default)</gds-text>
        <gds-accordion summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion summary="Summary example">
          Content goes here
        </gds-accordion>
      </gds-flex>
      <gds-flex flex-direction="column" flex="1">
        <gds-text tag="small" color="secondary">Small</gds-text>
        <gds-accordion size="small" summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion size="small" summary="Summary example">
          Content goes here
        </gds-accordion>
        <gds-accordion size="small" summary="Summary example">
          Content goes here
        </gds-accordion>
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
          'Accordions can contain any type of content, including other components.',
      },
    },
  },
  render: () => html`
    <gds-accordion summary="Rich Content Example">
      <gds-rich-text>
        <h3>Heading Inside Accordion</h3>
        <p>This is a paragraph with <strong>rich</strong> formatting.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
        </ul>
      </gds-rich-text>
    </gds-accordion>
  `,
}

/**
 * Example of initially open accordion.
 */
export const InitiallyOpen: Story = {
  ...DefaultParams,
  name: 'Initially Open',
  parameters: {
    docs: {
      description: {
        story: `
Accordions can be initially opened using the open attribute.

\`\`\`html
 <gds-accordion open> ... </gds-accordion>
\`\`\`  
        
        `,
      },
    },
  },
  render: () => html`
    <gds-accordion open summary="Initially Open">
      This accordion starts in the open state.
    </gds-accordion>
  `,
}
