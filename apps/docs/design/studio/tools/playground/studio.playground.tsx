'use client'

import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useSettingsContext } from '../../../../settings'
import { useContentContext } from '../../../../settings/content'
import { Snippet } from '../../../atoms/snippet/snippet'
import { studioData } from '../../data/studio.data'

export default function Playground() {
  const router = useRouter()
  const { actions } = useContentContext()
  /*   const { actions: SettingsActions } = useSettingsContext() */
  const components = actions.getComponents()

  const playgroundPage = studioData
    .flatMap((category) => category.pages)
    .find((page) => page.key === 'playground')

  const playgroundPageKeys = (playgroundPage?.pages || []).map(
    (page: any) => page.key,
  )
  const filteredComponents = components.filter((component: any) =>
    playgroundPageKeys.includes(component.slug),
  )

  return (
    <Core.GdsFlex flex-direction="column" gap="xl" className="studio-page">
      <Core.GdsGrid columns="1; m{2}" gap="l">
        {filteredComponents.map((component) => (
          <Core.GdsCardPattern01
            href={`/studio/playground/${component.slug}`}
            key={component.slug}
            title={component.title}
            excerpt={component.summary}
            variant="neutral-02"
            onClick={() => router.push(`/studio/playground/${component.slug}`)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                router.push(`/studio/playground/${component.slug}`)
              }
            }}
          >
            <Core.GdsCard
              variant="primary"
              slot="header"
              aspect-ratio="16/9"
              justify-content="center"
              align-items="center"
              inert
            >
              {component.hero_snippet && (
                <Snippet slug={component.hero_snippet} />
              )}
            </Core.GdsCard>
          </Core.GdsCardPattern01>
        ))}
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
