// table.cell.ts
import { html } from 'lit'

import {
  accountsFormats,
  dateTimeFormats,
  numberFormats,
} from '../formatted-text/formatters'

import type { GdsBadge, GdsImg } from '../../pure'
import type { CellType } from './table.cell.types'

const resolve = <T>(
  value: T | ((row: any) => T) | undefined,
  row: any,
): T | undefined =>
  typeof value === 'function' ? (value as Function)(row) : value

const cellRenderers = {
  badge: (config: Extract<CellType, { type: 'badge' }>, row: any) => {
    const variant =
      (resolve(config.variant, row) as GdsBadge['variant']) || 'information'
    const size = (resolve(config.size, row) as GdsBadge['size']) || 'small'

    return html`
      <gds-badge size="${size}" variant="${variant}">
        ${resolve(config.value, row)}
      </gds-badge>
    `
  },

  image: (config: Extract<CellType, { type: 'image' }>, row: any) => {
    const src = resolve(config.src, row)
    if (!src) return null

    return html`
      <gds-img
        src="${src}"
        alt="${resolve(config.alt, row) || ''}"
        width="${resolve(config.width, row) || ''}"
        height="${resolve(config.height, row) || ''}"
        border-radius="${resolve(config['border-radius'], row) || ''}"
        object-fit="${resolve(config['object-fit'], row) || ''}"
        object-position="${resolve(config['object-position'], row) || ''}"
        loading="${(resolve(config.loading, row) as GdsImg['loading']) ||
        'lazy'}"
      ></gds-img>
    `
  },

  'copy-button': (
    config: Extract<CellType, { type: 'copy-button' }>,
    row: any,
  ) => {
    const valueToCopy = String(resolve(config.value, row) || '')
    const size = resolve(config.size, row) || 'small'

    return html`
      <gds-button
        size="${size}"
        rank="tertiary"
        @click="${async (e: Event) => {
          e.stopPropagation()
          await navigator.clipboard.writeText(valueToCopy)
        }}"
      >
        <gds-icon-copy size="m"></gds-icon-copy>
      </gds-button>
    `
  },

  'formatted-number': (
    config: Extract<CellType, { type: 'formatted-number' }>,
    row: any,
  ) => {
    const value = resolve(config.value, row)
    const formatter = numberFormats[config.format || 'decimalsAndThousands']
    return formatter(value, config.locale, config.currency)
  },

  'formatted-account': (
    config: Extract<CellType, { type: 'formatted-account' }>,
    row: any,
  ) => {
    const value = resolve(config.value, row)
    const formatter = accountsFormats[config.format || 'seb-account']
    return formatter(value)
  },

  'formatted-date': (
    config: Extract<CellType, { type: 'formatted-date' }>,
    row: any,
  ) => {
    const value = resolve(config.value, row)
    const formatter = dateTimeFormats[config.format || 'dateLong']
    return formatter(value, config.locale)
  },
}

export const Cell = (config: CellType | undefined, row: any) => {
  if (!config) return null
  const renderer = cellRenderers[config.type]
  return renderer ? renderer(config as any, row) : null
}
