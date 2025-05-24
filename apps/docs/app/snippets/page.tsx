'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import * as Core from '@sebgroup/green-core/react'
import { calculateScore } from '../search/utils/fuzzy'

interface Snippet {
  title: string
  slug: string
  path: string
}

interface SnippetsResponse {
  snippets: Snippet[]
  total: number
  lastUpdated: string
}

export default function Snippets() {
  const [snippets, setSnippets] = useState<Snippet[]>([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSnippets = async () => {
      try {
        const response = await fetch(
          'https://api.seb.io/snippets/snippets.json',
        )
        const data: SnippetsResponse = await response.json()
        setSnippets(
          data.snippets.sort((a, b) => a.title.localeCompare(b.title)),
        )
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching snippets:', error)
        setIsLoading(false)
      }
    }

    fetchSnippets()
  }, [])

  const filteredSnippets = !query.trim()
    ? snippets
    : snippets.filter((snippet) => {
        const titleScore = calculateScore(snippet.title, query)
        return titleScore > 0
      })

  if (isLoading) return <div>Loading...</div>

  return (
    <Core.GdsFlex flex-direction="column" gap="2xl" padding="xl">
      <Core.GdsFlex
        justify-content="center"
        align-items="center"
        flex-direction="column"
        gap="2xl"
      >
        <Core.GdsFlex flex-direction="column" gap="m" align-items="center">
          <Core.GdsFlex gap="s">
            <Core.GdsText font-size="display-m">Snippets</Core.GdsText>
            <Core.GdsText font-size="display-m" color="positive">
              ({snippets.length})
            </Core.GdsText>
          </Core.GdsFlex>
          <Core.GdsText
            font-size="preamble-m"
            color="secondary"
            max-width="68ch"
            text-align="center"
            text-wrap="pretty"
          >
            Ready-to-use snippets built with Green Design System components.
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
        </Core.GdsFlex>
      </Core.GdsFlex>

      {filteredSnippets.length > 0 ? (
        <Core.GdsGrid columns="3" gap="l">
          {filteredSnippets.map((snippet) => (
            <Link key={snippet.slug} href={`/snippet/${snippet.slug}`}>
              <Core.GdsCard key={snippet.slug} height="100%">
                <Core.GdsFlex flex-direction="column" gap="xl">
                  <Core.GdsText font-size="display-m">
                    {snippet.title}
                  </Core.GdsText>

                  <Core.GdsFlex
                    align-items="center"
                    justify-content="space-between"
                    gap="s"
                  >
                    <Core.GdsText color="secondary">View Snippet</Core.GdsText>
                    <Core.IconArrowRight />
                  </Core.GdsFlex>
                </Core.GdsFlex>
              </Core.GdsCard>
            </Link>
          ))}
        </Core.GdsGrid>
      ) : (
        <Core.GdsFlex
          justify-content="center"
          align-items="center"
          padding="2xl"
        >
          <Core.GdsText color="secondary">
            No snippets found matching "{query}"
          </Core.GdsText>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
