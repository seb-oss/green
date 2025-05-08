import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'

import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NggvTooltipModule } from '@sebgroup/green-angular/src/v-angular/tooltip'
import { NggvInfoCircleComponent } from './info-circle.component'

@NgModule({
  declarations: [NggvInfoCircleComponent],
  imports: [CommonModule, NggCoreWrapperModule, NggvTooltipModule],
  exports: [NggvInfoCircleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggvInfoCircleModule {}
