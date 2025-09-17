import * as Core from '@sebgroup/green-core/react'

// Unified content structure
export interface ContentItem {
  key: string
  name: string
  value: string
  preview?: string
  description: string
  cssVariable?: string
  component?: string
  pages?: Interactive[]
}

export interface Interactive {
  key: string
  slug: string
  title: string
  description: string
  component: string
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
  pages?: Interactive[]
}

export interface StudioCategory {
  key: string
  title: string
  description: string
  pages: StudioPage[]
}
