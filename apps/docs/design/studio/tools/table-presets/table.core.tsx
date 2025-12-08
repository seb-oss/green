// table/table.core.tsx
'use client'

import React, { createContext, ReactNode, useContext } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface TableConfig {
  preset: 'users' | 'feedback' | 'custom'
  columns: any[]
  settings: {
    density: 'comfortable' | 'compact' | 'spacious'
    variant: 'primary' | 'secondary' | 'tertiary'
    selectable: boolean
    searchable: boolean
    settings: boolean
    striped: boolean
    responsive: boolean
    plain: boolean
    rows: number
  }
}

interface TableBuilderContextType {
  config: TableConfig
  updateConfig: (updates: Partial<TableConfig>) => void
  loadPreset: (preset: 'users' | 'feedback') => void
}

const TableBuilderContext = createContext<TableBuilderContextType | undefined>(
  undefined,
)

export const useTableBuilder = () => {
  const context = useContext(TableBuilderContext)
  if (!context)
    throw new Error('useTableBuilder must be used within TableBuilderProvider')
  return context
}

export const TableBuilderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  // Parse config from URL
  const getConfigFromURL = (): TableConfig => {
    const preset = params.get('preset') as
      | 'users'
      | 'feedback'
      | 'custom'
      | null
    const density = params.get('density') as any
    const variant = params.get('variant') as any
    const rows = params.get('rows')

    if (preset && preset !== 'custom') {
      return {
        preset,
        columns: [],
        settings: {
          density: density || 'comfortable',
          variant: variant || 'secondary',
          selectable: params.get('selectable') === 'true',
          searchable: params.get('searchable') === 'true',
          settings: params.get('settings') === 'true',
          striped: params.get('striped') === 'true',
          responsive: params.get('responsive') === 'true',
          plain: params.get('plain') === 'true',
          rows: rows ? Number(rows) : 10,
        },
      }
    }

    return {
      preset: 'custom',
      columns: [],
      settings: {
        density: 'comfortable',
        variant: 'secondary',
        selectable: false,
        searchable: true,
        settings: true,
        striped: false,
        responsive: false,
        plain: false,
        rows: 10,
      },
    }
  }

  const config = getConfigFromURL()

  const updateConfig = (updates: Partial<TableConfig>) => {
    const newConfig = { ...config, ...updates }
    const urlParams = new URLSearchParams()

    // Add preset
    urlParams.set('preset', newConfig.preset)

    // Add settings only if not default
    if (newConfig.settings.density !== 'comfortable')
      urlParams.set('density', newConfig.settings.density)
    if (newConfig.settings.variant !== 'secondary')
      urlParams.set('variant', newConfig.settings.variant)
    if (newConfig.settings.selectable) urlParams.set('selectable', 'true')
    if (newConfig.settings.searchable) urlParams.set('searchable', 'true')
    if (newConfig.settings.settings) urlParams.set('settings', 'true')
    if (newConfig.settings.striped) urlParams.set('striped', 'true')
    if (newConfig.settings.responsive) urlParams.set('responsive', 'true')
    if (newConfig.settings.plain) urlParams.set('plain', 'true')
    if (newConfig.settings.rows !== 10)
      urlParams.set('rows', String(newConfig.settings.rows))

    // Use decodeURIComponent for readable URL
    const url = `${pathname}?${decodeURIComponent(urlParams.toString())}`
    router.replace(url)
  }

  const loadPreset = (preset: 'users' | 'feedback') => {
    updateConfig({ preset, columns: [] })
  }

  return (
    <TableBuilderContext.Provider value={{ config, updateConfig, loadPreset }}>
      {children}
    </TableBuilderContext.Provider>
  )
}
