import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NggCoreWrapperModule } from '@sebgroup/green-angular/src/lib/shared'
import { NgvInfoCircleComponent } from './info-circle.component'
import { NgvTooltipModule } from '@sebgroup/green-angular/src/v-angular/tooltip'

@NgModule({
  declarations: [NgvInfoCircleComponent],
  imports: [CommonModule, NggCoreWrapperModule, NgvTooltipModule],
  exports: [NgvInfoCircleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgvInfoCircleModule {}
