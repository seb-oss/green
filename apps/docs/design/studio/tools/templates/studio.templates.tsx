'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../../settings/content'
import { Link } from '.././../../atoms/link/link'

export default function Templates() {
  const { isLoaded, actions } = useContent()
  const router = useRouter()
  const templates = actions.getTemplates()

  return (
    <Core.GdsFlex flex-direction="column" gap="xl" className="studio-page">
      <Core.GdsFlex flex-direction="column" gap="l">
        <Core.GdsText tag="h2">Templates</Core.GdsText>
        <Core.GdsText color="neutral-02">
          Browse and use our collection of pre-built templates
        </Core.GdsText>
      </Core.GdsFlex>

      <Core.GdsGrid columns="3" gap="l">
        {templates.map((template) => (
          <Core.GdsCard
            key={template.slug}
            padding="l"
            onClick={() => router.push(`/studio/templates/${template.slug}`)}
            variant="secondary"
            border-radius="m"
            className="linked-card"
            role="link"
          >
            <Core.GdsFlex flex-direction="column" gap="m">
              <Core.GdsText font="heading-s">{template.title}</Core.GdsText>
              {template.related_components && (
                <Core.GdsFlex gap="xs" flex-wrap="wrap">
                  {template.related_components.map((component) => (
                    <Core.GdsBadge key={component} size="small">
                      {component}
                    </Core.GdsBadge>
                  ))}
                </Core.GdsFlex>
              )}
            </Core.GdsFlex>
          </Core.GdsCard>
        ))}
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}
