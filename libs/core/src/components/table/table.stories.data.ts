import { html } from 'lit'
import { ifDefined } from 'lit/directives/if-defined.js'

import {
  Slot,
  SlotValue,
  TableColumn,
  TableRequest,
  TableResponse,
} from './table.types'

type CellValue = SlotValue | string | number

type UserRow = {
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
  download?: string
}

type UserData = Omit<
  UserRow,
  'name' | 'email' | 'status' | 'amount' | 'account' | 'lastLogin' | 'download'
> & {
  name: CellValue
  email: CellValue
  status: CellValue
  amount: CellValue
  account: CellValue
  lastLogin: CellValue
  download?: CellValue
}

type FeedbackData = {
  id: number
  name: string
  email: string
  feedback: string
  notes: string
  status: 'Active' | 'Inactive'
  department: string
}

// ============================================================================
// USERS DATA COLLECTION
// ============================================================================

const USERS_URL = 'https://api.seb.io/components/table/table.users.json'
const FEEDBACK_URL = 'https://api.seb.io/components/table/table.feedback.json'

let usersCache: UserData[] | null = null
let usersPromise: Promise<UserData[]> | null = null
let feedbackCache: FeedbackData[] | null = null
let feedbackPromise: Promise<FeedbackData[]> | null = null

const normalizeUserRow = (row: UserRow, index: number): UserData => {
  const fullName = String(row.name)
  const firstName = fullName.split(' ')[0] || `User-${row.id}`
  const useCustomKey = index < 6

  return {
    ...row,
    name: useCustomKey
      ? Slot(fullName, ['lead', 'value'], firstName)
      : Slot(fullName, ['lead', 'value']),
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

// ============================================================================
// USER SLOT GENERATOR
// ============================================================================

/**
 * Generates slot content for table stories from actual data records
 * @param data - Array of user data records (from API)
 * @param page - Page number from gds-page-change event
 * @returns Array of html templates with slot content
 */
export const generateUserSlots = (data: UserData[], page?: number) => {
  const rowsPerPage = 10
  const currentPage = page ?? 1

  // Calculate which rows to generate slots for based on page number
  const startIndex = (currentPage - 1) * rowsPerPage
  const endIndex = startIndex + rowsPerPage
  const pageData = data.slice(startIndex, endIndex)

  console.log(
    `Generating slots for page ${currentPage}: rows ${startIndex + 1}-${endIndex}`,
  )

  return pageData.map((row) => {
    const rowId = row.id

    // Extract slot values from the data
    const nameSlot = row.name as SlotValue
    const emailSlot = row.email as SlotValue
    const statusSlot = row.status as SlotValue
    const amountSlot = row.amount as SlotValue
    const accountSlot = row.account as SlotValue
    const lastLoginSlot = row.lastLogin as SlotValue
    const downloadSlot = row.download as SlotValue

    const fullName = String(nameSlot.value)
    const nameKey = nameSlot.key || rowId
    const email = String(emailSlot.value)
    const statusValue = String(statusSlot.value)
    const variant = statusValue === 'Active' ? 'positive' : 'notice'
    const amount = Number(amountSlot.value)
    const account = String(accountSlot.value)
    const lastLoginDate = String(lastLoginSlot.value)

    return html`
      <gds-img
        slot="name:${nameKey}:lead"
        src="${ifDefined(row.avatarUrl as string | undefined)}"
        alt="${fullName}"
        width="xl"
        height="xl"
      ></gds-img>
      <gds-badge
        slot="status:${rowId}:status"
        size="small"
        variant="${variant}"
      >
        ${statusValue}
      </gds-badge>
      <gds-text slot="email:${rowId}:value">${email}</gds-text>
      <gds-button
        slot="email:${rowId}:copy-button"
        size="small"
        rank="tertiary"
        @click=${() => navigator.clipboard.writeText(email)}
      >
        <gds-icon-copy></gds-icon-copy>
      </gds-button>
      <gds-flex slot="amount:${rowId}:amount" gap="xs" align-items="center">
        <gds-text>${amount.toLocaleString('sv-SE')}</gds-text>
        <gds-badge variant="information" size="small">SEK</gds-badge>
      </gds-flex>
      <gds-formatted-account slot="account:${rowId}:main" .value=${account}>
        ${account}
      </gds-formatted-account>
      <gds-link
        slot="download:${rowId}:main"
        href="#"
        text-decoration="underline"
        download
      >
        Download
        <gds-icon-cloud-download slot="trail"></gds-icon-cloud-download>
      </gds-link>
      <gds-formatted-date
        slot="lastLogin:${rowId}:main"
        .value=${lastLoginDate}
        locale="sv-SE"
        format="dateLong"
      >
      </gds-formatted-date>
    `
  })
}

// Export the dataset cache for use in stories
export const getUserDataset = () => usersCache ?? []
