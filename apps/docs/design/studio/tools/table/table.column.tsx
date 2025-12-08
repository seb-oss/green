'use client'

import { useEffect, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useTableBuilder } from './table.context'

interface ColumnProps {
  index: number
}

export default function Column({ index }: ColumnProps) {
  const { columns, updateColumn, removeColumn, moveColumn, sortingEnabled } =
    useTableBuilder()

  const column = columns[index]

  const [columnLabel, setColumnLabel] = useState(column.label)
  const [columnKey, setColumnKey] = useState(column.key)
  const [sortable, setSortable] = useState(column.sortable)
  const [activeSlots, setActiveSlots] = useState<string[]>([])
  const [cellTypes, setCellTypes] = useState<{
    lead?: string
    value?: string
    trail?: string
  }>({})
  const [cellProps, setCellProps] = useState<{
    lead?: Record<string, any>
    value?: Record<string, any>
    trail?: Record<string, any>
  }>({})

  // Sync with parent whenever values change
  useEffect(() => {
    const cell: any = {}

    if (activeSlots.includes('lead') && cellTypes.lead) {
      cell.lead = {
        type: cellTypes.lead,
        ...(cellProps.lead || {}),
      }
    }

    if (activeSlots.includes('value') && cellTypes.value) {
      cell.value = {
        type: cellTypes.value,
        ...(cellProps.value || {}),
      }
    }

    if (activeSlots.includes('trail') && cellTypes.trail) {
      cell.trail = {
        type: cellTypes.trail,
        ...(cellProps.trail || {}),
      }
    }

    updateColumn(index, {
      key: columnKey,
      label: columnLabel,
      sortable,
      cell: Object.keys(cell).length > 0 ? cell : undefined,
    })
  }, [columnLabel, columnKey, sortable, activeSlots, cellTypes, cellProps])

  const handleSlotChange = (value: string[]) => {
    setActiveSlots(value)
  }

  const handleCellTypeChange = (
    slot: 'lead' | 'value' | 'trail',
    type: string,
  ) => {
    setCellTypes((prev) => ({ ...prev, [slot]: type }))
  }

  const handleRemoveSlot = (slot: 'lead' | 'value' | 'trail') => {
    const slotValue = slot === 'value' ? 'value' : slot
    setActiveSlots((prev) => prev.filter((s) => s !== slotValue))
    setCellTypes((prev) => {
      const newTypes = { ...prev }
      delete newTypes[slot]
      return newTypes
    })
    setCellProps((prev) => {
      const newProps = { ...prev }
      delete newProps[slot]
      return newProps
    })
  }

  const CellType = ({ slot }: { slot: 'lead' | 'value' | 'trail' }) => {
    return (
      <Core.GdsDropdown
        plain
        size="small"
        onChange={(e: any) => handleCellTypeChange(slot, e.target.value)}
      >
        <span slot="trigger">{cellTypes[slot] || 'Select type'}</span>
        <Core.GdsOption value="image">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconImages />
            Image
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="icon">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconStore />
            Icon
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="badge">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconTag />
            Badge
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="button">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconCursor />
            Button
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="link">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconChainLink />
            Link
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="context-menu">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconDotGridOneHorizontal />
            Context menu
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="formatted-number">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconPostcard />
            Formatted number
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="formatted-account">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconPostcard />
            Formatted account
          </Core.GdsFlex>
        </Core.GdsOption>
        <Core.GdsOption value="formatted-date">
          <Core.GdsFlex align-items="center" gap="s">
            <Core.IconCalendar />
            Formatted date
          </Core.GdsFlex>
        </Core.GdsOption>
      </Core.GdsDropdown>
    )
  }

  const CellTypeProps = ({
    slot,
    cellType,
  }: {
    slot: 'lead' | 'value' | 'trail'
    cellType?: string
  }) => {
    if (!cellType) {
      return (
        <Core.GdsText font-size="detail" color="secondary">
          Select a cell type to configure
        </Core.GdsText>
      )
    }

    const updateProp = (key: string, value: any) => {
      setCellProps((prev) => ({
        ...prev,
        [slot]: { ...prev[slot], [key]: value },
      }))
    }

    switch (cellType) {
      case 'image':
        return (
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsInput
              label="Source (src)"
              size="small"
              placeholder="(row) => row.avatarUrl"
              onChange={(e: any) => updateProp('src', e.target.value)}
            />
            <Core.GdsInput
              label="Alt"
              size="small"
              placeholder="(row) => row.name"
              onChange={(e: any) => updateProp('alt', e.target.value)}
            />
            <Core.GdsDropdown
              label="Width"
              size="small"
              onChange={(e: any) => updateProp('width', e.target.value)}
            >
              <Core.GdsOption value="xs">XS</Core.GdsOption>
              <Core.GdsOption value="s">S</Core.GdsOption>
              <Core.GdsOption value="m">M</Core.GdsOption>
              <Core.GdsOption value="l">L</Core.GdsOption>
              <Core.GdsOption value="xl">XL</Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsDropdown
              label="Height"
              size="small"
              onChange={(e: any) => updateProp('height', e.target.value)}
            >
              <Core.GdsOption value="xs">XS</Core.GdsOption>
              <Core.GdsOption value="s">S</Core.GdsOption>
              <Core.GdsOption value="m">M</Core.GdsOption>
              <Core.GdsOption value="l">L</Core.GdsOption>
              <Core.GdsOption value="xl">XL</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        )

      case 'badge':
        return (
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsInput
              label="Value"
              size="small"
              placeholder="(row) => row.status"
              onChange={(e: any) => updateProp('value', e.target.value)}
            />
            <Core.GdsInput
              label="Variant"
              size="small"
              placeholder="(row) => row.status === 'Active' ? 'positive' : 'negative'"
              onChange={(e: any) => updateProp('variant', e.target.value)}
            />
            <Core.GdsDropdown
              label="Size"
              size="small"
              onChange={(e: any) => updateProp('size', e.target.value)}
            >
              <Core.GdsOption value="">Default</Core.GdsOption>
              <Core.GdsOption value="small">Small</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        )

      case 'button':
        return (
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsInput
              label="Label"
              size="small"
              onChange={(e: any) => updateProp('label', e.target.value)}
            />
            <Core.GdsInput
              label="Template"
              size="small"
              placeholder="email-copy"
              onChange={(e: any) => updateProp('template', e.target.value)}
            />
            <Core.GdsDropdown
              label="Rank"
              size="small"
              onChange={(e: any) => updateProp('rank', e.target.value)}
            >
              <Core.GdsOption value="primary">Primary</Core.GdsOption>
              <Core.GdsOption value="secondary">Secondary</Core.GdsOption>
              <Core.GdsOption value="tertiary">Tertiary</Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsDropdown
              label="Variant"
              size="small"
              onChange={(e: any) => updateProp('variant', e.target.value)}
            >
              <Core.GdsOption value="">Default</Core.GdsOption>
              <Core.GdsOption value="positive">Positive</Core.GdsOption>
              <Core.GdsOption value="negative">Negative</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        )

      case 'link':
        return (
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsInput
              label="Label"
              size="small"
              onChange={(e: any) => updateProp('label', e.target.value)}
            />
            <Core.GdsInput
              label="Href"
              size="small"
              placeholder="(row) => row.download"
              onChange={(e: any) => updateProp('href', e.target.value)}
            />
            <Core.GdsCheckbox
              label="Download"
              onChange={(e: any) => updateProp('download', e.target.checked)}
            />
          </Core.GdsFlex>
        )

      case 'formatted-number':
        return (
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsInput
              label="Value"
              size="small"
              placeholder="(row) => row.amount"
              onChange={(e: any) => updateProp('value', e.target.value)}
            />
            <Core.GdsDropdown
              label="Locale"
              size="small"
              onChange={(e: any) => updateProp('locale', e.target.value)}
            >
              <Core.GdsOption value="sv-SE">sv-SE</Core.GdsOption>
              <Core.GdsOption value="en-US">en-US</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        )

      case 'formatted-account':
        return (
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsInput
              label="Value"
              size="small"
              placeholder="(row) => row.account"
              onChange={(e: any) => updateProp('value', e.target.value)}
            />
            <Core.GdsDropdown
              label="Format"
              size="small"
              onChange={(e: any) => updateProp('format', e.target.value)}
            >
              <Core.GdsOption value="seb-account">SEB Account</Core.GdsOption>
              <Core.GdsOption value="iban">IBAN</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        )

      case 'formatted-date':
        return (
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsInput
              label="Value"
              size="small"
              placeholder="(row) => row.lastLogin"
              onChange={(e: any) => updateProp('value', e.target.value)}
            />
            <Core.GdsDropdown
              label="Format"
              size="small"
              onChange={(e: any) => updateProp('format', e.target.value)}
            >
              <Core.GdsOption value="dateShort">Date Short</Core.GdsOption>
              <Core.GdsOption value="dateLong">Date Long</Core.GdsOption>
            </Core.GdsDropdown>
            <Core.GdsDropdown
              label="Locale"
              size="small"
              onChange={(e: any) => updateProp('locale', e.target.value)}
            >
              <Core.GdsOption value="sv-SE">sv-SE</Core.GdsOption>
              <Core.GdsOption value="en-US">en-US</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        )

      case 'icon':
        return (
          <Core.GdsFlex flex-direction="column" gap="xs">
            <Core.GdsInput
              label="Template"
              size="small"
              placeholder="department-icon"
              onChange={(e: any) => updateProp('template', e.target.value)}
            />
          </Core.GdsFlex>
        )

      default:
        return null
    }
  }

  const renderSlotDetails = (
    slot: 'lead' | 'value' | 'trail',
    label: string,
  ) => {
    const slotValue = slot === 'value' ? 'value' : slot

    if (!activeSlots.includes(slotValue)) return null

    return (
      <Core.GdsDetails size="small" name="slots" summary={label}>
        <Core.GdsCard padding="xs" gap="xs">
          <Core.GdsFlex
            gap="xs"
            align-items="center"
            justify-content="space-between"
          >
            <CellType slot={slot} />
            <Core.GdsButton
              size="xs"
              rank="tertiary"
              variant="negative"
              onClick={() => handleRemoveSlot(slot)}
            >
              <Core.IconTrashCan />
            </Core.GdsButton>
          </Core.GdsFlex>
          {cellTypes[slot] && (
            <Core.GdsFlex flex-direction="column" padding="xs 0 0 0">
              <CellTypeProps slot={slot} cellType={cellTypes[slot]} />
            </Core.GdsFlex>
          )}
        </Core.GdsCard>
      </Core.GdsDetails>
    )
  }

  return (
    <Core.GdsFlex gap="s" data-column>
      <Core.GdsCard variant="secondary" padding="0 s s s" overflow="hidden">
        <Core.GdsFlex gap="s" padding="s 0 0 0">
          <Core.GdsInput
            value={columnLabel}
            label="Column"
            size="small"
            onInput={(e: any) => setColumnLabel(e.target.value)}
          >
            <Core.IconAi slot="lead" />
          </Core.GdsInput>
          <Core.GdsDropdown
            label="Cells"
            size="small"
            multiple
            onChange={(e: any) => {
              const value = e.target.value
              handleSlotChange(Array.isArray(value) ? value : [value])
            }}
          >
            <span slot="trigger">
              {activeSlots.length === 0
                ? 'Select cells'
                : `${activeSlots.length} selected`}
            </span>
            <Core.GdsOption value="lead">Lead</Core.GdsOption>
            <Core.GdsOption value="value">Value</Core.GdsOption>
            <Core.GdsOption value="trail">Trail</Core.GdsOption>
          </Core.GdsDropdown>
        </Core.GdsFlex>

        {activeSlots.length > 0 && (
          <Core.GdsFlex
            flex-direction="column"
            border-width="5xs 0 0 0"
            margin="s 0 0 0"
          >
            {renderSlotDetails('lead', 'Lead')}
            {renderSlotDetails('value', 'Value')}
            {renderSlotDetails('trail', 'Trail')}
          </Core.GdsFlex>
        )}

        <Core.GdsFlex
          gap="s"
          align-items="center"
          justify-content="space-between"
          flex-direction="row"
          margin="s 0 0 0"
        >
          <Core.GdsCheckbox
            label="Sortable"
            checked={sortable}
            onChange={(e: any) => setSortable(e.target.checked)}
          />
          <Core.GdsButton
            size="xs"
            rank="secondary"
            variant="negative"
            onClick={() => removeColumn(index)}
          >
            Remove
          </Core.GdsButton>
        </Core.GdsFlex>
      </Core.GdsCard>

      {sortingEnabled && (
        <Core.GdsFlex flex-direction="column">
          <Core.GdsButton
            label="Move up"
            rank="tertiary"
            size="small"
            onClick={() => moveColumn(index, 'up')}
            disabled={index === 0}
          >
            <Core.IconChevronTop />
          </Core.GdsButton>
          <Core.GdsButton
            label="Move down"
            rank="tertiary"
            size="small"
            onClick={() => moveColumn(index, 'down')}
            disabled={index === columns.length - 1}
          >
            <Core.IconChevronBottom />
          </Core.GdsButton>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
