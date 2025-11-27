import { property, query, state } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { when } from 'lit/directives/when.js'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { watchMediaQuery } from '../../utils/decorators'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'
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
import { IconChevronRight } from '../icon/icons/chevron-right.component'
import { GdsInput } from '../input/input.component'
import { GdsPopover } from '../popover/popover.component'
import { GdsText } from '../text/text.component'
import { PaginationStyles } from './pagination.styles'

/**
 * @element gds-pagination
 * @status beta
 */
@gdsCustomElement('gds-pagination', {
  dependsOn: [
    GdsButton,
    GdsPopover,
    GdsText,
    GdsInput,
    GdsDropdown,
    GdsContextMenu,
    GdsMenuItem,
    IconChevronBottom,
    IconChevronLeftSmall,
    IconChevronDoubleLeft,
    IconChevronRight,
    IconChevronRightSmall,
    IconChevronDoubleRight,
  ],
})
export class GdsPagination extends withMarginProps(
  withSizeXProps(withLayoutChildProps(GdsElement)),
) {
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

  @query('#page-input')
  private _elInput?: HTMLElement

  @state() private _isMobile = false

  @watchMediaQuery('(max-width: 768px)')
  _handleMobile(matches: boolean) {
    this._isMobile = matches
  }

  get #pageCount() {
    return Math.ceil(this.total / this.rows)
  }

  #getVisiblePages(pageCount: number): (number | string)[] {
    if (pageCount <= 7) {
      return Array.from({ length: pageCount }, (_, i) => i + 1)
    }

    const lastPage = pageCount
    const pages: (number | string)[] = []

    pages.push(1)

    if (this.page <= 4) {
      pages.push(2, 3, 4, 5, '...', lastPage)
    } else if (this.page >= pageCount - 3) {
      pages.push(
        '...',
        pageCount - 4,
        pageCount - 3,
        pageCount - 2,
        pageCount - 1,
        lastPage,
      )
    } else {
      pages.push(
        '...',
        this.page - 1,
        this.page,
        this.page + 1,
        '...',
        lastPage,
      )
    }

    return pages
  }

  #renderPageButton(page: number | string) {
    if (page === '...') {
      return html`
        <gds-popover
          disableMobileStyles
          @gds-ui-state=${this.#handlePopoverStateChange}
        >
          <gds-button size="small" rank="tertiary" slot="trigger">
            ...
          </gds-button>
          <gds-flex
            flex-direction="column"
            padding="s"
            width="140px"
            max-height="280px"
          >
            <gds-input
              size="small"
              label="Go to page"
              type="number"
              min="1"
              max="${this.#pageCount}"
              @change=${this.#handleCustomPageInput}
            >
              <gds-button
                size="xs"
                rank="secondary"
                @click=${this.#handleCustomPageInput}
                slot="trail"
              >
                <gds-icon-chevron-right></gds-icon-chevron-right>
              </gds-button>
            </gds-input>
          </gds-flex>
        </gds-popover>
      `
    }

    const pageNum = page as number
    const isActive = this.page === pageNum

    return html`
      <gds-button
        size="small"
        rank="${isActive ? 'primary' : 'tertiary'}"
        @click=${() => this.#handlePageChange(pageNum)}
      >
        ${pageNum}
      </gds-button>
    `
  }

  #renderPageButtons() {
    const pageCount = this.#pageCount
    const visiblePages = this.#getVisiblePages(pageCount)

    return html` ${visiblePages.map((page) => this.#renderPageButton(page))} `
  }

  #renderJumpFirstButton() {
    return html`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page === 1}
        @click=${() => this.#handlePageChange(1)}
      >
        <gds-icon-chevron-double-left size="l"></gds-icon-chevron-double-left>
      </gds-button>
    `
  }

  #renderPreviousButton() {
    return html`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page === 1}
        @click=${() => this.#handlePageChange(this.page - 1)}
      >
        <gds-icon-chevron-left-small size="l"></gds-icon-chevron-left-small>
      </gds-button>
    `
  }

  #renderNextButton() {
    const pageCount = this.#pageCount

    return html`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page === pageCount}
        @click=${() => this.#handlePageChange(this.page + 1)}
      >
        <gds-icon-chevron-right-small size="l"></gds-icon-chevron-right-small>
      </gds-button>
    `
  }

  #renderJumpLastButton() {
    const pageCount = this.#pageCount

    return html`
      <gds-button
        size="small"
        rank="secondary"
        ?disabled=${this.page === pageCount}
        @click=${() => this.#handlePageChange(pageCount)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `
  }

  #renderNavigationControls() {
    return html`
      ${when(this.jump, () => this.#renderJumpFirstButton())}
      ${this.#renderPreviousButton()} ${this.#renderPageButtons()}
      ${this.#renderNextButton()}
      ${when(this.jump, () => this.#renderJumpLastButton())}
    `
  }

  #renderPageSizeOption(size: number) {
    const isSelected = this.rows === size

    return html`
      <gds-menu-item
        data-value=${size}
        class=${classMap({ selected: isSelected })}
      >
        ${size}
      </gds-menu-item>
    `
  }

  #renderPageSizeMenu() {
    if (this._isMobile) return null

    return html`
      <gds-flex align-items="center" gap="s">
        <gds-text font="detail-book-s" color="neutral-01">
          Items per page
        </gds-text>
        <gds-context-menu @gds-menu-item-click=${this.#handlePageSizeMenuClick}>
          <gds-button slot="trigger" size="small" rank="secondary">
            ${this.rows}
            <gds-icon-chevron-bottom
              slot="trail"
              size="m"
            ></gds-icon-chevron-bottom>
          </gds-button>
          ${this.options.map((size) => this.#renderPageSizeOption(size))}
        </gds-context-menu>
      </gds-flex>
    `
  }

  render() {
    return html`
      <gds-flex align-items="center" align-items="center" gap="xl">
        <gds-flex gap="2xs" align-items="center" class="pages">
          ${this.#renderNavigationControls()}
        </gds-flex>
        ${this.#renderPageSizeMenu()}
      </gds-flex>
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

  #handlePopoverStateChange(e: CustomEvent) {
    if (e.detail.open) {
      const popover = e.target as HTMLElement

      const input = popover.querySelector('gds-input') as HTMLElement

      if (input) {
        requestAnimationFrame(() => {
          input.focus()
        })
      }
    }
  }

  #handleCustomPageInput(e: Event) {
    const input = e.target as HTMLInputElement
    const pageInput = input.closest('gds-input') as HTMLInputElement

    if (pageInput) {
      const pageNum = parseInt(pageInput.value, 10)

      if (pageNum && pageNum >= 1 && pageNum <= this.#pageCount) {
        this.#handlePageChange(pageNum)

        const popover = pageInput.closest('gds-popover')
        if (popover) (popover as any).hide()
      }
    }
  }
}
