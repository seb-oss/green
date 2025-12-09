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
      <Core.GdsFlex align-items="center" gap="s">
        <Core.GdsInput
          plain
          value={columnName}
          onInput={(e: any) => setColumnName(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              addColumn()
            }
          }}
        >
          <Core.IconPencelLine slot="lead" />
        </Core.GdsInput>
        <Core.GdsButton size="small" onClick={addColumn}>
          <Core.IconPlusSmall />
        </Core.GdsButton>
      </Core.GdsFlex>

      {customColumns.length === 0 && (
        <Core.GdsCard variant="secondary" gap="0">
          <Core.GdsText tag="h4">No columns added yet.</Core.GdsText>
          <Core.GdsText tag="p">Add your first column above.</Core.GdsText>
        </Core.GdsCard>
      )}

      {customColumns.map((col, index) => (
        <Core.GdsCard key={index} variant="primary" padding="xs">
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsFlex
              align-items="center"
              justify-content="space-between"
              padding="0 s"
            >
              <Core.GdsText>{col.key}</Core.GdsText>
              <Core.GdsButton
                size="xs"
                rank="tertiary"
                variant="negative"
                onClick={() => removeColumn(index)}
              >
                <Core.IconTrashCan />
              </Core.GdsButton>
            </Core.GdsFlex>
            <Core.GdsCard variant="secondary" padding="m">
              <Core.GdsInput
                label="Label"
                size="small"
                value={col.label}
                onInput={(e: any) =>
                  updateColumn(index, 'label', e.target.value)
                }
              />

              <Core.GdsFlex gap="s">
                <Core.GdsDropdown
                  label="Align"
                  size="small"
                  value={col.align || ''}
                  onChange={(e: React.FormEvent<HTMLElement>) => {
                    const customElement = e.target as HTMLElement & {
                      value: string
                    }
                    updateColumn(
                      index,
                      'align',
                      customElement.value || undefined,
                    )
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
                    updateColumn(
                      index,
                      'justify',
                      customElement.value || undefined,
                    )
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
              </Core.GdsFlex>
              <Core.GdsInput
                label="Width"
                size="small"
                value={col.width || ''}
                onInput={(e: any) =>
                  updateColumn(index, 'width', e.target.value || undefined)
                }
              />

              <Core.GdsFlex padding="0 0 0 xs">
                <Core.GdsCheckbox
                  label="Sortable"
                  checked={col.sortable}
                  onChange={(e: any) =>
                    updateColumn(index, 'sortable', e.target.checked)
                  }
                />
              </Core.GdsFlex>
            </Core.GdsCard>
          </Core.GdsFlex>
        </Core.GdsCard>
      ))}
    </Core.GdsFlex>
  )
}
