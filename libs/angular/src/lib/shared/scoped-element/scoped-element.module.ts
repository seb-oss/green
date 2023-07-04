import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NggScopedElementDirective } from './scoped-element.directive'

@NgModule({
  declarations: [NggScopedElementDirective],
  imports: [CommonModule],
  exports: [NggScopedElementDirective],
})
export class NggCoreWrapperModule {}
