import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsButton } from '../button/button.component'
import {
  GdsContextMenu,
  GdsMenuItem,
} from '../context-menu/context-menu.component'
import { GdsDropdown } from '../dropdown/dropdown.component'
import { IconCrossSmall } from '../icon/icons/cross-small.component'
import { IconMagnifyingGlass } from '../icon/icons/magnifying-glass.component'
import { IconSortDown } from '../icon/icons/sort-down.component'
import { IconSortUp } from '../icon/icons/sort-up.component'
import { IconSort } from '../icon/icons/sort.component'
import { GdsInput } from '../input/input.component'
import { GdsPagination } from '../pagination/pagination.component'
import { GdsTableRowSelector } from './row-selector/row-selector.component'
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
    GdsTableRowSelector,
    GdsButton,
    GdsInput,
    GdsDropdown,
    GdsPagination,
    GdsContextMenu,
    GdsMenuItem,
    IconMagnifyingGlass,
    IconSort,
    IconSortUp,
    IconSortDown,
    IconCrossSmall,
  ],
})
export class GdsTable<T extends TableRow = TableRow> extends GdsElement {
  static styles = [tokens, TableStyles]

  private cache: TableCache<T> = {}
  private cacheDuration = 5 * 60 * 1000

  @property({ type: Array })
  columns: TableColumn[] = []

  @property({ type: Function })
  dataProvider!: (request: TableRequest) => Promise<TableResponse<T>>

  @property({ reflect: true })
  density: TableDensity = 'comfortable'

  @property({ type: Boolean, reflect: true })
  selectable = false

  @property({ type: Function })
  actions?: (row: T, index: number) => any

