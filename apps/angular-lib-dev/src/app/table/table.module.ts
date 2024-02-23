import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TableComponent } from './table.component'
import { TableRoutingModule } from './table-routing.module'
import { NggCellTableModule } from '@sebgroup/green-angular'

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, NggCellTableModule, TableRoutingModule],
  exports: [],
})
export class TableModule {}
