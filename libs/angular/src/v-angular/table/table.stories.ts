import { importProvidersFrom } from '@angular/core'
import { TranslocoLoader, TranslocoModule } from '@jsverse/transloco'
import {
  applicationConfig,
  Meta,
  moduleMetadata,
  StoryFn,
} from '@storybook/angular'

import { NgvI18nModule } from '../i18n'
import { TableComponent } from './table.component'
import {
  exampleAlt,
  examplePrimary,
  exampleWithAppendedRows,
} from './table.examples'
import {
  ColumnData,
  ColumnDataWithErrorMessages,
  columns,
  data,
  dataWithErrorMessages,
  manifest,
  mockedAriaLabelsOrderBy,
  mockedFooterData,
} from './table.mock'
import { NgvTableModule } from './table.module'

class TranslocoInlineLoader implements TranslocoLoader {
  getTranslation(_: string) {
    return manifest
  }
}

export default {
  title: 'V-Angular/Table',
  component: TableComponent,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NgvI18nModule)],
    }),
    moduleMetadata({
      imports: [NgvTableModule, TranslocoModule],
    }),
  ],
} as Meta

const mockActions = {
  ngvRowClick: (value?: any) =>
    console.log(
      '%cngvRowClick %o',
      'color: darkcyan; font-weight: bold',
      value,
    ),
  ngvRowSelect: (value?: any) =>
    console.log('%cngvRowSelect:', 'color: blue; font-weight: bold', value),
  ngvOrderBy: (value?: any) =>
    console.log('%cngvOrderBy:', 'color: purple; font-weight: bold', value),
}

const TableStory: StoryFn<TableComponent<ColumnData>> = (args) => ({
  template: /*html*/ `
    <nggv-table
      [selectable]="selectable"
      [tableColumns]="tableColumns"
      [tableData]="tableData"
      [allowLocalSort]="allowLocalSort"
      [ariaLabelsOrderBy]="mockedAriaLabelsOrderBy"
      rowId="id"
      [trThookFn]="trThookFn"
      (ngvRowClick)="ngvRowClick($event)"
      (ngvRowSelect)="ngvRowSelect($event)"
      (ngvOrderBy)="ngvOrderBy($event)">
    </nggv-table>`,
  props: args,
})

const TableStoryAlt: StoryFn<TableComponent<ColumnData>> = (args) => ({
  template: /*html*/ `
    <nggv-table
      [selectable]="selectable"
      [tableColumns]="tableColumns"
      [tableData]="tableData"
      [allowLocalSort]="allowLocalSort"
      rowId="id"
      (ngvRowClick)="ngvRowClick($event)"
      (ngvRowSelect)="ngvRowSelect($event)"
      (ngvOrderBy)="ngvOrderBy($event)">

      <!-- custom td template for status column -->
      <ng-template tableColumn="status" tableColumnTarget="td" let-status="$implicit.status">
        <div class="gds-badge" [ngClass]="{
          'gds-badge--error': status === 'Declined',
          'gds-badge--success': status === 'Booked',
          'gds-badge--info': status === 'Waiting'
        }">{{ status }}</div>
      </ng-template>

      <!-- custom th template for status column -->
      <ng-template tableColumn="status" tableColumnTarget="th" let-label="$implicit.label">
        <div *transloco="let t" class="gds-badge gds-badge--info">
          {{ t(label) }}
        </div>
      </ng-template>

      <!-- custom td template for datedBalance column -->
      <ng-template tableColumn="datedBalance" tableColumnTarget="td" let-datedBalance="$implicit.datedBalance">
        {{ datedBalance | number:'4.2-2' }}
      </ng-template>

      <!-- custom tfoot template for footer -->
      <ng-template tableFooter>
        <tr>
          <td colspan="2"></td>
          <td class="gds-table__numeric-col">Total balance: {{ ${mockedFooterData.totalBalance} | number:'4.2-2' }}</td>
          <td></td>
        </tr>
      </ng-template>

    </nggv-table>`,
  props: args,
})

