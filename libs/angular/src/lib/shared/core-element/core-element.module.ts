import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NggCoreElementDirective } from './core-element.directive'

@NgModule({
  declarations: [NggCoreElementDirective],
  imports: [CommonModule],
  exports: [NggCoreElementDirective],
})
export class NggCoreWrapperModule {}
