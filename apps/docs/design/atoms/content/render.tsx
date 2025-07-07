// design/atoms/content/content-renderer.tsx
'use client'

import React, { useState } from 'react'
import { marked } from 'marked'

import './render.css'

import * as Core from '@sebgroup/green-core/react'
import { getContentSections, ID } from '../../../hooks'
import {
  ComponentColumn,
  ComponentSection,
  ImageProvider,
} from '../../../settings/content/types'
import { RenderColumn } from './content'

interface ContentRendererProps {
  content: ComponentSection[] | null
  slug: string
  imageProvider?: ImageProvider
  isAccessibility?: boolean
}

const processColumns = (columns: ComponentColumn[]) => {
  const processedColumns: (ComponentColumn | ComponentColumn[])[] = []
  let detailsGroup: ComponentColumn[] = []

  columns.forEach((column, index) => {
    if (column.type === 'details') {
      detailsGroup.push(column)

      if (
        index === columns.length - 1 ||
        columns[index + 1]?.type !== 'details'
      ) {
        if (detailsGroup.length > 0) {
          processedColumns.push([...detailsGroup])
          detailsGroup = []
        }
      }
    } else {
      if (detailsGroup.length > 0) {
        processedColumns.push([...detailsGroup])
        detailsGroup = []
      }
      processedColumns.push(column)
    }
  })

  return processedColumns
}

export function Render({
  content,
  slug,
  imageProvider,
  isAccessibility = false,
}: ContentRendererProps) {
  if (!content || !Array.isArray(content)) return null
  const sections = getContentSections(content)

  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  const handleCopyLink = (sectionId: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`
    navigator.clipboard.writeText(url)
  }

  return (
    <Core.GdsFlex flex-direction="column" gap="4xl" width="100%" data-section>
      {sections.map((section: ComponentSection, index: number) => {
        const sectionId = section.title
          ? ID(
              section.title,
              !section.tag || section.tag === 'H2'
                ? (section as any)._h2Index
                : index,
            )
          : ''

        return (
          <Core.GdsFlex key={index} flex-direction="column" gap="l">
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsFlex
                position="relative"
                align-items="center"
                gap="xs"
                onMouseEnter={() => setHoveredSection(sectionId)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                {section.title && (
                  <Core.GdsText
                    tag={section.tag || 'h2'}
                    id={ID(
                      section.title,
                      !section.tag || section.tag === 'H2'
                        ? (section as any)._h2Index
                        : index,
                    )}
                  >
                    {section.title}
                  </Core.GdsText>
                )}
                {hoveredSection === sectionId && (
                  <Core.GdsButton
                    rank="tertiary"
                    size="small"
                    onClick={() => handleCopyLink(sectionId)}
                    href={`#${sectionId}`}
                  >
                    <Core.IconChainLink size="s" />
                  </Core.GdsButton>
                )}
              </Core.GdsFlex>
              {section['section-content'] && (
                <Core.GdsRichText>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: section['section-content']
                        ? marked.parse(section['section-content'], {
                            async: false,
                          })
                        : '',
                    }}
                    style={{
                      textWrap: 'pretty',
                    }}
                  />
                </Core.GdsRichText>
              )}
            </Core.GdsFlex>
            {section.columns && (
              <Core.GdsGrid
                columns={`1; s{${section.cols == '3' ? '2' : '1'}}; m{${section.cols || '2'}}`}
                gap="2xl; m{2xl m}"
                max-width="100%"
              >
                {processColumns(section.columns).map((column, colIndex) => (
                  <React.Fragment key={colIndex}>
                    {Array.isArray(column) ? (
                      <Core.GdsFlex flex-direction="column" gap="xs">
                        {column.map((detailsColumn, detailsIndex) => (
                          <React.Fragment key={detailsIndex}>
                            {RenderColumn(detailsColumn, slug, imageProvider)}
                          </React.Fragment>
                        ))}
                      </Core.GdsFlex>
                    ) : (
                      RenderColumn(column, slug, imageProvider)
                    )}
                  </React.Fragment>
                ))}
              </Core.GdsGrid>
            )}
          </Core.GdsFlex>
        )
      })}
    </Core.GdsFlex>
  )
}
