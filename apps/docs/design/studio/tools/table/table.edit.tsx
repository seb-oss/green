'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useTable } from './table.provider'

export default function TableEdit() {
  const { customColumns, setCustomColumns } = useTable()
  const [columnName, setColumnName] = useState('')

  const addColumn = () => {
    if (!columnName) return
    setCustomColumns([
      ...customColumns,
      {
        key: columnName,
        label: columnName,
        sortable: false,
        align: '',
        justify: '',
        width: '',
      },
    ])
    setColumnName('')
  }

  const removeColumn = (index: number) => {
    setCustomColumns(customColumns.filter((_, i) => i !== index))
  }

  const updateColumn = (index: number, field: string, value: any) => {
    const updated = [...customColumns]
    updated[index] = { ...updated[index], [field]: value }
    setCustomColumns(updated)
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="m">
      <Core.GdsText font="heading-s">Custom Table</Core.GdsText>

      <Core.GdsInput
        label="Column Name"
        size="small"
        value={columnName}
        onInput={(e: any) => setColumnName(e.target.value)}
      />
      <Core.GdsButton size="small" onClick={addColumn}>
        <Core.IconPlusSmall slot="lead" />
        Add Column
      </Core.GdsButton>

      <Core.GdsDivider />

      {customColumns.length === 0 && (
        <Core.GdsText font-size="detail" color="secondary" text-align="center">
          No columns added yet. Add your first column above.
        </Core.GdsText>
      )}

      {customColumns.map((col, index) => (
        <Core.GdsCard key={index} variant="tertiary" padding="s">
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsFlex align-items="center" justify-content="space-between">
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
              onInput={(e: any) => updateColumn(index, 'label', e.target.value)}
            />

            <Core.GdsCheckbox
              label="Sortable"
              checked={col.sortable}
              onChange={(e: any) =>
                updateColumn(index, 'sortable', e.target.checked)
              }
            />

            <Core.GdsDropdown
              label="Align"
              size="small"
              value={col.align || ''}
              onChange={(e: React.FormEvent<HTMLElement>) => {
                const customElement = e.target as HTMLElement & {
                  value: string
                }
                updateColumn(index, 'align', customElement.value || undefined)
              }}
            >
              <Core.GdsOption value="">None</Core.GdsOption>
              <Core.GdsOption value="start">Start</Core.GdsOption>
              <Core.GdsOption value="center">Center</Core.GdsOption>
              <Core.GdsOption value="end">End</Core.GdsOption>
            </Core.GdsDropdown>

            <Core.GdsDropdown
              label="Justify"
              size="small"
              value={col.justify || ''}
              onChange={(e: React.FormEvent<HTMLElement>) => {
                const customElement = e.target as HTMLElement & {
                  value: string
                }
                updateColumn(index, 'justify', customElement.value || undefined)
              }}
            >
              <Core.GdsOption value="">None</Core.GdsOption>
              <Core.GdsOption value="start">Start</Core.GdsOption>
              <Core.GdsOption value="center">Center</Core.GdsOption>
              <Core.GdsOption value="end">End</Core.GdsOption>
              <Core.GdsOption value="space-between">
                Space Between
              </Core.GdsOption>
            </Core.GdsDropdown>

            <Core.GdsInput
              label="Width"
              size="small"
              value={col.width || ''}
              onInput={(e: any) =>
                updateColumn(index, 'width', e.target.value || undefined)
              }
            />
          </Core.GdsFlex>
        </Core.GdsCard>
      ))}
    </Core.GdsFlex>
  )
}
