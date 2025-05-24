// app/component/[slug]/useContent.ts
'use client'

import { useEffect, useState } from 'react'

interface ComponentContent {
  title: string
  slug: string
  hero_snippet?: string
  beta?: boolean
  summary?: string
  tags?: string[]
  category?: string[]
  platform?: {
    web: boolean
    ios: boolean
    android: boolean
  }
  overview?: {
    column: {
      title: string
      column_title_tag: string
      description: string
    }[]
  }[]
  'ux-text'?: {
    section: {
      title: string
      description: string
    }[]
  }
  accessibility?: {
    section: {
      title: string
      description: string
    }[]
  }
}

export function useContent(slug: string) {
  const [content, setContent] = useState<ComponentContent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await fetch(
          `https://api.seb.io/components/${slug}/${slug}.content.json`,
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch content: ${response.status}`)
        }

        const data = await response.json()
        setContent(data)
      } catch (err) {
        console.error('Error fetching content:', err)
        setError(err instanceof Error ? err.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchContent()
    }
  }, [slug])

  return { content, loading, error }
}
