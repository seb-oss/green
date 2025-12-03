import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { NggCoreFormsModule } from '@sebgroup/green-angular/src/lib/shared'
import { SCOPE_RESOLVER } from '@sebgroup/green-angular/src/lib/shared/scope-resolver'
import { GreenCoreNgModule } from '@sebgroup/green-core-ng'
import { getScopedTagName } from '@sebgroup/green-core/scoping'
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
