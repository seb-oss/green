import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GreenSegmentedControlModule } from './segmented-control/segmented-control.module'
import { GreenDropdownModule } from './dropdown/dropdown.module'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [GreenSegmentedControlModule, GreenDropdownModule]
})
export class GreenAngularModule {}
