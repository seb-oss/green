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
import { GdsDropdown } from '../dropdown/dropdown.component'
import { IconMagnifyingGlass } from '../icon/icons/magnifying-glass.component'
import { IconSort } from '../icon/icons/sort.component'
import { GdsInput } from '../input/input.component'
import { GdsPagination } from '../pagination/pagination.component'
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
    GdsButton,
    GdsInput,
    GdsDropdown,
    GdsPagination,
    IconMagnifyingGlass,
    IconSort,
  ],
})
export class GdsTable<T extends TableRow = TableRow> extends GdsElement {
  static styles = [tokens, TableStyles]

  private cache: TableCache<T> = {}
  private cacheDuration = 5 * 60 * 1000

  @state()
  private skeletonRows = 10

  @property({ type: Array })
  columns: TableColumn[] = []

  @property({ type: Function })
  dataProvider!: (request: TableRequest) => Promise<TableResponse<T>>

  @property({ reflect: true })
  density: TableDensity = 'comfortable'

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

  private renderSkeletonRow() {
    return html`
      <tr class="skeleton-row">
        <td class="checkbox-cell">
          <div class="skeleton-checkbox"></div>
        </td>
        ${this.columns
          .filter((column) => this.tableState.visibleColumns.has(column.key))
          .map(() => html` <td><div class="skeleton-cell"></div></td> `)}
      </tr>
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
              label="Columns"
              @change=${this.handleColumnVisibility}
            >
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
                  <th>
                    <input
                      type="checkbox"
                      .checked=${this.selectedRows.size === this.data.length}
                      @change=${this.handleSelectAll}
                    />
                  </th>
                  ${this.columns
                    .filter((column) =>
                      this.tableState.visibleColumns.has(column.key),
                    )
                    .map(
                      (column) => html`
                        <th
                          class=${classMap({
                            'text-right': column.align === 'right',
                            'text-center': column.align === 'center',
                          })}
                        >
                          <div class="column-header">
                            ${column.label}
                            ${when(
                              column.sortable,
                              () => html`
                                <gds-button
                                  size="small"
                                  rank="tertiary"
                                  @click=${() => this.handleSort(column.key)}
                                >
                                  <gds-icon-sort
                                    class=${classMap({
                                      active:
                                        this.tableState.sortColumn ===
                                        column.key,
                                      asc:
                                        this.tableState.sortDirection === 'asc',
                                    })}
                                  ></gds-icon-sort>
                                </gds-button>
                              `,
                            )}
                          </div>
                        </th>
                      `,
                    )}
                </tr>
              </thead>
              <tbody>
                ${this.loading
                  ? Array(this.skeletonRows)
                      .fill(0)
                      .map(() => this.renderSkeletonRow())
                  : this.data.map(
                      (row, index) => html`
                        <tr
                          class=${classMap({
                            selected: this.selectedRows.has(index),
                          })}
                        >
                          <td>
                            <input
                              type="checkbox"
                              .checked=${this.selectedRows.has(index)}
                              @change=${(e: Event) =>
                                this.handleRowSelect(index, e)}
                            />
                          </td>
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
                                    'text-center': column.align === 'center',
                                  })}
                                >
                                  ${row[column.key]}
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
              this.selectedRows.size > 0,
              () => html`<span>${this.selectedRows.size} rows selected</span>`,
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
              @page-change=${this.handlePageChange}
              @page-size-change=${this.handlePageSizeChange}
            ></gds-pagination>
          </div>
        </div>
      </div>
    `
  }

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

  private handleSelectAll(e: Event) {
    const checked = (e.target as HTMLInputElement).checked
    this.selectedRows = checked
      ? new Set(this.data.map((_, i) => i))
      : new Set()

    this.dispatchEvent(
      new CustomEvent('selection-change', {
        detail: { selectedRows: Array.from(this.selectedRows) },
        bubbles: true,
      }),
    )
  }

  private handleRowSelect(index: number, e: Event) {
    const checked = (e.target as HTMLInputElement).checked

    if (checked) {
      this.selectedRows.add(index)
    } else {
      this.selectedRows.delete(index)
    }

    this.dispatchEvent(
      new CustomEvent('selection-change', {
        detail: { selectedRows: Array.from(this.selectedRows) },
        bubbles: true,
      }),
    )
  }
}
