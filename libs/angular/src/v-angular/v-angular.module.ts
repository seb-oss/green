import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvAlertModule } from './alert'
import { NggvBaseControlValueAccessorModule } from './base-control-value-accessor'
import { NggvBreadcrumbsModule } from './breadcrumbs'
import { NggvButtonModule } from './button'
import { NggvCardModule } from './card'
import { NggvCharacterCountdownDirectiveModule } from './character-countdown/character-countdown.module'
import { NggvCheckboxModule } from './checkbox'
import { NggvDatepickerModule } from './datepicker'
import { NggvDragDropModule } from './drag-drop'
import { NggvDropdownModule } from './dropdown'
import { NggvTypeaheadModule } from './dropdown/typeahead/typeahead.module'
import { NggvExternalLinkDirectiveModule } from './external-link'
import { NggvI18nModule } from './i18n'
import { NggvInfoCircleModule } from './info-circle'
import { NggvInputModule } from './input'
import { NggvInputMaskModule } from './input-mask'
import { NggvModalModule } from './modal'
import { NggvPaginationModule } from './pagination'
import { NggvRadioModule } from './radio'
import { NggvSlugPipeModule } from './slug'
import { NggvTableModule } from './table'
import { NggvTabsModule } from './tabs'
import { NggvTextareaModule } from './textarea'
import { NggvToastModule } from './toast'
import { NggvTooltipModule } from './tooltip'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NggvCharacterCountdownDirectiveModule,
    NggCoreWrapperModule,
    NggvSlugPipeModule,
    NggvAlertModule,
    NggvBaseControlValueAccessorModule,
    NggvBreadcrumbsModule,
    NggvButtonModule,
    NggvCardModule,
    NggvCheckboxModule,
    NggvDatepickerModule,
    NggvDragDropModule,
    NggvDropdownModule,
    NggvExternalLinkDirectiveModule,
    NggvI18nModule,
    NggvInfoCircleModule,
    NggvInputMaskModule,
    NggvInputModule,
    NggvModalModule,
    NggvPaginationModule,
    NggvRadioModule,
    NggvTableModule,
    NggvTabsModule,
    NggvTextareaModule,
    NggvToastModule,
    NggvTooltipModule,
    NggvTypeaheadModule,
  ],
})
export class NggvModule {}
