import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggCoreWrapperModule } from '../../lib/shared'

import { NgvInfoCircleComponent } from './info-circle.component'

@NgModule({
  declarations: [NgvInfoCircleComponent],
  imports: [CommonModule, NggCoreWrapperModule],
  exports: [NgvInfoCircleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvInfoCircleModule {}
