import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggDropdownComponent } from './dropdown.component'
import { NggDropdownOptionDirective } from './dropdown-option.directive'

@NgModule({
  declarations: [NggDropdownComponent, NggDropdownOptionDirective],
  imports: [CommonModule],
  exports: [NggDropdownComponent, NggDropdownOptionDirective],
})
export class NggDropdownModule {}
