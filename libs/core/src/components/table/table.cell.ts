// table.cell.ts
import { html } from 'lit'

import {
  accountsFormats,
  dateTimeFormats,
  numberFormats,
} from '../formatted-text/formatters'

import type { GdsBadge } from '../../pure'
import type { CellType } from './table.cell.types'

const resolve = <T>(
  value: T | ((row: any) => T) | undefined,
  row: any,
): T | undefined =>
  typeof value === 'function' ? (value as (row: any) => T)(row) : value

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

  avatar: (config: Extract<CellType, { type: 'avatar' }>, row: any) => {
    const src = resolve(config.src, row)
    if (!src) return null

    const size = config.size || '24px'

    return html`
      <gds-img
        src="${src}"
        alt="${resolve(config.alt, row) || ''}"
        width="${size}"
        height="${size}"
        border-radius="max"
        object-fit="cover"
        object-position="center"
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
        <gds-icon-copy size="s"></gds-icon-copy>
      </gds-button>
    `
  },

  // Add these renderers
  'action-menu': (
    config: Extract<CellType, { type: 'action-menu' }>,
    row: any,
  ) => html`
    <gds-context-menu>
      <gds-button slot="trigger" size="small" rank="tertiary">
        <gds-icon-dot-grid-one-horizontal
          size="m"
        ></gds-icon-dot-grid-one-horizontal>
      </gds-button>
      ${config.items.map(
        (item, idx) => html`
          ${item.divider ? html`<gds-divider></gds-divider>` : ''}
          <gds-menu-item
            variant="${item.variant || ''}"
            @click="${() => item.onClick(row)}"
          >
            ${resolve(item.label, row)}
          </gds-menu-item>
        `,
      )}
    </gds-context-menu>
  `,

  'action-buttons': (
    config: Extract<CellType, { type: 'action-buttons' }>,
    row: any,
  ) => html`
    <div style="display: flex; gap: 4px;">
      ${config.buttons.map(
        (btn) => html`
          <gds-button
            size="small"
            rank="tertiary"
            variant="${btn.variant || 'neutral'}"
            @click="${(e: Event) => {
              e.stopPropagation()
              btn.onClick(row)
            }}"
          >
            asdasd
          </gds-button>
        `,
      )}
    </div>
  `,

  'action-link': (
    config: Extract<CellType, { type: 'action-link' }>,
    row: any,
  ) => html`
    <gds-link
      href="${resolve(config.href, row)}"
      target="${config.target || '_self'}"
    >
      ${resolve(config.label, row)}
    </gds-link>
  `,

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
