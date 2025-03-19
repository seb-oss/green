import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NggCoreFormsModule } from '@sebgroup/green-angular/src/lib/shared'
import { FormRoutingModule } from './form-routing.module'
import { FormComponent } from './form.component'

@NgModule({
  declarations: [FormComponent],
  imports: [
    NggCoreFormsModule, // This allows us to use Green Core form controls just like native HTML form controls
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormModule {}
