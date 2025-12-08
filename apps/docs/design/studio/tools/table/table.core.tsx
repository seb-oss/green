'use client'

import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useSearch } from '../../context/search.context'
import Column from './__PRE_WORKING/_table.config.column'
import { TableBuilderProvider, useTableBuilder } from './table.context'
import TablePreview from './table.preview'

function TableBuilderContent() {
  const [activeTab, setActiveTab] = useState<'data' | 'settings'>('data')
  const { setTakeover, takeover } = useSearch()
  const [showCode, setShowCode] = useState(true)

  const {
    columns,
    addColumn,
    tableSettings,
    updateTableSettings,
    sortingEnabled,
    setSortingEnabled,
  } = useTableBuilder()

  return (
    <Core.GdsTheme>
      <Core.GdsGrid columns="12" gap="m" width="100%">
        <Core.GdsFlex grid-column="1/5" flex-direction="column" gap="s">
          <Core.GdsFlex height="4xl" align-items="center">
            <Core.GdsSegmentedControl
              size="small"
              width="max-content"
              value={activeTab}
              onchange={(e: Event) => {
                const target = e.target as HTMLSelectElement
                setActiveTab(target.value as 'data' | 'settings')
              }}
            >
              <Core.GdsSegment value="data">
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
          </Core.GdsFlex>

          <Core.GdsCard variant="primary" padding="m">
            {activeTab === 'data' ? (
              <Core.GdsFlex flex-direction="column" width="100%" gap="s">
                <Core.GdsFlex
                  align-items="center"
                  justify-content="space-between"
                >
                  <Core.GdsText tag="p" font-weight="book">
                    Columns ({columns.length})
                  </Core.GdsText>
                  <Core.GdsFlex align-items="center" gap="s">
                    <Core.GdsButton
                      rank="secondary"
                      size="small"
                      onClick={addColumn}
                    >
                      <Core.IconPlusSmall slot="lead" />
                      Add Column
                    </Core.GdsButton>
                    <Core.GdsButton
                      rank="secondary"
                      size="small"
                      variant={sortingEnabled ? 'positive' : undefined}
                      onClick={() => setSortingEnabled(!sortingEnabled)}
                    >
                      <Core.IconSort size="m" />
                    </Core.GdsButton>
                  </Core.GdsFlex>
                </Core.GdsFlex>
                <Core.GdsDivider color="subtle-02" />

                <Core.GdsFlex flex-direction="column" gap="s">
                  {columns.map((_, index) => (
                    <Column key={index} index={index} />
                  ))}
                </Core.GdsFlex>
              </Core.GdsFlex>
            ) : (
              <Core.GdsFlex flex-direction="column" gap="s">
                <Core.GdsCheckboxGroup
                  label="Settings"
                  supportingText="Enable or disable table features"
                  size="small"
                >
                  <Core.GdsCheckbox
                    value="selectable"
                    label="Selectable"
                    checked={tableSettings.selectable}
                    onChange={(e: any) =>
                      updateTableSettings({ selectable: e.target.checked })
                    }
                  />
                  <Core.GdsCheckbox
                    value="responsive"
                    label="Responsive"
                    checked={tableSettings.responsive}
                    onChange={(e: any) =>
                      updateTableSettings({ responsive: e.target.checked })
                    }
                  />
                  <Core.GdsCheckbox
                    value="plain"
                    label="Plain"
                    checked={tableSettings.plain}
                    onChange={(e: any) =>
                      updateTableSettings({ plain: e.target.checked })
                    }
                  />
                  <Core.GdsCheckbox
                    value="searchable"
                    label="Searchable"
                    checked={tableSettings.searchable}
                    onChange={(e: any) =>
                      updateTableSettings({ searchable: e.target.checked })
                    }
                  />
                  <Core.GdsCheckbox
                    value="settings"
                    label="Settings"
                    checked={tableSettings.settings}
                    onChange={(e: any) =>
                      updateTableSettings({ settings: e.target.checked })
                    }
                  />
                  <Core.GdsCheckbox
                    value="striped"
                    label="Striped"
                    checked={tableSettings.striped}
                    onChange={(e: any) =>
                      updateTableSettings({ striped: e.target.checked })
                    }
                  />
                  <Core.GdsCheckbox
                    value="nocache"
                    label="No Cache"
                    checked={tableSettings.nocache}
                    onChange={(e: any) =>
                      updateTableSettings({ nocache: e.target.checked })
                    }
                  />
                </Core.GdsCheckboxGroup>

                <Core.GdsDropdown
                  label="Density"
                  size="small"
                  value={tableSettings.density}
                  onChange={(e: any) =>
                    updateTableSettings({ density: e.target.value })
                  }
                >
                  <Core.GdsOption value="comfortable">
                    Comfortable
                  </Core.GdsOption>
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
                  onChange={(e: any) =>
                    updateTableSettings({ height: e.target.value })
                  }
                />

                <Core.GdsInput
                  label="Rows per page"
                  size="small"
                  type="number"
                  value={String(tableSettings.rows)}
                  onChange={(e: any) =>
                    updateTableSettings({ rows: Number(e.target.value) })
                  }
                />
              </Core.GdsFlex>
            )}
          </Core.GdsCard>
        </Core.GdsFlex>

        <Core.GdsFlex grid-column="5/-1" flex-direction="column" gap="s">
          <Core.GdsFlex
            height="4xl"
            align-items="center"
            justify-content="flex-end"
          >
            <Core.GdsButton
              rank="tertiary"
              size="small"
              onClick={() => setShowCode(!showCode)}
            >
              <Core.IconCodeBrackets size="m" />
            </Core.GdsButton>
            <Core.GdsButton
              rank="tertiary"
              size="small"
              onClick={() => setTakeover(!takeover)}
            >
              <Core.IconFullscreen size="m" />
            </Core.GdsButton>
          </Core.GdsFlex>

          <Core.GdsCard variant="secondary" padding="m">
            <TablePreview />
          </Core.GdsCard>
        </Core.GdsFlex>
      </Core.GdsGrid>
    </Core.GdsTheme>
  )
}

export default function Table() {
  return (
    <TableBuilderProvider>
      <TableBuilderContent />
    </TableBuilderProvider>
  )
}
