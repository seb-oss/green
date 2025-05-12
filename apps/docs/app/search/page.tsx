// app/search/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

import { SearchInput } from './input'
import { useSearch } from './layout'

export default function SearchPage() {
  const { components, templates, isLoading } = useSearch()
  const [filter, setFilter] = useState('all')

  const filteredItems = () => {
    if (filter === 'components') return components
    if (filter === 'templates') return templates
    return [...components, ...templates]
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <div className="search-page">
      <header className="search-header">
        <h1>Search</h1>
        <SearchInput filter={filter} onFilterChange={setFilter} />
      </header>

      <div className="search-content">
        <div className="results-list">
          {filteredItems().map((item) => (
            <Link
              key={item.slug}
              href={`/${'related_components' in item ? 'template' : 'component'}/${item.slug}`}
              className="result-card"
            >
              <div className="result-header">
                <h3>{item.title}</h3>
                <span className="result-type">
                  {'related_components' in item ? 'template' : 'component'}
                </span>
              </div>
              {'summary' in item && item.summary && (
                <p className="result-summary">{item.summary}</p>
              )}
              {'related_components' in item &&
                item.related_components.length > 0 && (
                  <div className="related-components">
                    <span>Related: </span>
                    {item.related_components.join(', ')}
                  </div>
                )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
