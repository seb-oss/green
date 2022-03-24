import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggDatepickerComponent } from './datepicker.component'
import { NggDropdownModule } from '../dropdown/dropdown.module'

@NgModule({
  declarations: [NggDatepickerComponent],
  imports: [CommonModule, NggDropdownModule],
  exports: [NggDatepickerComponent],
})
export class NggDatepickerModule {}
