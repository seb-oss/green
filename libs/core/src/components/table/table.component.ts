import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import {
  GdsButton,
  GdsCard,
  GdsDropdown,
  GdsInput,
  GdsPagination,
  GdsText,
} from '../../pure'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  IconCopy,
  IconCrossSmall,
  IconMagnifyingGlass,
  IconSort,
  IconSortDown,
  IconSortUp,
} from '../icon/icons/pure'
import { Cell } from './table.cell'
import { GdsTableCheckbox } from './table.checkbox'
import TableStyles from './table.styles'
import {
  CacheEntry,
  TableCache,
  TableColumn,
  TableDensity,
  TableRequest,
  TableResponse,
  TableRow,
  TableState,
} from './table.types'

/**
 * @element gds-table
 * @status beta
 */
@gdsCustomElement('gds-table', {
  dependsOn: [
    GdsTableCheckbox,
    GdsButton,
    GdsInput,
    GdsCard,
    GdsText,
    GdsDropdown,
    GdsPagination,
    IconMagnifyingGlass,
    IconCopy,
    IconSort,
    IconSortUp,
    IconSortDown,
    IconCrossSmall,
  ],
})
export class GdsTable<T extends TableRow = TableRow> extends GdsElement {
  static styles = [tokens, TableStyles]

  #cache: TableCache<T> = {}
  #cacheDuration = 5 * 60 * 1000

  @property({ type: String })
  subtitle?: string

  @property({ type: Array })
  columns: TableColumn[] = []

  @property()
  dataProvider!: (request: TableRequest) => Promise<TableResponse<T>>

  @property({ reflect: false })
  density: TableDensity = 'comfortable'

  @property({ type: Boolean, reflect: false })
  selectable = false

  @property({ type: Boolean, reflect: false })
  responsive = false

  @property({ type: Boolean })
  plain = false

  @property()
  actions?: (row: T, index: number) => any

  @state()
  private tableState: TableState = {
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

  @state()
  private slots: Record<string, { lead?: any; trail?: any; value?: any }> = {}

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

  #isCacheValid(entry: CacheEntry<T>): boolean {
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

  /**
   * ⚠️ Experimental
   * Renders a cell based on its type
   */

  #renderCellContent(row: T, index: number, column: TableColumn) {
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
  }

  /**
   * Renders the sorting icon ONLY when column is sorted
   * Returns the appropriate icon based on sort direction
   */
  #renderSortIcon(column: TableColumn) {
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
        ${when(
          this.title || this.subtitle,
          () => html`
            <div class="header-meta">
              ${when(
                this.title,
                () => html`
                  <gds-text tag="h2" font="heading-m">${this.title}</gds-text>
                `,
              )}
              ${when(
                this.subtitle,
                () => html`
                  <gds-text tag="p" font="detail-book-s"
                    >${this.subtitle}</gds-text
                  >
                `,
              )}
            </div>
          `,
        )}
        <div class="header-slots">
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
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
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
      </div>
    `
  }

  /**
   * Renders a single column header cell
   * Handles sortable columns, sort state visualization, and click handlers
   */
  #renderColumnHeader(column: TableColumn) {
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
                <div class="column-label">Actions</div>
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
  #renderTableCell(row: T, rowIndex: number, column: TableColumn) {
    return html`
      <td
        data-label=${column.label}
        class=${classMap({
          'text-right': column.align === 'right',
          'space-between': column.justify === true,
        })}
      >
        ${this.#renderCellContent(row, rowIndex, column)}
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
          .map((column) => this.#renderTableCell(row, index, column))}
        ${when(
          this.actions,
          () => html`
            <td class="actions-cell" data-label="Actions">
              <div class="cell-content">${this.actions!(row, index)}</div>
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
      <gds-card
        variant="negative"
        justify-content="center"
        align-items="flex-start"
      >
        <gds-text tag="p">Error loading data</gds-text>
        <gds-button @click=${() => this.#loadData()} variant="negative">
          Retry
        </gds-button>
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
            .pageSizes=${[5, 10, 20, 50, 100]}
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
      <div class="gds-table ${this.density}">
        ${this.#renderHeaderControls()}
        ${when(
          this.error,
          () => this.#renderErrorState(),
          () => this.#renderTable(),
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
