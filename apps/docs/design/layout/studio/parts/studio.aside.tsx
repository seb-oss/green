// studio/parts/aside.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../hooks'
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

  const renderContent = () => {
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
              >
                <Icon name={currentItem.component} size="xl" />
              </Core.GdsCard>
            )}
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsText font="heading-s">{currentItem.name}</Core.GdsText>
              <Core.GdsText color="neutral-02">
                {currentItem.description}
              </Core.GdsText>
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
      position="relative"
    >
      <Core.GdsFlex
        flex-direction="row"
        align-items="center"
        justify-content="space-between"
        min-width="100%"
        padding="0 xs s s"
      >
        <Core.GdsText font="detail-s">{currentItem.name}</Core.GdsText>
        <Core.GdsButton size="xs" rank="secondary" onClick={handleClose}>
          <Core.IconCrossSmall />
        </Core.GdsButton>
      </Core.GdsFlex>

      {renderContent()}

      <Core.GdsFlex gap="s" justify-content="space-between">
        {currentIndex > 0 && (
          <Core.GdsButton
            size="small"
            rank="secondary"
            onClick={() =>
              router.push(`${page.slug}/${allItems[currentIndex - 1].key}`)
            }
          >
            <Core.IconChevronLeft size="m" />
          </Core.GdsButton>
        )}
        {currentIndex < allItems.length - 1 && (
          <Core.GdsButton
            size="small"
            rank="secondary"
            onClick={() =>
              router.push(`${page.slug}/${allItems[currentIndex + 1].key}`)
            }
          >
            <Core.IconChevronRight size="m" />
          </Core.GdsButton>
        )}
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
