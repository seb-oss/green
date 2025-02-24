import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import {
  FunctionalTranspiler,
  provideTranslocoTranspiler,
} from '@jsverse/transloco'

import { NggvDatepickerModule } from '@sebgroup/green-angular/src/v-angular/datepicker/datepicker.module'
import { InputRoutingModule } from './nggv-date-input-routing.module'
import { InputComponent } from './nggv-date-input.component'

@NgModule({
  declarations: [InputComponent],
  providers: [provideTranslocoTranspiler(FunctionalTranspiler)],
  imports: [CommonModule, InputRoutingModule, NggvDatepickerModule],
})
export class InputModule {}
