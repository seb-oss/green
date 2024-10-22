import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NggCellTableModule } from '@sebgroup/green-angular'

import { TableRoutingModule } from './table-routing.module'
import { TableComponent } from './table.component'

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, NggCellTableModule, TableRoutingModule],
  exports: [],
})
export class TableModule {}
