import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './table'
import './head/head'
import './row/row'
import './cell/cell'

const meta: Meta = {
  title: 'Components/Table SEP',
  component: 'gds-table-sep',
  tags: ['autodocs'],
  argTypes: {
    ...argTablePropsFor('gds-table'),
  },
}

export default meta
type Story = StoryObj

const sampleData = [
  { name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  { name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' },
]

export const Default: Story = {
  render: () => html`
    <gds-table responsive>
      <div slot="header">
        <gds-table-row>
          <gds-table-head>Name</gds-table-head>
          <gds-table-head>Email</gds-table-head>
          <gds-table-head>Role</gds-table-head>
        </gds-table-row>
      </div>
      ${sampleData.map(
        (item) => html`
          <gds-table-row>
            <gds-table-cell header="Name">${item.name}</gds-table-cell>
            <gds-table-cell header="Email">${item.email}</gds-table-cell>
            <gds-table-cell header="Role">${item.role}</gds-table-cell>
          </gds-table-row>
        `,
      )}
    </gds-table>
  `,
  parameters: {
    docs: {
      description: {
        story: `
A responsive table component that adapts to different screen sizes. 
On mobile devices, it transforms into a card-like layout where each cell displays with its header.

### Features
- Responsive design
- Accessible with ARIA roles
- Header information preserved in mobile view
- Flexible content structure using slots

### Basic Usage
\`\`\`html
<gds-table>
  <div slot="header">
    <gds-table-row>
      <gds-table-head>Name</gds-table-head>
      <gds-table-head>Email</gds-table-head>
    </gds-table-row>
  </div>
  <gds-table-row>
    <gds-table-cell header="Name">John Doe</gds-table-cell>
    <gds-table-cell header="Email">john@example.com</gds-table-cell>
  </gds-table-row>
</gds-table>
\`\`\`
        `,
      },
    },
  },
}

export const LongContent: Story = {
  render: () => html`
    <gds-table>
      <div slot="header">
        <gds-table-row>
          <gds-table-head>Title</gds-table-head>
          <gds-table-head>Description</gds-table-head>
        </gds-table-row>
      </div>
      <gds-table-row>
        <gds-table-cell header="Title">Long Content Example</gds-table-cell>
        <gds-table-cell header="Description">
          This is a longer piece of content that demonstrates how the table
          handles larger amounts of text. The responsive design ensures this
          content remains readable on all device sizes.
        </gds-table-cell>
      </gds-table-row>
    </gds-table>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Example showing how the table handles longer content.',
      },
    },
  },
}

export const MultipleRows: Story = {
  render: () => html`
    <gds-table>
      <div slot="header">
        <gds-table-row>
          <gds-table-head>ID</gds-table-head>
          <gds-table-head>Name</gds-table-head>
          <gds-table-head>Status</gds-table-head>
        </gds-table-row>
      </div>
      ${Array.from({ length: 5 }, (_, i) => i + 1).map(
        (id) => html`
          <gds-table-row>
            <gds-table-cell header="ID">${id}</gds-table-cell>
            <gds-table-cell header="Name">User ${id}</gds-table-cell>
            <gds-table-cell header="Status">
              ${id % 2 ? 'Active' : 'Inactive'}
            </gds-table-cell>
          </gds-table-row>
        `,
      )}
    </gds-table>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Example showing multiple rows of data.',
      },
    },
  },
}
