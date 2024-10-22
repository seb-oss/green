import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NggDatepickerModule } from '@sebgroup/green-angular'

import { DatepickerRoutingModule } from './datepicker-routing.module'
import { DatepickerComponent } from './datepicker.component'

@NgModule({
  declarations: [DatepickerComponent],
  imports: [
    CommonModule,
    NggDatepickerModule,
    DatepickerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class DatepickerModule {}
