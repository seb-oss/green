import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsButton } from '../button/button.component'
import {
  GdsContextMenu,
  GdsMenuItem,
} from '../context-menu/context-menu.component'
import { GdsDropdown } from '../dropdown/dropdown.component'
import { IconChevronBottom } from '../icon/icons/chevron-bottom.component'
import { IconChevronDoubleLeft } from '../icon/icons/chevron-double-left.component'
import { IconChevronDoubleRight } from '../icon/icons/chevron-double-right.component'
import { IconChevronLeftSmall } from '../icon/icons/chevron-left-small.component'
import { IconChevronRightSmall } from '../icon/icons/chevron-right-small.component'
import { GdsText } from '../text/text.component'
import { PaginationStyles } from './pagination.styles'

/**
 * @element gds-pagination
 * @status beta
 *
 * ⚠️ Declare events
 */
@gdsCustomElement('gds-pagination', {
  dependsOn: [
    GdsButton,
    GdsText,
    GdsDropdown,
    GdsContextMenu,
    GdsMenuItem,
    IconChevronBottom,
    IconChevronLeftSmall,
    IconChevronDoubleLeft,
    IconChevronRightSmall,
    IconChevronDoubleRight,
  ],
})
export class GdsPagination extends GdsElement {
  static styles = [tokens, PaginationStyles]

  @property({ type: Number })
  page = 1

  @property({ type: Number })
  rows = 10

  @property({ type: Number })
  total = 0

  @property({ type: Array })
  options = [5, 10, 25, 50]

  @property({ type: Boolean })
  jump = false

  get #pageCount() {
    return Math.ceil(this.total / this.rows)
  }

  #getVisiblePages(pageCount: number) {
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
    const pageCount = this.#pageCount
    const visiblePages = this.#getVisiblePages(pageCount)

    return html`
      <div class="pages">
        ${when(
          this.jump,
          () => html`
            <gds-button
              size="small"
              rank="secondary"
              ?disabled=${this.page === 1}
              @click=${() => this.#handlePageChange(1)}
            >
              <gds-icon-chevron-double-left size="l">
              </gds-icon-chevron-double-left>
            </gds-button>
          `,
        )}

        <gds-button
          size="small"
          rank="secondary"
          ?disabled=${this.page === 1}
          @click=${() => this.#handlePageChange(this.page - 1)}
        >
          <gds-icon-chevron-left-small size="l"> </gds-icon-chevron-left-small>
        </gds-button>

        ${visiblePages.map(
          (p) => html`
            ${p === '...'
              ? html`<gds-button
                  size="small"
                  rank="tertiary"
                  width="40px"
                  inert
                >
                  ...
                </gds-button>`
              : html`
                  <gds-button
                    size="small"
                    rank="${this.page === p ? 'primary' : 'tertiary'}"
                    @click=${() => this.#handlePageChange(p as number)}
                  >
                    ${p}
                  </gds-button>
                `}
          `,
        )}

        <gds-button
          size="small"
          rank="secondary"
          ?disabled=${this.page === pageCount}
          @click=${() => this.#handlePageChange(this.page + 1)}
        >
          <gds-icon-chevron-right-small size="l">
          </gds-icon-chevron-right-small>
        </gds-button>
        ${when(
          this.jump,
          () => html`
            <gds-button
              rank="secondary"
              size="small"
              ?disabled=${this.page === pageCount}
              @click=${() => this.#handlePageChange(pageCount)}
            >
              <gds-icon-chevron-double-right size="l">
              </gds-icon-chevron-double-right>
            </gds-button>
          `,
        )}
      </div>

      <gds-context-menu @gds-menu-item-click=${this.#handlePageSizeMenuClick}>
        <gds-button slot="trigger" size="small" rank="secondary">
          ${this.rows}
          <gds-icon-chevron-bottom
            slot="trail"
            size="m"
          ></gds-icon-chevron-bottom>
        </gds-button>
        ${this.options.map(
          (size) => html`
            <gds-menu-item
              data-value=${size}
              class=${classMap({
                selected: this.rows === size,
              })}
            >
              ${size}
            </gds-menu-item>
          `,
        )}
      </gds-context-menu>
    `
  }

  #handlePageChange(newPage: number) {
    this.dispatchEvent(
      new CustomEvent('gds-page-change', {
        detail: { page: newPage },
        bubbles: true,
      }),
    )
  }

  #handlePageSizeMenuClick(e: CustomEvent) {
    const item = e.target as HTMLElement
    const limit = parseInt(item.dataset.value || '10')

    if (limit !== this.rows) {
      this.dispatchEvent(
        new CustomEvent('gds-rows-change', {
          detail: { rows: limit },
          bubbles: true,
        }),
      )
    }
  }
}
