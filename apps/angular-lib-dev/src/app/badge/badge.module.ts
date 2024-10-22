import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NggBadgeModule } from '@sebgroup/green-angular'

import { BadgeRoutingModule } from './badge-routing.module'
import { BadgeComponent } from './badge.component'

@NgModule({
  declarations: [BadgeComponent],
  imports: [CommonModule, BadgeRoutingModule, NggBadgeModule],
})
export class BadgeModule {}
