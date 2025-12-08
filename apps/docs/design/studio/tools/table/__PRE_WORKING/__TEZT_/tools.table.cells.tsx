'use client'

import { useState } from 'react'

import { Types } from '@sebgroup/green-core/components/table'
import * as Core from '@sebgroup/green-core/react'

// --- Internal Types for the Configuration UI ---

type CellSlot = 'lead' | 'value' | 'trail'
type CellType =
  | 'none'
  | 'text'
  | 'badge'
  | 'image'
  | 'icon'
  | 'button'
  | 'link'
  | 'context-menu'
  | 'formatted-number'
  | 'formatted-account'
  | 'formatted-date'

interface ConfigColumn {
  id: string
  label: string
  key: string
  sortable: boolean
  // We track the UI state for each slot
  slots: {
    lead: CellType
    value: CellType
    trail: CellType
  }
}

export default function Cells() {
  const [columns, setColumns] = useState<ConfigColumn[]>([
    {
      id: '1',
      label: 'Column Name',
      key: 'col1',
      sortable: false,
      slots: { lead: 'none', value: 'text', trail: 'none' },
    },
  ])

  // --- Handlers ---

  const addColumn = () => {
    setColumns((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        label: 'New Column',
        key: `col${prev.length + 1}`,
        sortable: false,
        slots: { lead: 'none', value: 'text', trail: 'none' },
      },
    ])
  }

  const removeColumn = (id: string) => {
    setColumns((prev) => prev.filter((c) => c.id !== id))
  }

  const moveColumn = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return
    if (direction === 'down' && index === columns.length - 1) return

    const newCols = [...columns]
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    const [moved] = newCols.splice(index, 1)
    newCols.splice(targetIndex, 0, moved)
    setColumns(newCols)
  }

  const updateColumn = (id: string, updates: Partial<ConfigColumn>) => {
    setColumns((prev) =>
      prev.map((c) => (c.id === id ? { ...c, ...updates } : c)),
    )
  }

  const updateSlot = (id: string, slot: CellSlot, type: string) => {
    setColumns((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c
        return {
          ...c,
          slots: { ...c.slots, [slot]: type as CellType },
        }
      }),
    )
  }

  // --- Render Helpers ---

  // Renders the specific inputs needed based on the selected Cell Type
  // Note: For now, this just visualizes that the type is selected.
  // In a real app, you would add inputs for 'format', 'currency', etc. here.
  const renderTypeInputs = (type: CellType) => {
    if (type === 'none' || type === 'text') return null
    return (
      <Core.GdsText font="detail-xs" color="neutral-03" margin="xs 0 0 0">
        Config: {type}
      </Core.GdsText>
    )
  }

  return (
    <Core.GdsFlex flex-direction="column" width="100%" gap="s">
      {/* HEADER Actions */}
      <Core.GdsFlex align-items="center" justify-content="space-between">
        <Core.GdsText tag="p" font-weight="book">
          Data Columns
        </Core.GdsText>
        <Core.GdsButton rank="secondary" size="small" onClick={addColumn}>
          <Core.IconPlusSmall slot="lead" />
          Add Column
        </Core.GdsButton>
      </Core.GdsFlex>

      <Core.GdsDivider color="subtle-02" />

      {/* COLUMNS LIST */}
      {columns.map((col, index) => (
        <Core.GdsFlex key={col.id} gap="s" data-column>
          {/* Main Card */}
          <Core.GdsCard width="100%" padding="xs" gap="s" border-radius="m">
            {/* Inner Config Card */}
            <Core.GdsCard variant="secondary" padding="m">
              <Core.GdsFlex gap="s">
                <Core.GdsInput
                  value={col.label}
                  label="Label"
                  size="small"
                  onInput={(e: any) =>
                    updateColumn(col.id, { label: e.target.value })
                  }
                >
                  <Core.IconAi slot="lead" />
                </Core.GdsInput>
                <Core.GdsInput
                  value={col.key}
                  label="Key"
                  size="small"
                  onInput={(e: any) =>
                    updateColumn(col.id, { key: e.target.value })
                  }
                />
              </Core.GdsFlex>

              {/* SLOTS CONFIGURATION */}
              {/* We map over Lead, Value, Trail to create consistent UI for each slot */}
              {(['lead', 'value', 'trail'] as const).map((slot) => (
                <Core.GdsFlex
                  key={slot}
                  gap="s"
                  align-items="flex-start"
                  margin="s 0 0 0"
                >
                  <Core.GdsDropdown
                    label={slot.charAt(0).toUpperCase() + slot.slice(1)}
                    size="small"
                    value={col.slots[slot]}
                    onchange={(e: any) =>
                      updateSlot(col.id, slot, e.target.value)
                    }
                  >
                    <span slot="trigger">{col.slots[slot]}</span>

                    <Core.GdsOption value="none">None</Core.GdsOption>

                    {/* Basic Types */}
                    {slot === 'value' && (
                      <Core.GdsOption value="text">
                        Text (Default)
                      </Core.GdsOption>
                    )}

                    {/* Visual Types */}
                    <Core.GdsOption value="image">
                      <Core.GdsFlex align-items="center" gap="s">
                        <Core.IconImages /> Image
                      </Core.GdsFlex>
                    </Core.GdsOption>
                    <Core.GdsOption value="icon">
                      <Core.GdsFlex align-items="center" gap="s">
                        <Core.IconStore /> Icon
                      </Core.GdsFlex>
                    </Core.GdsOption>
                    <Core.GdsOption value="badge">
                      <Core.GdsFlex align-items="center" gap="s">
                        <Core.IconTag /> Badge
                      </Core.GdsFlex>
                    </Core.GdsOption>

                    {/* Interactive Types */}
                    <Core.GdsOption value="button">
                      <Core.GdsFlex align-items="center" gap="s">
                        <Core.IconCursor /> Button
                      </Core.GdsFlex>
                    </Core.GdsOption>
                    <Core.GdsOption value="link">
                      <Core.GdsFlex align-items="center" gap="s">
                        <Core.IconChainLink /> Link
                      </Core.GdsFlex>
                    </Core.GdsOption>
                    <Core.GdsOption value="context-menu">
                      <Core.GdsFlex align-items="center" gap="s">
                        <Core.IconDotGridOneHorizontal /> Context menu
                      </Core.GdsFlex>
                    </Core.GdsOption>

                    {/* Formatted Types (Usually for Value slot) */}
                    <Core.GdsOption value="formatted-number">
                      <Core.GdsFlex align-items="center" gap="s">
                        <Core.IconPostcard /> Formatted Number
                      </Core.GdsFlex>
                    </Core.GdsOption>
                    <Core.GdsOption value="formatted-account">
                      <Core.GdsFlex align-items="center" gap="s">
                        <Core.IconPostcard /> Formatted Account
                      </Core.GdsFlex>
                    </Core.GdsOption>
                    <Core.GdsOption value="formatted-date">
                      <Core.GdsFlex align-items="center" gap="s">
                        <Core.IconPostcard /> Formatted Date
                      </Core.GdsFlex>
                    </Core.GdsOption>
                  </Core.GdsDropdown>

                  {/* Placeholder for future specific config inputs based on type */}
                  <div style={{ flex: 1 }}>
                    {renderTypeInputs(col.slots[slot])}
                  </div>

                  {/* Clear Slot Button */}
                  <Core.GdsButton
                    size="xs"
                    rank="secondary"
                    variant="negative"
                    disabled={col.slots[slot] === 'none'}
                    onClick={() => updateSlot(col.id, slot, 'none')}
                  >
                    <Core.IconTrashCan />
                  </Core.GdsButton>
                </Core.GdsFlex>
              ))}
            </Core.GdsCard>

            {/* Column Footer Actions */}
            <Core.GdsFlex
              gap="s"
              align-items="center"
              justify-content="space-between"
              flex-direction="row"
              padding="0 m"
            >
              <Core.GdsCheckbox
                label="Sorting"
                checked={col.sortable}
                onInput={(e: any) =>
                  updateColumn(col.id, { sortable: e.target.checked })
                }
              />
              <Core.GdsButton
                size="xs"
                rank="secondary"
                variant="negative"
                onClick={() => removeColumn(col.id)}
              >
                Remove Column
              </Core.GdsButton>
            </Core.GdsFlex>
          </Core.GdsCard>

          {/* Reordering Controls */}
          <Core.GdsFlex flex-direction="column">
            <Core.GdsButton
              label="Move up"
              rank="tertiary"
              size="small"
              disabled={index === 0}
              onClick={() => moveColumn(index, 'up')}
            >
              <Core.IconChevronTop />
            </Core.GdsButton>
            <Core.GdsButton
              label="Move down"
              rank="tertiary"
              size="small"
              disabled={index === columns.length - 1}
              onClick={() => moveColumn(index, 'down')}
            >
              <Core.IconChevronBottom />
            </Core.GdsButton>
          </Core.GdsFlex>
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
