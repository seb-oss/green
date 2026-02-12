import { localized, msg } from '@lit/localize'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { styleMap } from 'lit/directives/style-map.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { watchMediaQuery } from '../../utils/decorators'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { watch } from '../../utils/decorators/watch'
import { forSpaceTokensAndCustomValues } from '../../utils/helpers'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import * as Table from './table.imports'
import * as Types from './table.types'

/**
 * @element gds-table
 * @status beta
 *
 * @summary A data table component with async data loading, pagination, sorting, filtering, and customizable cell rendering.
 *
 * @slot `header-lead` - Content displayed at the start of the table header (after search).
 * @slot `header-trail` - Content displayed at the end of the table header (before settings).
 * @slot `error` - Custom error state content when data loading fails.
 * @slot `empty` - Custom empty state content when no data is available.
 * @slot `no-results` - Custom no results content when search returns empty.
 *
 * @event gds-page-change - Fired when the active page changes. Detail: `{ page: number }`
 * @event gds-rows-change - Fired when the rows per page value changes. Detail: `{ rows: number }`
 * @event gds-sort-change - Fired when sorting changes. Detail: `{ sortColumn: string, sortDirection: 'asc' | 'desc' }`
 * @event gds-table-data-loaded - Fired when data is successfully loaded.
 * @event gds-table-data-error - Fired when data loading fails.
 * @event gds-table-selection - Fired when row selection changes.
 */
@localized()
@gdsCustomElement('gds-table', {
  dependsOn: Table.Dependencies,
})
export class GdsTable<T extends Types.Row = Types.Row> extends GdsElement {
  static styles = Table.Styles

  #cache: Types.Cache<T> = {}
  #cacheDuration = 5 * 60 * 1000
  #templateCache = new Map<string, HTMLTemplateElement>()

  /**
   * The main headline text displayed at the top of the table.
   */
  @property()
  headline?: string

  /**
   * The HTML tag to use for the headline (e.g., 'h1', 'h2', etc.).
   */
  @property({
    attribute: 'headline-tag',
    type: String,
    reflect: true,
  })
  headlineTag = 'h2'

  /**
   * A brief description or summary displayed below the headline.
   */
  @property()
  summary?: string

  /**
   * The accessible label for the search input field.
   */
  @property({
    attribute: 'search-label',
    type: String,
  })
  searchLabel?: string

  /**
   * Configurable options for rows per page.
   * Accepts: number array (e.g., `[5, 10, 20, 50, 100]`)
   */
  @property({ type: Array })
  options = [5, 10, 20, 50, 100]

  /**
   * Current page number in pagination.
   */
  @property({ type: Number })
  page = 1

  /**
   * Number of rows displayed per page.
   */
  @property({ type: Number })
  rows = 10

  /**
   * Defines table column structure.
   * Accepts: array of column configurations with keys, labels, etc.
   */
  @property({ type: Array })
  columns: Types.Column[] = []

  /**
   * Asynchronous data provider function.
   * Accepts: function that returns Promise with rows and total count
   */
  @property()
  data!: (request: Types.Request) => Promise<Types.Response<T>>

  /**
   * Controls row density.
   * Accepts: `comfortable`, `compact`, `spacious`
   */
  @property({ reflect: false })
  density: Types.Density = 'comfortable'

  /**
   * Enables row selection functionality.
   */
  @property({ type: Boolean, reflect: false })
  selectable = false

  /**
   * Transforms table layout for mobile screens.
   */
  @property({ type: Boolean, reflect: false })
  responsive = false

  /**
   * Removes table header and footer.
   */
  @property({ type: Boolean, reflect: false })
  plain = false

  /**
   * Adds search input for data filtering.
   */
  @property({ type: Boolean, reflect: false })
  searchable = false

  /**
   * Enables column visibility settings.
   */
  @property({ type: Boolean, reflect: false })
  settings = false

  /**
   * Applies alternating row background colors.
   */
  @property({ type: Boolean, reflect: false })
  striped = false

  /**
   * Defines row-level actions.
   * Accepts: action configuration or custom rendering function
   */
  @property()
  actions?: Types.Actions | ((row: T, index: number) => any)

  /**
   * Disables data caching mechanism.
   */
  @property({ type: Boolean, reflect: false })
  nocache = false

