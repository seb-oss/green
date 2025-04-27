import { nothing, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import style from './table.styles.css?inline'

import '../dropdown'
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
          <gds-table-row class="table-head">
            <input type="checkbox" slot="lead" />
            <gds-table-cell>
              <gds-icon-dot-grid-two slot="lead"></gds-icon-dot-grid-two>
              Head column
              <gds-button slot="trail" size="xs" rank="tertiary">
                <gds-icon-filter></gds-icon-filter>
              </gds-button>
            </gds-table-cell>
          </gds-table-row>
          <gds-table-row href="#">
            <input type="checkbox" slot="lead" />
            <gds-table-cell> Linked row </gds-table-cell>
            <gds-icon-chevron-right slot="trail"></gds-icon-chevron-right>
          </gds-table-row>
          <gds-table-row data-title="First cell title">
            <gds-icon-dot-grid-two slot="drag"></gds-icon-dot-grid-two>
            <input type="checkbox" slot="lead" />
            <gds-table-cell>
              <gds-icon-car slot="lead"></gds-icon-car>
              Hello cell with custom select
              <span slot="supporting-text">Supporting text</span>
            </gds-table-cell>
            <gds-table-cell> Hello cell </gds-table-cell>
            <gds-table-cell>
              Hello cell
              <gds-button size="xs" rank="tertiary" slot="trail">
                ...
              </gds-button>
            </gds-table-cell>
            <div slot="trail">
              <gds-dropdown>
                <gds-option>Custom Option 1</gds-option>
                <gds-option>Custom Option 2</gds-option>
              </gds-dropdown>
            </div>
          </gds-table-row>
          <gds-table-row sortable selectable data-title="First cell title">
            <input type="checkbox" slot="lead" />
            <gds-table-cell> Hello cell </gds-table-cell>
          </gds-table-row>
          <gds-table-row sortable selectable data-title="First cell title">
            <input type="checkbox" slot="lead" />
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
