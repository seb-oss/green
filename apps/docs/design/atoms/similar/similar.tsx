// design/atoms/similar/similar.tsx
'use client'

import * as Core from '@sebgroup/green-core/react'
import { useContentContext } from '../../../settings/content'
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
          <Core.GdsCard
            key={component.slug}
            border-color="primary"
            variant="secondary"
            border-radius="m"
            padding="2xs 2xs l 2xs"
            gap="s"
            height="100%"
          >
            <Core.GdsCard
              height="240px"
              overflow="hidden"
              width="100%"
              align-items="center"
              justify-content="center"
              variant="secondary"
              padding="0"
            >
              {component.hero_snippet && (
                <Snippet slug={component.hero_snippet} />
              )}
            </Core.GdsCard>
            <Core.GdsFlex
              flex-direction="column"
              gap="xs"
              padding-inline="m"
              flex="1"
            >
              <Core.GdsFlex gap="s" align-items="center">
                <Core.GdsText font-size="display-xs">
                  {component.title}
                </Core.GdsText>
                {component.beta && (
                  <Core.GdsBadge size="small" variant="notice" rounded>
                    BETA
                  </Core.GdsBadge>
                )}
              </Core.GdsFlex>

              {component.summary && (
                <Core.GdsText
                  color="secondary"
                  font-size="detail-xs"
                  lines={2}
                  width="40ch"
                >
                  {component.summary}
                </Core.GdsText>
              )}

              <Core.GdsLink
                href={`/component/${component.slug}`}
                margin="auto 0 0 0"
              >
                <Core.GdsText color="secondary">View Component</Core.GdsText>
                <Core.IconArrowRight slot="trail" />
              </Core.GdsLink>
            </Core.GdsFlex>
          </Core.GdsCard>
        ))}
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
