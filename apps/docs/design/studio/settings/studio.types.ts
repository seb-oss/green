import { ReactNode } from 'react'

export type Page =
  | 'colors'
  | 'typography'
  | 'spacing'
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
