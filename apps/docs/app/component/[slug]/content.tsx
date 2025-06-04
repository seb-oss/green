// app/component/[slug]/shared/ContentSection.tsx
'use client'

import React from 'react'
import Figure from 'apps/docs/design/atoms/figure/figure'

import * as Core from '@sebgroup/green-core/react'
import { useContent } from '../../../settings/content'
import {
  ComponentColumn,
  ComponentSection,
} from '../../../settings/content/types'

interface ContentSectionProps {
  slug: string
  contentKey: 'overview' | 'ux-text' | 'accessibility'
}

export function ContentSection({ slug, contentKey }: ContentSectionProps) {
  const { isLoaded, actions } = useContent()

  if (!isLoaded) return null

  const component = actions.getComponent(slug)

  console.log('ContentSection:', {
    slug,
    contentKey,
    component,
    hasContent: component?.[contentKey],
    contentStructure: component?.[contentKey],
  })

  if (!component) return null

  // Handle different content structures based on contentKey
  const content = (() => {
    switch (contentKey) {
      case 'overview':
        return component.overview
      case 'ux-text':
        // return component['ux-text']?.section
        return component['ux-text']?.section || component['ux-text']
      case 'accessibility':
        return component.accessibility?.section
      default:
        return null
    }
  })()

  if (!content) return null

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
      {content.map((section: ComponentSection, index: number) => (
        <Core.GdsFlex key={index} flex-direction="column" gap="l">
          {section.title && (
            <Core.GdsText tag={section.tag || 'h2'} font-size="display-m">
              {section.title}
            </Core.GdsText>
          )}

          {/* Handle different section structures */}
          {contentKey === 'accessibility' ? (
            <Core.GdsText>{(section as any).description}</Core.GdsText>
          ) : (
            section.columns && (
              <Core.GdsGrid columns={section.cols} gap="m" max-width="100%">
                {section.columns.map((column, colIndex) => (
                  <React.Fragment key={colIndex}>
                    {renderColumn(column)}
                  </React.Fragment>
                ))}
              </Core.GdsGrid>
            )
          )}
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
