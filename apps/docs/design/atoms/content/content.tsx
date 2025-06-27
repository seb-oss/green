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

interface DoItem {
  text: string
}

interface DontItem {
  text: string
}

interface DoListColumn extends ComponentColumn {
  type: 'do'
  dolist?: DoItem[]
}

interface DontListColumn extends ComponentColumn {
  type: 'dont'
  dontlist?: DontItem[]
}

const ListItem = ({
  number,
  text,
  variant,
}: {
  number: number
  text: string
  variant: 'positive' | 'negative'
}) => (
  <Core.GdsFlex gap="xs" align-items="flex-start">
    <Core.GdsDiv
      display="flex"
      background={variant}
      min-width="20px"
      max-width="20px"
      min-height="20px"
      max-height="20px"
      border-radius="max"
      justify-content="center"
      align-items="center"
      margin="3xs 0 0 0"
      color={variant}
    >
      <Core.IconCheckmark size="s"></Core.IconCheckmark>
    </Core.GdsDiv>
    <Core.GdsText tag="p">{text}</Core.GdsText>
  </Core.GdsFlex>
)

export const RenderColumn = (
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
            data-column
          >
            <Core.GdsTheme color-scheme={currentTheme}>
              <Core.GdsCard
                padding={column.plain ? '0' : 'xs'}
                justify-content="center"
                align-items="center"
                min-height={column.plain ? '100%' : '160px'}
                position="relative"
                variant={column.plain ? 'secondary' : 'primary'}
                data-plain={column.plain}
              >
                <Snippet slug={column.Snippet || ''} />

                {isHovered && !column.plain && (
                  <Core.GdsFlex
                    justify-content="space-between"
                    align-items="center"
                    width="max-content"
                    position="absolute"
                    background={column.plain ? 'primary' : 'none'}
                    inset={
                      column.plain
                        ? 'auto 10px -28px auto'
                        : '10px 10px auto auto'
                    }
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

    case 'do':
      const doColumn = column as DoListColumn
      return (
        <Core.GdsFlex flex-direction="column" gap="s">
          <Core.GdsText tag="h3">{`Do`}</Core.GdsText>
          <Core.GdsFlex flex-direction="column" gap="s">
            {doColumn.dolist?.map((item, index) => (
              <ListItem
                key={index}
                number={index + 1}
                text={item.text}
                variant="positive"
              />
            ))}
          </Core.GdsFlex>
        </Core.GdsFlex>
      )

    case 'dont':
      const dontColumn = column as DontListColumn
      return (
        <Core.GdsFlex flex-direction="column" gap="s">
          <Core.GdsText tag="h3">{`Don't`}</Core.GdsText>
          <Core.GdsFlex flex-direction="column" gap="s">
            {dontColumn.dontlist?.map((item, index) => (
              <ListItem
                key={index}
                number={index + 1}
                text={item.text}
                variant="negative"
              />
            ))}
          </Core.GdsFlex>
        </Core.GdsFlex>
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
