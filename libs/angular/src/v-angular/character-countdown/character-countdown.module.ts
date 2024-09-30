import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CharacterCountdownDirective } from './character-countdown.directive'

@NgModule({
  declarations: [CharacterCountdownDirective],
  imports: [CommonModule],
  exports: [CharacterCountdownDirective],
})
export class NggCharacterCountdownDirectiveModule {}
