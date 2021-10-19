import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggSegmentedControlModule } from './segmented-control/segmented-control.module'
import { NggDropdownModule } from './dropdown/dropdown.module'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [NggSegmentedControlModule, NggDropdownModule],
})
export class NggModule {}
