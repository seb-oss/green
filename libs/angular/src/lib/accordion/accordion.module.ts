import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggAccordionListItemComponent } from './accordion-list-item.component'
import { NggAccordionComponent } from './accordion.component'

/**
 * @deprecated
 * NggAccordion is deprecated in favor of GdsDetails found in the Core package
 * https://storybook.seb.io/latest/core/?path=/docs/components-details--docs
 */
@NgModule({
  imports: [CommonModule],
  exports: [NggAccordionListItemComponent, NggAccordionComponent],
  declarations: [NggAccordionListItemComponent, NggAccordionComponent],
})
export class NggAccordionModule {}
