'use client'

import React, { createContext, ReactNode, useContext, useState } from 'react'

type SlotType = 'lead' | 'value' | 'trail'

interface CellConfig {
  type: string
  props: Record<string, any>
}

interface SlotConfig {
  lead?: CellConfig
  value?: CellConfig
  trail?: CellConfig
}

interface ColumnConfig {
  key: string
  label: string
  sortable: boolean
  visible: boolean
  width?: string
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end' | 'space-between'
  cell?: SlotConfig
}

interface TableSettings {
  density: 'comfortable' | 'compact' | 'spacious'
  variant: 'primary' | 'secondary' | 'tertiary'
  selectable: boolean
  responsive: boolean
  plain: boolean
  searchable: boolean
  settings: boolean
  striped: boolean
  nocache: boolean
  height?: string
  rows: number
  page: number
  options: number[]
}

interface TableContextType {
  columns: ColumnConfig[]
  tableSettings: TableSettings
  sortingEnabled: boolean
  addColumn: () => void
  removeColumn: (index: number) => void
  updateColumn: (index: number, column: Partial<ColumnConfig>) => void
  moveColumn: (index: number, direction: 'up' | 'down') => void
  updateTableSettings: (settings: Partial<TableSettings>) => void
  setSortingEnabled: (enabled: boolean) => void
  getTableConfig: () => any
}

const TableContext = createContext<TableContextType | undefined>(undefined)

export const useTableBuilder = () => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error('useTableBuilder must be used within TableBuilderProvider')
  }
  return context
}

interface TableBuilderProviderProps {
  children: ReactNode
}

export const TableBuilderProvider: React.FC<TableBuilderProviderProps> = ({
  children,
}) => {
  const [columns, setColumns] = useState<ColumnConfig[]>([
    {
      key: 'column_1',
      label: 'Column 1',
      sortable: false,
      visible: true,
    },
  ])

  const [tableSettings, setTableSettings] = useState<TableSettings>({
    density: 'comfortable',
    variant: 'secondary',
    selectable: false,
    responsive: false,
    plain: false,
    searchable: false,
    settings: false,
    striped: false,
    nocache: false,
    rows: 10,
    page: 1,
    options: [5, 10, 20, 50, 100],
  })

  const [sortingEnabled, setSortingEnabled] = useState(false)

  const addColumn = () => {
    const newColumn: ColumnConfig = {
      key: `column_${columns.length + 1}`,
      label: `Column ${columns.length + 1}`,
      sortable: false,
      visible: true,
    }
    setColumns([...columns, newColumn])
  }

  const removeColumn = (index: number) => {
    setColumns(columns.filter((_, i) => i !== index))
  }

  const updateColumn = (index: number, updates: Partial<ColumnConfig>) => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns]
      newColumns[index] = { ...newColumns[index], ...updates }
      return newColumns
    })
  }

  const moveColumn = (index: number, direction: 'up' | 'down') => {
    setColumns((prevColumns) => {
      const newColumns = [...prevColumns]
      const targetIndex = direction === 'up' ? index - 1 : index + 1

      if (targetIndex < 0 || targetIndex >= newColumns.length)
        return prevColumns
      ;[newColumns[index], newColumns[targetIndex]] = [
        newColumns[targetIndex],
        newColumns[index],
      ]
      return newColumns
    })
  }

  const updateTableSettings = (settings: Partial<TableSettings>) => {
    setTableSettings((prev) => ({ ...prev, ...settings }))
  }

  const getTableConfig = () => {
    return {
      columns: columns.map((col) => ({
        key: col.key,
        label: col.label,
        sortable: col.sortable,
        visible: col.visible,
        width: col.width,
        align: col.align,
        justify: col.justify,
        cell: col.cell,
      })),
      settings: tableSettings,
    }
  }

  return (
    <TableContext.Provider
      value={{
        columns,
        tableSettings,
        sortingEnabled,
        addColumn,
        removeColumn,
        updateColumn,
        moveColumn,
        updateTableSettings,
        setSortingEnabled,
        getTableConfig,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}
