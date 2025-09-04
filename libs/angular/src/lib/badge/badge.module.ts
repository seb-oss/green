import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggBadgeComponent } from './badge.component'

/**
 * @deprecated
 * NggBadge is deprecated in favor of GdsBadge found in the Core package
 * https://storybook.seb.io/latest/core/?path=/docs/components-badge--docs
 */
@NgModule({
  declarations: [NggBadgeComponent],
  imports: [CommonModule],
  exports: [NggBadgeComponent],
})
export class NggBadgeModule {}
