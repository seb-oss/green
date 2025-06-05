// app/component/[slug]/content.tsx
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

  if (!component) return null

  const getContent = (): ComponentSection[] | null => {
    switch (contentKey) {
      case 'overview':
        return component.overview || null
      case 'ux-text': {
        if (Array.isArray(component['ux-text'])) {
          return component['ux-text']
        }
        return component['ux-text']?.section || null
      }
      case 'accessibility':
        return component.accessibility?.section || null
      default:
        return null
    }
  }

  const content = getContent()

  if (!content || !Array.isArray(content)) return null

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

      case 'paragraph':
        return <Core.GdsText tag={column.tag}>{column.text}</Core.GdsText>

      case 'image':
        if (!column['img']) return null
        const image = actions.getComponentImage(slug, column['img'])
        if (!image?.svg) return null
        return <Figure id={image.svg} caption={column.caption} />

      default:
        return null
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

          {contentKey === 'accessibility' ? (
            <Core.GdsText>{(section as any).description}</Core.GdsText>
          ) : (
            section.columns && (
              <Core.GdsGrid
                columns={section.cols || '2'}
                gap="m"
                max-width="100%"
              >
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
