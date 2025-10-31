// table.stories.ts
import { html } from 'lit'

import type { Meta, StoryObj } from '@storybook/web-components'

import { argTablePropsFor } from '../../../.storybook/argTableProps'

import './table'
import '../dropdown/dropdown'
import '../context-menu/context-menu'
import '../input/input'
import '../img/img'
import '../icon/icons/dot-grid-one-horizontal'
import '../formatted-text/number/formatted-number'
import '../formatted-text/account/formatted-account'
import '../formatted-text/date/formatted-date'

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
    amount: Math.floor(Math.random() * 100000) + 1000,
    account: `5440${String(Math.floor(Math.random() * 10000000)).padStart(7, '0')}`,
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
      { key: 'id', label: 'Number', sortable: false, align: 'left' },
      {
        key: 'name',
        label: 'Name',
        sortable: false,
        slots: {
          lead: (row: { name: string }) =>
            row.name === 'User 5'
              ? html` <gds-img
                  src="https://github.com/astrit.png"
                  border-radius="max"
                  width="24px"
                  height="24px"
                ></gds-img>`
              : null,
          trail: (row: { name: string }) =>
            row.name === 'User 5' ? html`<span>GIT</span>` : null,
        },
      },
      {
        key: 'email',
        label: 'Email',
        sortable: true,
        slots: {
          trail: (row: MockData) => html`
            <gds-button
              size="xs"
              rank="secondary"
              @click=${(e: Event) => {
                e.stopPropagation() // Prevent row click
                console.log('Quick action for', row.name)
              }}
            >
              Copy
            </gds-button>
          `,
        },
      },
      { key: 'role', label: 'Role', sortable: true },
      {
        key: 'status',
        label: 'Status',
        sortable: true,
        align: 'center',
        slots: {
          // Custom value rendering with badge
          value: (row: { status: unknown }) => html`
            <gds-badge
              size="small"
              variant=${row.status === 'Active' ? 'positive' : 'negative'}
            >
              ${row.status}
            </gds-badge>
          `,
        },
      },
      {
        key: 'amount',
        label: 'Amount',
        sortable: true,
        align: 'right',
        slots: {
          value: (row: MockData) => html`
            <gds-formatted-number>${row.amount}</gds-formatted-number>
          `,
          trail: (row: MockData) =>
            html`<gds-badge size="small"> SEK </gds-badge>`,
        },
      },
      {
        key: 'account',
        label: 'Account',
        sortable: true,
        align: 'right',
        slots: {
          value: (row: MockData) => html`
            <gds-formatted-account
              .account=${row.account}
              format="seb-account"
            ></gds-formatted-account>
          `,
        },
      },
      {
        key: 'lastLogin',
        label: 'Last Login',
        sortable: true,
        align: 'left',
        slots: {
          value: (row: MockData) => html`
            <gds-formatted-date
              .value=${row.lastLogin}
              locale="sv-SE"
              format="dateLong"
            ></gds-formatted-date>
          `,
        },
      },
    ],
    actions: (row: MockData) => html`
      <gds-context-menu>
        <gds-button slot="trigger" size="small" rank="tertiary">
          <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
        </gds-button>
        ${row.status === 'Active'
          ? html`
              <gds-menu-item @click=${() => console.log('Deactivate', row)}>
                Deactivate
              </gds-menu-item>
            `
          : html`
              <gds-menu-item @click=${() => console.log('Activate', row)}>
                Activate
              </gds-menu-item>
            `}
        <gds-menu-item @click=${() => console.log('View logs', row)}>
          View Activity Log
        </gds-menu-item>
        <gds-divider></gds-divider>
        <gds-menu-item
          variant="negative"
          @click=${() => console.log('Delete', row)}
        >
          Delete User
        </gds-menu-item>
      </gds-context-menu>
    `,
    density: 'comfortable',
    dataProvider: mockApi,
  },
  render: (args) => html`
    <gds-table
      selectable
      .columns=${args.columns}
      .dataProvider=${args.dataProvider}
      .actions=${args.actions}
      density=${args.density}
      @data-loaded=${(e: CustomEvent) => console.log('Data loaded:', e.detail)}
      @data-error=${(e: CustomEvent) =>
        console.error('Error loading data:', e.detail)}
      @selection-change=${(e: CustomEvent) =>
        console.log('Selection changed:', e.detail)}
    ></gds-table>
  `,
}
