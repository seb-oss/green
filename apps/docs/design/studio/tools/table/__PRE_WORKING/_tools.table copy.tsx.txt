'use client'

import { useState } from 'react'

import { Types } from '@sebgroup/green-core/components/table'
import * as Core from '@sebgroup/green-core/react'
import { useSearch } from '../../context/search.context'
import Cells from './__TEZT_/tools.table.cells'
import Column from './table.config.column'

export default function Table() {
  const [activeTab, setActiveTab] = useState<'data' | 'settings'>('data')
  const { setTakeover, takeover } = useSearch()
  const [showCode, setShowCode] = useState(true)

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
              <Core.GdsSegment value="configure">
                <Core.GdsFlex align-items="center" gap="xs">
                  <Core.IconSettingsGear size="m" />
                  Settings
                </Core.GdsFlex>
              </Core.GdsSegment>
            </Core.GdsSegmentedControl>
          </Core.GdsFlex>
          <Core.GdsCard variant="secondary" padding="m">
            {activeTab === 'data' ? (
              <Core.GdsFlex flex-direction="column" width="100%" gap="s">
                <Core.GdsFlex
                  align-items="center"
                  justify-content="space-between"
                >
                  <Core.GdsText tag="p" font-weight="book">
                    Data
                  </Core.GdsText>
                  <Core.GdsFlex align-items="center" gap="s">
                    <Core.GdsButton rank="secondary" size="small">
                      <Core.IconPlusSmall slot="lead" />
                      Add
                    </Core.GdsButton>
                    <Core.GdsButton rank="secondary" size="small">
                      <Core.IconSort size="m" />
                    </Core.GdsButton>
                  </Core.GdsFlex>
                </Core.GdsFlex>
                <Core.GdsDivider color="subtle-02" />
                <Column sorting />
              </Core.GdsFlex>
            ) : (
              <Core.GdsFlex flex-direction="column" gap="s">
                <Core.GdsCheckboxGroup
                  label="Settings"
                  supportingText="Enable or disable settings"
                  size="small"
                >
                  <Core.GdsCheckbox
                    value="selectable"
                    label="Selectable"
                  ></Core.GdsCheckbox>
                  <Core.GdsCheckbox
                    value="responsive"
                    label="Responsive"
                  ></Core.GdsCheckbox>
                  <Core.GdsCheckbox
                    value="plain"
                    label="Plain"
                  ></Core.GdsCheckbox>
                  <Core.GdsCheckbox
                    value="searchable"
                    label="Searchable"
                  ></Core.GdsCheckbox>
                  <Core.GdsCheckbox
                    value="settings"
                    label="Settings"
                  ></Core.GdsCheckbox>
                  <Core.GdsCheckbox
                    value="striped"
                    label="Striped"
                  ></Core.GdsCheckbox>
                  <Core.GdsCheckbox
                    value="nocache"
                    label="Nocache"
                  ></Core.GdsCheckbox>
                </Core.GdsCheckboxGroup>
                <Core.GdsDropdown
                  label="Density"
                  size="small"
                ></Core.GdsDropdown>
                <Core.GdsDropdown
                  label="Variant"
                  size="small"
                ></Core.GdsDropdown>
                <Core.GdsInput label="Height" size="small"></Core.GdsInput>
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
              onClick={() => {
                setTakeover(!takeover)
              }}
            >
              <Core.IconFullscreen size="m" />
            </Core.GdsButton>
          </Core.GdsFlex>

          <Core.GdsCard variant="secondary" position="sticky" inset="0">
            Preview
          </Core.GdsCard>
        </Core.GdsFlex>
      </Core.GdsGrid>
    </Core.GdsTheme>
  )
}
