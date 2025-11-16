import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './table'
import '../card'
import '../dropdown/dropdown'
import '../context-menu/context-menu'
import '../input/input'
import '../img/img'
import '../pagination/pagination'
import '../icon/icons/dot-grid-one-horizontal'
import '../icon/icons/plus-small'
import '../icon/icons/settings-slider-hor'
import '../icon/icons/copy'

import { argTablePropsFor } from '../../../.storybook/argTableProps'
import { TableColumn, TableRequest, TableResponse } from './table.types'

/**
 * User data model interface
 * Represents a single row in the table
 */
interface UserData {
  id: number
  name: string
  email: string
  role: 'Admin' | 'User' | 'Editor'
  status: 'Active' | 'Inactive'
  amount: number
  account: string
  lastLogin: string
  avatarUrl?: string
  department?: string
}

/**
 * Configuration
 **/
const MOCK_DATA_COUNT = 100
const API_DELAY_MS = 1000
const USER_ROLES = ['Admin', 'User', 'Editor'] as const
const USER_STATUSES = ['Active', 'Inactive'] as const
const DEPARTMENTS = [
  'Engineering',
  'Sales',
  'Marketing',
  'Support',
  'HR',
] as const

const generateUserRecord = (index: number): UserData => {
  const id = index + 1
  const firstName = ['Sven', 'Erik', 'Olof', 'Ingrid', 'Nils', 'Anna'][
    index % 6
  ]
  const lastName = [
    'Lindgren',
    'Svensson',
    'Pettersson',
    'Gustafsson',
    'Larsson',
  ][index % 5]

  return {
    id,
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@seb.io`,
    role: USER_ROLES[index % USER_ROLES.length],
    status: USER_STATUSES[index % USER_STATUSES.length],
    department: DEPARTMENTS[index % DEPARTMENTS.length],
    amount: ((index * 1234 + 5000) % 100000) + 1000,
    account: `5440${String((index * 7919) % 10000000).padStart(7, '0')}`,
    lastLogin: new Date(Date.now() - index * 86400000).toISOString(),
    avatarUrl: `https://github.com/${firstName}.png`,
  }
}

/**
 * Generates the complete dataset for the table
 */
const generateMockDataset = (): UserData[] =>
  Array.from({ length: MOCK_DATA_COUNT }, (_, i) => generateUserRecord(i))

/**
 * Simulates an API endpoint for fetching table data
 * Supports pagination, sorting, and searching
 */
const mockDataProvider = async (
  request: TableRequest,
): Promise<TableResponse<UserData>> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, API_DELAY_MS))

  // Uncomment to test error handling
  // if (Math.random() < 0.1) {
  //   throw new Error('Network error: Failed to fetch data')
  // }

  // Generate base dataset
  const allData = generateMockDataset()
  let processedData = [...allData]

  // Apply search filter if query provided
  if (request.searchQuery) {
    const query = request.searchQuery.toLowerCase()
    processedData = processedData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query),
      ),
    )
  }

  // Apply sorting if requested
  if (request.sortColumn) {
    processedData.sort((a, b) => {
      const aValue = String(a[request.sortColumn as keyof UserData])
      const bValue = String(b[request.sortColumn as keyof UserData])

      return request.sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    })
  }

  // Apply pagination
  const startIndex = (request.page - 1) * request.rows
  const endIndex = startIndex + request.rows
  const paginatedData = processedData.slice(startIndex, endIndex)

  return {
    rows: paginatedData,
    total: processedData.length,
  }
}

/**
 * Table column configurations with custom renderers
 */
const tableColumns: TableColumn[] = [
  {
    key: 'id',
    label: 'ID',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    cell: {
      lead: {
        type: 'image',
        src: (row) => row.avatarUrl,
        alt: (row) => row.name,
        width: 'xl',
        height: 'xl',
      },
    },
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
    justify: true,
    cell: {
      trail: {
        type: 'button',
        value: (row: { email: any }) => row.email,
        size: 'small',
        slot: 'email-copy',
        onClick: () => alert('email copied'),
      },
    },
  },
  {
    key: 'role',
    label: 'Role',
    sortable: true,
    cell: {
      value: {
        type: 'link',
        label: (row) => row.status,
      },
    },
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    cell: {
      value: {
        type: 'badge',
        value: (row) => row.status,
        variant: (row) => (row.status === 'Active' ? 'positive' : 'negative'),
        size: 'small',
      },
    },
  },
  {
    key: 'amount',
    label: 'Amount',
    sortable: true,
    align: 'right',
    cell: {
      value: {
        type: 'formatted-number',
        value: (row) => row.amount,
      },
      trail: {
        type: 'badge',
        value: 'SEK',
        size: 'small',
      },
    },
  },
  {
    key: 'account',
    label: 'Account',
    sortable: true,
    align: 'left',
    cell: {
      value: {
        type: 'formatted-account',
        value: (row) => row.account,
        format: 'seb-account',
      },
    },
  },
  {
    key: 'lastLogin',
    label: 'Last Login',
    sortable: true,
    cell: {
      value: {
        type: 'formatted-date',
        value: (row) => row.lastLogin,
        locale: 'sv-SE',
        format: 'dateLong',
      },
    },
  },
]

