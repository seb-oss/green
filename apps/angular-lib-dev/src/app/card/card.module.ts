import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CardRoutingModule } from './card-routing.module'
import { CardComponent } from './card.component'
import { NggCardModule } from '@sebgroup/green-angular'

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, CardRoutingModule, NggCardModule],
})
export class CardModule {}
