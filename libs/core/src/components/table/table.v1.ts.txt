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
import '../flex'
import '../input'
import '../context-menu'
import '../icon/icons/ai'
import '../icon/icons/car'
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
            >
              <gds-option isplaceholder>Filter by branches</gds-option>
              <gds-option value="columns">
                <span>Branch One</span>
                <gds-badge variant="notice" size="small" rounded>
                  24
                </gds-badge>
              </gds-option>
              <gds-option value="branch-two">
                <span>Branch Two</span>
                <gds-badge variant="notice" size="small" rounded>
                  24
                </gds-badge>
              </gds-option>
            </gds-dropdown>
          </gds-flex>
          <gds-flex margin="0 0 0 auto" gap="s" align-items="center">
            <gds-button size="small" rank="tertiary">
              <gds-icon-pencil-sparkle slot="lead"></gds-icon-pencil-sparkle>
              Compact
            </gds-button>
            <gds-dropdown size="small" searchable plain>
              <gds-option value="columns">Columns</gds-option>
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
            <gds-table-cell>
              <gds-icon-dot-grid-two slot="lead"></gds-icon-dot-grid-two>
              Head column
              <gds-button slot="trail" size="xs" rank="tertiary">
                <gds-icon-arrow-bottom-top size="s"></gds-icon-arrow-bottom-top>
              </gds-button>
            </gds-table-cell>
            <gds-table-cell>
              <gds-icon-dot-grid-two slot="lead"></gds-icon-dot-grid-two>
              Head column
              <gds-button slot="trail" size="xs" rank="tertiary">
                <gds-icon-arrow-bottom-top size="s"></gds-icon-arrow-bottom-top>
              </gds-button>
            </gds-table-cell>
            <gds-table-cell> Unsorted column </gds-table-cell>
          </gds-table-row>

          <gds-table-row data-title="First cell title">
            <gds-icon-dot-grid-two slot="drag"></gds-icon-dot-grid-two>
            <input type="checkbox" slot="lead" />
            <gds-table-cell>
              <gds-icon-car slot="lead"></gds-icon-car>
              Hello cell with custom select
              <span slot="supporting-text">Supporting text</span>
            </gds-table-cell>
            <gds-table-cell>
              <gds-icon-ai slot="lead"></gds-icon-ai>
              Hello cell
            </gds-table-cell>
            <gds-table-cell>
              <gds-icon-ai slot="lead"></gds-icon-ai>
              With cell options
              <gds-context-menu slot="trail">
                <gds-menu-item>Action 1</gds-menu-item>
                <gds-menu-item>Action 2</gds-menu-item>
                <gds-menu-item>Action 3</gds-menu-item>
              </gds-context-menu>
            </gds-table-cell>
            <gds-button slot="trail" rank="tertiary" size="xs">
              <gds-icon-dot-grid-one-vertical
                size="s"
              ></gds-icon-dot-grid-one-vertical>
            </gds-button>
          </gds-table-row>
          <gds-table-row sortable selectable data-title="First cell title">
            <gds-icon-dot-grid-two slot="drag"></gds-icon-dot-grid-two>
            <input type="checkbox" slot="lead" />
            <gds-table-cell variant="notice">
              <gds-badge variant="notice" slot="lead" size="small">
                Docs
              </gds-badge>
              And this is just regular information
            </gds-table-cell>
            <gds-table-cell variant="positive">
              <gds-badge variant="positive" slot="lead" size="small">
                New
              </gds-badge>
              This can be something new
            </gds-table-cell>
            <gds-table-cell variant="warning">
              <gds-badge variant="warning" slot="lead" size="small">
                Deprecated
              </gds-badge>
              With a badge
            </gds-table-cell>
          </gds-table-row>
          <gds-table-row sortable selectable data-title="First cell title">
            <gds-icon-dot-grid-two slot="drag"></gds-icon-dot-grid-two>
            <input type="checkbox" slot="lead" />
            <gds-table-cell> Hello cell </gds-table-cell>
            <gds-table-cell editable>
              <gds-icon-ai slot="lead"></gds-icon-ai>
              Hello cell
            </gds-table-cell>
            <gds-table-cell> Hello cell </gds-table-cell>
          </gds-table-row>
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
