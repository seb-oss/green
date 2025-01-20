import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { TranslocoModule } from '@jsverse/transloco'

import { TableComponent } from './table.component'
import {
  TableAppendableRowsTemplateDirective,
  TableDirective,
  TableFooterTemplateDirective,
  TableTemplateDirective,
} from './table.directive'
import { TrThookPipe } from './tr-thook.pipe'

@NgModule({
  declarations: [
    TableComponent,
    TableDirective,
    TableTemplateDirective,
    TableFooterTemplateDirective,
    TableAppendableRowsTemplateDirective,
  ],
  imports: [CommonModule, ReactiveFormsModule, TranslocoModule, TrThookPipe],
  exports: [
    TableComponent,
    TableTemplateDirective,
    TableFooterTemplateDirective,
    TableAppendableRowsTemplateDirective,
  ],
})
export class NggvTableModule {}