/**
 * Row actions renderer
 * Provides context menu with actions based on row state
 */
const tableActions = {
  label: 'Actions',
  cell: {
    type: 'context-menu',
    items: [
      {
        label: (row: { status: string }) =>
          row.status === 'Active' ? 'Deactivate' : 'Activate',
        onClick: (row: any) => console.log('Toggle', row),
      },
      {
        label: 'View Activity Log',
        onClick: (row: any) => console.log('View logs', row),
      },
      {
        label: 'Edit User',
        onClick: (row: any) => console.log('Edit', row),
      },
      {
        divider: true,
        label: 'Delete User',
        onClick: (row: { name: any }) => {
          if (confirm(`Delete ${row.name}?`)) {
            console.log('Delete', row)
          }
        },
      },
    ],
  },
}

const meta: Meta = {
  title: 'Components/Table',
  component: 'gds-table',
  argTypes: {
    ...argTablePropsFor('gds-table'),
    density: {
      control: { type: 'select' },
      options: ['comfortable', 'compact', 'spacious'],
      defaultValue: 'comfortable',
    },
    selectable: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A comprehensive table component with enterprise features:

- **Data Management**: Async data loading with pagination
- **Search & Filter**: Built-in search functionality
- **Sorting**: Column-based sorting (ascending/descending)
- **Selection**: Row selection with select all capability
- **Responsive**: Mobile-friendly responsive design
- **Customization**: Flexible column rendering with slots
- **Actions**: Row-level actions via context menu
- **Performance**: Client-side caching for better UX
        `,
      },
    },
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {
  args: {
    columns: tableColumns,
    actions: tableActions,
    density: 'comfortable',
    data: mockDataProvider,
    selectable: true,
  },
  render: (args) => html`
    <gds-table
      density="${args.density}"
      ?selectable="${args.selectable}"
      .columns="${args.columns}"
      .data="${args.data}"
      .actions="${args.actions}"
    >
      <!-- <gds-button slot="header-lead" size="small" rank="secondary">
        Export
      </gds-button>
      <gds-button slot="header-trail" size="small" rank="secondary">
        Add user
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-button> -->
      <gds-context-menu slot="header-trail">
        <gds-button slot="trigger" rank="secondary" size="small">
          <gds-icon-settings-slider-hor
            slot="lead"
          ></gds-icon-settings-slider-hor>
          Sort
        </gds-button>
        <gds-menu-heading>Sort by</gds-menu-heading>
        <gds-menu-item>Column name</gds-menu-item>
        <gds-menu-heading>Sort direction</gds-menu-heading>
        <gds-menu-item>A to Z</gds-menu-item>
        <gds-menu-item>Z to A</gds-menu-item>
      </gds-context-menu>
      <!-- If not cloning shows up on first row only -->
      <template slot="email-copy">
        <gds-icon-copy size="s"></gds-icon-copy>
      </template>
    </gds-table>
  `,
}

export const Plain: Story = {
  args: {
    columns: tableColumns,
    actions: tableActions,
    data: mockDataProvider,
  },
  render: (args) => html`
    <gds-table plain .columns="${args.columns}" .data="${args.data}">
      <template slot="email-copy">
        <gds-icon-copy size="s"></gds-icon-copy>
      </template>
    </gds-table>
  `,
}

export const Responsive: Story = {
  args: {
    columns: tableColumns,
    data: mockDataProvider,
  },
  render: (args) => html`
    <gds-table responsive .columns="${args.columns}" .data="${args.data}">
      <template slot="email-copy">
        <gds-icon-copy size="s"></gds-icon-copy>
      </template>
    </gds-table>
  `,
}
