import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggSegmentedControlModule } from './segmented-control/segmented-control.module'
import { NggDropdownModule } from './dropdown/dropdown.module'
import { NggDatepickerModule } from './datepicker/datepicker.module'
import { NggCardModule } from './card/card.module'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NggSegmentedControlModule,
    NggDropdownModule,
    NggDatepickerModule,
    NggCardModule,
  ],
})
export class NggModule {}
