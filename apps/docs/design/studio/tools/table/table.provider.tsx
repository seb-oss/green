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

    let columns: any[] = []
    if (columnsParam) {
      try {
        columns = JSON.parse(columnsParam)
      } catch (e) {
        console.error('Failed to parse columns:', e)
      }
    }

    return {
      preset,
      columns,
      settings: {
        density: (searchParams.get('density') as any) || 'comfortable',
        variant: (searchParams.get('variant') as any) || 'secondary',
        selectable: searchParams.get('selectable') === 'true',
        searchable: searchParams.get('searchable') === 'true',
        settings: searchParams.get('settings') === 'true',
        striped: searchParams.get('striped') === 'true',
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

  const updateURL = (
    preset: string,
    columns: any[],
    settings: TableSettings,
  ) => {
    const params = new URLSearchParams()

    params.set('preset', preset)

    if (preset === 'custom' && columns.length > 0) {
      params.set('columns', JSON.stringify(columns))
    }

    if (settings.density !== 'comfortable')
      params.set('density', settings.density)
    if (settings.variant !== 'secondary')
      params.set('variant', settings.variant)
    if (settings.rows !== 10) params.set('rows', String(settings.rows))
    if (settings.height) params.set('height', settings.height)
    if (settings.selectable) params.set('selectable', 'true')
    if (settings.searchable) params.set('searchable', 'true')
    if (settings.settings) params.set('settings', 'true')
    if (settings.striped) params.set('striped', 'true')

    const url = `${pathname}?${params.toString()}`
    router.replace(url, { scroll: false })
  }

  const setActivePreset = (preset: 'users' | 'feedback' | 'custom') => {
    setActivePresetState(preset)
    updateURL(preset, customColumns, tableSettings)
  }

  const setCustomColumns = (columns: any[]) => {
    setCustomColumnsState(columns)
    // Auto-switch to custom when editing columns
    setActivePresetState('custom')
    updateURL('custom', columns, tableSettings)
  }

  const setTableSettings = (settings: TableSettings) => {
    setTableSettingsState(settings)
    updateURL(activePreset, customColumns, settings)
  }

  const updateSetting = (key: string, value: any) => {
    const newSettings = { ...tableSettings, [key]: value }
    setTableSettingsState(newSettings)
    updateURL(activePreset, customColumns, newSettings)
  }

  useEffect(() => {
    const newState = getInitialState()
    setActivePresetState(newState.preset)
    setCustomColumnsState(newState.columns)
    setTableSettingsState(newState.settings)
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
      }}
    >
      {children}
    </TableContext.Provider>
  )
}
