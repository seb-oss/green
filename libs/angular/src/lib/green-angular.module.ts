import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggAccordionModule } from './accordion'
import { NggBadgeModule } from './badge/badge.module'
import { NggButtonModule } from './button/button.module'
import { NggCellTableModule } from './cell-table'
import { NggContextMenuModule } from './context-menu'
import { NggDatepickerModule } from './datepicker/datepicker.module'
import { NggDropdownModule } from './dropdown/dropdown.module'
import { NggInPageWizardModule } from './in-page-wizard'
import { NggModalModule } from './modal'
import { NggProgressCircleModule } from './progress-circle/progress-circle.module'
import { NggSegmentedControlModule } from './segmented-control/segmented-control.module'
import { NggSharedModule } from './shared/shared.module'
import { NggSliderModule } from './slider/slider.module'
import { NggSortableListModule } from './sortable-list/sortable-list.module'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NggAccordionModule,
    NggBadgeModule,
    NggButtonModule,
    NggDatepickerModule,
    NggDropdownModule,
    NggModalModule,
    NggProgressCircleModule,
    NggSegmentedControlModule,
    NggSliderModule,
    NggContextMenuModule,
    NggInPageWizardModule,
    NggCellTableModule,
    NggSharedModule,
    NggSortableListModule,
  ],
})
export class NggModule {}
