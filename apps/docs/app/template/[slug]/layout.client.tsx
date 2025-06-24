// app/template/[slug]/layout.client.tsx
'use client'

import React from 'react'
import { notFound } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import Breadcrumbs from '../../../design/atoms/breadcrumb/breadcrumb'
import Card from '../../../design/atoms/card/card'
import { Link } from '../../../design/atoms/link/link'
import { useContent } from '../../../settings/content'
import { ComponentContent } from '../../../settings/content/types'

interface TemplateLayoutClientProps {
  children: React.ReactNode
  slug: string
}

export function TemplateLayoutClient({
  children,
  slug,
}: TemplateLayoutClientProps) {
  const { isLoaded, actions } = useContent()

  if (!isLoaded) return null

  const template = actions.getTemplate(slug)
  if (!template) {
    notFound()
  }

  const relatedComponents: ComponentContent[] = template.related_components
    ? template.related_components
        .map((componentSlug) =>
          actions.getComponent(componentSlug.toLocaleLowerCase()),
        )
        .filter(
          (component): component is ComponentContent => component !== undefined,
        )
    : []

  return (
    <Core.GdsFlex
      flex-direction="column"
      gap="2xl"
      max-width="840px"
      width="100%"
      margin="0 auto"
    >
      <Core.GdsFlex flex-direction="column" gap="m" padding="0">
        <Core.GdsBreadcrumbs size="small">
          <Link component="link" href="/">
            <Core.IconHomeOpen size="m" slot="lead" />
            Home
          </Link>
          <Link component="link" href="/templates">
            <Core.IconDevices size="m" slot="lead" />
            Templates
          </Link>
          <Core.GdsText>{template.title}</Core.GdsText>
        </Core.GdsBreadcrumbs>
        <Core.GdsText tag="h1" font-size="heading-xl">
          {template.title}
        </Core.GdsText>

        <Core.GdsCard
          height="280px"
          justify-content="center"
          align-items="center"
          position="relative"
          overflow="hidden"
          padding="0"
        >
          <Core.GdsText>Template Preview</Core.GdsText>
        </Core.GdsCard>
      </Core.GdsFlex>

      {children}

      {template.code && (
        <Core.GdsFlex flex-direction="column" gap="m">
          <Core.GdsText tag="h2">Implementation</Core.GdsText>
          <Core.GdsCard padding="m">
            <pre>
              <code>{template.code}</code>
            </pre>
          </Core.GdsCard>
        </Core.GdsFlex>
      )}

      {relatedComponents.length > 0 && (
        <Core.GdsFlex flex-direction="column" gap="m">
          <Core.GdsText tag="h2" font-size="heading-m">
            Built with these components
          </Core.GdsText>
          <Core.GdsGrid columns="1; l{2}" gap="l" max-width="180ch">
            {relatedComponents.map((component) => (
              <Card
                key={component.title}
                title={component.title}
                href={`/component/${component.slug}`}
                summary={component.summary}
                beta={component.beta}
                snippet={component.hero_snippet}
                list={false}
              />
            ))}
          </Core.GdsGrid>
        </Core.GdsFlex>
      )}
    </Core.GdsFlex>
  )
}
