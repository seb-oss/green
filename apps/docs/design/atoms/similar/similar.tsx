// design/atoms/similar/similar.tsx
'use client'

import * as Core from '@sebgroup/green-core/react'
import { useContentContext } from '../../../settings/content'
import Card from '../card/card'
import { Snippet } from '../snippet/snippet'

interface SimilarProps {
  tag?: string
  currentSlug?: string
}

export function Similar({ tag, currentSlug }: SimilarProps) {
  const { isLoaded, actions } = useContentContext()

  if (!isLoaded || !tag) return null

  const similarComponents = actions
    .getComponents({
      filter: (component) => {
        // Skip if no tags or if it's the current component
        if (!component.tags || component.slug === currentSlug) {
          return false
        }
        // Only include components with matching tag
        return component.tags.includes(tag)
      },
      sort: (a, b) => a.title.localeCompare(b.title),
    })
    .slice(0, 4)

  if (similarComponents.length === 0) return null

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap="xl"
      margin="4xl 0"
      width="100%"
      border-color="primary"
      border-width="4xs 0 0 0"
      padding="m 0 0 0"
    >
      <Core.GdsFlex
        justify-content="space-between"
        align-items="center"
        width="100%"
        padding="0 2xs"
      >
        <Core.GdsText color="secondary" font-size="detail-xs">
          Similar components
        </Core.GdsText>
        <Core.GdsLink href={`/components/${tag.toLowerCase()}`}>
          View all
          <Core.IconArrowRight slot="trail" />
        </Core.GdsLink>
      </Core.GdsFlex>

      <Core.GdsGrid columns="1; l{2}" gap="l" width="100%">
        {similarComponents.map((component) => (
          <Card
            key={component.slug}
            title={component.title}
            beta={component.beta}
            summary={component.summary}
            href={component.slug}
            snippet={component.hero_snippet}
          />
        ))}
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
