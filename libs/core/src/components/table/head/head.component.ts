import { nothing, unsafeCSS } from 'lit'
import { property, state } from 'lit/decorators.js'

import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import style from './head.styles.css?inline'

import '../../input'
import '../../dropdown'
import '../../button'

// import '../../icon/icons/dot-grid-two'
// import '../../icon/icons/filter'
// import '../../icon/icons/chevron-up'

interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  filterable?: boolean
  width?: string
}

interface SortConfig {
  column: string
  direction: 'asc' | 'desc'
}

/**
 * @element gds-table-head
 */
@gdsCustomElement('gds-table-head')
export class GdsTableHead extends GdsElement {
  static styles = [unsafeCSS(style)]

  @property({ type: Array })
  columns: TableColumn[] = []

  @property({ type: Boolean })
  selectable = false

  @property({ type: Boolean })
  allSelected = false

  @state()
  private draggedColumn: string | null = null

  @state()
  private dragOverColumn: string | null = null

  @state()
  private sortConfig: SortConfig | null = null

  @state()
  private activeFilters: Record<string, any> = {}

  private handleSelectAll(e: Event) {
    const checked = (e.target as HTMLInputElement).checked
    this.dispatchEvent(
      new CustomEvent('select-all', {
        detail: { selected: checked },
      }),
    )
  }

  private handleDragStart(e: DragEvent, columnKey: string) {
    this.draggedColumn = columnKey
    e.dataTransfer?.setData('text/plain', columnKey)
  }

  private handleDragOver(e: DragEvent, columnKey: string) {
    e.preventDefault()
    if (this.draggedColumn !== columnKey) {
      this.dragOverColumn = columnKey
    }
  }

  private handleDrop(e: DragEvent, targetColumnKey: string) {
    e.preventDefault()
    if (!this.draggedColumn || this.draggedColumn === targetColumnKey) return

    this.dispatchEvent(
      new CustomEvent('column-reorder', {
        detail: {
          sourceColumn: this.draggedColumn,
          targetColumn: targetColumnKey,
        },
      }),
    )

    this.draggedColumn = null
    this.dragOverColumn = null
  }

  private handleSort(column: TableColumn) {
    if (!column.sortable) return

    let direction: 'asc' | 'desc' = 'asc'
    if (this.sortConfig?.column === column.key) {
      direction = this.sortConfig.direction === 'asc' ? 'desc' : 'asc'
    }

    this.sortConfig = {
      column: column.key,
      direction,
    }

    this.dispatchEvent(
      new CustomEvent('sort-change', {
        detail: { ...this.sortConfig },
      }),
    )
  }

  private handleFilter(column: TableColumn, value: any) {
    this.activeFilters = {
      ...this.activeFilters,
      [column.key]: value,
    }

    this.dispatchEvent(
      new CustomEvent('filter-change', {
        detail: { filters: this.activeFilters },
      }),
    )
  }

  private renderFilterMenu(column: TableColumn) {
    return html`
      <gds-dropdown
        class="filter-menu"
        @change=${(e: CustomEvent) => this.handleFilter(column, e.detail.value)}
      >
        <gds-option value="">All</gds-option>
        <gds-option value="option1">Option 1</gds-option>
        <gds-option value="option2">Option 2</gds-option>
      </gds-dropdown>
    `
  }

  render() {
    return html`
      <div class="gds-table-head">
        ${this.selectable ? html`<slot name="lead"></slot>` : nothing}
        ${this.columns.map(
          (column) => html`
            <div
              class="head-cell ${this.draggedColumn === column.key
                ? 'dragging'
                : ''} 
                           ${this.dragOverColumn === column.key
                ? 'drag-over'
                : ''}"
              draggable="true"
              @dragstart=${(e: DragEvent) =>
                this.handleDragStart(e, column.key)}
              @dragover=${(e: DragEvent) => this.handleDragOver(e, column.key)}
              @drop=${(e: DragEvent) => this.handleDrop(e, column.key)}
            >
              <div class="drag-handle">
                <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
              </div>

              <div
                class="column-label ${column.sortable ? 'sortable' : ''}"
                @click=${() => this.handleSort(column)}
              >
                ${column.label}
                ${column.sortable && this.sortConfig?.column === column.key
                  ? html`
                      ${this.sortConfig.direction === 'asc' ? 'up' : 'down'}
                      <!-- <gds-icon-chevron-${this.sortConfig.direction ===
                      'asc'
                        ? 'up'
                        : 'bottom'}></gds-icon-chevron-${this.sortConfig
                        .direction === 'asc'
                        ? 'up'
                        : 'down'}> -->
                    `
                  : nothing}
              </div>

              ${column.filterable
                ? html`
                    <div class="filter-trigger">
                      <gds-button
                        size="small"
                        rank="tertiary"
                        class="filter-button ${this.activeFilters[column.key]
                          ? 'active'
                          : ''}"
                        @click=${(e: MouseEvent) => {
                          const button = e.currentTarget as HTMLElement
                          button.classList.toggle('show-menu')
                        }}
                      >
                        <gds-icon-filter></gds-icon-filter>
                      </gds-button>
                      ${this.renderFilterMenu(column)}
                    </div>
                  `
                : nothing}
            </div>
          `,
        )}
      </div>
    `
  }
}
