// app/components/[tag]/page.client.tsx
'use client'

import Link from 'next/link'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../settings/content'

interface TagComponentsClientProps {
  tag: string
}

export function TagComponentsClient({ tag }: TagComponentsClientProps) {
  const { isLoaded, actions } = useContent()

  if (!isLoaded) return null

  const components = actions.getComponents({
    filter: (component) =>
      component.tags?.some((t) => t.toLowerCase() === tag.toLowerCase()) ??
      false,
    sort: (a, b) => a.title.localeCompare(b.title),
  })

  return (
    <Core.GdsFlex flex-direction="column" gap="2xl" padding="xl">
      <Core.GdsFlex flex-direction="column" gap="m" align-items="flex-start">
        <Core.GdsFlex gap="s">
          <Core.GdsText font-size="display-m">Tag: {tag}</Core.GdsText>
          <Core.GdsText font-size="display-m" color="positive">
            ({components.length})
          </Core.GdsText>
        </Core.GdsFlex>
      </Core.GdsFlex>

      {components.length > 0 ? (
        <Core.GdsGrid columns="4" gap="l">
          {components.map((component) => (
            <Link key={component.slug} href={`/component/${component.slug}`}>
              <Core.GdsCard height="100%">
                <Core.GdsFlex flex-direction="column" gap="s" height="100%">
                  <Core.GdsText font-size="display-xs">
                    {component.title}
                  </Core.GdsText>
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
          justify-content="flex-start"
          align-items="flex-start"
          padding="2xl"
        >
          <Core.GdsText color="secondary">
            No components found with tag: {tag}
          </Core.GdsText>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
