// design/studio/parts/template.single.tsx
import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../../settings/content'
import * as Tokens from '../../data/studio.data.tokens'
import * as Tab from './template'

const TABS = {
  preview: Tab.Preview,
  inspect: Tab.Inspect,
  // code: Tab.Code,
} as const

const DEFAULT_VIEWPORTS = ['s', 'm', 'l']

export default function Template({ template }: { template: string }) {
  const { actions } = useContent()
  const CONTENT = actions.getTemplate(template)
  const [TAB, SET_TAB] = useState<keyof typeof TABS>('preview')
  const [selectedViewports, setSelectedViewports] =
    useState<string[]>(DEFAULT_VIEWPORTS)

  const viewportTokens = Object.entries(Tokens.Viewport.viewport)
    .filter(([key]) => key !== '0') // Remove '0' from the list
    .map(([key, value]) => ({
      token: key,
      value: value.value,
    }))

  const allViewportTokens = viewportTokens.map((vt) => vt.token)

  const selectedViewportValues = selectedViewports.map((token) => {
    const viewport = viewportTokens.find((vt) => vt.token === token)
    return { token, value: viewport?.value || '' }
  })

  if (!CONTENT) return null
  const Tabs = TABS[TAB]

  const handleViewportChange = (e: Event) => {
    const customEvent = e as CustomEvent<{ value: string | string[] }>
    const newValue = customEvent.detail.value

    if (Array.isArray(newValue)) {
      // Handle "Select All" option
      if (newValue.includes('all')) {
        if (selectedViewports.length === allViewportTokens.length) {
          // If all were selected, deselect all
          setSelectedViewports([])
        } else {
          // Select all viewports
          setSelectedViewports(allViewportTokens)
        }
      } else {
        setSelectedViewports(newValue)
      }
    } else {
      setSelectedViewports([newValue])
    }
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="s" width="100%">
      <Core.GdsFlex justify-content="space-between" align-items="center">
        <Core.GdsSegmentedControl
          width="max-content"
          value={TAB}
          size="small"
          onchange={(e: Event) => {
            const target = e.target as HTMLSelectElement
            SET_TAB(target.value as 'preview' | 'inspect')
          }}
        >
          <Core.GdsSegment value="preview">
            <Core.GdsFlex align-items="center" gap="xs">
              <Core.IconEyeOpen size="m" />
              <Core.GdsText font="detail-book-s">Preview</Core.GdsText>
            </Core.GdsFlex>
          </Core.GdsSegment>
          <Core.GdsSegment value="inspect">
            <Core.GdsFlex align-items="center" gap="xs">
              <Core.IconCursor size="m" />
              <Core.GdsText font="detail-book-s">Inspect</Core.GdsText>
            </Core.GdsFlex>
          </Core.GdsSegment>
        </Core.GdsSegmentedControl>
        <Core.GdsFlex gap="s">
          <Core.GdsButton size="small" rank="tertiary">
            <Core.IconFullscreen size="m" />
          </Core.GdsButton>
          <Core.GdsFlex width="200px">
            <Core.GdsDropdown
              multiple
              plain
              searchable
              size="small"
              value={selectedViewports}
              onchange={handleViewportChange}
            >
              <Core.GdsOption value="all">
                {selectedViewports.length === allViewportTokens.length
                  ? 'Deselect All'
                  : 'Select All'}
              </Core.GdsOption>
              {viewportTokens.map((token) => (
                <Core.GdsOption key={token.token} value={token.token}>
                  {token.token}
                </Core.GdsOption>
              ))}
            </Core.GdsDropdown>
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Core.GdsFlex>
      <Core.GdsCard
        min-width="100%"
        variant="primary"
        border-radius="m"
        overflow="auto"
      >
        <Tabs content={CONTENT} viewports={selectedViewportValues} />
      </Core.GdsCard>
    </Core.GdsFlex>
  )
}
