import * as Core from '@sebgroup/green-core/react'
import { IconData } from '../../../../settings/content/types'

// Unified content structure
export interface ContentItem {
  key: string
  name: string
  value: string
  preview?: string
  description: string
  cssVariable?: string
  component?: string
  iconData?: IconData
}

export interface IconContentGroup extends ContentGroup {
  type: 'icon'
  icons: { [key: string]: IconData }
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
  description?: string
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
  icons?: { [key: string]: IconData }
}

export interface StudioCategory {
  key: string
  title: string
  description?: string
  pages: StudioPage[]
}

// Token stuff

export interface TokenItem {
  level?: string // Optional, only for colors
  token: string
  variable: string
  value: string
}

export interface TokenGroup {
  key: string
  title: string
  description?: string
  items: TokenItem[]
}
