import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SortableListComponent } from './sortable-list.component'

const routes: Routes = [
  {
    path: '',
    component: SortableListComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SortableListRoutingModule {}
