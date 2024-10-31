import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggBadgeComponent } from './badge.component'

@NgModule({
  declarations: [NggBadgeComponent],
  imports: [CommonModule],
  exports: [NggBadgeComponent],
})
export class NggBadgeModule {}