  /**
   * Key to trigger data reloading when changed. Setting this to a new value
   * forces the table to clear the cache and request new data from the data provider.
   *
   * The value can be any string that is not equal to the previous value.
   */
  @property()
  dataLoadKey?: string

  /**
   * Style Expression Property that controls the height property.
   * Supports space tokens and all valid CSS width values.
   *
   * Sets the height of the table content area and enables vertical scrolling
   * with a sticky header that remains visible.
   */
  @styleExpressionProperty({
    ...forSpaceTokensAndCustomValues,
    property: '--_table-height',
    selector: '.data',
  })
  height?: string

  /**
   * Sets the visual variant of the table container card.
   * Forwards to the underlying `gds-card` component.
   * Accepts: `primary`, `secondary` (default), `tertiary`.
   *
   * > Variant naming will change in the next major release.
   */
  @property()
  variant: 'primary' | 'secondary' | 'tertiary' = 'secondary'

  @state()
  private _isMobile = false

  @watchMediaQuery('(max-width: 768px)')
  private _handleMobile(matches: boolean) {
    this._isMobile = matches
  }

  /**
   * Get the current density configuration
   */
  get #Density() {
    return Types.DENSITY_CONFIG[this.density]
  }

  @state()
  private _view: Types.State = {
    page: this.page,
    rows: this.rows,
    searchQuery: '',
    visibleColumns: new Set(),
  }

  @state()
  private _loaded = true

  @state()
  private _loading = false

  @state()
  private _rowsState: T[] = []

  @state()
  private _total = 0

  @state()
  private _selected = new Set<number>()

  @state()
  private _error: Error | null = null

  get #hasSelection(): boolean {
    return this._selected.size > 0
  }

  get #isAllSelected(): boolean {
    return (
      this._rowsState.length > 0 &&
      this._selected.size === this._rowsState.length
    )
  }

  get #isPartialSelection(): boolean {
    return this.#hasSelection && !this.#isAllSelected
  }

  #getCacheKey(): string {
    return JSON.stringify({
      page: this._view.page,
      rows: this._view.rows,
      sortColumn: this._view.sortColumn,
      sortDirection: this._view.sortDirection,
      searchQuery: this._view.searchQuery,
    })
  }

  #isCacheValid(entry: Types.CacheEntry<T>): boolean {
    return Date.now() - entry.timestamp < this.#cacheDuration
  }

  @watch('dataLoadKey')
  @watch('data')
  private _onDataChange() {
    this.#cache = {}
    this.#loadData()
  }

  @watch('columns')
  private _onColumnsChange() {
    this.#cache = {}
    this._view = {
      ...this._view,
      page: Number(this.page ?? 1),
      rows: Number(this.rows ?? 10),
      visibleColumns: new Set(
        this.columns
          .filter((col) => col.visible !== false)
          .map((col) => col.key),
      ),
    }
  }

  async #loadData() {
    if (!this.data) return

    if (!this.nocache) {
      const cacheKey = this.#getCacheKey()
      const cachedData = this.#cache[cacheKey]

      if (cachedData && this.#isCacheValid(cachedData)) {
        this._rowsState = cachedData.rows
        this._total = cachedData.total
        this._loaded = false
        return
      }
    }

    this._loading = true
    this._error = null

    try {
      const response = await this.data({
        page: this._view.page,
        rows: this._view.rows,
        sortColumn: this._view.sortColumn,
        sortDirection: this._view.sortDirection,
        searchQuery: this._view.searchQuery,
      })

      if (!this.nocache) {
        const cacheKey = this.#getCacheKey()
        this.#cache[cacheKey] = {
          rows: response.rows,
          total: response.total,
          timestamp: Date.now(),
        }
      }

      this._rowsState = response.rows
      this._total = response.total
      this._selected.clear()
      this._loaded = false

      this.dispatchCustomEvent('gds-table-data-loaded', {
        detail: response,
        bubbles: true,
      })
    } catch (error) {
      this._error = error as Error
      this.dispatchCustomEvent('gds-table-data-error', {
        detail: error,
        bubbles: true,
      })
    } finally {
      this._loading = false
    }
  }

  connectedCallback(): void {
    super.connectedCallback()

    this.updateComplete.then(() => {
      this.#initializeScrollTracking()
    })
  }

  /**
   * Retrieves template content for the given slot name.
   * Uses caching to prevent repeated DOM queries for better performance in large tables.
   */
  #getSlotContent(slot: string | undefined) {
    if (!slot) return null

    if (!this.#templateCache.has(slot)) {
      const template = this.querySelector(
        `template[name="${slot}"]`,
      ) as HTMLTemplateElement
      this.#templateCache.set(slot, template)
    }

    return this.#templateCache.get(slot)?.content.cloneNode(true)
  }

  #renderCell(config: Types.Cell | Types.Cell[] | undefined, row: T): any {
    if (!config) return null

    if (Array.isArray(config)) {
      return config.map((c) => this.#renderCell(c, row))
    }

    const resolve = <V>(
      value: V | ((r: any) => V) | undefined,
    ): V | undefined =>
      typeof value === 'function' ? (value as any)(row) : value

    switch (config.type) {
      case 'badge': {
        const variant = resolve(config.variant) || 'information'
        const size = resolve(config.size) || this.#Density.badge
        return html`
          <gds-badge size="${size}" variant="${variant}">
            ${resolve(config.value)}
          </gds-badge>
        `
      }

      case 'image': {
        const src = resolve(config.src)
        if (!src) return null

        const width = resolve(config.width) || '24px'
        const height = resolve(config.height) || '24px'
        const borderRadius = resolve(config['border-radius']) || 'max'
        const objectFit = resolve(config['object-fit']) || 'cover'
        const alt = resolve(config.alt) || ''

        return html`
          <gds-img
            src="${src}"
            alt="${alt}"
            width="${width}"
            height="${height}"
            border-radius="${borderRadius}"
            object-fit="${objectFit}"
            object-position="center"
          ></gds-img>
        `
      }

      case 'icon': {
        const template = resolve(config.template) as string | undefined
        const size = resolve(config.size)
        const color = resolve(config.color)
        const clonedSlot = this.#getSlotContent(template)

        if (!clonedSlot) return null

        if (clonedSlot instanceof DocumentFragment) {
          const iconElement = clonedSlot.firstElementChild
          if (iconElement) {
            if (size) iconElement.setAttribute('size', size)
            if (color) iconElement.setAttribute('color', color)
          }
        }

        return clonedSlot
      }

      case 'button': {
        const size = resolve(config.size) || this.#Density.button
        const variant = resolve(config.variant)
        const rank = resolve(config.rank)
        const label = resolve(config.label)
        const template = resolve(config.template) as string | undefined
        const clonedSlot = this.#getSlotContent(template)
        const content = [label, clonedSlot]

        return html`
          <gds-button
            size="${size}"
            variant="${variant || 'neutral'}"
            rank="${rank || 'secondary'}"
            @click="${(e: Event) => {
              e.stopPropagation()
              config.onClick(row)
            }}"
          >
            ${content}
          </gds-button>
        `
      }

      case 'link': {
        const href = resolve(config.href)
        if (!href) return null
        const label = resolve(config.label)
        const target = resolve(config.target)
        const download = resolve(config.download)
        const template = resolve(config.template) as string | undefined
        const clonedSlot = this.#getSlotContent(template)
        const content = [label, clonedSlot]

        return html`
          <gds-link
            href=${ifDefined(href)}
            target=${ifDefined(target)}
            .download=${download}
            text-decoration="underline"
          >
            ${content}
          </gds-link>
        `
      }

      case 'context-menu': {
        const items = config.items
        const size = this.#Density.button
        return html`
          <gds-context-menu>
            <gds-button
              slot="trigger"
              size="${size}"
              rank="tertiary"
              label="${msg('Actions')}"
            >
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            ${items.map((item) => {
              const label = resolve(item.label)

              return html`
                <gds-menu-item @click="${() => item.onClick(row)}">
                  ${label}
                </gds-menu-item>
              `
            })}
          </gds-context-menu>
        `
      }

      case 'formatted-number': {
        const value = resolve(config.value)
        const formatter =
          Table.FormatNumber[config.format || 'decimalsAndThousands']
        return formatter(value, config.locale, config.currency, config.decimals)
      }

      case 'formatted-account': {
        const value = resolve(config.value)
        const formatter = Table.FormatAccount[config.format || 'seb-account']
        return formatter(value)
      }

      case 'formatted-date': {
        const value = resolve(config.value)
        const formatter = Table.FormatDate[config.format || 'dateLong']
        return formatter(value, config.locale)
      }

      default:
        return null
    }
  }

  /**
   * Renders the content of a table cell with support for custom transformations,
   * cell types, and responsive mobile labels.
   *
   * Value resolution priority:
   * 1. column.value - Direct transform function
   * 2. cell.value - Cell type configuration (badge, button, etc.)
   * 3. row[column.key] - Raw data value
   */
  #renderCellContent(row: T, column: Types.Column) {
    const { cell } = column

    let value: any
    if (column.value) {
      value = column.value(row)
    } else if (cell?.value) {
      value = this.#renderCell(cell.value, row)
    } else {
      value = row[column.key]
    }

    const processedValue = column.justify ? html`<span>${value}</span>` : value
    const isResponsive = this._isMobile && this.responsive
    const mobileLabel = isResponsive
      ? html`
          <span class="column-label" aria-hidden="true">
            ${column.label}:
          </span>
        `
      : null

    const ariaLabel = isResponsive ? `${column.label}: ` : ''

    return html`
      <div class="cell-content" aria-label="${ariaLabel}">
        ${[
          mobileLabel,
          this.#renderCell(cell?.lead, row),
          processedValue,
          this.#renderCell(cell?.trail, row),
        ]}
      </div>
    `
  }

  #renderSortIcon(column: Types.Column) {
    const isSorted = this._view.sortColumn === column.key
    const sortDirection = this._view.sortDirection

    if (isSorted) {
      return sortDirection === 'asc'
        ? html`<gds-icon-sort-up size="m"></gds-icon-sort-up>`
        : html`<gds-icon-sort-down size="m"></gds-icon-sort-down>`
    }

    return html`<gds-icon-sort-up size="m"></gds-icon-sort-up>`
  }

  #hasHeaderContent() {
    return (
      this.searchable ||
      this.settings ||
      this.querySelector('[slot="header-lead"]') ||
      this.querySelector('[slot="header-trail"]')
    )
  }

  #renderHeaderControls() {
    if (this.plain || !this.#hasHeaderContent()) return null
    return html`
      <div class="header">
        <div class="lead">
          ${when(
            this.searchable,
            () => html`
              <gds-input
                type="text"
                size="${this.#Density.input}"
                plain
                clearable
                label="${this.searchLabel || msg('Search table')}"
                .value=${this._view.searchQuery}
                @input=${this.#handleSearch}
                @gds-input-cleared=${this.#handleSearchClear}
                width="100%; l{240px}"
                min-width="240px"
              >
                <gds-icon-magnifying-glass
                  slot="lead"
                ></gds-icon-magnifying-glass>
              </gds-input>
            `,
          )}
          <slot name="header-lead"></slot>
        </div>
        <div class="trail">
          <slot name="header-trail"></slot>
          ${when(
            this.settings,
            () => html`
              <gds-dropdown
                multiple
                plain
                size="${this.#Density.dropdown}"
                label="${msg('Select visible columns')}"
                searchable
                .value=${Array.from(this._view.visibleColumns) as any}
                @change=${this.#handleColumnVisibility}
              >
                <span slot="trigger">${msg('Columns')}</span>
                ${this.columns.map(
                  (column) => html`
                    <gds-option
                      value=${column.key}
                      ?selected=${this._view.visibleColumns.has(column.key)}
                    >
                      ${column.label}
                    </gds-option>
                  `,
                )}
              </gds-dropdown>
            `,
          )}
        </div>
      </div>
    `
  }

  #renderColumnHeader(column: Types.Column) {
    const isSorted = this._view.sortColumn === column.key
    const sortDirection = this._view.sortDirection

    let ariaLabel = column.label
    if (column.sortable) {
      if (isSorted) {
        const direction =
          sortDirection === 'asc' ? msg('ascending') : msg('descending')
        ariaLabel = `${column.label}, ${msg('sorted')} ${direction}`
      } else {
        ariaLabel = `${column.label}, ${msg('sortable')}`
      }
    }

    const classes = classMap({
      sortable: !!column.sortable,
      sorted: isSorted,
      'sort-asc': isSorted && sortDirection === 'asc',
      'sort-desc': isSorted && sortDirection === 'desc',
      [`align-${column.align}`]: !!column.align,
      [`justify-${column.justify}`]: !!column.justify,
      wrap: Boolean(column.width),
    })

    const style = styleMap({
      '--cell-width': column.width,
    })

    return html`
      <th
        class=${classes}
        style=${style}
        aria-sort="${isSorted
          ? sortDirection === 'asc'
            ? 'ascending'
            : 'descending'
          : 'none'}"
        @click=${column.sortable ? () => this.#handleSort(column.key) : null}
      >
        <div class="column-header">
          <span class="column-label" aria-label="${ariaLabel}">
            ${column.label}
          </span>
          ${when(
            column.sortable,
            () => html`
              <span class="sort-icon">${this.#renderSortIcon(column)}</span>
            `,
          )}
        </div>
      </th>
    `
  }

  #renderActionsHeader() {
    if (!this.actions || typeof this.actions === 'function') return null

    const label = this.actions.label || msg('Actions')

    const classes = classMap({
      actions: true,
      [`align-${this.actions.align}`]: !!this.actions.align,
      [`justify-${this.actions.justify}`]: !!this.actions.justify,
    })

    return html`
      <th class="${classes}">
        <div class="column-header">
          <div class="column-label">${label}</div>
        </div>
      </th>
    `
  }

  #renderSelectableHeader() {
    if (!this.selectable) return null

    return html`
      <th class="checkbox-cell">
        ${this.#renderCheckbox({
          checked: this.#isAllSelected,
          indeterminate: this.#isPartialSelection,
          ariaLabel: msg('Select all rows'),
          onToggle: () => this.#handleSelectAll({} as CustomEvent),
        })}
      </th>
    `
  }

  #renderColumnHeaders() {
    return this.columns
      .filter((column) => this._view.visibleColumns.has(column.key))
      .map((column) => this.#renderColumnHeader(column))
  }

  #renderTableHeader() {
    return html`
      <thead>
        <tr>
          ${[
            this.#renderSelectableHeader(),
            this.#renderColumnHeaders(),
            this.#renderActionsHeader(),
          ]}
        </tr>
      </thead>
    `
  }

  #renderTableCell(row: T, column: Types.Column) {
    const classes = classMap({
      [`align-${column.align}`]: !!column.align,
      [`justify-${column.justify}`]: !!column.justify,
      wrap: Boolean(column.width),
    })

    const style = styleMap({
      '--cell-width': column.width,
    })

    return html`
      <td style=${style} class=${classes}>
        ${this.#renderCellContent(row, column)}
      </td>
    `
  }

  #renderSelectableCell(index: number) {
    if (!this.selectable) return null
    const selectRowLabel = `${msg('Select row')} ${index + 1}`
    return html`
      <td class="checkbox-cell">
        ${this.#renderCheckbox({
          checked: this._selected.has(index),
          indeterminate: false,
          ariaLabel: selectRowLabel,
          onToggle: () =>
            this.#handleRowSelect(index, {
              detail: { checked: !this._selected.has(index) },
            } as CustomEvent),
        })}
      </td>
    `
  }

  #renderRowCells(row: T) {
    return this.columns
      .filter((column) => this._view.visibleColumns.has(column.key))
      .map((column) => this.#renderTableCell(row, column))
  }

  #renderActionsCell(row: T, index: number) {
    if (!this.actions) return null

    if (typeof this.actions === 'function') {
      return html`
        <td class="actions-cell">
          <div class="cell-content">${this.actions(row, index)}</div>
        </td>
      `
    }

    const content = this.#renderCell(this.actions.cell, row)

    const classes = classMap({
      'actions-cell': true,
      [`align-${this.actions.align}`]: !!this.actions.align,
      [`justify-${this.actions.justify}`]: !!this.actions.justify,
    })

    return html`
      <td class="${classes}">
        <div class="cell-content">${content}</div>
      </td>
    `
  }

  #renderTableRow(row: T, index: number) {
    return html`
      <tr
        class=${classMap({
          selected: this._selected.has(index),
          loading: this._loading,
        })}
      >
        ${[
          this.#renderSelectableCell(index),
          this.#renderRowCells(row),
          this.#renderActionsCell(row, index),
        ]}
      </tr>
    `
  }

  #renderCheckbox({
    checked,
    indeterminate = false,
    disabled = false,
    ariaLabel,
    onToggle,
  }: {
    checked: boolean
    indeterminate?: boolean
    disabled?: boolean
    ariaLabel: string
    onToggle: () => void
  }) {
    const toggle = (e: Event) => {
      e.stopPropagation()
      if (disabled) return
      onToggle()
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        toggle(e)
      }
    }

    return html`
      <div
        class="rbcb-wrapper"
        role="checkbox"
        aria-checked=${indeterminate ? 'mixed' : checked ? 'true' : 'false'}
        aria-label=${ariaLabel}
        @click=${toggle}
        @keydown=${onKey}
      >
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${checked}
          .indeterminate=${indeterminate}
          ?disabled=${disabled}
          aria-hidden="true"
          @change=${toggle}
        />
        ${Table.Checkbox({
          checked,
          indeterminate,
          disabled,
          invalid: false,
        })}
      </div>
    `
  }

  #renderSkeletonCell(column?: Types.Column) {
    const isResponsive = this._isMobile && this.responsive

    const mobileLabel = isResponsive
      ? html`<span class="skeleton skeleton-text"></span>`
      : null

    return html`
      <div class="cell-content">
        ${mobileLabel}
        <span class="skeleton skeleton-text"></span>
      </div>
    `
  }

  #renderSkeletonRow(index: number) {
    return html`
      <tr class="skeleton-row">
        ${when(
          this.selectable,
          () => html`
            <td class="checkbox-cell">
              <span class="skeleton skeleton-checkbox"></span>
            </td>
          `,
        )}
        ${this.columns
          .filter((column) => this._view.visibleColumns.has(column.key))
          .map((column) => html`<td>${this.#renderSkeletonCell(column)}</td>`)}
        ${when(
          this.actions,
          () => html`
            <td class="actions-cell">
              <div class="cell-content">
                <span class="skeleton skeleton-action"></span>
              </div>
            </td>
          `,
        )}
      </tr>
    `
  }

  #renderTableBody() {
    // Show the skeleton only on the initial load
    if (this._loading && this._loaded) {
      const skeletonRows = Array.from({ length: this._view.rows }, (_, i) =>
        this.#renderSkeletonRow(i),
      )
      return html`<tbody aria-busy="true" aria-live="polite">
        ${skeletonRows}
      </tbody>`
    }

    return html`
      <tbody aria-live="polite">
        ${this._rowsState.map((row, index) => this.#renderTableRow(row, index))}
      </tbody>
    `
  }

  #renderTable() {
    const CLASSES = classMap({
      responsive: this.responsive,
      data: true,
      [`variant-${this.variant}`]: true,
      loading: this._loading,
      loaded: !this._loading && !this._loaded,
    })
    const caption = `${this.summary ? this.summary + ', ' : ''}${msg('Data table with')} ${this._total} ${msg('rows')}`

    return html`
      <gds-card
        variant="${this.variant}"
        padding="0"
        border-radius="m"
        border-width="0; s{5xs}"
        class="table-card"
      >
        <div class=${CLASSES} tabindex="0">
          <table aria-label="${caption}">
            <caption class="visually-hidden">
              ${caption}
            </caption>
            ${this.#renderTableHeader()} ${this.#renderTableBody()}
          </table>
        </div>
      </gds-card>
    `
  }

  #renderErrorState() {
    return html`
      <gds-card variant="secondary" border-radius="m">
        <slot name="error">
          <gds-text tag="p">${msg('Error loading data')}</gds-text>
          <gds-button
            size="small"
            label="${msg('Retry loading data')}"
            @click=${() => this.#loadData()}
          >
            ${msg('Retry')}
          </gds-button>
        </slot>
      </gds-card>
    `
  }

  #renderEmptyState() {
    const hasSearch = this._view.searchQuery.length > 0

    if (hasSearch) {
      return html`
        <gds-card variant="secondary" border-radius="m">
          <slot name="no-results">
            <gds-flex flex-direction="column" align-items="flex-start" gap="s">
              <gds-text tag="p" font="heading-s">
                ${msg('No results found')}
              </gds-text>
              <gds-text tag="p" font="detail-book-s">
                ${msg('No results for')} "${this._view.searchQuery}"
              </gds-text>
              <gds-button
                size="small"
                label="${msg('Clear search for')} ${this._view.searchQuery}"
                @click=${this.#handleSearchClear}
              >
                ${msg('Clear search')}
              </gds-button>
            </gds-flex>
          </slot>
        </gds-card>
      `
    }

    return html`
      <gds-card variant="secondary" border-radius="m">
        <slot name="empty">
          <gds-text tag="p" font="heading-s">
            ${msg('No data available')}
          </gds-text>
        </slot>
      </gds-card>
    `
  }

  #renderFooter() {
    if (this.plain || this._total < 1) return null

    const start = (this._view.page - 1) * this._view.rows + 1
    const end = Math.min(this._view.page * this._view.rows, this._total)
    const summaryString = `${start}–${end} ${msg('of')} ${this._total}`

    return html`
      <gds-pagination
        .page=${this._view.page}
        .rows=${this._view.rows}
        .options=${this.options}
        .total=${this._total}
        .density=${this.density}
        .label=${summaryString}
        @gds-page-change=${this.#handlePageChange}
        @gds-rows-change=${this.#handlePageSizeChange}
        width="100%"
      >
      </gds-pagination>
    `
  }

  #renderHeadline() {
    if (this.plain) return null

    if (this.headline || this.summary) {
      return html`
        <gds-flex flex-direction="column" gap="4xs">
          <gds-text
            tag="${this.headlineTag}"
            font="heading-s"
            text-wrap="balance"
            max-width="80ch"
          >
            ${this.headline}
          </gds-text>
          <gds-text
            tag="p"
            font=${this.density === 'compact'
              ? 'body-regular-s'
              : 'body-regular-m'}
            text-wrap="balance"
            max-width="80ch"
          >
            ${this.summary}
          </gds-text>
        </gds-flex>
        ${when(
          this.searchable || this.settings,
          () => html`<gds-divider color="subtle-01"></gds-divider>`,
          () => html``,
        )}
      `
    }
  }

  render() {
    const classes = {
      table: true,
      plain: this.plain,
      striped: this.striped,
      [this.density]: this.density,
    }
    return html`
      <div class="${classMap(classes)}">
        ${[
          this.#renderHeadline(),
          this.#renderHeaderControls(),
          when(
            this._error,
            () => this.#renderErrorState(),
            () =>
              when(
                this._rowsState.length === 0 && !this._loading,
                () => this.#renderEmptyState(),
                () => this.#renderTable(),
              ),
          ),
          this.#renderFooter(),
        ]}
      </div>
    `
  }

  /**
   * Handles search input changes
   * Resets to first page and triggers data reload with search query
   */
  async #handleSearch(e: Event) {
    const input = e.target as HTMLInputElement
    this._view = {
      ...this._view,
      searchQuery: input.value,
      page: 1,
    }
    await this.#loadData()
  }

  /**
   * Handles search input clear action
   * Resets search query and reloads data
   */
  async #handleSearchClear() {
    this._view = {
      ...this._view,
      searchQuery: '',
      page: 1,
    }
    await this.#loadData()
  }

  /**
   * Handles column sort click
   * Toggles sort direction if same column, otherwise sets new sort column
   */
  async #handleSort(columnKey: string) {
    const newDirection =
      this._view.sortColumn === columnKey && this._view.sortDirection === 'asc'
        ? 'desc'
        : 'asc'

    this._view = {
      ...this._view,
      sortColumn: columnKey,
      sortDirection: newDirection,
      page: 1,
    }

    // Dispatch event for external listeners
    this.dispatchCustomEvent('gds-sort-change', {
      detail: {
        sortColumn: columnKey,
        sortDirection: newDirection,
      },
      bubbles: true,
    })

    await this.#loadData()
  }

  /**
   * Handles pagination page change
   */
  async #handlePageChange(e: CustomEvent) {
    this._view = {
      ...this._view,
      page: e.detail.page,
    }
    // Re-dispatch event for external listeners
    this.dispatchCustomEvent('gds-page-change', {
      detail: e.detail,
      bubbles: true,
    })
    await this.#loadData()
  }

  /**
   * Handles pagination page size change
   * Resets to first page when page size changes
   */
  async #handlePageSizeChange(e: CustomEvent) {
    this._view = {
      ...this._view,
      rows: e.detail.rows,
      page: 1,
    }
    // Re-dispatch event for external listeners
    this.dispatchCustomEvent('gds-rows-change', {
      detail: e.detail,
      bubbles: true,
    })
    await this.#loadData()
  }

  /**
   * Handles column visibility dropdown changes
   * Updates visible columns set and triggers re-render
   */
  #handleColumnVisibility(e: CustomEvent) {
    const selectedColumns = e.detail.value as string[]
    this._view = {
      ...this._view,
      visibleColumns: new Set(selectedColumns),
    }
    this.requestUpdate()
  }

  /**
   * Handles select all checkbox change
   * Toggles between all selected and none selected
   */
  #handleSelectAll(e: CustomEvent) {
    if (this.#isAllSelected) {
      this.#clearSelectionInternal()
    } else {
      this.#selectAllInternal()
    }
    this.#emitSelectionChange()
  }

  /**
   * Handles individual row selection change
   */
  #handleRowSelect(index: number, e: CustomEvent) {
    const isChecked = e.detail.checked

    if (isChecked) {
      this._selected.add(index)
    } else {
      this._selected.delete(index)
    }

    this.#emitSelectionChange()
    this.requestUpdate()
  }

  /**
   * Internal method to select all rows
   */
  #selectAllInternal(): void {
    this._selected = new Set(this._rowsState.map((_, i) => i))
    this.requestUpdate()
  }

  /**
   * Internal method to clear all selections
   */
  #clearSelectionInternal(): void {
    this._selected.clear()
    this.requestUpdate()
  }

  /**
   * Emits selection change event with current selection details
   */
  #emitSelectionChange(): void {
    this.dispatchCustomEvent('gds-table-selection', {
      detail: {
        selectedIndices: Array.from(this._selected),
        selectedData: Array.from(this._selected).map((i) => this._rowsState[i]),
        count: this._selected.size,
      },
      bubbles: true,
    })
  }

  /**
   * Initializes scroll tracking for the table data container.
   * Sets up event listeners and performs initial scroll state check.
   */
  #initializeScrollTracking() {
    const dataContainer = this.shadowRoot?.querySelector('.data')
    if (!dataContainer) return

    const updateScrollState = () => {
      this.#updateVerticalScrollState(dataContainer)
      this.#updateHorizontalScrollState(dataContainer)
    }

    dataContainer.addEventListener('scroll', updateScrollState)
    // Initial check
    updateScrollState()
  }

  /**
   * Updates CSS classes based on vertical scroll position.
   * Adds 'scrolled' class when scrolled down from top.
   */
  #updateVerticalScrollState(container: Element) {
    const { scrollTop } = container

    if (scrollTop > 0) {
      container.classList.add('scrolled')
    } else {
      container.classList.remove('scrolled')
    }
  }

  /**
   * Updates CSS classes based on horizontal scroll position.
   * Manages 'scrolled-x-start', 'scrolled-x-middle', and 'scrolled-x-end' classes
   * to indicate scroll position for styling purposes (e.g., shadows, sticky columns).
   */
  #updateHorizontalScrollState(container: Element) {
    const { scrollLeft, scrollWidth, clientWidth } = container
    const maxScrollLeft = scrollWidth - clientWidth

    if (scrollLeft <= 0) {
      container.classList.add('scrolled-x-start')
      container.classList.remove('scrolled-x-middle', 'scrolled-x-end')
    } else if (scrollLeft >= maxScrollLeft - 1) {
      container.classList.add('scrolled-x-end')
      container.classList.remove('scrolled-x-start', 'scrolled-x-middle')
    } else {
      container.classList.add('scrolled-x-middle')
      container.classList.remove('scrolled-x-start', 'scrolled-x-end')
    }
  }

  /**
   * Public API
   * Clear all selections
   */
  clearSelection(): void {
    this.#clearSelectionInternal()
    this.#emitSelectionChange()
  }

  /**
   * Select all rows
   */
  selectAll(): void {
    this.#selectAllInternal()
    this.#emitSelectionChange()
  }

  /**
   * Select specific rows by indices
   */
  setSelection(indices: number[]): void {
    const validIndices = indices.filter(
      (i) => i >= 0 && i < this._rowsState.length,
    )
    this._selected = new Set(validIndices)
    this.#emitSelectionChange()
    this.requestUpdate()
  }

  /**
   * Get selected row data
   */
  getSelection(): { indices: number[]; data: T[] } {
    const indices = Array.from(this._selected)
    return {
      indices,
      data: indices.map((i) => this._rowsState[i]),
    }
  }
}
