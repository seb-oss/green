// design/studio/parts/template.single.tsx
import { useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../../settings/content'
import * as Tab from './template'

const TABS = {
  preview: Tab.Preview,
  inspect: Tab.Inspect,
  code: Tab.Code,
} as const

export default function Template({ template }: { template: string }) {
  const { actions } = useContent()
  const CONTENT = actions.getTemplate(template)
  const [TAB, SET_TAB] = useState<keyof typeof TABS>('preview')

  if (!CONTENT) return null
  const Tabs = TABS[TAB]

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
          <Core.GdsSegment value="code">
            <Core.GdsFlex align-items="center" gap="xs">
              <Core.IconCodeBrackets size="m" />
              <Core.GdsText font="detail-book-s">Code</Core.GdsText>
            </Core.GdsFlex>
          </Core.GdsSegment>
        </Core.GdsSegmentedControl>
        <Core.GdsFlex gap="s">
          <Core.GdsButton size="small" rank="tertiary">
            <Core.IconFullscreen size="m" />
          </Core.GdsButton>
          <Core.GdsFlex width="120px">
            <Core.GdsDropdown multiple plain size="small" label="Device">
              <Core.GdsOption>Hello</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Core.GdsFlex>
      <Core.GdsCard min-width="100%" variant="secondary" border-radius="m">
        <Tabs content={CONTENT} />
      </Core.GdsCard>
    </Core.GdsFlex>
  )
}
