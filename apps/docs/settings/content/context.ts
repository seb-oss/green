'use client'

import { createContext } from 'react'

import type { ContentContext } from './types'

const DEFAULT_CONTENT_STORE = {
  posts: [],
  pages: [],
  lastUpdated: '',
}

export const contentContext = createContext<ContentContext>({
  isLoaded: false,
  store: DEFAULT_CONTENT_STORE,
  actions: {
    getPost: () => undefined,
    getPage: () => undefined,
    getPosts: () => [],
    getPages: () => [],
    getMenuItems: () => [],
    refresh: async () => {},
  },
})
