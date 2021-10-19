import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DropdownRoutingModule } from './dropdown-routing.module'
import { DropdownComponent } from './dropdown.component'
import { ReactiveFormsModule } from '@angular/forms'
import { NggDropdownModule } from '@sebgroup/green-angular'

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    NggDropdownModule,
    DropdownRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [],
})
export class DropdownModule {}
