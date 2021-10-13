import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import {
  NggPopoverDirective,
  NggPopoverElementDirective,
  NggPopoverOptionDirective,
  NggPopoverTriggerDirective,
} from './popover.directive'
import { NggDropdownComponent } from './dropdown.component'

@NgModule({
  declarations: [
    NggPopoverDirective,
    NggPopoverOptionDirective,
    NggPopoverElementDirective,
    NggPopoverTriggerDirective,
    NggDropdownComponent,
  ],
  imports: [CommonModule],
  exports: [
    NggPopoverDirective,
    NggPopoverOptionDirective,
    NggPopoverElementDirective,
    NggPopoverTriggerDirective,
    NggDropdownComponent,
  ],
})
export class NggDropdownModule {}
