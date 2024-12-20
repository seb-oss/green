import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import {
  NggCharacterCountdownDirectiveModule,
} from '@sebgroup/green-angular/src/v-angular/character-countdown'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import {
  NgvInputMaskModule,
} from '@sebgroup/green-angular/src/v-angular/input-mask'

import { NgvInputComponent } from './input.component'

@NgModule({
  declarations: [NgvInputComponent],
  imports: [
    CommonModule,
    NgvI18nModule,
    NgvInputMaskModule,
    ReactiveFormsModule,
    NggCharacterCountdownDirectiveModule,
    NggCoreWrapperModule
  ],
  exports: [NgvInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvInputModule {}
