import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import * as GDS from './table.imports'
import * as Types from './table.types'

/**
 * @element gds-table
 * @status beta
 */
@gdsCustomElement('gds-table', {
  dependsOn: [
    GDS.Checkbox,
    GDS.Button,
    GDS.Divider,
    GDS.Input,
    GDS.Img,
    GDS.ContextMenu,
    GDS.MenuItem,
    GDS.Card,
    GDS.Text,
    GDS.Dropdown,
    GDS.Pagination,
    GDS.MagnifyingGlass,
    GDS.Sort,
    GDS.SortUp,
    GDS.SortDown,
    GDS.CrossSmall,
    GDS.Copy,
    GDS.DotGridOneHorizontal,
  ],
})
export class GdsTable<T extends Types.Row = Types.Row> extends GdsElement {
  static styles = [tokens, GDS.Styles]

  #cache: Types.Cache<T> = {}
  #cacheDuration = 5 * 60 * 1000

  @property({ type: Array })
  pageSizes = [5, 10, 20, 50, 100]

  @property({ type: Array })
  columns: Types.Column[] = []

  @property()
  dataProvider!: (request: Types.Request) => Promise<Types.Response<T>>

  @property({ reflect: false })
  density: Types.Density = 'comfortable'

  @property({ type: Boolean, reflect: false })
  selectable = false

  @property({ type: Boolean, reflect: false })
  responsive = false

  @property({ type: Boolean })
  plain = false

  @property()
  actions?: Types.Actions | ((row: T, index: number) => any)

  @state()
  private tableState: Types.State = {
    page: 1,
    pageSize: 10,
    searchQuery: '',
    visibleColumns: new Set(),
  }

  @state()
  private initialLoad = true

  @state()
  private loading = false

  @state()
  private data: T[] = []

  @state()
  private totalRows = 0

  @state()
  private selectedRows = new Set<number>()

  @state()
  private error: Error | null = null

  async connectedCallback() {
    super.connectedCallback()
    this.tableState.visibleColumns = new Set(this.columns.map((col) => col.key))
    await this.#loadData()
  }

