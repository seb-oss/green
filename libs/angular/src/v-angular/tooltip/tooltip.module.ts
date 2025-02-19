import { NgModule } from '@angular/core'

import { NggvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'
import { NggvTooltipDirective } from './tooltip.directive'

@NgModule({
  declarations: [NggvTooltipDirective],
  exports: [NggvTooltipDirective],
  imports: [NggvI18nModule],
})
export class NggvTooltipModule {}
