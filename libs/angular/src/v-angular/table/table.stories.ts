/* eslint-disable no-console */
import { importProvidersFrom } from '@angular/core'
import { TranslocoLoader, TranslocoModule } from '@jsverse/transloco'
import { applicationConfig, moduleMetadata } from '@storybook/angular'

import type { Meta, StoryObj } from '@storybook/angular'

import { NggvI18nModule } from '../i18n'
import { TableComponent } from './table.component'
import {
  exampleAlt,
  examplePrimary,
  exampleWithAppendedRows,
  exampleWithExpandableRows,
} from './table.examples'
import {
  ColumnData,
  ColumnDataWithErrorMessages,
  ColumnDataWithListItems,
  columns,
  data,
  dataWithErrorMessages,
  dataWithListItems,
  manifest,
  mockedAriaLabelsOrderBy,
  mockedFooterData,
} from './table.mock'
import { NggvTableModule } from './table.module'

class TranslocoInlineLoader implements TranslocoLoader {
  getTranslation(_: string) {
    return manifest
  }
}

const meta: Meta<TableComponent<ColumnData>> = {
  title: 'V-Angular/Table',
  component: TableComponent,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(NggvI18nModule)],
    }),
    moduleMetadata({
      imports: [NggvTableModule, TranslocoModule],
    }),
  ],
}

export default meta
type Story = StoryObj<TableComponent<ColumnData>>

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

export const Primary: Story = {
  render: (args) => ({
    template: /*html*/ `
    <nggv-table
      [selectable]="selectable"
      [hiddenCheckboxRowIds]="hiddenCheckboxRowIds"
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
  }),
  args: {
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
  },
  parameters: {
    docs: { source: { code: examplePrimary } },
  },
}

export const Selectable: Story = {
  render: Primary.render,
  args: {
    ...Primary.args,
    selectable: true,
    hiddenCheckboxRowIds: ['1', '2', '4'],
    trThookFn: (row: any) => {
      console.log('Using custom thook function')
      return `id_${row.id}_${row.currency}`
    },
  },
}

export const WithTemplateRef: Story = {
  render: (args) => ({
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
  }),
  args: {
    ...Primary.args,
    tableColumns: columns.alt,
  },
  parameters: {
    docs: { source: { code: exampleAlt } },
  },
}

export const WithAppendedRows: Story = {
  render: (args) => ({
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
  }),
  args: {
    rowId: 'id',
    selectable: true,
    allowLocalSort: true,
    tableColumns: columns.primary,
    ngvRowClick: mockActions.ngvRowClick as any,
    ngvRowSelect: mockActions.ngvRowSelect as any,
    ngvOrderBy: mockActions.ngvOrderBy as any,
    tableData: dataWithErrorMessages,
  },
  parameters: {
    docs: { source: { code: exampleWithAppendedRows } },
  },
}

export const WithExpandableRows: Story = {
  render: (args) => ({
    template: /*html*/ `
    <nggv-table
      rowId="id"
      [selectable]="selectable"
      [expandable]="expandable"
      [tableColumns]="tableColumns"
      [tableData]="tableData"
      [subItemsProp]="'subItems'"
      [allowLocalSort]="allowLocalSort"
      (ngvRowClick)="ngvRowClick($event)"
      (ngvRowSelect)="ngvRowSelect($event)"
      (ngvOrderBy)="ngvOrderBy($event)">
        <!-- custom td template for bookedBalance column -->
        <ng-template tableColumn="bookedBalance" tableColumnTarget="td" let-bookedBalance="$implicit.bookedBalance">
          {{ bookedBalance | number:'1.2-2' }}
        </ng-template>
        <!-- custom td template for datedBalance column -->
        <ng-template tableColumn="datedBalance" tableColumnTarget="td" let-datedBalance="$implicit.datedBalance">
          {{ datedBalance | number:'1.2-2' }}
        </ng-template>
        <!-- custom td template for limit column -->
        <ng-template tableColumn="limit" tableColumnTarget="td" let-limit="$implicit.limit">
          {{ limit | number:'1.2-2' }}
        </ng-template>
        <!-- custom td template for unauthorizedUsage column -->
        <ng-template tableColumn="unauthorizedUsage" tableColumnTarget="td" let-unauthorizedUsage="$implicit.unauthorizedUsage">
          {{ unauthorizedUsage | number:'1.2-2' }}
        </ng-template>
    </nggv-table>`,
    props: args,
  }),
  args: {
    rowId: 'id',
    subItemsProp: 'subItems',
    selectable: false,
    expandable: true,
    tableColumns: columns.withExpandableRows,
    tableData: dataWithListItems,
    ngvRowClick: mockActions.ngvRowClick as any,
  },
  parameters: {
    docs: { source: { code: exampleWithExpandableRows } },
  },
}

export const GlobalSort: Story = {
  render: (args) => {
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
  },
  args: {
    ...Primary.args,
    allowLocalSort: false,
  },
}
