// studio/parts/aside.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { Icon } from '../../../../hooks'
import { ContentItem, StudioPage } from '../data/studio.types'

interface AsideProps {
  item: ContentItem
  page: StudioPage
}

export default function Aside({ item, page }: AsideProps) {
  const router = useRouter()

  // Get all items from the page for navigation
  const allItems = page.content?.flatMap((group) => group.items) || []
  const currentIndex = allItems.findIndex((i) => i.key === item.key)

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

  const handleClose = () => {
    router.push(page.slug)
  }

  return (
    <Core.GdsCard
      variant="secondary"
      grid-column="9 / 13"
      className="studio-aside"
      position="relative"
    >
      <Core.GdsFlex flex-direction="column" gap="l" padding="l">
        <Core.GdsFlex align-items="center" justify-content="space-between">
          <Core.GdsText font="detail-s">{item.name}</Core.GdsText>
          <Core.GdsButton size="small" rank="secondary" onClick={handleClose}>
            <Core.IconCrossSmall />
          </Core.GdsButton>
        </Core.GdsFlex>

        <Core.GdsFlex flex-direction="column" gap="m">
          {item.component && (
            <Core.GdsFlex
              flex="1"
              height="200px"
              align-items="center"
              justify-content="center"
              className="preview"
            >
              <Icon name={item.component} size="xl" />
            </Core.GdsFlex>
          )}

          <Core.GdsFlex flex-direction="column" gap="s">
            <Core.GdsText font="heading-s">{item.name}</Core.GdsText>
            <Core.GdsText color="neutral-02">{item.description}</Core.GdsText>
          </Core.GdsFlex>

          {item.cssVariable && (
            <Core.GdsFlex flex-direction="column" gap="s">
              <Core.GdsText font="detail-s" color="neutral-03">
                CSS Variable
              </Core.GdsText>
              <Core.GdsText font="detail-regular-s" font-family="mono">
                {item.cssVariable}
              </Core.GdsText>
              <Core.GdsText font="detail-regular-s" font-family="mono">
                Value: {item.value}
              </Core.GdsText>
            </Core.GdsFlex>
          )}
        </Core.GdsFlex>

        <Core.GdsFlex gap="s" justify-content="space-between">
          {currentIndex > 0 && (
            <Core.GdsButton
              size="small"
              rank="secondary"
              onClick={() =>
                router.push(`${page.slug}/${allItems[currentIndex - 1].key}`)
              }
            >
              <Core.IconArrowLeft slot="lead" />
              Previous
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
              Next
              <Core.IconArrowRight slot="trail" />
            </Core.GdsButton>
          )}
        </Core.GdsFlex>
      </Core.GdsFlex>
    </Core.GdsCard>
  )
}
