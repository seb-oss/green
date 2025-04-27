import { nothing, unsafeCSS } from 'lit'
import { property, state } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { BANK_COLUMNS, BANK_DATA } from './table.data'
import style from './table.styles.css?inline'

import '../dropdown'
import '../flex'
import '../input'
import '../context-menu'
import '../icon/icons/ai'
import '../icon/icons/car'
import '../icon/icons/bank'
import '../icon/icons/pin'
import '../icon/icons/plus-small'
import '../icon/icons/dot-grid-two'
import '../icon/icons/dot-grid-one-vertical'
import '../icon/icons/filter'
import '../icon/icons/chevron-right'
import '../icon/icons/arrow-bottom-top'
import '../icon/icons/search-menu'
import '../icon/icons/pin'
import '../icon/icons/pencil-sparkle'
import '../icon/icons/chevron-left'
import '../icon/icons/chevron-double-left'
import '../icon/icons/chevron-right'
import '../icon/icons/chevron-double-right'
import './cell'
import './row'

/**
 * @element gds-table
 */
@gdsCustomElement('gds-table')
export class GdsTable extends GdsElement {
  static styles = [tokens, unsafeCSS(style)]

  @property({ type: Array })
  columns = BANK_COLUMNS

  @property({ type: Array })
  data = BANK_DATA

  @state()
  private searchQuery = ''

  @state()
  private filteredData = this.data

  private handleSearch(e: InputEvent) {
    const target = e.target as HTMLInputElement
    this.searchQuery = target.value.toLowerCase()
    this.filterData()
  }

  @state()
  private sortConfig: {
    column: string | null
    direction: 'asc' | 'desc'
  } = {
    column: null,
    direction: 'asc',
  }

  private handleSort(column: string) {
    if (!this.columns.find((col) => col.key === column)?.sortable) return

    if (this.sortConfig.column === column) {
      // Toggle direction if same column
      this.sortConfig = {
        column,
        direction: this.sortConfig.direction === 'asc' ? 'desc' : 'asc',
      }
    } else {
      // New column, default to ascending
      this.sortConfig = {
        column,
        direction: 'asc',
      }
    }

    this.sortData()
  }

  private sortData() {
    if (!this.sortConfig.column) return

    // Sort the filtered data instead of the original data
    this.filteredData = [...this.filteredData].sort((a, b) => {
      const columnIndex = this.columns.findIndex(
        (col) => col.key === this.sortConfig.column,
      )
      if (columnIndex === -1) return 0

      const aValue = a.cells[columnIndex].value
      const bValue = b.cells[columnIndex].value

      // Handle numeric values (like balance)
      if (this.sortConfig.column === 'balance') {
        const aNum = parseFloat(aValue.replace(/[^0-9.-]+/g, ''))
        const bNum = parseFloat(bValue.replace(/[^0-9.-]+/g, ''))
        return this.sortConfig.direction === 'asc' ? aNum - bNum : bNum - aNum
      }

      // Regular string comparison
      return this.sortConfig.direction === 'asc'
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue)
    })

    this.requestUpdate()

