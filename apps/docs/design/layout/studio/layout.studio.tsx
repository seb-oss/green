'use client'

import { Metadata } from 'next'
import { usePathname } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import * as Part from './parts'

import './layout.studio.css'

import { Link } from '../../atoms/link/link'
import { getPageBySlug } from './data/studio.data'

export const metadata: Metadata = {
  title: 'Studio · Green Design System',
  description: 'Design tokens and tools',
}

export function Studio({
  page,
  children,
  aside,
  title,
  description,
}: {
  page: string
  children?: React.ReactNode
  aside?: React.ReactNode
  title: string
  description: string
}) {
  const PATH = usePathname()
  const MAIN = `/${PATH.split('/').slice(1, 3).join('/')}`
  const PAGE = getPageBySlug(MAIN)

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
          >
            {PAGE?.content ? (
              <Core.GdsFlex flex-direction="column" gap="xl">
                {PAGE.content.map((group) => (
                  <Core.GdsFlex key={group.key} flex-direction="column" gap="l">
                    <Core.GdsText font="heading-s">{group.title}</Core.GdsText>
                    <Core.GdsText color="neutral-02">
                      {group.description}
                    </Core.GdsText>
                    <Core.GdsGrid columns="3" gap="l">
                      {group.items.map((item) => (
                        <Link key={item.key} href={`${PAGE.slug}/${item.key}`}>
                          <Core.GdsCard padding="l">
                            {item.preview && (
                              <div className="preview-container">
                                {item.component ? (
                                  <div>icons</div>
                                ) : (
                                  // For colors, spacing, etc
                                  <div
                                    className="preview-box"
                                    style={{
                                      background: item.cssVariable
                                        ? `var(${item.cssVariable})`
                                        : item.value,
                                    }}
                                  />
                                )}
                              </div>
                            )}
                            <Core.GdsText font="heading-xs">
                              {item.name}
                            </Core.GdsText>
                            <Core.GdsText color="neutral-02" font="body-s">
                              {item.description}
                            </Core.GdsText>
                            {item.cssVariable && (
                              <Core.GdsText
                                font="detail-regular-s"
                                color="neutral-03"
                              >
                                {item.cssVariable}
                              </Core.GdsText>
                            )}
                          </Core.GdsCard>
                        </Link>
                      ))}
                    </Core.GdsGrid>
                  </Core.GdsFlex>
                ))}
              </Core.GdsFlex>
            ) : (
              children
            )}
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
