import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NgvCheckboxComponent } from './checkbox.component'

@NgModule({
  declarations: [NgvCheckboxComponent],
  imports: [CommonModule, NgvI18nModule],
  exports: [NgvCheckboxComponent],
})
export class NgvCheckboxModule {}
