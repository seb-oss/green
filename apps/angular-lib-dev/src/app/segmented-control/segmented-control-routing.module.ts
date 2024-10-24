import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { OptionAComponent } from './option-a/option-a.component'
import { OptionBComponent } from './option-b/option-b.component'
import { SegmentedControlComponent } from './segmented-control.component'

const routes: Routes = [
  {
    path: '',
    component: SegmentedControlComponent,
    children: [
      {
        path: 'option-a',
        component: OptionAComponent,
      },
      {
        path: 'option-b',
        component: OptionBComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegmentedControlRoutingModule {}
