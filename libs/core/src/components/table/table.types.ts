// table.types.ts
import { CellType } from './table.cell.types'

export interface Column {
  key: string
  label: string
  sortable?: boolean
  align?: 'left' | 'right'
  visible?: boolean
  justify?: boolean
  cell?: {
    lead?: CellType
    value?: CellType
    trail?: CellType
  }
}

export interface Row {
  [key: string]: any
}

export interface State {
  page: number
  pageSize: number
  sortColumn?: string
  sortDirection?: 'asc' | 'desc'
  searchQuery: string
  visibleColumns: Set<string>
}

export interface Request {
  page: number
  pageSize: number
  sortColumn?: string
  sortDirection?: 'asc' | 'desc'
  searchQuery?: string
}

export interface Response<T> {
  data: T[]
  total: number
}

export type Density = 'comfortable' | 'compact' | 'spacious'

export interface CacheEntry<T> {
  data: T[]
  total: number
  timestamp: number
}

export interface Cache<T> {
  [key: string]: CacheEntry<T>
}

export type TableColumn = Column
export type TableRow = Row
export type TableState = State
export type TableRequest = Request
export type TableResponse<T> = Response<T>
export type TableDensity = Density
export type TableCache<T> = Cache<T>
export type TableCacheEntry<T> = CacheEntry<T>
