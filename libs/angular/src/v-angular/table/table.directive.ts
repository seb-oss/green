import { Directive, HostBinding, Input, TemplateRef } from '@angular/core'

const enum ColumnCSSClass {
  Primary = 'gds-table__primary-col',
  Sortable = 'gds-table__sortable-col',
  Numeric = 'gds-table__numeric-col',
  Negative = 'gds-table__negative-col',
  Ascending = 'gds-table__sortable-col--asc',
  Descending = 'gds-table__sortable-col--desc',
}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[columnType]',
    standalone: false
})
export class TableDirective {
  @Input() columnType: 'numeric' | 'text' | undefined = 'text'
  @Input() sortable?: boolean
  @Input() sortOrder?: 'desc' | 'asc'
  @Input() value: any

  @HostBinding('attr.data-thook') @Input() thook: string | null | undefined =
    'table'

  @HostBinding('class.' + ColumnCSSClass.Numeric) get numericColumn(): boolean {
    return this.columnType === 'numeric'
  }

  @HostBinding('class.' + ColumnCSSClass.Sortable) get isSortable(): boolean {
    return !!this.sortable
  }

  @HostBinding('class.' + ColumnCSSClass.Ascending)
  get orderAscending(): boolean {
    return this.sortOrder === 'asc' && !!this.sortable
  }

  @HostBinding('class.' + ColumnCSSClass.Descending)
  get orderDescending(): boolean {
    return this.sortOrder === 'desc' && !!this.sortable
  }

  @HostBinding('class.' + ColumnCSSClass.Negative)
  get negativeValue(): boolean {
    if (!isNaN(this.value)) return +this.value < 0
    return false
  }
}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[tableColumn]',
    standalone: false
})
export class TableTemplateDirective<K = string> {
  @Input() tableColumn!: K
  @Input() tableColumnTarget?: 'th' | 'td' | 'both' = 'both'

  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[tableFooter]',
    standalone: false
})
export class TableFooterTemplateDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}

@Directive({
    // eslint-disable-next-line @angular-eslint/directive-selector
    selector: '[tableAppendableRows]',
    standalone: false
})
export class TableAppendableRowsTemplateDirective {
  constructor(public templateRef: TemplateRef<any>) {}
}
