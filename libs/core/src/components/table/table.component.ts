import { nothing, unsafeCSS } from 'lit'

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

/**
 * @element gds-table
 */
@gdsCustomElement('gds-table')
export class GdsTable extends GdsElement {
  static styles = [tokens, unsafeCSS(style)]

  render() {
    return html`
      <div class="gds-table">
        <gds-table-filter></gds-table-filter>
        <div class="gds-table-content">
          <div class="gds-table-row gds-table-head">
            <div class="gds-row-select">
              <input type="checkbox" />
            </div>
            <div class="gds-table-head-column">
              <div class="column-name">Title</div>
              <gds-icon-filter></gds-icon-filter>
            </div>
            <div class="gds-table-head-column">
              <div class="column-name">Services</div>
              <gds-icon-filter></gds-icon-filter>
            </div>
            <div class="gds-table-head-column">
              <div class="column-name">Branches</div>
              <gds-icon-filter></gds-icon-filter>
            </div>
            <div class="gds-table-head-column">
              <div class="column-name">Street</div>
              <gds-icon-filter></gds-icon-filter>
            </div>
          </div>
          <gds-table-row href="#">
            <gds-table-cell> Hello cell </gds-table-cell>
          </gds-table-row>
          <gds-table-row hasOptions>
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
            <gds-table-cell> Hello cell </gds-table-cell>
          </gds-table-row>
        </div>
        <gds-table-footer></gds-table-footer>
      </div>
    `
  }
}
