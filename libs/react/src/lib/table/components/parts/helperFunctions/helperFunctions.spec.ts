import {
  FilterColumn,
  GenericTableRow,
  SortDirection,
} from '../../table-typings'
import {
  filterArrayByColumns,
  onRowSelect,
  paginate,
  RowSelectOutput,
  searchTextByColumns,
  sortArray,
  sumCols,
} from './helperFunctions'

type Data = {
  name: string
  age: number
}

type SortArrayTestCase<T = Data> = {
  statement: string
  sortKey: keyof T
  sortDirection: SortDirection
  result: Array<GenericTableRow<T>>
}

type FilterDataByColumnTestCase<T = Data> = {
  statement: string
  filterColumns: Array<FilterColumn<T>>
  result: Array<GenericTableRow<T>>
}

type SearchTextByColumnTestCase<T = Data> = {
  statement: string
  keyword?: string
  fields?: Array<keyof T>
  result: Array<GenericTableRow<T>>
}

type PaginateTestCase<T = Data> = {
  statement: string
  offset: number | null
  currentPage: number | null
  data: Array<GenericTableRow<T>> | null
  result: Array<GenericTableRow<T>> | null
}

type RowSelectTestCase<T = Data> = {
  statement: string
  event: React.ChangeEvent<HTMLInputElement>
  rowUniqueAccessor: keyof T
  rowId: string
  data: Array<GenericTableRow<T>> | null
  result: RowSelectOutput<T>
}

function getData() {
  return [
    { name: 'rodd', age: 12 },
    { name: 'andy', age: 22 },
    { name: 'andrew', age: 22 },
    { name: 'zodd', age: 32 },
  ]
}

let testData: Array<GenericTableRow>

