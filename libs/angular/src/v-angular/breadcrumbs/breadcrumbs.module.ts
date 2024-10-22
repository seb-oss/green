import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { NgvExternalLinkDirectiveModule } from '@sebgroup/green-angular/src/v-angular/external-link'
import { NgvBreadcrumbsComponent } from './breadcrumbs.component'

@NgModule({
  declarations: [NgvBreadcrumbsComponent],
  imports: [CommonModule, NgvExternalLinkDirectiveModule, RouterModule],
  exports: [NgvBreadcrumbsComponent],
})
export class NgvBreadcrumbsModule {}
