export interface Heading {
  slug: string
  title: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export interface BaseContent {
  slug: string
  title: string
  hero?: string
  featured?: string[]
  createdAt?: string
  updatedAt?: string
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

export interface ComponentColumn {
  type:
    | 'rich-text'
    | 'snippet'
    | 'image'
    | 'figma'
    | 'paragraph'
    | 'details'
    | 'do'
    | 'dont'
    | 'code'
    | 'related'
  title?: string
  tag?: string
  content?: string
  name?: string
  summary?: string
  text?: string
  color?: string
  size?: string
  Snippet?: string
  code?: string
  plain?: boolean
  replay?: boolean
  variant?: string
  caption?: string
  node?: string
  width?: string
  height?: string
  ratio?: string
  src?: string
  open?: boolean
}

export interface ComponentSection {
  title?: string
  tag?: string
  'section-content'?: string
  cols?: '1' | '2' | '3'
  columns?: ComponentColumn[]
  'max-width'?: boolean
}

export interface ComponentImage {
  node: string
  id: string
  svg: string
}

export interface AnatomyItem {
  text: string
}

export interface AnatomyList {
  anatomyitems: AnatomyItem[]
}

export interface ComponentContent extends BaseContent {
  type: 'component'
  hero_snippet?: string
  beta?: boolean
  soon?: boolean
  anatomy?: boolean
  'anatomy-overview'?: string
  'anatomy-details'?: string
  'anatomy-list'?: AnatomyList
  summary?: string
  preamble?: string
  tags?: string[]
  category?: string[]
  platform?: {
    web?: boolean
    ios?: boolean
    android?: boolean
  }
  compare?: string
  'compare-content'?: string
  // overview?: Array<{ column: ComponentSection[] }>
  overview?: ComponentSection[]
  'ux-text'?: { section: ComponentSection[] }
  accessibility?: { section: ComponentSection[] }
  code?: { section: ComponentSection[] }
  images?: ComponentImage[]
  icons?: IconList
}

export interface ImageProvider {
  getImage?: (slug: string, node: string) => ComponentImage | undefined
}

// ICON ICON ICON

export interface IconVariants {
  regular: string
  solid: string
}

export interface IconFramework {
  path: string
  import: string
  component: string
}

export interface IconFrameworks {
  web: IconFramework
  react: IconFramework
  angular: IconFramework
}

export interface IconMeta {
  description: string
  categories: string[]
  tags: string[]
  width: number
  height: number
  viewBox: string
}

export interface IconData {
  id: string
  nodeId: string
  displayName: string
  fileName: string
  urlPath: string
  variants: IconVariants
  static: {
    regular: string
    solid: string
  }
  meta: IconMeta
  framework: IconFrameworks
}

export interface IconList {
  [key: string]: IconData
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
  summary?: string
  parent?: string
  layout?: 'editorial' | 'collection'
  headings: Heading[]
  showInMenu?: boolean
  menuOrder?: number
  sections?: ComponentSection[]
}

// ===========================

// Templates

export interface TemplateList {
  templates: TemplateSummary[]
  total: number
  lastUpdated: string
}

export interface TemplateSummary {
  title: string
  slug: string
  path: string
  related_components?: string[]
}

export interface Template extends BaseContent {
  type: 'template'
  code: string
  related_components?: string[]
}

// ==========

// Snippets

// Add these alongside existing types
export interface SnippetList {
  snippets: SnippetSummary[]
  total: number
  lastUpdated: string
}

export interface SnippetSummary {
  title: string
  slug: string
  path: string
  code: string
}

export interface Snippet extends BaseContent {
  type: 'snippet'
  snippet_component?: string
  code: string
}

// ===========================

// Navigation

export interface NavigationList {
  navigation: NavigationSummary[]
  total: number
  lastUpdated: string
}

export interface NavigationSummary {
  title: string
  slug: string
  path: string
  links: number
}

export interface NavigationLink {
  title: string
  slug: string
  icon?: string
}

export interface Navigation extends BaseContent {
  type: 'navigation'
  links: NavigationLink[]
}
// ==========

export type ContentItem = Post | Page

export interface ContentStore {
  // posts: Post[]
  pages: Page[]
  components: ComponentContent[]
  templates: Template[]
  snippets: Snippet[]
  navigation: Navigation[]
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
  getComponents: (options?: {
    filter?: (component: ComponentContent) => boolean
    sort?: (a: ComponentContent, b: ComponentContent) => number
  }) => ComponentContent[]
  getTemplate: (slug: string) => Template | undefined
  getTemplates: (options?: {
    filter?: (template: Template) => boolean
    sort?: (a: Template, b: Template) => number
  }) => Template[]
  getSnippet: (slug: string) => Snippet | undefined
  getSnippets: (options?: {
    filter?: (snippet: Snippet) => boolean
    sort?: (a: Snippet, b: Snippet) => number
  }) => Snippet[]
  getNavigation: (slug: string) => Navigation | undefined
  getNavigations: (options?: {
    filter?: (navigation: Navigation) => boolean
    sort?: (a: Navigation, b: Navigation) => number
  }) => Navigation[]
  refresh: () => Promise<void>
}

export interface ContentContext {
  isLoaded: boolean
  store: ContentStore
  actions: ContentActions
}
