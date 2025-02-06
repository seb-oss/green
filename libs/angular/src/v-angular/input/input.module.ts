import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvCharacterCountdownDirectiveModule } from '@sebgroup/green-angular/src/v-angular/character-countdown'
import { NggvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvInputMaskModule } from '@sebgroup/green-angular/src/v-angular/input-mask'
import { NggvInputComponent } from './input.component'

@NgModule({
  declarations: [NggvInputComponent],
  imports: [
    CommonModule,
    NggvI18nModule,
    NggvInputMaskModule,
    ReactiveFormsModule,
    NggvCharacterCountdownDirectiveModule,
    NggCoreWrapperModule,
  ],
  exports: [NggvInputComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggvInputModule {}
