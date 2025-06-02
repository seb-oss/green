// app/component/[slug]/overview.client.tsx
'use client'

import React from 'react'
import Figure from 'apps/docs/design/atoms/figure/figure'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../settings/content'
import { ComponentColumn } from '../../../settings/content/types'

interface OverviewClientProps {
  slug: string
}

export function OverviewClient({ slug }: OverviewClientProps) {
  const { isLoaded, actions } = useContent()

  if (!isLoaded) return null

  const component = actions.getComponent(slug)

  if (!component?.overview) return null

  const renderColumn = (column: ComponentColumn) => {
    switch (column.type) {
      case 'rich-text':
        return (
          <Core.GdsFlex flex-direction="column" gap="m">
            {column.title && (
              <Core.GdsText tag={column.tag || 'h3'} font-size="display-s">
                {column.title}
              </Core.GdsText>
            )}
            <Core.GdsText tag="p">{column.content}</Core.GdsText>
          </Core.GdsFlex>
        )

      case 'snippet':
        return <div className="snippet-container">{column.Snippet}</div>

      case 'image':
        if (!column['img']) return null

        const image = actions.getComponentImage(slug, column['img'])
        if (!image?.svg) return null

        return <Figure id={image.svg} caption={column.caption} />
    }
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="xl" width="100%">
      {component.overview.map((section, index) => (
        <Core.GdsFlex key={index} flex-direction="column" gap="l">
          {section.title && (
            <Core.GdsText tag={section.tag || 'h2'} font-size="display-m">
              {section.title}
            </Core.GdsText>
          )}

          <Core.GdsGrid columns={section.cols} gap="m" max-width="100%">
            {section.columns?.map((column, colIndex) => (
              <React.Fragment key={colIndex}>
                {renderColumn(column)}
              </React.Fragment>
            ))}
          </Core.GdsGrid>
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
