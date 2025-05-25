// app/component/[slug]/ux-text/page.tsx
'use client'

import { use } from 'react'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../../settings/content'

interface UXTextPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function UXTextPage({ params }: UXTextPageProps) {
  const { slug } = use(params)
  const { isLoaded, actions } = useContent()

  if (!isLoaded) return null

  const component = actions.getComponent(slug)

  if (!component?.['ux-text']) return null

  return (
    <Core.GdsFlex flex-direction="column" gap="xl" padding="xl">
      {component['ux-text'].section.map((section, index) => (
        <div key={index}>
          <Core.GdsText font-size="display-s">{section.title}</Core.GdsText>
          <Core.GdsText>{section.description}</Core.GdsText>
        </div>
      ))}
    </Core.GdsFlex>
  )
}
