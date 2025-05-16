export interface Heading {
  slug: string
  title: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export interface BaseContent {
  slug: string
  title: string
  iconName?: string
  preamble?: string
  description?: string
  excerpt?: string
  hero?: string
  layout?: 'wide' | 'narrow'
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

export interface Page extends BaseContent {
  type: 'page'
  headings: Heading[]
  content: string
  showInMenu?: boolean
  menuOrder?: number
}

export type ContentItem = Post | Page

export interface ContentStore {
  posts: Post[]
  pages: Page[]
  lastUpdated: string
}

export interface ContentActions {
  getPost: (slug: string) => Post | undefined
  getPage: (slug: string) => Page | undefined
  getPosts: (options?: {
    filter?: (post: Post) => boolean
    sort?: (a: Post, b: Post) => number
  }) => Post[]
  getPages: (options?: {
    filter?: (page: Page) => boolean
    sort?: (a: Page, b: Page) => number
  }) => Page[]
  getMenuItems: () => Page[]
  refresh: () => Promise<void>
}

export interface ContentContext {
  isLoaded: boolean
  store: ContentStore
  actions: ContentActions
}
