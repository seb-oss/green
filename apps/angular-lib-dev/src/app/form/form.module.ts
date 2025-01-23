import { CommonModule } from '@angular/common'
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  RendererFactory2,
} from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import {
  NggCoreFormsModule,
  NggCoreRendererFactory,
} from '@sebgroup/green-angular/src/lib/shared'
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
  providers: [
    {
      // By providing our custom renderer factory, we can use <gds-*> elements without any extra directives.
      // The NggCoreRenderer will handle element name scoping automatically.
      provide: RendererFactory2,
      useClass: NggCoreRendererFactory,
    },
  ],
})
export class FormModule {}
