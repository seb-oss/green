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
  argTypes: {
    ...argTablePropsFor('gds-table'),
  },
}

export default meta
type Story = StoryObj

// Mock API service
const mockData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: ['Admin', 'User', 'Editor'][i % 3],
  status: ['Active', 'Inactive'][i % 2],
}))

const mockApiCall = async (state: any) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  let filteredData = [...mockData]

  // Apply search
  if (state.searchQuery) {
    filteredData = filteredData.filter((item) =>
      Object.values(item).some((val) =>
        val.toString().toLowerCase().includes(state.searchQuery.toLowerCase()),
      ),
    )
  }

  // Apply sorting
  if (state.sortColumn) {
    filteredData.sort((a, b) => {
      const aVal = a[state.sortColumn]
      const bVal = b[state.sortColumn]
      return state.sortDirection === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal)
    })
  }

  // Apply pagination
  const start = (state.page - 1) * state.pageSize
  const paginatedData = filteredData.slice(start, start + state.pageSize)

  return {
    data: paginatedData,
    total: filteredData.length,
  }
}

export const Default: Story = {
  render: () => {
    const columns = [
      { key: 'name', label: 'Name', sortable: true },
      { key: 'email', label: 'Email', sortable: true },
      { key: 'role', label: 'Role', sortable: true },
      { key: 'status', label: 'Status', sortable: true },
    ]

    // Initialize table with data method
    setTimeout(() => {
      const table = document.querySelector('gds-table')
      if (table) {
        table.setDataMethod(mockApiCall)
      }
    })

    return html` <gds-table .columns=${columns}></gds-table> `
  },
}
