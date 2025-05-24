'use client'

import { createContext } from 'react'

import type { ContentContext } from './types'

const DEFAULT_CONTENT_STORE = {
  pages: [],
  components: [],
  templates: [],
  snippets: [],
  lastUpdated: '',
}

export const contentContext = createContext<ContentContext>({
  isLoaded: false,
  store: DEFAULT_CONTENT_STORE,
  actions: {
    getPage: () => undefined,
    getComponent: () => undefined,
    getPages: () => [],
    getTemplates: () => [],
    getTemplate: () => undefined,
    getSnippet: () => undefined,
    getSnippets: () => [],
    getMenuItems: () => [],
    refresh: async () => {},
  },
})
