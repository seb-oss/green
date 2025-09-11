import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { NggSegmentedControlComponent } from './segmented-control.component'

/**
 * @deprecated use the segmented control from green-core instead.
 */
@NgModule({
  declarations: [NggSegmentedControlComponent],
  imports: [RouterModule, CommonModule],
  exports: [NggSegmentedControlComponent],
})
export class NggSegmentedControlModule {}
