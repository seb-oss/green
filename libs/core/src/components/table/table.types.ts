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

export namespace Slot {
  export type Value = {
    value?: unknown
    slots: Array<'value' | string>
    key?: string | number
  }

  export type Definition = {
    value?: unknown
    slots?: Array<'value' | string>
    key?: string | number
    [slotName: string]: unknown
  }

  export type Cell = string | number | Value | null | undefined

  const isValue = (value: unknown): value is Value =>
    typeof value === 'object' &&
    value !== null &&
    'slots' in value &&
    ((Array.isArray((value as { slots?: unknown }).slots) &&
      (value as { slots?: unknown }).slots !== null) ||
      (typeof (value as { slots?: unknown }).slots === 'object' &&
        (value as { slots?: unknown }).slots !== null))

  const isDefinition = (value: unknown): value is Definition =>
    typeof value === 'object' && value !== null

  /**
   * Create a slot-enabled cell value.
   * - value: fallback cell content
   * - slots: ordered array including 'value'
   * - key: optional custom row key override
   * - or pass slot entries directly (lead, trail, etc.) in order
   *   - entry value: string/number -> slot id
   *   - entry value: true/undefined -> slot id = entry key
   */
  export function New(config?: Definition): Value
  export function New(
    key?: string | number,
    slots?: Array<'value' | string>,
  ): Value
  export function New(
    value?: unknown,
    slots?: Array<'value' | string>,
    key?: string | number,
  ): Value
  export function New(
    valueOrConfig?: unknown | Definition,
    slots: Array<'value' | string> = [],
    key?: string | number,
  ): Value {
    const buildFromEntries = (config: Definition) => {
      const orderedSlots: Array<'value' | string> = []
      let resolvedValue: unknown = config.value

      Object.entries(config).forEach(([entryKey, entryValue]) => {
        if (entryKey === 'key' || entryKey === 'slots') return
        if (entryKey === 'value') {
          orderedSlots.push('value')
          resolvedValue = entryValue
          return
        }

        if (typeof entryValue === 'string' || typeof entryValue === 'number') {
          orderedSlots.push(String(entryValue))
          return
        }

        if (entryValue === true || typeof entryValue === 'undefined') {
          orderedSlots.push(entryKey)
        }
      })

      return {
        value: resolvedValue,
        slots: orderedSlots,
      }
    }

    if (
      (typeof valueOrConfig === 'string' ||
        typeof valueOrConfig === 'number' ||
        typeof valueOrConfig === 'undefined') &&
      Array.isArray(slots)
    ) {
      return {
        slots,
        ...(typeof valueOrConfig !== 'undefined' ? { key: valueOrConfig } : {}),
      }
    }

    if (
      (typeof valueOrConfig === 'string' ||
        typeof valueOrConfig === 'number' ||
        typeof valueOrConfig === 'undefined') &&
      isDefinition(slots) &&
      key === undefined
    ) {
      const config = slots
      if (!Array.isArray(config.slots)) {
        const built = buildFromEntries(config)
        return {
          ...built,
          ...(typeof valueOrConfig !== 'undefined'
            ? { key: valueOrConfig }
            : {}),
        }
      }

      return {
        value: config.value,
        slots: config.slots ?? [],
        ...(typeof valueOrConfig !== 'undefined' ? { key: valueOrConfig } : {}),
      }
    }

    if (isDefinition(valueOrConfig) && key === undefined) {
      const config = valueOrConfig
      if (!Array.isArray(config.slots)) {
        const built = buildFromEntries(config)
        return {
          ...built,
          ...(typeof config.key !== 'undefined' ? { key: config.key } : {}),
        }
      }

      return {
        value: config.value,
        slots: config.slots ?? [],
        ...(typeof config.key !== 'undefined' ? { key: config.key } : {}),
      }
    }

    return {
      value: valueOrConfig,
      slots,
      ...(typeof key !== 'undefined' ? { key } : {}),
    }
  }

  export const getValue = (value: unknown) => {
    if (!isValue(value)) return value

    return value.value
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
