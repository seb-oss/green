import { TableColumn, TableRequest, TableResponse } from './table.types'

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
  download?: string
}

interface FeedbackData {
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

const USERS = {
  FIRST_NAMES: [
    'Alexandra',
    'Benjamin',
    'Caroline',
    'David',
    'Elena',
    'Fredrik',
  ],
  LAST_NAMES: ['Andersson', 'Bergström', 'Carlsson', 'Dahlström', 'Eriksson'],
  ROLES: ['Admin', 'User', 'Editor'] as const,
  STATUSES: ['Active', 'Inactive'] as const,
  DEPARTMENTS: ['Engineering', 'Sales', 'Marketing', 'Support', 'HR'] as const,
  COUNT: 100,
}

const generateUserRecord = (index: number): UserData => {
  const id = index + 1
  const firstName = USERS.FIRST_NAMES[index % USERS.FIRST_NAMES.length]
  const lastName = USERS.LAST_NAMES[index % USERS.LAST_NAMES.length]

  return {
    id,
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}@domain.tld`,
    role: USERS.ROLES[index % USERS.ROLES.length],
    status: USERS.STATUSES[index % USERS.STATUSES.length],
    department: USERS.DEPARTMENTS[index % USERS.DEPARTMENTS.length],
    amount: Math.floor(Math.random() * 500000) + 10000,
    account: `5440${String((index * 7919) % 10000000).padStart(7, '0')}`,
    lastLogin: new Date(
      Date.now() - Math.random() * 30 * 86400000,
    ).toISOString(),
    avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}${lastName}`,
    download: `#`,
  }
}

const generateUserDataset = (): UserData[] =>
  Array.from({ length: USERS.COUNT }, (_, i) => generateUserRecord(i))

const userDataProvider = async (
  request: TableRequest,
): Promise<TableResponse<UserData>> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const allData = generateUserDataset()
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
      cell: {
        lead: {
          type: 'image',
          src: (row: UserData) => row.avatarUrl,
          alt: (row: UserData) => row.name,
          width: 'xl',
          height: 'xl',
        },
      },
    },
    {
      key: 'email',
      label: 'Email',
      sortable: true,
      justify: 'space-between',
      cell: {
        trail: {
          type: 'button',
          rank: 'tertiary',
          value: (row: UserData) => row.email,
          /*  size: 'xs', */
          template: 'email-copy',
        },
      },
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
      justify: 'end',
      cell: {
        value: {
          type: 'badge',
          value: (row: UserData) => row.status,
          variant: (row: UserData) =>
            row.status === 'Active' ? 'positive' : 'negative',
        },
      },
    },
    {
      key: 'department',
      label: 'Department',
      sortable: true,
      cell: {
        lead: {
          type: 'icon',
          template: 'department-icon',
        },
      },
    },
    {
      key: 'amount',
      label: 'Amount',
      sortable: true,
      justify: 'end',
      cell: {
        value: {
          type: 'formatted-number',
          value: (row: UserData) => row.amount,
        },
        trail: {
          type: 'badge',
          value: 'SEK',
        },
      },
    },
    {
      key: 'account',
      label: 'Account',
      sortable: true,
      cell: {
        value: {
          type: 'formatted-account',
          value: (row: UserData) => row.account,
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
          value: (row: UserData) => row.lastLogin,
          locale: 'sv-SE',
          format: 'dateLong',
        },
      },
    },
    {
      key: 'download',
      label: 'Download',
      cell: {
        value: {
          type: 'link',
          href: (row: UserData) => row.download,
          download: true,
          template: 'download-image',
          label: 'Download file',
        },
      },
    },
  ] as TableColumn[],

  Actions: {
    label: 'Actions',
    justify: 'end',
    cell: {
      type: 'context-menu',
      items: [
        {
          label: (row: UserData) =>
            row.status === 'Active' ? 'Deactivate' : 'Activate',
          /*  onClick: (row: UserData) => console.log('Toggle status', row), */
        },
        {
          label: 'View Details',
          /* onClick: (row: UserData) => console.log('View user', row), */
        },
        {
          label: 'Edit Profile',
          /* onClick: (row: UserData) => console.log('Edit user', row), */
        },
        {
          divider: true,
          label: 'Delete User',
          /* onClick: (row: UserData) => {
            if (confirm(`Delete ${row.name}?`)) {
              console.log('Delete user', row)
            }
          }, */
        },
      ],
    },
  },
  Data: userDataProvider,
}

