import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggvCardComponent } from './card.component'

@NgModule({
  declarations: [NggvCardComponent],
  imports: [CommonModule],
  exports: [NggvCardComponent],
})
export class NggvCardModule {}
