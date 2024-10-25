import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgvTextareaComponent } from './textarea.component'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggCharacterCountdownDirectiveModule } from '@sebgroup/green-angular/src/v-angular/character-countdown';

@NgModule({
  declarations: [NgvTextareaComponent],
  imports: [CommonModule, NgvI18nModule, NggCharacterCountdownDirectiveModule],
  exports: [NgvTextareaComponent],
})
export class NgvTextareaModule {}
