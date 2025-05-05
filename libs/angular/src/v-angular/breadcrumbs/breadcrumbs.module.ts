import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { NggvExternalLinkDirectiveModule } from '@sebgroup/green-angular/src/v-angular/external-link'
import { NggvBreadcrumbsComponent } from './breadcrumbs.component'

@NgModule({
  declarations: [NggvBreadcrumbsComponent],
  imports: [CommonModule, NggvExternalLinkDirectiveModule, RouterModule],
  exports: [NggvBreadcrumbsComponent],
})
export class NggvBreadcrumbsModule {}
