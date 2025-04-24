'use client'

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

    return {
      posts: postsModule.default.map((post) => ({
        ...post,
        type: 'post' as const,
      })),
      pages: pagesModule.default.map((page) => ({
        ...page,
        type: 'page' as const,
      })),
      lastUpdated: new Date().toISOString(),
    }
  } catch (error) {
    console.error('Error loading content:', error)
    throw error
  }
}
