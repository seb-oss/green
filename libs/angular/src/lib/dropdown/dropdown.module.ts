import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GreenPopoverDirective,
  GreenPopoverElementDirective,
  GreenPopoverOptionDirective,
  GreenPopoverTriggerDirective
} from './popover.directive'
import { GreenDropdownComponent } from './dropdown.component';



@NgModule({
  declarations: [
    GreenPopoverDirective,
    GreenPopoverOptionDirective,
    GreenPopoverElementDirective,
    GreenPopoverTriggerDirective,
    GreenDropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreenPopoverDirective,
    GreenPopoverOptionDirective,
    GreenPopoverElementDirective,
    GreenPopoverTriggerDirective,
    GreenDropdownComponent
  ]
})
export class GreenDropdownModule { }
