// hooks/useStudioContent.ts
'use client'

import { useMemo } from 'react'

import { useContent } from '../../../../settings/content'
import { studioData } from './studio.data'

import type { StudioPage } from './studio.types'

export function useStudioPage(slug: string) {
  const { isLoaded, actions } = useContent()

  return useMemo(() => {
    // Find the base page data
    const basePage = studioData
      .flatMap((category) => category.pages)
      .find((page) => page.slug === slug)

    if (!basePage || !isLoaded) return basePage

    // If it's the icons page, inject the dynamic content
    if (basePage.key === 'icons') {
      const iconComponent = actions.getComponent('icon')
      const icons = iconComponent?.icons || {}

      // Create a new page object with dynamic content
      const dynamicPage: StudioPage = {
        ...basePage,
        content: Array.from(
          new Set(
            Object.values(icons)
              .map((icon) => icon.meta.categories)
              .flat(),
          ),
        )
          .sort()
          .map((category) => ({
            key: category,
            title: category.charAt(0).toUpperCase() + category.slice(1),
            // description: `${category} related icons`,
            items: Object.values(icons)
              .filter((icon) => icon.meta.categories.includes(category))
              .map((icon) => ({
                key: icon.id,
                name: icon.displayName,
                component: icon.reactName,
                description: icon.meta.description,
                value: icon.variants.regular,
                preview: icon.variants.regular,
              }))
              .sort((a, b) => a.name.localeCompare(b.name)),
          })),
      }

      return dynamicPage
    }

    return basePage
  }, [isLoaded, actions, slug])
}
