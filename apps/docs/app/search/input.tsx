// app/search/input.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useDebounce } from './utils/debounce'

interface SearchInputProps {
  defaultValue?: string
  filter: string
  onFilterChange: (value: string) => void
}

export function SearchInput({
  defaultValue = '',
  filter,
  onFilterChange,
}: SearchInputProps) {
  const router = useRouter()
  const [query, setQuery] = useState(defaultValue)
  const debouncedQuery = useDebounce(query, 300)

  useEffect(() => {
    if (debouncedQuery.trim()) {
      router.push(`/search/${encodeURIComponent(debouncedQuery.trim())}`)
    } else {
      router.push('/search')
    }
  }, [debouncedQuery, router])

  return (
    <div className="search-container">
      <div className="search-input">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search components and templates..."
          autoFocus
        />
        {query && (
          <button
            className="clear-button"
            onClick={() => {
              setQuery('')
              router.push('/search')
            }}
          >
            ✕
          </button>
        )}
      </div>
      <select
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className="search-filter"
      >
        <option value="all">All</option>
        <option value="components">Components</option>
        <option value="templates">Templates</option>
      </select>
    </div>
  )
}
