// design/atoms/content/content-renderer.tsx
'use client'

import React from 'react'

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
    <Core.GdsFlex flex-direction="column" gap="xl" width="100%">
      {content.map((section: ComponentSection, index: number) => (
        <Core.GdsFlex key={index} flex-direction="column" gap="s">
          {section.title && (
            <Core.GdsText tag={section.tag || 'h2'} font-size="display-m">
              {section.title}
            </Core.GdsText>
          )}

          {isAccessibility ? (
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
                    {renderColumn(column, slug, imageProvider)}
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
