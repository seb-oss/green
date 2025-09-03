import { ReactNode } from 'react'

export type Page =
  | 'colors'
  | 'typography'
  | 'spacing'
  | 'radius'
  | 'shadows'
  | 'viewport'
  | 'icons'
  | 'grid'
  | 'compose'

export interface NavItem {
  id: Page
  title: string
  icon: ReactNode
  content: ReactNode
  tokens?: TokenGroup[]
}

export interface TokenGroup {
  title: string
  tokens: Token[]
}

export interface Token {
  name: string
  value: string | number
  type: string
}

export interface SpaceToken {
  $type: string
  $value: number
}

export interface ShadowValue {
  spread: string
  offsetX: string
  blur: string
  offsetY: string
  color: string
}

export interface ShadowToken {
  $value: ShadowValue
  $type?: string
}

export interface RadiusToken {
  $value: string | number
  $type?: string
}

export interface TokenBase {
  name: string
  value: string | number | ShadowValue
  type?: string
}
