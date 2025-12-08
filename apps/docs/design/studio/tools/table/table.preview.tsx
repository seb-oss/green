'use client'

import { useEffect, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useTableBuilder } from './table.context'

export default function TablePreview() {
  const { columns, tableSettings } = useTableBuilder()
  const [key, setKey] = useState(0)

  // Force re-render when columns or settings change
  useEffect(() => {
    setKey((prev) => prev + 1)
  }, [columns, tableSettings])

  // Mock data provider
  const mockDataProvider = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const mockRows = Array.from({ length: 10 }, (_, i) => {
      const row: any = {}
      columns.forEach((col) => {
        row[col.key] = `${col.label} ${i + 1}`
      })
      return row
    })

    return {
      rows: mockRows,
      total: mockRows.length,
    }
  }

  if (columns.length === 0) {
    return (
      <Core.GdsFlex align-items="center" justify-content="center" padding="xl">
        <Core.GdsText>Add columns to see preview</Core.GdsText>
      </Core.GdsFlex>
    )
  }

  return (
    <Core.GdsTable
      key={key}
      columns={columns as any}
      data={mockDataProvider}
      density={tableSettings.density}
      variant={tableSettings.variant}
      selectable={tableSettings.selectable}
      responsive={tableSettings.responsive}
      plain={tableSettings.plain}
      searchable={tableSettings.searchable}
      settings={tableSettings.settings}
      striped={tableSettings.striped}
      nocache={tableSettings.nocache}
      height={tableSettings.height}
      rows={tableSettings.rows}
      page={tableSettings.page}
      options={tableSettings.options}
    />
  )
}
