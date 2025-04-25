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

  data = DUMMY_DATA

  @state()
  private filteredData = this.data

  @state()
  private selectedBranches: string[] = []

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

  // Handle branch selection
  private handleBranchFilter(e: CustomEvent) {
    this.selectedBranches = e.detail.value
    this.filterDataByBranches()
  }
  render() {
    const branchesWithCounts = this.getBranchesWithCounts()

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
              <gds-option isplaceholder
                >Filter by branches (${branchesWithCounts.length})</gds-option
              >
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
            <gds-dropdown size="small" searchable plain>
              <gds-option value="columns">Columns</gds-option>
            </gds-dropdown>
          </div>
        </gds-div>

        <!-- Table Content -->
        <div class="gds-table-content">
          <!-- Table Header Row -->
          <div class="gds-table-row gds-table-head">
            <div class="gds-row-select">
              <input type="checkbox" />
            </div>
            ${['Title', 'Services', 'Branches', 'Street'].map(
              (header) => html`
                <div class="gds-table-head-column">
                  <div class="column-name">${header}</div>
                  <gds-icon-filter></gds-icon-filter>
                </div>
              `,
            )}
          </div>

          <!-- Table Rows -->
          ${this.filteredData.map(
            (row) => html`
              <div class="gds-table-row">
                <div class="gds-row-drag">
                  <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
                </div>
                <div class="gds-row-select">
                  <input type="checkbox" />
                </div>

                <!-- Title Cell -->
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

                <!-- Status Cell -->
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

                <!-- Branch Cell -->
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

                <!-- Street Cell -->
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

                <!-- Options Cell -->
                <div class="gds-row-options">
                  <gds-icon-dot-grid-one-vertical></gds-icon-dot-grid-one-vertical>
                </div>
              </div>
            `,
          )}
        </div>

        <!-- Table Footer -->
        <div class="gds-table-footer">
          <gds-flex flex="1">
            0 of ${this.data.length} row(s) selected.
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