// ============================================================================
// FEEDBACK DATA COLLECTION
// ============================================================================

const FEEDBACK = {
  FIRST_NAMES: ['Sophie', 'Marcus', 'Isabella', 'Johan', 'Emma', 'Lucas'],
  LAST_NAMES: ['Ström', 'Nord', 'Berg', 'Gren', 'Holm'],
  DEPARTMENTS: ['Engineering', 'Sales', 'Marketing', 'Support', 'HR'] as const,
  STATUSES: ['Active', 'Inactive'] as const,
  FEEDBACK_TEXTS: [
    'Excellent user experience with intuitive interface and smooth navigation.',
    'Performance needs improvement when handling large datasets.',
    'Documentation is comprehensive but could benefit from more code examples.',
    'Outstanding accessibility features and WCAG compliance implementation.',
    'Mobile experience is good but some minor UI inconsistencies observed.',
    'Feature request: Please add real-time collaboration capabilities.',
    'Integration with third-party APIs works seamlessly.',
    'User support team is responsive and helpful.',
    'Suggest adding dark mode and customizable themes.',
    'Security audit results are impressive and thorough.',
  ],
  NOTES: [
    'Customer upgraded to premium plan. All features activated.',
    'Q1 planning meeting scheduled for next week at 10 AM.',
    'Bug fix deployed in production. Monitor system for 24 hours.',
    'Account manager assigned: John Smith.',
    'Scheduled maintenance window: Saturday 2-4 AM.',
    'Training session completed successfully.',
    'Custom integration request in progress.',
    'Contract renewal due in 30 days.',
    'Performance optimization completed.',
    'Security certificates updated to latest version.',
  ],
  COUNT: 50,
}

const generateFeedbackRecord = (index: number): FeedbackData => {
  const id = index + 1
  const firstName = FEEDBACK.FIRST_NAMES[index % FEEDBACK.FIRST_NAMES.length]
  const lastName = FEEDBACK.LAST_NAMES[index % FEEDBACK.LAST_NAMES.length]

  return {
    id,
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
    feedback: FEEDBACK.FEEDBACK_TEXTS[index % FEEDBACK.FEEDBACK_TEXTS.length],
    notes: FEEDBACK.NOTES[index % FEEDBACK.NOTES.length],
    status: index % 3 === 0 ? 'Inactive' : 'Active',
    department: FEEDBACK.DEPARTMENTS[index % FEEDBACK.DEPARTMENTS.length],
  }
}

const generateFeedbackDataset = (): FeedbackData[] =>
  Array.from({ length: FEEDBACK.COUNT }, (_, i) => generateFeedbackRecord(i))

const feedbackDataProvider = async (
  request: TableRequest,
): Promise<TableResponse<FeedbackData>> => {
  await new Promise((resolve) => setTimeout(resolve, 800))

  const allData = generateFeedbackDataset()
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
      cell: {
        value: {
          type: 'badge',
          value: (row: FeedbackData) => row.status,
          variant: (row: FeedbackData) =>
            row.status === 'Active' ? 'positive' : 'negative',
          size: 'small',
        },
      },
    },
  ] as TableColumn[],

  MultipleActions: {
    label: 'Actions',
    align: 'start',
    justify: 'start',
    cell: [
      {
        type: 'button',
        size: 'xs',
        template: 'actions-activate',
      },
      {
        type: 'button',
        size: 'xs',
        variant: 'negative',
        template: 'actions-delete',
      },
    ],
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
    cell: [
      {
        type: 'button',
        label: 'Link',
      },
    ],
  } as any,

  ActionContextMenu: {
    label: 'Actions',
    align: 'start',
    justify: 'end',
    cell: {
      type: 'context-menu',
      items: [
        {
          label: 'Activate',
        },
        {
          label: 'View Details',
        },
        {
          label: 'Edit Profile',
        },
        {
          label: 'Delete User',
        },
      ],
    },
  } as any,
  Data: feedbackDataProvider,
}
