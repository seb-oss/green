import { MouseEvent, useMemo } from 'react'
import classNames from 'classnames'

export interface PaginationProps {
  /** Determines if the pagination buttons should be small */
  small?: boolean
  /**The total number of data items to paginate */
  length: number
  /**The number of items to display per page, default 10 */
  pageSize?: number
  /** The current page index, start from 1 */
  pageIndex?: number
  /** The number of sibling pages to display around the current page, default 1 */
  offset?: number
  /**Callback function to handle page changes */
  onClickPage?: (pageIndex: number) => void
}

const chevronArrowLeft = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M206.7 464.6l-183.1-191.1C18.22 267.1 16 261.1 16 256s2.219-11.97 6.688-16.59l183.1-191.1c9.152-9.594 24.34-9.906 33.9-.7187c9.625 9.125 9.938 24.37 .7187 33.91L73.24 256l168 175.4c9.219 9.5 8.906 24.78-.7187 33.91C231 474.5 215.8 474.2 206.7 464.6z" />
  </svg>
)

const chevronArrowRight = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path d="M113.3 47.41l183.1 191.1c4.469 4.625 6.688 10.62 6.688 16.59s-2.219 11.97-6.688 16.59l-183.1 191.1c-9.152 9.594-24.34 9.906-33.9 .7187c-9.625-9.125-9.938-24.38-.7187-33.91l168-175.4L78.71 80.6c-9.219-9.5-8.906-24.78 .7187-33.91C88.99 37.5 104.2 37.82 113.3 47.41z" />
  </svg>
)

const ELLIPSIS = '...'

const getPageRange = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

export const Pagination = ({
  small,
  length,
  pageSize = 10,
  pageIndex = 1,
  offset = 1,
  onClickPage,
}: PaginationProps) => {
  const totalPageCount: number = useMemo(
    () => Math.ceil(length / pageSize),
    [length, pageSize],
  )

  const pageList: Array<string | number> | undefined = useMemo(() => {
    if (offset + 5 >= totalPageCount) {
      return getPageRange(1, totalPageCount)
    }
    const leftEllipsisIndex = Math.max(pageIndex - offset, 1)
    const rightEllipsisIndex = Math.min(pageIndex + offset, totalPageCount)
    const showLeftEllipsis = leftEllipsisIndex > 2
    const showRightEllipsis = rightEllipsisIndex < totalPageCount - 2
    const eachItemCount = 3 + 2 * offset

    // show right elipsis
    if (!showLeftEllipsis && showRightEllipsis) {
      return [...getPageRange(1, eachItemCount), ELLIPSIS, totalPageCount]
    }
    // show left elipsis
    if (showLeftEllipsis && !showRightEllipsis) {
      return [
        1,
        ELLIPSIS,
        ...getPageRange(totalPageCount - eachItemCount + 1, totalPageCount),
      ]
    }
    // show both elipsis
    if (showLeftEllipsis && showRightEllipsis) {
      return [
        1,
        ELLIPSIS,
        ...getPageRange(leftEllipsisIndex, rightEllipsisIndex),
        ELLIPSIS,
        totalPageCount,
      ]
    }
    return []
  }, [offset, pageIndex, totalPageCount])

  const onPrev = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onClickPage && onClickPage(Math.max(pageIndex - 1, 1))
  }

  const onNext = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onClickPage && onClickPage(Math.min(pageIndex + 1, totalPageCount))
  }

  return (
    <nav
      className={classNames('pagination', small ? 'small' : 'large')}
      role="navigation"
      aria-label="Pagination"
    >
      <ul className="gds-reset">
        {pageIndex !== 1 && (
          <li>
            {
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                onClick={onPrev}
                aria-label="Previous Page"
                className="gds-reset"
                role="button"
              >
                {chevronArrowLeft}
              </a>
            }
          </li>
        )}
        {(pageList || []).map((page: string | number, index: number) =>
          page === ELLIPSIS ? (
            <li key={index} aria-hidden="true">
              ...
            </li>
          ) : (
            <li key={index}>
              {
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <a
                  onClick={(e) => {
                    e.preventDefault()
                    onClickPage && onClickPage(page as number)
                  }}
                  className="gds-reset"
                  role="button"
                  aria-current={page === pageIndex ? 'page' : undefined}
                >
                  {page}
                </a>
              }
            </li>
          ),
        )}
        {!!totalPageCount && pageIndex !== totalPageCount && (
          <li>
            {
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                onClick={onNext}
                role="button"
                aria-label="Next Page"
                className="gds-reset"
              >
                {chevronArrowRight}
              </a>
            }
          </li>
        )}
      </ul>
    </nav>
  )
}
