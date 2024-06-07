import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { A11yModule } from '@angular/cdk/a11y'
import {
  NggModalBodyComponent,
  NggModalComponent,
  NggModalFooterComponent,
  NggModalHeaderComponent,
} from './modal.component'
import { NggModalHeaderDirective } from './modal-header.directive'
import { NggModalFooterDirective } from './modal-footer.directive'

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

@NgModule({
  imports: [A11yModule, CommonModule],
  exports: EXPORTS,
  declarations: DECLARATIONS,
})
export class NggModalModule {}
