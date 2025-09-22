import { useMemo } from 'react'

import { useSearch } from '../context/search.context'
import { IconPage, StudioPage, TokenPage } from '../data/studio.data.types'
import { studioData } from './studio.data'

// get page by slug
export const getPageBySlug = (slug: string): StudioPage | undefined => {
  return studioData
    .flatMap((category) => category.pages)
    .find((page) => page.slug === slug)
}

// Search contents
export function useSearchContent(page: StudioPage) {
  const { query, category } = useSearch()

  return useMemo(() => {
    if (!query && !category) return page

    if (page.type === 'asset' && 'icons' in page) {
      const iconPage = page as IconPage
      if (!iconPage.icons) return page

      const filteredGroups = iconPage.icons
        .filter(
          (group) =>
            !category || group.key.toLowerCase() === category.toLowerCase(),
        )
        .map((group) => ({
          ...group,
          items: group.items.filter(
            (item) =>
              item.name.toLowerCase().includes(query.toLowerCase()) ||
              item.component.toLowerCase().includes(query.toLowerCase()),
          ),
        }))
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
        .map((group) => ({
          ...group,
          items: group.items.filter(
            (item) =>
              item.token.toLowerCase().includes(query.toLowerCase()) ||
              item.value.toLowerCase().includes(query.toLowerCase()),
          ),
        }))
        .filter((group) => group.items.length > 0)

      return {
        ...page,
        tokens: filteredGroups,
      }
    }

    return page
  }, [page, query, category])
}
