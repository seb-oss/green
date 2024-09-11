import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgvI18nModule } from '../i18n/i18n.module'
import { NgvTooltipModule } from '../tooltip'

import { NgvDropdownListComponent } from './dropdown-list.component'

@NgModule({
  declarations: [NgvDropdownListComponent],
  imports: [CommonModule, NgvI18nModule, NgvTooltipModule],
  exports: [NgvDropdownListComponent],
})
export class NgvDropdownListModule {}
