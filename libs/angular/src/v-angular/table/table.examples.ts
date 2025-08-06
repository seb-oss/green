export const examplePrimary = `
import { TableColumn } from '@sebgroup/nggv-table';

@Component({
  selector: 'app-table-implementation',
  template: \`
    <nggv-table
      [tableColumns]="tableColumns"
      [tableData]="tableData"
      rowId="id"
      (rowClicked)="rowClicked($event)"
      (rowsSelected)="rowsSelected($event)">
    </nggv-table>\`
})
export class TableImplementationComponent {
  tableColumns: Array<TableColumn> = [
    { property: 'name', label: 'Name', sortable: true },
    { property: 'currency', label: 'Ccy', sortable: true },
    { property: 'bookedBalance', label: 'Booked balance', valueType: 'numeric', sortable: true },
    { property: 'datedBalance', label: 'Value dated balance', valueType: 'numeric', sortable: true },
    { property: 'limit', label: 'Limit', valueType: 'numeric', sortable: true },
    { property: 'unauthorizedUsage', label: 'Unauthorized usage', valueType: 'numeric', order: 'desc', sortable: true }
  ];
  tableData: Array<any> = [
    { id: '0', name: 'Capitalized CPH ODFlex 160209', currency: 'DKK', status: 'Booked', bookedBalance: 80000, datedBalance: 80000, limit: 2000, unauthorizedUsage: 30000 },
    { id: '1', name: 'Capitalized CPH ODFlex 160209', currency: 'GBP', status: 'Waiting', bookedBalance: 6000, datedBalance: 5000, limit: 1000, unauthorizedUsage: 5000 },
    { id: '2', name: 'Capitalized CPH ODFlex 160209', currency: 'USD', status: 'Declined', bookedBalance: 300000, datedBalance: 40000, limit: 80000, unauthorizedUsage: 0 },
    // ...
  ];

  rowClicked(event: any) {
    console.log(value);
  }

  rowsSelected(event: any) {
    console.log(value);
  }
}`

export const exampleAlt = `
import { OnInit } from '@angular/core';
import { TableColumn } from '@sebgroup/nggv-table';

@Component({
  selector: 'app-table-implementation',
  template: \`
    <nggv-table
      [tableColumns]="tableColumns"
      [tableData]="tableData"
      rowId="id"
      (rowClicked)="rowClicked($event)"
      (rowsSelected)="rowsSelected($event)">

      <!-- custom td-template for status column -->
      <ng-template tableColumn="status" tableColumnTarget="td" let-status="$implicit.status">
        <div class="gds-badge" [ngClass]="{
          'gds-badge--error': status === 'Declined',
          'gds-badge--success': status === 'Booked',
          'gds-badge--info': status === 'Waiting'
        }">{{ status }}</div>
      </ng-template>

      <!-- custom th-template for status column -->
      <ng-template tableColumn="status" tableColumnTarget="th" let-label="$implicit.label">
        <div class="gds-badge gds-badge--info">
          {{ label }}
        </div>
      </ng-template>

      <!-- custom td-template for datedBalance column -->
      <ng-template tableColumn="datedBalance" tableColumnTarget="td" let-datedBalance="$implicit.datedBalance">
        {{ datedBalance | number:'4.2-2' }}
      </ng-template>

      <!-- custom tfoot-template for footer -->
      <ng-template tableFooter>
        <tr>
          <td colspan="2"></td>
          <td class="gds-table__numeric-col">Total balance: {{ totalBalance | number:'4.2-2' }}</td>
          <td></td>
        </tr>
      </ng-template>

    </nggv-table>\`
})
export class TableImplementationComponent implements OnInit {
  tableColumns: Array<TableColumn>;
  tableData: Array<any> = [
    { id: '0', name: 'Capitalized CPH ODFlex 160209', currency: 'DKK', status: 'Booked', bookedBalance: 80000, datedBalance: 80000, limit: 2000, unauthorizedUsage: 30000 },
    { id: '1', name: 'Capitalized CPH ODFlex 160209', currency: 'GBP', status: 'Waiting', bookedBalance: 6000, datedBalance: 5000, limit: 1000, unauthorizedUsage: 5000 },
    { id: '2', name: 'Capitalized CPH ODFlex 160209', currency: 'USD', status: 'Declined', bookedBalance: 300000, datedBalance: 40000, limit: 80000, unauthorizedUsage: 0 },
    // ...
  ];

  totalBalance: number = this.tableData.reduce((sum, item) => (sum + item.datedBalance), 0);

  ngOnInit() {
    this.tableColumns = [
      { property: 'name', label: 'Name', sortable: true, columnLabel: 'status' },
      { property: 'currency', label: 'Ccy', sortable: true },
      { property: 'datedBalance', label: 'Value dated balance', valueType: 'numeric', sortable: true },
      { property: 'status', label: 'Booked status', sortable: true }
    ];
  }

  rowClicked(event: any) {
    console.log(event);
  }

  rowsSelected(event: any) {
    console.log(event);
  }
}`