  get #hasSelection(): boolean {
    return this.selectedRows.size > 0
  }

  get #isAllSelected(): boolean {
    return this.data.length > 0 && this.selectedRows.size === this.data.length
  }

  get #isPartialSelection(): boolean {
    return this.#hasSelection && !this.#isAllSelected
  }

  #getCacheKey(): string {
    return JSON.stringify({
      page: this.tableState.page,
      pageSize: this.tableState.pageSize,
      sortColumn: this.tableState.sortColumn,
      sortDirection: this.tableState.sortDirection,
      searchQuery: this.tableState.searchQuery,
    })
  }

  #isCacheValid(entry: Types.CacheEntry<T>): boolean {
    return Date.now() - entry.timestamp < this.#cacheDuration
  }

  async #loadData() {
    if (!this.dataProvider) return

    const cacheKey = this.#getCacheKey()
    const cachedData = this.#cache[cacheKey]

    if (cachedData && this.#isCacheValid(cachedData)) {
      this.data = cachedData.data
      this.totalRows = cachedData.total
      this.initialLoad = false
      return
    }

    this.loading = true
    this.error = null

    try {
      const response = await this.dataProvider({
        page: this.tableState.page,
        pageSize: this.tableState.pageSize,
        sortColumn: this.tableState.sortColumn,
        sortDirection: this.tableState.sortDirection,
        searchQuery: this.tableState.searchQuery,
      })

      this.#cache[cacheKey] = {
        data: response.data,
        total: response.total,
        timestamp: Date.now(),
      }

      this.data = response.data
      this.totalRows = response.total
      this.selectedRows.clear()
      this.initialLoad = false

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
  /* 
  #renderCellContent(row: T, column: Types.Column) {
    const { cell } = column

    const lead = Cell(cell?.lead, row)
    const value = cell?.value ? Cell(cell.value, row) : row[column.key]
    const trail = Cell(cell?.trail, row)

    return html`
      <div class="cell-content">
        ${lead && html`<span class="cell-lead">${lead}</span>`}
        <span class="cell-value">${value}</span>
        ${trail && html`<span class="cell-trail">${trail}</span>`}
      </div>
    `
  } */

  #renderCell(config: Types.Cell | undefined, row: T): any {
    if (!config) return null

    // const resolve = <T>(
    //   value: T | ((row: any) => T) | undefined,
    // ): T | undefined =>
    //   typeof value === 'function' ? (value as any)(row) : value
    const resolve = <V>(
      value: V | ((r: any) => V) | undefined,
    ): V | undefined =>
      typeof value === 'function' ? (value as any)(row) : value

    switch (config.type) {
      case 'badge': {
        const variant = (resolve(config.variant) as any) || 'information'
        const size = (resolve(config.size) as any) || 'small'
        return html`
          <gds-badge size="${size}" variant="${variant}">
            ${resolve(config.value)}
          </gds-badge>
        `
      }

      case 'avatar': {
        const src = resolve(config.src)
        if (!src) return null
        const size = config.size || '24px'
        return html`
          <gds-img
            src="${src}"
            alt="${resolve(config.alt) || ''}"
            width="${size}"
            height="${size}"
            border-radius="max"
            object-fit="cover"
          ></gds-img>
        `
      }

      case 'copy-button': {
        const valueToCopy = String(resolve(config.value) || '')
        const size = resolve(config.size) || 'small'
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
      }

      case 'formatted-number': {
        const value = resolve(config.value)
        const formatter =
          GDS.FormatNumber[config.format || 'decimalsAndThousands']
        return formatter(value, config.locale, config.currency)
      }

      case 'formatted-account': {
        const value = resolve(config.value)
        const formatter = GDS.FormatAccount[config.format || 'seb-account']
        return formatter(value)
      }

      case 'formatted-date': {
        const value = resolve(config.value)
        const formatter = GDS.FormatDate[config.format || 'dateLong']
        return formatter(value, config.locale)
      }
      case 'action-button': {
        const label = resolve(config.label)
        const size = config.size || 'small'
        const rank = config.rank || 'secondary'
        const variant = config.variant || 'neutral'

        return html`
          <gds-button
            size="${size}"
            rank="${rank}"
            variant="${variant}"
            @click="${(e: Event) => {
              e.stopPropagation()
              config.onClick(row)
            }}"
          >
            ${label}
          </gds-button>
        `
      }

      case 'action-buttons': {
        const buttons = config.buttons

        return html`
          <div style="display: flex; gap: var(--gds-sys-space-xs);">
            ${buttons.map((btn) => {
              const label = resolve(btn.label)
              const size = btn.size || 'small'
              const rank = btn.rank || 'secondary'
              const variant = btn.variant || 'neutral'

              return html`
                <gds-button
                  size="${size}"
                  rank="${rank}"
                  variant="${variant}"
                  @click="${(e: Event) => {
                    e.stopPropagation()
                    btn.onClick(row)
                  }}"
                >
                  ${label}
                </gds-button>
              `
            })}
          </div>
        `
      }

      case 'action-link': {
        const href = resolve(config.href)
        const label = resolve(config.label)
        const target = config.target || '_self'

        return html`
          <gds-link .href="${href}" target="${target}"> ${label} </gds-link>
        `
      }

      case 'action-menu': {
        const items = config.items

        return html`
          <gds-context-menu>
            <gds-button slot="trigger" size="small" rank="tertiary">
              <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
            </gds-button>
            ${items.map((item) => {
              const label = resolve(item.label)

              return html`
                ${item.divider ? html`<gds-divider></gds-divider>` : ''}
                <gds-menu-item @click="${() => item.onClick(row)}">
                  ${label}
                </gds-menu-item>
              `
            })}
          </gds-context-menu>
        `
      }

      default:
        return null
    }
  }

  #renderCellContent(row: T, column: Types.Column) {
    const { cell } = column

    const lead = this.#renderCell(cell?.lead, row)
    const value = cell?.value
      ? this.#renderCell(cell.value, row)
      : row[column.key]
    const trail = this.#renderCell(cell?.trail, row)

    return html`
      <div class="cell-content">
        ${lead && html`<span class="cell-lead">${lead}</span>`}
        <span class="cell-value">${value}</span>
        ${trail && html`<span class="cell-trail">${trail}</span>`}
      </div>
    `
  }

  /**
   * Renders the sorting icon ONLY when column is sorted
   * Returns the appropriate icon based on sort direction
   */
  #renderSortIcon(column: Types.Column) {
    const isSorted = this.tableState.sortColumn === column.key
    const sortDirection = this.tableState.sortDirection

    if (isSorted) {
      return sortDirection === 'asc'
        ? html`<gds-icon-sort-up size="m"></gds-icon-sort-up>`
        : html`<gds-icon-sort-down size="m"></gds-icon-sort-down>`
    }

    return html`<gds-icon-sort-up size="m"></gds-icon-sort-up>`
  }
  /**
   * Renders the table header controls section
   * Includes title, subtitle, search input, and column visibility dropdown
   */
  #renderHeaderControls() {
    if (this.plain) return null

    return html`
      <div class="header">
        <div class="lead">
          <gds-input
            type="text"
            size="small"
            plain
            clearable
            placeholder="Search..."
            .value=${this.tableState.searchQuery}
            @input=${this.#handleSearch}
            @gds-input-cleared=${this.#handleSearchClear}
            width="240px"
          >
            <gds-icon-magnifying-glass slot="lead"></gds-icon-magnifying-glass>
          </gds-input>
          <slot name="header-lead"></slot>
        </div>
        <div class="trail">
          <slot name="header-trail"></slot>
          <gds-dropdown
            multiple
            plain
            size="small"
            searchable
            .value=${Array.from(this.tableState.visibleColumns) as any}
            @change=${this.#handleColumnVisibility}
          >
            <span slot="trigger">Columns</span>
            ${this.columns.map(
              (column) => html`
                <gds-option
                  value=${column.key}
                  ?selected=${this.tableState.visibleColumns.has(column.key)}
                >
                  ${column.label}
                </gds-option>
              `,
            )}
          </gds-dropdown>
        </div>
      </div>
    `
  }

  /**
   * Renders a single column header cell
   * Handles sortable columns, sort state visualization, and click handlers
   */
  #renderColumnHeader(column: Types.Column) {
    const isSorted = this.tableState.sortColumn === column.key
    const sortDirection = this.tableState.sortDirection

    return html`
      <th
        class=${classMap({
          sortable: !!column.sortable,
          sorted: isSorted,
          'sort-asc': isSorted && sortDirection === 'asc',
          'sort-desc': isSorted && sortDirection === 'desc',
          'text-right': column.align === 'right',
          'space-between': column.justify === true,
        })}
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

  /**
   * Renders the complete table header including all column headers
   * Conditionally includes selection checkbox and actions column
   */
  #renderTableHeader() {
    return html`
      <thead>
        <tr>
          ${when(
            this.selectable,
            () => html`
              <th class="checkbox-cell">
                <gds-table-checkbox
                  .checked=${this.#isAllSelected}
                  .indeterminate=${this.#isPartialSelection}
                  aria-label="Select all rows"
                  @selector-change=${this.#handleSelectAll}
                ></gds-table-checkbox>
              </th>
            `,
          )}
          ${this.columns
            .filter((column) => this.tableState.visibleColumns.has(column.key))
            .map((column) => this.#renderColumnHeader(column))}
          ${when(
            this.actions,
            () =>
              html`<th class="column-header actions">
                ${typeof this.actions === 'object' && this.actions.label
                  ? html`<div class="column-label">${this.actions.label}</div>`
                  : html`<div class="column-label">Actions</div>`}
              </th>`,
          )}
        </tr>
      </thead>
    `
  }

  /**
   * Renders a single data cell within a table row
   * Applies alignment and renders cell content with slots
   */
  #renderTableCell(row: T, column: Types.Column) {
    return html`
      <td
        data-label=${column.label}
        class=${classMap({
          'text-right': column.align === 'right',
          'space-between': column.justify === true,
        })}
      >
        ${this.#renderCellContent(row, column)}
      </td>
    `
  }

  /**
   * Renders a single table row with all its cells
   * Handles selection state, loading state, and optional action cells
   */
  #renderTableRow(row: T, index: number) {
    return html`
      <tr
        class=${classMap({
          selected: this.selectedRows.has(index),
          loading: this.loading,
        })}
      >
        ${when(
          this.selectable,
          () => html`
            <td class="checkbox-cell" data-label="Select">
              <div class="cell-content">
                <gds-table-checkbox
                  .checked=${this.selectedRows.has(index)}
                  aria-label="Select row ${index + 1}"
                  @selector-change=${(e: CustomEvent) =>
                    this.#handleRowSelect(index, e)}
                ></gds-table-checkbox>
              </div>
            </td>
          `,
        )}
        ${this.columns
          .filter((column) => this.tableState.visibleColumns.has(column.key))
          .map((column) => this.#renderTableCell(row, column))}
        ${when(
          this.actions,
          () => html`
            <td class="actions-cell" data-label="Actions">
              <div class="cell-content">
                ${typeof this.actions === 'function'
                  ? this.actions(row, index)
                  : this.#renderCell(this.actions!.cell, row)}
              </div>
            </td>
          `,
        )}
      </tr>
    `
  }

  /**
   * Renders skeleton cell content
   */
  #renderSkeletonCell() {
    return html`
      <div class="cell-content">
        <span class="skeleton skeleton-text"></span>
      </div>
    `
  }

  /**
   * Renders a skeleton row for loading state
   */
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
          .filter((column) => this.tableState.visibleColumns.has(column.key))
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

  /**
   * Renders the table body with all data rows
   */
  #renderTableBody() {
    // Show the skeleton only on the initial load
    if (this.loading && this.initialLoad) {
      const skeletonRows = Array.from(
        { length: this.tableState.pageSize },
        (_, i) => this.#renderSkeletonRow(i),
      )
      return html`<tbody>
        ${skeletonRows}
      </tbody>`
    }

    return html`
      <tbody>
        ${this.data.map((row, index) => this.#renderTableRow(row, index))}
      </tbody>
    `
  }

  /**
   * Renders the complete table element with header and body
   */
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

  /**
   * Renders the error state UI when data loading fails
   * Provides a retry button to attempt loading again
   */
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

  /**
   * Renders empty state when no data found
   */
  #renderEmptyState() {
    const hasSearch = this.tableState.searchQuery.length > 0

    return html`
      <gds-card justify-content="space-between" align-items="flex-start">
        <gds-flex flex-direction="column">
          <gds-text tag="p" font="heading-s">
            ${hasSearch ? 'No results found' : 'No data available'}
          </gds-text>
          ${hasSearch
            ? html`
                <gds-text
                  tag="p"
                  font="detail-book-s"
                  color="var(--gds-sys-color-content-neutral-02)"
                >
                  No results for "${this.tableState.searchQuery}"
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

  /**
   * Renders the table footer with pagination and selection info
   * Shows either selection count or row count depending on selection state
   */
  #renderFooter() {
    if (this.plain) return null
    return html`
      <div class="footer">
        <div class="lead">
          <slot name="footer-lead">
            ${when(
              this.selectable && this.#hasSelection,
              () => html`
                <div class="selection-info">
                  <span>
                    ${this.selectedRows.size} of ${this.data.length} selected
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
                  Showing
                  ${(this.tableState.page - 1) * this.tableState.pageSize + 1}
                  to
                  ${Math.min(
                    this.tableState.page * this.tableState.pageSize,
                    this.totalRows,
                  )}
                  of ${this.totalRows} entries
                </span>
              `,
            )}
          </slot>
        </div>
        <div class="trail">
          <slot name="footer-trail"></slot>
          <gds-pagination
            .page=${this.tableState.page}
            .pageSize=${this.tableState.pageSize}
            .total=${this.totalRows}
            .pageSizes=${this.pageSizes}
            @page-change=${this.#handlePageChange}
            @page-size-change=${this.#handlePageSizeChange}
          ></gds-pagination>
        </div>
      </div>
    `
  }

  /**
   * Main render method that orchestrates the complete table UI
   * Conditionally renders error state or table content
   */
  render() {
    return html`
      <div class="table ${this.density}">
        ${this.#renderHeaderControls()}
        ${when(
          this.error,
          () => this.#renderErrorState(),
          () =>
            when(
              this.data.length === 0 && !this.loading,
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
    this.tableState = {
      ...this.tableState,
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
    this.tableState = {
      ...this.tableState,
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
    this.tableState = {
      ...this.tableState,
      sortColumn: columnKey,
      sortDirection:
        this.tableState.sortColumn === columnKey &&
        this.tableState.sortDirection === 'asc'
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
    this.tableState = {
      ...this.tableState,
      page: e.detail.page,
    }
    await this.#loadData()
  }

  /**
   * Handles pagination page size change
   * Resets to first page when page size changes
   */
  async #handlePageSizeChange(e: CustomEvent) {
    this.tableState = {
      ...this.tableState,
      pageSize: e.detail.pageSize,
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
    this.tableState = {
      ...this.tableState,
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
      this.selectedRows.add(index)
    } else {
      this.selectedRows.delete(index)
    }

    this.#emitSelectionChange()
    this.requestUpdate()
  }

  /**
   * Internal method to select all rows
   */
  #selectAllInternal(): void {
    this.selectedRows = new Set(this.data.map((_, i) => i))
    this.requestUpdate()
  }

  /**
   * Internal method to clear all selections
   */
  #clearSelectionInternal(): void {
    this.selectedRows.clear()
    this.requestUpdate()
  }

  /**
   * Emits selection change event with current selection details
   */
  #emitSelectionChange(): void {
    this.dispatchEvent(
      new CustomEvent('gds-table-selection', {
        detail: {
          selectedIndices: Array.from(this.selectedRows),
          selectedData: Array.from(this.selectedRows).map((i) => this.data[i]),
          count: this.selectedRows.size,
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
    const validIndices = indices.filter((i) => i >= 0 && i < this.data.length)
    this.selectedRows = new Set(validIndices)
    this.#emitSelectionChange()
    this.requestUpdate()
  }

  /**
   * Get selected row data
   */
  getSelection(): { indices: number[]; data: T[] } {
    const indices = Array.from(this.selectedRows)
    return {
      indices,
      data: indices.map((i) => this.data[i]),
    }
  }
}
