'use client'

import * as Core from '@sebgroup/green-core/react'

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

export default function Table() {
  // Generate user data
  const generateUserData = (index: number): UserData => {
    const FIRST_NAMES = [
      'Alexandra',
      'Benjamin',
      'Caroline',
      'David',
      'Elena',
      'Fredrik',
    ]
    const LAST_NAMES = [
      'Andersson',
      'Bergström',
      'Carlsson',
      'Dahlström',
      'Eriksson',
    ]
    const ROLES = ['Admin', 'User', 'Editor'] as const
    const STATUSES = ['Active', 'Inactive'] as const
    const DEPARTMENTS = ['Engineering', 'Sales', 'Marketing', 'Support', 'HR']

    const id = index + 1
    const firstName = FIRST_NAMES[index % FIRST_NAMES.length]
    const lastName = LAST_NAMES[index % LAST_NAMES.length]

    return {
      id,
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}@domain.tld`,
      role: ROLES[index % ROLES.length],
      status: STATUSES[index % STATUSES.length],
      department: DEPARTMENTS[index % DEPARTMENTS.length],
      amount: Math.floor(Math.random() * 500000) + 10000,
      account: `5440${String((index * 7919) % 10000000).padStart(7, '0')}`,
      lastLogin: new Date(
        Date.now() - Math.random() * 30 * 86400000,
      ).toISOString(),
      avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${firstName}${lastName}`,
      download: `#`,
    }
  }

  // Data provider
  const userDataProvider = async (request: any) => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const allData = Array.from({ length: 100 }, (_, i) => generateUserData(i))
    let processedData = [...allData]

    // Search
    if (request.searchQuery) {
      const query = request.searchQuery.toLowerCase()
      processedData = processedData.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(query),
        ),
      )
    }

    // Sort
    if (request.sortColumn) {
      processedData.sort((a, b) => {
        const aValue = String(a[request.sortColumn as keyof UserData])
        const bValue = String(b[request.sortColumn as keyof UserData])
        return request.sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      })
    }

    // Paginate
    const startIndex = (request.page - 1) * request.rows
    const endIndex = startIndex + request.rows
    const paginatedData = processedData.slice(startIndex, endIndex)

    return {
      rows: paginatedData,
      total: processedData.length,
    }
  }

  // Columns configuration - exactly as in stories.data.ts
  const columns = [
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
          template: 'email-copy',
        },
      },
    },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      visible: false,
      value: (row: UserData) =>
        `${row.role.toUpperCase()} (${row.department || 'N/A'})`,
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
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
  ]

  // Actions configuration
  const actions = {
    label: 'Actions',
    justify: 'end',
    cell: {
      type: 'context-menu',
      items: [
        {
          label: (row: UserData) =>
            row.status === 'Active' ? 'Deactivate' : 'Activate',
        },
        {
          label: 'View Details',
        },
        {
          label: 'Edit Profile',
        },
        {
          divider: true,
          label: 'Delete User',
        },
      ],
    },
  }

  return (
    <Core.GdsTable
      columns={columns as any}
      data={userDataProvider}
      actions={actions as any}
      density="comfortable"
      variant="secondary"
      selectable={true}
      searchable={true}
      settings={true}
      rows={10}
    >
      <template name="email-copy">
        <Core.IconCopy />
      </template>
      <template name="download-image">
        <Core.IconCloudDownload slot="trail" />
      </template>
      <template name="department-icon">
        <Core.IconBuildings />
      </template>
    </Core.GdsTable>
  )
}
