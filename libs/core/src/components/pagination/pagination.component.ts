// pagination.component.ts
import { css } from 'lit'
import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsButton } from '../button/button.component'
import { GdsDropdown } from '../dropdown/dropdown.component'
import { IconChevronDoubleLeft } from '../icon/icons/chevron-double-left.component'
import { IconChevronDoubleRight } from '../icon/icons/chevron-double-right.component'
import { IconChevronLeftSmall } from '../icon/icons/chevron-left-small.component'
import { IconChevronRightSmall } from '../icon/icons/chevron-right-small.component'

@gdsCustomElement('gds-pagination', {
  dependsOn: [
    GdsButton,
    GdsDropdown,
    IconChevronLeftSmall,
    IconChevronDoubleLeft,
    IconChevronRightSmall,
    IconChevronDoubleRight,
  ],
})
export class GdsPagination extends GdsElement {
  static styles = [
    css`
      :host {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .pagination {
        display: flex;
        gap: 4px;
      }
    `,
  ]

  @property({ type: Number })
  page = 1

  @property({ type: Number })
  pageSize = 10

  @property({ type: Number })
  total = 0

  @property({ type: Array })
  pageSizes = [5, 10, 25, 50]

  private get pageCount() {
    return Math.ceil(this.total / this.pageSize)
  }

  private getVisiblePages(pageCount: number) {
    if (pageCount <= 7) {
      return Array.from({ length: pageCount }, (_, i) => i + 1)
    }

    const lastPage = pageCount
    let middlePages: number[] = []

    if (this.page <= 4) {
      middlePages = [2, 3, 4, 5]
      return [1, ...middlePages, '...', lastPage]
    } else if (this.page >= pageCount - 3) {
      middlePages = [pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1]
      return [1, '...', ...middlePages, lastPage]
    } else {
      middlePages = [this.page - 1, this.page, this.page + 1]
      return [1, '...', ...middlePages, '...', lastPage]
    }
  }

  render() {
    const pageCount = this.pageCount
    const visiblePages = this.getVisiblePages(pageCount)

    return html`
      <div class="pagination">
        <gds-button
          size="small"
          rank="tertiary"
          ?disabled=${this.page === 1}
          @click=${() => this.handlePageChange(1)}
        >
          <gds-icon-chevron-double-left size="l">
          </gds-icon-chevron-double-left>
        </gds-button>

        <gds-button
          size="small"
          rank="tertiary"
          ?disabled=${this.page === 1}
          @click=${() => this.handlePageChange(this.page - 1)}
        >
          <gds-icon-chevron-left-small size="l"> </gds-icon-chevron-left-small>
        </gds-button>

        ${visiblePages.map(
          (p) => html`
            ${p === '...'
              ? html`<gds-button size="small" rank="tertiary" width="40px" inert
                  >...</gds-button
                >`
              : html`
                  <gds-button
                    size="small"
                    rank="${this.page === p ? 'primary' : 'tertiary'}"
                    @click=${() => this.handlePageChange(p)}
                  >
                    ${p}
                  </gds-button>
                `}
          `,
        )}

        <gds-button
          rank="tertiary"
          size="small"
          ?disabled=${this.page === pageCount}
          @click=${() => this.handlePageChange(this.page + 1)}
        >
          <gds-icon-chevron-right-small size="l">
          </gds-icon-chevron-right-small>
        </gds-button>

        <gds-button
          rank="tertiary"
          size="small"
          ?disabled=${this.page === pageCount}
          @click=${() => this.handlePageChange(pageCount)}
        >
          <gds-icon-chevron-double-right size="l">
          </gds-icon-chevron-double-right>
        </gds-button>
      </div>

      <gds-dropdown plain size="small" @change=${this.handlePageSizeChange}>
        ${this.pageSizes.map(
          (size) => html`
            <gds-option value=${size} ?selected=${this.pageSize === size}>
              ${size} per page
            </gds-option>
          `,
        )}
      </gds-dropdown>
    `
  }

  private handlePageChange(newPage: number) {
    this.dispatchEvent(
      new CustomEvent('page-change', {
        detail: { page: newPage },
        bubbles: true,
      }),
    )
  }

  private handlePageSizeChange(e: CustomEvent) {
    this.dispatchEvent(
      new CustomEvent('page-size-change', {
        detail: { pageSize: Number(e.detail.value) },
        bubbles: true,
      }),
    )
  }
}
