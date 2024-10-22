import { NgModule } from '@angular/core'
import { NgvI18nModule } from '@sebgroup/green-angular/src/v-angular/i18n'

import { NgvTooltipDirective } from './tooltip.directive'

@NgModule({
  declarations: [NgvTooltipDirective],
  exports: [NgvTooltipDirective],
  imports: [NgvI18nModule],
})
export class NgvTooltipModule {}
