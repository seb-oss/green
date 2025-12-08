// context/table.context.tsx
'use client'

import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { UserData } from './table.data'

interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  visible?: boolean
  width?: string
  align?: 'start' | 'center' | 'end'
  justify?: 'start' | 'center' | 'end' | 'space-between'
  cell?: any
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
}

interface TableContextType {
  columns: TableColumn[]
  tableSettings: TableSettings
  updateColumns: (columns: TableColumn[]) => void
  updateTableSettings: (settings: Partial<TableSettings>) => void
}

const TableContext = createContext<TableContextType | undefined>(undefined)

export const useTable = () => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error('useTable must be used within TableProvider')
  }
  return context
}

const DEFAULT_COLUMNS: TableColumn[] = [
  {
    key: 'id',
    label: 'ID',
    sortable: false,
  },
  {
    key: 'name',
    label: 'Name',
    sortable: true,
    cell: {
      lead: {
        type: 'image',
        src: (row: UserData) => row.avatarUrl,
        alt: (row: UserData) => row.name,
        width: 'xl',
        height: 'xl',
      },
    },
  },
  {
    key: 'email',
    label: 'Email',
    sortable: true,
  },
  {
    key: 'role',
    label: 'Role',
    sortable: true,
  },
  {
    key: 'status',
    label: 'Status',
    sortable: true,
    cell: {
      value: {
        type: 'badge',
        value: (row: UserData) => row.status,
        variant: (row: UserData) =>
          row.status === 'Active' ? 'positive' : 'negative',
      },
    },
  },
  {
    key: 'department',
    label: 'Department',
    sortable: true,
  },
  {
    key: 'amount',
    label: 'Amount',
    sortable: true,
    justify: 'end',
    cell: {
      value: {
        type: 'formatted-number',
        value: (row: UserData) => row.amount,
      },
      trail: {
        type: 'badge',
        value: 'SEK',
      },
    },
  },
  {
    key: 'account',
    label: 'Account',
    sortable: true,
    cell: {
      value: {
        type: 'formatted-account',
        value: (row: UserData) => row.account,
        format: 'seb-account',
      },
    },
  },
  {
    key: 'lastLogin',
    label: 'Last Login',
    sortable: true,
    cell: {
      value: {
        type: 'formatted-date',
        value: (row: UserData) => row.lastLogin,
        locale: 'sv-SE',
        format: 'dateLong',
      },
    },
  },
]

const DEFAULT_SETTINGS: TableSettings = {
  density: 'comfortable',
  variant: 'secondary',
  selectable: false,
  responsive: false,
  plain: false,
  searchable: true,
  settings: true,
  striped: false,
  nocache: false,
  rows: 10,
  page: 1,
}

interface TableProviderProps {
  children: ReactNode
}

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // Parse columns from URL or use defaults
  const getColumnsFromParams = (): TableColumn[] => {
    const columnsParam = searchParams.get('columns')
    if (columnsParam) {
      try {
        // Split by comma and trim whitespace
        const columnKeys = columnsParam.split(',').map((k) => k.trim())
        return DEFAULT_COLUMNS.filter((col) => columnKeys.includes(col.key))
      } catch {
        return DEFAULT_COLUMNS
      }
    }
    return DEFAULT_COLUMNS
  }

  // Parse settings from URL or use defaults
  const getSettingsFromParams = (): TableSettings => {
    return {
      density: (searchParams.get('density') as any) || DEFAULT_SETTINGS.density,
      variant: (searchParams.get('variant') as any) || DEFAULT_SETTINGS.variant,
      selectable: searchParams.get('selectable') === 'true',
      responsive: searchParams.get('responsive') === 'true',
      plain: searchParams.get('plain') === 'true',
      searchable: searchParams.get('searchable') === 'true',
      settings: searchParams.get('settings') === 'true',
      striped: searchParams.get('striped') === 'true',
      nocache: searchParams.get('nocache') === 'true',
      height: searchParams.get('height') || undefined,
      rows: Number(searchParams.get('rows')) || DEFAULT_SETTINGS.rows,
      page: Number(searchParams.get('page')) || DEFAULT_SETTINGS.page,
    }
  }

  const [columns, setColumns] = useState<TableColumn[]>(getColumnsFromParams())
  const [tableSettings, setTableSettings] = useState<TableSettings>(
    getSettingsFromParams(),
  )

  // Update URL params when state changes
  const updateURLParams = (
    newColumns: TableColumn[],
    newSettings: TableSettings,
  ) => {
    const params = new URLSearchParams()

    // Add columns - comma separated without encoding
    if (newColumns.length > 0) {
      const columnsString = newColumns.map((col) => col.key).join(',')
      params.set('columns', columnsString)
    }

    // Add settings - only non-default values
    if (newSettings.density !== DEFAULT_SETTINGS.density) {
      params.set('density', newSettings.density)
    }
    if (newSettings.variant !== DEFAULT_SETTINGS.variant) {
      params.set('variant', newSettings.variant)
    }
    if (newSettings.selectable) params.set('selectable', 'true')
    if (newSettings.responsive) params.set('responsive', 'true')
    if (newSettings.plain) params.set('plain', 'true')
    if (newSettings.searchable) params.set('searchable', 'true')
    if (newSettings.settings) params.set('settings', 'true')
    if (newSettings.striped) params.set('striped', 'true')
    if (newSettings.nocache) params.set('nocache', 'true')
    if (newSettings.height) params.set('height', newSettings.height)
    if (newSettings.rows !== DEFAULT_SETTINGS.rows) {
      params.set('rows', String(newSettings.rows))
    }
    if (newSettings.page !== DEFAULT_SETTINGS.page) {
      params.set('page', String(newSettings.page))
    }

    // Use decodeURIComponent to make URL readable
    const paramsString = params.toString()
    const readableUrl = `${pathname}?${decodeURIComponent(paramsString)}`

    router.replace(readableUrl, { scroll: false })
  }

  const updateColumns = (newColumns: TableColumn[]) => {
    setColumns(newColumns)
    updateURLParams(newColumns, tableSettings)
  }

  const updateTableSettings = (settings: Partial<TableSettings>) => {
    const newSettings = { ...tableSettings, ...settings }
    setTableSettings(newSettings)
    updateURLParams(columns, newSettings)
  }

  // Sync with URL params on mount and when params change
  useEffect(() => {
    const columnsFromParams = getColumnsFromParams()
    const settingsFromParams = getSettingsFromParams()
    setColumns(columnsFromParams)
    setTableSettings(settingsFromParams)
  }, [searchParams])

  return (
    <TableContext.Provider
      value={{
        columns,
        tableSettings,
        updateColumns,
        updateTableSettings,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}
