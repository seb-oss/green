import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggDropdownComponent } from './dropdown.component'
import { NggDropdownOptionDirective } from './dropdown-option.directive'
import { NggDropdownButtonDirective } from './dropdown-button.directive'

@NgModule({
  declarations: [
    NggDropdownComponent,
    NggDropdownOptionDirective,
    NggDropdownButtonDirective,
  ],
  imports: [CommonModule],
  exports: [
    NggDropdownComponent,
    NggDropdownOptionDirective,
    NggDropdownButtonDirective,
  ],
})
export class NggDropdownModule {}
