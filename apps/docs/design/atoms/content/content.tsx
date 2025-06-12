// design/atoms/content/content.tsx
'use client'

import React from 'react'
import { marked } from 'marked'

import * as Core from '@sebgroup/green-core/react'
import { ComponentColumn, ImageProvider } from '../../../settings/content/types'
import Figure from '../figure/figure'

export const renderColumn = (
  column: ComponentColumn,
  slug: string,
  imageProvider?: ImageProvider,
) => {
  switch (column.type) {
    case 'rich-text':
      return (
        <Core.GdsFlex flex-direction="column" gap="m">
          {column.title && (
            <Core.GdsText tag={column.tag || 'h3'} font-size="display-s">
              {column.title}
            </Core.GdsText>
          )}
          <Core.GdsRichText>
            <div
              dangerouslySetInnerHTML={{
                __html: column.content
                  ? marked.parse(column.content, { async: false })
                  : '',
              }}
            />
          </Core.GdsRichText>
        </Core.GdsFlex>
      )

    case 'snippet':
      return <div className="snippet-container">{column.Snippet}</div>

    case 'image':
      if (column.src) {
        return (
          <Core.GdsFlex
            flex-direction="column"
            max-width={column.width ? column.width : '100%'}
            gap="xs"
          >
            <Core.GdsImg
              src={'https://api.seb.io' + column.src}
              width={column.width ? column.width : '100%'}
              height={column.ratio ? 'auto' : column.height || 'auto'}
              aspect-ratio={column.ratio || 'auto'}
              object-fit="cover"
              border-radius="xs"
            />
            {column.caption && (
              <Core.GdsText
                tag="figcaption"
                font-size="detail-s"
                color="secondary"
              >
                {column.caption}
              </Core.GdsText>
            )}
          </Core.GdsFlex>
        )
      }
      return null

    case 'paragraph':
      return (
        <Core.GdsText font-size={column.size} tag={column.tag}>
          {column.text}
        </Core.GdsText>
      )

    case 'figma':
      if (!column.node || !imageProvider?.getImage) return null
      const image = imageProvider.getImage(slug, column.node)
      if (!image?.svg) return null
      return <Figure id={image.svg} caption={column.caption} />

    default:
      return null
  }
}
