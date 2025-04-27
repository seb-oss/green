import { nothing, unsafeCSS } from 'lit'
import { property } from 'lit/decorators.js'

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
            ${this.columns.map(
              (column) => html`
                <gds-table-cell>
                  <gds-icon-dot-grid-two slot="lead"></gds-icon-dot-grid-two>
                  ${column.label}
                  ${column.sortable
                    ? html`
                        <gds-button slot="trail" size="xs" rank="tertiary">
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
          ${this.data.map(
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

                ${row.cells.map(
                  (cell) => html`
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
                                  <gds-menu-item>${option.label}</gds-menu-item>
                                `,
                              )}
                            </gds-context-menu>
                          `
                        : nothing}
                    </gds-table-cell>
                  `,
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
