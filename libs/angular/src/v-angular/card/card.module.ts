import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NgvCardComponent } from './card.component'

@NgModule({
  declarations: [NgvCardComponent],
  imports: [CommonModule],
  exports: [NgvCardComponent],
})
export class NgvCardModule {}
