import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import {
  NggDatepickerModule,
  NggDropdownModule,
  NggModalModule,
} from '@sebgroup/green-angular'

import { ModalsRoutingModule } from './modals-routing.module'
import { ModalsComponent } from './modals.component'

@NgModule({
  declarations: [ModalsComponent],
  imports: [
    CommonModule,
    NggDropdownModule,
    NggDatepickerModule,
    NggModalModule,
    ModalsRoutingModule,
  ],
  exports: [],
})
export class ModalsModule {}
