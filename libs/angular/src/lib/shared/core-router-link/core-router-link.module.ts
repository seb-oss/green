import { NgModule } from '@angular/core'

import { NggCoreRouterLinkDirective } from './core-router-link.directive'

/**
 * @deprecated No longer needed when using components from `@sebgroup/green-core-ng`
 */
@NgModule({
  declarations: [NggCoreRouterLinkDirective],
  exports: [NggCoreRouterLinkDirective],
})
export class NggCoreRouterLinkModule {}
