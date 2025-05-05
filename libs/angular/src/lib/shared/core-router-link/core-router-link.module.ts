import { NgModule } from '@angular/core'

import { NggCoreRouterLinkDirective } from './core-router-link.directive'

@NgModule({
  declarations: [NggCoreRouterLinkDirective],
  exports: [NggCoreRouterLinkDirective],
})
export class NggCoreRouterLinkModule {}
