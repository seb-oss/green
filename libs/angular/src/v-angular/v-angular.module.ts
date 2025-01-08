import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvBaseControlValueAccessorModule } from './base-control-value-accessor'
import { NggvBreadcrumbsModule } from './breadcrumbs'
import { NggvButtonModule } from './button'
import { NggvCardModule } from './card'
import { NggCharacterCountdownDirectiveModule } from './character-countdown/character-countdown.module'
import { NggvCheckboxModule } from './checkbox'
import { NggvDropdownModule } from './dropdown'
import { NggvTypeaheadModule } from './dropdown/typeahead/typeahead.module'
import { NggvI18nModule } from './i18n'
import { NggvInfoCircleModule } from './info-circle'
import { NggvInputModule } from './input'
import { NggvInputMaskModule } from './input-mask'
import { NggvModalModule } from './modal'
import { NggvRadioModule } from './radio'
import { NggvTextareaModule } from './textarea'
import { NggvTooltipModule } from './tooltip'

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    NggvBaseControlValueAccessorModule,
    NggvBreadcrumbsModule,
    NggvButtonModule,
    NggvCardModule,
    NggCharacterCountdownDirectiveModule,
    NggvCheckboxModule,
    NggvDropdownModule,
    NggvI18nModule,
    NggvInfoCircleModule,
    NggvInputModule,
    NggvInputMaskModule,
    NggvModalModule,
    NggvRadioModule,
    NggvTextareaModule,
    NggvTooltipModule,
    NggvTypeaheadModule,
    NggCoreWrapperModule,
  ],
})
export class NggvModule {}
