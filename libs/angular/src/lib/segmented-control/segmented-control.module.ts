import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { NggSegmentedControlComponent } from './segmented-control.component'

@NgModule({
  declarations: [NggSegmentedControlComponent],
  imports: [RouterModule, CommonModule],
  exports: [NggSegmentedControlComponent],
})
export class NggSegmentedControlModule {}
