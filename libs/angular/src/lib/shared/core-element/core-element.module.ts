import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggCoreElementDirective } from './core-element.directive'

/**
 * @deprecated Use `GdsCoreScopeModule` from `@sebgroup/green-core-ng` instead.
 */
@NgModule({
  declarations: [NggCoreElementDirective],
  imports: [CommonModule],
  exports: [NggCoreElementDirective],
})
export class NggCoreWrapperModule {}
