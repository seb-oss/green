// app/search/layout.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Metadata } from 'next'

interface Component {
  title: string
  slug: string
  summary?: string
  status?: string
  path: string
}

interface Template {
  title: string
  slug: string
  path: string
  related_components: string[]
}

interface SearchContextType {
  components: Component[]
  templates: Template[]
  isLoading: boolean
}

const SearchContext = createContext<SearchContextType>({
  components: [],
  templates: [],
  isLoading: true,
})

export const useSearch = () => useContext(SearchContext)

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [components, setComponents] = useState<Component[]>([])
  const [templates, setTemplates] = useState<Template[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [componentsRes, templatesRes] = await Promise.all([
          fetch('https://api.seb.io/components/components.json'),
          fetch('https://api.seb.io/templates/templates.json'),
        ])

        const [componentsData, templatesData] = await Promise.all([
          componentsRes.json(),
          templatesRes.json(),
        ])

        setComponents(
          componentsData.components.sort(
            (a: { title: string }, b: { title: any }) =>
              a.title.localeCompare(b.title),
          ),
        )
        setTemplates(
          templatesData.templates.sort(
            (a: { title: string }, b: { title: any }) =>
              a.title.localeCompare(b.title),
          ),
        )
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <SearchContext.Provider value={{ components, templates, isLoading }}>
      {children}
    </SearchContext.Provider>
  )
}
