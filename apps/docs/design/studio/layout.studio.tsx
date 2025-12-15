'use client'

import { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../hooks'
import { useSearch } from './context/search.context'
import { useSearchContent } from './data/studio.data.hooks'
import {
  IconGroup,
  IconPage,
  StudioPage,
  TokenGroup,
  TokenItem,
  TokenPage,
} from './data/studio.data.types'
import { useStudioPage } from './data/studio.data.use'
import * as Interactive from './interactive'
import * as Part from './parts'
import { Preview } from './parts/preview'
import { PreviewType } from './parts/preview/part.preview.types'
import * as Tool from './tools'
import * as Playground from './tools/playground'

import './layout.studio.css'

interface StudioProps {
  page: string
  children?: React.ReactNode
  aside?: React.ReactNode
  title: string
  description: string
}

const COMPONENTS = {
  Compose: Tool.Compose,
  Playground: Tool.Playground,
  Table: Playground.Table,
  Button: Playground.Button,
  Main: Part.Main,
  Migration: Interactive.Migration,
  Radius: Interactive.Radius,
} as const

const Token = ({
  item,
  group,
  pageSlug,
  type,
  previewText,
}: {
  type: PreviewType
  item: TokenItem
  group: TokenGroup
  pageSlug: string
  previewText?: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  const getTokenPath = (
    type: PreviewType,
    pageSlug: string,
    item: TokenItem,
    group: TokenGroup,
  ) => {
    if (item.level) {
      return `${pageSlug}/${item.level.toLowerCase()}/${item.token}`
    }
    if (type === 'typography' || type === 'motion') {
      return `${pageSlug}/${group.key}/${item.token}`
    }
    return `${pageSlug}/${item.token}`
  }

  return (
    <Core.GdsFlex
      gap="s"
      align-items="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      border-style="solid"
      border-width="0 ; m{0 0 5xs 0}"
      border-color="subtle-01"
      padding={type === 'typography' ? '0' : '0; m{0 0 0 xl}'}
      className={type === 'typography' ? 'token-typography' : ''}
      background="neutral-01; m{none}"
      border-radius="m; m{0}"
    >
      {type === 'typography' ? (
        <Core.GdsFlex
          width="100%"
          flex-direction="column"
          gap="s"
          padding="l; m{s 0 s 0}"
        >
          <Core.GdsText font={item.token} width="100%">
            <span
              contentEditable="plaintext-only"
              suppressContentEditableWarning
              className="editable"
              spellCheck="false"
            >
              {previewText ? previewText : item.token}
            </span>
          </Core.GdsText>
          {(() => {
            const [fontSize, lineHeight, fontWeight] = item.value.split('/')
            return (
              <Core.GdsFlex
                flex-direction="column; m{row}"
                justify-content="space-between"
                align-items="flex-start; m{center}"
                width="100%"
                gap="s; m{0}"
              >
                <Core.GdsFlex
                  gap="s; m{xl}"
                  width="100%"
                  flex-direction="column; m{row}"
                >
                  <Core.GdsText color="neutral-02" font="detail-book-xs">
                    Font size: {fontSize}
                  </Core.GdsText>
                  <Core.GdsText color="neutral-02" font="detail-book-xs">
                    Line height: {lineHeight}
                  </Core.GdsText>
                  <Core.GdsText color="neutral-02" font="detail-book-xs">
                    Weight: {fontWeight}
                  </Core.GdsText>
                </Core.GdsFlex>
                <Core.GdsFlex width="100%; m{280px}">
                  <Part.Copy token={item.token} />
                </Core.GdsFlex>
              </Core.GdsFlex>
            )
          })()}
        </Core.GdsFlex>
      ) : (
        <Core.GdsGrid
          columns="1; m{4}"
          gap="s"
          align-items="center"
          padding="l; m{s 0}"
        >
          <Core.GdsText>{item.token}</Core.GdsText>
          {type !== 'colors' && type !== 'shadows' && item.value}
          {type !== 'viewport' && <Preview type={type} token={item} />}
          {(type === 'viewport' || type === 'shadows') && <div></div>}
          {item.dark && (
            <Preview
              type={type}
              theme="dark"
              token={{
                token: item.token,
                variable: item.variable,
                value: item.dark,
              }}
            />
          )}
          <Core.GdsFlex align-items="center" gap="s">
            <Part.Copy token={item.token} />
            {false && isHovered && (
              <Core.GdsFlex width="3xl">
                <Core.GdsButton
                  onClick={() =>
                    router.push(getTokenPath(type, pageSlug, item, group))
                  }
                  size="small"
                  rank="tertiary"
                  className="studio-cta"
                >
                  <Core.IconChevronRight />
                </Core.GdsButton>
              </Core.GdsFlex>
            )}
          </Core.GdsFlex>
        </Core.GdsGrid>
      )}
    </Core.GdsFlex>
  )
}

const CONTENT = (
  page: StudioPage,
  router: any,
  path: string,
  previewText: string,
  solid: boolean,
  size: string,
) => {
  // const CONTENT = (page: StudioPage, router: NextRouter, path: string) => {
  const ACTIVE = path.split('/')[3]

  // Show interactive pages first
  if (page.pages) {
    const INTERACTIVE = page.pages.find((p) => p.slug === path)
    if (INTERACTIVE) {
      const CONTENT =
        COMPONENTS[INTERACTIVE.component as keyof typeof COMPONENTS]
      // return CONTENT ? <CONTENT searchQuery={INTERACTIVE.searchQuery} /> : null
      return CONTENT ? <CONTENT /> : null
    }
  }

  if (page.type === 'landing') {
    const LANDING = COMPONENTS[page.component as keyof typeof COMPONENTS]
    return LANDING ? <LANDING /> : null
  }

  if (page.type === 'tool') {
    const TOOL = COMPONENTS[page.component as keyof typeof COMPONENTS]
    return TOOL ? (
      <TOOL />
    ) : (
      <Core.GdsFlex
        flex-direction="column"
        gap="l"
        align-items="center"
        justify-content="center"
        padding="4xl"
      >
        <Core.GdsText font="heading-l">Coming Soon</Core.GdsText>
        <Core.GdsText color="neutral-02">
          This tool is currently in development
        </Core.GdsText>
      </Core.GdsFlex>
    )
  }

  // if (!page?.content) return null

  switch (page.type) {
    case 'asset': {
      const iconPage = page as IconPage
      if (!iconPage.icons) return null

      // Icons Grid View
      return (
        <Core.GdsFlex flex-direction="column" gap="6xl">
          {iconPage.icons.map((group: IconGroup) => (
            <Core.GdsFlex key={group.key} flex-direction="column" gap="l">
              {group.title && (
                <Core.GdsFlex
                  flex-direction="column"
                  gap="3xs"
                  padding-inline="xs"
                >
                  <Core.GdsText font="heading-s">{group.title}</Core.GdsText>
                  {group.description && (
                    <Core.GdsText color="neutral-02">
                      {group.description}
                    </Core.GdsText>
                  )}
                </Core.GdsFlex>
              )}
              <Core.GdsGrid
                columns={ACTIVE ? '2; s{2} m{3} l{4}' : '2; s{3} m{5}'}
                gap="l"
              >
                {group.items.map((item) => (
                  <Core.GdsCardLinked
                    key={item.key}
                    href={`${page.slug}/${item.key}`}
                    variant={ACTIVE === item.key ? 'primary' : 'secondary'}
                    onClick={() => router.push(`${page.slug}/${item.key}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        router.push(`${page.slug}/${item.key}`)
                      }
                    }}
                  >
                    {item.component && (
                      <Core.GdsFlex
                        flex="1"
                        height="100%"
                        min-height="100px"
                        align-items="center"
                        justify-content="center"
                        width="100%"
                      >
                        <Icon
                          name={item.component}
                          size={size.toLowerCase()}
                          solid={solid}
                        />
                      </Core.GdsFlex>
                    )}
                    <Core.GdsText
                      font="detail-regular-xs"
                      color="neutral-02"
                      text-align="center"
                    >
                      {item.name}
                    </Core.GdsText>
                  </Core.GdsCardLinked>
                ))}
              </Core.GdsGrid>
            </Core.GdsFlex>
          ))}
        </Core.GdsFlex>
      )
    }

    case 'token': {
      const tokenPage = page as TokenPage
      if (!tokenPage.tokens) return null

      const groupByLevel = (group: TokenGroup) => {
        if (!group.items.some((item) => item.level)) {
          return [{ ...group }]
        }

        // Get unique levels
        const levels = Array.from(
          new Set(
            group.items.filter((item) => item.level).map((item) => item.level),
          ),
        )

        // Create groups for each level
        return levels.map((level) => ({
          key: `${group.key}-${level}`,
          title: `${group.title} · ${level}`,
          description: group.description,
          items: group.items.filter((item) => item.level === level),
        }))
      }

      // Flatten and process all groups
      const processedGroups = tokenPage.tokens.flatMap((group) => {
        if (group.key === 'background') {
          return groupByLevel(group)
        }
        return [group]
      })

      // Tokens View
      return (
        <Core.GdsFlex flex-direction="column" gap="6xl">
          {processedGroups.map((group) => (
            <Core.GdsFlex key={group.key} flex-direction="column" gap="l">
              <Core.GdsFlex flex-direction="column" gap="3xs">
                <Core.GdsText tag="h2">{group.title}</Core.GdsText>
                {false && group.description && (
                  <Core.GdsText color="neutral-02">
                    {group.description}
                  </Core.GdsText>
                )}
              </Core.GdsFlex>
              <Core.GdsFlex
                flex-direction="column"
                gap={page.key === 'typography' ? 'l' : 'xl; m{0}'}
              >
                {page.key !== 'typography' && (
                  <Core.GdsCard display="none; m{flex}">
                    {page.key === 'colors' ? (
                      <Core.GdsGrid columns="4" gap="s">
                        <Core.GdsText>Token</Core.GdsText>
                        <Core.GdsText>Light</Core.GdsText>
                        <Core.GdsText>Dark</Core.GdsText>
                      </Core.GdsGrid>
                    ) : (
                      <Core.GdsGrid columns="4" gap="s">
                        <Core.GdsText>Token</Core.GdsText>
                        <Core.GdsText>Value</Core.GdsText>
                        <Core.GdsText></Core.GdsText>
                        <Core.GdsText></Core.GdsText>
                      </Core.GdsGrid>
                    )}
                  </Core.GdsCard>
                )}
                {group.items.map((item) => (
                  <Token
                    key={item.token}
                    item={item}
                    group={group}
                    pageSlug={page.slug}
                    type={page.key as PreviewType}
                    previewText={
                      page.key === 'typography' ? previewText : undefined
                    }
                  />
                ))}
              </Core.GdsFlex>
            </Core.GdsFlex>
          ))}
        </Core.GdsFlex>
      )
    }

    default:
      return null
  }
}

export function Studio({
  page,
  children,
  aside,
  title,
  description,
}: StudioProps) {
  const {
    query,
    setQuery,
    setCategory,
    takeover,
    previewText,
    setPreviewText,
    solid,
    setSolid,
    iconSize,
    setIconSize,
  } = useSearch()

  const PATH = usePathname()
  const MAIN = `/${PATH.split('/').slice(1, 3).join('/')}`
  const PAGE = useStudioPage(MAIN)
  const ROUT = useRouter()
  // const ITEM = PATH.split('/')[3]
  const PART = PATH.split('/')
  const ITEM = PART[PART.length - 1]
  const LEVEL = PART[PART.length - 2]?.toUpperCase()
  // const NARROW = PATH.split('/')[3] && PAGE && LEVEL
  // const searchContent = useSearchContent(PAGE || null)
  const searchContent = useSearchContent(PAGE || null)
  // Then derive filteredPage
  const filteredPage = PAGE ? searchContent : null
  const isInteractivePage = PAGE?.pages?.some((p) => p.slug === PATH)
  const isDetailView =
    PART.length > 4 ||
    (PART.length > 3 &&
      ![
        'l1',
        'l2',
        'l3',
        'content',
        'border',
        'state',
        'heading',
        'body',
        'easing',
        'duration',
      ].includes(ITEM.toLowerCase()))

  const NARROW =
    !isInteractivePage &&
    PATH.split('/')[3] &&
    !PATH.includes('compose') &&
    PAGE &&
    LEVEL &&
    isDetailView

  // const { setQuery, setCategory } = useSearch()

  // Clear search when main page changes
  useEffect(() => {
    setQuery('')
    setCategory('')
  }, [MAIN, setQuery, setCategory])

  const NoResults = () => (
    <Core.GdsCard
      padding="xl"
      align-items="center"
      justify-content="center"
      block-size="58vh"
    >
      <Core.GdsText>
        No results found for {`"${query}"`} in {PAGE?.label}
      </Core.GdsText>
    </Core.GdsCard>
  )

  const hasSearchResults = (page: StudioPage | null): boolean => {
    if (!page) return false

    switch (page.type) {
      case 'asset':
        return !!page.icons && page.icons.length > 0
      case 'token':
        return !!page.tokens && page.tokens.length > 0
      default:
        return false
    }
  }

  const hasResults = hasSearchResults(filteredPage)

  return (
    <Core.GdsGrid
      columns="1; m{24}"
      gap="2xl"
      width="100%"
      padding={takeover ? '0' : '0; m{m}'}
      box-sizing="border-box"
      className="studio"
    >
      {!takeover && <Part.Sidebar current={PATH} />}
      <Core.GdsFlex
        flex-direction="column"
        gap={PATH?.includes('compose') ? 'm' : '4xl'}
        grid-column={takeover ? '1 / 25' : '1; m{6 / 25}'}
        padding={takeover ? 'xs' : 'l; m{l l 0 0}'}
      >
        {!takeover && (
          <Part.Header title={title} description={description} page={page} />
        )}
        <Core.GdsGrid
          columns="1; s{12}"
          align-items="flex-start"
          flex-direction="row-reverse"
        >
          <Core.GdsCard
            flex-direction="column"
            grid-column={NARROW ? '1; s{1 / 8} m{1 / 10}' : '1; s{1 / 13}'}
            variant="secondary"
            className="studio-page"
            padding="0"
            border="none"
            background="none"
            order="2; s{0}"
          >
            {query && !hasResults ? (
              <NoResults />
            ) : filteredPage ? (
              CONTENT(filteredPage, ROUT, PATH, previewText, solid, iconSize)
            ) : (
              children
            )}
          </Core.GdsCard>
          {ITEM && PAGE && !isInteractivePage && !PATH?.includes('compose') && (
            <Part.Aside KEY={ITEM} page={PAGE} level={LEVEL} />
          )}
        </Core.GdsGrid>
      </Core.GdsFlex>
    </Core.GdsGrid>
  )
}
