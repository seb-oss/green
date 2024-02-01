import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NggBadgeComponent } from './badge.component'

@NgModule({
  declarations: [NggBadgeComponent],
  imports: [CommonModule],
  exports: [NggBadgeComponent],
})
export class NggBadgeModule {}
