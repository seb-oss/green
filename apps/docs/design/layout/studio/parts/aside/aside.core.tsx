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
} from '../../data/studio.types'
import { IconAside } from './aside.icon'
import { TokenAside } from './aside.token'

interface AsideProps {
  page: StudioPage
  itemKey: string
}

export default function Aside({ page, itemKey }: AsideProps) {
  const router = useRouter()

  // Get items based on page type with proper typing
  const getAllItems = (): IconItem[] | TokenItem[] => {
    if (page.type === 'asset') {
      const iconPage = page as IconPage
      return iconPage.icons?.flatMap((group) => group.items) || []
    }
    if (page.type === 'token') {
      const tokenPage = page as TokenPage
      return tokenPage.tokens?.flatMap((group) => group.items) || []
    }
    return []
  }

  const allItems = getAllItems()
  const currentIndex = allItems.findIndex((item) =>
    'component' in item ? item.key === itemKey : item.token === itemKey,
  )

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
          const newKey = 'component' in newItem ? newItem.key : newItem.token
          router.push(`${page.slug}/${newKey}`)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, allItems, page.slug, router])

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
          itemKey={itemKey}
          currentIndex={currentIndex}
          allItems={getAllItems() as IconItem[]} // Type assertion here is safe because we know it's an IconPage
        />
      )}
      {page.type === 'token' && (
        <TokenAside page={page as TokenPage} itemKey={itemKey} />
      )}
    </Core.GdsFlex>
  )
}
