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

type FilterType = 'all' | 'stable' | 'beta' | 'layout'

interface FilterOption {
  type: FilterType
  label: string
}

const filterOptions: FilterOption[] = [
  { type: 'all', label: 'All' },
  { type: 'stable', label: 'Stable' },
  { type: 'layout', label: 'Layout' },
  { type: 'beta', label: 'Beta' },
]

export function ComponentsClient() {
  const { isLoaded, actions } = useContentContext()
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<FilterType>('all')

  const components = actions.getComponents({
    sort: (a, b) => a.title.localeCompare(b.title),
  })

  const filteredComponents = useMemo(() => {
    return components.filter((component) => {
      switch (filter) {
        case 'stable':
          if (component.beta) return false
          break
        case 'beta':
          if (!component.beta) return false
          break
        case 'layout': {
          const isLayout = Array.isArray(component.category)
            ? component.category.includes('Layout')
            : component.category === 'Layout'
          if (!isLayout) return false
          break
        }
        case 'all':
        default:
          break
      }

      if (!query.trim()) return true

      const titleScore = calculateScore(component.title, query)
      const summaryScore = component.summary
        ? calculateScore(component.summary, query)
        : 0

      return titleScore > 0 || summaryScore > 0
    })
  }, [components, query, filter])

  const counts = useMemo(() => {
    return {
      all: components.length,
      stable: components.filter((component) => !component.beta).length,
      beta: components.filter((component) => component.beta).length,
      layout: components.filter((component) =>
        Array.isArray(component.category)
          ? component.category.includes('Layout')
          : component.category === 'Layout',
      ).length,
    }
  }, [components])

  const handleFilterChange = (event: CustomEvent) => {
    const selectedFilter = event.detail.value as FilterType
    setFilter(selectedFilter)
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="2xl" width="100%" font="body-s">
      <Core.GdsBreadcrumbs size="small">
        <Link component="link" href="/">
          <Core.IconHomeOpen size="m" slot="lead" />
          Home
        </Link>
        <Core.GdsText>Components</Core.GdsText>
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
              Components
            </Core.GdsText>
          </Core.GdsFlex>
          <Core.GdsText
            font="heading-s"
            color="neutral-02"
            max-width="68ch"
            text-wrap="pretty"
            text-align="center"
          >
            Building blocks for creating user interfaces.
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

          <Core.GdsFlex
            grid-column="1 / span 6"
            height="100%"
            align-items="center"
            justify-content="flex-start"
          >
            <Core.GdsFilterChips value={filter} onchange={handleFilterChange}>
              {filterOptions.map((option) => (
                <Core.GdsFilterChip
                  key={option.type}
                  value={option.type}
                  size="small"
                  selected={filter === option.type}
                >
                  {option.label} ({counts[option.type]})
                </Core.GdsFilterChip>
              ))}
            </Core.GdsFilterChips>
          </Core.GdsFlex>
        </Core.GdsGrid>
      </Core.GdsFlex>

      {filteredComponents.length > 0 ? (
        <Core.GdsGrid columns="1; xs{2}; l{3}" gap="l" max-width="180ch">
          {filteredComponents.map((component) => (
            <Card
              key={filteredComponents + component.title}
              title={component.title}
              href={component.slug}
              summary={component.summary}
              beta={component.beta}
              layout={
                Array.isArray(component.category)
                  ? component.category.includes('Layout')
                  : component.category === 'Layout'
              }
              snippet={component.hero_snippet}
              list={false}
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
            No components found matching <strong>{query}</strong>
          </Core.GdsText>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
