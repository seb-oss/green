import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { GdsCoreElementDirective } from './core-element.directive'

@NgModule({
  declarations: [GdsCoreElementDirective],
  imports: [CommonModule],
  exports: [GdsCoreElementDirective],
})
export class GdsCoreElementModule {}
