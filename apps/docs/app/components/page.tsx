'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import * as Core from '@sebgroup/green-core/react'
import { calculateScore } from '../search/utils/fuzzy'

interface Component {
  title: string
  slug: string
  summary?: string
  path: string
}

interface ComponentsResponse {
  components: Component[]
  total: number
  lastUpdated: string
}

export default function Components() {
  const [components, setComponents] = useState<Component[]>([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch(
          'https://api.seb.io/components/components.json',
        )
        const data: ComponentsResponse = await response.json()
        setComponents(
          data.components.sort((a, b) => a.title.localeCompare(b.title)),
        )
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching components:', error)
        setIsLoading(false)
      }
    }

    fetchComponents()
  }, [])

  const filteredComponents = !query.trim()
    ? components
    : components.filter((component) => {
        const titleScore = calculateScore(component.title, query)
        const summaryScore = component.summary
          ? calculateScore(component.summary, query)
          : 0
        return titleScore > 0 || summaryScore > 0
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
            <Core.GdsText font-size="display-m">Components</Core.GdsText>
            <Core.GdsText font-size="display-m" color="positive">
              ({components.length})
            </Core.GdsText>
          </Core.GdsFlex>
          <Core.GdsText
            font-size="preamble-m"
            color="secondary"
            max-width="68ch"
            text-align="center"
            text-wrap="pretty"
          >
            Interactive building blocks for creating user interfaces.
          </Core.GdsText>
        </Core.GdsFlex>
        <Core.GdsFlex gap="m" width="360px">
          <Core.GdsInput
            value={query}
            plain
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            clearable
            placeholder="Search components..."
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
        </Core.GdsFlex>
      </Core.GdsFlex>

      {filteredComponents.length > 0 ? (
        <Core.GdsGrid columns="3" gap="l">
          {filteredComponents.map((component) => (
            <Link key={component.slug} href={`/component/${component.slug}`}>
              <Core.GdsCard height="100%">
                <Core.GdsFlex flex-direction="column" gap="s" height="100%">
                  <Core.GdsText font-size="display-m">
                    {component.title}
                  </Core.GdsText>

                  {component.summary && (
                    <Core.GdsText
                      color="secondary"
                      font-size="preamble-m"
                      margin="0 0 m 0"
                    >
                      {component.summary}
                    </Core.GdsText>
                  )}

                  <Core.GdsFlex
                    align-items="center"
                    justify-content="space-between"
                    gap="s"
                    margin="auto 0 0 0"
                  >
                    <Core.GdsText color="secondary">
                      View Component
                    </Core.GdsText>
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
            No components found matching "{query}"
          </Core.GdsText>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
