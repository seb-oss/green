'use client'

import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'

interface Item {
  name: string
  status: string
}

const SIMPLE_DATA: Item[] = [
  { name: 'Item A', status: 'Active' },
  { name: 'Item B', status: 'Inactive' },
  { name: 'Item C', status: 'Active' },
  { name: 'Item D', status: 'Pending' },
  { name: 'Item E', status: 'Active' },
]

export default function Table({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const getStatusPath = (row: Item) => `/table/${row.status.toLowerCase()}`

  const dataProvider = async (request: any) => {
    const filtered = [...SIMPLE_DATA]

    if (request.sortColumn) {
      filtered.sort((a, b) => {
        const aVal = String(a[request.sortColumn as keyof Item])
        const bVal = String(b[request.sortColumn as keyof Item])
        return request.sortDirection === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal)
      })
    }

    return {
      rows: filtered,
      total: filtered.length,
    }
  }

  const columns: any[] = [
    { key: 'name', label: 'Name', sortable: true, width: '40px' },
    {
      key: 'status',
      label: 'Status',
      cell: {
        trail: {
          type: 'link',
          label: (row: Item) => row.status,
          href: getStatusPath,
          onClick: (row: Item) => {
            router.push(getStatusPath(row))
          },
        },
      },
      sortable: true,
    },
  ]

  return (
    <div>
      <Core.GdsTheme>
        <Core.GdsTable
          headline="Test"
          summary="Test"
          columns={columns}
          data={dataProvider}
        />
      </Core.GdsTheme>
      {children}
    </div>
  )
}
