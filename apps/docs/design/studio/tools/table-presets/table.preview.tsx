// table/table.preview.tsx
'use client'

import * as Core from '@sebgroup/green-core/react'
import { useTableBuilder } from './table.core'
import { FEEDBACK_PRESET, USERS_PRESET } from './table.data'

export default function TablePreview() {
  const { config } = useTableBuilder()

  const dataProvider = async (request: any) => {
    const preset = config.preset === 'users' ? USERS_PRESET : FEEDBACK_PRESET
    const generator = preset.dataGenerator

    const allData = Array.from({ length: 100 }, (_, i) => generator(i))

    // Search
    let processedData = [...allData]
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
      processedData.sort((a: any, b: any) => {
        const aValue = String(a[request.sortColumn])
        const bValue = String(b[request.sortColumn])
        return request.sortDirection === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      })
    }

    // Pagination
    const start = (request.page - 1) * request.rows
    const end = start + request.rows
    const pageData = processedData.slice(start, end)

    return { rows: pageData, total: processedData.length }
  }

  // Process columns to convert cell types
  const processColumns = (columns: any[]) => {
    return columns.map((col) => {
      if (!col.cell) return col

      const processed = { ...col, cell: {} }

      // Process each cell slot
      Object.keys(col.cell).forEach((slot) => {
        const cellConfig = col.cell[slot]

        if (cellConfig.type === 'badge') {
          processed.cell[slot] = {
            type: 'badge',
            value: (row: any) => row[cellConfig.value],
            variant: (row: any) =>
              cellConfig.variant === 'status'
                ? row.status === 'Active'
                  ? 'positive'
                  : 'negative'
                : cellConfig.variant,
            size: cellConfig.size,
          }
        } else if (cellConfig.type === 'image') {
          processed.cell[slot] = {
            type: 'image',
            src: (row: any) => row[cellConfig.src],
            alt: (row: any) => row[cellConfig.alt],
            width: cellConfig.width,
            height: cellConfig.height,
          }
        } else if (cellConfig.type === 'formatted-number') {
          processed.cell[slot] = {
            type: 'formatted-number',
            value: (row: any) => row[cellConfig.value],
          }
        } else if (cellConfig.type === 'formatted-account') {
          processed.cell[slot] = {
            type: 'formatted-account',
            value: (row: any) => row[cellConfig.value],
            format: cellConfig.format,
          }
        } else if (cellConfig.type === 'formatted-date') {
          processed.cell[slot] = {
            type: 'formatted-date',
            value: (row: any) => row[cellConfig.value],
            locale: cellConfig.locale,
            format: cellConfig.format,
          }
        } else {
          processed.cell[slot] = cellConfig
        }
      })

      return processed
    })
  }

  const columns =
    config.preset === 'custom'
      ? config.columns
      : config.preset === 'users'
        ? processColumns(USERS_PRESET.columns)
        : processColumns(FEEDBACK_PRESET.columns)

  if (columns.length === 0) {
    return (
      <Core.GdsFlex align-items="center" justify-content="center" height="100%">
        <Core.GdsText>
          Select a preset or add columns to get started
        </Core.GdsText>
      </Core.GdsFlex>
    )
  }

  return (
    <Core.GdsTable
      columns={columns as any}
      data={dataProvider}
      {...config.settings}
      options={[5, 10, 20, 50, 100]}
    />
  )
}
