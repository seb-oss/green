import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggDropdownComponent } from './dropdown.component'
import { NggPopoverElementDirective } from './popover-element.directive'
import { NggPopoverOptionDirective } from './popover-option.directive'
import { NggPopoverTriggerDirective } from './popover-trigger.directive'
import { NggPopoverDirective } from './popover.directive'

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
