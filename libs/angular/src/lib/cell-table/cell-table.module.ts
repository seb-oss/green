import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggCellTableComponent } from './cell-table.component'
import { CellTableItemComponent } from './cell-table-item.component'
import { SlidingUnderlineDirective } from './cell-underline.directive'

@NgModule({
  imports: [CommonModule],
  exports: [NggCellTableComponent],
  declarations: [
    NggCellTableComponent,
    CellTableItemComponent,
    SlidingUnderlineDirective,
  ],
})
export class NggCellTableModule {}
