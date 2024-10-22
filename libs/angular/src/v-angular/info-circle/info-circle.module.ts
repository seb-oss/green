import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NgvTooltipModule } from '@sebgroup/green-angular/src/v-angular/tooltip'

import { NgvInfoCircleComponent } from './info-circle.component'

@NgModule({
  declarations: [NgvInfoCircleComponent],
  imports: [CommonModule, NggCoreWrapperModule, NgvTooltipModule],
  exports: [NgvInfoCircleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvInfoCircleModule {}
