import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CardRoutingModule } from './card-routing.module'
import { CardComponent } from './card.component'
import { NggCardModule } from 'libs/angular/src/lib/card/card.module'

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, CardRoutingModule, NggCardModule],
})
export class CardModule {}
