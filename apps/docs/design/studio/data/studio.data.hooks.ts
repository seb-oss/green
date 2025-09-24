// studio.data.hooks.ts
import { useMemo } from 'react'
import Fuse from 'fuse.js'

import { useSearch } from '../context/search.context'
import { studioData } from './studio.data'
import { IconPage, StudioPage, TokenPage } from './studio.data.types'

// get page by slug
export const getPageBySlug = (slug: string): StudioPage | undefined => {
  return studioData
    .flatMap((category) => category.pages)
    .find((page) => page.slug === slug)
}

export function useSearchContent(page: StudioPage | null) {
  const { query, category } = useSearch()

  return useMemo(() => {
    if (!page) return null
    if (!query && !category) return page

    if (page.type === 'asset' && 'icons' in page) {
      const iconPage = page as IconPage
      if (!iconPage.icons) return page

      const filteredGroups = iconPage.icons
        .filter(
          (group) =>
            !category || group.key.toLowerCase() === category.toLowerCase(),
        )
        .map((group) => {
          const fuse = new Fuse(group.items, {
            keys: ['name', 'component'],
            threshold: 0.3,
          })

          const filteredItems = query
            ? fuse.search(query).map((result) => result.item)
            : group.items

          return {
            ...group,
            items: filteredItems,
          }
        })
        .filter((group) => group.items.length > 0)

      return {
        ...page,
        icons: filteredGroups,
      }
    }

    if (page.type === 'token' && 'tokens' in page) {
      const tokenPage = page as TokenPage
      if (!tokenPage.tokens) return page

      const filteredGroups = tokenPage.tokens
        .filter(
          (group) =>
            !category || group.key.toLowerCase() === category.toLowerCase(),
        )
        .map((group) => {
          const fuse = new Fuse(group.items, {
            keys: ['token', 'value'],
            threshold: 0.3,
          })

          const filteredItems = query
            ? fuse.search(query).map((result) => result.item)
            : group.items

          return {
            ...group,
            items: filteredItems,
          }
        })
        .filter((group) => group.items.length > 0)

      return {
        ...page,
        tokens: filteredGroups,
      }
    }

    return page
  }, [page, query, category])
}
