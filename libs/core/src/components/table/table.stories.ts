import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import './table'
import '../card'
import '../dropdown/dropdown'
import '../context-menu/context-menu'
import '../input/input'
import '../img/img'
import '../icon/icons/dot-grid-one-horizontal'
import '../icon/icons/plus-small'
import '../icon/icons/copy'
import '../formatted-text/number/formatted-number'
import '../formatted-text/account/formatted-account'
import '../formatted-text/date/formatted-date'

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
  const firstName = ['Jane', 'John', 'Bob', 'Alice', 'Charlie', 'Diana'][
    index % 6
  ]
  const lastName = ['Smith', 'Doe', 'Williams', 'Brown', 'Jones'][index % 5]

  return {
    id,
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
    role: USER_ROLES[index % USER_ROLES.length],
    status: USER_STATUSES[index % USER_STATUSES.length],
    department: DEPARTMENTS[index % DEPARTMENTS.length],
    amount: Math.floor(Math.random() * 100000) + 1000,
    account: `5440${String(Math.floor(Math.random() * 10000000)).padStart(7, '0')}`,
    lastLogin: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    avatarUrl: index === 1 ? 'https://github.com/astrit.png' : undefined,
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
  const startIndex = (request.page - 1) * request.pageSize
  const endIndex = startIndex + request.pageSize
  const paginatedData = processedData.slice(startIndex, endIndex)

  return {
    data: paginatedData,
    total: processedData.length,
  }
}

/**
 * Table column configurations with custom renderers
 */
const tableColumns: TableColumn[] = [
  // ID Column - Simple numeric identifier
  {
    key: 'id',
    label: 'ID',
    sortable: false,
    align: 'left',
  },

  // Name Column - With optional avatar
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    slots: {
      lead: (row: UserData) =>
        row.avatarUrl
          ? html` <gds-img
              src="${row.avatarUrl}"
              alt="${row.name} avatar"
              border-radius="max"
              width="24px"
              height="24px"
            ></gds-img>`
          : null,
    },
  },

  // Email Column - With copy action
  {
    key: 'email',
    label: 'Email',
    sortable: true,
    justify: true,
    slots: {
      trail: (row: UserData) => html`
        <gds-button
          size="small"
          rank="tertiary"
          @click=${async (e: Event) => {
            e.stopPropagation()
            await navigator.clipboard.writeText(row.email)
            console.log(`Copied email: ${row.email}`)
          }}
          title="Copy email"
        >
          <gds-icon-copy size="m"></gds-icon-copy>
        </gds-button>
      `,
    },
  },

  // Role Column
  {
    key: 'role',
    label: 'Role',
    sortable: true,
  },

  // Status Column - With visual badge
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    slots: {
      value: (row: UserData) => html`
        <gds-badge
          size="small"
          variant="${row.status === 'Active' ? 'positive' : 'negative'}"
        >
          ${row.status}
        </gds-badge>
      `,
    },
  },

  // Amount Column - Formatted number with currency
  {
    key: 'amount',
    label: 'Amount',
    sortable: true,
    align: 'right',
    slots: {
      value: (row: UserData) => html`
        <gds-formatted-number>${row.amount}</gds-formatted-number>
      `,
      trail: () => html` <gds-badge size="small">SEK</gds-badge> `,
    },
  },

  // Account Column - Formatted account number
  {
    key: 'account',
    label: 'Account',
    sortable: true,
    align: 'right',
    slots: {
      value: (row: UserData) => html`
        <gds-formatted-account
          .account="${row.account}"
          format="seb-account"
        ></gds-formatted-account>
      `,
    },
  },

  // Last Login Column - Formatted date
  {
    key: 'lastLogin',
    label: 'Last Login',
    sortable: true,
    align: 'left',
    slots: {
      value: (row: UserData) => html`
        <gds-formatted-date
          .value="${row.lastLogin}"
          locale="sv-SE"
          format="dateLong"
        ></gds-formatted-date>
      `,
    },
  },
]

/**
 * Row actions renderer
 * Provides context menu with actions based on row state
 */
const renderRowActions = (row: UserData) => html`
  <gds-context-menu>
    <gds-button
      slot="trigger"
      size="small"
      rank="tertiary"
      aria-label="Actions for ${row.name}"
    >
      <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
    </gds-button>

    <!-- Status toggle action -->
    <gds-menu-item @click=${() => console.log(`Toggle status for:`, row)}>
      ${row.status === 'Active' ? 'Deactivate' : 'Activate'}
    </gds-menu-item>

    <!-- View logs action -->
    <gds-menu-item @click=${() => console.log(`View activity log for:`, row)}>
      View Activity Log
    </gds-menu-item>

    <!-- Edit action -->
    <gds-menu-item @click=${() => console.log(`Edit user:`, row)}>
      Edit User
    </gds-menu-item>

    <gds-divider></gds-divider>

    <!-- Delete action -->
    <gds-menu-item
      variant="negative"
      @click=${() => {
        if (confirm(`Delete user ${row.name}?`)) {
          console.log(`Delete user:`, row)
        }
      }}
    >
      Delete User
    </gds-menu-item>
  </gds-context-menu>
`

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
    actions: renderRowActions,
    density: 'comfortable',
    dataProvider: mockDataProvider,
    selectable: true,
    title: 'User Management',
    subtitle: 'Manage system users and their permissions',
  },
  render: (args) => html`
    <gds-table
      responsive
      title="${args.title}"
      subtitle="${args.subtitle}"
      ?selectable="${args.selectable}"
      density="${args.density}"
      .columns="${args.columns}"
      .dataProvider="${args.dataProvider}"
      .actions="${args.actions}"
      @data-loaded="${(e: CustomEvent) =>
        console.log('✓ Data loaded:', e.detail)}"
      @data-error="${(e: CustomEvent) =>
        console.error('✗ Error loading data:', e.detail)}"
      @selection-change="${(e: CustomEvent) =>
        console.log('→ Selection changed:', e.detail)}"
    >
      <!-- Optional header slots for additional controls -->
      <gds-button slot="header-lead" size="small" rank="secondary">
        Export
      </gds-button>
      <gds-button
        slot="header-trail"
        size="small"
        rank="secondary"
        variant="positive"
      >
        Add User
        <gds-icon-plus-small slot="trail"></gds-icon-plus-small>
      </gds-button>
    </gds-table>
  `,
}
