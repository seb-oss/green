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
  const { activePreset, customColumns, tableSettings, updateSetting } =
    useTable()
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

  const dataProvider = async (request: any) => {
    const data =
      activePreset === 'users'
        ? USERS_DATA
        : activePreset === 'feedback'
          ? FEEDBACK_DATA
          : []
    const start = (request.page - 1) * request.rows
    const end = start + request.rows
    return { rows: data.slice(start, end), total: data.length }
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
    const start = (request.page - 1) * request.rows
    const end = start + request.rows
    return { rows: customData.slice(start, end), total: customData.length }
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
      striped={tableSettings.striped}
      rows={tableSettings.rows}
      height={tableSettings.height}
      options={[5, 10, 20, 50, 100]}
    />
  )
}
