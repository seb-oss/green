import { nothing, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'

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
import './cell'
import './row'
import './filter'
import './footer'
import './head'
import './select'

/**
 * @element gds-table
 */
@gdsCustomElement('gds-table')
export class GdsTable extends GdsElement {
  static styles = [tokens, unsafeCSS(style)]
  @property({ type: Array })
  columns = [
    { key: 'title', label: 'Title', sortable: true, filterable: true },
    { key: 'services', label: 'Services', sortable: true, filterable: true },
    { key: 'branches', label: 'Branches', sortable: true, filterable: true },
    { key: 'street', label: 'Street', sortable: true, filterable: true },
  ]

  private handleColumnReorder(e: CustomEvent) {
    const { sourceColumn, targetColumn } = e.detail
    // Implement column reordering logic
  }

  private handleSort(e: CustomEvent) {
    const { column, direction } = e.detail
    // Implement sorting logic
  }

  private handleFilter(e: CustomEvent) {
    const { filters } = e.detail
    // Implement filtering logic
  }
  render() {
    return html`
      <div class="gds-table">
        <gds-table-filter></gds-table-filter>
        <div class="gds-table-content">
          <gds-table-head
            .columns=${this.columns}
            .selectable=${true}
            @column-reorder=${this.handleColumnReorder}
            @sort-change=${this.handleSort}
            @filter-change=${this.handleFilter}
          >
            <gds-table-select slot="lead"></gds-table-select>
          </gds-table-head>
          <gds-table-row href="#" selectable>
            <gds-table-select slot="lead"></gds-table-select>
            <gds-table-cell> Linked row </gds-table-cell>
          </gds-table-row>
          <gds-table-row hasOptions selectable>
            <gds-table-select slot="lead"></gds-table-select>
            <gds-table-cell> Hello cell </gds-table-cell>
            <gds-table-cell> Hello cell </gds-table-cell>
            <gds-table-cell> Hello cell </gds-table-cell>
            <!-- Custom options menu -->
            <div slot="options">
              <gds-dropdown>
                <gds-option>Custom Option 1</gds-option>
                <gds-option>Custom Option 2</gds-option>
              </gds-dropdown>
            </div>
          </gds-table-row>
          <gds-table-row sortable selectable>
            <gds-table-select slot="lead"></gds-table-select>
            <gds-table-cell> Hello cell </gds-table-cell>
          </gds-table-row>
          <gds-table-row sortable selectable>
            <gds-table-select slot="lead"></gds-table-select>
            <gds-table-cell> Hello cell </gds-table-cell>
            <gds-table-cell editable>
              <gds-icon-ai slot="lead"></gds-icon-ai>
              Hello cell
            </gds-table-cell>
            <gds-table-cell> Hello cell </gds-table-cell>
          </gds-table-row>
        </div>
        <gds-table-footer></gds-table-footer>
      </div>
    `
  }
}