  @state()
  private tableState: TableState = {
    page: 1,
    pageSize: 10,
    searchQuery: '',
    visibleColumns: new Set(),
  }

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
    await this.loadData()
  }

  private get hasSelection(): boolean {
    return this.selectedRows.size > 0
  }

  private get isAllSelected(): boolean {
    return this.data.length > 0 && this.selectedRows.size === this.data.length
  }

  private get isPartialSelection(): boolean {
    return this.hasSelection && !this.isAllSelected
  }

  private getCacheKey(): string {
    return JSON.stringify({
      page: this.tableState.page,
      pageSize: this.tableState.pageSize,
      sortColumn: this.tableState.sortColumn,
      sortDirection: this.tableState.sortDirection,
      searchQuery: this.tableState.searchQuery,
    })
  }

  private isCacheValid(entry: CacheEntry<T>): boolean {
    return Date.now() - entry.timestamp < this.cacheDuration
  }

  private async loadData() {
    if (!this.dataProvider) return

    const cacheKey = this.getCacheKey()
    const cachedData = this.cache[cacheKey]

    if (cachedData && this.isCacheValid(cachedData)) {
      this.data = cachedData.data
      this.totalRows = cachedData.total
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

      this.cache[cacheKey] = {
        data: response.data,
        total: response.total,
        timestamp: Date.now(),
      }

      this.data = response.data
      this.totalRows = response.total
      this.selectedRows.clear()

      this.dispatchEvent(
        new CustomEvent('data-loaded', {
          detail: response,
          bubbles: true,
        }),
      )
    } catch (error) {
      this.error = error as Error
      this.dispatchEvent(
        new CustomEvent('data-error', {
          detail: error,
          bubbles: true,
        }),
      )
    } finally {
      this.loading = false
    }
  }

  // ⚠️ Experimental
  @state()
  private cellSlots: Record<string, { lead?: any; trail?: any; value?: any }> =
    {}

  private renderCellContent(row: T, rowIndex: number, column: TableColumn) {
    const cellKey = `${column.key}-${rowIndex}`
    // const cellValue = row[column.key]

    // Check for cell-specific slots first
    const cellSpecificSlots = this.cellSlots[cellKey]

    // Get column-level slots
    const columnLevelLead = column.slots?.lead?.(row, rowIndex)
    const columnLevelTrail = column.slots?.trail?.(row, rowIndex)
    const columnLevelValue = column.slots?.value?.(row, rowIndex)

    // Use cell-specific if available, otherwise fall back to column-level
    const leadContent = cellSpecificSlots?.lead || columnLevelLead
    const trailContent = cellSpecificSlots?.trail || columnLevelTrail
    const valueContent =
      cellSpecificSlots?.value !== undefined
        ? cellSpecificSlots.value
        : columnLevelValue

    const cellValue = valueContent || row[column.key]

    return html`
      <div class="cell-content">
        ${leadContent
          ? html`<span class="cell-lead">${leadContent}</span>`
          : ''}
        <span class="cell-value">${cellValue}</span>
        ${trailContent
          ? html`<span class="cell-trail">${trailContent}</span>`
          : ''}
      </div>
    `
  }

  render() {
    return html`
      <div class="gds-table ${this.density}">
        <div class="header">
          <div class="lead">
            <gds-input
              type="text"
              size="small"
              plain
              clearable
              placeholder="Search..."
              .value=${this.tableState.searchQuery}
              @input=${this.handleSearch}
              @gds-input-cleared=${this.handleSearchClear}
              width="240px"
            >
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
            </gds-input>
          </div>
          <div class="trail">
            <gds-dropdown
              multiple
              plain
              size="small"
              searchable
              .value=${Array.from(this.tableState.visibleColumns)}
              @change=${this.handleColumnVisibility}
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

        ${when(
          this.error,
          () => html`
            <div class="error">
              <p>Error loading data: ${this.error!.message}</p>
              <gds-button @click=${() => this.loadData()}>Retry</gds-button>
            </div>
          `,
          () => html`
            <table class=${classMap({ 'responsive-table': true })}>
              <thead>
                <tr>
                  ${when(
                    this.selectable,
                    () => html`
                      <th class="checkbox-cell">
                        <gds-table-row-selector
                          .checked=${this.isAllSelected}
                          .indeterminate=${this.isPartialSelection}
                          aria-label="Select all rows"
                          @selector-change=${this.handleSelectAll}
                        ></gds-table-row-selector>
                      </th>
                    `,
                  )}
                  ${this.columns
                    .filter((column) =>
                      this.tableState.visibleColumns.has(column.key),
                    )
                    .map(
                      (column) => html`
                        <th
                          class=${classMap({
                            // 'text-right': column.align === 'right',
                            // 'text-center': column.align === 'center',
                            sortable: !!column.sortable,
                            sorted: this.tableState.sortColumn === column.key,
                            'sort-asc':
                              this.tableState.sortColumn === column.key &&
                              this.tableState.sortDirection === 'asc',
                            'sort-desc':
                              this.tableState.sortColumn === column.key &&
                              this.tableState.sortDirection === 'desc',
                          })}
                          @click=${column.sortable
                            ? () => this.handleSort(column.key)
                            : null}
                        >
                          <div class="column-header">
                            <span class="column-label">${column.label}</span>
                            ${when(
                              column.sortable,
                              () => html`
                                <span class="sort-icon">
                                  ${when(
                                    this.tableState.sortColumn === column.key &&
                                      this.tableState.sortDirection === 'asc',
                                    () =>
                                      html`<gds-icon-sort-up
                                        size="m"
                                      ></gds-icon-sort-up>`,
                                    () =>
                                      when(
                                        this.tableState.sortColumn ===
                                          column.key &&
                                          this.tableState.sortDirection ===
                                            'desc',
                                        () =>
                                          html`<gds-icon-sort-down
                                            size="m"
                                          ></gds-icon-sort-down>`,
                                        () =>
                                          html`<gds-icon-sort-down
                                            size="m"
                                          ></gds-icon-sort-down>`,
                                      ),
                                  )}
                                </span>
                              `,
                            )}
                          </div>
                        </th>
                      `,
                    )}
                  ${when(
                    this.actions,
                    () => html`<th class="actions-header"></th>`,
                  )}
                </tr>
              </thead>
              <tbody>
                ${this.data.map(
                  (row, index) => html`
                    <tr
                      class=${classMap({
                        selected: this.selectedRows.has(index),
                        loading: this.loading,
                        // 'fade-in': !this.loading,
                      })}
                    >
                      ${when(
                        this.selectable,
                        () => html`
                          <td class="checkbox-cell">
                            <gds-table-row-selector
                              .checked=${this.selectedRows.has(index)}
                              aria-label="Select row ${index + 1}"
                              @selector-change=${(e: CustomEvent) =>
                                this.handleRowSelect(index, e)}
                            ></gds-table-row-selector>
                          </td>
                        `,
                      )}
                      ${this.columns
                        .filter((column) =>
                          this.tableState.visibleColumns.has(column.key),
                        )
                        .map(
                          (column) => html`
                            <td
                              data-label=${column.label}
                              class=${classMap({
                                'text-right': column.align === 'right',
                              })}
                            >
                              ${this.renderCellContent(row, index, column)}
                            </td>
                          `,
                        )}
                      ${when(
                        this.actions,
                        () => html`
                          <td class="actions-cell">
                            ${this.actions!(row, index)}
                          </td>
                        `,
                      )}
                    </tr>
                  `,
                )}
              </tbody>
            </table>
          `,
        )}

        <div class="footer">
          <div class="lead">
            ${when(
              this.selectable && this.hasSelection,
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
          </div>
          <div class="trail">
            <gds-pagination
              .page=${this.tableState.page}
              .pageSize=${this.tableState.pageSize}
              .total=${this.totalRows}
              .pageSizes=${[5, 10, 20, 50, 100]}
              @page-change=${this.handlePageChange}
              @page-size-change=${this.handlePageSizeChange}
            ></gds-pagination>
          </div>
        </div>
      </div>
    `
  }

  // Event handlers
  private async handleSearch(e: Event) {
    const input = e.target as HTMLInputElement
    this.tableState = {
      ...this.tableState,
      searchQuery: input.value,
      page: 1,
    }
    await this.loadData()
  }

  private async handleSearchClear() {
    this.tableState = {
      ...this.tableState,
      searchQuery: '',
      page: 1,
    }
    await this.loadData()
  }

  private async handleSort(columnKey: string) {
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
    await this.loadData()
  }

  private async handlePageChange(e: CustomEvent) {
    this.tableState = {
      ...this.tableState,
      page: e.detail.page,
    }
    await this.loadData()
  }

  private async handlePageSizeChange(e: CustomEvent) {
    this.tableState = {
      ...this.tableState,
      pageSize: e.detail.pageSize,
      page: 1,
    }
    await this.loadData()
  }

  private handleColumnVisibility(e: CustomEvent) {
    const selectedColumns = e.detail.value as string[]
    this.tableState = {
      ...this.tableState,
      visibleColumns: new Set(selectedColumns),
    }
    this.requestUpdate()
  }

  private handleSelectAll(e: CustomEvent) {
    if (this.isAllSelected) {
      this.clearSelectionInternal()
    } else {
      this.selectAllInternal()
    }
    this.emitSelectionChange()
  }

  private handleRowSelect(index: number, e: CustomEvent) {
    const isChecked = e.detail.checked

    if (isChecked) {
      this.selectedRows.add(index)
    } else {
      this.selectedRows.delete(index)
    }

    this.emitSelectionChange()
    this.requestUpdate()
  }

  private selectAllInternal(): void {
    this.selectedRows = new Set(this.data.map((_, i) => i))
    this.requestUpdate()
  }

  private clearSelectionInternal(): void {
    this.selectedRows.clear()
    this.requestUpdate()
  }

  private emitSelectionChange(): void {
    this.dispatchEvent(
      new CustomEvent('selection-change', {
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
    this.clearSelectionInternal()
    this.emitSelectionChange()
  }

  /**
   * Select all rows
   */
  selectAll(): void {
    this.selectAllInternal()
    this.emitSelectionChange()
  }

  /**
   * Select specific rows by indices
   */
  setSelection(indices: number[]): void {
    const validIndices = indices.filter((i) => i >= 0 && i < this.data.length)
    this.selectedRows = new Set(validIndices)
    this.emitSelectionChange()
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

  /**
   * ⚠️ Experimental
   */

  /**
   * Set cell-specific slots
   */
  setCellSlot(
    columnKey: string,
    rowIndex: number,
    lead?: any,
    trail?: any,
    value?: any,
  ) {
    const cellKey = `${columnKey}-${rowIndex}`
    this.cellSlots = {
      ...this.cellSlots,
      [cellKey]: { lead, trail, value },
    }
    this.requestUpdate()
  }

  /**
   * Clear cell-specific slots
   */
  clearCellSlots(columnKey?: string, rowIndex?: number) {
    if (columnKey !== undefined && rowIndex !== undefined) {
      const cellKey = `${columnKey}-${rowIndex}`
      delete this.cellSlots[cellKey]
    } else {
      this.cellSlots = {}
    }
    this.requestUpdate()
  }
}
