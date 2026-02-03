/**
 * ============================================================================
 *  TABLE TYPES
 * ============================================================================
 */
export interface Column {
  key: string
  value?: (row: any) => string
  label: string
  sortable?: boolean
  align?: 'start' | 'center' | 'stretch' | 'end'
  justify?: 'start' | 'center' | 'space-between' | 'end'
  visible?: boolean
  width?: string
}

export interface Actions {
  label?: string
  align?: 'start' | 'center' | 'stretch' | 'end'
  justify?: 'start' | 'center' | 'space-between' | 'end'
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

export type SlotValue = {
  value?: unknown
  slots: string[]
  key?: string | number
  toString(): string
  valueOf(): unknown
  [Symbol.toPrimitive](hint: string): string | number
}

export const isSlotValue = (value: unknown): value is SlotValue =>
  typeof value === 'object' &&
  value !== null &&
  Array.isArray((value as { slots?: unknown }).slots)

/**
 * Create a slot-enabled cell value.
 * - value: fallback cell content
 * - slots: ordered array including 'value'
 * - key: optional custom row key override
 * - or pass slot entries directly (lead, trail, etc.) in order
 *   - entry value: string/number -> slot id
 *   - entry value: true/undefined -> slot id = entry key
 */
export function Slot(config: SlotValue): SlotValue
export function Slot(
  value?: unknown,
  slots?: string[],
  key?: string | number,
): SlotValue
export function Slot(
  valueOrConfig?: unknown | SlotValue,
  slots: string[] = ['value'],
  key?: string | number,
): SlotValue {
  if (isSlotValue(valueOrConfig)) return valueOrConfig

  const rawValue = valueOrConfig

  return {
    value: rawValue,
    slots,
    ...(typeof key !== 'undefined' ? { key } : {}),
    toString() {
      return String(rawValue ?? '')
    },
    valueOf() {
      return rawValue as unknown
    },
    [Symbol.toPrimitive](hint: string) {
      if (hint === 'number') return Number(rawValue)
      return String(rawValue ?? '')
    },
  }
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
export type TableSlotValue = SlotValue
