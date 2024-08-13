import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgvI18nModule } from '../i18n/i18n.module'
import { NggTooltipModule } from '../tooltip'

import { DropdownListComponent } from './dropdown-list.component'

@NgModule({
  declarations: [DropdownListComponent],
  imports: [CommonModule, NgvI18nModule, NggTooltipModule],
  exports: [DropdownListComponent],
})
export class NgvDropdownListModule {}
