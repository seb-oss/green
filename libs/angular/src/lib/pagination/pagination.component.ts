import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'

import {
  IPaginationEvent,
  IPaginationI18n,
  PaginationI18n,
  PaginationSize,
} from '@sebgroup/extract'

@Component({
    selector: 'ngg-pagination',
    templateUrl: './pagination.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class NggPaginationComponent implements OnChanges {
  /** Internationalization labels */
  @Input() i18n: IPaginationI18n = PaginationI18n

  /** Rendered size */
  @Input() size: PaginationSize = 'small'

  /** Amount of pages to be displayed between the first and last  */
  @Input() displayPages = 5

  /** Total amount of items to be paginated */
  @Input() length = 0

  /** Displayed items per page */
  @Input() pageSize = 10

  /** The zero-based page index of the displayed list of pages. Defaulted to 0. */
  @Input()
  get pageIndex(): number {
    return this._pageIndex
  }
  set pageIndex(value: number) {
    this._pageIndex = Math.max(value, 0)
  }
  private _pageIndex = 0

  /** All centric page indicies to be displayed. */
  get pageIndicies(): number[] {
    return this._pageIndicies
  }
  private _pageIndicies: number[] = []

  get totalPages(): number {
    if (!this.pageSize) {
      return 0
    }

    return Math.ceil(this.length / this.pageSize)
  }

  /** Event emitted when a new page index is selected */
  @Output() page = new EventEmitter<IPaginationEvent>()

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.displayPages ||
      changes.pageIndex ||
      changes.pageSize ||
      changes.length
    ) {
      this._pageIndicies = this.getDisplayedPageIndicies()
    }
  }

  hasPrevious(): boolean {
    return this.pageIndex >= 1
  }

  hasNext(): boolean {
    return this.pageIndex < this.totalPages - 1
  }

  gotoFirst(): void {
    if (!this.hasPrevious()) {
      return
    }
    const previous = this.pageIndex
    this.pageIndex = 0
    this.emit(previous)
  }

  gotoLast(): void {
    if (!this.hasNext()) {
      return
    }
    const previous = this.pageIndex
    this.pageIndex = this.totalPages - 1
    this.emit(previous)
  }

  gotoPrevious(): void {
    if (!this.hasPrevious()) {
      return
    }
    const previous = this.pageIndex
    this.pageIndex = previous - 1
    this.emit(previous)
  }

  gotoNext(): void {
    if (!this.hasNext()) {
      return
    }
    const previous = this.pageIndex
    this.pageIndex = previous + 1
    this.emit(previous)
  }

  goto(index: number): void {
    if (index === this.pageIndex || index < 0 || index >= this.totalPages) {
      return
    }
    const previous = this.pageIndex
    this.pageIndex = index
    this.emit(previous)
  }

  private emit(previous: number) {
    this._pageIndicies = this.getDisplayedPageIndicies()
    this.page.emit({ pageIndex: this.pageIndex, previousPageIndex: previous })
  }

  private getDisplayedPageIndicies(): number[] {
    // Do not render
    if (this.totalPages <= 1) {
      return []
    }

    // All pages can fit
    if (this.totalPages <= this.displayPages)
      return [...Array(this.totalPages - 2).keys()].map((index) => index + 1)

    // Only first & last
    if (this.totalPages === 2) return []

    return this.getCenteredPageIndicies()
  }

  /**
   * Find X (displayPages) amount of page indicies that are centered from the currently selected page index,
   * but exclude the first and last indicies if they are within the range.
   */
  private getCenteredPageIndicies(): number[] {
    const pages: number[] = []

    if (this.pageIndex === 0) {
      pages.push(this.pageIndex + 1)
    } else if (this.pageIndex === this.totalPages - 1) {
      pages.push(this.pageIndex - 1)
    } else {
      pages.push(this.pageIndex)
    }

    const addAfter = () => {
      const next = pages[pages.length - 1] + 1
      if (next < this.totalPages - 1 && counter > 0) {
        pages.push(next)
        return true
      }
      return false
    }
    const addBefore = () => {
      const previous = pages[0] - 1
      if (previous > 0 && counter > 0) {
        pages.unshift(previous)
        return true
      }
      return false
    }

    let counter = this.displayPages - 1
    while (counter > 0) {
      const addedAfter = addAfter()
      if (addedAfter) counter--

      const addedBefore = addBefore()
      if (addedBefore) counter--

      if (!addedAfter && !addedBefore) break
    }

    return pages
  }
}
