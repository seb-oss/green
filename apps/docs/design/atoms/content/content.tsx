// design/atoms/content/content.tsx
'use client'

/* eslint-disable no-case-declarations */
import React, { useEffect, useState } from 'react'
import { marked } from 'marked'

import * as Core from '@sebgroup/green-core/react'
import { useSettingsValue } from '../../../settings'
import { ComponentColumn, ImageProvider } from '../../../settings/content/types'
import Figure from '../figure/figure'
import { Snippet } from '../snippet/snippet'

export const renderColumn = (
  column: ComponentColumn,
  slug: string,
  imageProvider?: ImageProvider,
) => {
  const [overrideTheme, setOverrideTheme] = useState<'light' | 'dark' | null>(
    null,
  )
  const [isHovered, setIsHovered] = useState(false)
  const systemColorScheme = useSettingsValue((s) => s.UI.Theme.ColorScheme)

  useEffect(() => {
    setOverrideTheme(null)
  }, [systemColorScheme])

  const toggleTheme = () => {
    if (!overrideTheme) {
      setOverrideTheme(systemColorScheme === 'light' ? 'dark' : 'light')
      return
    }
    setOverrideTheme(overrideTheme === 'light' ? 'dark' : 'light')
  }

  const currentTheme = overrideTheme || systemColorScheme

  switch (column.type) {
    case 'rich-text':
      return (
        <Core.GdsFlex flex-direction="column" gap="m">
          {column.title && (
            <Core.GdsText
              tag={column.tag || 'h3'}
              max-width="80ch"
              data-paragraph
            >
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
      if (column.Snippet) {
        return (
          <Core.GdsFlex
            flex-direction="column"
            gap="s"
            width="100%"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Core.GdsTheme color-scheme={currentTheme}>
              <Core.GdsCard
                padding="xs"
                justify-content="center"
                align-items="center"
                min-height="160px"
                position="relative"
              >
                <Snippet slug={column.Snippet || ''} />

                {isHovered && (
                  <Core.GdsFlex
                    justify-content="space-between"
                    align-items="center"
                    width="max-content"
                    position="absolute"
                    inset="10px 10px auto auto"
                  >
                    <Core.GdsButton
                      rank="tertiary"
                      size="xs"
                      onClick={toggleTheme}
                    >
                      {currentTheme === 'light' ? (
                        <Core.IconMoon size="s" />
                      ) : (
                        <Core.IconSun size="s" />
                      )}
                    </Core.GdsButton>
                  </Core.GdsFlex>
                )}
              </Core.GdsCard>
            </Core.GdsTheme>

            {column.caption && (
              <Core.GdsText tag="small" padding-inline="s 0" color="secondary">
                {column.caption}
              </Core.GdsText>
            )}
          </Core.GdsFlex>
        )
      }
      return null

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
        <Core.GdsText
          font-size={column.size ? column.size : 'body-l'}
          color={column.color ? column.color : 'secondary'}
          tag={column.tag}
          max-width="80ch"
          data-paragraph
        >
          {column.text}
        </Core.GdsText>
      )

    case 'figma':
      if (!column.node || !imageProvider?.getImage) return null
      const image = imageProvider.getImage(slug, column.node)
      if (!image?.svg) return null
      return (
        <Figure
          id={image.svg}
          caption={column.caption}
          identifier={column.node}
        />
      )

    case 'details':
      return (
        <Core.GdsDetails
          summary={column.summary}
          open={column.open}
          name={column.name}
        >
          <Core.GdsRichText>
            <div
              dangerouslySetInnerHTML={{
                __html: column.content
                  ? marked.parse(column.content, { async: false })
                  : '',
              }}
            />
          </Core.GdsRichText>
        </Core.GdsDetails>
      )

    default:
      return null
  }
}
