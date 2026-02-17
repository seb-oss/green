import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import {
  Slot,
  SlotValue,
  TableColumn,
  TableRequest,
  TableResponse,
} from './table.types'

// =================
// USERS DATA COLLECTION
// =================

const USERS_URL = 'https://api.seb.io/components/table/table.users.json'
const FEEDBACK_URL = 'https://api.seb.io/components/table/table.feedback.json'

let usersCache: UserData[] | null = null
let usersPromise: Promise<UserData[]> | null = null
let feedbackCache: FeedbackData[] | null = null
let feedbackPromise: Promise<FeedbackData[]> | null = null

const normalizeUserRow = (row: UserRow): UserData => {
  const fullName = String(row.name)

  return {
    ...row,
    name: Slot(fullName, ['avatar', 'value'], row.email),
    email: Slot(String(row.email), ['value', 'copy-button']),
    status: Slot(String(row.status), ['status']),
    amount: Slot(Number(row.amount), ['amount']),
    account: Slot(String(row.account), ['main']),
    lastLogin: Slot(String(row.lastLogin), ['main']),
    download: Slot(String(row.download ?? '#'), ['main']),
  }
}

const loadUsers = async (): Promise<UserData[]> => {
  if (usersCache) return usersCache
  if (usersPromise) return usersPromise

  usersPromise = fetch(USERS_URL)
    .then((response) => response.json())
    .then((data: UserRow[]) => data.map(normalizeUserRow))
    .then((data) => {
      usersCache = data
      return data
    })

  return usersPromise
}

const userDataProvider = async (
  request: TableRequest,
): Promise<TableResponse<UserData>> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const allData = await loadUsers()
  let processedData = [...allData]

  if (request.searchQuery) {
    const query = request.searchQuery.toLowerCase()
    processedData = processedData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query),
      ),
    )
  }

  if (request.sortColumn) {
    processedData.sort((a, b) => {
      const aValue = String(a[request.sortColumn as keyof UserData])
      const bValue = String(b[request.sortColumn as keyof UserData])

      return request.sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    })
  }

  const startIndex = (request.page - 1) * request.rows
  const endIndex = startIndex + request.rows
  const paginatedData = processedData.slice(startIndex, endIndex)

  return {
    rows: paginatedData,
    total: processedData.length,
  }
}

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
  },
  Data: userDataProvider,
}

// ============================================================================
// FEEDBACK DATA COLLECTION
// ============================================================================

const loadFeedback = async (): Promise<FeedbackData[]> => {
  if (feedbackCache) return feedbackCache
  if (feedbackPromise) return feedbackPromise

  feedbackPromise = fetch(FEEDBACK_URL)
    .then((response) => response.json())
    .then((data: FeedbackData[]) => {
      feedbackCache = data
      return data
    })

  return feedbackPromise
}

const feedbackDataProvider = async (
  request: TableRequest,
): Promise<TableResponse<FeedbackData>> => {
  await new Promise((resolve) => setTimeout(resolve, 800))

  const allData = await loadFeedback()
  let processedData = [...allData]

  if (request.searchQuery) {
    const query = request.searchQuery.toLowerCase()
    processedData = processedData.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(query),
      ),
    )
  }

  if (request.sortColumn) {
    processedData.sort((a, b) => {
      const aValue = String(a[request.sortColumn as keyof FeedbackData])
      const bValue = String(b[request.sortColumn as keyof FeedbackData])

      return request.sortDirection === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    })
  }

  const startIndex = (request.page - 1) * request.rows
  const endIndex = startIndex + request.rows
  const paginatedData = processedData.slice(startIndex, endIndex)

  return {
    rows: paginatedData,
    total: processedData.length,
  }
}

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
  } as any,

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
  } as any,

  ActionButton: {
    label: 'Actions',
    align: 'start',
    justify: 'start',
  } as any,

  ActionContextMenu: {
    label: 'Actions',
    align: 'start',
    justify: 'end',
  } as any,
  Data: feedbackDataProvider,
}
