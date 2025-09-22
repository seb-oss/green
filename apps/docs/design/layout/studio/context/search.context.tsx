'use client'

// studio/context/search.context.tsx
import { createContext, ReactNode, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

interface SearchContextType {
  query: string
  category: string
  setQuery: (query: string) => void
  setCategory: (category: string) => void
  getCategories: (pageType: string) => string[]
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const router = useRouter()

  const getCategories = (pageType: string) => {
    switch (pageType) {
      case 'colors':
        return ['L1', 'L2', 'L3', 'content', 'border', 'state']
      case 'motion':
        return ['easing', 'duration']
      case 'typography':
        return ['heading', 'body', 'detail']
      default:
        return []
    }
  }

  return (
    <SearchContext.Provider
      value={{
        query,
        category,
        setQuery,
        setCategory,
        getCategories,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => {
  const context = useContext(SearchContext)
  if (!context) throw new Error('useSearch must be used within SearchProvider')
  return context
}
