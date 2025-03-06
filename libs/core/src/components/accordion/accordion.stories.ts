import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './accordion'
import '../rich-text/rich-text'

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
  },
  parameters: {
    docs: {
      description: {
        component: `
## Overview
The \`gds-acordion\` component is a collapsible section that helps organize and hide content until needed. 
It follows the native HTML \`<details>\` and \`<summary>\` behavior while adding extra functionality for grouped accordions.

## Features
- Expandable/collapsible content sections
- Group behavior: accordions with the same name will close each other automatically
- Works across Shadow DOM boundaries
- Customizable summary text
- Accessible by default, following native HTML semantics
- Visual indicators for open/closed states

## Accessibility
- Follows ARIA best practices for expandable sections
- Keyboard navigable
- Screen reader friendly
- Maintains focus management

## Example
\`\`\`html
<gds-accordion name="group1" summary="Section 1">
  <gds-rich-text>Content for section 1</gds-rich-text>
</gds-accordion>

<gds-accordion name="group1" summary="Section 2">
  <gds-rich-text>Content for section 2</gds-rich-text>
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
 * This story demonstrates the default usage with simple content.
 */
export const accordion: Story = {
  ...DefaultParams,
  name: 'Accordion',
  args: {
    innerHTML: `<p>Content</p>`,
  },
}

/**
 * This story demonstrates how accordions with the same name interact with each other.<br/>
 * When one accordion in the group is opened, others in the same group will automatically close.
 *
 * Key points:
 * - All accordions share the name "Name"
 * - Opening any accordion will close others in the group
 * - Each accordion maintains its own content independently
 * - The behavior works across Shadow DOM boundaries
 */
export const Name: Story = {
  ...DefaultParams,
  name: 'Name',
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: [] },
  },
  render: (args) => html`
    <gds-accordion name="Name" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="Name" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="Name" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
  `,
}

export const Open: Story = {
  ...DefaultParams,
  name: 'Open',
  parameters: {
    ...DefaultParams.parameters,
    controls: { include: [] },
    docs: {
      description: {
        story: `
### Open Accordion
Just as in the native select if you set the open attribute to true the accordion will be open by default.
        `,
      },
    },
  },
  render: (args) => html`
    <gds-accordion open name="default-open" summary="I'm open by default">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="default-open" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
    <gds-accordion name="default-open" summary="Example">
      <gds-rich-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </gds-rich-text>
    </gds-accordion>
  `,
}
