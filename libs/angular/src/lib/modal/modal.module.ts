import { A11yModule } from '@angular/cdk/a11y'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggModalFooterDirective } from './modal-footer.directive'
import { NggModalHeaderDirective } from './modal-header.directive'
import {
  NggModalBodyComponent,
  NggModalComponent,
  NggModalFooterComponent,
  NggModalHeaderComponent,
} from './modal.component'

const DECLARATIONS = [
  NggModalComponent,
  NggModalHeaderComponent,
  NggModalBodyComponent,
  NggModalFooterComponent,
  NggModalHeaderDirective,
  NggModalFooterDirective,
]

const EXPORTS = [
  NggModalComponent,
  NggModalHeaderDirective,
  NggModalFooterDirective,
]

/**
 * @deprecated use the dialog from green-core instead.
 */
@NgModule({
  imports: [A11yModule, CommonModule],
  exports: EXPORTS,
  declarations: DECLARATIONS,
})
export class NggModalModule {}
