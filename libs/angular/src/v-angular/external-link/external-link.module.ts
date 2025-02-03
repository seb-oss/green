import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { NggvExternalLinkDirective } from './external-link.directive'

@NgModule({
  declarations: [NggvExternalLinkDirective],
  imports: [CommonModule],
  exports: [NggvExternalLinkDirective],
})
export class NggvExternalLinkDirectiveModule {}
