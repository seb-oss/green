import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NgvInputComponent } from './input.component'
import { NgvInputMaskModule } from '@sebgroup/green-angular/src/v-angular/input-mask'
import { NggCharacterCountdownDirectiveModule } from '@sebgroup/green-angular/src/v-angular/character-countdown';

@NgModule({
  declarations: [NgvInputComponent],
  imports: [
    CommonModule,
    NgvI18nModule,
    NgvInputMaskModule,
    ReactiveFormsModule,
    NggCharacterCountdownDirectiveModule,
  ],
  exports: [NgvInputComponent],
})
export class NgvInputModule {}
