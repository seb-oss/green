import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggSortableListModule } from '@sebgroup/green-angular'
import { SortableListRoutingModule } from './sortable-list-routing.module'
import { SortableListComponent } from './sortable-list.component'

@NgModule({
  declarations: [SortableListComponent],
  imports: [CommonModule, NggSortableListModule, SortableListRoutingModule],
  exports: [],
})
export class SortableListModule {}
