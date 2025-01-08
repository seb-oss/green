import { Observable, of } from 'rxjs';

import { TableColumn } from './table.models';

export type ColumnData = {
  id: string;
  name: string;
  currency: string;
  status: string;
  bookedBalance: number;
  datedBalance: number;
  limit: number;
  unauthorizedUsage: number;
};

export const columns: { primary: TableColumn<ColumnData>[]; alt: TableColumn<ColumnData>[] } = {
  primary: [
    {
      property: 'name',
      label: 'header.name',
      sortable: true,
      ariaLabelSortable: 'Activate to sort Name column in {{sortOrder}} order',
    },
    {
      property: 'currency',
      label: 'header.currency',
      sortable: true,
      ariaLabelSortable: 'Activate to sort Currency column in {{sortOrder}} order',
    },
    { property: 'bookedBalance', label: 'header.bookedbalance', valueType: 'numeric', sortable: true },
    { property: 'datedBalance', label: 'header.datedbalance', valueType: 'numeric', sortable: true },
    { property: 'limit', label: 'header.limit', valueType: 'numeric', sortable: true },
    {
      property: 'unauthorizedUsage',
      label: 'header.unauthorizedusage',
      valueType: 'numeric',
      order: 'desc',
      sortable: true,
    },
  ],
  alt: [
    { property: 'name', label: 'header.name', sortable: true }, // col 1
    { property: 'currency', label: 'header.currency', sortable: true }, // col 2
    { property: 'datedBalance', label: 'header.datedbalance', valueType: 'numeric', sortable: true }, // col 3
    { property: 'status', label: 'header.status', sortable: true }, // col 4
  ],
};

export const manifest: Observable<Record<string, string>> = of({
  'header.name': 'Name',
  'header.currency': 'Ccy',
  'header.status': 'Booked status',
  'header.bookedbalance': 'Booked balance',
  'header.datedbalance': 'Value dated balance',
  'header.limit': 'Limit',
  'header.unauthorizedusage': 'Unauthorized usage',
});

export const data: ColumnData[] = [
  {
    id: '0',
    name: 'Capitalized CPH ODFlex 160209',
    currency: 'DKK',
    status: 'Booked',
    bookedBalance: 80000,
    datedBalance: 80000,
    limit: 2000,
    unauthorizedUsage: 30000,
  },
  {
    id: '1',
    name: 'Capitalized CPH ODFlex 160209',
    currency: 'GBP',
    status: 'Waiting',
    bookedBalance: 6000,
    datedBalance: 5000,
    limit: 1000,
    unauthorizedUsage: 5000,
  },
  {
    id: '2',
    name: 'Capitalized CPH ODFlex 160209',
    currency: 'USD',
    status: 'Declined',
    bookedBalance: 300000,
    datedBalance: 40000,
    limit: 80000,
    unauthorizedUsage: 0,
  },
  {
    id: '3',
    name: 'Shiny Curtain Super 3000',
    currency: 'EUR',
    status: 'Booked',
    bookedBalance: 617000,
    datedBalance: 44400,
    limit: 88000,
    unauthorizedUsage: 29,
  },
  {
    id: '4',
    name: 'Extra Strict 230517',
    currency: 'AUD',
    status: 'Waiting',
    bookedBalance: 1003,
    datedBalance: 898900,
    limit: 4003,
    unauthorizedUsage: 13,
  },
];

export type ColumnDataWithErrorMessages = ColumnData & { errorMessages: string[] };

export const dataWithErrorMessages: ColumnDataWithErrorMessages[] = [
  {
    id: '0',
    name: 'Capitalized CPH ODFlex 160209',
    currency: 'DKK',
    status: 'Booked',
    bookedBalance: 80000,
    datedBalance: 80000,
    limit: 2000,
    unauthorizedUsage: 30000,
    errorMessages: [],
  },
  {
    id: '1',
    name: 'Capitalized CPH ODFlex 160209',
    currency: 'GBP',
    status: 'Waiting',
    bookedBalance: 6000,
    datedBalance: 5000,
    limit: 1000,
    unauthorizedUsage: 5000,
    errorMessages: ['Invalid Amount'],
  },
  {
    id: '2',
    name: 'Capitalized CPH ODFlex 160209',
    currency: 'USD',
    status: 'Declined',
    bookedBalance: 300000,
    datedBalance: 40000,
    limit: 80000,
    unauthorizedUsage: 0,
    errorMessages: ['Invalid Amount', 'Invalid Name'],
  },
];

export const mockedFooterData = {
  totalBalance: 125000,
};

export const mockedAriaLabelsOrderBy = {
  asc: 'Ascending',
  desc: 'Descending',
};
