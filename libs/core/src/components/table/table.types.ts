import { GdsElement } from '../../gds-element'

import type {
  GdsBadge,
  GdsButton,
  GdsContextMenu,
  GdsImg,
  GdsLink,
} from '../../pure'
import type {
  AccountFormats,
  DateTimeFormat,
  NumberFormats,
} from '../formatted-text/formatters'

/**
 * ============================================================================
 *  TABLE TYPES
 * ============================================================================
 */
export interface Column {
  key: string
  label: string
  sortable?: boolean
  align?: 'start' | 'center' | 'stretch' | 'end'
  justify?: 'start' | 'center' | 'space-between' | 'end'
  visible?: boolean
  width?: string
  cell?: {
    lead?: Cell | Cell[]
    value?: Cell | Cell[]
    trail?: Cell | Cell[]
  }
}

export interface Actions {
  label?: string
  align?: 'start' | 'center' | 'stretch' | 'end'
  justify?: 'start' | 'center' | 'space-between' | 'end'
  cell: Cell | Cell[]
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

// The density mode content config
export const DENSITY_CONFIG = {
  compact: {
    button: 'small',
    input: 'small',
    dropdown: 'small',
    badge: 'small',
  },
  comfortable: {
    button: 'small',
    input: 'small',
    dropdown: 'small',
    badge: 'small',
  },
  spacious: {
    button: 'medium',
    input: 'large',
    dropdown: 'medium',
    badge: 'default',
  },
} as const

export type Density = 'comfortable' | 'compact' | 'spacious'
export type DensityConfig = (typeof DENSITY_CONFIG)[Density]

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
export type TableDensityConfig = DensityConfig
export type TableCache<T> = Cache<T>
export type TableCacheEntry<T> = CacheEntry<T>

/**
 * ============================================================================
 *  CELL COMPONENT TYPES
 * ============================================================================
 */
type CellProps<T> = {
  [K in keyof T]?: T[K] | ((row: any) => T[K])
}

// Different approach consideation omit or pick individually
export interface Badge extends CellProps<Pick<GdsBadge, 'variant' | 'size'>> {
  type: 'badge'
  value: string | ((row: any) => string)
}

export interface Image extends CellProps<Omit<GdsImg, keyof GdsElement>> {
  type: 'image'
  src: string | ((row: any) => string)
}

export interface Button extends CellProps<Omit<GdsButton, keyof GdsElement>> {
  type: 'button'
  template?: string | ((row: any) => string)
  onClick: (row: any) => void
}

export interface Link extends CellProps<Omit<GdsLink, keyof GdsElement>> {
  type: 'link'
  template?: string | ((row: any) => string)
  onClick?: (row: any) => void
}

export interface ContextMenu
  extends CellProps<Omit<GdsContextMenu, keyof GdsElement>> {
  type: 'context-menu'
  items: Array<{
    label: string | ((row: any) => string)
    divider?: boolean
    onClick: (row: any) => void
  }>
}

export interface FormattedNumber {
  type: 'formatted-number'
  value: number | string | ((row: any) => number | string)
  locale?: string
  currency?: string
  decimals?: number
  format?: NumberFormats
}

export interface FormattedAccount {
  type: 'formatted-account'
  value: string | ((row: any) => string)
  format?: AccountFormats
}

export interface FormattedDate {
  type: 'formatted-date'
  value: string | Date | ((row: any) => string | Date)
  locale?: string
  format?: DateTimeFormat
}

export type Cell =
  | Image
  | Button
  | Link
  | Badge
  | ContextMenu
  | FormattedNumber
  | FormattedAccount
  | FormattedDate

export interface CellConfig {
  lead?: Cell
  value?: Cell
  trail?: Cell
}
