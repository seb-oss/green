import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NgvCheckboxComponent } from './checkbox.component'

@NgModule({
  declarations: [NgvCheckboxComponent],
  imports: [CommonModule, NgvI18nModule, NggCoreWrapperModule],
  exports: [NgvCheckboxComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvCheckboxModule {}
