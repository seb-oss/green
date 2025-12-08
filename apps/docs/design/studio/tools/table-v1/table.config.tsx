// components/table-config.tsx
'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useTable } from './table.context'

export default function TableConfig() {
  const { columns, tableSettings, updateColumns, updateTableSettings } =
    useTable()
  const [activeTab, setActiveTab] = useState<'columns' | 'settings'>('columns')

  // All available columns
  const ALL_COLUMNS = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' },
    { key: 'department', label: 'Department' },
    { key: 'amount', label: 'Amount' },
    { key: 'account', label: 'Account' },
    { key: 'lastLogin', label: 'Last Login' },
  ]

  const handleColumnToggle = (columnKey: string, checked: boolean) => {
    const DEFAULT_COLUMNS = [
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
            src: (row: any) => row.avatarUrl,
            alt: (row: any) => row.name,
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
            value: (row: any) => row.status,
            variant: (row: any) =>
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
            value: (row: any) => row.amount,
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
            value: (row: any) => row.account,
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
            value: (row: any) => row.lastLogin,
            locale: 'sv-SE',
            format: 'dateLong',
          },
        },
      },
    ]

    if (checked) {
      // Add column
      const columnToAdd = DEFAULT_COLUMNS.find((col) => col.key === columnKey)
      if (columnToAdd) {
        updateColumns([...columns, columnToAdd])
      }
    } else {
      // Remove column
      updateColumns(columns.filter((col) => col.key !== columnKey))
    }
  }

  const isColumnVisible = (columnKey: string) => {
    return columns.some((col) => col.key === columnKey)
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="s" height="100%">
      {/* Tab Navigation */}
      <Core.GdsSegmentedControl
        size="small"
        width="max-content"
        value={activeTab}
        onchange={(e: Event) => {
          const target = e.target as HTMLSelectElement
          setActiveTab(target.value as 'columns' | 'settings')
        }}
      >
        <Core.GdsSegment value="columns">
          <Core.GdsFlex align-items="center" gap="xs">
            <Core.IconTextEdit size="m" />
            Data
          </Core.GdsFlex>
        </Core.GdsSegment>
        <Core.GdsSegment value="settings">
          <Core.GdsFlex align-items="center" gap="xs">
            <Core.IconSettingsGear size="m" />
            Settings
          </Core.GdsFlex>
        </Core.GdsSegment>
      </Core.GdsSegmentedControl>

      {/* Content */}
      <Core.GdsCard gap="s" height="100%">
        {activeTab === 'columns' ? (
          <Core.GdsCheckboxGroup size="small">
            {ALL_COLUMNS.map((col) => (
              <Core.GdsCheckbox
                key={col.key}
                value={col.key}
                label={col.label}
                checked={isColumnVisible(col.key)}
                onChange={(e: any) =>
                  handleColumnToggle(col.key, e.target.checked)
                }
              />
            ))}
          </Core.GdsCheckboxGroup>
        ) : (
          <Core.GdsFlex flex-direction="column" gap="m">
            {/* Appearance Section */}
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsDropdown
                label="Density"
                size="small"
                value={tableSettings.density}
                onChange={(e: any) =>
                  updateTableSettings({ density: e.target.value })
                }
              >
                <Core.GdsOption value="comfortable">Comfortable</Core.GdsOption>
                <Core.GdsOption value="compact">Compact</Core.GdsOption>
                <Core.GdsOption value="spacious">Spacious</Core.GdsOption>
              </Core.GdsDropdown>

              <Core.GdsDropdown
                label="Variant"
                size="small"
                value={tableSettings.variant}
                onChange={(e: any) =>
                  updateTableSettings({ variant: e.target.value })
                }
              >
                <Core.GdsOption value="primary">Primary</Core.GdsOption>
                <Core.GdsOption value="secondary">Secondary</Core.GdsOption>
                <Core.GdsOption value="tertiary">Tertiary</Core.GdsOption>
              </Core.GdsDropdown>

              <Core.GdsInput
                label="Height"
                size="small"
                value={tableSettings.height || ''}
                onInput={(e: any) =>
                  updateTableSettings({ height: e.target.value || undefined })
                }
              />
            </Core.GdsFlex>

            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsCheckboxGroup label="Features" size="small">
                <Core.GdsCheckbox
                  value="selectable"
                  label="Selectable rows"
                  checked={tableSettings.selectable}
                  onChange={(e: any) =>
                    updateTableSettings({ selectable: e.target.checked })
                  }
                />
                <Core.GdsCheckbox
                  value="searchable"
                  label="Search"
                  checked={tableSettings.searchable}
                  onChange={(e: any) =>
                    updateTableSettings({ searchable: e.target.checked })
                  }
                />
                <Core.GdsCheckbox
                  value="settings"
                  label="Column settings"
                  checked={tableSettings.settings}
                  onChange={(e: any) =>
                    updateTableSettings({ settings: e.target.checked })
                  }
                />
                <Core.GdsCheckbox
                  value="responsive"
                  label="Responsive layout"
                  checked={tableSettings.responsive}
                  onChange={(e: any) =>
                    updateTableSettings({ responsive: e.target.checked })
                  }
                />
              </Core.GdsCheckboxGroup>
            </Core.GdsFlex>

            <Core.GdsDivider color="subtle-02" />

            {/* Style Section */}
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsText font-weight="bold" font-size="detail">
                Style
              </Core.GdsText>

              <Core.GdsCheckboxGroup size="small">
                <Core.GdsCheckbox
                  value="striped"
                  label="Striped rows"
                  checked={tableSettings.striped}
                  onChange={(e: any) =>
                    updateTableSettings({ striped: e.target.checked })
                  }
                />
                <Core.GdsCheckbox
                  value="plain"
                  label="Plain (no header/footer)"
                  checked={tableSettings.plain}
                  onChange={(e: any) =>
                    updateTableSettings({ plain: e.target.checked })
                  }
                />
              </Core.GdsCheckboxGroup>
            </Core.GdsFlex>

            <Core.GdsDivider color="subtle-02" />

            {/* Pagination Section */}
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsText font-weight="bold" font-size="detail">
                Pagination
              </Core.GdsText>

              <Core.GdsInput
                label="Rows per page"
                size="small"
                type="number"
                value={String(tableSettings.rows)}
                onInput={(e: any) =>
                  updateTableSettings({ rows: Number(e.target.value) })
                }
              />

              <Core.GdsInput
                label="Current page"
                size="small"
                type="number"
                value={String(tableSettings.page)}
                onInput={(e: any) =>
                  updateTableSettings({ page: Number(e.target.value) })
                }
              />
            </Core.GdsFlex>

            <Core.GdsDivider color="subtle-02" />

            {/* Advanced Section */}
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsText font-weight="bold" font-size="detail">
                Advanced
              </Core.GdsText>

              <Core.GdsCheckboxGroup size="small">
                <Core.GdsCheckbox
                  value="nocache"
                  label="Disable caching"
                  checked={tableSettings.nocache}
                  onChange={(e: any) =>
                    updateTableSettings({ nocache: e.target.checked })
                  }
                />
              </Core.GdsCheckboxGroup>
            </Core.GdsFlex>
          </Core.GdsFlex>
        )}
      </Core.GdsCard>
    </Core.GdsFlex>
  )
}
