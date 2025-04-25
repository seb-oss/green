import { nothing, unsafeCSS } from 'lit'
import { property, query, state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import style from './table.styles.css?inline'

import '../input'
import '../dropdown'
import '../card'
import '../div'
import '../context-menu'
import '../icon/icons/magnifying-glass'
import '../icon/icons/filter'
import '../icon/icons/arrow-left'
import '../icon/icons/arrow-right'
import '../icon/icons/chevron-double-left'
import '../icon/icons/chevron-left'
import '../icon/icons/chevron-double-right'
import '../icon/icons/chevron-right'
import '../icon/icons/dot-grid-one-vertical'
import '../icon/icons/dot-grid-two'
import '../icon/icons/car'
import '../icon/icons/text-edit'
import '../icon/icons/bank'
import '../icon/icons/ai'
import '../icon/icons/map-pin'
import '../icon/icons/chevron-bottom'

interface SortableColumn {
  key: string
  label: string
  visible: boolean // Add visible property
}

const DUMMY_DATA = [
  {
    id: 1,
    title: 'Branch Office Alpha',
    status: { label: 'New', variant: 'positive' },
    branch: 'Main Branch',
    street: '123 Business Ave',
  },
  {
    id: 2,
    title: 'Branch Office Beta',
    status: { label: 'Closing', variant: 'negative' },
    branch: 'Secondary Branch',
    street: '456 Commerce St',
  },
  {
    id: 3,
    title: 'Branch Office Gamma',
    status: { label: 'Active', variant: 'notice' },
    branch: 'Main Branch',
    street: '789 Market Rd',
  },
  {
    id: 4,
    title: 'Branch Office Delta',
    status: { label: 'New', variant: 'positive' },
    branch: 'Downtown Branch',
    street: '321 City Center',
  },
  {
    id: 5,
    title: 'Branch Office Epsilon',
    status: { label: 'Active', variant: 'notice' },
    branch: 'Secondary Branch',
    street: '654 Suburb Lane',
  },
]

/**
 * @element gds-table
 */
@gdsCustomElement('gds-table')
export class GdsTable extends GdsElement {
  static styles = [tokens, unsafeCSS(style)]

  @state()
  private columns: SortableColumn[] = [
    { key: 'title', label: 'Title', visible: true },
    { key: 'status', label: 'Services', visible: true },
    { key: 'branch', label: 'Branches', visible: true },
    { key: 'street', label: 'Street', visible: true },
  ]

  @state()
  private data = DUMMY_DATA

  @state()
  private filteredData = this.data

  @state()
  private selectedBranches: string[] = []

  @state()
  private draggedColumn: string | null = null

  @state()
  private dragOverColumn: string | null = null

  // Add these methods for drag and drop
  private handleDragStart(e: DragEvent, columnKey: string) {
    this.draggedColumn = columnKey
    const target = e.target as HTMLElement
    target.classList.add('dragging')
    e.dataTransfer?.setData('text/plain', columnKey)
  }

  private handleDragOver(e: DragEvent, columnKey: string) {
    e.preventDefault()
    this.dragOverColumn = columnKey
  }

  private handleDragEnd(e: DragEvent) {
    const target = e.target as HTMLElement
    target.classList.remove('dragging')
    this.draggedColumn = null
    this.dragOverColumn = null
  }

  private handleDrop(e: DragEvent, targetColumnKey: string) {
    e.preventDefault()
    if (!this.draggedColumn || this.draggedColumn === targetColumnKey) return

    const fromIndex = this.columns.findIndex(
      (col) => col.key === this.draggedColumn,
    )
    const toIndex = this.columns.findIndex((col) => col.key === targetColumnKey)

    // Reorder columns
    const newColumns = [...this.columns]
    const [movedColumn] = newColumns.splice(fromIndex, 1)
    newColumns.splice(toIndex, 0, movedColumn)

    this.columns = newColumns
    this.draggedColumn = null
    this.dragOverColumn = null

    this.dispatchEvent(
      new CustomEvent('column-reorder', {
        detail: { columns: this.columns },
      }),
    )
  }

  @state()
  private selectedRows: Set<number> = new Set() // Using row IDs

  // Add these methods for row selection
  private handleSelectAll(e: Event) {
    const checkbox = e.target as HTMLInputElement
    if (checkbox.checked) {
      // Select all visible rows
      this.filteredData.forEach((row) => this.selectedRows.add(row.id))
    } else {
      // Deselect all rows
      this.selectedRows.clear()
    }
    this.requestUpdate()
    this.dispatchSelectionChange()
  }

  private handleRowSelect(rowId: number, e: Event) {
    const checkbox = e.target as HTMLInputElement
    if (checkbox.checked) {
      this.selectedRows.add(rowId)
    } else {
      this.selectedRows.delete(rowId)
    }
    this.requestUpdate()
    this.dispatchSelectionChange()
  }

  private isAllSelected(): boolean {
    return (
      this.filteredData.length > 0 &&
      this.filteredData.every((row) => this.selectedRows.has(row.id))
    )
  }

  private dispatchSelectionChange() {
    this.dispatchEvent(
      new CustomEvent('selection-change', {
        detail: {
          selectedRows: Array.from(this.selectedRows),
          selectedCount: this.selectedRows.size,
        },
      }),
    )
  }

  @state()
  private sortConfig = {
    field: null as string | null,
    direction: 'asc' as 'asc' | 'desc',
  }

  // Column visibility handling
  private handleColumnVisibility(e: CustomEvent) {
    const selectedColumns = e.detail.value as string[]
    this.columns = this.columns.map((col) => ({
      ...col,
      visible: selectedColumns.includes(col.key),
    }))
    this.requestUpdate()
  }

  // Add this method to get unique branches with counts
  private getBranchesWithCounts() {
    const branchCounts = this.data.reduce(
      (acc, row) => {
        const branch = row.branch
        acc[branch] = (acc[branch] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return Object.entries(branchCounts).map(([branch, count]) => ({
      branch,
      count,
    }))
  }

  // Add filter method
  private filterDataByBranches() {
    if (this.selectedBranches.length === 0) {
      this.filteredData = this.data
    } else {
      this.filteredData = this.data.filter((row) =>
        this.selectedBranches.includes(row.branch),
      )
    }
    this.requestUpdate()
  }

  private handleBranchFilter(e: CustomEvent) {
    this.selectedBranches = e.detail.value
    this.filterDataByBranches()
  }

  // Sorting methods
  private sortData(data: typeof DUMMY_DATA): typeof DUMMY_DATA {
    if (!this.sortConfig.field) return data

    return [...data].sort((a, b) => {
      let aVal: any = a[this.sortConfig.field as keyof typeof a]
      let bVal: any = b[this.sortConfig.field as keyof typeof b]

      // Handle nested status object
      if (this.sortConfig.field === 'status') {
        aVal = a.status.label
        bVal = b.status.label
      }

      // Convert to lowercase if string
      if (typeof aVal === 'string') aVal = aVal.toLowerCase()
      if (typeof bVal === 'string') bVal = bVal.toLowerCase()

      const direction = this.sortConfig.direction === 'asc' ? 1 : -1

      if (aVal < bVal) return -1 * direction
      if (aVal > bVal) return 1 * direction
      return 0
    })
  }

  private handleColumnClick(columnKey: string, e: MouseEvent) {
    // Prevent sorting when clicking drag handle
    if ((e.target as HTMLElement).closest('.column-drag-handle')) return

    if (this.sortConfig.field === columnKey) {
      // Toggle direction if same column
      this.sortConfig = {
        field: columnKey,
        direction: this.sortConfig.direction === 'asc' ? 'desc' : 'asc',
      }
    } else {
      // Set new column with default ascending direction
      this.sortConfig = {
        field: columnKey,
        direction: 'asc',
      }
    }

    // Apply sorting
    this.filteredData = this.sortData(this.filteredData)
    this.requestUpdate()

    // Dispatch sort change event
    this.dispatchEvent(
      new CustomEvent('sort-change', {
        detail: { ...this.sortConfig },
      }),
    )
  }

  private getSortIconClass(columnKey: string): string {
    if (this.sortConfig.field !== columnKey) return ''
    return this.sortConfig.direction === 'asc' ? 'asc' : 'desc'
  }

  private renderRow(
    row: (typeof DUMMY_DATA)[0],
    visibleColumns: SortableColumn[],
  ) {
    return html`
      <div
        class="gds-table-row ${this.selectedRows.has(row.id) ? 'selected' : ''}"
      >
        <div class="gds-row-drag">
          <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
        </div>
        <div class="gds-row-select">
          <input
            type="checkbox"
            .checked=${this.selectedRows.has(row.id)}
            @change=${(e: Event) => this.handleRowSelect(row.id, e)}
          />
        </div>

        ${visibleColumns.map((column) => {
          switch (column.key) {
            case 'title':
              return html`
                <div class="gds-cell">
                  <div class="cell-content">
                    <div class="cell-lead">
                      <gds-icon-ai></gds-icon-ai>
                    </div>
                    <div class="cell-content">${row.title}</div>
                  </div>
                  <gds-button size="xs" rank="tertiary" class="gds-cell-edit">
                    <gds-icon-text-edit></gds-icon-text-edit>
                  </gds-button>
                </div>
              `
            case 'status':
              return html`
                <div class="gds-cell">
                  <div class="cell-content">
                    <div class="cell-lead">
                      <gds-badge size="small" variant=${row.status.variant}>
                        ${row.status.label}
                      </gds-badge>
                    </div>
                    <div class="cell-content">Cell content</div>
                  </div>
                  <gds-button size="xs" rank="tertiary" class="gds-cell-edit">
                    <gds-icon-text-edit></gds-icon-text-edit>
                  </gds-button>
                </div>
              `
            case 'branch':
              return html`
                <div class="gds-cell">
                  <div class="cell-content">
                    <div class="cell-lead">
                      <gds-icon-bank></gds-icon-bank>
                    </div>
                    <div class="cell-content">${row.branch}</div>
                  </div>
                  <gds-button size="xs" rank="tertiary" class="gds-cell-edit">
                    <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
                  </gds-button>
                </div>
              `
            case 'street':
              return html`
                <div class="gds-cell">
                  <div class="cell-content">
                    <div class="cell-lead">
                      <gds-icon-map-pin></gds-icon-map-pin>
                    </div>
                    <div class="cell-content">${row.street}</div>
                  </div>
                  <gds-button size="xs" rank="tertiary" class="gds-cell-edit">
                    <gds-icon-chevron-bottom></gds-icon-chevron-bottom>
                  </gds-button>
                </div>
              `
            default:
              return nothing
          }
        })}

        <div class="gds-row-options">
          <gds-icon-dot-grid-one-vertical></gds-icon-dot-grid-one-vertical>
        </div>
      </div>
    `
  }

  render() {
    const branchesWithCounts = this.getBranchesWithCounts()
    const visibleColumns = this.columns.filter((col) => col.visible)

    return html`
      <div class="gds-table">
        <!-- Table Header with Search and Filters -->
        <gds-div class="gds-table-filter">
          <div class="gds-filter-content">
            <gds-input size="small" plain value="search" clearable>
              <gds-icon-magnifying-glass
                slot="lead"
              ></gds-icon-magnifying-glass>
            </gds-input>

            <gds-dropdown
              size="small"
              searchable
              plain
              combobox
              multiple
              placeholder="Filter"
              @change=${this.handleBranchFilter}
            >
              <gds-option isplaceholder>
                Filter by branches (${branchesWithCounts.length})
              </gds-option>
              ${branchesWithCounts.map(
                ({ branch, count }) => html`
                  <gds-option value=${branch}>
                    <span>${branch}</span>
                    <gds-badge variant="notice" size="small" rounded>
                      ${count}
                    </gds-badge>
                  </gds-option>
                `,
              )}
            </gds-dropdown>
          </div>

          <div class="gds-filter-columns">
            <gds-dropdown
              size="small"
              searchable
              plain
              multiple
              @change=${this.handleColumnVisibility}
            >
              <gds-option isplaceholder>Columns</gds-option>
              ${this.columns.map(
                (column) => html`
                  <gds-option value=${column.key} .selected=${column.visible}>
                    ${column.label}
                  </gds-option>
                `,
              )}
            </gds-dropdown>
          </div>
        </gds-div>

        <!-- Table Content -->
        <div class="gds-table-content">
          <!-- Table Header Row -->
          <div class="gds-table-row gds-table-head">
            <div class="gds-row-select">
              <input
                type="checkbox"
                .checked=${this.isAllSelected()}
                .indeterminate=${this.selectedRows.size > 0 &&
                !this.isAllSelected()}
                @change=${this.handleSelectAll}
              />
            </div>
            ${visibleColumns.map(
              (column) => html`
                <div
                  class="gds-table-head-column ${this.sortConfig.field ===
                  column.key
                    ? 'sorted'
                    : ''} 
           ${this.draggedColumn === column.key ? 'dragging' : ''} 
           ${this.dragOverColumn === column.key ? 'drag-over' : ''}"
                  draggable="true"
                  @dragstart=${(e: DragEvent) =>
                    this.handleDragStart(e, column.key)}
                  @dragover=${(e: DragEvent) =>
                    this.handleDragOver(e, column.key)}
                  @dragleave=${() => (this.dragOverColumn = null)}
                  @dragend=${this.handleDragEnd}
                  @drop=${(e: DragEvent) => this.handleDrop(e, column.key)}
                  @click=${(e: MouseEvent) =>
                    this.handleColumnClick(column.key, e)}
                >
                  <div class="column-drag-handle">
                    <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
                  </div>
                  <div class="column-name">${column.label}</div>
                  <gds-icon-filter
                    class="${this.getSortIconClass(column.key)}"
                  ></gds-icon-filter>
                </div>
              `,
            )}
          </div>

          <!-- Table Rows -->
          ${this.filteredData.map((row) => this.renderRow(row, visibleColumns))}
        </div>

        <!-- Table Footer -->
        <div class="gds-table-footer">
          <gds-flex flex="1">
            ${this.selectedRows.size} of ${this.filteredData.length} row(s)
            selected.
          </gds-flex>

          <div class="footer-actions">
            <span>Number of rows</span>
            <div class="footer-actions-rows">
              <gds-dropdown size="small" searchable plain class="rows-dropdown">
                ${[10, 20, 40, 100, 1000].map(
                  (num) => html`
                    <gds-option value="${num}">${num}</gds-option>
                  `,
                )}
              </gds-dropdown>
            </div>

            <gds-flex
              flex="1"
              align-items="center"
              justify-content="space-between"
            >
              <span>1-10 of ${this.data.length}</span>
            </gds-flex>

            <gds-flex>
              <gds-button size="small" rank="tertiary">
                <gds-icon-chevron-double-left></gds-icon-chevron-double-left>
              </gds-button>
              <gds-button size="small" rank="tertiary">
                <gds-icon-chevron-left></gds-icon-chevron-left>
              </gds-button>
              <gds-button size="small" rank="tertiary">
                <gds-icon-chevron-right></gds-icon-chevron-right>
              </gds-button>
              <gds-button size="small" rank="tertiary">
                <gds-icon-chevron-double-right></gds-icon-chevron-double-right>
              </gds-button>
            </gds-flex>
          </div>
        </div>
      </div>
    `
  }
}
