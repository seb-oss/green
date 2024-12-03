import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { FormRoutingModule } from './form-routing.module'
import { FormComponent } from './form.component'

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormRoutingModule],
  exports: [],
})
export class FormModule {}
