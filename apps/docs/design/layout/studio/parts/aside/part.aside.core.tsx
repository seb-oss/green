// studio/parts/aside/aside.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import * as Core from '@sebgroup/green-core/react'
import {
  IconItem,
  IconPage,
  StudioPage,
  TokenItem,
  TokenPage,
} from '../../data/studio.data.types'
import { IconAside } from './part.aside.icon'
import { TokenAside } from './part.aside.token'

interface AsideProps {
  page: StudioPage
  KEY: string
  level?: string
}

// studio/parts/aside/aside.tsx
export default function Aside({ page, KEY, level }: AsideProps) {
  const router = useRouter()

  // Get items based on page type with proper typing
  const getAllItems = (): IconItem[] | TokenItem[] => {
    if (page.type === 'asset') {
      const iconPage = page as IconPage
      return iconPage.icons?.flatMap((group) => group.items) || []
    }
    if (page.type === 'token') {
      const tokenPage = page as TokenPage
      if (level) {
        // If level is provided, only get items from that level
        return (
          tokenPage.tokens?.flatMap((group) =>
            group.items.filter(
              (item) => item.level?.toLowerCase() === level.toLowerCase(),
            ),
          ) || []
        )
      }
      // If no level, get items from non-leveled groups
      return (
        tokenPage.tokens?.flatMap((group) =>
          group.items.filter((item) => !item.level),
        ) || []
      )
    }
    return []
  }

  const allItems = getAllItems()
  const currentIndex = allItems.findIndex((item) =>
    'component' in item ? item.key === KEY : item.token === KEY,
  )

  // Helper function to create the correct path
  const createPath = (item: IconItem | TokenItem) => {
    if ('component' in item) {
      return `${page.slug}/${item.key}`
    }

    // Handle token items
    if (item.level) {
      return `${page.slug}/${item.level.toLowerCase()}/${item.token}`
    }

    // For non-leveled tokens, find their group
    const tokenPage = page as TokenPage
    const group = tokenPage.tokens?.find((g) =>
      g.items.some((i) => i.token === item.token),
    )
    return `${page.slug}/${group?.key}/${item.token}`
  }

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
          router.push(createPath(newItem))
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, allItems, page.slug, router, level])

  return (
    <Core.GdsFlex
      flex-direction="column"
      grid-column="10 / 13"
      className="studio-aside"
      position="sticky"
      inset="40px auto auto auto"
      margin="4xl 0 0 0"
    >
      {page.type === 'asset' && (
        <IconAside
          page={page as IconPage}
          itemKey={KEY}
          currentIndex={currentIndex}
          allItems={getAllItems() as IconItem[]}
        />
      )}
      {page.type === 'token' && (
        <TokenAside page={page as TokenPage} itemKey={KEY} level={level} />
      )}
    </Core.GdsFlex>
  )
}
