import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggSegmentedControlModule } from './segmented-control/segmented-control.module'
import { NggDropdownModule } from './dropdown/dropdown.module'
import { NggDatepickerModule } from './datepicker/datepicker.module'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [NggSegmentedControlModule, NggDropdownModule, NggDatepickerModule],
})
export class NggModule {}