const TableStoryWithAppendedRows: StoryFn<
  TableComponent<ColumnDataWithErrorMessages>
> = (args) => ({
  template: /*html*/ `
    <nggv-table
      [selectable]="selectable"
      [tableColumns]="tableColumns"
      [tableData]="tableData"
      [allowLocalSort]="allowLocalSort"
      rowId="id"
      (ngvRowClick)="ngvRowClick($event)"
      (ngvRowSelect)="ngvRowSelect($event)"
      (ngvOrderBy)="ngvOrderBy($event)">

      <!-- custom appended rows -->
      <ng-template tableAppendableRows let-errorMessages="$implicit.errorMessages">
        <tr *ngFor="let errorMessage of errorMessages" style="color: red">
          <td></td>
          <td colspan="6">{{ errorMessage | uppercase }}</td>
        </tr>
      </ng-template>

    </nggv-table>`,
  props: args,
})

export const Primary = TableStory.bind({})
Primary.args = {
  tableData: data,
  rowId: 'id',
  selectable: false,
  allowLocalSort: true,
  ngvRowClick: mockActions.ngvRowClick as any,
  ngvRowSelect: mockActions.ngvRowSelect as any,
  ngvOrderBy: mockActions.ngvOrderBy as any,
  tableColumns: columns.primary,
  ariaLabelsOrderBy: mockedAriaLabelsOrderBy,
  trThookFn: undefined,
}
Primary.parameters = {
  docs: { source: { code: examplePrimary } },
}

export const Selectable = TableStory.bind({})
Selectable.args = {
  ...Primary.args,
  selectable: true,
  trThookFn: (row: any) => {
    console.log('Using custom thook function')
    return `id_${row.id}_${row.currency}`
  },
}

export const WithTemplateRef = TableStoryAlt.bind({})
WithTemplateRef.args = {
  ...Primary.args,
  tableColumns: columns.alt,
}
WithTemplateRef.parameters = {
  docs: { source: { code: exampleAlt } },
}

export const WithAppendedRows = TableStoryWithAppendedRows.bind({})
WithAppendedRows.args = {
  rowId: Selectable.args.rowId,
  selectable: Selectable.args.selectable,
  allowLocalSort: Selectable.args.allowLocalSort,
  tableColumns: Selectable.args.tableColumns,
  ngvRowClick: mockActions.ngvRowClick as any,
  ngvRowSelect: mockActions.ngvRowSelect as any,
  ngvOrderBy: mockActions.ngvOrderBy as any,
  tableData: dataWithErrorMessages,
}
WithAppendedRows.parameters = {
  docs: { source: { code: exampleWithAppendedRows } },
}

const GlobalSortTableStory: StoryFn<TableComponent<ColumnData>> = (args) => {
  // is never reassigned. Use 'const' instead  prefer-const
  const tableData = [...args.tableData]
  const filterData = (value: any) => {
    console.log('Using custom sort function')
    const { property, order } = value
    if (order === 'asc') {
      tableData.sort((a: any, b: any) => (a[property] > b[property] ? 1 : -1))
    } else {
      tableData.sort((a: any, b: any) => (a[property] > b[property] ? -1 : 1))
    }
  }

  return {
    template: /*html*/ `
    <nggv-table
      [selectable]="selectable"
      [tableColumns]="tableColumns"
      [tableData]="tableData"
      [allowLocalSort]="allowLocalSort"
      rowId="id"
      (ngvRowClick)="ngvRowClick($event)"
      (ngvRowSelect)="ngvRowSelect($event)"
      (ngvOrderBy)="ngvOrderBy($event)">
    </nggv-table>`,
    props: {
      ...args,
      ngvOrderBy: (value?: any) => filterData(value),
      tableData: tableData,
    },
  }
}

export const GlobalSort = GlobalSortTableStory.bind({})
GlobalSort.args = {
  ...Primary.args,
  allowLocalSort: false,
}
