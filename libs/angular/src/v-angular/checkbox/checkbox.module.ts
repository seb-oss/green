import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgvCheckboxComponent } from './checkbox.component'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'

@NgModule({
  declarations: [NgvCheckboxComponent],
  imports: [CommonModule, NgvI18nModule],
  exports: [NgvCheckboxComponent],
})
export class NgvCheckboxModule {}
