// app/search/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

import * as Core from '@sebgroup/green-core/react'
import { useSearch } from './layout'
import { useDebounce } from './utils/debounce'
import { calculateScore } from './utils/fuzzy'

export default function SearchPage() {
  const { components, templates, isLoading } = useSearch()
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const debouncedQuery = useDebounce(query)

  const getFilteredResults = () => {
    if (!debouncedQuery.trim()) {
      // Show all items when no search query
      if (filter === 'components') return components
      if (filter === 'templates') return templates
      return [...components, ...templates]
    }

    const results: Array<{
      title: string
      summary?: string
      slug: string
      related_components?: string[]
    }> = []

    if (filter === 'all' || filter === 'components') {
      components.forEach((component) => {
        const titleScore = calculateScore(component.title, debouncedQuery)
        const summaryScore = component.summary
          ? calculateScore(component.summary, debouncedQuery)
          : 0
        if (Math.max(titleScore, summaryScore) > 0) {
          results.push(component)
        }
      })
    }

    if (filter === 'all' || filter === 'templates') {
      templates.forEach((template) => {
        if (calculateScore(template.title, debouncedQuery) > 0) {
          results.push(template)
        }
      })
    }

    return results
  }

  if (isLoading) return <div>Loading...</div>

  const results = getFilteredResults()

  return (
    <Core.GdsFlex flex-direction="column" gap="m" padding="m">
      <Core.GdsFlex
        justify-content="center"
        align-items="center"
        flex-direction="column"
        gap="2xl"
      >
        <Core.GdsFlex flex-direction="column" gap="m" align-items="center">
          <Core.GdsFlex gap="s">
            <Core.GdsText font-size="display-m">Components</Core.GdsText>
            <Core.GdsText font-size="display-m" color="positive">
              214
            </Core.GdsText>
          </Core.GdsFlex>
          <Core.GdsText
            font-size="preamble-m"
            color="secondary"
            max-width="68ch"
            text-align="center"
            text-wrap="pretty"
          >
            Components are interactive building blocks for creating a user
            interface. On this page we’ve gathered everything.
          </Core.GdsText>
        </Core.GdsFlex>
        <Core.GdsFlex gap="m" width="360px">
          <Core.GdsInput
            value={query}
            plain
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            clearable
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
          <Core.GdsFlex width="120px">
            <Core.GdsDropdown
              value={filter}
              onChange={(e) => setFilter((e.target as HTMLSelectElement).value)}
              plain
            >
              <Core.GdsOption value="all">All</Core.GdsOption>
              <Core.GdsOption value="components">Components</Core.GdsOption>
              <Core.GdsOption value="templates">Templates</Core.GdsOption>
            </Core.GdsDropdown>
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Core.GdsFlex>

      <Core.GdsFlex flex-direction="column" gap="m" padding="m">
        <div className="results-count">
          {results.length} {filter === 'all' ? 'items' : filter} found
        </div>
        <Core.GdsGrid columns="4" gap="m">
          {results.map((item) => (
            <Link
              key={item.slug}
              href={`/${'related_components' in item ? 'template' : 'component'}/${item.slug}`}
              className="result-card"
            >
              <Core.GdsCard height="100%">
                <Core.GdsFlex gap="s">
                  <Core.GdsText>{item.title}</Core.GdsText>
                  <Core.GdsText tag="small" color="secondary">
                    {'related_components' in item ? 'template' : 'component'}
                  </Core.GdsText>
                </Core.GdsFlex>
                {'summary' in item && item.summary && (
                  <Core.GdsText tag="p">{item.summary}</Core.GdsText>
                )}
                {'related_components' in item &&
                  (item.related_components?.length ?? 0) > 0 && (
                    <div className="related-components">
                      <span>Related: </span>
                      <Core.GdsBadge>
                        {(item.related_components ?? []).join(', ')}
                      </Core.GdsBadge>
                    </div>
                  )}
              </Core.GdsCard>
            </Link>
          ))}
        </Core.GdsGrid>
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
