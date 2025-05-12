// app/search/[query]/page.tsx
'use client'

import { use, useState } from 'react'
import Link from 'next/link'

import { SearchInput } from '../input'
import { useSearch } from '../layout'
import { calculateScore } from '../utils/fuzzy'

export default function SearchResultsPage({
  params,
}: {
  params: Promise<{ query: string }>
}) {
  const resolvedParams = use(params)
  const query = decodeURIComponent(resolvedParams.query)
  const { components, templates, isLoading } = useSearch()
  const [filter, setFilter] = useState('all')

  const getSearchResults = () => {
    const results = []

    if (filter === 'all' || filter === 'components') {
      for (const component of components) {
        const titleScore = calculateScore(component.title, query)
        const summaryScore = component.summary
          ? calculateScore(component.summary, query)
          : 0
        if (Math.max(titleScore, summaryScore) > 0) {
          results.push(component)
        }
      }
    }

    if (filter === 'all' || filter === 'templates') {
      for (const template of templates) {
        if (calculateScore(template.title, query) > 0) {
          results.push(template)
        }
      }
    }

    return results
  }

  if (isLoading) return <div>Loading...</div>

  const results = getSearchResults()

  return (
    <div className="search-page">
      <header className="search-header">
        <h1>Search Results</h1>
        <SearchInput
          defaultValue={query}
          filter={filter}
          onFilterChange={setFilter}
        />
      </header>

      <div className="search-results">
        {results.length > 0 ? (
          <div className="results-list">
            {results.map((result) => (
              <Link
                key={result.slug}
                href={`/${'related_components' in result ? 'template' : 'component'}/${result.slug}`}
                className="result-card"
              >
                <div className="result-header">
                  <h2>{result.title}</h2>
                  <span className="result-type">
                    {'related_components' in result ? 'template' : 'component'}
                  </span>
                </div>
                {'summary' in result && result.summary && (
                  <p className="result-summary">{result.summary}</p>
                )}
                {'related_components' in result &&
                  result.related_components.length > 0 && (
                    <div className="related-components">
                      <span>Related: </span>
                      {result.related_components.join(', ')}
                    </div>
                  )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No results found for "{query}"</p>
          </div>
        )}
      </div>
    </div>
  )
}
