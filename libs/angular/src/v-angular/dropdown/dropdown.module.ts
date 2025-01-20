import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvTooltipModule } from '@sebgroup/green-angular/src/v-angular/tooltip'
import { NggvDropdownListComponent } from './dropdown-list/dropdown-list.component'
import { NggvDropdownComponent } from './dropdown.component'
import { NggvTypeaheadModule } from './typeahead/typeahead.module'

@NgModule({
  declarations: [NggvDropdownComponent, NggvDropdownListComponent],
  imports: [
    CommonModule,
    NggCoreWrapperModule,
    NggvTypeaheadModule,
    NggvTooltipModule,
    NggvI18nModule,
  ],
  exports: [NggvDropdownComponent, NggvDropdownListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggvDropdownModule {}
