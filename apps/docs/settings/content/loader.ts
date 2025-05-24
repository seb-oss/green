'use client'

import { fetchComponentContent, fetchComponentsList } from './api'

import type { ContentStore, Page, Post } from './types'

type JsonImport<T> = {
  default: T[]
}

export async function loadContent(): Promise<ContentStore> {
  try {
    const [postsModule, pagesModule] = await Promise.all([
      import('../../content/posts.json') as unknown as Promise<
        JsonImport<Omit<Post, 'type'>>
      >,
      import('../../content/pages.json') as unknown as Promise<
        JsonImport<Omit<Page, 'type'>>
      >,
    ])

    // First fetch the components list
    const componentsList = await fetchComponentsList()

    // Then fetch all component contents in parallel
    const componentsPromises = componentsList.components.map((component) =>
      fetchComponentContent(component.path),
    )

    const components = await Promise.all(componentsPromises)

    return {
      posts: postsModule.default.map((post) => ({
        ...post,
        type: 'post' as const,
      })),
      pages: pagesModule.default.map((page) => ({
        ...page,
        type: 'page' as const,
      })),
      components,
      // lastUpdated: new Date().toISOString(),
      lastUpdated: componentsList.lastUpdated,
    }
  } catch (error) {
    console.error('Error loading content:', error)
    throw error
  }
}
