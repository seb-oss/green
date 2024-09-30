import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SortableListComponent } from './sortable-list.component'
import { SortableListRoutingModule } from './sortable-list-routing.module'
import { NggSortableListModule } from '@sebgroup/green-angular'

@NgModule({
  declarations: [SortableListComponent],
  imports: [CommonModule, NggSortableListModule, SortableListRoutingModule],
  exports: [],
})
export class SortableListModule {}
