// table/table.data.ts
export const USERS_PRESET = {
  columns: [
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
          src: 'avatarUrl',
          alt: 'name',
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
    },
    {
      key: 'role',
      label: 'Role',
      sortable: true,
      visible: false,
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
      cell: {
        value: {
          type: 'badge',
          value: 'status',
          variant: 'status',
        },
      },
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
      cell: {
        value: {
          type: 'formatted-number',
          value: 'amount',
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
          value: 'account',
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
          value: 'lastLogin',
          locale: 'sv-SE',
          format: 'dateLong',
        },
      },
    },
  ],
  dataGenerator: (index: number) => {
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
    const ROLES = ['Admin', 'User', 'Editor']
    const STATUSES = ['Active', 'Inactive']
    const DEPARTMENTS = ['Engineering', 'Sales', 'Marketing', 'Support', 'HR']

    const firstName = FIRST_NAMES[index % FIRST_NAMES.length]
    const lastName = LAST_NAMES[index % LAST_NAMES.length]

    return {
      id: index + 1,
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
    }
  },
}

export const FEEDBACK_PRESET = {
  columns: [
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
          value: 'status',
          variant: 'status',
          size: 'small',
        },
      },
    },
  ],
  dataGenerator: (index: number) => {
    const FIRST_NAMES = [
      'Sophie',
      'Marcus',
      'Isabella',
      'Johan',
      'Emma',
      'Lucas',
    ]
    const LAST_NAMES = ['Ström', 'Nord', 'Berg', 'Gren', 'Holm']
    const DEPARTMENTS = ['Engineering', 'Sales', 'Marketing', 'Support', 'HR']
    const FEEDBACK_TEXTS = [
      'Excellent user experience with intuitive interface and smooth navigation.',
      'Performance needs improvement when handling large datasets.',
      'Documentation is comprehensive but could benefit from more code examples.',
    ]
    const NOTES = [
      'Customer upgraded to premium plan. All features activated.',
      'Q1 planning meeting scheduled for next week at 10 AM.',
      'Bug fix deployed in production. Monitor system for 24 hours.',
    ]

    const firstName = FIRST_NAMES[index % FIRST_NAMES.length]
    const lastName = LAST_NAMES[index % LAST_NAMES.length]

    return {
      name: `${firstName} ${lastName}`,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@company.com`,
      feedback: FEEDBACK_TEXTS[index % FEEDBACK_TEXTS.length],
      notes: NOTES[index % NOTES.length],
      status: index % 3 === 0 ? 'Inactive' : 'Active',
      department: DEPARTMENTS[index % DEPARTMENTS.length],
    }
  },
}
