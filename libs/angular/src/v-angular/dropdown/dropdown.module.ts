import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NgvTooltipModule } from '@sebgroup/green-angular/src/v-angular/tooltip'
import { NgvDropdownListComponent } from './dropdown-list/dropdown-list.component'
import { NgvDropdownComponent } from './dropdown.component'
import { NgvTypeaheadModule } from './typeahead/typeahead.module'

@NgModule({
  declarations: [NgvDropdownComponent, NgvDropdownListComponent],
  imports: [CommonModule, NgvTypeaheadModule, NgvTooltipModule, NgvI18nModule],
  exports: [NgvDropdownComponent, NgvDropdownListComponent],
})
export class NgvDropdownModule {}
