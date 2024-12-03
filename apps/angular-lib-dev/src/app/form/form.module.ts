import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { FormRoutingModule } from './form-routing.module'
import { FormComponent } from './form.component'

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormModule {}
