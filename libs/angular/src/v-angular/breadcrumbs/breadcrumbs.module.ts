import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { NgvBreadcrumbsComponent } from './breadcrumbs.component'
import { NgvExternalLinkDirectiveModule } from '@sebgroup/green-angular/src/v-angular/external-link'

@NgModule({
  declarations: [NgvBreadcrumbsComponent],
  imports: [CommonModule, NgvExternalLinkDirectiveModule, RouterModule],
  exports: [NgvBreadcrumbsComponent],
})
export class NgvBreadcrumbsModule {}
