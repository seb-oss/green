import { css } from 'lit'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

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

@gdsCustomElement('gds-table')
export class GdsTable extends GdsElement {
  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      th,
      td {
        padding: 8px;
        border: 1px solid #ddd;
      }

      .checkbox-cell {
        width: 40px;
        text-align: center;
      }

      .pagination {
        display: flex;
        gap: 8px;
        align-items: center;
        margin-top: 16px;
      }

      .page-button {
        padding: 4px 8px;
        border: 1px solid #ddd;
        background: white;
        cursor: pointer;
      }

      .page-button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .current-page {
        background: #eee;
      }

      @media (max-width: 768px) {
        .responsive-table td {
          display: flex;
          justify-content: space-between;
          padding: 8px;
        }

        .responsive-table td::before {
          content: attr(data-label);
          font-weight: bold;
        }
      }
    `,
  ]

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

        <div class="pagination">
          <button
            class="page-button"
            ?disabled=${this.page === 1}
            @click=${() => (this.page = 1)}
          >
            First
          </button>

          <button
            class="page-button"
            ?disabled=${this.page === 1}
            @click=${() => this.page--}
          >
            Previous
          </button>

          ${visiblePages.map(
            (p) => html`
              ${p === '...'
                ? html`<span class="page-dots">...</span>`
                : html`
                    <button
                      class="page-button ${this.page === p
                        ? 'current-page'
                        : ''}"
                      @click=${() => (this.page = p as number)}
                    >
                      ${p}
                    </button>
                  `}
            `,
          )}

          <button
            class="page-button"
            ?disabled=${this.page === pageCount}
            @click=${() => this.page++}
          >
            Next
          </button>

          <button
            class="page-button"
            ?disabled=${this.page === pageCount}
            @click=${() => (this.page = pageCount)}
          >
            Last
          </button>

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
    `
  }

  private getVisiblePages(pageCount: number) {
    const delta = 2
    const range: number[] = [] // Only numbers in initial range
    const rangeWithDots: (number | '...')[] = []
    let l: number | undefined

    range.push(1)

    for (let i = this.page - delta; i <= this.page + delta; i++) {
      if (i < pageCount && i > 1) {
        range.push(i)
      }
    }

    range.push(pageCount)

    // Remove duplicates and sort
    const uniqueRange = [...new Set(range)].sort((a, b) => a - b)

    for (let i = 0; i < uniqueRange.length; i++) {
      const current = uniqueRange[i]

      if (i > 0) {
        const prev = uniqueRange[i - 1]
        if (current - prev === 2) {
          rangeWithDots.push(current - 1)
        } else if (current - prev !== 1) {
          rangeWithDots.push('...')
        }
      }

      rangeWithDots.push(current)
    }

    return rangeWithDots
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
