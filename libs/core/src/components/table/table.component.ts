// table.component.ts
import { css, PropertyValues } from 'lit'
import { property, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'

interface TableColumn {
  key: string
  label: string
  sortable?: boolean
}

// interface TableConfig {
//   columns: TableColumn[]
//   pageSize: number
//   pageSizeOptions: number[]
// }
// table.component.ts
// import { css, PropertyValues } from 'lit'
// import { property, state } from 'lit/decorators.js'
// import { classMap } from 'lit/directives/class-map.js'

// interface TableColumn {
//   key: string;
//   label: string;
//   sortable: boolean;
// }

interface TableState {
  page: number
  pageSize: number
  sortColumn?: string
  sortDirection?: 'asc' | 'desc'
  selectedRows: Set<number>
  searchQuery: string
}

@gdsCustomElement('gds-table')
export class GdsTable extends withSizeXProps(
  withMarginProps(withLayoutChildProps(GdsElement)),
) {
  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }

      .table-container {
        overflow-x: auto;
      }

      .table-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        gap: 1rem;
      }

      .table-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
      }

      .pagination-controls {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      th {
        text-align: left;
        cursor: pointer;
        user-select: none;
      }

      .sort-header {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      @media (max-width: 768px) {
        .responsive-table {
          display: block;
        }

        .responsive-table thead {
          display: none;
        }

        .responsive-table tr {
          display: block;
          margin-bottom: 1rem;
          border: 1px solid var(--gds-border-color);
        }

        .responsive-table td {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem;
          border: none;
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
  private tableState: TableState = {
    page: 1,
    pageSize: 10,
    selectedRows: new Set(),
    searchQuery: '',
  }

  private dataMethod?: (
    state: TableState,
  ) => Promise<{ data: any[]; total: number }>

  public setDataMethod(
    method: (state: TableState) => Promise<{ data: any[]; total: number }>,
  ) {
    this.dataMethod = method
    this.loadData()
  }

  private async loadData() {
    if (this.dataMethod) {
      const response = await this.dataMethod(this.tableState)
      this.data = response.data
      this.dispatchEvent(new CustomEvent('data-loaded', { detail: response }))
    }
  }

  render() {
    return html`
      <div class="table-container">
        <div class="table-header">
          <gds-input
            type="search"
            placeholder="Search..."
            @input=${this.handleSearch}
            value=${this.tableState.searchQuery}
          ></gds-input>
        </div>

        <table class=${classMap({ 'responsive-table': true })}>
          <thead>
            <tr>
              <th>
                <gds-checkbox
                  @change=${this.handleSelectAll}
                  ?checked=${this.tableState.selectedRows.size ===
                  this.data.length}
                ></gds-checkbox>
              </th>
              ${this.columns.map(
                (column) => html`
                  <th @click=${() => this.handleSort(column.key)}>
                    <div class="sort-header">
                      ${column.label}
                      ${column.sortable
                        ? html`
                            <gds-icon
                              name=${this.tableState.sortColumn === column.key
                                ? this.tableState.sortDirection === 'asc'
                                  ? 'arrow-up'
                                  : 'arrow-down'
                                : 'arrow-both'}
                            ></gds-icon>
                          `
                        : ''}
                    </div>
                  </th>
                `,
              )}
            </tr>
          </thead>
          <tbody>
            ${this.data.map(
              (row, index) => html`
                <tr>
                  <td>
                    <gds-checkbox
                      @change=${(e: Event) => this.handleRowSelect(index, e)}
                      ?checked=${this.tableState.selectedRows.has(index)}
                    ></gds-checkbox>
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

        <div class="table-footer">
          <div class="pagination-info">
            Showing ${(this.tableState.page - 1) * this.tableState.pageSize + 1}
            to
            ${Math.min(
              this.tableState.page * this.tableState.pageSize,
              this.data.length,
            )}
            of ${this.data.length} entries
          </div>

          <div class="pagination-controls">
            <gds-button
              size="small"
              rank="secondary"
              ?disabled=${this.tableState.page === 1}
              @click=${() => this.handlePageChange(this.tableState.page - 1)}
              >Previous</gds-button
            >

            <gds-dropdown
              size="small"
              .value=${this.tableState.pageSize}
              @change=${this.handlePageSizeChange}
            >
              <gds-option value="5">5 per page</gds-option>
              <gds-option value="10">10 per page</gds-option>
              <gds-option value="25">25 per page</gds-option>
              <gds-option value="50">50 per page</gds-option>
            </gds-dropdown>

            <gds-button
              size="small"
              rank="secondary"
              ?disabled=${this.tableState.page * this.tableState.pageSize >=
              this.data.length}
              @click=${() => this.handlePageChange(this.tableState.page + 1)}
              >Next</gds-button
            >
          </div>
        </div>
      </div>
    `
  }

  private handleSearch(e: Event) {
    const input = e.target as HTMLInputElement
    this.tableState = {
      ...this.tableState,
      searchQuery: input.value,
      page: 1,
    }
    this.loadData()
  }

  private handleSort(columnKey: string) {
    const column = this.columns.find((col) => col.key === columnKey)
    if (!column?.sortable) return

    this.tableState = {
      ...this.tableState,
      sortColumn: columnKey,
      sortDirection:
        this.tableState.sortColumn === columnKey &&
        this.tableState.sortDirection === 'asc'
          ? 'desc'
          : 'asc',
    }
    this.loadData()
  }

  private handlePageChange(page: number) {
    this.tableState = {
      ...this.tableState,
      page,
    }
    this.loadData()
  }

  private handlePageSizeChange(e: CustomEvent) {
    this.tableState = {
      ...this.tableState,
      pageSize: Number(e.detail.value),
      page: 1,
    }
    this.loadData()
  }

  private handleSelectAll(e: Event) {
    const checkbox = e.target as HTMLInputElement
    this.tableState = {
      ...this.tableState,
      selectedRows: checkbox.checked
        ? new Set(this.data.map((_, index) => index))
        : new Set(),
    }
    this.dispatchEvent(
      new CustomEvent('selection-change', {
        detail: { selectedRows: Array.from(this.tableState.selectedRows) },
      }),
    )
  }

  private handleRowSelect(index: number, e: Event) {
    const checkbox = e.target as HTMLInputElement
    const newSelectedRows = new Set(this.tableState.selectedRows)

    if (checkbox.checked) {
      newSelectedRows.add(index)
    } else {
      newSelectedRows.delete(index)
    }

    this.tableState = {
      ...this.tableState,
      selectedRows: newSelectedRows,
    }

    this.dispatchEvent(
      new CustomEvent('selection-change', {
        detail: { selectedRows: Array.from(newSelectedRows) },
      }),
    )
  }
}
