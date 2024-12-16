import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NgvBaseControlValueAccessorModule } from './base-control-value-accessor'
import { NgvBreadcrumbsModule } from './breadcrumbs'
import { NgvButtonModule } from './button'
import { NgvCardModule } from './card'
import { NggCharacterCountdownDirectiveModule } from './character-countdown/character-countdown.module'
import { NgvCheckboxModule } from './checkbox'
import { NgvDropdownModule } from './dropdown'
import { NgvTypeaheadModule } from './dropdown/typeahead/typeahead.module'
import { NgvI18nModule } from './i18n'
import { NgvInfoCircleModule } from './info-circle'
import { NgvInputModule } from './input'
import { NggvInputMaskModule } from './input-mask'
import { NgvModalModule } from './modal'
import { NgvRadioModule } from './radio'
import { NgvTextareaModule } from './textarea'
import { NgvTooltipModule } from './tooltip'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NgvBaseControlValueAccessorModule,
    NgvBreadcrumbsModule,
    NgvButtonModule,
    NgvCardModule,
    NggCharacterCountdownDirectiveModule,
    NgvCheckboxModule,
    NgvDropdownModule,
    NgvI18nModule,
    NgvInfoCircleModule,
    NgvInputModule,
    NggvInputMaskModule,
    NgvModalModule,
    NgvRadioModule,
    NgvTextareaModule,
    NgvTooltipModule,
    NgvTypeaheadModule,
    NggCoreWrapperModule,
  ],
})
export class NggvModule {}
