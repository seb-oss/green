import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { ifDefined } from 'lit/directives/if-defined.js'
import { styleMap } from 'lit/directives/style-map.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { watchMediaQuery } from '../../utils/decorators'
import { watch } from '../../utils/decorators/watch'
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
 * ⚠️ Declare events
 */
@gdsCustomElement('gds-table', {
  dependsOn: Table.Dependencies,
})
export class GdsTable<T extends Types.Row = Types.Row> extends GdsElement {
  static styles = Table.Styles

  #cache: Types.Cache<T> = {}
  #cacheDuration = 5 * 60 * 1000
  #templateCache = new Map<string, HTMLTemplateElement>()

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
  @state() private _isMobile = false

  @watchMediaQuery('(max-width: 768px)')
  _handleMobile(matches: boolean) {
    this._isMobile = matches
  }

  @state()
  private view: Types.State = {
    page: this.page,
    rows: this.rows,
    searchQuery: '',
    visibleColumns: new Set(),
  }

  @state()
  private loaded = true

  @state()
  private loading = false

  @state()
  private rowsState: T[] = []

  @state()
  private total = 0

  @state()
  private selected = new Set<number>()

  @state()
  private error: Error | null = null

  get #hasSelection(): boolean {
    return this.selected.size > 0
  }

  get #isAllSelected(): boolean {
    return (
      this.rowsState.length > 0 && this.selected.size === this.rowsState.length
    )
  }

  get #isPartialSelection(): boolean {
    return this.#hasSelection && !this.#isAllSelected
  }

  #getCacheKey(): string {
    return JSON.stringify({
      page: this.view.page,
      rows: this.view.rows,
      sortColumn: this.view.sortColumn,
      sortDirection: this.view.sortDirection,
      searchQuery: this.view.searchQuery,
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
    this.view = {
      ...this.view,
      page: Number(this.page ?? 1),
      rows: Number(this.rows ?? 10),
      visibleColumns: new Set(this.columns.map((col) => col.key)),
    }
  }

  async #loadData() {
    if (!this.data) return

    if (!this.nocache) {
      const cacheKey = this.#getCacheKey()
      const cachedData = this.#cache[cacheKey]

      if (cachedData && this.#isCacheValid(cachedData)) {
        this.rowsState = cachedData.rows
        this.total = cachedData.total
        this.loaded = false
        return
      }
    }

    this.loading = true
    this.error = null

    try {
      const response = await this.data({
        page: this.view.page,
        rows: this.view.rows,
        sortColumn: this.view.sortColumn,
        sortDirection: this.view.sortDirection,
        searchQuery: this.view.searchQuery,
      })

      /*  this.#cache[cacheKey] = {
        rows: response.rows,
        total: response.total,
        timestamp: Date.now(),
      } */

      if (!this.nocache) {
        const cacheKey = this.#getCacheKey()
        this.#cache[cacheKey] = {
          rows: response.rows,
          total: response.total,
          timestamp: Date.now(),
        }
      }

      this.rowsState = response.rows
      this.total = response.total
      this.selected.clear()
      this.loaded = false

      this.dispatchEvent(
        new CustomEvent('gds-table-data-loaded', {
          detail: response,
          bubbles: true,
        }),
      )
    } catch (error) {
      this.error = error as Error
      this.dispatchEvent(
        new CustomEvent('gds-table-data-error', {
          detail: error,
          bubbles: true,
        }),
      )
    } finally {
      this.loading = false
    }
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
        const size = resolve(config.size) || 'small'
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

      case 'button': {
        const size = resolve(config.size)
        const variant = resolve(config.variant)
        const rank = resolve(config.rank)
        const label = resolve(config.label)
        const template = resolve(config.template) as string | undefined
        const clonedSlot = this.#getSlotContent(template)
        const content = [label, clonedSlot]

        return html`
          <gds-button
            size="${size || 'small'}"
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

        return html`
          <gds-context-menu>
            <gds-button slot="trigger" size="xs" rank="tertiary">
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
        return formatter(value, config.locale, config.currency)
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

  #renderCellContent(row: T, column: Types.Column) {
    const { cell } = column
    const value = this.#renderCell(cell?.value, row) ?? row[column.key]
    const processedValue = column.justify ? html`<span>${value}</span>` : value
    const isResponsive = this._isMobile && this.responsive

    const mobileLabel = isResponsive
      ? html`<span class="column-label" aria-hidden="true"
          >${column.label}:</span
        >`
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
    const isSorted = this.view.sortColumn === column.key
    const sortDirection = this.view.sortDirection

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
                size="small"
                plain
                clearable
                placeholder="Search..."
                .value=${this.view.searchQuery}
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
                size="small"
                searchable
                .value=${Array.from(this.view.visibleColumns) as any}
                @change=${this.#handleColumnVisibility}
              >
                <span slot="trigger">Columns</span>
                ${this.columns.map(
                  (column) => html`
                    <gds-option
                      value=${column.key}
                      ?selected=${this.view.visibleColumns.has(column.key)}
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
    const isSorted = this.view.sortColumn === column.key
    const sortDirection = this.view.sortDirection

    const classes = classMap({
      sortable: !!column.sortable,
      sorted: isSorted,
      'sort-asc': isSorted && sortDirection === 'asc',
      'sort-desc': isSorted && sortDirection === 'desc',
      [`align-${column.align}`]: !!column.align,
      [`justify-${column.justify}`]: !!column.justify,
    })

    return html`
      <th
        class=${classes}
        @click=${column.sortable ? () => this.#handleSort(column.key) : null}
      >
        <div class="column-header">
          <span class="column-label">${column.label}</span>
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

    const label = this.actions.label || 'Actions'

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
          ariaLabel: 'Select all rows',
          onToggle: () => this.#handleSelectAll({} as CustomEvent),
        })}
      </th>
    `
  }

  #renderColumnHeaders() {
    return this.columns
      .filter((column) => this.view.visibleColumns.has(column.key))
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

    return html`
      <td class="checkbox-cell" data-label="Select">
        ${this.#renderCheckbox({
          checked: this.selected.has(index),
          indeterminate: false,
          ariaLabel: `Select row ${index + 1}`,
          onToggle: () =>
            this.#handleRowSelect(index, {
              detail: { checked: !this.selected.has(index) },
            } as CustomEvent),
        })}
      </td>
    `
  }

  #renderRowCells(row: T) {
    return this.columns
      .filter((column) => this.view.visibleColumns.has(column.key))
      .map((column) => this.#renderTableCell(row, column))
  }

  #renderActionsCell(row: T, index: number) {
    if (!this.actions) return null

    if (typeof this.actions === 'function') {
      return html`
        <td class="actions-cell" data-label="Actions">
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
      <td class="${classes}" data-label="Actions">
        <div class="cell-content">${content}</div>
      </td>
    `
  }

  #renderTableRow(row: T, index: number) {
    return html`
      <tr
        class=${classMap({
          selected: this.selected.has(index),
          loading: this.loading,
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

  #renderSkeletonCell() {
    return html`
      <div class="cell-content">
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
          .filter((column) => this.view.visibleColumns.has(column.key))
          .map(() => html` <td>${this.#renderSkeletonCell()}</td> `)}
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
    if (this.loading && this.loaded) {
      const skeletonRows = Array.from({ length: this.view.rows }, (_, i) =>
        this.#renderSkeletonRow(i),
      )
      return html`<tbody>
        ${skeletonRows}
      </tbody>`
    }

    return html`
      <tbody>
        ${this.rowsState.map((row, index) => this.#renderTableRow(row, index))}
      </tbody>
    `
  }

  #renderTable() {
    const CLASSES = classMap({
      responsive: this.responsive,
      data: true,
    })
    return html`
      <div class=${CLASSES}>
        <table>
          ${this.#renderTableHeader()} ${this.#renderTableBody()}
        </table>
      </div>
    `
  }

  #renderErrorState() {
    return html`
      <gds-card justify-content="center" align-items="flex-start">
        <gds-text tag="p">Error loading data</gds-text>
        <gds-button size="small" @click=${() => this.#loadData()}>
          Retry
        </gds-button>
      </gds-card>
    `
  }

  #renderEmptyState() {
    const hasSearch = this.view.searchQuery.length > 0

    return html`
      <gds-card justify-content="space-between" align-items="flex-start">
        <gds-flex flex-direction="column">
          <gds-text tag="p" font="heading-s">
            ${hasSearch ? 'No results found' : 'No data available'}
          </gds-text>
          ${hasSearch
            ? html`
                <gds-text tag="p" font="detail-book-s">
                  No results for "${this.view.searchQuery}"
                </gds-text>
              `
            : ''}
        </gds-flex>

        ${hasSearch
          ? html`
              <gds-button size="small" @click=${this.#handleSearchClear}>
                Clear search
              </gds-button>
            `
          : ''}
      </gds-card>
    `
  }

  #renderFooter() {
    if (this.plain || this.total < 1) return null
    return html`
      <div class="footer">
        <div class="lead">
          <slot name="footer-lead">
            ${when(
              this.selectable && this.#hasSelection,
              () => html`
                <div class="selection-info">
                  <span>
                    ${this.selected.size} of ${this.rowsState.length} selected
                  </span>
                  <gds-button
                    size="xs"
                    rank="secondary"
                    @click=${this.clearSelection}
                  >
                    <gds-icon-cross-small></gds-icon-cross-small>
                  </gds-button>
                </div>
              `,
              () => html`
                <span>
                  Showing ${(this.view.page - 1) * this.view.rows + 1} to
                  ${Math.min(this.view.page * this.view.rows, this.total)} of
                  ${this.total} entries
                </span>
              `,
            )}
          </slot>
        </div>
        <div class="trail">
          <slot name="footer-trail"></slot>
          <gds-pagination
            .page=${this.view.page}
            .rows=${this.view.rows}
            .options=${this.options}
            .total=${this.total}
            @gds-page-change=${this.#handlePageChange}
            @gds-rows-change=${this.#handlePageSizeChange}
            width="100%"
          ></gds-pagination>
        </div>
      </div>
    `
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
        ${this.#renderHeaderControls()}
        ${when(
          this.error,
          () => this.#renderErrorState(),
          () =>
            when(
              this.rowsState.length === 0 && !this.loading,
              () => this.#renderEmptyState(),
              () => this.#renderTable(),
            ),
        )}
        ${this.#renderFooter()}
      </div>
    `
  }

  /**
   * Handles search input changes
   * Resets to first page and triggers data reload with search query
   */
  async #handleSearch(e: Event) {
    const input = e.target as HTMLInputElement
    this.view = {
      ...this.view,
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
    this.view = {
      ...this.view,
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
    this.view = {
      ...this.view,
      sortColumn: columnKey,
      sortDirection:
        this.view.sortColumn === columnKey && this.view.sortDirection === 'asc'
          ? 'desc'
          : 'asc',
      page: 1,
    }
    await this.#loadData()
  }

  /**
   * Handles pagination page change
   */
  async #handlePageChange(e: CustomEvent) {
    this.view = {
      ...this.view,
      page: e.detail.page,
    }
    await this.#loadData()
  }

  /**
   * Handles pagination page size change
   * Resets to first page when page size changes
   */
  async #handlePageSizeChange(e: CustomEvent) {
    this.view = {
      ...this.view,
      rows: e.detail.rows,
      page: 1,
    }
    await this.#loadData()
  }

  /**
   * Handles column visibility dropdown changes
   * Updates visible columns set and triggers re-render
   */
  #handleColumnVisibility(e: CustomEvent) {
    const selectedColumns = e.detail.value as string[]
    this.view = {
      ...this.view,
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
      this.selected.add(index)
    } else {
      this.selected.delete(index)
    }

    this.#emitSelectionChange()
    this.requestUpdate()
  }

  /**
   * Internal method to select all rows
   */
  #selectAllInternal(): void {
    this.selected = new Set(this.rowsState.map((_, i) => i))
    this.requestUpdate()
  }

  /**
   * Internal method to clear all selections
   */
  #clearSelectionInternal(): void {
    this.selected.clear()
    this.requestUpdate()
  }

  /**
   * Emits selection change event with current selection details
   */
  #emitSelectionChange(): void {
    this.dispatchEvent(
      new CustomEvent('gds-table-selection', {
        detail: {
          selectedIndices: Array.from(this.selected),
          selectedData: Array.from(this.selected).map((i) => this.rowsState[i]),
          count: this.selected.size,
        },
        bubbles: true,
      }),
    )
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
      (i) => i >= 0 && i < this.rowsState.length,
    )
    this.selected = new Set(validIndices)
    this.#emitSelectionChange()
    this.requestUpdate()
  }

  /**
   * Get selected row data
   */
  getSelection(): { indices: number[]; data: T[] } {
    const indices = Array.from(this.selected)
    return {
      indices,
      data: indices.map((i) => this.rowsState[i]),
    }
  }
}
