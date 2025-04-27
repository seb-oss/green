// table.data.ts

export interface TableColumn {
  key: string
  label: string
  sortable: boolean
  dragaggable: boolean
  filterable: boolean
  visible: boolean
  width?: string
}

export interface TableCell {
  value: string
  icon?: {
    name: string
    slot?: 'lead' | 'trail'
    size?: 's' | 'm' | 'l'
  }
  badge?: {
    label: string
    variant: 'notice' | 'positive' | 'warning' | 'negative'
    size?: 'small' | 'medium'
  }
  supportingText?: string
  variant?: string
  editable?: boolean
  options?: {
    label: string
    action: string
  }[]
}

export interface TableRow {
  id: string
  cells: TableCell[]
  href?: string
  variant?: string
  sortable?: boolean
  selectable?: boolean
  draggable?: boolean
}

export const BANK_COLUMNS: TableColumn[] = [
  {
    key: 'account',
    label: 'Account',
    sortable: true,
    dragaggable: false,
    filterable: true,
    visible: true,
  },
  {
    key: 'type',
    label: 'Type',
    sortable: true,
    dragaggable: true,
    filterable: true,
    visible: true,
  },
  {
    key: 'balance',
    label: 'Balance',
    sortable: true,
    dragaggable: true,
    filterable: false,
    visible: true,
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    dragaggable: true,
    filterable: true,
    visible: true,
  },
  {
    key: 'branch',
    label: 'Branch',
    sortable: false,
    dragaggable: false,
    filterable: true,
    visible: true,
  },
]

export const BANK_DATA: TableRow[] = [
  {
    id: '1',
    sortable: true,
    selectable: true,
    cells: [
      {
        value: 'Personal Savings',
        icon: { name: 'bank', slot: 'lead' },
        supportingText: 'Last transaction: Today',
        editable: true,
      },
      {
        value: 'Savings Account',
        badge: { label: 'Savings', variant: 'notice' },
      },
      {
        value: '50,000 kr',
        variant: 'positive',
      },
      {
        value: 'Active',
        badge: { label: 'Active', variant: 'positive' },
      },
      {
        value: 'Stockholm Central',
        icon: { name: 'pin', slot: 'lead' },
        options: [
          { label: 'View Details', action: 'view' },
          { label: 'Edit', action: 'edit' },
        ],
      },
    ],
  },
  {
    id: '2',
    sortable: true,
    selectable: true,
    cells: [
      {
        value: 'Business Account Pro',
        icon: { name: 'bank', slot: 'lead' },
        supportingText: 'Last transaction: Yesterday',
        editable: true,
      },
      {
        value: 'Business Account',
        badge: { label: 'Business', variant: 'notice' },
      },
      {
        value: '250,000 kr',
        variant: 'positive',
      },
      {
        value: 'Active',
        badge: { label: 'Active', variant: 'positive' },
      },
      {
        value: 'Gothenburg Main',
        icon: { name: 'pin', slot: 'lead' },
        options: [
          { label: 'View Details', action: 'view' },
          { label: 'Edit', action: 'edit' },
        ],
      },
    ],
  },
  {
    id: '3',
    sortable: true,
    selectable: true,
    cells: [
      {
        value: 'Investment Portfolio',
        icon: { name: 'bank', slot: 'lead' },
        supportingText: 'Last updated: 2 days ago',
        editable: true,
      },
      {
        value: 'Investment Account',
        badge: { label: 'Investment', variant: 'warning' },
      },
      {
        value: '150,000 kr',
        variant: 'warning',
      },
      {
        value: 'Under Review',
        badge: { label: 'Review', variant: 'warning' },
      },
      {
        value: 'Malmö Branch',
        icon: { name: 'pin', slot: 'lead' },
        options: [
          { label: 'View Details', action: 'view' },
          { label: 'Edit', action: 'edit' },
        ],
      },
    ],
  },
  {
    id: '4',
    sortable: true,
    selectable: true,
    cells: [
      {
        value: 'Student Savings',
        icon: { name: 'bank', slot: 'lead' },
        supportingText: 'Student benefits applied',
        editable: true,
      },
      {
        value: 'Student Account',
        badge: { label: 'Student', variant: 'notice' },
        options: [
          { label: 'View Details', action: 'view' },
          { label: 'Edit', action: 'edit' },
        ],
      },
      {
        value: '15,000 kr',
        variant: 'notice',
      },
      {
        value: 'Active',
        badge: { label: 'Active', variant: 'positive' },
      },
      {
        value: 'Uppsala Campus',
        icon: { name: 'pin', slot: 'lead' },
      },
    ],
  },
  {
    id: '5',
    // href: '#',
    // variant: 'primary',
    cells: [
      {
        value: 'Open New Account',
        icon: { name: 'plus', slot: 'lead' },
      },
      {
        value: 'New Account',
        badge: { label: 'New', variant: 'positive' },
      },
      {
        value: ' ',
        variant: 'notice',
      },
      {
        value: 'Available',
        badge: { label: 'Available', variant: 'notice' },
      },
      {
        value: 'All Branches',
        icon: { name: 'pin', slot: 'lead' },
      },
    ],
  },
]
