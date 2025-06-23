// design/atoms/content/content-renderer.tsx
'use client'

import React from 'react'
import { marked } from 'marked'

import * as Core from '@sebgroup/green-core/react'
import {
  ComponentColumn,
  ComponentSection,
  ImageProvider,
} from '../../../settings/content/types'
import { renderColumn } from './content'

interface ContentRendererProps {
  content: ComponentSection[] | null
  slug: string
  imageProvider?: ImageProvider
  isAccessibility?: boolean
}

export function Render({
  content,
  slug,
  imageProvider,
  isAccessibility = false,
}: ContentRendererProps) {
  if (!content || !Array.isArray(content)) return null

  return (
    <Core.GdsFlex flex-direction="column" gap="4xl" width="100%">
      {content.map((section: ComponentSection, index: number) => (
        <Core.GdsFlex key={index} flex-direction="column" gap="s">
          {section.title && (
            <Core.GdsText tag={section.tag || 'h2'}>
              {section.title}
            </Core.GdsText>
          )}
          {section['section-content'] && (
            <Core.GdsRichText>
              <div
                dangerouslySetInnerHTML={{
                  __html: section['section-content']
                    ? marked.parse(section['section-content'], { async: false })
                    : '',
                }}
              />
            </Core.GdsRichText>
          )}
          {section.columns && (
            <Core.GdsGrid
              columns={section.cols || '2'}
              gap="m"
              max-width="100%"
            >
              {section.columns.map((column, colIndex) => (
                <React.Fragment key={colIndex}>
                  {renderColumn(column, slug, imageProvider)}
                </React.Fragment>
              ))}
            </Core.GdsGrid>
          )}
        </Core.GdsFlex>
      ))}
    </Core.GdsFlex>
  )
}
