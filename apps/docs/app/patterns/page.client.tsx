// app/components/page.client.tsx
'use client'

import { useMemo, useState } from 'react'

import * as Core from '@sebgroup/green-core/react'
import Card from '../../design/atoms/card/card'
import { Link } from '../../design/atoms/link/link'
import { useContentContext } from '../../settings/content'

function calculateScore(text: string, query: string): number {
  const normalizedText = text.toLowerCase()
  const normalizedQuery = query.toLowerCase()
  return normalizedText.includes(normalizedQuery) ? 1 : 0
}

export function ComponentsClient() {
  const { isLoaded, actions } = useContentContext()
  const [query, setQuery] = useState('')

  const components = actions.getComponents({
    sort: (a, b) => a.title.localeCompare(b.title),
  })

  const filteredComponents = useMemo(() => {
    // First filter for pattern components only
    const patternComponents = components.filter((component) => {
      const isPattern = Array.isArray(component.category)
        ? component.category.includes('Patterns')
        : component.category === 'Patterns'
      return isPattern
    })

    // Then apply search query if exists
    if (!query.trim()) return patternComponents

    return patternComponents.filter((component) => {
      const titleScore = calculateScore(component.title, query)
      const summaryScore = component.summary
        ? calculateScore(component.summary, query)
        : 0

      return titleScore > 0 || summaryScore > 0
    })
  }, [components, query])

  return (
    <Core.GdsFlex flex-direction="column" gap="2xl" width="100%" font="body-s">
      <Core.GdsBreadcrumbs size="small">
        <Link component="breadcrumb" href="/">
          <Core.IconHomeOpen size="m" slot="lead" />
          Home
        </Link>
        <Core.GdsBreadcrumb>Patterns</Core.GdsBreadcrumb>
      </Core.GdsBreadcrumbs>
      <Core.GdsFlex
        justify-content="center"
        flex-direction="column"
        gap="2xl"
        margin="auto"
        text-align="centers"
        align-items="center"
      >
        <Core.GdsFlex flex-direction="column" gap="xs">
          <Core.GdsFlex gap="s" justify-content="center">
            <Core.GdsText tag="h1" font="heading-l; s{heading-xl}">
              Patterns
            </Core.GdsText>
          </Core.GdsFlex>
          <Core.GdsText
            font="heading-s"
            color="neutral-02"
            max-width="68ch"
            text-wrap="pretty"
            text-align="center"
          >
            Pre-built compositions that help create consistent user experiences.
          </Core.GdsText>
        </Core.GdsFlex>

        <Core.GdsGrid columns="6" gap="s">
          <Core.GdsInput
            value={query}
            plain
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            grid-column="1 / span 6"
            min-width="100%; >900px{700px}"
            clearable
          >
            <Core.IconMagnifyingGlass slot="lead" size="l" />
          </Core.GdsInput>
        </Core.GdsGrid>
      </Core.GdsFlex>

      {filteredComponents.length > 0 ? (
        <Core.GdsGrid
          columns="1; xs{2}; l{3}"
          gap="l"
          max-width="180ch"
          margin="4xl 0 0 0"
        >
          {filteredComponents.map((component) => (
            <Card
              key={component.title}
              title={component.title}
              href={component.slug}
              summary={component.summary}
              beta={component.beta}
              snippet={component.hero_snippet}
              list={false}
              type="pattern"
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
            No patterns found matching <strong>{query}</strong>
          </Core.GdsText>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
