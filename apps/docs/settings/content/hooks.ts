'use client'

import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

import {
  fetchComponentsList,
  fetchNavigationList,
  fetchPagesList,
  fetchSnippetsList,
  fetchTemplatesList,
} from './api'
import { contentContext } from './context'
import { loadContent } from './loader'
import { contentStorage } from './storage'

import type {
  ComponentContent,
  ContentStore,
  IconData,
  Navigation,
  Page,
  Post,
  Snippet,
  Template,
} from './types'

const DEFAULT_STORE: ContentStore = {
  // posts: [],
  pages: [],
  components: [],
  templates: [],
  snippets: [],
  navigation: [],
  lastUpdated: '',
}

export function useContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [store, setStore] = useState<ContentStore>(DEFAULT_STORE)

  const initializeStore = useCallback(async () => {
    try {
      const storedContent = contentStorage
        ? await contentStorage.getStore()
        : null

      if (!storedContent) {
        const content = await loadContent()
        if (contentStorage) {
          await contentStorage.setStore(content)
        }
        setStore(content)
      } else {
        setStore(storedContent)
      }

      setIsLoaded(true)
    } catch (error) {
      console.error('Failed to initialize content store:', error)
      try {
        const content = await loadContent()
        setStore(content)
        setIsLoaded(true)
      } catch (loadError) {
        console.error('Failed to load content:', loadError)
      }
    }
  }, [])

  useEffect(() => {
    initializeStore()
  }, [initializeStore])

  const actions = useMemo(
    () => ({
      // getPost: (slug: string) => store.posts.find((post) => post.slug === slug),
      getPage: (slug: string) => store.pages.find((page) => page.slug === slug),

      // getPosts: (options?: {
      //   filter?: (post: Post) => boolean
      //   sort?: (a: Post, b: Post) => number
      // }) => {
      //   let posts = store.posts.filter((post) => post.published)

      //   if (options?.filter) {
      //     posts = posts.filter(options.filter)
      //   }

      //   if (options?.sort) {
      //     posts = posts.sort(options.sort)
      //   }

      //   return posts
      // },

      getPages: (options?: {
        filter?: (page: Page) => boolean
        sort?: (a: Page, b: Page) => number
      }) => {
        let pages = store.pages

        if (options?.filter) {
          pages = pages.filter(options.filter)
        }

        if (options?.sort) {
          pages = pages.sort(options.sort)
        }

        return pages
      },

      getMenuItems: () =>
        store.pages
          .filter((page) => page.showInMenu)
          .sort((a, b) => (a.menuOrder || 0) - (b.menuOrder || 0)),

      // Component stuff

      getComponent: (slug: string) =>
        store.components.find((component) => component.slug === slug),

      getComponents: (options?: {
        filter?: (component: ComponentContent) => boolean
        sort?: (a: ComponentContent, b: ComponentContent) => number
      }) => {
        let components = store.components

        if (options?.filter) {
          components = components.filter(options.filter)
        }

        if (options?.sort) {
          components = components.sort(options.sort)
        }

        return components
      },

      getComponentImage: (componentSlug: string, imageId: string) => {
        const component = store.components.find(
          (comp) => comp.slug === componentSlug,
        )
        return component?.images?.find((img) => img.id === imageId)
      },

      getComponentImages: (componentSlug: string) => {
        const component = store.components.find(
          (comp) => comp.slug === componentSlug,
        )
        return component?.images || []
      },

      // ICONS

      getIcon: (iconId: string) => {
        const iconComponent = store.components.find(
          (comp) => comp.slug === 'icon',
        )
        return iconComponent?.icons?.[iconId]
      },

      getIcons: (options?: {
        filter?: (icon: IconData) => boolean
        sort?: (a: IconData, b: IconData) => number
      }) => {
        const iconComponent = store.components.find(
          (comp) => comp.slug === 'icon',
        )

        if (!iconComponent?.icons) return []

        let icons = Object.values(iconComponent.icons)

        if (options?.filter) {
          icons = icons.filter(options.filter)
        }

        if (options?.sort) {
          icons = icons.sort(options.sort)
        }

        return icons
      },

      getIconsByCategory: (category: string) => {
        const iconComponent = store.components.find(
          (comp) => comp.slug === 'icon',
        )

        if (!iconComponent?.icons) return []

        return Object.values(iconComponent.icons).filter((icon) =>
          icon.meta.categories.includes(category),
        )
      },

      searchIcons: (query: string) => {
        const iconComponent = store.components.find(
          (comp) => comp.slug === 'icon',
        )

        if (!iconComponent?.icons) return []

        const searchTerm = query.toLowerCase()
        return Object.values(iconComponent.icons).filter(
          (icon) =>
            icon.displayName.toLowerCase().includes(searchTerm) ||
            icon.meta.tags.some((tag) =>
              tag.toLowerCase().includes(searchTerm),
            ),
        )
      },

      // Template actions
      getTemplate: (slug: string) =>
        store.templates.find((template) => template.slug === slug),

      getTemplates: (options?: {
        filter?: (template: Template) => boolean
        sort?: (a: Template, b: Template) => number
      }) => {
        let templates = store.templates

        if (options?.filter) {
          templates = templates.filter(options.filter)
        }

        if (options?.sort) {
          templates = templates.sort(options.sort)
        }

        return templates
      },

      getSnippet: (slug: string) =>
        store.snippets.find((snippet) => snippet.slug === slug),

      getSnippets: (options?: {
        filter?: (snippet: Snippet) => boolean
        sort?: (a: Snippet, b: Snippet) => number
      }) => {
        let snippets = store.snippets

        if (options?.filter) {
          snippets = snippets.filter(options.filter)
        }

        if (options?.sort) {
          snippets = snippets.sort(options.sort)
        }

        return snippets
      },

      // Navigation actions
      getNavigation: (slug: string) =>
        store.navigation.find((nav) => nav.slug === slug),

      getNavigations: (options?: {
        filter?: (navigation: Navigation) => boolean
        sort?: (a: Navigation, b: Navigation) => number
      }) => {
        let navigation = store.navigation

        if (options?.filter) {
          navigation = navigation.filter(options.filter)
        }

        if (options?.sort) {
          navigation = navigation.sort(options.sort)
        }

        return navigation
      },

      // Add cache validation check
      validateCache: async () => {
        try {
          const [
            componentsList,
            pagesList,
            templatesList,
            snippetsList,
            navigationList,
          ] = await Promise.all([
            fetchComponentsList(),
            fetchPagesList(),
            fetchTemplatesList(),
            fetchSnippetsList(),
            fetchNavigationList(),
          ])

          const storedLastUpdated = new Date(store.lastUpdated)
          const latestUpdate = new Date(
            Math.max(
              new Date(componentsList.lastUpdated).getTime(),
              new Date(pagesList.lastUpdated).getTime(),
              new Date(templatesList.lastUpdated).getTime(),
              new Date(snippetsList.lastUpdated).getTime(),
              new Date(navigationList.lastUpdated).getTime(),
            ),
          )

          if (latestUpdate > storedLastUpdated) {
            await actions.refresh()
          }
        } catch (error) {
          console.error('Failed to validate cache:', error)
        }
      },

      // refresh: async () => {
      //   const content = await loadContent()
      //   if (contentStorage) {
      //     await contentStorage.setStore(content)
      //   }
      //   setStore(content)
      // },

      refresh: async () => {
        const content = await loadContent()
        if (contentStorage) {
          await contentStorage.setStore({
            ...content,
            _lastChecked: new Date().toISOString(),
          })
        }
        setStore(content)
      },
    }),
    [store],
  )

  useEffect(() => {
    if (isLoaded) {
      actions.validateCache()
    }
  }, [isLoaded])

  return { isLoaded, store, actions }

  // return { isLoaded, store, actions }
}

export function useContentContext() {
  const context = useContext(contentContext)

  if (!context) {
    throw new Error('useContentContext must be used within ContentProvider')
  }

  return context
}

export function useCurrentContent() {
  const pathname = usePathname()
  const slug = pathname.split('/').pop() || ''
  const { isLoaded, actions } = useContentContext()

  return useMemo(() => {
    if (!isLoaded) return null

    return {
      page: actions.getPage(slug),
      component: actions.getComponent(slug),
      template: actions.getTemplate(slug),
      snippet: actions.getSnippet(slug),
      navigation: actions.getNavigation(slug),
      slug,
    }
  }, [isLoaded, actions, slug])
}
