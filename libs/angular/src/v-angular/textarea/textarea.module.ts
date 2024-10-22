import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NgvTextareaComponent } from './textarea.component'

@NgModule({
  declarations: [NgvTextareaComponent],
  imports: [CommonModule, NgvI18nModule],
  exports: [NgvTextareaComponent],
})
export class NgvTextareaModule {}
