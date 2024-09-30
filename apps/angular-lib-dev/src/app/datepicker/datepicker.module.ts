import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { DatepickerRoutingModule } from './datepicker-routing.module'
import { DatepickerComponent } from './datepicker.component'
import { NggDatepickerModule } from '@sebgroup/green-angular'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

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
