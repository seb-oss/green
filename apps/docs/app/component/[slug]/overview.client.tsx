// app/component/[slug]/overview.client.tsx
'use client'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../settings/content'

interface OverviewClientProps {
  slug: string
}

export function OverviewClient({ slug }: OverviewClientProps) {
  const { isLoaded, actions } = useContent()

  if (!isLoaded) return null

  const component = actions.getComponent(slug)

  if (!component?.overview) return null

  return (
    <Core.GdsFlex flex-direction="column" gap="xl">
      {component.overview.map((section, index) => (
        <Core.GdsFlex key={index} flex-direction="column" gap="l">
          {section.column.map((col, colIndex) => (
            <div key={colIndex}>
              <Core.GdsText font-size="display-s">{col.title}</Core.GdsText>
              <Core.GdsText>{col.description}</Core.GdsText>
            </div>
          ))}
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
