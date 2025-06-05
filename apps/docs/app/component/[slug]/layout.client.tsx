// app/component/[slug]/layout.client.tsx
'use client'

import { notFound, usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import Breadcrumbs from '../../../design/atoms/breadcrumb/breadcrumb'
import { Link } from '../../../design/atoms/link/link'
import { Snippet } from '../../../design/atoms/snippet/snippet'
import Tabs from '../../../design/atoms/tabs/tabs'
import { useContent } from '../../../settings/content'

interface ComponentLayoutClientProps {
  children: React.ReactNode
  slug: string
}

export function ComponentLayoutClient({
  children,
  slug,
}: ComponentLayoutClientProps) {
  const { isLoaded, actions } = useContent()
  const pathname = usePathname()
  const section = pathname.includes('/ux-text')
    ? 'ux-text'
    : pathname.includes('/accessibility')
      ? 'accessibility'
      : 'overview'

  if (!isLoaded) return null

  const component = actions.getComponent(slug)

  if (!component) {
    notFound()
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="2xl" max-width="840px">
      <Core.GdsFlex flex-direction="column" gap="m" padding="0">
        <Breadcrumbs slug={component.slug} title="Breadcrumbs" />
        <Core.GdsText tag="h1" font-size="heading-xl">
          {component.title}
        </Core.GdsText>
        <Core.GdsFlex gap="l">
          <Core.GdsFlex gap="xs" flex-direction="column">
            <Core.GdsText tag="small" color="secondary">
              Status
            </Core.GdsText>
            {component.beta && (
              <Core.GdsBadge size="small" variant="notice">
                BETA
              </Core.GdsBadge>
            )}
          </Core.GdsFlex>
          <Core.GdsFlex gap="xs" flex-direction="column">
            <Core.GdsText tag="small" color="secondary">
              Platform
            </Core.GdsText>
            {component.platform && (
              <Core.GdsFlex gap="s">
                {component.platform.web && (
                  <Core.GdsFlex align-items="center" gap="4xs">
                    <Core.IconCompassRound></Core.IconCompassRound>
                    Web
                  </Core.GdsFlex>
                )}
                {component.platform.ios && (
                  <Core.GdsFlex align-items="center" gap="4xs">
                    <Core.IconPhoneDynamicIsland></Core.IconPhoneDynamicIsland>
                    iOS
                  </Core.GdsFlex>
                )}
                {component.platform.android && (
                  <Core.GdsFlex align-items="center" gap="4xs">
                    <Core.IconRobot></Core.IconRobot>
                    Android
                  </Core.GdsFlex>
                )}
              </Core.GdsFlex>
            )}
          </Core.GdsFlex>
        </Core.GdsFlex>

        {component.summary && (
          <Core.GdsText
            tag="p"
            font-size="body-m"
            color="secondary"
            max-width="82ch"
          >
            {component.summary}
          </Core.GdsText>
        )}

        {component.tags && (
          <Core.GdsFlex gap="s" margin="s 0">
            Tags:
            {component.tags.map((tag) => (
              <Link key={tag} href={'/components/' + tag.toLocaleLowerCase()}>
                {tag}
              </Link>
            ))}
          </Core.GdsFlex>
        )}

        <Core.GdsCard
          height="280px"
          justify-content="center"
          align-items="center"
        >
          {component.hero_snippet && (
            <Snippet slug={component.hero_snippet?.toString()} />
          )}
        </Core.GdsCard>

        <Tabs slug={component.slug} />
      </Core.GdsFlex>

      {children}
    </Core.GdsFlex>
  )
}
