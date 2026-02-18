import { html, TemplateResult } from 'lit'

import { Slot } from './table.types'

import type {
  TableActions,
  TableColumn,
  TableRequest,
  TableResponse,
} from './table.types'

const USERS_URL = 'https://api.seb.io/components/table/table.users.json'
const FEEDBACK_URL = 'https://api.seb.io/components/table/table.feedback.json'

let usersCache: any[] | null = null
let usersPromise: Promise<any[]> | null = null
let feedbackCache: any[] | null = null
let feedbackPromise: Promise<any[]> | null = null

const normalizeUserRow = (row: any) => ({
  ...row,
  name: Slot(row.name, ['avatar', 'value'], row.email),
  email: Slot(row.email, ['value', 'copy-button']),
  status: Slot(row.status, ['status']),
  amount: Slot(row.amount, ['amount']),
  account: Slot(row.account, ['main']),
  lastLogin: Slot(row.lastLogin, ['main']),
  download: Slot(row.download ?? '#', ['main']),
})

let usersRawCache: any[] | null = null
let usersRawPromise: Promise<any[]> | null = null

const loadUsersRaw = async () => {
  if (usersRawCache) return usersRawCache
  if (usersRawPromise) return usersRawPromise

  usersRawPromise = fetch(USERS_URL)
    .then((response) => response.json())
    .then((data: any[]) => {
      usersRawCache = data
      return data
    })

  return usersRawPromise
}

const loadUsers = async () => {
  if (usersCache) return usersCache
  if (usersPromise) return usersPromise

  usersPromise = loadUsersRaw()
    .then((data: any[]) => data.map(normalizeUserRow))
    .then((data) => {
      usersCache = data
      return data
    })

  return usersPromise
}

const createDataProvider =
  (loader: () => Promise<any[]>) =>
  async (request: TableRequest): Promise<TableResponse<any>> => {
    let data = await loader()

    if (request.searchQuery) {
      const query = request.searchQuery.toLowerCase()
      data = data.filter((item) =>
        Object.values(item).some((value) =>
          value?.toString().toLowerCase().includes(query),
        ),
      )
    }

    if (request.sortColumn && data.length > 0) {
      const key = request.sortColumn
      data = [...data].sort((a, b) => {
        const aVal = a[key]?.toString() ?? ''
        const bVal = b[key]?.toString() ?? ''
        return request.sortDirection === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal)
      })
    }

    const start = (request.page - 1) * request.rows
    const end = start + request.rows

    return {
      rows: data.slice(start, end),
      total: data.length,
    }
  }

const userDataProvider = createDataProvider(loadUsers)

export const Users = {
  Columns: [
    {
      key: 'id',
      label: 'ID',
      sortable: false,
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
      justify: 'space-between',
    },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      visible: false,
      value: (row) => `${row.role.toUpperCase()} (${row.department || 'N/A'})`,
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
    },
    {
      key: 'department',
      label: 'Department',
      sortable: true,
    },
    {
      key: 'amount',
      label: 'Amount',
      sortable: true,
      justify: 'end',
    },
    {
      key: 'account',
      label: 'Account',
      sortable: true,
    },
    {
      key: 'lastLogin',
      label: 'Last Login',
      sortable: true,
    },
    {
      key: 'download',
      label: 'Download',
    },
  ] as TableColumn[],

  Actions: {
    label: 'Actions',
    justify: 'end',
  } as TableActions,
  Data: userDataProvider,

  /**
   * Generates slot content for all user rows.
   * Loops through raw user data and creates per-row slot elements
   * using the `columnKey:rowKey:slotId` naming convention.
   *
   * Usage: `${until(Users.SlotContent(), html``)}`
   */
  SlotContent: async (): Promise<TemplateResult> => {
    const users = await loadUsersRaw()
    return html`
      ${users.map(
        (user: any) => html`
          <gds-img
            src="${user.avatarUrl ?? '#'}"
            alt="${user.name}"
            slot="name:${user.email}:avatar"
            width="xl"
            height="xl"
          ></gds-img>
          <gds-icon-copy slot="email:${user.id}:copy-button"></gds-icon-copy>
          <gds-icon-cloud-download
            slot="download:${user.id}:main"
          ></gds-icon-cloud-download>
        `,
      )}
    `
  },
}

// ============================================================================
// FEEDBACK DATA COLLECTION
// ============================================================================

const loadFeedback = async () => {
  if (feedbackCache) return feedbackCache
  if (feedbackPromise) return feedbackPromise

  feedbackPromise = fetch(FEEDBACK_URL)
    .then((response) => response.json())
    .then((data: any[]) => {
      feedbackCache = data
      return data
    })

  return feedbackPromise
}

const feedbackDataProvider = createDataProvider(loadFeedback)

export const Feedback = {
  Columns: [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
      align: 'start',
    },
    {
      key: 'feedback',
      label: 'Feedback',
      width: '350px',
    },
    {
      key: 'notes',
      label: 'Notes',
      align: 'start',
      width: '300px',
    },
    {
      key: 'department',
      label: 'Department',
      align: 'start',
      width: '120px',
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      align: 'start',
      justify: 'end',
      width: '100px',
    },
  ] as TableColumn[],

  MultipleActions: {
    label: 'Actions',
    align: 'start',
    justify: 'start',
  } as TableActions,

  ActionLink: {
    label: 'Actions',
    align: 'start',
    justify: 'end',
    cell: [
      {
        type: 'link',
        href: '#',
        label: 'Link',
      },
    ],
  } as TableActions & { cell: unknown[] },

  ActionButton: {
    label: 'Actions',
    align: 'start',
    justify: 'start',
  } as TableActions,

  ActionContextMenu: {
    label: 'Actions',
    align: 'start',
    justify: 'end',
  } as TableActions,
  Data: feedbackDataProvider,
}
