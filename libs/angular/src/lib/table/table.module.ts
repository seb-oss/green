import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslocoModule } from '@ngneat/transloco';

import { TableComponent } from './table.component';
import { TableDirective, TableTemplateDirective, TableFooterTemplateDirective, TableAppendableRowsTemplateDirective } from './table.directive';

@NgModule({
  declarations: [TableComponent, TableDirective, TableTemplateDirective, TableFooterTemplateDirective, TableAppendableRowsTemplateDirective],
  imports: [CommonModule, ReactiveFormsModule, TranslocoModule],
  exports: [TableComponent, TableTemplateDirective, TableFooterTemplateDirective, TableAppendableRowsTemplateDirective],
})
export class NgvTableModule {}
