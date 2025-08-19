// app/components/page.client.tsx
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

export function ComponentsClient() {
  const { isLoaded, actions } = useContentContext()
  const [view, setView] = useState<'grid' | 'list'>('grid')
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [filter, setFilter] = useState<'all' | 'beta'>('all')

  const components = actions.getComponents({
    sort: (a, b) => a.title.localeCompare(b.title),
  })

  const categories = useMemo(() => {
    const allCategories = components
      .flatMap((component) => component.category || [])
      .filter(Boolean)

    return [...new Set(allCategories)].sort()
  }, [components])

  const filteredComponents = useMemo(() => {
    return components.filter((component) => {
      // First check beta filter
      if (filter === 'beta' && !component.beta) {
        return false
      }

      // Then check category filter
      if (selectedCategory && !component.category?.includes(selectedCategory)) {
        return false
      }

      // Finally check search query
      if (!query.trim()) return true

      const titleScore = calculateScore(component.title, query)
      const summaryScore = component.summary
        ? calculateScore(component.summary, query)
        : 0

      return titleScore > 0 || summaryScore > 0
    })
  }, [components, query, selectedCategory, filter])

  const handleCategoryChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setSelectedCategory(target.value)
  }

  const handleViewChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setView(target.value as 'grid' | 'list')
  }

  const handleFilterChange = (newFilter: 'all' | 'beta') => {
    setFilter(newFilter)
  }

  const counts = useMemo(() => {
    return {
      all: components.length,
      beta: components.filter((component) => component.beta).length,
    }
  }, [components])

  if (!isLoaded) return <div>Loading...</div>

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap="2xl"
      width="100%"
      font-size="body-s"
    >
      <Core.GdsFlex
        justify-content="center"
        align-items="flex-start"
        flex-direction="column"
        gap="2xl"
      >
        <Core.GdsFlex flex-direction="column" gap="m" align-items="flex-start">
          <Core.GdsFlex gap="s">
            <Core.GdsText font-size="display-m">Components</Core.GdsText>
            <Core.GdsText font-size="display-m" color="positive">
              ({components.length})
            </Core.GdsText>
          </Core.GdsFlex>
          <Core.GdsText
            font-size="preamble-m"
            color="secondary"
            max-width="68ch"
            text-wrap="pretty"
          >
            Interactive building blocks for creating user interfaces.
          </Core.GdsText>
        </Core.GdsFlex>

        <Core.GdsGrid
          columns="6"
          gap="l"
          border-color="primary"
          border-width="0 0 4xs 0"
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

          <Core.GdsFlex>
            <Core.GdsDropdown plain oninput={handleCategoryChange}>
              <Core.GdsOption value="">All Categories</Core.GdsOption>
              {categories.map((category) => (
                <Core.GdsOption key={category} value={category}>
                  {category}
                </Core.GdsOption>
              ))}
            </Core.GdsDropdown>
          </Core.GdsFlex>
          <Core.GdsFlex
            grid-column="1 / span 5"
            height="100%"
            align-items="center"
            justify-content="flex-start"
            gap="l"
          >
            <Core.GdsFlex
              color="secondary"
              padding="0 2xs"
              gap="s"
              align-items="center"
            >
              <Core.GdsButton
                size="small"
                rank={filter === 'all' ? 'secondary' : 'tertiary'}
                onClick={() => handleFilterChange('all')}
              >
                All
                <Core.GdsBadge slot="trail" variant="none" rounded size="small">
                  {counts.all}
                </Core.GdsBadge>
              </Core.GdsButton>
              <Core.GdsButton
                size="small"
                rank={filter === 'beta' ? 'secondary' : 'tertiary'}
                onClick={() => handleFilterChange('beta')}
              >
                Beta
                <Core.GdsBadge slot="trail" variant="none" rounded size="small">
                  {counts.beta}
                </Core.GdsBadge>
              </Core.GdsButton>
            </Core.GdsFlex>
          </Core.GdsFlex>
          <Core.GdsFlex>
            <Core.GdsSegmentedControl
              size="small"
              value={view}
              onchange={handleViewChange}
            >
              <Core.GdsSegment value="grid">Grid</Core.GdsSegment>
              <Core.GdsSegment value="list">List</Core.GdsSegment>
            </Core.GdsSegmentedControl>
          </Core.GdsFlex>
        </Core.GdsGrid>
      </Core.GdsFlex>

      {filteredComponents.length > 0 ? (
        <Core.GdsGrid
          columns={view === 'grid' ? '1; l{2} xl{3}' : '1'}
          gap="l"
          max-width="180ch"
        >
          {filteredComponents.map((component) => (
            <Card
              key={component.title}
              title={component.title}
              href={component.slug}
              summary={component.summary}
              beta={component.beta}
              snippet={component.hero_snippet}
              list={view == 'list'}
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
