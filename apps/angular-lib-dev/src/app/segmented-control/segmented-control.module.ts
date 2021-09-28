import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegmentedControlRoutingModule } from './segmented-control-routing.module';
import { SegmentedControlComponent } from './segmented-control.component';
import { OptionAComponent } from './option-a/option-a.component';
import { OptionBComponent } from './option-b/option-b.component';
import {
  GreenSegmentedControlModule,
} from '../../../../../libs/angular/src/lib/segmented-control/segmented-control.module'


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
  ]
})
export class SegmentedControlModule { }
