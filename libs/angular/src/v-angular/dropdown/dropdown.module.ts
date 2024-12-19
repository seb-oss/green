import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NgvTooltipModule } from '@sebgroup/green-angular/src/v-angular/tooltip'
import { NgvDropdownListComponent } from './dropdown-list/dropdown-list.component'
import { NgvDropdownComponent } from './dropdown.component'
import { NgvTypeaheadModule } from './typeahead/typeahead.module'

@NgModule({
  declarations: [NgvDropdownComponent, NgvDropdownListComponent],
  imports: [
    CommonModule,
    NggCoreWrapperModule,
    NgvTypeaheadModule,
    NgvTooltipModule,
    NgvI18nModule,
  ],
  exports: [NgvDropdownComponent, NgvDropdownListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvDropdownModule {}
