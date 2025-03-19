import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { NggvExternalLinkDirectiveModule } from '@sebgroup/green-angular/src/v-angular/external-link'
import { NggvButtonComponent } from './button.component'

@NgModule({
  declarations: [NggvButtonComponent],
  imports: [CommonModule, NggvExternalLinkDirectiveModule, RouterModule],
  exports: [NggvButtonComponent],
})
export class NggvButtonModule {}
