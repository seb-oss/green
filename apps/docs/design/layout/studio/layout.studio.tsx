'use client'

import { usePathname, useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../hooks'
import { getPageBySlug } from './data/studio.data'
import * as Part from './parts'

import './layout.studio.css'

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
            {PAGE?.content ? (
              <Core.GdsFlex flex-direction="column" gap="2xl">
                {PAGE.content.map((group) => (
                  <Core.GdsFlex key={group.key} flex-direction="column" gap="l">
                    <Core.GdsFlex flex-direction="column" gap="3xs">
                      <Core.GdsText font="heading-s">
                        {group.title}
                      </Core.GdsText>
                      <Core.GdsText color="neutral-02">
                        {group.description}
                      </Core.GdsText>
                    </Core.GdsFlex>
                    <Core.GdsGrid columns="4" gap="l">
                      {group.items.map((item) => (
                        <Core.GdsCard
                          padding="l"
                          key={item.key}
                          onClick={() => ROUT.push(`${PAGE.slug}/${item.key}`)}
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
                          {/* {item.preview && (
                            <div className="preview-container">
                              {item.component ? (
                                <>
                                <div>icons</div>
                                </>
                              ) : ( 
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
                          )} */}
                          <Core.GdsText font="detail-xs">
                            {item.name}
                          </Core.GdsText>
                        </Core.GdsCard>
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
