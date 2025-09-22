'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../hooks'
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
  Main: Part.Main,
  Migration: Interactive.Migration,
  Radius: Interactive.Radius,
} as const

const Token = ({
  item,
  group,
  pageSlug,
  type,
}: {
  type: PreviewType
  item: TokenItem
  group: TokenGroup
  pageSlug: string
}) => {
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()

  return (
    <Core.GdsFlex
      gap="s"
      align-items="center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      border-style="solid"
      border-width="0 0 5xs 0"
      border-color="subtle-01"
      padding="0 0 0 xl"
    >
      <Core.GdsGrid columns="4" gap="s" align-items="center" padding="s 0">
        <Core.GdsText>{item.token}</Core.GdsText>
        {type !== 'colors' && type !== 'shadows' && item.value}
        {type !== 'viewport' && <Preview type={type} token={item} />}
        {(type === 'viewport' || type === 'shadows') && <div></div>}
        {item.dark && (
          <Preview
            type={type}
            token={{
              token: item.token,
              variable: item.variable,
              value: item.dark,
            }}
          />
        )}
        <Core.GdsFlex align-items="center" gap="s">
          <Part.Copy token={item.token} />
          <Core.GdsFlex width="3xl">
            {isHovered && (
              <Core.GdsButton
                onClick={() => {
                  const path = item.level
                    ? `${pageSlug}/${item.level.toLowerCase()}/${item.token}`
                    : `${pageSlug}/${group.key}/${item.token}`
                  router.push(path)
                }}
                size="small"
                rank="tertiary"
                className="studio-cta"
              >
                <Core.IconChevronRight />
              </Core.GdsButton>
            )}
          </Core.GdsFlex>
        </Core.GdsFlex>
      </Core.GdsGrid>
    </Core.GdsFlex>
  )
}

const CONTENT = (page: StudioPage, router: any, path: string) => {
  const ACTIVE = path.split('/')[3]

  // Show interactive pages first
  if (page.pages) {
    const INTERACTIVE = page.pages.find((p) => p.slug === path)
    if (INTERACTIVE) {
      const CONTENT =
        COMPONENTS[INTERACTIVE.component as keyof typeof COMPONENTS]
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
              <Core.GdsGrid columns={ACTIVE ? '4' : '5'} gap="l">
                {group.items.map((item) => (
                  <Core.GdsCard
                    padding="l"
                    key={item.key}
                    onClick={() => router.push(`${page.slug}/${item.key}`)}
                    justify-content="space-between"
                    align-items="center"
                    variant={ACTIVE === item.key ? 'primary' : 'secondary'}
                    border-radius="m"
                    className="icon-card"
                  >
                    {item.component && (
                      <Core.GdsFlex
                        flex="1"
                        height="100%"
                        min-height="100px"
                        align-items="center"
                        className="icon-preview"
                      >
                        <Icon name={item.component} size="xl" />
                      </Core.GdsFlex>
                    )}
                    <Core.GdsText
                      font="detail-regular-xs"
                      color="neutral-02"
                      text-align="center"
                    >
                      {item.name}
                    </Core.GdsText>
                  </Core.GdsCard>
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
              <Core.GdsFlex flex-direction="column" gap="0">
                <Core.GdsCard>
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
                {group.items.map((item) => (
                  <Token
                    key={item.token}
                    item={item}
                    group={group}
                    pageSlug={page.slug}
                    type={page.key as PreviewType}
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
  const PATH = usePathname()
  const MAIN = `/${PATH.split('/').slice(1, 3).join('/')}`
  const PAGE = useStudioPage(MAIN)
  const ROUT = useRouter()
  // const ITEM = PATH.split('/')[3]
  const PART = PATH.split('/')
  const ITEM = PART[PART.length - 1]
  const LEVEL = PART[PART.length - 2]?.toUpperCase()
  const NARROW = PATH.split('/')[3] && PAGE && LEVEL

  return (
    <Core.GdsGrid
      columns="24"
      gap="2xl"
      width="100%"
      padding="m"
      max-width="100%"
      box-sizing="border-box"
      className="studio"
    >
      <Part.Sidebar current={PATH} />
      <Core.GdsFlex flex-direction="column" gap="4xl" grid-column="6 / 25">
        <Part.Header title={title} description={description} page={page} />
        <Core.GdsGrid columns="12" align-items="flex-start">
          <Core.GdsCard
            flex-direction="column"
            grid-column={NARROW ? '1 / 10' : '1 / 13'}
            variant="secondary"
            className="studio-page"
            padding="0"
            border="none"
            background="none"
          >
            {PAGE ? CONTENT(PAGE, ROUT, PATH) : children}
          </Core.GdsCard>
          {ITEM && PAGE && <Part.Aside KEY={ITEM} page={PAGE} level={LEVEL} />}
        </Core.GdsGrid>
      </Core.GdsFlex>
    </Core.GdsGrid>
  )
}
