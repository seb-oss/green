import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { BadgeRoutingModule } from './badge-routing.module'
import { BadgeComponent } from './badge.component'
import { NggBadgeModule } from '@sebgroup/green-angular'

@NgModule({
  declarations: [BadgeComponent],
  imports: [CommonModule, BadgeRoutingModule, NggBadgeModule],
})
export class BadgeModule {}
