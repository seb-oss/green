import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ScopedElementDirective } from './scoped-element.directive'

@NgModule({
  declarations: [ScopedElementDirective],
  imports: [CommonModule],
  exports: [ScopedElementDirective],
})
export class NggCoreWrapperModule {}
