import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggDropdownButtonDirective } from './dropdown-button.directive'
import { NggDropdownOptionDirective } from './dropdown-option.directive'
import { NggDropdownComponent } from './dropdown.component'

/**
 * @deprecated
 * NggDropdown is deprecated in favor of GdsDropdown found in the Core package
 * https://storybook.seb.io/latest/core/?path=/docs/components-dropdown--docs
 */
@NgModule({
  declarations: [
    NggDropdownComponent,
    NggDropdownOptionDirective,
    NggDropdownButtonDirective,
  ],
  imports: [CommonModule, NggCoreWrapperModule],
  exports: [
    NggDropdownComponent,
    NggDropdownOptionDirective,
    NggDropdownButtonDirective,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggDropdownModule {}