export const exampleWithAppendedRows = `
import { TableColumn } from '@sebgroup/nggv-table';

@Component({
  selector: 'app-table-implementation',
  template: \`
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

    </nggv-table>\`
})
export class TableImplementationComponent {
  tableColumns: Array<TableColumn> = [
    { property: 'name', label: 'Name', sortable: true },
    { property: 'currency', label: 'Ccy', sortable: true },
    { property: 'bookedBalance', label: 'Booked balance', valueType: 'numeric', sortable: true },
    { property: 'datedBalance', label: 'Value dated balance', valueType: 'numeric', sortable: true },
    { property: 'limit', label: 'Limit', valueType: 'numeric', sortable: true },
    { property: 'unauthorizedUsage', label: 'Unauthorized usage', valueType: 'numeric', order: 'desc', sortable: true }
  ];
  tableData: Array<any> = [
    { id: '0', name: 'Capitalized CPH ODFlex 160209', currency: 'DKK', status: 'Booked', bookedBalance: 80000, datedBalance: 80000, limit: 2000, unauthorizedUsage: 30000, errorMessages: [] },
    { id: '1', name: 'Capitalized CPH ODFlex 160209', currency: 'GBP', status: 'Waiting', bookedBalance: 6000, datedBalance: 5000, limit: 1000, unauthorizedUsage: 5000, errorMessages: ['Invalid Amount'] },
    { id: '2', name: 'Capitalized CPH ODFlex 160209', currency: 'USD', status: 'Declined', bookedBalance: 300000, datedBalance: 40000, limit: 80000, unauthorizedUsage: 0, errorMessages: ['Invalid Amount', 'Invalid Name'] },
    // ...
  ];

  rowClicked(event: any) {
    console.log(value);
  }

  rowsSelected(event: any) {
    console.log(value);
  }
}`

export const exampleWithExpandableRows = `
import { TableColumn } from '@sebgroup/nggv-table';

@Component({
  selector: 'app-table-implementation',
  template: \`
    <nggv-table
      rowId="id"
      [expandable]="expandable"
      [expandedByDefault]="expandedByDefault"
      [selectable]="false"
      [subItemsProp]="'subItems'"
      [tableColumns]="tableColumns"
      [tableData]="tableData"
      (ngvRowClick)="ngvRowClick($event)"
    >
    </nggv-table>\`
})
export class TableImplementationComponent {
  tableColumns: Array<TableColumn> = [
    { property: 'name', label: 'Name' },
    { property: 'currency', label: 'Ccy' },
    { property: 'status', label: 'Status' },
    { property: 'bookedBalance', label: 'Booked balance', valueType: 'numeric' },
    { property: 'datedBalance', label: 'Value dated balance', valueType: 'numeric' },
    { property: 'limit', label: 'Limit', valueType: 'numeric' },
    { property: 'unauthorizedUsage', label: 'Unauthorized usage', valueType: 'numeric' }
  ];
  tableData: Array<any> = [
    { id: '111', name: 'Capitalized CPH ODFlex 160209', currency: '', status: '', bookedBalance: 80000, datedBalance: 80000, limit: 2000, unauthorizedUsage: 30000, subItems: [
      { id: '001', name: 'Child CPH ODFlex 111', currency: 'DKK', status: 'Booked', bookedBalance: 80000, datedBalance: 80000, limit: 2000, unauthorizedUsage: 30000 },
      { id: '011', name: 'Child CPH ODFlex 111', currency: 'GBP', status: 'Waiting', bookedBalance: 6000, datedBalance: 5000, limit: 1000, unauthorizedUsage: 5000 }
    ] },
    { id: '222', name: 'Capitalized CPH ODFlex 160209', currency: '', status: '', bookedBalance: 6000, datedBalance: 5000, limit: 1000, unauthorizedUsage: 5000, subItems: [] },
    { id: '333', name: 'Capitalized CPH ODFlex 160209', currency: '', status: '', bookedBalance: 300000, datedBalance: 40000, limit: 80000, unauthorizedUsage: 0, subItems: [
      { id: '003', name: 'Child CPH ODFlex 333', currency: 'DKK', status: 'Booked', bookedBalance: 80000, datedBalance: 80000, limit: 2000, unauthorizedUsage: 30000 },
      { id: '013', name: 'Child CPH ODFlex 333', currency: 'GBP', status: 'Waiting', bookedBalance: 6000, datedBalance: 5000, limit: 1000, unauthorizedUsage: 5000 }
    ] }
    // ...
  ];

  rowClicked(event: any) {
    this.tableData = this.tableData.map((item) => {
      if (item.id === event.id) {
        item.expanded = !item.expanded;
      }
      return item;
    });
  }
}`
