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
import { IconChevronDoubleLeft } from '../icon/icons/chevron-double-left.component'
import { IconChevronDoubleRight } from '../icon/icons/chevron-double-right.component'
import { IconChevronLeft } from '../icon/icons/chevron-left.component'
import { IconChevronRight } from '../icon/icons/chevron-right.component'
import { IconMagnifyingGlass } from '../icon/icons/magnifying-glass.component'
import { IconSort } from '../icon/icons/sort.component'
import { GdsInput } from '../input/input.component'
import { GdsPagination } from '../pagination/pagination.component'
import TableStyles from './table.styles'

interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  align?: 'left' | 'right' | 'center'
  visible?: boolean
}

interface TableColumn {
  key: string
  label: string
  sortable?: boolean
}

type TableDensity = 'comfortable' | 'compact' | 'spacious'

/**
 * @element gds-table
 * @status beta
 */
@gdsCustomElement('gds-table', {
  dependsOn: [
    GdsPagination,
    GdsButton,
    GdsInput,
    GdsDropdown,
    IconChevronLeft,
    IconChevronDoubleLeft,
    IconChevronRight,
    IconChevronDoubleRight,
    IconMagnifyingGlass,
    IconSort,
  ],
})
export class GdsTable extends GdsElement {
  static styles = [tokens, TableStyles]

  @property({ type: Array })
  columns: TableColumn[] = []

  @property({ type: Array })
  data: any[] = []

  @property({ reflect: false })
  density: TableDensity = 'comfortable'

  @state()
  private page = 1

  @state()
  private pageSize = 10

  @state()
  private selectedRows = new Set<number>()

  @state()
  private sortColumn?: string

  @state()
  private sortDirection: 'asc' | 'desc' = 'asc'

  @state()
  private visibleColumns: Set<string> = new Set()

  @state()
  private searchQuery = ''

  private getPageCount() {
    return Math.ceil(this.filteredData.length / this.pageSize)
  }

