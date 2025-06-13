'use client'

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/require-await */
import { createContext } from 'react'

import type { ContentContext } from './types'

const DEFAULT_CONTENT_STORE = {
  pages: [],
  components: [],
  templates: [],
  snippets: [],
  navigation: [],
  lastUpdated: '',
}

export const contentContext = createContext<ContentContext>({
  isLoaded: false,
  store: DEFAULT_CONTENT_STORE,
  actions: {
    getPage: () => undefined,
    getComponent: () => undefined,
    getComponents: () => [],
    getPages: () => [],
    getTemplates: () => [],
    getTemplate: () => undefined,
    getSnippet: () => undefined,
    getSnippets: () => [],
    getNavigation: () => undefined,
    getNavigations: () => [],
    getMenuItems: () => [],
    refresh: async () => {},
  },
})
