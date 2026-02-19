'use client'

import React, { useCallback, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'

// ---------------------------------------------------------------------------
// Columns — mirrors Users.Columns from table.stories.data.ts
// ---------------------------------------------------------------------------

const columns = [
  { key: 'id', label: 'ID', sortable: false },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true, justify: 'space-between' },
  { key: 'role', label: 'Role', sortable: true, visible: false },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'department', label: 'Department', sortable: true },
  { key: 'amount', label: 'Amount', sortable: true, justify: 'end' },
  { key: 'account', label: 'Account', sortable: true },
  { key: 'login', label: 'Last Login', sortable: true },
  { key: 'download', label: 'Download' },
]

const actions = { label: 'Actions', justify: 'end' }

// ---------------------------------------------------------------------------
// Slot helper — mirrors core's Slot() with toString/valueOf prototype
// ---------------------------------------------------------------------------

const slotPrototype = {
  toString(this: any) {
    return String(this.value ?? '')
  },
  valueOf(this: any) {
    return this.value
  },
  [Symbol.toPrimitive](this: any, hint: string) {
    if (hint === 'number') return Number(this.value)
    return String(this.value ?? '')
  },
}

const Slot = (value: any, slots: string[]) =>
  Object.assign(Object.create(slotPrototype), { value, slots })

// ---------------------------------------------------------------------------
// Normalise a raw API row into slot-annotated shape
// ---------------------------------------------------------------------------

const normalizeRow = (row: any) => ({
  ...row,
  name: Slot(row.name, ['avatar', 'value']),
  email: Slot(row.email, ['value', 'copy-button']),
  status: Slot(row.status, ['status']),
  amount: Slot(row.amount, ['amount', 'currency']),
  account: Slot(row.account, ['main']),
  login: Slot(row.lastLogin, ['main']),
  download: Slot(row.download ?? '#', ['main']),
})

// ---------------------------------------------------------------------------
// Data provider — fetches from the same API as Storybook, with caching
// ---------------------------------------------------------------------------

const USERS_URL = 'https://api.seb.io/components/table/table.users.json'
let usersCache: any[] | null = null
let usersPromise: Promise<any[]> | null = null

const loadUsers = async (): Promise<any[]> => {
  if (usersCache) return usersCache
  if (usersPromise) return usersPromise

  usersPromise = fetch(USERS_URL)
    .then((res) => res.json())
    .then((data: any[]) => {
      usersCache = data.map(normalizeRow)
      return usersCache!
    })

  return usersPromise
}

const dataProvider = async (request: any) => {
  let data = await loadUsers()

  if (request.searchQuery) {
    const q = request.searchQuery.toLowerCase()
    data = data.filter((item: any) =>
      Object.values(item).some((v: any) =>
        v?.toString().toLowerCase().includes(q),
      ),
    )
  }

  if (request.sortColumn && data.length > 0) {
    const key = request.sortColumn
    data = [...data].sort((a: any, b: any) => {
      const aVal = a[key]?.toString() ?? ''
      const bVal = b[key]?.toString() ?? ''
      return request.sortDirection === 'asc'
        ? aVal.localeCompare(bVal)
        : bVal.localeCompare(aVal)
    })
  }

  const start = (request.page - 1) * request.rows
  return {
    rows: data.slice(start, start + request.rows),
    total: data.length,
  }
}

// ---------------------------------------------------------------------------
// React slot content — rendered as children of <GdsTable>
// Re-created on every data load with the current page's rows.
// ---------------------------------------------------------------------------

function SlotContent({ rows }: { rows: any[] }) {
  return (
    <>
      {rows.map((row: any) => (
        <React.Fragment key={row.id}>
          {/* name: avatar */}
          <Core.GdsImg
            slot={`name:${row.id}:avatar`}
            src={row.avatarUrl ?? '#'}
            alt={String(row.name)}
            width="xl"
            height="xl"
          />

          {/* email: copy button */}
          <Core.GdsButton
            slot={`email:${row.id}:copy-button`}
            rank="tertiary"
            size="small"
          >
            <Core.IconCopy />
          </Core.GdsButton>

          {/* status: badge */}
          <Core.GdsBadge
            slot={`status:${row.id}:status`}
            variant={String(row.status) === 'Active' ? 'positive' : 'negative'}
            size="small"
          >
            {String(row.status)}
          </Core.GdsBadge>

          {/* amount: formatted number + currency */}
          <Core.GdsFormattedNumber
            slot={`amount:${row.id}:amount`}
            value={row.amount}
          />
          <Core.GdsBadge slot={`amount:${row.id}:currency`} size="small">
            SEK
          </Core.GdsBadge>

          {/* account: formatted account */}
          <Core.GdsFormattedAccount
            slot={`account:${row.id}:main`}
            account={row.account}
            format="seb-account"
          />

          {/* login: formatted date */}
          <Core.GdsFormattedDate
            slot={`login:${row.id}:main`}
            value={String(row.login)}
            locale="sv-SE"
            format="dateLong"
          />

          {/* download: link */}
          <Core.GdsLink
            slot={`download:${row.id}:main`}
            href={row.download ?? '#'}
            text-decoration="underline"
            download
          >
            Download file
          </Core.GdsLink>

          {/* actions: context menu */}
          <Core.GdsContextMenu slot={`actions:${row.id}:main`}>
            <Core.GdsButton slot="trigger" rank="tertiary" size="small">
              <Core.IconDotGridOneHorizontal />
            </Core.GdsButton>
            <Core.GdsMenuItem>Edit {String(row.name)}</Core.GdsMenuItem>
            <Core.GdsMenuItem>Delete</Core.GdsMenuItem>
          </Core.GdsContextMenu>
        </React.Fragment>
      ))}
    </>
  )
}

// ---------------------------------------------------------------------------
// Layout — table lives here, page number syncs with URL
// ---------------------------------------------------------------------------

export default function TableLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const params = useParams()

  // /table → page 1, /table/3 → page 3
  const currentPage = params.page ? Number(params.page) : 1

  // Rows from the latest data load — drives React slot content
  const [loadedRows, setLoadedRows] = useState<any[]>([])

  // Sync pagination → URL
  const handlePageChange = useCallback(
    (e: CustomEvent) => {
      const newPage = e.detail.page
      router.push(newPage === 1 ? '/table' : `/table/${newPage}`)
    },
    [router],
  )

  // Capture loaded rows for slot content rendering
  const handleDataLoaded = useCallback((e: CustomEvent) => {
    setLoadedRows(e.detail.rows)
  }, [])

  return (
    <Core.GdsTheme>
      <Core.GdsFlex flex-direction="column" gap="l" padding="l">
        <Core.GdsTable
          headline="Users"
          summary="All registered users"
          columns={columns as any}
          data={dataProvider}
          actions={actions as any}
          page={currentPage}
          rows={10}
          searchable
          settings
          onGdsPageChange={handlePageChange}
          onGdsTableDataLoaded={handleDataLoaded}
        >
          <SlotContent rows={loadedRows} />
        </Core.GdsTable>

        {children}
      </Core.GdsFlex>
    </Core.GdsTheme>
  )
}
