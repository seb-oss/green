'use client'

import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../hooks'
import { getPageBySlug } from './data/studio.data'
import { ContentGroup, ContentItem, StudioPage } from './data/studio.types'
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

const TOOL_COMPONENTS = {
  compose: Tool.Compose,
} as const

const CONTENT = (page: StudioPage, router: any) => {
  if (page.type === 'tool') {
    const TOOL = TOOL_COMPONENTS[page.key as keyof typeof TOOL_COMPONENTS]
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
        <Core.GdsFlex flex-direction="column" gap="2xl">
          {page.content.map((group: ContentGroup) => (
            <Core.GdsFlex key={group.key} flex-direction="column" gap="l">
              <Core.GdsFlex flex-direction="column" gap="3xs">
                <Core.GdsText font="heading-s">{group.title}</Core.GdsText>
                <Core.GdsText color="neutral-02">
                  {group.description}
                </Core.GdsText>
              </Core.GdsFlex>
              <Core.GdsGrid columns="4" gap="l">
                {group.items.map((item: ContentItem) => (
                  <Core.GdsCard
                    padding="l"
                    key={item.key}
                    onClick={() => router.push(`${page.slug}/${item.key}`)}
                    justify-content="space-between"
                    align-items="center"
                    variant="secondary"
                    border-radius="m"
                  >
                    {item.component && (
                      <Core.GdsFlex
                        flex="1"
                        height="100%"
                        min-height="100px"
                        align-items="center"
                        className="icon-preview"
                      >
                        <Icon name={item.component} size="l" />
                      </Core.GdsFlex>
                    )}
                    <Core.GdsText font="detail-xs">{item.name}</Core.GdsText>
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

    // case 'tool':
    //   return (
    //     <Core.GdsFlex
    //       flex-direction="column"
    //       gap="l"
    //       align-items="center"
    //       justify-content="center"
    //       padding="4xl"
    //     >
    //       <Core.GdsText font="heading-l">Coming Soon</Core.GdsText>
    //       <Core.GdsText color="neutral-02">
    //         This tool is currently in development
    //       </Core.GdsText>
    //     </Core.GdsFlex>
    //   )

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
  const PAGE = getPageBySlug(MAIN)
  const ROUT = useRouter()

  return (
    <Core.GdsGrid
      columns="12"
      gap="xl"
      width="100%"
      padding="m"
      max-width="100%"
      box-sizing="border-box"
      className="studio"
    >
      <Part.Sidebar current={PATH} />
      <Core.GdsFlex flex-direction="column" gap="4xl" grid-column="4 / 13">
        <Part.Header title={title} description={description} page={page} />
        <Core.GdsGrid columns="12">
          <Core.GdsCard
            flex-direction="column"
            grid-column={aside ? '1 / 9' : '1 / 13'}
            variant="secondary"
            className="studio-page"
            padding="0"
            border="none"
            background="none"
          >
            {PAGE ? CONTENT(PAGE, ROUT) : children}
          </Core.GdsCard>
          {aside && (
            <Core.GdsCard
              variant="secondary"
              grid-column="9 / 13"
              className="studio-aside"
              position="relative"
            >
              <Core.GdsFlex
                align-items="center"
                justify-content="space-between"
              >
                <Core.GdsText font="detail-s">Title</Core.GdsText>
                <Core.GdsButton size="small" rank="secondary">
                  <Core.IconCrossSmall />
                </Core.GdsButton>
              </Core.GdsFlex>
              {aside}
            </Core.GdsCard>
          )}
        </Core.GdsGrid>
      </Core.GdsFlex>
    </Core.GdsGrid>
  )
}
