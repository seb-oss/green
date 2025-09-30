// studio/parts/aside/part.aside.token.tsx
'use client'

import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import { TokenPage } from '../../data/studio.data.types'
import { Preview } from '../preview'

interface TokenAsideProps {
  page: TokenPage
  itemKey: string
  level?: string // Add level prop
}

export function TokenAside({ page, itemKey, level }: TokenAsideProps) {
  const router = useRouter()

  // Filter items based on level if it exists
  const allItems =
    page.tokens?.flatMap((group) => {
      if (level) {
        // If level is provided, only get items from that level
        return group.items.filter(
          (item) => item.level?.toLowerCase() === level.toLowerCase(),
        )
      }
      // If no level, get items from non-leveled groups (content, border, state)
      return group.items.filter((item) => !item.level)
    }) || []

  const currentItem = allItems.find((item) => item.token === itemKey)
  const currentIndex = allItems.findIndex((item) => item.token === itemKey)

  if (!currentItem) return null

  const createPath = (item: typeof currentItem) => {
    if (item.level) {
      return `${page.slug}/${item.level.toLowerCase()}/${item.token}`
    }
    // Get the group key for non-leveled items
    const group = page.tokens?.find((g) =>
      g.items.some((i) => i.token === item.token),
    )
    return `${page.slug}/${group?.key}/${item.token}`
  }

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
        <Core.GdsFlex gap="l">
          <Preview type="color" token={currentItem} />
          {currentItem.dark && (
            <Preview
              type="color"
              token={{
                token: currentItem.token,
                variable: currentItem.variable,
                value: currentItem.dark,
              }}
            />
          )}
        </Core.GdsFlex>
      </Core.GdsCard>

      {/* Info and Navigation */}
      <Core.GdsFlex
        flex-direction="column"
        align-items="flex-start"
        width="100%"
        padding="0 xs 0 xs"
      >
        <Core.GdsFlex justify-content="space-between" width="100%">
          <Core.GdsText font="detail-book-s">{currentItem.token}</Core.GdsText>

          <Core.GdsFlex gap="s" justify-content="center" align-items="center">
            {currentIndex > 0 && (
              <Core.GdsButton
                size="xs"
                rank="tertiary"
                onClick={() => {
                  const prevItem = allItems[currentIndex - 1]
                  router.push(createPath(prevItem))
                }}
              >
                <Core.IconChevronLeft size="m" />
              </Core.GdsButton>
            )}
            {currentIndex < allItems.length - 1 && (
              <Core.GdsButton
                size="xs"
                rank="tertiary"
                onClick={() => {
                  const nextItem = allItems[currentIndex + 1]
                  router.push(createPath(nextItem))
                }}
              >
                <Core.IconChevronRight size="m" />
              </Core.GdsButton>
            )}
          </Core.GdsFlex>
        </Core.GdsFlex>
        {currentItem.level && (
          <Core.GdsText color="neutral-02" font="detail-book-s">
            Level: {currentItem.level}
          </Core.GdsText>
        )}
        <Core.GdsText color="neutral-02" font="detail-book-s">
          {currentItem.variable}
        </Core.GdsText>
      </Core.GdsFlex>
    </Core.GdsFlex>
  )
}
