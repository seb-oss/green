// app/components/page.client.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

import * as Core from '@sebgroup/green-core/react'
import { useContentContext } from '../../settings/content'

function calculateScore(text: string, query: string): number {
  const normalizedText = text.toLowerCase()
  const normalizedQuery = query.toLowerCase()
  return normalizedText.includes(normalizedQuery) ? 1 : 0
}

export function ComponentsClient() {
  const { isLoaded, actions } = useContentContext()
  const [query, setQuery] = useState('')

  const components = actions.getComponents({
    sort: (a, b) => a.title.localeCompare(b.title),
  })

  const filteredComponents = !query.trim()
    ? components
    : components.filter((component) => {
        const titleScore = calculateScore(component.title, query)
        const summaryScore = component.summary
          ? calculateScore(component.summary, query)
          : 0
        return titleScore > 0 || summaryScore > 0
      })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <Core.GdsFlex flex-direction="column" gap="2xl" padding="0 xl">
      <Core.GdsFlex
        justify-content="center"
        align-items="flex-start"
        flex-direction="column"
        gap="2xl"
      >
        <Core.GdsFlex flex-direction="column" gap="m" align-items="flex-start">
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
          >
            <Core.IconMagnifyingGlass slot="lead" />
          </Core.GdsInput>
        </Core.GdsFlex>
      </Core.GdsFlex>

      {filteredComponents.length > 0 ? (
        <Core.GdsGrid columns="4" gap="l">
          {filteredComponents.map((component) => (
            <Link key={component.slug} href={`/component/${component.slug}`}>
              <Core.GdsCard height="100%">
                <Core.GdsFlex flex-direction="column" gap="s" height="100%">
                  <Core.GdsText font-size="display-xs">
                    {component.title}
                  </Core.GdsText>

                  {/* {component.summary && (
                    <Core.GdsText
                      color="secondary"
                      font-size="preamble-m"
                      margin="0 0 m 0"
                    >
                      {component.summary}
                    </Core.GdsText>
                  )} */}

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
            No components found matching {query}
          </Core.GdsText>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
