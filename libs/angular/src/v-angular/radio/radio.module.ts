import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'

import { NgvRadioComponent } from './radio.component'

@NgModule({
  declarations: [NgvRadioComponent],
  imports: [CommonModule, NgvI18nModule],
  exports: [NgvRadioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvRadioModule {}
