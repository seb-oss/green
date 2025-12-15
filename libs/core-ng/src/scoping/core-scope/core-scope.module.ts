import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { GdsCoreScopeDirective  } from './core-scope.directive'

@NgModule({
  declarations: [GdsCoreScopeDirective],
  imports: [CommonModule],
  exports: [GdsCoreScopeDirective],
})
export class GdsCoreScopeModule {}
