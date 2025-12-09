'use client'

import * as Core from '@sebgroup/green-core/react'
import { useTable } from './table.provider'

export default function TableSettings() {
  const { tableSettings, updateSetting, setTableSettings } = useTable()

  const getSelectedFeatures = () => {
    const features = []
    if (tableSettings.selectable) features.push('selectable')
    if (tableSettings.searchable) features.push('searchable')
    if (tableSettings.settings) features.push('settings')
    if (tableSettings.striped) features.push('striped')
    return features
  }

  const handleFeaturesChange = (e: React.FormEvent<HTMLElement>) => {
    const customElement = e.target as HTMLElement & { value: string[] }
    const selectedFeatures = customElement.value || []

    const newSettings = {
      ...tableSettings,
      selectable: selectedFeatures.includes('selectable'),
      searchable: selectedFeatures.includes('searchable'),
      settings: selectedFeatures.includes('settings'),
      striped: selectedFeatures.includes('striped'),
    }

    setTableSettings(newSettings)
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="m">
      <Core.GdsDropdown
        label="Features"
        size="small"
        multiple
        value={getSelectedFeatures()}
        onChange={handleFeaturesChange}
      >
        <Core.GdsOption value="selectable">Selectable</Core.GdsOption>
        <Core.GdsOption value="searchable">Searchable</Core.GdsOption>
        <Core.GdsOption value="settings">Settings</Core.GdsOption>
        <Core.GdsOption value="striped">Striped</Core.GdsOption>
      </Core.GdsDropdown>

      <Core.GdsDropdown
        label="Density"
        size="small"
        value={tableSettings.density}
        onChange={(e: React.FormEvent<HTMLElement>) => {
          const customElement = e.target as HTMLElement & { value: string }
          updateSetting('density', customElement.value)
        }}
      >
        <Core.GdsOption value="comfortable">Comfortable</Core.GdsOption>
        <Core.GdsOption value="compact">Compact</Core.GdsOption>
        <Core.GdsOption value="spacious">Spacious</Core.GdsOption>
      </Core.GdsDropdown>

      <Core.GdsDropdown
        label="Variant"
        size="small"
        value={tableSettings.variant}
        onChange={(e: React.FormEvent<HTMLElement>) => {
          const customElement = e.target as HTMLElement & { value: string }
          updateSetting('variant', customElement.value)
        }}
      >
        <Core.GdsOption value="primary">Primary</Core.GdsOption>
        <Core.GdsOption value="secondary">Secondary</Core.GdsOption>
        <Core.GdsOption value="tertiary">Tertiary</Core.GdsOption>
      </Core.GdsDropdown>

      <Core.GdsInput
        label="Rows per page"
        size="small"
        type="number"
        value={String(tableSettings.rows)}
        onInput={(e: any) => updateSetting('rows', Number(e.target.value))}
      />

      <Core.GdsInput
        label="Height"
        size="small"
        value={tableSettings.height || ''}
        onInput={(e: any) =>
          updateSetting('height', e.target.value || undefined)
        }
      />
    </Core.GdsFlex>
  )
}
