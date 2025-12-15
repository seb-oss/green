'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface TableSettings {
  density: 'comfortable' | 'compact' | 'spacious'
  variant: 'primary' | 'secondary' | 'tertiary'
  selectable: boolean
  searchable: boolean
  settings: boolean
  striped: boolean
  plain: boolean
  rows: number
  height?: string
}

interface TableContextType {
  activePreset: 'users' | 'feedback' | 'custom'
  setActivePreset: (preset: 'users' | 'feedback' | 'custom') => void
  customColumns: any[]
  setCustomColumns: (columns: any[]) => void
  tableSettings: TableSettings
  setTableSettings: (settings: TableSettings) => void
  updateSetting: (key: string, value: any) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const TableContext = createContext<TableContextType | undefined>(undefined)

export const useTable = () => {
  const context = useContext(TableContext)
  if (!context) throw new Error('useTable must be used within TableProvider')
  return context
}

export const TableProvider = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const getInitialState = () => {
    const preset = (searchParams.get('preset') as any) || 'users'
    const columnsParam = searchParams.get('columns')
    const search = searchParams.get('search') || ''

    let columns: any[] = []
    if (columnsParam) {
      try {
        columns = columnsParam.split('|').map((col) => {
          const [key, label, sortable, align, justify, width] = col.split(':')
          return {
            key,
            label: label || key,
            sortable: sortable === 'true',
            align: align || undefined,
            justify: justify || undefined,
            width: width || undefined,
          }
        })
      } catch (e) {
        console.error('Failed to parse columns:', e)
      }
    }

    return {
      preset,
      columns,
      search,
      settings: {
        density: (searchParams.get('density') as any) || 'comfortable',
        variant: (searchParams.get('variant') as any) || 'secondary',
        selectable: searchParams.get('selectable') === 'true',
        searchable: searchParams.get('searchable') === 'true',
        settings: searchParams.get('settings') === 'true',
        striped: searchParams.get('striped') === 'true',
        plain: searchParams.get('plain') === 'true',
        rows: Number(searchParams.get('rows')) || 10,
        height: searchParams.get('height') || undefined,
      },
    }
  }

  const initial = getInitialState()
  const [activePreset, setActivePresetState] = useState<
    'users' | 'feedback' | 'custom'
  >(initial.preset)
  const [customColumns, setCustomColumnsState] = useState<any[]>(
    initial.columns,
  )
  const [tableSettings, setTableSettingsState] = useState<TableSettings>(
    initial.settings,
  )
  const [searchQuery, setSearchQueryState] = useState<string>(initial.search)

  const updateURL = (
    preset: string,
    columns: any[],
    settings: TableSettings,
    search: string,
  ) => {
    const parts: string[] = []

    parts.push(`preset=${preset}`)

    if (preset === 'custom' && columns.length > 0) {
      const columnsString = columns
        .map((col) => {
          const colParts = [
            col.key,
            col.label || col.key,
            col.sortable ? 'true' : '',
            col.align || '',
            col.justify || '',
            col.width || '',
          ]
          while (colParts[colParts.length - 1] === '') colParts.pop()
          return colParts.join(':')
        })
        .join('|')

      parts.push(`columns=${columnsString}`)
    }

    if (search) parts.push(`search=${encodeURIComponent(search)}`)
    if (settings.density !== 'comfortable')
      parts.push(`density=${settings.density}`)
    if (settings.variant !== 'secondary')
      parts.push(`variant=${settings.variant}`)
    if (settings.rows !== 10) parts.push(`rows=${settings.rows}`)
    if (settings.height) parts.push(`height=${settings.height}`)
    if (settings.selectable) parts.push('selectable=true')
    if (settings.searchable) parts.push('searchable=true')
    if (settings.settings) parts.push('settings=true')
    if (settings.striped) parts.push('striped=true')
    if (settings.plain) parts.push('plain=true')

    const url = `${pathname}?${parts.join('&')}`
    router.replace(url, { scroll: false })
  }

  const setActivePreset = (preset: 'users' | 'feedback' | 'custom') => {
    setActivePresetState(preset)
    updateURL(preset, customColumns, tableSettings, searchQuery)
  }

  const setCustomColumns = (columns: any[]) => {
    setCustomColumnsState(columns)
    setActivePresetState('custom')
    updateURL('custom', columns, tableSettings, searchQuery)
  }

  const setTableSettings = (settings: TableSettings) => {
    setTableSettingsState(settings)
    updateURL(activePreset, customColumns, settings, searchQuery)
  }

  const updateSetting = (key: string, value: any) => {
    const newSettings = { ...tableSettings, [key]: value }
    setTableSettingsState(newSettings)
    updateURL(activePreset, customColumns, newSettings, searchQuery)
  }

  const setSearchQuery = (query: string) => {
    setSearchQueryState(query)
    updateURL(activePreset, customColumns, tableSettings, query)
  }

  useEffect(() => {
    const newState = getInitialState()
    setActivePresetState(newState.preset)
    setCustomColumnsState(newState.columns)
    setTableSettingsState(newState.settings)
    setSearchQueryState(newState.search)
  }, [searchParams])

  return (
    <TableContext.Provider
      value={{
        activePreset,
        setActivePreset,
        customColumns,
        setCustomColumns,
        tableSettings,
        setTableSettings,
        updateSetting,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </TableContext.Provider>
  )
}
