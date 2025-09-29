// app/templates/page.client.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import Card from '../../design/atoms/card/card'
import { useContentContext } from '../../settings/content'

function calculateScore(text: string, query: string): number {
  const normalizedText = text.toLowerCase()
  const normalizedQuery = query.toLowerCase()
  return normalizedText.includes(normalizedQuery) ? 1 : 0
}

export function TemplatesClient() {
  const { isLoaded, actions } = useContentContext()
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [query, setQuery] = useState('')

  const templates = actions.getTemplates({
    sort: (a, b) => a.title.localeCompare(b.title),
  })

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      if (!query.trim()) return true

      const titleScore = calculateScore(template.title, query)
      // Note: Templates don't have summary or beta properties like components do
      return titleScore > 0
    })
  }, [templates, query])

  const handleViewChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setView(target.value as 'grid' | 'list')
  }

  if (!isLoaded) return <div>Loading...</div>

  return (
    <Core.GdsFlex flex-direction="column" gap="2xl" width="100%" font="body-s">
      <Core.GdsFlex
        justify-content="center"
        align-items="flex-start"
        flex-direction="column"
        gap="2xl"
      >
        <Core.GdsFlex flex-direction="column" gap="m" align-items="flex-start">
          <Core.GdsFlex gap="s">
            <Core.GdsText font="display-m">Templates</Core.GdsText>
            <Core.GdsText font="display-m" color="positive">
              ({templates.length})
            </Core.GdsText>
          </Core.GdsFlex>
          <Core.GdsText
            font="preamble-m"
            color="secondary"
            max-width="68ch"
            text-align="center"
            text-wrap="pretty"
          >
            Ready-to-use templates for common UI patterns.
          </Core.GdsText>
        </Core.GdsFlex>

        <Core.GdsGrid
          columns="6"
          gap="l"
          border-color="primary"
          border-width="0 0 0 0"
          border-style="solid"
          padding-block="0 s"
        >
          <Core.GdsInput
            value={query}
            plain
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            grid-column="1 / span 5"
            clearable
            flex="1"
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>

          {false && (
            <Core.GdsFlex align-items="center">
              <Core.GdsSegmentedControl
                size="small"
                value={view}
                onchange={handleViewChange}
              >
                <Core.GdsSegment value="grid">Grid</Core.GdsSegment>
                <Core.GdsSegment value="list">List</Core.GdsSegment>
              </Core.GdsSegmentedControl>
            </Core.GdsFlex>
          )}
        </Core.GdsGrid>
      </Core.GdsFlex>

      {filteredTemplates.length > 0 ? (
        <Core.GdsGrid
          columns={view === 'grid' ? '1; l{2} xl{3}' : '1'}
          gap="l"
          max-width="180ch"
        >
          {filteredTemplates.map((template) => (
            <Card
              type="template"
              key={template.title}
              title={template.title}
              href={template.slug}
              list={view === 'list'}
            />
          ))}
        </Core.GdsGrid>
      ) : (
        <Core.GdsFlex
          justify-content="center"
          align-items="center"
          padding="2xl"
        >
          <Core.GdsText color="secondary">
            No templates found matching <strong>{query}</strong>
          </Core.GdsText>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
