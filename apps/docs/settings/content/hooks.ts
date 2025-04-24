'use client'

import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'

import { contentContext } from './context'
import { loadContent } from './loader'
import { contentStorage } from './storage'

import type { ContentStore, Page, Post } from './types'

const DEFAULT_STORE: ContentStore = {
  posts: [],
  pages: [],
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
      getPost: (slug: string) => store.posts.find((post) => post.slug === slug),
      getPage: (slug: string) => store.pages.find((page) => page.slug === slug),

      getPosts: (options?: {
        filter?: (post: Post) => boolean
        sort?: (a: Post, b: Post) => number
      }) => {
        let posts = store.posts.filter((post) => post.published)

        if (options?.filter) {
          posts = posts.filter(options.filter)
        }

        if (options?.sort) {
          posts = posts.sort(options.sort)
        }

        return posts
      },

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

      refresh: async () => {
        const content = await loadContent()
        if (contentStorage) {
          await contentStorage.setStore(content)
        }
        setStore(content)
      },
    }),
    [store],
  )

  return { isLoaded, store, actions }
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
      post: actions.getPost(slug),
      slug,
    }
  }, [isLoaded, actions, slug])
}
