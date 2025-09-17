import * as Core from '@sebgroup/green-core/react'

// Unified content structure
export interface ContentItem {
  key: string
  name: string
  value: string
  preview?: string
  description: string
  cssVariable?: string
  component?: string // for icons
}

export interface ContentGroup {
  key: string
  title: string
  description: string
  items: ContentItem[]
}

export interface StudioPage {
  key: string
  type: string // 'token' | 'asset' | 'tool'
  slug: string
  label: string
  title: string
  description: string
  icon: keyof typeof Core
  category: string
  content?: ContentGroup[]
  component?: string
}

export interface StudioCategory {
  key: string
  title: string
  description: string
  pages: StudioPage[]
}
