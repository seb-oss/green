// table.stories.ts
import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './table'
import '../dropdown/dropdown'
import '../input/input'

const meta: Meta = {
  title: 'Components/Table',
  component: 'gds-table',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A responsive table component with the following features:
- Client-side search
- Sortable columns
- Row selection
- Pagination
- Responsive design
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj

// Generate mock data
const generateMockData = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['Admin', 'User', 'Editor'][i % 3],
    status: ['Active', 'Inactive'][i % 2],
  }))

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
]

export const Default: Story = {
  args: {
    columns: columns,
    data: generateMockData(100),
  },
  render: (args) => html`
    <gds-table .columns=${args.columns} .data=${args.data}></gds-table>
  `,
}

export const SmallDataSet: Story = {
  args: {
    columns: columns,
    data: generateMockData(5),
  },
  render: (args) => html`
    <gds-table .columns=${args.columns} .data=${args.data}></gds-table>
  `,
}

export const LargeDataSet: Story = {
  args: {
    columns: columns,
    data: generateMockData(1000),
  },
  render: (args) => html`
    <gds-table .columns=${args.columns} .data=${args.data}></gds-table>
  `,
}

export const CustomColumns: Story = {
  args: {
    columns: [
      { key: 'id', label: '#', sortable: true },
      { key: 'name', label: 'Full Name', sortable: true },
      { key: 'email', label: 'Contact Email', sortable: true },
    ],
    data: generateMockData(50),
  },
  render: (args) => html`
    <gds-table .columns=${args.columns} .data=${args.data}></gds-table>
  `,
}

export const NonSortableColumns: Story = {
  args: {
    columns: columns.map((col) => ({ ...col, sortable: false })),
    data: generateMockData(50),
  },
  render: (args) => html`
    <gds-table .columns=${args.columns} .data=${args.data}></gds-table>
  `,
}

// Example of handling selection events
export const WithSelectionHandler: Story = {
  args: {
    columns: columns,
    data: generateMockData(20),
  },
  render: (args) => html`
    <div>
      <p id="selection-info">No rows selected</p>
      <gds-table
        .columns=${args.columns}
        .data=${args.data}
        @selection-change=${(e: CustomEvent) => {
          const info = document.getElementById('selection-info')
          if (info) {
            info.textContent = `Selected rows: ${e.detail.selectedRows.length}`
          }
        }}
      ></gds-table>
    </div>
  `,
}
