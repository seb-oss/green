'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Types } from '@sebgroup/green-core/components/table'
import * as Core from '@sebgroup/green-core/react'

export default function TablePlayground() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [columns, setColumns] = useState<Types.Column[]>([
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'status', label: 'Status', sortable: true },
  ])

  const [mockData] = useState([
    { id: 1, name: 'Item 1', status: 'Active', amount: 100 },
    { id: 2, name: 'Item 2', status: 'Inactive', amount: 200 },
    { id: 3, name: 'Item 3', status: 'Active', amount: 300 },
    { id: 4, name: 'Item 4', status: 'Inactive', amount: 400 },
    { id: 5, name: 'Item 5', status: 'Active', amount: 500 },
  ])

  // Parse URL parameters on mount
  useEffect(() => {
    const columnsParam = searchParams.get('columns')
    if (columnsParam) {
      try {
        const parsed = JSON.parse(decodeURIComponent(columnsParam))
        setColumns(parsed)
      } catch (e) {
        console.error('Invalid columns parameter')
      }
    }
  }, [searchParams])

  // Update URL when columns change
  const updateURL = (newColumns: Types.Column[]) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('columns', encodeURIComponent(JSON.stringify(newColumns)))
    router.push(`?${params.toString()}`)
  }

  const dataProvider = async (
    request: Types.Request,
  ): Promise<Types.Response<any>> => {
    let filtered = [...mockData]

    if (request.searchQuery) {
      const query = request.searchQuery.toLowerCase()
      filtered = filtered.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(query),
        ),
      )
    }

    if (request.sortColumn) {
      filtered.sort((a, b) => {
        const aVal = a[request.sortColumn as keyof typeof a]
        const bVal = b[request.sortColumn as keyof typeof b]
        if (aVal < bVal) return request.sortDirection === 'asc' ? -1 : 1
        if (aVal > bVal) return request.sortDirection === 'asc' ? 1 : -1
        return 0
      })
    }

    const start = (request.page - 1) * request.rows
    const end = start + request.rows

    return {
      rows: filtered.slice(start, end),
      total: filtered.length,
    }
  }

  const generateReactCode = () => {
    return `import * as Core from '@sebgroup/green-core/react'
import { Types } from '@sebgroup/green-core/components/table'

const columns: Types.Column[] = ${JSON.stringify(columns, null, 2)}

const dataProvider = async (request: Types.Request): Promise<Types.Response<any>> => {
  // Your data fetching logic here
  return {
    rows: [],
    total: 0,
  }
}

export default function MyTable() {
  return (
    <Core.GdsTable
      columns={columns}
      data={dataProvider}
      searchable
      settings
    />
  )
}`
  }

  const generateAngularCode = () => {
    return `import { Component } from '@angular/core'
import '@sebgroup/green-core/components/table'
import { Types } from '@sebgroup/green-core/components/table'

@Component({
  selector: 'app-table',
  template: \`
    <gds-table
      [columns]="columns"
      [data]="dataProvider"
      searchable
      settings
    ></gds-table>
  \`
})
export class TableComponent {
  columns: Types.Column[] = ${JSON.stringify(columns, null, 2)}

  dataProvider = async (request: Types.Request): Promise<Types.Response<any>> => {
    // Your data fetching logic here
    return {
      rows: [],
      total: 0,
    }
  }
}`
  }

  const generateLitCode = () => {
    return `import { html } from 'lit'
import '@sebgroup/green-core/components/table'
import { Types } from '@sebgroup/green-core/components/table'

const columns: Types.Column[] = ${JSON.stringify(columns, null, 2)}

const dataProvider = async (request: Types.Request): Promise<Types.Response<any>> => {
  // Your data fetching logic here
  return {
    rows: [],
    total: 0,
  }
}

html\`
  <gds-table
    .columns=\${columns}
    .data=\${dataProvider}
    searchable
    settings
  ></gds-table>
\``
  }

  return (
    <Core.GdsTheme>
      <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
        {/* Configuration Panel */}
        <div style={{ flex: '0 0 400px' }}>
          <h2>Configuration</h2>

          <h3>Columns</h3>
          <textarea
            style={{
              width: '100%',
              height: '200px',
              fontFamily: 'monospace',
              fontSize: '12px',
            }}
            value={JSON.stringify(columns, null, 2)}
            onChange={(e) => {
              try {
                const parsed = JSON.parse(e.target.value)
                setColumns(parsed)
                updateURL(parsed)
              } catch (e) {
                // Invalid JSON, don't update
              }
            }}
          />

          <h3>React</h3>
          <textarea
            readOnly
            style={{
              width: '100%',
              height: '300px',
              fontFamily: 'monospace',
              fontSize: '11px',
            }}
            value={generateReactCode()}
          />

          <h3>Angular</h3>
          <textarea
            readOnly
            style={{
              width: '100%',
              height: '300px',
              fontFamily: 'monospace',
              fontSize: '11px',
            }}
            value={generateAngularCode()}
          />

          <h3>Lit</h3>
          <textarea
            readOnly
            style={{
              width: '100%',
              height: '300px',
              fontFamily: 'monospace',
              fontSize: '11px',
            }}
            value={generateLitCode()}
          />
        </div>

        {/* Preview Panel */}
        <div style={{ flex: 1 }}>
          <h2>Preview</h2>
          <Core.GdsTable
            columns={columns}
            data={dataProvider}
            searchable
            settings
            rows={5}
          />
        </div>
      </div>
    </Core.GdsTheme>
  )
}
