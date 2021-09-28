import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentedControlRoutingModule } from './segmented-control-routing.module';
import { SegmentedControlComponent } from './segmented-control.component';
import { OptionAComponent } from './option-a/option-a.component';
import { OptionBComponent } from './option-b/option-b.component';
// eslint-disable-next-line
import { GreenSegmentedControlModule } from '@sebgroup/green-angular';


@NgModule({
  declarations: [
    SegmentedControlComponent,
    OptionAComponent,
    OptionBComponent
  ],
  imports: [
    CommonModule,
    GreenSegmentedControlModule,
    SegmentedControlRoutingModule
  ],
  exports: [OptionAComponent, OptionBComponent]
})
export class SegmentedControlModule { }
