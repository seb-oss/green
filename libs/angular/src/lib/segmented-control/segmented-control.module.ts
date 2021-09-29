import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenSegmentedControlComponent } from './segmented-control.component'
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    GreenSegmentedControlComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
  ],
  exports: [GreenSegmentedControlComponent]
})
export class GreenSegmentedControlModule { }
