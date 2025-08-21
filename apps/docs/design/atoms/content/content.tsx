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

import './content.css'

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
      background={variant + '-01'}
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
      {variant === 'positive' ? (
        <Core.IconCheckmark size="s" color="positive-01" />
      ) : (
        <Core.IconCrossLarge size="s" color="negative-01" />
      )}
    </Core.GdsDiv>
    <Core.GdsText tag="p" text-wrap="pretty" font="body-book-m">
      {text}
    </Core.GdsText>
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
  const [selectedSnippet, setSelectedSnippet] = useState<string | null>(null)
  const [snippetCode, setSnippetCode] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [snippetKey, setSnippetKey] = useState(0)
  const [showReplay, setShowReplay] = useState(false)

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

  const handleShowCode = async (snippetSlug: string) => {
    try {
      const response = await fetch(
        `https://api.seb.io/snippets/${snippetSlug}/${snippetSlug}.json`,
      )
      if (!response.ok)
        throw new Error(`Failed to fetch snippet: ${snippetSlug}`)
      const data = await response.json()
      setSnippetCode(data.code)
      setSelectedSnippet(snippetSlug)
    } catch (err) {
      console.warn('Error fetching snippet:', err)
    }
  }

  const handleCopyCode = async () => {
    if (snippetCode) {
      try {
        await navigator.clipboard.writeText(snippetCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
      } catch (err) {
        console.warn('Failed to copy:', err)
      }
    }
  }

  const handleReplay = (immediate = false) => {
    if (!column.replay) return
    if (immediate) {
      setSnippetKey((prev) => prev + 1)
      return
    }

    setShowReplay(true)
  }

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
              className="text-pretty"
            />
          </Core.GdsRichText>
        </Core.GdsFlex>
      )

    case 'snippet':
      if (column.Snippet) {
        return (
          <Core.GdsFlex
            flex-direction="column"
            gap="xs"
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
                variant={column.plain ? 'secondary' : 'secondary'}
                border-width={column.plain ? '0' : '4xs'}
                data-plain={column.plain}
                data-snipet={column.plain ? null : 'true'}
                data-replay={column.replay}
                onClick={() => handleReplay()}
              >
                <Snippet slug={column.Snippet || ''} key={snippetKey} />

                {isHovered && !column.plain && (
                  <Core.GdsFlex
                    justify-content="space-between"
                    align-items="center"
                    width="max-content"
                    position="absolute"
                    background={column.plain ? 'primary' : 'none'}
                    data-fade
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

                    <Core.GdsButton
                      rank="tertiary"
                      size="xs"
                      onClick={() => handleShowCode(column.Snippet || '')}
                    >
                      <Core.IconCodeBrackets size="s" />
                    </Core.GdsButton>
                  </Core.GdsFlex>
                )}

                {showReplay && column.replay && (
                  <Core.GdsFlex
                    position="absolute"
                    align-items="center"
                    inset="auto 10px 10px auto"
                    data-fade
                  >
                    <Core.GdsButton
                      size="small"
                      rank="tertiary"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleReplay(true)
                        setShowReplay(false)
                      }}
                    >
                      <Core.IconArrowRotateClockwise slot="lead" size="m" />
                      Replay
                    </Core.GdsButton>
                  </Core.GdsFlex>
                )}
              </Core.GdsCard>
            </Core.GdsTheme>

            {!column.variant && column.caption && (
              <Core.GdsText
                tag="small"
                font="detail-book-s"
                padding-inline="s 0"
                color="02"
              >
                {column.caption}
              </Core.GdsText>
            )}

            {column.variant?.toLocaleLowerCase() === 'do' && (
              <Core.GdsFlex align-items="center" gap="xs">
                <Core.GdsCard
                  variant="positive"
                  border-radius="max"
                  justify-content="center"
                  align-items="center"
                  border="none"
                  padding="0"
                  width="24px"
                  height="24px"
                >
                  <Core.IconCheckmark size="s" />

                  {/* <Core.IconCrossLarge size="s" color="negative-01" /> */}
                </Core.GdsCard>
                <Core.GdsText font="details-xs">Do</Core.GdsText>
              </Core.GdsFlex>
            )}
            {column.variant?.toLocaleLowerCase() === 'dont' && (
              <Core.GdsFlex align-items="center" gap="xs">
                <Core.GdsCard
                  variant="negative"
                  border-radius="max"
                  justify-content="center"
                  align-items="center"
                  border="none"
                  padding="0"
                  width="24px"
                  height="24px"
                >
                  <Core.IconCrossLarge size="s" />
                </Core.GdsCard>
                <Core.GdsText font="details-xs">{`Don't`}</Core.GdsText>
              </Core.GdsFlex>
            )}

            {selectedSnippet && snippetCode && (
              <Core.GdsDialog
                variant="slide-out"
                onGdsClose={() => {
                  setSelectedSnippet(null)
                  setSnippetCode(null)
                }}
                width="100%; s{600px}"
                heading="Code Preview"
                open
              >
                <Core.GdsFlex flex-direction="column" gap="m">
                  <Core.GdsCard
                    padding="l"
                    height="200px"
                    overflow="auto"
                    justify-content="center"
                    align-items="center"
                    variant={column.plain ? 'secondary' : 'secondary'}
                    border-width={column.plain ? '0' : '4xs'}
                    border-color="subtle-01"
                    data-plain={column.plain}
                    data-snipet={column.plain ? null : 'true'}
                  >
                    <Snippet slug={selectedSnippet} />
                  </Core.GdsCard>

                  <Core.GdsFlex
                    flex-direction="column"
                    gap="s"
                    align-items="flex-start"
                  >
                    <Core.GdsTextarea value={snippetCode} label="Code" />
                    <Core.GdsButton
                      rank="secondary"
                      width="max-content"
                      size="small"
                      onClick={handleCopyCode}
                      variant={copied ? 'positive' : 'neutral'}
                    >
                      {copied ? (
                        <>
                          <Core.IconCheckmark slot="lead" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Core.IconCopy slot="lead" />
                          Copy
                        </>
                      )}
                    </Core.GdsButton>
                  </Core.GdsFlex>
                </Core.GdsFlex>

                <Core.GdsButton
                  rank="tertiary"
                  size="small"
                  onClick={() => {
                    setSelectedSnippet(null)
                    setSnippetCode(null)
                  }}
                  slot="footer"
                >
                  Close
                </Core.GdsButton>
              </Core.GdsDialog>
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
          font={column.size ? column.size : 'body-book-m'}
          color={column.color ? column.color : '01'}
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
