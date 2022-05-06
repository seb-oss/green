import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggCardComponent } from './card.component'

@NgModule({
  declarations: [NggCardComponent],
  imports: [CommonModule],
  exports: [NggCardComponent],
})
export class NggCardModule {}
