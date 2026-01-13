import { localized, msg } from '@lit/localize'
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
 * Centralized density configuration
 */
const DENSITY_CONFIG = {
  compact: {
    button: 'small',
    font: 'detail-book-s',
    gap: 'xl',
    navGap: 'xs',
    input: 'small',
    inputWidth: '140px',
    inputPadding: 'm',
  },
  comfortable: {
    button: 'small',
    font: 'detail-book-s',
    gap: '2xl',
    navGap: 's',
    input: 'small',
    inputWidth: '140px',
    inputPadding: 'm',
  },
  spacious: {
    button: 'medium',
    font: 'detail-book-m',
    gap: '2xl',
    navGap: 's',
    input: 'large',
    inputWidth: '200px',
    inputPadding: 'xl',
  },
} as const

type DensityMode = keyof typeof DENSITY_CONFIG

/**
 * @element gds-pagination
 * @status beta
 *
 * @summary A pagination component with page navigation, configurable rows per page, and responsive layout.
 *
 * @event gds-page-change - Fired when the active page changes.
 * @event gds-rows-change - Fired when the rows per page value changes.
 */
@localized()
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

  /**
   * Sets the active page, initially the first page.
   */
  @property({ type: Number })
  page = 1

  /**
   * Sets the numbers of rows to show, defaults to 10
   */
  @property({ type: Number })
  rows = 10

  @property({ type: Number })
  total = 0

  /**
   * Options array to set the nunber of items per page.
   * Defaults to `[5, 10, 25, 50]`
   */
  @property({ type: Array })
  options = [5, 10, 25, 50]

  /**
   * Enables first and last button
   */
  @property({ type: Boolean })
  jump = false

  /**
   * Controls density mode on pagination
   * Accepts: `comfortable`, `compact`, `spacious`
   */
  @property({ reflect: false })
  density: DensityMode = 'comfortable'

  /**
   * The text summary to display on the left side (e.g. "1-10 of 100").
   * If a slot named "label" is provided, this property is ignored.
   */
  @property()
  label = ''

  @query('#page-input')
  private _elInput?: HTMLElement

  @state()
  private _isMobile = false

  @state()
  private _jumpPopoverOpen = false

  @watchMediaQuery('(max-width: 768px)')
  private _handleMobile(matches: boolean) {
    this._isMobile = matches
  }

  get #pageCount() {
    return Math.ceil(this.total / this.rows)
  }

  get #config() {
    return DENSITY_CONFIG[this.density]
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
          <gds-button
            size="${this.#config.button}"
            rank="tertiary"
            slot="trigger"
            label="${msg('Jump to page')}"
            aria-expanded="${this._jumpPopoverOpen}"
            aria-haspopup="dialog"
          >
            ...
          </gds-button>
          <gds-flex
            flex-direction="column"
            padding="${this.#config.inputPadding}"
            width="${this.#config.inputWidth}"
            max-height="280px"
          >
            <gds-input
              size="${this.#config.input}"
              label="${msg('Go to page')}"
              type="number"
              min="1"
              max="${this.#pageCount}"
              @change=${this.#handleCustomPageInput}
            >
              <gds-button
                size="xs"
                label="${msg('Go')}"
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
    const currentPageLabel = `${msg('Current page')}, ${msg('page')} ${pageNum}`
    const goToPageLabel = `${msg('Go to page')} ${pageNum}`
    const label = isActive ? currentPageLabel : goToPageLabel

    return html`
      <gds-button
        size="${this.#config.button}"
        rank="${isActive ? 'primary' : 'tertiary'}"
        label="${label}"
        aria-current="${isActive ? 'page' : 'false'}"
        @click=${() => this.#handlePageChange(pageNum)}
      >
        ${pageNum}
      </gds-button>
    `
  }

  #renderPageButtons() {
    const pageCount = this.#pageCount
    const visiblePages = this.#getVisiblePages(pageCount)

    return html`${visiblePages.map((page) => this.#renderPageButton(page))}`
  }

  #renderJumpFirstButton() {
    return html`
      <gds-button
        size="${this.#config.button}"
        rank="secondary"
        label="${msg('Go to first page')}"
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
        size="${this.#config.button}"
        rank="secondary"
        label="${msg('Go to previous page')}"
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
        size="${this.#config.button}"
        rank="secondary"
        label="${msg('Go to next page')}"
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
        size="${this.#config.button}"
        rank="secondary"
        label="${msg('Go to last page')}"
        ?disabled=${this.page === pageCount}
        @click=${() => this.#handlePageChange(pageCount)}
      >
        <gds-icon-chevron-double-right size="l"></gds-icon-chevron-double-right>
      </gds-button>
    `
  }

  #renderNavigationControls() {
    return html`
      <gds-flex
        gap="${this.#config.navGap}"
        align-items="center"
        class="navigation-controls"
        justify-content="center; m{flex-end}"
        flex="1"
      >
        ${[
          when(this.jump, () => this.#renderJumpFirstButton()),
          this.#renderPreviousButton(),
        ]}
        <gds-flex gap="4xs" align-items="center">
          ${this.#renderPageButtons()}
        </gds-flex>
        ${[
          this.#renderNextButton(),
          when(this.jump, () => this.#renderJumpLastButton()),
        ]}
      </gds-flex>
    `
  }

  #renderPageSizeOption(size: number) {
    const isSelected = this.rows === size

    return html`
      <gds-menu-item
        data-value=${size}
        class=${classMap({ selected: isSelected })}
        size="${this.#config.button}"
      >
        ${size}
      </gds-menu-item>
    `
  }

  #renderPageSizeMenu() {
    if (this._isMobile) return null
    const rowsLabel = `${msg('Rows per page')}, ${this.rows} ${msg('selected')}`

    return html`
      <gds-flex align-items="center" gap="s">
        <gds-text
          font="${this.#config.font}"
          color="neutral-01"
          id="rows-per-page-label"
        >
          ${msg('Rows per page')}
        </gds-text>
        <gds-context-menu @gds-menu-item-click=${this.#handlePageSizeMenuClick}>
          <gds-button
            slot="trigger"
            size="${this.#config.button}"
            rank="secondary"
            label="${rowsLabel}"
            aria-labelledby="rows-per-page-label"
          >
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

  #renderLabel() {
    if (this._isMobile || !this.label) return null
    return html`
      <gds-text
        font="${this.#config.font}"
        color="neutral-02"
        aria-live="polite"
        aria-atomic="true"
      >
        ${this.label}
      </gds-text>
    `
  }

  render() {
    return html`
      <gds-flex
        align-items="center"
        justify-content="space-between"
        width="100%"
        gap="${this.#config.gap}"
      >
        ${this.#renderLabel()}
        <gds-flex aling-items="center" gap="${this.#config.gap}" flex="1">
          ${[this.#renderNavigationControls(), this.#renderPageSizeMenu()]}
        </gds-flex>
      </gds-flex>
    `
  }

  #handlePageChange(newPage: number) {
    this.dispatchCustomEvent('gds-page-change', {
      detail: { page: newPage },
      bubbles: true,
    })
  }

  #handlePageSizeMenuClick(e: CustomEvent) {
    const item = e.target as HTMLElement
    const limit = parseInt(item.dataset.value || '10')

    if (limit !== this.rows) {
      this.dispatchCustomEvent('gds-rows-change', {
        detail: { rows: limit },
        bubbles: true,
      })
    }
  }

  #handlePopoverStateChange(e: CustomEvent) {
    this._jumpPopoverOpen = e.detail.open

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
