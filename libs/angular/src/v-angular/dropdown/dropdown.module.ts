import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgvDropdownComponent } from './dropdown.component'
import { NgvDropdownListComponent } from './dropdown-list/dropdown-list.component'
import { NgvTypeaheadModule } from './typeahead/typeahead.module'
import { NgvTooltipModule } from '@sebgroup/green-angular/src/v-angular/tooltip'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'

@NgModule({
  declarations: [NgvDropdownComponent, NgvDropdownListComponent],
  imports: [CommonModule, NgvTypeaheadModule, NgvTooltipModule, NgvI18nModule],
  exports: [NgvDropdownComponent, NgvDropdownListComponent],
})
export class NgvDropdownModule {}
