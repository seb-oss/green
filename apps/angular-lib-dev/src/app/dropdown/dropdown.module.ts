import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DropdownRoutingModule } from './dropdown-routing.module'
import { DropdownComponent } from './dropdown.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NggDropdownModule } from '@sebgroup/green-angular'

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