  private get filteredData() {
    const query = this.searchQuery.toLowerCase()
    let filtered = this.data

    if (query) {
      filtered = this.data.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(query),
        ),
      )
    }

    if (this.sortColumn) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = String(a[this.sortColumn!])
        const bVal = String(b[this.sortColumn!])
        return this.sortDirection === 'asc'
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal)
      })
    }

    return filtered
  }

  private get paginatedData() {
    const start = (this.page - 1) * this.pageSize
    return this.filteredData.slice(start, start + this.pageSize)
  }

  connectedCallback() {
    super.connectedCallback()
    this.visibleColumns = new Set(this.columns.map((col) => col.key))
  }

  render() {
    const pageCount = this.getPageCount()
    const visiblePages = this.getVisiblePages(pageCount)
    const selectedCount = this.selectedRows.size
    const totalRows = this.filteredData.length
    const start = (this.page - 1) * this.pageSize + 1
    const end = Math.min(this.page * this.pageSize, totalRows)

    return html`
      <div class="gds-table ${this.density}">
        <div class="header">
          <div class="lead">
            <slot name="header-lead">
              <gds-input
                type="text"
                size="small"
                plain
                clearable
                placeholder="Search..."
                .value=${this.searchQuery}
                @input=${this.handleSearch}
                @gds-input-cleared=${this.handleSearchClear}
              >
                <gds-icon-magnifying-glass
                  slot="lead"
                ></gds-icon-magnifying-glass>
              </gds-input>
            </slot>
          </div>
          <div class="trail">
            <slot name="header-trail">
              <gds-dropdown
                multiple
                plain
                .value=${Array.from(this.visibleColumns)}
                size="small"
                @change=${this.handleColumnVisibility}
              >
                <gds-option value="" isplaceholder=""
                  >This is a placeholder</gds-option
                >
                ${this.columns.map(
                  (column) => html`
                    <gds-option
                      value=${column.key}
                      ?selected=${this.visibleColumns.has(column.key)}
                    >
                      ${column.label}
                    </gds-option>
                  `,
                )}
              </gds-dropdown>
            </slot>
          </div>
        </div>

        <table
          class=${classMap({
            'responsive-table': true,
            [this.density]: true,
          })}
        >
          <thead>
            <tr>
              <th class="checkbox-cell">
                <input
                  type="checkbox"
                  @change=${this.handleSelectAll}
                  .checked=${this.selectedRows.size ===
                  this.paginatedData.length}
                />
              </th>

              ${this.columns
                .filter((column) => this.visibleColumns.has(column.key))
                .map(
                  (column) => html`
                    <th
                      class=${classMap({
                        'text-right': column.align === 'right',
                        'text-center': column.align === 'center',
                      })}
                    >
                      <div class="column">
                        ${column.label}
                        ${column.sortable
                          ? html`
                              <gds-button
                                size="small"
                                rank="tertiary"
                                ?disabled=${!column.sortable}
                                @click=${() => this.handleSort(column.key)}
                              >
                                <gds-icon-sort size="s"></gds-icon-sort>
                              </gds-button>
                            `
                          : ''}
                      </div>
                    </th>
                  `,
                )}
            </tr>
          </thead>
          <tbody>
            ${this.paginatedData.map(
              (row, index) => html`
                <tr>
                  <td class="checkbox-cell">
                    <input
                      type="checkbox"
                      .checked=${this.selectedRows.has(index)}
                      @change=${(e: Event) => this.handleRowSelect(index, e)}
                    />
                  </td>
                  ${this.columns
                    .filter((column) => this.visibleColumns.has(column.key))
                    .map(
                      (column) => html`
                        <td
                          data-label=${column.label}
                          class=${classMap({
                            'text-right': column.align === 'right',
                            'text-center': column.align === 'center',
                            selected: this.selectedRows.has(index),
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
        <div class="footer">
          <div class="lead">
            <slot name="footer-lead">
              ${when(
                selectedCount > 0,
                () =>
                  html`<span class="selected-count"
                    >${selectedCount} rows selected</span
                  >`,
                () =>
                  html`<span
                    >Showing ${start} to ${end} of ${totalRows} entries</span
                  >`,
              )}
            </slot>
          </div>
          <div class="trail">
            <slot name="footer-trail">
              <gds-pagination
                .page=${this.page}
                .pageSize=${this.pageSize}
                .total=${this.filteredData.length}
                @page-change=${(e: CustomEvent) => {
                  this.page = e.detail.page
                  this.requestUpdate()
                }}
                @page-size-change=${(e: CustomEvent) => {
                  this.pageSize = e.detail.pageSize
                  this.page = 1
                  this.requestUpdate()
                }}
              ></gds-pagination>
            </slot>
          </div>
        </div>
      </div>
    `
  }

  private getVisiblePages(pageCount: number) {
    if (pageCount <= 7) {
      return Array.from({ length: pageCount }, (_, i) => i + 1)
    }

    const lastPage = pageCount
    let middlePages: number[] = []

    if (this.page <= 4) {
      middlePages = [2, 3, 4, 5]
      return [1, ...middlePages, '...', lastPage]
    } else if (this.page >= pageCount - 3) {
      middlePages = [pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1]
      return [1, '...', ...middlePages, lastPage]
    } else {
      middlePages = [this.page - 1, this.page, this.page + 1]
      return [1, '...', ...middlePages, '...', lastPage]
    }
  }

  private getSortIcon(columnKey: string) {
    if (this.sortColumn !== columnKey) return '↕'
    return this.sortDirection === 'asc' ? '↑' : '↓'
  }

  private handleSearch(e: Event) {
    const input = e.target as HTMLInputElement
    this.searchQuery = input.value
    this.page = 1
    this.requestUpdate()
  }

  private handleSearchClear() {
    this.searchQuery = ''
    this.page = 1
    this.requestUpdate()
  }

  private handleSort(columnKey: string) {
    const column = this.columns.find((col) => col.key === columnKey)
    if (!column?.sortable) return

    if (this.sortColumn === columnKey) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
    } else {
      this.sortColumn = columnKey
      this.sortDirection = 'asc'
    }

    this.page = 1
    this.requestUpdate()
  }

  private handleColumnVisibility(e: CustomEvent) {
    const selectedColumns = e.detail.value as string[]
    this.visibleColumns = new Set(selectedColumns)
    this.requestUpdate()
  }

  private handlePageSizeChange(e: CustomEvent<{ value: string }>) {
    this.pageSize = Number(e.detail.value)
    this.page = 1
    this.requestUpdate()
  }

  private handleSelectAll(e: Event) {
    const checked = (e.target as HTMLInputElement).checked
    this.selectedRows = checked
      ? new Set(this.paginatedData.map((_, i) => i))
      : new Set()

    this.dispatchEvent(
      new CustomEvent('selection-change', {
        detail: { selectedRows: Array.from(this.selectedRows) },
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

    this.requestUpdate()
    this.dispatchEvent(
      new CustomEvent('selection-change', {
        detail: { selectedRows: Array.from(this.selectedRows) },
      }),
    )
  }
}