    // Dispatch sort event
    this.dispatchEvent(
      new CustomEvent('sort-change', {
        detail: {
          column: this.sortConfig.column,
          direction: this.sortConfig.direction,
        },
      }),
    )
  }

  private renderIcon(iconName: string, slot?: string, size?: string) {
    switch (iconName) {
      case 'bank':
        return html`<gds-icon-bank
          slot=${slot || 'lead'}
          size=${size || 'm'}
        ></gds-icon-bank>`
      case 'pin':
        return html`<gds-icon-pin
          slot=${slot || 'lead'}
          size=${size || 'm'}
        ></gds-icon-pin>`
      case 'ai':
        return html`<gds-icon-ai
          slot=${slot || 'lead'}
          size=${size || 'm'}
        ></gds-icon-ai>`
      case 'dot-grid-two':
        return html`<gds-icon-dot-grid-two
          slot=${slot || 'lead'}
          size=${size || 'm'}
        ></gds-icon-dot-grid-two>`
      case 'plus':
        return html`<gds-icon-plus-small
          slot=${slot || 'lead'}
          size=${size || 'm'}
        ></gds-icon-plus-small>`
      // Add other icon cases as needed
      default:
        return nothing
    }
  }

  @state()
  private draggedColumn: string | null = null

  @state()
  private dragOverColumn: string | null = null

  private handleDragStart(e: DragEvent, columnKey: string) {
    // Only start drag if column is draggable
    if (!this.columns.find((col) => col.key === columnKey)?.dragaggable) return

    this.draggedColumn = columnKey
    const target = e.target as HTMLElement
    target.classList.add('dragging')
    e.dataTransfer?.setData('text/plain', columnKey)
  }

  private handleDragOver(e: DragEvent, columnKey: string) {
    // Only allow drag over if both columns are draggable
    const targetColumn = this.columns.find((col) => col.key === columnKey)
    if (
      !this.draggedColumn ||
      !targetColumn?.dragaggable ||
      this.draggedColumn === columnKey
    )
      return

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

    // Get both columns from visible columns only
    const sourceColumn = this.visibleColumns.find(
      (col) => col.key === this.draggedColumn,
    )
    const targetColumn = this.visibleColumns.find(
      (col) => col.key === targetColumnKey,
    )

    // Only allow drop if both columns are draggable and visible
    if (!sourceColumn?.dragaggable || !targetColumn?.dragaggable) return
    if (!this.draggedColumn || this.draggedColumn === targetColumnKey) return

    const fromIndex = this.columns.findIndex(
      (col) => col.key === this.draggedColumn,
    )
    const toIndex = this.columns.findIndex((col) => col.key === targetColumnKey)

    // Reorder columns
    const newColumns = [...this.columns]
    const [movedColumn] = newColumns.splice(fromIndex, 1)
    newColumns.splice(toIndex, 0, movedColumn)

    // Reorder both filtered and original data
    const reorderCells = (data: any[]) => {
      return data.map((row) => {
        const newRow = { ...row }
        const newCells = [...row.cells]
        const [movedCell] = newCells.splice(fromIndex, 1)
        newCells.splice(toIndex, 0, movedCell)
        newRow.cells = newCells
        return newRow
      })
    }

    // Update both original and filtered data
    this.data = reorderCells(this.data)
    this.filteredData = reorderCells(this.filteredData)

    // Update columns
    this.columns = newColumns

    this.draggedColumn = null
    this.dragOverColumn = null

    // Force a complete re-render
    this.requestUpdate()

    this.dispatchEvent(
      new CustomEvent('column-reorder', {
        detail: {
          columns: this.columns,
          fromIndex,
          toIndex,
          sourceColumn,
          targetColumn,
        },
      }),
    )
  }

  // New filter
  @state()
  private selectedFilterColumn: string | null = null

  @state()
  private selectedFilterValues: string[] = []

  private getUniqueValuesForColumn(columnKey: string) {
    const columnIndex = this.columns.findIndex((col) => col.key === columnKey)
    if (columnIndex === -1) return []

    const valueMap = new Map<
      string,
      {
        count: number
        variant?: string
      }
    >()

    this.data.forEach((row) => {
      const cell = row.cells[columnIndex]
      const value = cell.badge?.label || cell.value

      const existing = valueMap.get(value) || {
        count: 0,
        variant: cell.badge?.variant || cell.variant || 'notice',
      }

      valueMap.set(value, {
        count: existing.count + 1,
        variant: existing.variant,
      })
    })

    return Array.from(valueMap.entries()).map(([value, data]) => ({
      value,
      count: data.count,
      variant: data.variant,
    }))
  }

  private handleFilterSelect(e: CustomEvent) {
    // Make sure we're getting the correct value from the event
    const selectedValues = Array.isArray(e.detail.value) ? e.detail.value : []
    this.selectedFilterValues = selectedValues
    this.filterData()

    // Dispatch an event if needed
    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: {
          filterValues: this.selectedFilterValues,
        },
      }),
    )
  }

  private filterData() {
    let filtered = this.data

    // Apply search filter
    if (this.searchQuery) {
      filtered = filtered.filter((row) => {
        return row.cells.some((cell, index) => {
          // Only search in visible columns
          if (!this.columns[index].visible) return false

          const searchableContent = [
            cell.value,
            cell.supportingText,
            cell.badge?.label,
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase()

          return searchableContent.includes(this.searchQuery)
        })
      })
    }

    // Apply branch filter
    if (this.selectedFilterValues.length > 0) {
      const branchColumnIndex = this.columns.findIndex(
        (col) => col.key === 'branch',
      )
      if (branchColumnIndex !== -1) {
        filtered = filtered.filter((row) => {
          const cellValue =
            row.cells[branchColumnIndex].badge?.label ||
            row.cells[branchColumnIndex].value
          return this.selectedFilterValues.includes(cellValue)
        })
      }
    }

    this.filteredData = filtered
    this.requestUpdate()
  }

  private handleColumnVisibility(e: CustomEvent) {
    const selectedColumns = Array.isArray(e.detail.value) ? e.detail.value : []

    // Update column visibility
    this.columns = this.columns.map((col) => ({
      ...col,
      visible: selectedColumns.includes(col.key),
    }))

    this.requestUpdate()

    this.dispatchEvent(
      new CustomEvent('column-visibility-change', {
        detail: {
          visibleColumns: selectedColumns,
        },
      }),
    )
  }

  // Add this getter for visible columns
  private get visibleColumns() {
    return this.columns.filter((col) => col.visible)
  }

  render() {
    return html`
      <gds-flex flex-direction="column" gap="s">
        <gds-flex data-title="Filter" flex="1" width="100%">
          <gds-flex data-title="Search" gap="s" z-index="1">
            <gds-input
              size="small"
              plain
              placeholder="Search data"
              clearable
              width="400px"
              .value=${this.searchQuery}
              @input=${this.handleSearch}
            >
              <gds-icon-search-menu slot="lead"></gds-icon-search-menu>
            </gds-input>

            <gds-dropdown
              size="small"
              searchable
              plain
              combobox
              multiple
              placeholder="Filter"
              .value=${this.selectedFilterValues}
              @change=${this.handleFilterSelect}
            >
              <gds-option isplaceholder>Filter by branches</gds-option>
              ${this.getUniqueValuesForColumn('branch').map(
                (item) => html`
                  <gds-option value=${item.value}>
                    <span>${item.value}</span>
                    <gds-badge
                      variant=${item.variant || 'none'}
                      size="small"
                      rounded
                      >${item.count}</gds-badge
                    >
                  </gds-option>
                `,
              )}
            </gds-dropdown>
          </gds-flex>
          <gds-flex margin="0 0 0 auto" gap="s" align-items="center">
            <gds-button size="small" rank="tertiary">
              <gds-icon-pencil-sparkle slot="lead"></gds-icon-pencil-sparkle>
              Compact
            </gds-button>
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
                    <gds-flex align-items="center" gap="s">
                      ${column.label}
                      ${column.dragaggable
                        ? html`
                            <gds-badge variant="notice" size="small"
                              >Draggable</gds-badge
                            >
                          `
                        : nothing}
                      ${column.sortable
                        ? html`
                            <gds-badge variant="positive" size="small"
                              >Sortable</gds-badge
                            >
                          `
                        : nothing}
                    </gds-flex>
                  </gds-option>
                `,
              )}
            </gds-dropdown>
          </gds-flex>
        </gds-flex>

        <gds-flex
          flex-direction="column"
          border-radius="xs"
          border-style="solid"
          border-width="4xs"
        >
          <gds-table-row class="table-head">
            <input type="checkbox" slot="lead" />

            ${this.columns
              .filter((column) => column.visible)
              .map(
                (column) => html`
                  <gds-table-cell
                    ?draggable=${column.dragaggable}
                    class=${this.draggedColumn === column.key ? 'dragging' : ''}
                    @cell-dragstart=${(e: CustomEvent) =>
                      this.handleDragStart(e.detail, column.key)}
                    @cell-dragover=${(e: CustomEvent) =>
                      this.handleDragOver(e.detail, column.key)}
                    @cell-dragend=${(e: CustomEvent) =>
                      this.handleDragEnd(e.detail)}
                    @cell-drop=${(e: CustomEvent) =>
                      this.handleDrop(e.detail, column.key)}
                  >
                    ${column.dragaggable
                      ? html`
                          <gds-icon-dot-grid-two
                            slot="lead"
                          ></gds-icon-dot-grid-two>
                        `
                      : nothing}
                    ${column.label}
                    ${column.sortable
                      ? html`
                          <gds-button
                            slot="trail"
                            size="xs"
                            rank="tertiary"
                            class=${this.sortConfig.column === column.key
                              ? `sort-${this.sortConfig.direction}`
                              : ''}
                            @click=${(e: MouseEvent) => {
                              e.stopPropagation()
                              if (column.sortable) this.handleSort(column.key)
                            }}
                          >
                            <gds-icon-arrow-bottom-top
                              size="s"
                            ></gds-icon-arrow-bottom-top>
                          </gds-button>
                        `
                      : nothing}
                  </gds-table-cell>
                `,
              )}
          </gds-table-row>

          <!-- Data Rows -->
          ${this.filteredData.map(
            (row) => html`
              <gds-table-row
                ?sortable=${row.sortable}
                ?selectable=${row.selectable}
                href=${row.href || ''}
                variant=${row.variant || ''}
              >
                ${row.sortable
                  ? html`
                      <gds-icon-dot-grid-two
                        slot="drag"
                      ></gds-icon-dot-grid-two>
                    `
                  : nothing}

                <input type="checkbox" slot="lead" />

                ${row.cells.map((cell, index) =>
                  // Only render cells for visible columns
                  this.columns[index].visible
                    ? html`
                        <gds-table-cell variant=${cell.variant || ''}>
                          ${cell.icon
                            ? this.renderIcon(
                                cell.icon.name,
                                cell.icon.slot,
                                cell.icon.size,
                              )
                            : nothing}
                          ${cell.badge
                            ? html`
                                <gds-badge
                                  variant=${cell.badge.variant}
                                  size="small"
                                  slot="lead"
                                >
                                  ${cell.badge.label}
                                </gds-badge>
                              `
                            : nothing}
                          ${cell.value}
                          ${cell.supportingText
                            ? html`
                                <span slot="supporting-text"
                                  >${cell.supportingText}</span
                                >
                              `
                            : nothing}
                          ${cell.options
                            ? html`
                                <gds-context-menu slot="trail">
                                  ${cell.options.map(
                                    (option) => html`
                                      <gds-menu-item
                                        >${option.label}</gds-menu-item
                                      >
                                    `,
                                  )}
                                </gds-context-menu>
                              `
                            : nothing}
                        </gds-table-cell>
                      `
                    : nothing,
                )}
                ${row.href
                  ? html`
                      <gds-icon-chevron-right
                        slot="trail"
                      ></gds-icon-chevron-right>
                    `
                  : html`
                      <gds-button slot="trail" rank="tertiary" size="xs">
                        <gds-icon-dot-grid-one-vertical size="s">
                        </gds-icon-dot-grid-one-vertical>
                      </gds-button>
                    `}
              </gds-table-row>
            `,
          )}

          <gds-table-row href="#" variant="primary">
            <input type="checkbox" slot="lead" />
            <gds-table-cell>
              <gds-text tag="small">
                Use this row to have a documentation link or no matter what just
                simply all of it
              </gds-text>
            </gds-table-cell>
            <gds-icon-chevron-right slot="trail"></gds-icon-chevron-right>
          </gds-table-row>
        </gds-flex>
        <!-- Footer -->
        <gds-flex align-items="center" gap="s">
          <gds-text tag="small" color="secondary">
            0 of 100 row(s) selected.
          </gds-text>
          <gds-flex margin="0 0 0 auto" gap="s">
            <gds-flex align-items="center" gap="xs">
              <gds-button size="xs" rank="tertiary">
                <gds-icon-chevron-double-left></gds-icon-chevron-double-left>
              </gds-button>
              <gds-button size="xs" rank="tertiary">
                <gds-icon-chevron-left size="s"></gds-icon-chevron-left>
              </gds-button>
              <gds-text tag="small"> Page 1 of 10 </gds-text>
              <gds-button size="xs" rank="tertiary">
                <gds-icon-chevron-right size="s"></gds-icon-chevron-right>
              </gds-button>
              <gds-button size="xs" rank="tertiary">
                <gds-icon-chevron-double-right></gds-icon-chevron-double-right>
              </gds-button>
            </gds-flex>

            <gds-card
              flex-direction="row"
              padding="2xs 2xs 2xs s"
              gap="xs"
              align-items="center"
              variant="secondary"
            >
              <gds-dropdown size="small" searchable plain>
                <gds-option value="10"> 10 </gds-option>
                <gds-option value="20"> 10 </gds-option>
                <gds-option value="40"> 10 </gds-option>
                <gds-option value="100"> 10 </gds-option>
                <gds-option value="1000"> 10 </gds-option>
              </gds-dropdown>
            </gds-card>
          </gds-flex>
        </gds-flex>
      </gds-flex>
    `
  }
}
