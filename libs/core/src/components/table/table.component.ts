import { css } from 'lit'
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
import TableStyles from './table.styles'

interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  align?: 'left' | 'right' | 'center'
}

interface TableColumn {
  key: string
  label: string
  sortable?: boolean
}

@gdsCustomElement('gds-table', {
  dependsOn: [
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

  render() {
    const pageCount = this.getPageCount()
    const visiblePages = this.getVisiblePages(pageCount)

    return html`
      <div class="gds-table">
        <div class="header">
          <div class="lead">
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
          </div>
          <div class="trail">Trail content</div>
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
                  <th
                    class=${classMap({
                      'text-right': column.align === 'right',
                      'text-center': column.align === 'center',
                    })}
                  >
                    ${column.label}
                    ${column.sortable
                      ? html`
                          <gds-button
                            size="xs"
                            rank="tertiary"
                            ?disabled=${!column.sortable}
                            @click=${() => this.handleSort(column.key)}
                          >
                            <gds-icon-sort size="s"></gds-icon-sort>
                          </gds-button>
                        `
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
                      <!-- <td data-label=${column.label}>${row[
                        column.key
                      ]}</td> -->
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
                  stroke="2"
                  size="l"
                ></gds-icon-chevron-double-left>
              </gds-button>

              <gds-button
                size="xs"
                rank="tertiary"
                ?disabled=${this.page === 1}
                @click=${() => this.page--}
              >
                <gds-icon-chevron-left
                  stroke="2"
                  size="l"
                  slot="lead"
                ></gds-icon-chevron-left>
                Prev
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
                Next
                <gds-icon-chevron-right
                  slot="trail"
                  stroke="2"
                  size="l"
                ></gds-icon-chevron-right>
              </gds-button>

              <gds-button
                rank="secondary"
                size="xs"
                ?disabled=${this.page === pageCount}
                @click=${() => (this.page = pageCount)}
              >
                <gds-icon-chevron-double-right
                  stroke="2"
                  size="l"
                ></gds-icon-chevron-double-right>
              </gds-button>
            </div>

            <gds-dropdown
              plain
              size="small"
              @change=${this.handlePageSizeChange}
            >
              ${[5, 10, 25, 50].map(
                (size) => html`
                  <gds-option value=${size} ?selected=${this.pageSize === size}>
                    ${size} per page
                  </gds-option>
                `,
              )}
            </gds-dropdown>
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