describe('Table helper functions:', () => {
  beforeEach(() => {
    testData = getData()
  })
  describe('sumCols', () => {
    it('Should calculate the sum of the columns', () => {
      expect(sumCols(1, true, true, true)).toBe(4)
    })
  })

  describe('sortArray', () => {
    const testCases: Array<SortArrayTestCase> = [
      {
        statement: 'Should sort array ascendingly according to name',
        sortKey: 'name',
        sortDirection: SortDirection.ASC,
        result: [
          { name: 'andrew', age: 22 },
          { name: 'andy', age: 22 },
          { name: 'rodd', age: 12 },
          { name: 'zodd', age: 32 },
        ],
      },
      {
        statement: 'Should sort array descendingly according to name',
        sortKey: 'name',
        sortDirection: SortDirection.DESC,
        result: [
          { name: 'zodd', age: 32 },
          { name: 'rodd', age: 12 },
          { name: 'andy', age: 22 },
          { name: 'andrew', age: 22 },
        ],
      },
      {
        statement: 'Should sort array ascendingly according to age',
        sortKey: 'age',
        sortDirection: SortDirection.ASC,
        result: [
          { name: 'rodd', age: 12 },
          { name: 'andy', age: 22 },
          { name: 'andrew', age: 22 },
          { name: 'zodd', age: 32 },
        ],
      },
      {
        statement: 'Should sort array descendingly according to age',
        sortKey: 'age',
        sortDirection: SortDirection.DESC,
        result: [
          { name: 'zodd', age: 32 },
          { name: 'andy', age: 22 },
          { name: 'andrew', age: 22 },
          { name: 'rodd', age: 12 },
        ],
      },
    ]
    testCases.map((item: SortArrayTestCase) => {
      it(item.statement, () => {
        expect(sortArray(testData, item.sortKey, item.sortDirection)).toEqual(
          item.result,
        )
      })
    })
  })

  describe('filterArrayByColumns', () => {
    const testCases: Array<FilterDataByColumnTestCase> = [
      {
        statement: 'Should return original array if filter columns is empty',
        filterColumns: [],
        result: getData(),
      },
      {
        statement: 'Should return filtered array based on filter columns',
        filterColumns: [
          { accessor: 'age', value: 22 },
          { accessor: 'name', value: ['andrew'] },
        ],
        result: [{ age: 22, name: 'andrew' }],
      },
    ]
    testCases.map((item: FilterDataByColumnTestCase) => {
      it(item.statement, () => {
        expect(filterArrayByColumns(testData, item.filterColumns)).toEqual(
          item.result,
        )
      })
    })
  })

  describe('searchTextByColumns', () => {
    const testCases: Array<SearchTextByColumnTestCase> = [
      {
        statement:
          'Should return empty array if keyword and fields are undefined',
        keyword: undefined,
        fields: undefined,
        result: [],
      },
      {
        statement: 'Should return empty array if keyword is undefined',
        keyword: undefined,
        fields: ['age'],
        result: [],
      },
      {
        statement: 'Should return empty array if field defined is not existed',
        keyword: '1',
        fields: ['age2' as any],
        result: [],
      },
      {
        statement:
          'Should return filtered array based on string keyword and fields defined',
        keyword: 'andrew',
        fields: ['name'],
        result: [{ name: 'andrew', age: 22 }],
      },
      {
        statement:
          'Should return filtered array based on numbered keyword and fields defined',
        keyword: 32 as any,
        fields: ['age'],
        result: [{ name: 'zodd', age: 32 }],
      },
    ]
    testCases.map((item: SearchTextByColumnTestCase) => {
      it(item.statement, () => {
        expect(
          searchTextByColumns(
            testData,
            item.keyword as string,
            item.fields as any,
          ),
        ).toEqual(item.result)
      })
    })
  })

  describe('paginate', () => {
    const testCases: Array<PaginateTestCase> = [
      {
        statement: 'Should return original array if offset is null',
        offset: null,
        currentPage: null,
        data: getData(),
        result: getData(),
      },
      {
        statement: 'Should return original array if data is null',
        offset: 1,
        currentPage: null,
        data: null,
        result: null,
      },
      {
        statement: 'Should return original array if data is empty',
        offset: 1,
        currentPage: null,
        data: [],
        result: [],
      },
      {
        statement: 'Should return paginated array',
        offset: 1,
        currentPage: 0,
        data: getData(),
        result: [getData()[0]],
      },
    ]
    testCases.map((item: PaginateTestCase) => {
      it(item.statement, () => {
        expect(
          paginate(
            item.data as any,
            item.offset as any,
            item.currentPage as any,
          ),
        ).toEqual(item.result)
      })
    })
  })

  describe('onRowSelect', () => {
    const testCases: Array<RowSelectTestCase> = [
      {
        statement: 'Should return original array if offset is null',
        event: { target: { checked: true } } as any,
        rowUniqueAccessor: 'name',
        rowId: 'andrew',
        data: null,
        result: {
          data: undefined as any,
          isAllSelected: false,
          isIndeterminate: false,
        },
      },
      {
        statement: 'Should check all if rowId is all',
        event: { target: { checked: true } } as any,
        rowUniqueAccessor: 'name',
        rowId: 'all',
        data: getData(),
        result: {
          data: getData().map((item: GenericTableRow<Data>) => {
            item.checked = true
            return item
          }),
          isAllSelected: true,
          isIndeterminate: false,
        },
      },
      {
        statement: 'Should check selected row',
        event: { target: { checked: true } } as any,
        rowUniqueAccessor: 'name',
        rowId: 'andrew',
        data: getData(),
        result: {
          data: getData().map((item: GenericTableRow<Data>) => {
            if (item.name === 'andrew') {
              item.checked = true
            }
            return item
          }),
          isAllSelected: undefined as any,
          isIndeterminate: true,
        },
      },
    ]
    testCases.map((item: RowSelectTestCase) => {
      it(item.statement, () => {
        expect(
          onRowSelect(
            item.event,
            item.data as any,
            item.rowUniqueAccessor,
            item.rowId,
          ),
        ).toEqual(item.result)
      })
    })
  })
})
