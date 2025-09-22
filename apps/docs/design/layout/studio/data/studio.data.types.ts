// studio.types.ts
import * as Core from '@sebgroup/green-core/react'

// Base interfaces
export interface Interactive {
  key: string
  slug: string
  title: string
  description: string
  component: string
}

// Base page interface
export interface BasePage {
  key: string
  type: 'landing' | 'tool' | 'asset' | 'token'
  slug: string
  label: string
  title: string
  description: string
  icon: keyof typeof Core
  category: string
  pages?: Interactive[]
  component?: string
}

// Token specific interfaces
export interface TokenItem {
  level?: string
  token: string
  variable: string
  value: string
  dark?: string
}

export interface TokenGroup {
  key: string
  title: string
  description?: string
  items: TokenItem[]
}

// Icon specific interfaces
export interface IconItem {
  key: string
  name: string
  component: string
  value: string
}

export interface IconGroup {
  key: string
  title: string
  description?: string
  items: IconItem[]
}

// Page type interfaces
export interface TokenPage extends BasePage {
  type: 'token'
  tokens?: TokenGroup[]
}

export interface IconPage extends BasePage {
  type: 'asset'
  icons?: IconGroup[]
}

export interface ToolPage extends BasePage {
  type: 'tool'
}

export interface LandingPage extends BasePage {
  type: 'landing'
}

// Combined types
export type StudioPage = TokenPage | IconPage | ToolPage | LandingPage

export interface StudioCategory {
  key: string
  title: string
  description?: string
  pages: StudioPage[]
}

//  Tokens
export interface ColorToken {
  token: string
  variable: string
  value: string
}

export interface ColorTokens {
  background: {
    L1: ColorToken[]
    L2: ColorToken[]
    L3: ColorToken[]
  }
  border: ColorToken[]
  content: ColorToken[]
  state: ColorToken[]
}

export interface ColorPreviewProps {
  token: ColorToken
  mode: 'light' | 'dark'
}

// Motion tokens

export interface MotionToken {
  token: string
  variable: string
  value: string
}

export interface MotionTokens {
  easing: MotionToken[]
  duration: MotionToken[]
}
