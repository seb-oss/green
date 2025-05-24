export interface Heading {
  slug: string
  title: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export interface BaseContent {
  slug: string
  title: string
  createdAt: string
  updatedAt: string
}

export interface Post extends BaseContent {
  type: 'post'
  headings: Heading[]
  content: string
  tags?: string[]
  published: boolean
  pinned?: boolean
}

// COMPONENT STYPES
export interface ComponentList {
  components: ComponentSummary[]
  total: number
  lastUpdated: string
}

export interface ComponentSummary {
  title: string
  slug: string
  summary?: string
  path: string
}

export interface ComponentSection {
  title: string
  description: string
  column_title_tag?: string
}

export interface ComponentContent extends BaseContent {
  type: 'component'
  hero_snippet?: string
  beta?: boolean
  summary?: string
  tags?: string[]
  category?: string[]
  platform?: {
    web?: boolean
    ios?: boolean
    android?: boolean
  }
  overview?: Array<{ column: ComponentSection[] }>
  'ux-text'?: { section: ComponentSection[] }
  accessibility?: { section: ComponentSection[] }
}

// PAGES

// Add these alongside existing types
export interface PageList {
  pages: PageSummary[]
  total: number
  lastUpdated: string
}

export interface PageSummary {
  title: string
  slug: string
  path: string
}

export interface Page extends BaseContent {
  type: 'page'
  headings: Heading[]
  showInMenu?: boolean
  menuOrder?: number
}

// ===========================

export type ContentItem = Post | Page

export interface ContentStore {
  // posts: Post[]
  pages: Page[]
  components: ComponentContent[]
  _lastChecked?: string
  lastUpdated: string
}

export interface ContentActions {
  // getPost: (slug: string) => Post | undefined
  getPage: (slug: string) => Page | undefined
  // getPosts: (options?: {
  //   filter?: (post: Post) => boolean
  //   sort?: (a: Post, b: Post) => number
  // }) => Post[]
  getPages: (options?: {
    filter?: (page: Page) => boolean
    sort?: (a: Page, b: Page) => number
  }) => Page[]
  getMenuItems: () => Page[]
  getComponent: (slug: string) => ComponentContent | undefined
  refresh: () => Promise<void>
}

export interface ContentContext {
  isLoaded: boolean
  store: ContentStore
  actions: ContentActions
}
