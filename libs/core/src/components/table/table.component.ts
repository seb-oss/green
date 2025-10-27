import { css } from 'lit'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsButton } from '../button/button.component'
import { IconChevronDoubleLeft } from '../icon/icons/chevron-double-left.component'
import { IconChevronDoubleRight } from '../icon/icons/chevron-double-right.component'
import { IconChevronLeft } from '../icon/icons/chevron-left.component'
import { IconChevronRight } from '../icon/icons/chevron-right.component'
import TableStyles from './table.styles'

interface TableColumn {
  key: string
  label: string
  sortable?: boolean
}

interface TableColumn {
  key: string
  label: string
  sortable?: boolean
}

@gdsCustomElement('gds-table', {
  dependsOn: [
    GdsButton,
    IconChevronLeft,
    IconChevronDoubleLeft,
    IconChevronRight,
    IconChevronDoubleRight,
  ],
})
export class GdsTable extends GdsElement {
  static styles = [tokens, TableStyles]

  @property({ type: Array })
  columns: TableColumn[] = []

  @property({ type: Array })
  data: any[] = []

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

  private getPageCount() {
    return Math.ceil(this.filteredData.length / this.pageSize)
  }

  private get filteredData() {
    const searchInput = this.shadowRoot?.querySelector(
      'input[type="search"]',
    ) as HTMLInputElement
    const query = searchInput?.value.toLowerCase() || ''

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

  render() {
    const pageCount = this.getPageCount()
    const visiblePages = this.getVisiblePages(pageCount)

    return html`
      <div>
        <div style="margin-bottom: 16px">
          <input
            type="search"
            placeholder="Search..."
            @input=${this.handleSearch}
          />
        </div>

        <table class=${classMap({ 'responsive-table': true })}>
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
              ${this.columns.map(
                (column) => html`
                  <th @click=${() => this.handleSort(column.key)}>
                    ${column.label}
                    ${column.sortable
                      ? html` <span>${this.getSortIcon(column.key)}</span> `
                      : ''}
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
                  ${this.columns.map(
                    (column) => html`
                      <td data-label=${column.label}>${row[column.key]}</td>
                    `,
                  )}
                </tr>
              `,
            )}
          </tbody>
        </table>
        <div class="footer">
          <div class="lead"></div>
          <div class="trail">
            <div class="pagination">
              <gds-button
                size="xs"
                rank="secondary"
                ?disabled=${this.page === 1}
                @click=${() => (this.page = 1)}
              >
                <gds-icon-chevron-double-left
                  size="m"
                ></gds-icon-chevron-double-left>
              </gds-button>

              <gds-button
                size="xs"
                rank="secondary"
                ?disabled=${this.page === 1}
                @click=${() => this.page--}
              >
                <gds-icon-chevron-left size="m"></gds-icon-chevron-left>
              </gds-button>

              ${visiblePages.map(
                (p) => html`
                  ${p === '...'
                    ? html`<gds-button size="xs" rank="tertiary" inert disabled
                        >...</gds-button
                      >`
                    : html`
                        <gds-button
                          size="xs"
                          rank="${this.page === p ? 'secondary' : 'tertiary'}"
                          class="page-unit page-button ${this.page === p
                            ? 'current-page'
                            : ''}"
                          @click=${() => (this.page = p as number)}
                        >
                          ${p}
                        </gds-button>
                      `}
                `,
              )}

              <gds-button
                rank="secondary"
                size="xs"
                ?disabled=${this.page === pageCount}
                @click=${() => this.page++}
              >
                <gds-icon-chevron-right size="m"></gds-icon-chevron-right>
              </gds-button>

              <gds-button
                rank="secondary"
                size="xs"
                ?disabled=${this.page === pageCount}
                @click=${() => (this.page = pageCount)}
              >
                <gds-icon-chevron-double-right
                  size="m"
                ></gds-icon-chevron-double-right>
              </gds-button>
            </div>
            <select @change=${this.handlePageSizeChange}>
              ${[5, 10, 25, 50].map(
                (size) => html`
                  <option value=${size} ?selected=${this.pageSize === size}>
                    ${size} per page
                  </option>
                `,
              )}
            </select>
          </div>
        </div>
      </div>
    `
  }

  private getVisiblePages(pageCount: number) {
    // Always show first and last page
    if (pageCount <= 7) {
      // If total pages are 7 or less, show all pages
      return Array.from({ length: pageCount }, (_, i) => i + 1)
    }

    // Always show first page, last page, and 5 pages around current page
    const firstPage = 1
    const lastPage = pageCount
    let middlePages: number[] = []

    if (this.page <= 4) {
      // Near the start
      middlePages = [2, 3, 4, 5]
      return [1, ...middlePages, '...', lastPage]
    } else if (this.page >= pageCount - 3) {
      // Near the end
      middlePages = [pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1]
      return [1, '...', ...middlePages, lastPage]
    } else {
      // In the middle
      middlePages = [this.page - 1, this.page, this.page + 1]
      return [1, '...', ...middlePages, '...', lastPage]
    }
  }

  private getSortIcon(columnKey: string) {
    if (this.sortColumn !== columnKey) return '↕'
    return this.sortDirection === 'asc' ? '↑' : '↓'
  }

  private handleSearch() {
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

  private handlePageSizeChange(e: Event) {
    this.pageSize = Number((e.target as HTMLSelectElement).value)
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
