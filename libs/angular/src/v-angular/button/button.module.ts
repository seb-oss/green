import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { NgvExternalLinkDirectiveModule } from '@sebgroup/green-angular/src/v-angular/external-link'

import { NgvButtonComponent } from './button.component'

@NgModule({
  declarations: [NgvButtonComponent],
  imports: [CommonModule, NgvExternalLinkDirectiveModule, RouterModule],
  exports: [NgvButtonComponent],
})
export class NgvButtonModule {}
