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
  argTypes: {
    ...argTablePropsFor('gds-text'),
  },
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

// Update mock data generator to include amount
const generateMockData = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    amount: Math.floor(Math.random() * 10000),
    status: ['Active', 'Inactive'][i % 2],
  }))

const columns = [
  {
    key: 'id',
    label: '#',
    sortable: true,
    align: 'right',
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true,
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
  },
  {
    key: 'amount',
    label: 'Amount',
    sortable: true,
    align: 'right',
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    align: 'center',
  },
]

export const Default: Story = {
  args: {
    columns: columns,
    data: generateMockData(100),
    density: 'comfortable',
  },
  argTypes: {
    density: {
      control: 'select',
      options: ['comfortable', 'compact', 'spacious'],
      description: 'Controls the spacing density of the table',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'comfortable' },
      },
    },
  },

  render: (args) => html`
    <gds-table
      .columns=${args.columns}
      .data=${args.data}
      density=${args.density}
    ></gds-table>
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

export const ColumnAlignment: Story = {
  args: {
    columns: columns,
    data: generateMockData(20),
  },
  parameters: {
    docs: {
      description: {
        story: `
Demonstrates different column alignments:
- ID: right-aligned (for numbers)
- Name & Email: left-aligned (default for text)
- Amount: right-aligned (for currency/numbers)
- Status: center-aligned
        `,
      },
    },
  },
  render: (args) => html`
    <gds-table .columns=${args.columns} .data=${args.data}></gds-table>
  `,
}

// Add a specific story for density comparison
export const DensityModes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h3>Compact</h3>
        <gds-table
          .columns=${columns}
          .data=${generateMockData(5)}
          density="compact"
        ></gds-table>
      </div>

      <div>
        <h3>Comfortable (Default)</h3>
        <gds-table
          .columns=${columns}
          .data=${generateMockData(5)}
          density="comfortable"
        ></gds-table>
      </div>

      <div>
        <h3>Spacious</h3>
        <gds-table
          .columns=${columns}
          .data=${generateMockData(5)}
          density="spacious"
        ></gds-table>
      </div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: `
### Density Modes
The table supports three density modes:
- **Compact**: Minimal spacing, good for displaying large datasets
- **Comfortable**: Default mode, balanced spacing
- **Spacious**: More generous spacing, good for readability
        `,
      },
    },
  },
}

export const ColumnVisibility: Story = {
  args: {
    columns: [
      { key: 'id', label: '#', sortable: true, align: 'right' },
      { key: 'name', label: 'Name', sortable: true },
      { key: 'email', label: 'Email', sortable: true },
      { key: 'role', label: 'Role', sortable: true },
      { key: 'status', label: 'Status', sortable: true, align: 'center' },
      { key: 'created', label: 'Created Date', sortable: true },
      { key: 'lastLogin', label: 'Last Login', sortable: true },
    ],
    data: generateMockData(20),
  },
  parameters: {
    docs: {
      description: {
        story: `
### Column Visibility
Users can show/hide columns using the column selector dropdown in the header.
- Multiple columns can be selected/deselected
- Column visibility state is maintained
- Responsive design adjusts to visible columns
        `,
      },
    },
  },
}
