import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggCoreElementDirective } from './core-element.directive'

@NgModule({
  declarations: [NggCoreElementDirective],
  imports: [CommonModule],
  exports: [NggCoreElementDirective],
})
export class NggCoreWrapperModule {}
