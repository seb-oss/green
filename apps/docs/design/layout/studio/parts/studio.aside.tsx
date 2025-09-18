// studio/parts/aside.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../hooks'
import { Link } from '../../../atoms/link/link'
import { StudioPage } from '../data/studio.types'

interface AsideProps {
  page: StudioPage
  itemKey: string
}

export default function Aside({ page, itemKey }: AsideProps) {
  const router = useRouter()
  const allItems = page.content?.flatMap((group) => group.items) || []
  const currentItem = allItems.find((item) => item.key === itemKey)
  const currentIndex = allItems.findIndex((item) => item.key === itemKey)
  const [activeTab, setActiveTab] = useState<'code' | 'download'>('code')

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()

        let newIndex = currentIndex
        if (e.key === 'ArrowLeft') {
          newIndex = currentIndex > 0 ? currentIndex - 1 : allItems.length - 1
        } else {
          newIndex = currentIndex < allItems.length - 1 ? currentIndex + 1 : 0
        }

        const newItem = allItems[newIndex]
        if (newItem) {
          router.push(`${page.slug}/${newItem.key}`)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, allItems, page.slug, router])

  if (!currentItem) return null

  const handleClose = () => {
    router.push(page.slug)
  }

  const handleViewChange = (e: Event) => {
    const target = e.target as HTMLSelectElement
    setActiveTab(target.value as 'code' | 'download')
  }

  const TabContent = () => {
    switch (activeTab) {
      case 'code':
        return (
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
                      Web Component
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
                    <Core.GdsText font="detail-regular-xs">React</Core.GdsText>
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
              <Core.GdsDetails summary="Angular" size="small" name="frameworks">
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
        )

      case 'download':
        return (
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
                {currentItem.component && (
                  <Icon name={currentItem.component} size="l" solid />
                )}
                <Core.GdsText font="detail-regular-xs">Solid</Core.GdsText>
              </Core.GdsCard>
              <Core.GdsCard
                padding="xl l"
                gap="2xs"
                variant="secondary"
                align-items="center"
                flex="1"
              >
                {currentItem.component && (
                  <Icon name={currentItem.component} size="l" />
                )}

                <Core.GdsText font="detail-regular-xs">Regular</Core.GdsText>
              </Core.GdsCard>
            </Core.GdsFlex>
          </Core.GdsCard>
        )
    }
  }

  const CONTENT = () => {
    switch (page.type) {
      case 'asset':
        return (
          <Core.GdsFlex flex-direction="column" gap="m">
            {currentItem.component && (
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
                    onClick={handleClose}
                  >
                    <Core.IconCrossSmall />
                  </Core.GdsButton>
                </Core.GdsFlex>
                <Icon name={currentItem.component} size="xl" />
              </Core.GdsCard>
            )}

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
                  <Core.GdsText font="detail-book-s">
                    {currentItem.name}
                  </Core.GdsText>

                  <Core.GdsFlex
                    gap="s"
                    justify-content="center"
                    align-items="center"
                  >
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

              <Core.GdsFlex flex-direction="column" gap="s" width="100%">
                <Core.GdsSegmentedControl
                  value={activeTab}
                  size="small"
                  width="max-content"
                  onchange={handleViewChange}
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
                      <Core.GdsText font="body-regular-s">
                        Download
                      </Core.GdsText>
                    </Core.GdsFlex>
                  </Core.GdsSegment>
                </Core.GdsSegmentedControl>

                {TabContent()}
              </Core.GdsFlex>
            </Core.GdsFlex>
          </Core.GdsFlex>
        )

      case 'token':
        return (
          <Core.GdsFlex flex-direction="column" gap="m">
            {currentItem.preview && (
              <Core.GdsFlex
                flex="1"
                height="100px"
                align-items="center"
                justify-content="center"
                className="preview"
              >
                <div
                  style={{
                    background: currentItem.cssVariable
                      ? `var(${currentItem.cssVariable})`
                      : currentItem.value,
                    width: '100%',
                    height: '100%',
                    borderRadius: 'var(--gds-radius-m)',
                  }}
                />
              </Core.GdsFlex>
            )}
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsText font="heading-s">{currentItem.name}</Core.GdsText>
              <Core.GdsText color="neutral-02">
                {currentItem.description}
              </Core.GdsText>
              {currentItem.cssVariable && (
                <>
                  <Core.GdsText font="detail-regular-s" font-family="mono">
                    {currentItem.cssVariable}
                  </Core.GdsText>
                  <Core.GdsText font="detail-regular-s" font-family="mono">
                    Value: {currentItem.value}
                  </Core.GdsText>
                </>
              )}
            </Core.GdsFlex>
          </Core.GdsFlex>
        )

      default:
        return null
    }
  }

  return (
    <Core.GdsFlex
      flex-direction="column"
      grid-column="10 / 13"
      className="studio-aside"
      position="sticky"
      inset="40px auto auto auto"
      margin="4xl 0 0 0"
    >
      {CONTENT()}
    </Core.GdsFlex>
  )
}
