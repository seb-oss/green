import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { GreenCoreNgModule } from '@sebgroup/green-core-ng'
import { FormRoutingModule } from './form-routing.module'
import { FormComponent } from './form.component'

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    GreenCoreNgModule,
    FormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
})
export class FormModule {}
