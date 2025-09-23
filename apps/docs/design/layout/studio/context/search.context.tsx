'use client'

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

interface SearchContextType {
  takeover: boolean
  query: string
  category: string
  setTakeover: (takeover: boolean) => void
  setQuery: (query: string) => void
  setCategory: (category: string) => void
  getCategories: (pageType: string) => string[]
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('')
  const [takeover, setTakeover] = useState(false)

  // Handle keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check for Ctrl + /
      if (event.ctrlKey && event.key === '/') {
        event.preventDefault() // Prevent default browser behavior
        setTakeover((prev) => !prev) // Toggle takeover state
      }

      // Also handle Escape key to exit takeover mode
      if (event.key === 'Escape' && takeover) {
        setTakeover(false)
      }
    }

    // Add event listener
    window.addEventListener('keydown', handleKeyDown)

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [takeover])

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
        takeover,
        setTakeover,
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
