'use client'

import { useEffect, useRef } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useTable } from './table.provider'

const USERS_DATA = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@domain.tld`,
  role: ['Admin', 'User'][i % 2],
  status: ['Active', 'Inactive'][i % 2],
}))

const FEEDBACK_DATA = Array.from({ length: 50 }, (_, i) => ({
  name: `Person ${i + 1}`,
  feedback: `Feedback ${i + 1}`,
  department: ['Engineering', 'Sales'][i % 2],
  status: ['Active', 'Inactive'][i % 2],
}))

export default function TablePreview() {
  const {
    activePreset,
    customColumns,
    tableSettings,
    updateSetting,
    searchQuery,
    setSearchQuery,
  } = useTable()
  const tableRef = useRef<any>(null)

  useEffect(() => {
    const table = tableRef.current
    if (!table) return

    const handleRowsChange = (e: CustomEvent) => {
      updateSetting('rows', e.detail.rows)
    }

    table.addEventListener('gds-rows-change', handleRowsChange)

    return () => {
      table.removeEventListener('gds-rows-change', handleRowsChange)
    }
  }, [updateSetting])

  // Sync search input with URL
  useEffect(() => {
    const table = tableRef.current
    if (!table) return

    const searchInput = table.shadowRoot?.querySelector(
      'gds-input[type="text"]',
    )
    if (searchInput && searchQuery) {
      searchInput.value = searchQuery
    }
  }, [searchQuery])

  // Listen to search input changes
  useEffect(() => {
    const table = tableRef.current
    if (!table) return

    const handleSearch = (e: Event) => {
      const input = e.target as HTMLInputElement
      setSearchQuery(input.value)
    }

    const searchInput = table.shadowRoot?.querySelector(
      'gds-input[type="text"]',
    )
    if (searchInput) {
      searchInput.addEventListener('input', handleSearch)
      return () => {
        searchInput.removeEventListener('input', handleSearch)
      }
    }
  }, [setSearchQuery])

  const dataProvider = async (request: any) => {
    const data =
      activePreset === 'users'
        ? USERS_DATA
        : activePreset === 'feedback'
          ? FEEDBACK_DATA
          : []

    let filteredData = [...data]

    // Apply search filter
    const query = searchQuery || request.searchQuery
    if (query) {
      const lowerQuery = query.toLowerCase()
      filteredData = filteredData.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(lowerQuery),
        ),
      )
    }

    const start = (request.page - 1) * request.rows
    const end = start + request.rows
    return { rows: filteredData.slice(start, end), total: filteredData.length }
  }

  const columns =
    activePreset === 'users'
      ? [
          { key: 'id', label: 'ID' },
          { key: 'name', label: 'Name' },
          { key: 'email', label: 'Email' },
          { key: 'role', label: 'Role' },
          { key: 'status', label: 'Status' },
        ]
      : activePreset === 'feedback'
        ? [
            { key: 'name', label: 'Name' },
            { key: 'feedback', label: 'Feedback' },
            { key: 'department', label: 'Department' },
            { key: 'status', label: 'Status' },
          ]
        : customColumns.length > 0
          ? customColumns
          : []

  const customData =
    customColumns.length > 0
      ? Array.from({ length: 20 }, (_, i) => {
          const row: any = {}
          customColumns.forEach((col) => {
            row[col.key] = `${col.label} ${i + 1}`
          })
          return row
        })
      : []

  const customDataProvider = async (request: any) => {
    let filteredData = [...customData]

    // Apply search filter
    const query = searchQuery || request.searchQuery
    if (query) {
      const lowerQuery = query.toLowerCase()
      filteredData = filteredData.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(lowerQuery),
        ),
      )
    }

    const start = (request.page - 1) * request.rows
    const end = start + request.rows
    return { rows: filteredData.slice(start, end), total: filteredData.length }
  }

  if (columns.length === 0) {
    return <Core.GdsText>Select a preset or add columns</Core.GdsText>
  }

  return (
    <Core.GdsTable
      ref={tableRef}
      columns={columns as any}
      data={activePreset === 'custom' ? customDataProvider : dataProvider}
      density={tableSettings.density}
      variant={tableSettings.variant}
      selectable={tableSettings.selectable}
      searchable={tableSettings.searchable}
      settings={tableSettings.settings}
      plain={tableSettings.plain}
      striped={tableSettings.striped}
      rows={tableSettings.rows}
      height={tableSettings.height}
      options={[5, 10, 20, 50, 100]}
    />
  )
}
