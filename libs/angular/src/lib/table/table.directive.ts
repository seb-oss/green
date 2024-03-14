import { Directive, HostBinding, Input, TemplateRef } from '@angular/core';

const enum ColumnCSSClass {
  Primary = 'sdv-table__primary-col',
  Sortable = 'sdv-table__sortable-col',
  Numeric = 'sdv-table__numeric-col',
  Negative = 'sdv-table__negative-col',
  Ascending = 'sdv-table__sortable-col--asc',
  Descending = 'sdv-table__sortable-col--desc',
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[columnType]',
})
export class TableDirective {
  @Input() columnType: 'numeric' | 'text' | undefined = 'text';
  @Input() sortable?: boolean;
  @Input() sortOrder?: 'desc' | 'asc';
  @Input() value: any;

  @HostBinding('attr.data-thook') @Input() thook = '';

  @HostBinding('class.' + ColumnCSSClass.Numeric) get numericColumn(): boolean {
    return this.columnType === 'numeric';
  }

  @HostBinding('class.' + ColumnCSSClass.Sortable) get isSortable(): boolean {
    return !!this.sortable;
  }

  @HostBinding('class.' + ColumnCSSClass.Ascending) get orderAscending(): boolean {
    return this.sortOrder === 'asc' && !!this.sortable;
  }

  @HostBinding('class.' + ColumnCSSClass.Descending) get orderDescending(): boolean {
    return this.sortOrder === 'desc' && !!this.sortable;
  }

  @HostBinding('class.' + ColumnCSSClass.Negative) get negativeValue(): boolean {
    if (!isNaN(this.value)) return +this.value < 0;
    return false;
  }
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[tableColumn]',
})
export class TableTemplateDirective<K = string> {
  @Input() tableColumn!: K;
  @Input() tableColumnTarget?: 'th' | 'td' | 'both' = 'both';

  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[tableFooter]',
})
export class TableFooterTemplateDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[tableAppendableRows]',
})
export class TableAppendableRowsTemplateDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
