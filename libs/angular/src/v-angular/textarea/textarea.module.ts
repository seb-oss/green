import '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'

import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import {
  NggCharacterCountdownDirectiveModule,
} from '@sebgroup/green-angular/src/v-angular/character-countdown'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'

import { NgvTextareaComponent } from './textarea.component'

@NgModule({
  declarations: [NgvTextareaComponent],
  imports: [CommonModule, NgvI18nModule, NggCharacterCountdownDirectiveModule, NggCoreWrapperModule],
  exports: [NgvTextareaComponent],
})
export class NgvTextareaModule {}
