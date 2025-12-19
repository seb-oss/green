import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core'

import '@sebgroup/green-core/components/icon/icons/chevron-left.js'
import '@sebgroup/green-core/components/icon/icons/chevron-right.js'
import '@sebgroup/green-core/components/icon/icons/arrow-left.js'

/** The Pagination component is used to separate long sets of data so that it is easier for a user to consume information. To change the current page simply click on the page number. */
@Component({
    selector: 'nggv-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    standalone: false
})
export class PaginationComponent implements OnChanges {
  /** Total size of pagination */
  @Input() size = 0
  /** Selected page */
  @Input() value = 1
  /** First page text */
  @Input() firstText?: string
  /** Last page text */
  @Input() lastText?: string
  /** Next page text */
  @Input() nextText?: string
  /** Offset per page */
  @Input() offset?: number
  /** Number of pages to display*/
  @Input() pagingLength?: number
  /** Previous page text */
  @Input() previousText?: string
  /** Use first and last navigation buttons*/
  @Input() useFirstAndLast?: boolean = true
  /** Use text-based navigation buttons*/
  @Input() useTextNav?: boolean
  /** Use dot-navigation */
  @Input() useDotNav?: boolean
  /** Use 'Go to page' input field */
  @Input() showGoToPage = true
  /** Element class name */
  @Input() className = ''
  /** Element ID */
  @Input() id?: string
  /** Callback on page change */
  @Output() pageNumberChange: EventEmitter<number> = new EventEmitter<number>()

  /** @internal */
  pageNumber = 0
  /** @internal */
  list: Array<number> = []
  /** @internal */
  dotnavList: Array<number> = []
  /** @internal */
  pagingSize = 0
  /** @internal */
  showEllipsisStart = false
  /** @internal */
  showEllipsisEnd = false

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.offset || changes?.size) {
      this.setPagingSize()
    }

    if (changes?.pagingLength || changes?.value) {
      this.generateList()
    }
  }

  /** @internal */
  setPagingSize() {
    const initialOffset: number = this.offset ? this.offset : 10
    this.pagingSize = Math.ceil(Number(this.size) / initialOffset)
    this.generateList()
  }

  /** @internal */
  handleOnChange(value: number): void {
    if (value <= 0) {
      this.pageNumberChange.emit(1)
    } else if (value > this.pagingSize) {
      this.pageNumberChange.emit(this.pagingSize)
    } else {
      this.pageNumberChange.emit(value)
    }
  }

  /** @internal */
  handlePageInput(pageInput: string) {
    this.handleOnChange(Number(pageInput))
  }

  /**
   * Generates an array of the pages that needs to be displayed
   * It depends on the size, offset, and the current value
   */
  private generateList(): void {
    const genList: Array<number> = []
    const length: number = this.pagingLength ? this.pagingLength : 5

    for (let i = 1; i <= this.pagingSize; i++) {
      genList.push(i)
    }

    const medianValue: number = Math.ceil(length / 2)
    let start = 0
    let end = this.pagingSize

    if (length < this.pagingSize) {
      if (this.pagingSize - this.value < medianValue) {
        start = this.pagingSize - length
      } else if (this.value - medianValue > -1) {
        start = this.value - medianValue
      }
      end = start + length
    }
    if (this.useFirstAndLast) {
      if (start == 0) {
        start = 1
        end = start + length
      }

      if (end > this.pagingSize - 1) {
        end = this.pagingSize - 1
        start = Math.max(1, end - length)
      }
    }

    this.dotnavList = genList
    const pagingStart = genList[start]
    const pagingEnd = genList[end - 1]
    this.showEllipsisStart = pagingStart > 2
    this.showEllipsisEnd = pagingEnd < this.pagingSize - 1
    this.list = genList.slice(start, end)
  }
}
