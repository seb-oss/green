import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvRadioComponent } from './radio.component'

@NgModule({
  declarations: [NggvRadioComponent],
  imports: [CommonModule, NggvI18nModule, NggCoreWrapperModule],
  exports: [NggvRadioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggvRadioModule {}
