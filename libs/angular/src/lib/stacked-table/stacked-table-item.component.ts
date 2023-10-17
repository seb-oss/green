import { Component, Input } from "@angular/core";
import { TableHeaderListValueType } from "../../models/stacked-table/stacked-table.models";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "[nggStackedTableItem]",
  template: `
    <ng-container [ngSwitch]="valueType">
      <span role="cell" *ngSwitchCase="'string'">{{ row || '–' }}</span>
      <span role="cell" *ngSwitchCase="'number'">{{ (row | number) || '–' }}</span>
      <span role="cell" *ngSwitchCase="'datetime'">{{ (row | date: 'HH:mm:ss') || '–' }}</span>
      <span role="cell" *ngSwitchCase="'date'">{{ (row | date: 'YYYY-MM-dd') || '–' }}</span>
      <span role="cell" *ngSwitchCase="'custom-html'" [innerHtml]="transformHTML(row) || '–'"></span>
      <span role="cell" *ngSwitchCase="'sign'" [ngClass]="getSignColor(row)">{{ row || '–' }}</span>
      <span role="cell" *ngSwitchCase="'pct'">{{ row || '–' }}</span>
      <span role="cell" *ngSwitchCase="'streamSign'" [slidingUnderline]="row">{{ row || '–' }}</span>
      <span role="cell" *ngSwitchDefault>–</span>
    </ng-container>
  `
})
export class StackedTableItemComponent {
  @Input() row: any;
  @Input() valueType: TableHeaderListValueType = "string";
  @Input() id: string = "";

  constructor(private sanitizer: DomSanitizer) {}

  getSignColor = (value: string | number) => {
    if (/[−-]/.test(String(value))) return "text-danger"
    else if (/[1-9]/.test(String(value))) return "text-success"
    return ''
  }
  
  transformHTML(value: string): SafeHtml {
    if (value && value.length) {
      return this.sanitizer.bypassSecurityTrustHtml(value)
    } else {
      return ""
    }
  }
}
