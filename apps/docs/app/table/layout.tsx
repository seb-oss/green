'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'

interface Item {
  id: number
  name: string
  email: any
  status: any
}

const Slot = (value: any, slots: string[]) => ({
  value,
  slots,
})

const SIMPLE_DATA: Item[] = [
  {
    id: 1,
    name: 'Item A',
    email: Slot('itema@domain.tld', ['email-icon', 'value', 'email-action']),
    status: Slot('Active', ['value']),
  },
  {
    id: 2,
    name: 'Item B',
    email: Slot('itemb@domain.tld', ['email-icon', 'value', 'email-action']),
    status: Slot('Inactive', ['value']),
  },
  {
    id: 3,
    name: 'Item C',
    email: Slot('itemc@domain.tld', ['email-icon', 'value', 'email-action']),
    status: Slot('Active', ['value']),
  },
  {
    id: 4,
    name: 'Item D',
    email: Slot('itemd@domain.tld', ['email-icon', 'value', 'email-action']),
    status: Slot('Pending', ['value']),
  },
  {
    id: 5,
    name: 'Item E',
    email: Slot('iteme@domain.tld', ['email-icon', 'value', 'email-action']),
    status: Slot('Active', ['value']),
  },
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
      key: 'email',
      label: 'Email',
      sortable: true,
      justify: 'space-between',
    },
    {
      key: 'status',
      label: 'Status',
      // cell: {
      //   trail: {
      //     type: 'link',
      //     label: (row: Item) => row.status,
      //     href: getStatusPath,
      //     onClick: (row: Item) => {
      //       router.push(getStatusPath(row))
      //     },
      //   },
      // },
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
        >
          {SIMPLE_DATA.map((row) => {
            const statusVariant =
              row.status.value === 'Active'
                ? 'positive'
                : row.status.value === 'Inactive'
                  ? 'notice'
                  : 'information'

            return (
              <React.Fragment key={row.id}>
                {/* Status badge */}
                <Core.GdsBadge
                  slot={`status:${row.id}:value`}
                  variant={statusVariant}
                >
                  {row.status.value}
                </Core.GdsBadge>

                {/* Email icon */}
                {/* <gds-icon-copy slot={`email:${row.id}:email-icon`} /> */}

                {/* Email action link */}
                <Core.GdsLink
                  slot={`email:${row.id}:email-action`}
                  href={`mailto:${row.email.value}`}
                >
                  Send email
                </Core.GdsLink>
              </React.Fragment>
            )
          })}
        </Core.GdsTable>
      </Core.GdsTheme>
      {children}
    </div>
  )
}
