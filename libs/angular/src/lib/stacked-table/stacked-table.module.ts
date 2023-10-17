import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggStackedTableComponent } from './stacked-table.component'
import { StackedTableItemComponent } from './stacked-table-item.component'
import { SlidingUnderlineDirective } from './sliding-underline.directive'

@NgModule({
  imports: [CommonModule],
  exports: [NggStackedTableComponent],
  declarations: [NggStackedTableComponent, StackedTableItemComponent, SlidingUnderlineDirective],
})
export class NggStackedTableModule {}
