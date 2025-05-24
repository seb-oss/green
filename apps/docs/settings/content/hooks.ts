'use client'

import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

import { fetchComponentsList, fetchPagesList, fetchTemplatesList } from './api'
import { contentContext } from './context'
import { loadContent } from './loader'
import { contentStorage } from './storage'

import type {
  ComponentContent,
  ContentStore,
  Page,
  Post,
  Template,
} from './types'

const DEFAULT_STORE: ContentStore = {
  // posts: [],
  pages: [],
  components: [],
  templates: [],
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

      // Add cache validation check
      validateCache: async () => {
        try {
          const [componentsList, pagesList, templatesList] = await Promise.all([
            fetchComponentsList(),
            fetchPagesList(),
            fetchTemplatesList(),
          ])

          const storedLastUpdated = new Date(store.lastUpdated)
          const latestUpdate = new Date(
            Math.max(
              new Date(componentsList.lastUpdated).getTime(),
              new Date(pagesList.lastUpdated).getTime(),
              new Date(templatesList.lastUpdated).getTime(),
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
      // post: actions.getPost(slug),
      component: actions.getComponent(slug),
      slug,
    }
  }, [isLoaded, actions, slug])
}
