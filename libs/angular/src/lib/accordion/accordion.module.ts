import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggAccordionListItemComponent } from './accordion-list-item.component'
import { NggAccordionComponent } from './accordion.component'

@NgModule({
  imports: [CommonModule],
  exports: [NggAccordionListItemComponent, NggAccordionComponent],
  declarations: [NggAccordionListItemComponent, NggAccordionComponent],
})
export class NggAccordionModule {}
