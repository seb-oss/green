import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { NggAccordionModule } from './accordion'
import { NggBadgeModule } from './badge/badge.module'
import { NggButtonModule } from './button/button.module'
import { NggContextMenuModule } from './context-menu'
import { NggDatepickerModule } from './datepicker/datepicker.module'
import { NggDropdownModule } from './dropdown/dropdown.module'
import { NggInPageWizardModule } from './in-page-wizard'
import { NggModalModule } from './modal'
import { NggProgressCircleModule } from './progress-circle/progress-circle.module'
import { NggSegmentedControlModule } from './segmented-control/segmented-control.module'
import { NggSharedModule } from './shared/shared.module'
import { NggSliderModule } from './slider/slider.module'
import { NggCellTableModule } from './cell-table'

import { NggBreadcrumbsModule } from './breadcrumbs'
import { NggCardModule } from './card'
import { NggCheckboxModule } from './checkbox'
import { NgvDragDropModule } from './drag-drop'
import { NggInfoCircleModule } from './info-circle'
import { NggInputModule } from './input'
import { NggRadioModule } from './radio'

import { NgvTableModule } from './table'
import { NgvTabsModule } from './tabs'
import { NggTextareaModule } from './textarea'
import { NgvTooltipModule } from './tooltip'
import { NggTypeaheadModule } from './typeahead'

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
    NggBreadcrumbsModule,
    NggCardModule,
    NggCheckboxModule,
    NgvDragDropModule,
    NggInfoCircleModule,
    NggInputModule,
    NggRadioModule,
    NgvTableModule,
    NgvTabsModule,
    NggTextareaModule,
    NgvTooltipModule,
    NggTypeaheadModule,
  ],
})
export class NggModule {}
