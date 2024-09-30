import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NgvButtonComponent } from './button.component'
import { NgvExternalLinkDirectiveModule } from '@sebgroup/green-angular/src/v-angular/external-link'

@NgModule({
  declarations: [NgvButtonComponent],
  imports: [CommonModule, NgvExternalLinkDirectiveModule, RouterModule],
  exports: [NgvButtonComponent],
})
export class NgvButtonModule {}
