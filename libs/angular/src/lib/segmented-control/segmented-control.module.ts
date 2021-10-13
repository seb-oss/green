import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggSegmentedControlComponent } from './segmented-control.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [NggSegmentedControlComponent],
  imports: [RouterModule, CommonModule],
  exports: [NggSegmentedControlComponent],
})
export class NggSegmentedControlModule {}
