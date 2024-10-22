import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NggDropdownModule } from '@sebgroup/green-angular'

import { DropdownRoutingModule } from './dropdown-routing.module'
import { DropdownComponent } from './dropdown.component'

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    NggDropdownModule,
    DropdownRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
})
export class DropdownModule {}
