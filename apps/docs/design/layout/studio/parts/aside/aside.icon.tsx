// studio/parts/aside/icon-aside.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../../hooks'
import { IconItem, IconPage } from '../../data/studio.types'

interface IconAsideProps {
  page: IconPage
  itemKey: string
  currentIndex: number
  allItems: IconItem[]
}

export function IconAside({
  page,
  itemKey,
  currentIndex,
  allItems,
}: IconAsideProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'code' | 'download'>('code')

  const currentItem = allItems.find((item) => item.key === itemKey) as IconItem
  if (!currentItem) return null

  return (
    <Core.GdsFlex flex-direction="column" gap="m">
      {/* Preview */}
      <Core.GdsCard
        flex="1"
        min-height="200px"
        align-items="center"
        justify-content="center"
        className="preview"
        position="relative"
      >
        <Core.GdsFlex position="absolute" inset="20px 20px auto auto">
          <Core.GdsButton
            size="xs"
            rank="secondary"
            onClick={() => router.push(page.slug)}
          >
            <Core.IconCrossSmall />
          </Core.GdsButton>
        </Core.GdsFlex>
        <Icon name={currentItem.component} size="xl" />
      </Core.GdsCard>

      {/* Info and Navigation */}
      <Core.GdsFlex
        gap="2xl"
        align-items="flex-start"
        justify-content="space-between"
        padding-inline="0"
        flex-direction="column"
      >
        <Core.GdsFlex
          flex-direction="column"
          align-items="flex-start"
          width="100%"
          padding="0 xs 0 xs"
        >
          <Core.GdsFlex justify-content="space-between" width="100%">
            <Core.GdsText font="detail-book-s">{currentItem.name}</Core.GdsText>

            <Core.GdsFlex gap="s" justify-content="center" align-items="center">
              {currentIndex > 0 && (
                <Core.GdsButton
                  size="xs"
                  rank="tertiary"
                  onClick={() =>
                    router.push(
                      `${page.slug}/${allItems[currentIndex - 1].key}`,
                    )
                  }
                >
                  <Core.IconChevronLeft size="m" />
                </Core.GdsButton>
              )}
              {currentIndex < allItems.length - 1 && (
                <Core.GdsButton
                  size="xs"
                  rank="tertiary"
                  onClick={() =>
                    router.push(
                      `${page.slug}/${allItems[currentIndex + 1].key}`,
                    )
                  }
                >
                  <Core.IconChevronRight size="m" />
                </Core.GdsButton>
              )}
            </Core.GdsFlex>
          </Core.GdsFlex>
          <Core.GdsText color="neutral-02" font="detail-book-s">
            Category
          </Core.GdsText>
        </Core.GdsFlex>

        {/* Tabs and Content */}
        <Core.GdsFlex flex-direction="column" gap="s" width="100%">
          <Core.GdsSegmentedControl
            value={activeTab}
            size="small"
            width="max-content"
            onchange={(e: Event) => {
              const target = e.target as HTMLSelectElement
              setActiveTab(target.value as 'code' | 'download')
            }}
          >
            <Core.GdsSegment value="code">
              <Core.GdsFlex gap="xs" align-items="center">
                <Core.IconCodeBrackets size="m" />
                <Core.GdsText font="body-regular-s">Code</Core.GdsText>
              </Core.GdsFlex>
            </Core.GdsSegment>
            <Core.GdsSegment value="download">
              <Core.GdsFlex gap="xs" align-items="center">
                <Core.IconFileBend size="m" />
                <Core.GdsText font="body-regular-s">Download</Core.GdsText>
              </Core.GdsFlex>
            </Core.GdsSegment>
          </Core.GdsSegmentedControl>

          {activeTab === 'code' ? (
            <Core.GdsCard
              flex-direction="column"
              gap="s"
              variant="primary"
              background="none"
              border="none"
              padding="0 2xs"
              width="100%"
            >
              <Core.GdsFlex gap="0" flex-direction="column" padding="0 2xs">
                <Core.GdsDetails
                  summary="Web Component"
                  size="small"
                  name="frameworks"
                >
                  <Core.GdsCard
                    padding="s"
                    flex-direction="row"
                    align-items="center"
                    justify-content="space-between"
                    variant="primary"
                    gap="0"
                  >
                    <Core.GdsText font="detail-regular-xs">
                      {`<Icon${currentItem.key}`}
                    </Core.GdsText>
                    <Core.GdsButton
                      rank="tertiary"
                      size="small"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `import '@sebgroup/green-core/${currentItem.key}'`,
                        )
                      }}
                    >
                      <Core.IconCopy size="s" />
                    </Core.GdsButton>
                  </Core.GdsCard>
                </Core.GdsDetails>

                <Core.GdsDetails summary="React" size="small" name="frameworks">
                  <Core.GdsCard
                    padding="s"
                    flex-direction="column"
                    align-items="flex-start"
                    variant="secondary"
                    gap="0"
                  >
                    <Core.GdsFlex
                      flex-direction="row"
                      justify-content="space-between"
                      align-items="center"
                      width="100%"
                    >
                      <Core.GdsText font="detail-regular-xs">
                        React
                      </Core.GdsText>
                      <Core.GdsButton
                        rank="tertiary"
                        size="small"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `import { ${currentItem.component} } from '@sebgroup/green-react'`,
                          )
                        }}
                      >
                        <Core.IconCopy size="s" />
                      </Core.GdsButton>
                    </Core.GdsFlex>
                    <Core.GdsText
                      font="detail-regular-xs"
                      font-family="mono"
                      color="neutral-02"
                    >
                      {`import { ${currentItem.component} } ...`}
                    </Core.GdsText>
                  </Core.GdsCard>
                </Core.GdsDetails>

                <Core.GdsDetails
                  summary="Angular"
                  size="small"
                  name="frameworks"
                >
                  <Core.GdsCard
                    padding="s"
                    flex-direction="column"
                    align-items="flex-start"
                    variant="secondary"
                    gap="0"
                  >
                    <Core.GdsFlex
                      flex-direction="row"
                      justify-content="space-between"
                      align-items="center"
                      width="100%"
                    >
                      <Core.GdsText font="detail-regular-xs">
                        Angular
                      </Core.GdsText>
                      <Core.GdsButton
                        rank="tertiary"
                        size="small"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `import '@sebgroup/green-core/${currentItem.key}'`,
                          )
                        }}
                      >
                        <Core.IconCopy size="s" />
                      </Core.GdsButton>
                    </Core.GdsFlex>
                    <Core.GdsText
                      font="detail-regular-xs"
                      font-family="mono"
                      color="neutral-02"
                    >
                      {`import ...`}
                    </Core.GdsText>
                  </Core.GdsCard>
                </Core.GdsDetails>
              </Core.GdsFlex>
            </Core.GdsCard>
          ) : (
            <Core.GdsCard
              flex-direction="column"
              gap="s"
              variant="primary"
              background="none"
              border="none"
              padding="0"
              width="100%"
            >
              <Core.GdsFlex gap="xs" width="100%" flex-direction="row">
                <Core.GdsCard
                  padding="xl l"
                  gap="2xs"
                  variant="secondary"
                  align-items="center"
                  flex="1"
                >
                  <Icon name={currentItem.component} size="l" solid />
                  <Core.GdsText font="detail-regular-xs">Solid</Core.GdsText>
                </Core.GdsCard>
                <Core.GdsCard
                  padding="xl l"
                  gap="2xs"
                  variant="secondary"
                  align-items="center"
                  flex="1"
                >
                  <Icon name={currentItem.component} size="l" />
                  <Core.GdsText font="detail-regular-xs">Regular</Core.GdsText>
                </Core.GdsCard>
              </Core.GdsFlex>
            </Core.GdsCard>
          )}
        </Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
