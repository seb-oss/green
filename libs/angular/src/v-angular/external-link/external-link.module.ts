import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { NgvExternalLinkDirective } from './external-link.directive'

@NgModule({
  declarations: [NgvExternalLinkDirective],
  imports: [CommonModule],
  exports: [NgvExternalLinkDirective],
})
export class NgvExternalLinkDirectiveModule {}
