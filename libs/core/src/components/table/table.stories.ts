// table.stories.ts
import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './table'
import '../dropdown/dropdown'
import '../input/input'

import { TableRequest, TableResponse } from './table.types'

interface MockData {
  id: number
  name: string
  email: string
  role: string
  status: string
  amount: number
  lastLogin: string
  [key: string]: any
}

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

// Use the interface in your mock API
const mockApi = async (
  request: TableRequest,
): Promise<TableResponse<MockData>> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // if (Math.random() < 0.1) {
  //   throw new Error('Random server error')
  // }

  const allData: MockData[] = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: ['Admin', 'User', 'Editor'][i % 3],
    status: ['Active', 'Inactive'][i % 2],
    amount: Math.floor(Math.random() * 10000),
    lastLogin: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  }))

  let filtered = [...allData]

  if (request.searchQuery) {
    const query = request.searchQuery.toLowerCase()
    filtered = filtered.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(query),
      ),
    )
  }

  if (request.sortColumn) {
    filtered.sort((a, b) => {
      const aVal = String(a[request.sortColumn as keyof MockData])
      const bVal = String(b[request.sortColumn as keyof MockData])
      return request.sortDirection === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal)
    })
  }

  const start = (request.page - 1) * request.pageSize
  const paginatedData = filtered.slice(start, start + request.pageSize)

  return {
    data: paginatedData,
    total: filtered.length,
  }
}
// table.stories.ts
export const Default: Story = {
  args: {
    columns: [
      { key: 'id', label: '#', sortable: true, align: 'right' },
      { key: 'name', label: 'Name', sortable: true },
      { key: 'email', label: 'Email', sortable: true },
      { key: 'role', label: 'Role', sortable: true },
      { key: 'status', label: 'Status', sortable: true, align: 'center' },
      { key: 'amount', label: 'Amount', sortable: true, align: 'right' },
      { key: 'lastLogin', label: 'Last Login', sortable: true },
    ],
    density: 'comfortable',
    dataProvider: mockApi,
  },
  render: (args) => html`
    <gds-table
      .columns=${args.columns}
      .dataProvider=${args.dataProvider}
      density=${args.density}
      @data-loaded=${(e: CustomEvent) => console.log('Data loaded:', e.detail)}
      @data-error=${(e: CustomEvent) =>
        console.error('Error loading data:', e.detail)}
      @selection-change=${(e: CustomEvent) =>
        console.log('Selection changed:', e.detail)}
    ></gds-table>
  `,
}
