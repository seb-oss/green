import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NgvBaseControlValueAccessorModule } from './base-control-value-accessor'
import { NgvBreadcrumbsModule } from './breadcrumbs'
import { NgvButtonModule } from './button'
import { NgvCardModule } from './card'
import { NggCharacterCountdownDirectiveModule } from './character-countdown/character-countdown.module'
import { NgvCheckboxModule } from './checkbox'
import { NgvDatepickerModule } from './datepicker'
import { NggvDragDropModule } from './drag-drop'
import { NgvDropdownModule } from './dropdown'
import { NgvTypeaheadModule } from './dropdown/typeahead/typeahead.module'
import { NgvExternalLinkDirectiveModule } from './external-link'
import { NgvI18nModule } from './i18n'
import { NgvInfoCircleModule } from './info-circle'
import { NgvInputModule } from './input'
import { NggvInputMaskModule } from './input-mask'
import { NgvModalModule } from './modal'
import { NgvPaginationModule } from './pagination'
import { NgvRadioModule } from './radio'
import { NggSlugPipeModule } from './slug'
import { NgvTableModule } from './table'
import { NgvTabsModule } from './tabs'
import { NgvTextareaModule } from './textarea'
import { NgvToastModule } from './toast'
import { NgvTooltipModule } from './tooltip'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NggCharacterCountdownDirectiveModule,
    NggCoreWrapperModule,
    NggSlugPipeModule,
    NggvDragDropModule,
    NggvInputMaskModule,
    NgvAlertModule,
    NgvBaseControlValueAccessorModule,
    NgvBreadcrumbsModule,
    NgvButtonModule,
    NgvCardModule,
    NgvCheckboxModule,
    NgvDatepickerModule,
    NgvDropdownModule,
    NgvExternalLinkDirectiveModule,
    NgvI18nModule,
    NgvInfoCircleModule,
    NgvInputModule,
    NgvModalModule,
    NgvPaginationModule,
    NgvRadioModule,
    NgvTableModule,
    NgvTabsModule,
    NgvTextareaModule,
    NgvToastModule,
    NgvTooltipModule,
    NgvTypeaheadModule,
  ],
})
export class NggvModule {}
