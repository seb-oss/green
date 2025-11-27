import { Component, Input } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

import { TableHeaderListValueType } from './cell-table.types'

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: '[nggCellTableItem]',
    template: `
    <ng-container [ngSwitch]="valueType">
      <span *ngSwitchCase="'string'">{{ row || '–' }}</span>
      <span *ngSwitchCase="'number'">{{ (row | number) || '–' }}</span>
      <span *ngSwitchCase="'datetime'">{{
        (row | date: 'HH:mm:ss') || '–'
      }}</span>
      <span *ngSwitchCase="'date'">{{
        (row | date: 'YYYY-MM-dd') || '–'
      }}</span>
      <span
        *ngSwitchCase="'custom-html'"
        [innerHtml]="transformHTML(row) || '–'"
      ></span>
      <span *ngSwitchCase="'sign'" [ngClass]="getSignColor(row)">{{
        row || '–'
      }}</span>
      <span *ngSwitchCase="'pct'">{{ row || '–' }}</span>
      <span *ngSwitchCase="'streamSign'" [nggSlidingUnderline]="row">{{
        row || '–'
      }}</span>
      <span *ngSwitchDefault>–</span>
    </ng-container>
  `,
    standalone: false
})
export class CellTableItemComponent {
  @Input() row: any
  @Input() valueType: TableHeaderListValueType = 'string'
  @Input() id = ''

  constructor(private sanitizer: DomSanitizer) {}

  getSignColor = (value: string | number) => {
    if (/[−-]/.test(String(value))) return 'text-danger'
    else if (/[1-9]/.test(String(value))) return 'text-success'
    return ''
  }

  transformHTML(value: string): SafeHtml {
    if (value && value.length) {
      return this.sanitizer.bypassSecurityTrustHtml(value)
    } else {
      return ''
    }
  }
}
