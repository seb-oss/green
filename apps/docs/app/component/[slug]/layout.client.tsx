// app/component/[slug]/layout.client.tsx
'use client'

import Link from 'next/link'
import { notFound, usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
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
    <Core.GdsFlex flex-direction="column" gap="2xl">
      <Core.GdsFlex flex-direction="column" gap="l" padding="xl">
        <Core.GdsText font-size="display-l">{component.title}</Core.GdsText>

        {component.summary && (
          <Core.GdsText
            font-size="preamble-l"
            color="secondary"
            max-width="68ch"
          >
            {component.summary}
          </Core.GdsText>
        )}

        {component.tags && (
          <Core.GdsFlex gap="s" margin="s 0">
            {component.tags.map((tag) => (
              <Core.GdsBadge key={tag}>{tag}</Core.GdsBadge>
            ))}
          </Core.GdsFlex>
        )}

        <Core.GdsFlex gap="m">
          <Link href={`/component/${slug}`}>
            <Core.GdsText
              color={section === 'overview' ? 'primary' : 'secondary'}
            >
              Overview
            </Core.GdsText>
          </Link>
          <Link href={`/component/${slug}/ux-text`}>
            <Core.GdsText
              color={section === 'ux-text' ? 'primary' : 'secondary'}
            >
              UX Text
            </Core.GdsText>
          </Link>
          <Link href={`/component/${slug}/accessibility`}>
            <Core.GdsText
              color={section === 'accessibility' ? 'primary' : 'secondary'}
            >
              Accessibility
            </Core.GdsText>
          </Link>
        </Core.GdsFlex>
      </Core.GdsFlex>

      {children}
    </Core.GdsFlex>
  )
}
