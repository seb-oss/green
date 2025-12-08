// table/table.config.tsx
'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useTableBuilder } from './table.core'

export default function TableConfigurator() {
  const { config, updateConfig } = useTableBuilder()
  const [columnName, setColumnName] = useState('')

  const addColumn = () => {
    if (!columnName) return
    const newColumns = [
      ...config.columns,
      { key: columnName, label: columnName, sortable: false },
    ]
    updateConfig({ columns: newColumns })
    setColumnName('')
  }

  const removeColumn = (index: number) => {
    const newColumns = config.columns.filter((_, i) => i !== index)
    updateConfig({ columns: newColumns })
  }

  const updateColumn = (index: number, updates: any) => {
    const newColumns = [...config.columns]
    newColumns[index] = { ...newColumns[index], ...updates }
    updateConfig({ columns: newColumns })
  }

  const updateSetting = (key: string, value: any) => {
    updateConfig({
      settings: { ...config.settings, [key]: value },
    })
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="m">
      {/* Add Column */}
      <Core.GdsFlex flex-direction="column" gap="s">
        <Core.GdsText font-weight="bold">Add Column</Core.GdsText>
        <Core.GdsInput
          label="Column Name"
          size="small"
          value={columnName}
          onInput={(e: any) => setColumnName(e.target.value)}
        />
        <Core.GdsButton size="small" onClick={addColumn} disabled={!columnName}>
          <Core.IconPlusSmall slot="lead" />
          Add Column
        </Core.GdsButton>
      </Core.GdsFlex>

      <Core.GdsDivider />

      {/* Columns List */}
      <Core.GdsFlex flex-direction="column" gap="s">
        <Core.GdsText font-weight="bold">
          Columns ({config.columns.length})
        </Core.GdsText>

        {config.columns.map((col: any, index: number) => (
          <Core.GdsCard key={index} variant="tertiary" padding="s">
            <Core.GdsFlex flex-direction="column" gap="xs">
              <Core.GdsFlex
                align-items="center"
                justify-content="space-between"
              >
                <Core.GdsText font-weight="bold">{col.key}</Core.GdsText>
                <Core.GdsButton
                  size="xs"
                  rank="tertiary"
                  variant="negative"
                  onClick={() => removeColumn(index)}
                >
                  <Core.IconTrashCan />
                </Core.GdsButton>
              </Core.GdsFlex>

              <Core.GdsInput
                label="Label"
                size="small"
                value={col.label}
                onInput={(e: any) =>
                  updateColumn(index, { label: e.target.value })
                }
              />

              <Core.GdsCheckbox
                label="Sortable"
                checked={col.sortable}
                onChange={(e: any) =>
                  updateColumn(index, { sortable: e.target.checked })
                }
              />
            </Core.GdsFlex>
          </Core.GdsCard>
        ))}
      </Core.GdsFlex>

      <Core.GdsDivider />

      {/* Settings */}
      <Core.GdsFlex flex-direction="column" gap="s">
        <Core.GdsText font-weight="bold">Settings</Core.GdsText>

        <Core.GdsDropdown
          label="Density"
          size="small"
          value={config.settings.density}
          onChange={(e: any) => updateSetting('density', e.target.value)}
        >
          <Core.GdsOption value="comfortable">Comfortable</Core.GdsOption>
          <Core.GdsOption value="compact">Compact</Core.GdsOption>
          <Core.GdsOption value="spacious">Spacious</Core.GdsOption>
        </Core.GdsDropdown>

        <Core.GdsInput
          label="Rows per page"
          size="small"
          type="number"
          value={String(config.settings.rows)}
          onInput={(e: any) => updateSetting('rows', Number(e.target.value))}
        />

        <Core.GdsCheckboxGroup size="small">
          <Core.GdsCheckbox
            label="Searchable"
            checked={config.settings.searchable}
            onChange={(e: any) => updateSetting('searchable', e.target.checked)}
          />
          <Core.GdsCheckbox
            label="Selectable"
            checked={config.settings.selectable}
            onChange={(e: any) => updateSetting('selectable', e.target.checked)}
          />
          <Core.GdsCheckbox
            label="Striped"
            checked={config.settings.striped}
            onChange={(e: any) => updateSetting('striped', e.target.checked)}
          />
        </Core.GdsCheckboxGroup>
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
