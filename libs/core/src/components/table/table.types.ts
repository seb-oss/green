// table.types.ts
export interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  align?: 'left' | 'right'
  visible?: boolean
  // ⚠️ Experimental
  slots?: {
    lead?: (row: any, index: number) => any
    value?: (row: any, index: number) => any
    trail?: (row: any, index: number) => any
  }
}

export interface TableRow {
  [key: string]: any
}

export interface TableState {
  page: number
  pageSize: number
  sortColumn?: string
  sortDirection?: 'asc' | 'desc'
  searchQuery: string
  visibleColumns: Set<string>
}

export interface TableRequest {
  page: number
  pageSize: number
  sortColumn?: string
  sortDirection?: 'asc' | 'desc'
  searchQuery?: string
}

export interface TableResponse<T> {
  data: T[]
  total: number
}

export type TableDensity = 'comfortable' | 'compact' | 'spacious'

// Caching

export interface CacheEntry<T> {
  data: T[]
  total: number
  timestamp: number
}

export interface TableCache<T> {
  [key: string]: CacheEntry<T>
}
