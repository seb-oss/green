import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggOnScrollDirective } from './on-scroll.directive'

@NgModule({
  declarations: [NggOnScrollDirective],
  imports: [CommonModule],
  exports: [NggOnScrollDirective],
})
export class NggSharedModule {}

export { SCOPE_RESOLVER } from './scope-resolver'
