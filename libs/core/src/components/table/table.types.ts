// Cell types

// table.cell.types.ts
import { GdsElement } from '../../gds-element'
import { ImageProps } from '../../utils/mixins/props-image'

import type { GdsBadge, GdsButton, GdsImg, GdsLink } from '../../pure'
import type {
  AccountFormats,
  DateTimeFormat,
  NumberFormats,
} from '../formatted-text/formatters'

export interface Column {
  key: string
  label: string
  sortable?: boolean
  align?: 'left' | 'right'
  visible?: boolean
  justify?: boolean
  cell?: {
    lead?: Cell
    value?: Cell
    trail?: Cell
  }
}

export interface Actions {
  label?: string
  cell: Cell
}

export interface Row {
  [key: string]: any
}

export interface State {
  page: number
  rows: number
  sortColumn?: string
  sortDirection?: 'asc' | 'desc'
  searchQuery: string
  visibleColumns: Set<string>
}

export interface Request {
  page: number
  rows: number
  sortColumn?: string
  sortDirection?: 'asc' | 'desc'
  searchQuery?: string
}

export interface Response<T> {
  rows: T[]
  total: number
}

export type Density = 'comfortable' | 'compact' | 'spacious'

export interface CacheEntry<T> {
  rows: T[]
  total: number
  timestamp: number
}

export interface Cache<T> {
  [key: string]: CacheEntry<T>
}

export type TableActions = Actions
export type TableColumn = Column
export type TableRow = Row
export type TableState = State
export type TableRequest = Request
export type TableResponse<T> = Response<T>
export type TableDensity = Density
export type TableCache<T> = Cache<T>
export type TableCacheEntry<T> = CacheEntry<T>

type CellProps<T> = {
  [K in keyof T]?: T[K] | ((row: any) => T[K])
}

export interface Badge extends CellProps<Pick<GdsBadge, 'variant' | 'size'>> {
  type: 'badge'
  value: string | ((row: any) => string)
}

// Cleanup
// Cleanup
// Cleanup
// Cleanup
// Cleanup
export interface Image extends CellProps<Omit<GdsImg, keyof GdsElement>> {
  type: 'image'
  src: string | ((row: any) => string)
}

export interface Button extends CellProps<Omit<GdsButton, keyof GdsElement>> {
  type: 'button'
  slot?: string | ((row: any) => string)
}

export interface Link extends CellProps<Omit<GdsLink, keyof GdsElement>> {
  type: 'link'
}

// Cleanup
// Cleanup
// Cleanup
// Cleanup

// Formatters
export interface Number {
  type: 'formatted-number'
  value: number | string | ((row: any) => number | string)
  locale?: string
  currency?: string
  format?: NumberFormats
}

export interface Account {
  type: 'formatted-account'
  value: string | ((row: any) => string)
  format?: AccountFormats
}

export interface Date {
  type: 'formatted-date'
  value: string | Date | ((row: any) => string | Date)
  locale?: string
  format?: DateTimeFormat
}

/* ACTION TYPES */
export interface ActionButtonCell {
  type: 'action-button'
  label: string | ((row: any) => string)
  size?: GdsButton['size']
  rank?: GdsButton['rank']
  variant?: GdsButton['variant']
  onClick: (row: any) => void
}

export interface ActionButtonsCell {
  type: 'action-buttons'
  buttons: Array<{
    label: string | ((row: any) => string)
    size?: GdsButton['size']
    rank?: GdsButton['rank']
    variant?: GdsButton['variant']
    onClick: (row: any) => void
  }>
}

export interface ActionLinkCell {
  type: 'action-link'
  label: string | ((row: any) => string)
  href: string | ((row: any) => string)
  target?: '_self' | '_blank'
}

export interface ActionMenuCell {
  type: 'action-menu'
  label: string | ((row: any) => string)
  items: Array<{
    label: string | ((row: any) => string)
    divider?: boolean
    onClick: (row: any) => void
  }>
}

export type Cell =
  | Image
  | Button
  | Link
  | Badge
  | ActionButtonCell
  | ActionButtonsCell
  | ActionLinkCell
  | ActionMenuCell
  | Number
  | Account
  | Date

export interface CellConfig {
  lead?: Cell
  value?: Cell
  trail?: Cell
}
