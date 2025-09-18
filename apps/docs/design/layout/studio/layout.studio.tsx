'use client'

import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../hooks'
import { getPageBySlug, studioData } from './data/studio.data'
import { ContentGroup, ContentItem, StudioPage } from './data/studio.types'
import { useStudioPage } from './data/studio.use'
import * as Interactive from './interactive'
import * as Part from './parts'
import * as Table from './table'
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
    // const TOOL = COMPONENTS[page.key as keyof typeof COMPONENTS]
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

  if (!page?.content) return null

  switch (page.type) {
    case 'asset':
      // Icons Grid View
      return (
        <Core.GdsFlex flex-direction="column" gap="6xl">
          {page.content.map((group: ContentGroup) => (
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
                {group.items.map((item: ContentItem) => (
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
                    <Core.GdsText font="detail-regular-xs" color="neutral-02">
                      {item.name}
                    </Core.GdsText>
                  </Core.GdsCard>
                ))}
              </Core.GdsGrid>
            </Core.GdsFlex>
          ))}
        </Core.GdsFlex>
      )

    case 'token':
      // Tokens View
      return (
        <Core.GdsFlex flex-direction="column" gap="2xl">
          {page.content.map((group: ContentGroup) => (
            <Core.GdsFlex key={group.key} flex-direction="column" gap="l">
              <Core.GdsFlex flex-direction="column" gap="3xs">
                <Core.GdsText font="heading-s">{group.title}</Core.GdsText>
                <Core.GdsText color="neutral-02">
                  {group.description}
                </Core.GdsText>
              </Core.GdsFlex>
              <Core.GdsGrid columns="3" gap="l">
                {group.items.map((item: ContentItem) => (
                  <Core.GdsCard
                    padding="l"
                    key={item.key}
                    onClick={() => router.push(`${page.slug}/${item.key}`)}
                    variant="secondary"
                    border-radius="m"
                  >
                    <Core.GdsText font="heading-xs">{item.name}</Core.GdsText>
                    <Core.GdsText color="neutral-02">{item.value}</Core.GdsText>
                    {item.cssVariable && (
                      <Core.GdsText font="detail-xs" color="neutral-03">
                        {item.cssVariable}
                      </Core.GdsText>
                    )}
                  </Core.GdsCard>
                ))}
              </Core.GdsGrid>
            </Core.GdsFlex>
          ))}
        </Core.GdsFlex>
      )

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
  // const PAGE = getPageBySlug(MAIN)
  // const PAGE = studioData
  //   .flatMap((category) => category.pages)
  //   .find((page) => page.slug === MAIN)
  const PAGE = useStudioPage(MAIN)
  const ROUT = useRouter()
  const ITEM = PATH.split('/')[3]

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
            grid-column={ITEM && PAGE ? '1 / 10' : '1 / 13'}
            variant="secondary"
            className="studio-page"
            padding="0"
            border="none"
            background="none"
          >
            {PAGE ? CONTENT(PAGE, ROUT, PATH) : children}
          </Core.GdsCard>
          {ITEM && PAGE && <Part.Aside page={PAGE} itemKey={ITEM} />}
        </Core.GdsGrid>
      </Core.GdsFlex>
    </Core.GdsGrid>
  )
}
