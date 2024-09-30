export type PaginationSize = 'small' | 'large'

export interface IPaginationEvent {
  pageIndex: number
  previousPageIndex: number
}

export interface IPaginationI18n {
  paginationLabel: string
  nextPageLabel: string
  previousPageLabel: string
  firstPageLabel: string
  lastPageLabel: string
  jumpToPageLabel: string
  getPageLabel: (index: number) => string
}

export const PaginationI18n: IPaginationI18n = {
  paginationLabel: 'Pagination',
  nextPageLabel: 'Next page',
  previousPageLabel: 'Previous page',
  firstPageLabel: 'First page',
  lastPageLabel: 'Last page',
  jumpToPageLabel: 'Go to page',
  getPageLabel: (index: number) => {
    return `Page ${index + 1}`
  },
}
