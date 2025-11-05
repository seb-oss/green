// table.cell.types.ts
import type { GdsBadge, GdsButton, GdsImg } from '../../pure'
import type {
  AccountFormats,
  DateTimeFormat,
  NumberFormats,
} from '../formatted-text/formatters'

// Helper to make properties optional and add value resolver
type CellProps<T> = {
  [K in keyof T]?: T[K] | ((row: any) => T[K])
}

export interface BadgeCell
  extends CellProps<Pick<GdsBadge, 'variant' | 'size'>> {
  type: 'badge'
  value: string | ((row: any) => string)
}

export interface ImageCell
  extends CellProps<
    Pick<
      GdsImg,
      | 'src'
      | 'alt'
      | 'width'
      | 'height'
      | 'border-radius'
      | 'object-fit'
      | 'object-position'
      | 'loading'
    >
  > {
  type: 'image'
}

export interface CopyButtonCell extends CellProps<Pick<GdsButton, 'size'>> {
  type: 'copy-button'
  value: string | ((row: any) => string)
}

export interface FormattedNumberCell {
  type: 'formatted-number'
  value: number | string | ((row: any) => number | string)
  locale?: string
  currency?: string
  format?: NumberFormats
}

export interface FormattedAccountCell {
  type: 'formatted-account'
  value: string | ((row: any) => string)
  format?: AccountFormats
}

export interface FormattedDateCell {
  type: 'formatted-date'
  value: string | Date | ((row: any) => string | Date)
  locale?: string
  format?: DateTimeFormat
}

export type CellType =
  | BadgeCell
  | ImageCell
  | CopyButtonCell
  | FormattedNumberCell
  | FormattedAccountCell
  | FormattedDateCell

export interface CellConfig {
  lead?: CellType
  value?: CellType
  trail?: CellType
}
