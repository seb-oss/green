import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgvRadioComponent } from './radio.component'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'

@NgModule({
  declarations: [NgvRadioComponent],
  imports: [CommonModule, NgvI18nModule],
  exports: [NgvRadioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvRadioModule {}
