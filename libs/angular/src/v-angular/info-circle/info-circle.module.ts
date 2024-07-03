import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggCoreWrapperModule } from '../../lib/shared'

import { InfoCircleComponent } from './info-circle.component'

@NgModule({
  declarations: [InfoCircleComponent],
  imports: [CommonModule, NggCoreWrapperModule],
  exports: [InfoCircleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NggInfoCircleModule {}
