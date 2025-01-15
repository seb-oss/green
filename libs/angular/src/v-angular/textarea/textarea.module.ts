import '@sebgroup/green-core/components/icon/icons/triangle-exclamation.js'

import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvCharacterCountdownDirectiveModule } from '@sebgroup/green-angular/src/v-angular/character-countdown'
import { NggvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvTextareaComponent } from './textarea.component'

@NgModule({
  declarations: [NggvTextareaComponent],
  imports: [
    CommonModule,
    NggvI18nModule,
    NggvCharacterCountdownDirectiveModule,
    NggCoreWrapperModule,
  ],
  exports: [NggvTextareaComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggvTextareaModule {}
