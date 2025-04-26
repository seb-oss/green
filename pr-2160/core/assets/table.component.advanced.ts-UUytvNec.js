import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as s}from"./index-DoDsito1.js";import"./index-LQ0ODMJ2.js";import"./_commonjsHelpers-Cpj98o6Y.js";function i(n){const e={code:"code",pre:"pre",...s(),...n.components};return t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-ts",children:`import { nothing, unsafeCSS } from 'lit'
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
  visible: boolean
  editable?: boolean
  editType?: 'text' | 'dropdown' | 'badge'
}
// Add interface for editing state
interface EditingCell {
  rowId: number
  columnKey: string
  value: any
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
    {
      key: 'title',
      label: 'Title',
      visible: true,
      editable: true,
      editType: 'text',
    },
    {
      key: 'status',
      label: 'Services',
      visible: true,
      editable: true,
      editType: 'badge',
    },
    {
      key: 'branch',
      label: 'Branches',
      visible: true,
      editable: true,
      editType: 'dropdown',
    },
    {
      key: 'street',
      label: 'Street',
      visible: true,
      editable: true,
      editType: 'text',
    },
  ]
  // Add editing state
  @state()
  private editingCell: EditingCell | null = null

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

  // Edit stuff
  // Add methods for handling cell editing
  private handleEditStart(rowId: number, columnKey: string, value: any) {
    this.editingCell = { rowId, columnKey, value }
    this.requestUpdate()
  }

  private handleEditCancel() {
    this.editingCell = null
    this.requestUpdate()
  }

  private handleEditSave(newValue: any) {
    if (!this.editingCell) return

    // Find and update the row
    const rowIndex = this.data.findIndex(
      (row) => row.id === this.editingCell?.rowId,
    )
    if (rowIndex === -1) return

    // Create new data array with updated value
    const newData = [...this.data]
    const row = { ...newData[rowIndex] }

    // Handle nested updates (like status)
    if (this.editingCell.columnKey === 'status') {
      row.status = { ...row.status, label: newValue }
    } else {
      row[this.editingCell.columnKey as keyof typeof row] = newValue
    }

    newData[rowIndex] = row
    this.data = newData
    this.filteredData = this.sortData(this.filterDataByBranches())

    // Clear editing state
    this.editingCell = null

    // Dispatch edit event
    this.dispatchEvent(
      new CustomEvent('cell-edit', {
        detail: {
          rowId: row.id,
          column: this.editingCell.columnKey,
          value: newValue,
        },
      }),
    )

    this.requestUpdate()
  }

  private getCellIcon(columnKey: string) {
    switch (columnKey) {
      case 'title':
        return html\`<gds-icon-ai></gds-icon-ai>\`
      case 'status':
        return nothing
      case 'branch':
        return html\`<gds-icon-bank></gds-icon-bank>\`
      case 'street':
        return html\`<gds-icon-map-pin></gds-icon-map-pin>\`
      default:
        return nothing
    }
  }

  private renderCell(row: (typeof DUMMY_DATA)[0], column: SortableColumn) {
    const isEditing =
      this.editingCell?.rowId === row.id &&
      this.editingCell?.columnKey === column.key

    if (isEditing) {
      switch (column.editType) {
        case 'text':
          return html\`
            <div class="gds-cell">
              <gds-input
                size="small"
                .value=\${this.editingCell.value}
                @keydown=\${(e: KeyboardEvent) => {
                  if (e.key === 'Enter')
                    this.handleEditSave((e.target as HTMLInputElement).value)
                  if (e.key === 'Escape') this.handleEditCancel()
                }}
                @blur=\${() => this.handleEditCancel()}
              ></gds-input>
            </div>
          \`
        case 'dropdown':
          return html\`
            <div class="gds-cell">
              <gds-dropdown
                size="small"
                .value=\${this.editingCell.value}
                @change=\${(e: CustomEvent) =>
                  this.handleEditSave(e.detail.value)}
                @blur=\${() => this.handleEditCancel()}
              >
                \${this.getBranchesWithCounts().map(
                  ({ branch }) => html\`
                    <gds-option value=\${branch}>\${branch}</gds-option>
                  \`,
                )}
              </gds-dropdown>
            </div>
          \`
        case 'badge':
          return html\`
            <div class="gds-cell">
              <gds-dropdown
                size="small"
                .value=\${this.editingCell?.value}
                @change=\${(e: CustomEvent) =>
                  this.handleEditSave(e.detail.value)}
                @blur=\${() => this.handleEditCancel()}
              >
                <gds-option value="New">
                  <gds-badge variant="positive" size="small">New</gds-badge>
                </gds-option>
                <gds-option value="Active">
                  <gds-badge variant="notice" size="small">Active</gds-badge>
                </gds-option>
                <gds-option value="Closing">
                  <gds-badge variant="negative" size="small">Closing</gds-badge>
                </gds-option>
              </gds-dropdown>
            </div>
          \`
        default:
          return nothing
      }
    }

    return html\`
      <div class="gds-cell">
        <div
          class="cell-content \${column.editable ? 'editable' : ''}"
          @dblclick=\${() =>
            column.editable &&
            this.handleEditStart(
              row.id,
              column.key,
              column.key === 'status' ? row.status.label : row[column.key],
            )}
        >
          <div class="cell-lead">\${this.getCellIcon(column.key)}</div>
          <div class="cell-value">
            \${column.key === 'status'
              ? html\`<gds-badge size="small" variant=\${row.status.variant}>
                  \${row.status.label}
                </gds-badge>\`
              : row[column.key]}
          </div>
        </div>
        \${column.editable
          ? html\`
              <gds-button
                size="xs"
                rank="tertiary"
                class="gds-cell-edit"
                @click=\${() =>
                  this.handleEditStart(
                    row.id,
                    column.key,
                    column.key === 'status'
                      ? row.status.label
                      : row[column.key],
                  )}
              >
                <gds-icon-text-edit></gds-icon-text-edit>
              </gds-button>
            \`
          : nothing}
      </div>
    \`
  }

  private renderRow(
    row: (typeof DUMMY_DATA)[0],
    visibleColumns: SortableColumn[],
  ) {
    return html\`
      <div
        class="gds-table-row \${this.selectedRows.has(row.id) ? 'selected' : ''}"
      >
        <div class="gds-row-drag">
          <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
        </div>
        <div class="gds-row-select">
          <input
            type="checkbox"
            .checked=\${this.selectedRows.has(row.id)}
            @change=\${(e: Event) => this.handleRowSelect(row.id, e)}
          />
        </div>

        \${visibleColumns.map((column) => this.renderCell(row, column))}

        <div class="gds-row-options">
          <gds-icon-dot-grid-one-vertical></gds-icon-dot-grid-one-vertical>
        </div>
      </div>
    \`
  }

  render() {
    const branchesWithCounts = this.getBranchesWithCounts()
    const visibleColumns = this.columns.filter((col) => col.visible)

    return html\`
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
              @change=\${this.handleBranchFilter}
            >
              <gds-option isplaceholder>
                Filter by branches (\${branchesWithCounts.length})
              </gds-option>
              \${branchesWithCounts.map(
                ({ branch, count }) => html\`
                  <gds-option value=\${branch}>
                    <span>\${branch}</span>
                    <gds-badge variant="notice" size="small" rounded>
                      \${count}
                    </gds-badge>
                  </gds-option>
                \`,
              )}
            </gds-dropdown>
          </div>

          <div class="gds-filter-columns">
            <gds-dropdown
              size="small"
              searchable
              plain
              multiple
              @change=\${this.handleColumnVisibility}
            >
              <gds-option isplaceholder>Columns</gds-option>
              \${this.columns.map(
                (column) => html\`
                  <gds-option value=\${column.key} .selected=\${column.visible}>
                    \${column.label}
                  </gds-option>
                \`,
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
                .checked=\${this.isAllSelected()}
                .indeterminate=\${this.selectedRows.size > 0 &&
                !this.isAllSelected()}
                @change=\${this.handleSelectAll}
              />
            </div>
            \${visibleColumns.map(
              (column) => html\`
                <div
                  class="gds-table-head-column \${this.sortConfig.field ===
                  column.key
                    ? 'sorted'
                    : ''} 
           \${this.draggedColumn === column.key ? 'dragging' : ''} 
           \${this.dragOverColumn === column.key ? 'drag-over' : ''}"
                  draggable="true"
                  @dragstart=\${(e: DragEvent) =>
                    this.handleDragStart(e, column.key)}
                  @dragover=\${(e: DragEvent) =>
                    this.handleDragOver(e, column.key)}
                  @dragleave=\${() => (this.dragOverColumn = null)}
                  @dragend=\${this.handleDragEnd}
                  @drop=\${(e: DragEvent) => this.handleDrop(e, column.key)}
                  @click=\${(e: MouseEvent) =>
                    this.handleColumnClick(column.key, e)}
                >
                  <div class="column-drag-handle">
                    <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
                  </div>
                  <div class="column-name">\${column.label}</div>
                  <gds-icon-filter
                    class="\${this.getSortIconClass(column.key)}"
                  ></gds-icon-filter>
                </div>
              \`,
            )}
          </div>

          <!-- Table Rows -->
          \${this.filteredData.map((row) => this.renderRow(row, visibleColumns))}
        </div>

        <!-- Table Footer -->
        <div class="gds-table-footer">
          <gds-flex flex="1">
            \${this.selectedRows.size} of \${this.filteredData.length} row(s)
            selected.
          </gds-flex>

          <div class="footer-actions">
            <span>Number of rows</span>
            <div class="footer-actions-rows">
              <gds-dropdown size="small" searchable plain class="rows-dropdown">
                \${[10, 20, 40, 100, 1000].map(
                  (num) => html\`
                    <gds-option value="\${num}">\${num}</gds-option>
                  \`,
                )}
              </gds-dropdown>
            </div>

            <gds-flex
              flex="1"
              align-items="center"
              justify-content="space-between"
            >
              <span>1-10 of \${this.data.length}</span>
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
    \`
  }
}
`})})}function d(n={}){const{wrapper:e}={...s(),...n.components};return e?t.jsx(e,{...n,children:t.jsx(i,{...n})}):i(n)}export{d as default};
